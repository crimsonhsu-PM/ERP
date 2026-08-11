import { SalesPage } from "@/components/SalesPage";
import { requirePagePermission } from "@/lib/page-auth";

export default async function Page() {
  await requirePagePermission("sales");
  return <SalesPage />;
}
