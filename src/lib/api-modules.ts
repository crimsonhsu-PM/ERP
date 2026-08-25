import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getModuleConfig, type ModuleConfig } from "@/lib/module-config";

type Delegate = any;

type ApiModule = ModuleConfig & {
  delegate: Delegate;
  include?: Record<string, unknown>;
  defaults?: Record<string, unknown>;
  dateFields?: string[];
  numberFields?: string[];
  booleanFields?: string[];
};

const delegateMap = {
  items: prisma.item,
  inventory: prisma.inventoryMovement,
  assets: prisma.asset,
  "petty-cash": prisma.pettyCashEntry,
  "fixed-expenses": prisma.fixedExpense,
  "employee-tags": prisma.employeeTag,
  employees: prisma.employee,
  shifts: prisma.shift,
  sops: prisma.sop,
  "sop-steps": prisma.sopStep,
  events: prisma.event,
  "event-registrations": prisma.eventRegistration,
  customers: prisma.customer,
  "customer-service-records": prisma.customerServiceRecord,
  "course-payments": prisma.coursePayment
} as Record<string, Delegate>;

const includeMap: Record<string, Record<string, unknown>> = {
  items: { lampPrice: true },
  events: { items: { orderBy: { createdAt: "asc" } } },
  inventory: { item: true },
  "petty-cash": { employee: true },
  "fixed-expenses": { employee: true },
  employees: { tags: true },
  shifts: { employee: true },
  "sop-steps": { sop: true },
  "event-registrations": { event: true, item: true, customer: true },
  "customer-service-records": { customer: true },
  "course-payments": { customer: true }
};

const defaultsMap: Record<string, Record<string, unknown>> = {
  items: { active: true, cost: 0, price: 0, requiresInventory: false },
  assets: { active: true, depreciation: 0 },
  "petty-cash": { checkedOut: false },
  employees: { active: true },
  sops: { status: "DRAFT" },
  events: { active: true },
  "course-payments": { status: "待確認", paymentMethod: "TRANSFER" }
};

const numberFieldNames = new Set([
  "price",
  "cost",
  "quantity",
  "value",
  "depreciation",
  "amount",
  "sortOrder",
  "paidAmount"
]);

const booleanFieldNames = new Set(["active", "requiresInventory"]);

const dateFieldNames = new Set([
  "movedAt",
  "purchasedAt",
  "entryDate",
  "startsAt",
  "endsAt",
  "recordedAt",
  "paidAt"
]);

export function getApiModule(slug: string): ApiModule | null {
  const config = getModuleConfig(slug);
  const delegate = delegateMap[slug as keyof typeof delegateMap];
  if (!config || !delegate) return null;
  return {
    ...config,
    delegate,
    include: includeMap[slug],
    defaults: defaultsMap[slug],
    dateFields: config.fields.flatMap((field) => {
      const fields = dateFieldNames.has(field.name) || ["date", "dateRange", "datetime"].includes(field.kind)
        ? [field.name]
        : [];
      if (field.kind === "dateRange" && field.endName) fields.push(field.endName);
      return fields;
    }),
    numberFields: config.fields
      .filter((field) => numberFieldNames.has(field.name) || field.kind === "number")
      .map((field) => field.name),
    booleanFields: config.fields
      .filter((field) => booleanFieldNames.has(field.name) || field.kind === "checkbox")
      .map((field) => field.name)
  };
}

export function normalizeData(module: ApiModule, body: Record<string, unknown>) {
  const data: Record<string, unknown> = { ...(module.defaults ?? {}), ...body };
  for (const key of module.numberFields ?? []) {
    if (data[key] === "" || data[key] === null || data[key] === undefined) {
      delete data[key];
    } else {
      data[key] = Number(data[key]);
    }
  }
  if (module.slug === "items") {
    if (data.type === "OIL_DONATION" || data.type === "LIGHTING_SERVICE") {
      data.requiresInventory = false;
    }
    for (const key of ["price", "cost"]) {
      if (typeof data[key] === "number" && data[key] < 0) {
        throw new Error(`${key} must be non-negative`);
      }
    }
  }
  if (module.slug === "fixed-expenses") {
    data.type = "EXPENSE";
  }
  for (const key of module.booleanFields ?? []) {
    data[key] = Boolean(data[key]);
  }
  if (module.slug === "petty-cash" && data.type === "INCOME") {
    data.employeeId = null;
    data.checkedOut = false;
  }
  for (const key of module.dateFields ?? []) {
    if (!(key in data)) continue;
    if (data[key] === "" || data[key] === null || data[key] === undefined) {
      data[key] = null;
    } else {
      data[key] = new Date(String(data[key]));
    }
  }
  for (const key of Object.keys(data)) {
    if (data[key] === "") {
      data[key] = null;
    }
  }
  return data;
}

export function apiError(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}
