import { NextRequest, NextResponse } from "next/server";
import { requireApiUser } from "@/lib/api-auth";
import { apiError, getApiModule, normalizeData } from "@/lib/api-modules";
import { prisma } from "@/lib/prisma";

type Context = {
  params: Promise<{ module: string; id: string }>;
};

const eventItemFieldNames = [
  "itemType",
  "itemName",
  "itemPrice",
  "itemRequiresInventory",
  "itemInventoryQuantity",
  "eventItems"
];

const eventItemTypes = new Set([
  "DIVINATION_SERVICE",
  "RITUAL_SERVICE",
  "FENG_SHUI_SERVICE",
  "COURSE_SERVICE",
  "OIL_DONATION",
  "PHYSICAL_PRODUCT"
]);

type EventItemData = {
  id?: string;
  item: {
    type: string;
    name: string;
    price: number;
    cost: number;
    requiresInventory: boolean;
    active: boolean;
    notes: string | null;
    servicePersonId: string | null;
  };
  inventoryQuantity: number;
};

function booleanValue(value: unknown) {
  return value === true || value === "true" || value === 1 || value === "1";
}

function textValue(value: unknown) {
  if (value === null || value === undefined) return "";
  return String(value).trim();
}

function numberValue(value: unknown) {
  if (value === null || value === undefined || value === "") return 0;
  const number = Number(value);
  return Number.isFinite(number) ? number : Number.NaN;
}

function buildEventItemData(raw: Record<string, unknown>, eventTitle: string): EventItemData | null {
  const itemTypeValue = textValue(raw.itemType ?? raw.type) || "COURSE_SERVICE";
  const itemName = textValue(raw.itemName ?? raw.name);
  const itemPrice = numberValue(raw.itemPrice ?? raw.price);
  const itemCost = numberValue(raw.itemCost ?? raw.cost);
  const servicePersonId = textValue(raw.servicePersonId);
  const requiresInventory =
    itemTypeValue === "OIL_DONATION" ? false : booleanValue(raw.itemRequiresInventory ?? raw.requiresInventory);
  const inventoryQuantity = numberValue(raw.itemInventoryQuantity ?? raw.inventoryQuantity);
  const active = raw.active === undefined ? true : booleanValue(raw.active);
  const hasInput =
    itemName ||
    (Number.isFinite(itemPrice) && itemPrice > 0) ||
    (Number.isFinite(itemCost) && itemCost > 0) ||
    requiresInventory ||
    (Number.isFinite(inventoryQuantity) && inventoryQuantity > 0);

  if (!hasInput) return null;
  if (
    !itemName ||
    !Number.isFinite(itemPrice) ||
    itemPrice < 0 ||
    !Number.isFinite(itemCost) ||
    itemCost < 0 ||
    !Number.isFinite(inventoryQuantity) ||
    inventoryQuantity < 0
  ) {
    throw new Error("event item values are invalid");
  }
  if (requiresInventory && !textValue(raw.id) && inventoryQuantity <= 0) {
    throw new Error("event inventory quantity is required");
  }

  return {
    id: textValue(raw.id) || undefined,
    item: {
      type: eventItemTypes.has(itemTypeValue) ? itemTypeValue : "COURSE_SERVICE",
      name: itemName,
      price: itemPrice,
      cost: itemCost,
      requiresInventory,
      active,
      notes: eventTitle ? `活動：${eventTitle}` : null,
      servicePersonId: servicePersonId || null
    },
    inventoryQuantity
  };
}

function takeEventItemDataList(data: Record<string, unknown>) {
  const eventTitle = String(data.title ?? "").trim();
  const rawEventItems = Array.isArray(data.eventItems) ? data.eventItems : null;

  for (const fieldName of eventItemFieldNames) {
    delete data[fieldName];
  }

  if (!rawEventItems) return [];

  return rawEventItems
    .map((raw) =>
      raw && typeof raw === "object" ? buildEventItemData(raw as Record<string, unknown>, eventTitle) : null
    )
    .filter((item): item is EventItemData => Boolean(item));
}

function validDateFromValue(value: unknown) {
  if (!value) return null;
  const date = value instanceof Date ? value : new Date(String(value));
  if (Number.isNaN(date.getTime())) return null;
  return date;
}

function dateKeyFromValue(value: unknown) {
  const date = validDateFromValue(value);
  if (!date) return null;
  return date.toISOString().slice(0, 10);
}

