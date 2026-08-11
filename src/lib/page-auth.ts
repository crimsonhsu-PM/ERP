import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth";
import { pagePermissions, userCanAccess, userPermissionKeys } from "@/lib/permissions";

export async function requirePagePermission(permissionKey: string) {
  const user = await getSessionUser();
  if (!user) redirect("/login");
  if (userCanAccess(user, permissionKey)) return user;

  const firstAllowed = pagePermissions.find((permission) => userPermissionKeys(user).includes(permission.key));
  redirect(firstAllowed?.href ?? "/login");
}
