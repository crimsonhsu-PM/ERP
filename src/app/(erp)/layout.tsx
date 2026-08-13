import { AppShell } from "@/components/AppShell";
import { getSessionUser } from "@/lib/auth";
import { userPermissionKeys } from "@/lib/permissions";
import { redirect } from "next/navigation";

export default async function ErpLayout({ children }: { children: React.ReactNode }) {
  const user = await getSessionUser();
  if (!user) redirect("/login");

  return <AppShell userPermissions={userPermissionKeys(user)}>{children}</AppShell>;
}