function dateKeysBetween(startValue: unknown, endValue: unknown) {
  const startKey = dateKeyFromValue(startValue);
  const endKey = dateKeyFromValue(endValue ?? startValue);
  if (!startKey || !endKey) return [];

  const [startYear, startMonth, startDay] = startKey.split("-").map(Number);
  const [endYear, endMonth, endDay] = endKey.split("-").map(Number);
  const current = new Date(Date.UTC(startYear, startMonth - 1, startDay));
  const end = new Date(Date.UTC(endYear, endMonth - 1, endDay));
  if (current.getTime() > end.getTime()) return [];

  const keys: string[] = [];
  while (current.getTime() <= end.getTime()) {
    keys.push(current.toISOString().slice(0, 10));
    current.setUTCDate(current.getUTCDate() + 1);
  }
  return keys;
}

function formatEventDateRange(startValue: unknown, endValue: unknown) {
  const startKey = dateKeyFromValue(startValue);
  const endKey = dateKeyFromValue(endValue ?? startValue);
  if (!startKey) return "";
  return endKey && endKey !== startKey ? `${startKey} 至 ${endKey}` : startKey;
}

function shiftNoteForEvent(event: Record<string, unknown>) {
  const title = String(event.title ?? "").trim();
  const dateRange = formatEventDateRange(event.startsAt, event.endsAt);
  if (!title || !dateRange) return "";
  return `${title}（${dateRange}）`;
}

async function syncShiftRangeNotesForEvent(
  tx: {
    shift: {
      deleteMany: (args: { where: Record<string, unknown> }) => Promise<unknown>;
      createMany: (args: { data: unknown[] }) => Promise<unknown>;
    };
  },
  eventId: string,
  event: Record<string, unknown>,
  previousEvent?: Record<string, unknown> | null
) {
  const notes = shiftNoteForEvent(event);
  const dateKeys = dateKeysBetween(event.startsAt, event.endsAt);
  const legacyNotes = [
    previousEvent ? shiftNoteForEvent(previousEvent) : "",
    previousEvent ? String(previousEvent.title ?? "").trim() : ""
  ].filter(Boolean);
  const previousDateKeys = previousEvent ? dateKeysBetween(previousEvent.startsAt, previousEvent.endsAt) : [];

  await tx.shift.deleteMany({ where: { eventId } });
  if (legacyNotes.length > 0 && previousDateKeys.length > 0) {
    await tx.shift.deleteMany({
      where: {
        eventId: null,
        employeeId: null,
        notes: { in: legacyNotes },
        startsAt: {
          gte: new Date(`${previousDateKeys[0]}T00:00:00`),
          lte: new Date(`${previousDateKeys[previousDateKeys.length - 1]}T23:59:59`)
        }
      }
    });
  }
  if (!notes || dateKeys.length === 0) return;

  await tx.shift.createMany({
    data: dateKeys.map((dateKey) => ({
      eventId,
      type: "ONSITE",
      startsAt: new Date(`${dateKey}T09:00:00`),
      endsAt: new Date(`${dateKey}T18:00:00`),
      location: "",
      notes
    }))
  });
}

async function deleteEventItems(
  tx: {
    inventoryMovement: { deleteMany: (args: { where: { itemId: string } }) => Promise<unknown> };
    saleLine: { deleteMany: (args: { where: { itemId: string } }) => Promise<unknown> };
    item: { delete: (args: { where: { id: string } }) => Promise<unknown> };
  },
  itemIds: string[]
) {
  for (const itemId of itemIds) {
    await tx.inventoryMovement.deleteMany({ where: { itemId } });
    await tx.saleLine.deleteMany({ where: { itemId } });
    await tx.item.delete({ where: { id: itemId } });
  }
}

type RegistrationSaleRecord = {
  id: string;
  eventId: string;
  itemId: string | null;
  saleId: string | null;
  attendeeName: string;
  phone: string | null;
  registeredAt?: unknown;
  paidAmount: unknown;
  paymentMethod?: string | null;
  remittanceRef: string | null;
  event?: { id: string; title: string; items?: { id: string; active: boolean; servicePersonId: string | null }[] } | null;
};

