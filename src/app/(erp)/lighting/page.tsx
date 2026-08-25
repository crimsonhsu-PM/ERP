import { LightingPage } from "@/components/LightingPage";
import { requirePagePermission } from "@/lib/page-auth";

export default async function Page() {
  await requirePagePermission("lighting");
  return <LightingPage />;
}
