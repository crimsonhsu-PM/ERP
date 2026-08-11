import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { modulePermissionKey, userCanAccess } from "@/lib/permissions";

export async function requireApiUser() {
  const user = await getSessionUser();
  if (!user) {
    return {
      user: null,
      response: NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    };
  }
  return { user, response: null };
}

export async function requireApiPermission(permissionKey: string) {
  const auth = await requireApiUser();
  if (auth.response) return auth;
  if (!auth.user || !userCanAccess(auth.user, permissionKey)) {
    return {
      user: auth.user,
      response: NextResponse.json({ error: "Forbidden" }, { status: 403 })
    };
  }
  return auth;
}

export async function requireApiModulePermission(moduleSlug: string) {
  return requireApiPermission(modulePermissionKey(moduleSlug));
}
