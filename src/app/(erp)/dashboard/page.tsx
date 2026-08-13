import { prisma } from "@/lib/prisma";
import { DashboardClient } from "@/components/DashboardClient";
import { requirePagePermission } from "@/lib/page-auth";

export default async function DashboardPage() {
  await requirePagePermission("dashboard");
  const today = new Date();
  const dayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const dayEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 1);
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

  function dateKey(date: Date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  }

  const [todaySales, monthSales, monthSaleLines] =
    await Promise.all([
      prisma.sale.findMany({ where: { status: "CLOSED", soldAt: { gte: dayStart, lt: dayEnd } } }),
      prisma.sale.findMany({ where: { status: "CLOSED", soldAt: { gte: monthStart, lt: monthEnd } } }),
      prisma.saleLine.findMany({
        where: {
          sale: { status: "CLOSED", soldAt: { gte: monthStart, lt: monthEnd } }
        },
        include: { item: true }
      })
    ]);

  const todayRevenue = todaySales.reduce((sum, sale) => sum + Number(sale.total), 0);
  const monthRevenue = monthSales.reduce((sum, sale) => sum + Number(sale.total), 0);
  const itemRevenueById = new Map<
    string,
    { itemName: string; itemType: string; quantity: number; revenue: number }
  >();
  const dailyRevenueByDate = new Map<string, number>();

  for (const sale of monthSales) {
    const saleDateKey = dateKey(sale.soldAt);
    dailyRevenueByDate.set(saleDateKey, (dailyRevenueByDate.get(saleDateKey) ?? 0) + Number(sale.total));
  }

  for (const line of monthSaleLines) {
    const current = itemRevenueById.get(line.itemId) ?? {
      itemName: line.item.name,
      itemType: line.item.type,
      quantity: 0,
      revenue: 0
    };
    current.quantity += line.quantity;
    current.revenue += Number(line.lineTotal);
    itemRevenueById.set(line.itemId, current);
  }

  const itemRevenueShares = [...itemRevenueById.values()]
    .map((item) => ({
      ...item,
      share: monthRevenue > 0 ? (item.revenue / monthRevenue) * 100 : 0
    }))
    .sort((left, right) => right.revenue - left.revenue);

  return (
    <DashboardClient
      todayRevenue={todayRevenue}
      monthRevenue={monthRevenue}
      dailyRevenueBars={Array.from({ length: daysInMonth }, (_, index) => {
        const date = new Date(today.getFullYear(), today.getMonth(), index + 1);
        const dailyDateKey = dateKey(date);
        return {
          date: dailyDateKey,
          day: index + 1,
          revenue: dailyRevenueByDate.get(dailyDateKey) ?? 0
        };
      })}
      itemRevenueShares={itemRevenueShares}
    />
  );
}
