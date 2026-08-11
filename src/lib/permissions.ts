import type { User } from "@prisma/client";

export const pagePermissions = [
  { key: "dashboard", label: "數據總覽", href: "/dashboard", group: "營收" },
  { key: "sales", label: "營收登記", href: "/sales", group: "營收" },
  { key: "items", label: "進銷項目", href: "/items", group: "管理" },
  { key: "employees", label: "人員管理", href: "/employees", group: "管理" },
  { key: "shifts", label: "排班紀錄", href: "/shifts", group: "管理" },
  { key: "reports-monthly", label: "月報表", href: "/reports/monthly", group: "報表" },
  { key: "reports-yearly", label: "年報表", href: "/reports/yearly", group: "報表" },
  { key: "inventory", label: "庫存紀錄", href: "/inventory", group: "資產" },
  { key: "petty-cash", label: "零用支出", href: "/petty-cash", group: "資產" },
  { key: "fixed-expenses", label: "固定支出", href: "/fixed-expenses", group: "資產" },
  { key: "events", label: "活動管理", href: "/events", group: "活動" },
  { key: "sops", label: "SOP", href: "/sops", group: "服務" },
  { key: "customer-service-records", label: "客服紀錄", href: "/customer-service-records", group: "服務" },
  { key: "permissions", label: "權限設定", href: "/permissions", group: "系統" }
] as const;

export type PagePermissionKey = (typeof pagePermissions)[number]["key"];

export const allPagePermissionKeys = pagePermissions.map((permission) => permission.key);

const validPagePermissionKeys = new Set<string>(allPagePermissionKeys);

export type SessionUser = Pick<User, "id" | "email" | "name" | "isAdmin" | "pagePermissions" | "roleId"> & {
  role?: { id: string; name: string; pagePermissions: string } | null;
};

export function parsePagePermissions(value: unknown) {
  if (Array.isArray(value)) return sanitizePagePermissions(value);
  if (typeof value !== "string") return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? sanitizePagePermissions(parsed) : [];
  } catch {
    return [];
  }
}

export function sanitizePagePermissions(values: unknown[]) {
  return [...new Set(values.map(String).filter((value) => validPagePermissionKeys.has(value)))] as PagePermissionKey[];
}

export function serializePagePermissions(values: unknown[]) {
  return JSON.stringify(sanitizePagePermissions(values));
}

export function userPermissionKeys(user: SessionUser | null | undefined) {
  if (!user) return [];
  if (user.isAdmin) return allPagePermissionKeys;
  return parsePagePermissions(user.pagePermissions);
}

export function userCanAccess(user: SessionUser | null | undefined, permissionKey: string) {
  if (!user) return false;
  if (user.isAdmin) return true;
  return userPermissionKeys(user).includes(permissionKey as PagePermissionKey);
}

export function routePermissionKey(pathname: string) {
  if (pathname === "/" || pathname === "/dashboard") return "dashboard";
  if (pathname === "/sales") return "sales";
  if (pathname.startsWith("/reports/monthly")) return "reports-monthly";
  if (pathname.startsWith("/reports/yearly")) return "reports-yearly";
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return firstSegment || "dashboard";
}

export function modulePermissionKey(moduleSlug: string) {
  if (moduleSlug === "event-registrations") return "events";
  if (moduleSlug === "employee-tags") return "employees";
  if (moduleSlug === "customers" || moduleSlug === "course-payments") return "customer-service-records";
  if (moduleSlug === "customer-service-records") return "customer-service-records";
  return moduleSlug;
}

export function constrainPermissions(requested: unknown, creator: SessionUser) {
  const requestedKeys = sanitizePagePermissions(Array.isArray(requested) ? requested : []);
  if (creator.isAdmin) return requestedKeys;
  const creatorKeys = new Set(userPermissionKeys(creator));
  return requestedKeys.filter((key) => creatorKeys.has(key));
}

export function defaultDashboardPermission(keys: string[]) {
  return keys.length > 0 ? keys : ["dashboard"];
}
