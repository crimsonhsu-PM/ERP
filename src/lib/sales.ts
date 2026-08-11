import type { PaymentMethod, SaleStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export type SaleLineInput = {
  itemId: string;
  servicePersonId?: string;
  quantity: number;
  unitPrice?: number | string;
};

export type CreateSalesInput = {
  soldAt?: string | Date | null;
  customerName?: string | null;
  salesPersonId?: string | null;
  paymentMethod?: PaymentMethod | null;
  status?: SaleStatus | null;
  notes?: string | null;
  lines?: SaleLineInput[];
};

export async function calculateSaleLines(rawLines: SaleLineInput[]) {
  const lines = rawLines
    .filter((line) => line.itemId && Number(line.quantity) > 0)
    .map((line) => ({
      itemId: line.itemId,
      servicePersonId: line.servicePersonId || "",
      quantity: Number(line.quantity),
      unitPrice: line.unitPrice === "" || line.unitPrice == null ? undefined : Number(line.unitPrice)
    }));

  if (lines.length === 0) {
    return { error: "請至少新增一個銷售明細。" as const };
  }

  const itemIds = [...new Set(lines.map((line) => line.itemId))];
  const items = await prisma.item.findMany({ where: { id: { in: itemIds }, active: true } });
  const itemById = new Map(items.map((item) => [item.id, item]));

  if (items.length !== itemIds.length) {
    return { error: "銷售明細包含不存在或停用的品項。" as const };
  }

  const calculatedLines = lines.map((line) => {
    const item = itemById.get(line.itemId);
    if (!item) throw new Error("Missing item");
    const unitPrice = line.unitPrice ?? Number(item.price);
    return {
      item,
      itemId: line.itemId,
      servicePersonId: line.servicePersonId,
      quantity: line.quantity,
      unitPrice,
      lineTotal: unitPrice * line.quantity
    };
  });

  return {
    calculatedLines,
    subtotal: calculatedLines.reduce((sum, line) => sum + line.lineTotal, 0)
  };
}

export async function createSalesFromInput(body: CreateSalesInput) {
  if (!body.salesPersonId) {
    return { error: "請選擇銷售人員。" as const, status: 400 };
  }

  const result = await calculateSaleLines((body.lines || []) as SaleLineInput[]);
  if ("error" in result) return { error: result.error, status: 400 };

  const { calculatedLines } = result;
  if (calculatedLines.some((line) => line.item.type !== "OIL_DONATION" && !line.servicePersonId)) {
    return { error: "請為每筆銷售明細選擇服務人員。" as const, status: 400 };
  }

  const soldAt = body.soldAt ? new Date(body.soldAt) : new Date();
  if (Number.isNaN(soldAt.getTime())) {
    return { error: "銷售日期格式不正確。" as const, status: 400 };
  }

  const sales = await prisma.$transaction(async (tx) => {
    const createdSales = [];

    for (const line of calculatedLines) {
      const createdSale = await tx.sale.create({
        data: {
          soldAt,
          customerName: body.customerName || null,
          salesPersonId: body.salesPersonId || null,
          servicePersonId: line.servicePersonId || null,
          paymentMethod: body.paymentMethod || "CASH",
          status: body.status || "CLOSED",
          subtotal: line.lineTotal,
          discount: 0,
          total: line.lineTotal,
          notes: body.notes || null,
          lines: {
            create: {
              itemId: line.itemId,
              quantity: line.quantity,
              unitPrice: line.unitPrice,
              lineTotal: line.lineTotal
            }
          }
        },
        include: {
          salesPerson: true,
          servicePerson: true,
          lines: { include: { item: true } }
        }
      });

      if (line.item.requiresInventory) {
        await tx.inventoryMovement.create({
          data: {
            itemId: line.itemId,
            type: "SALE",
            quantity: -line.quantity,
            reason: `銷售單 ${createdSale.id}`,
            movedAt: createdSale.soldAt
          }
        });
      }
      createdSales.push(createdSale);
    }

    return createdSales;
  });

  return { sales };
}
