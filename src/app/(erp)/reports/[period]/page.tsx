import { notFound } from "next/navigation";
import { ReportPage } from "@/components/ReportPage";
import { requirePagePermission } from "@/lib/page-auth";

const periods = new Set(["daily", "monthly", "yearly"]);

export default async function Page({ params }: { params: Promise<{ period: string }> }) {
  const { period } = await params;
  if (!periods.has(period)) notFound();
  await requirePagePermission(period === "yearly" ? "reports-yearly" : "reports-monthly");
  return <ReportPage period={period} />;
}