async function syncRegistrationSale(
  tx: {
    event: {
      findUnique: (args: {
        where: { id: string };
        include: { items: { where: { active: true }; orderBy: { createdAt: "asc" } } };
      }) => Promise<{ id: string; title: string; items: { id: string; active: boolean; servicePersonId: string | null }[] } | null>;
    };
    sale: {
      create: (args: Record<string, unknown>) => Promise<{ id: string }>;
      update: (args: Record<string, unknown>) => Promise<{ id: string }>;
      deleteMany: (args: { where: { id: string } }) => Promise<unknown>;
    };
    saleLine: { deleteMany: (args: { where: { saleId: string } }) => Promise<unknown> };
    eventRegistration: { update: (args: Record<string, unknown>) => Promise<unknown> };
  },
  registration: RegistrationSaleRecord,
  isPaid: boolean
) {
  const paidAmount = Number(registration.paidAmount ?? 0);
  if (!isPaid) {
    if (registration.saleId) {
      await tx.saleLine.deleteMany({ where: { saleId: registration.saleId } });
      await tx.sale.deleteMany({ where: { id: registration.saleId } });
      await tx.eventRegistration.update({ where: { id: registration.id }, data: { saleId: null } });
    }
    return;
  }
  if (paidAmount <= 0) throw new Error("paid amount is required");

  const event =
    registration.event ??
    (await tx.event.findUnique({
      where: { id: registration.eventId },
      include: { items: { where: { active: true }, orderBy: { createdAt: "asc" } } }
    }));
  const item = event?.items?.find((eventItem) => eventItem.id === registration.itemId) ?? event?.items?.[0];
  const saleData = {
    soldAt: registration.registeredAt ? new Date(String(registration.registeredAt)) : new Date(),
    customerName: registration.attendeeName,
    servicePersonId: item?.servicePersonId ?? null,
    paymentMethod: registration.paymentMethod || "TRANSFER",
    status: "CLOSED",
    subtotal: paidAmount,
    discount: 0,
    total: paidAmount,
    notes: `活動報名：${event?.title ?? registration.eventId}${registration.remittanceRef ? `／${registration.remittanceRef}` : ""}`,
    lines: item
      ? {
          create: {
            itemId: item.id,
            quantity: 1,
            unitPrice: paidAmount,
            lineTotal: paidAmount
          }
        }
      : undefined
  };

  if (registration.saleId) {
    await tx.saleLine.deleteMany({ where: { saleId: registration.saleId } });
    await tx.sale.update({
      where: { id: registration.saleId },
      data: saleData
    });
    return;
  }

  const sale = await tx.sale.create({ data: saleData });
  await tx.eventRegistration.update({ where: { id: registration.id }, data: { saleId: sale.id } });
}

export async function GET(_request: NextRequest, context: Context) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const { module: slug, id } = await context.params;
  const module = getApiModule(slug);
  if (!module || !module.delegate.findUnique) return apiError("Unknown module", 404);

  const record = await module.delegate.findUnique({
    where: { id },
    include: module.include
  });
  if (!record) return apiError("Record not found", 404);
  return NextResponse.json(record);
}

