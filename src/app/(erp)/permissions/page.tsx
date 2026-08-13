import { PermissionsPage } from "@/components/PermissionsPage";
import { requirePagePermission } from "@/lib/page-auth";

export default async function Page() {
  await requirePagePermission("permissions");
  return <PermissionsPage />;
}
