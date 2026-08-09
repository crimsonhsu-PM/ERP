import { notFound } from "next/navigation";
import { ReportPage } from "@/components/ReportPage";

const periods = new Set(["daily", "monthly", "yearly"]);

export default async function Page({ params }: { params: Promise<{ period: string }> }) {
  const { period } = await params;
  if (!periods.has(period)) notFound();
  return <ReportPage period={period} />;
}