export async function PATCH(request: NextRequest, context: Context) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const { module: slug, id } = await context.params;
  const module = getApiModule(slug);
  if (!module) return apiError("Unknown module", 404);

  const body = await request.json();
  let data: Record<string, unknown>;
  try {
    data = normalizeData(module, body);
  } catch {
    return apiError("售價與成本不能為負。", 400);
  }
  if (slug === "employees") {
    const tagIds: string[] = Array.isArray(body.tagIds) ? body.tagIds.map(String).filter(Boolean) : [];
    delete data.tagIds;
    data.tags = { set: tagIds.map((tagId) => ({ id: tagId })) };
  }
  if (slug === "events") {
    let itemDataList: ReturnType<typeof takeEventItemDataList>;
    try {
      itemDataList = takeEventItemDataList(data);
    } catch {
      return apiError("請確認活動品項名稱、售價與庫存數量。", 400);
    }
    try {
      const record = await prisma.$transaction(async (tx) => {
        const previousEvent = await tx.event.findUnique({ where: { id } });
        const existingItems = await tx.item.findMany({ where: { eventId: id }, select: { id: true } });
        const existingItemIds = new Set(existingItems.map((item) => item.id));
        const submittedItemIds = new Set(itemDataList.map((itemData) => itemData.id).filter(Boolean));
        const itemIdsToDelete = existingItems
          .map((item) => item.id)
          .filter((itemId) => !submittedItemIds.has(itemId));

        await deleteEventItems(tx as any, itemIdsToDelete);

        const updatedEvent = await tx.event.update({
          where: { id },
          data,
          include: module.include
        });
        await syncShiftRangeNotesForEvent(tx as any, id, updatedEvent as any, previousEvent as any);

        for (const itemData of itemDataList) {
          if (itemData.id && existingItemIds.has(itemData.id)) {
            await tx.item.update({
              where: { id: itemData.id },
              data: itemData.item as any
            });
            continue;
          }

          const item = await tx.item.create({
            data: {
              ...(itemData.item as any),
              eventId: id
            }
          });
          if (itemData.item.requiresInventory && itemData.inventoryQuantity > 0) {
            await tx.inventoryMovement.create({
              data: {
                itemId: item.id,
                type: "PURCHASE",
                quantity: itemData.inventoryQuantity,
                movedAt: new Date(),
                reason: "活動同步新增品項庫存"
              }
            });
          }
        }

        return tx.event.findUnique({
          where: { id: updatedEvent.id },
          include: module.include
        });
      });
      return NextResponse.json(record);
    } catch (error) {
      console.error("Failed to update event", error);
      return apiError("活動儲存失敗，請確認日期與活動品項。", 500);
    }
  }
  if (slug === "event-registrations") {
    const isPaid = booleanValue(body.isPaid);
    delete data.isPaid;
    data.status = isPaid ? "PAID" : "REGISTERED";
    if (!data.itemId) return apiError("請選擇進銷項目。", 400);
    const eventItem = await prisma.item.findFirst({
      where: { id: String(data.itemId), eventId: String(data.eventId), active: true },
      select: { id: true, price: true }
    });
    if (!eventItem) return apiError("請選擇此活動建立的進銷項目。", 400);
    data.paidAmount = Number(eventItem.price);
    try {
      const record = await prisma.$transaction(async (tx) => {
        const registration = await tx.eventRegistration.update({
          where: { id },
          data: data as any,
          include: { event: { include: { items: { where: { active: true }, orderBy: { createdAt: "asc" } } } }, customer: true }
        });
        await syncRegistrationSale(tx as any, registration as any, isPaid);
        return tx.eventRegistration.findUnique({ where: { id }, include: module.include });
      });
      return NextResponse.json(record);
    } catch (error) {
      console.error("Failed to update event registration", error);
      return apiError("活動報名儲存失敗，請確認付款金額。", 500);
    }
  }
  const record = await module.delegate.update({
    where: { id },
    data,
    include: module.include
  });
  return NextResponse.json(record);
}

export async function DELETE(_request: NextRequest, context: Context) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const { module: slug, id } = await context.params;
  const module = getApiModule(slug);
  if (!module) return apiError("Unknown module", 404);

  if (module.softDelete) {
    const record = await module.delegate.update({
      where: { id },
      data: { active: false },
      include: module.include
    });
    return NextResponse.json(record);
  }

  if (slug === "items") {
    try {
      const saleLineCount = await prisma.saleLine.count({ where: { itemId: id } });
      if (saleLineCount > 0) {
        return apiError(`此品項已有 ${saleLineCount} 筆營收登記，不可刪除。`, 409);
      }
      await prisma.$transaction([
        prisma.inventoryMovement.deleteMany({ where: { itemId: id } }),
        prisma.item.delete({ where: { id } })
      ]);
      return NextResponse.json({ ok: true });
    } catch {
      return apiError("刪除品項失敗。", 409);
    }
  }

  if (slug === "event-registrations") {
    try {
      const registration = await prisma.eventRegistration.findUnique({ where: { id }, select: { saleId: true } });
      await prisma.$transaction(async (tx) => {
        if (registration?.saleId) {
          await tx.saleLine.deleteMany({ where: { saleId: registration.saleId } });
          await tx.sale.deleteMany({ where: { id: registration.saleId } });
        }
        await tx.eventRegistration.delete({ where: { id } });
      });
      return NextResponse.json({ ok: true });
    } catch {
      return apiError("刪除活動報名失敗。", 409);
    }
  }

  if (!module.delegate.delete) return apiError("Delete unsupported", 405);
  try {
    await module.delegate.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch {
    return apiError("刪除失敗，這筆資料可能已被其他紀錄使用。", 409);
  }
}
