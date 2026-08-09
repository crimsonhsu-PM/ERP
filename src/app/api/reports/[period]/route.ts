import { NextRequest, NextResponse } from "next/server";
import { requireApiUser } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";

type Context = {
  params: Promise<{ period: string }>;
};

const employeeReportTags = ["內部員工", "外部員工"] as const;
const shiftIncomeEmployeeTag = "外部員工";
const shiftDailyIncome = 1000;
const fixedSalaryPurposes = new Set(["正職人員薪資", "兼職人員薪資"]);

function calculateCommission(itemType: string, lineRevenue: number, quantity: number) {
  if (itemType === "DIVINATION_SERVICE") return lineRevenue * 0.5;
  if (itemType === "RITUAL_SERVICE") return lineRevenue * 0.3;
  if (itemType === "FENG_SHUI_SERVICE") return lineRevenue * 0.5;
  if (itemType === "COURSE_SERVICE") return quantity * 2000;
  if (itemType === "PHYSICAL_PRODUCT") return lineRevenue * 0.3;
  return 0;
}

function getRange(period: string, date = new Date()) {
  const year = date.getFullYear();
  const month = date.getMonth();
  if (period === "daily") {
    return {
      start: new Date(year, month, date.getDate()),
      end: new Date(year, month, date.getDate() + 1)
    };
  }
  if (period === "monthly") {
    return { start: new Date(year, month, 1), end: new Date(year, month + 1, 1) };
  }
  if (period === "quarterly") {
    const quarterStart = Math.floor(month / 3) * 3;
    return { start: new Date(year, quarterStart, 1), end: new Date(year, quarterStart + 3, 1) };
  }
  return { start: new Date(year, 0, 1), end: new Date(year + 1, 0, 1) };
}

export async function GET(request: NextRequest, context: Context) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const { period } = await context.params;
  const dateParam = request.nextUrl.searchParams.get("date");
  const baseDate = dateParam ? new Date(dateParam) : new Date();
  const { start, end } = getRange(period, baseDate);
  const previousMonthRange = period === "monthly"
    ? { start: new Date(start.getFullYear(), start.getMonth() - 1, 1), end: start }
    : null;

  const [sales, previousMonthSales, pettyCash, assets, fixedExpenses, shifts] = await Promise.all([
    prisma.sale.findMany({
      where: { status: "CLOSED", soldAt: { gte: start, lt: end } },
      include: {
        servicePerson: { include: { tags: true } },
        lines: { include: { item: { include: { event: true } } } }
      },
      orderBy: { soldAt: "desc" }
    }),
    previousMonthRange
      ? prisma.sale.findMany({
          where: { status: "CLOSED", soldAt: { gte: previousMonthRange.start, lt: previousMonthRange.end } },
          include: { lines: { include: { item: true } } }
        })
      : Promise.resolve([]),
    prisma.pettyCashEntry.findMany({
      where: { entryDate: { gte: start, lt: end } },
      include: { employee: true },
      orderBy: { entryDate: "desc" }
    }),
    prisma.asset.findMany({ where: { active: true } }),
    prisma.fixedExpense.findMany({
      where: { entryDate: { gte: start, lt: end } },
      include: { employee: { include: { tags: true } } },
      orderBy: { entryDate: "desc" }
    }),
    prisma.shift.findMany({
      where: { startsAt: { gte: start, lt: end } },
      include: { employee: { include: { tags: true } } },
      orderBy: { startsAt: "asc" }
    })
  ]);

  const revenue = sales.reduce((sum, sale) => sum + Number(sale.total), 0);
  const previousMonthRevenue = previousMonthSales.reduce((sum, sale) => sum + Number(sale.total), 0);
  const revenueMonthlyChangeRate = period === "monthly" && previousMonthRevenue > 0
    ? ((revenue - previousMonthRevenue) / previousMonthRevenue) * 100
    : null;
  const discounts = sales.reduce((sum, sale) => sum + Number(sale.discount), 0);
  const lineCost = sales.reduce(
    (sum, sale) =>
      sum +
      sale.lines.reduce(
        (lineSum, line) => lineSum + Number(line.item.cost) * line.quantity,
        0
      ),
    0
  );
  const pettyIncome = pettyCash
    .filter((entry) => entry.type === "INCOME")
    .reduce((sum, entry) => sum + Number(entry.amount), 0);
  const pettyExpense = pettyCash
    .filter((entry) => entry.type === "EXPENSE")
    .reduce((sum, entry) => sum + Number(entry.amount), 0);

  const itemAnalysis = new Map<string, { name: string; type: string; quantity: number; revenue: number }>();
  const itemTypeAnalysis = new Map<string, { type: string; revenue: number; revenueRate: number }>();
  const previousItemTypeRevenue = new Map<string, number>();
  const paymentMethodAnalysis = new Map<string, { paymentMethod: string; revenue: number }>();
  const activityAnalysis = new Map<string, { eventId: string; eventName: string; revenue: number; revenueRate: number }>();
  const employeePayouts = new Map<
    string,
    {
      employeeId: string;
      employeeName: string;
      employeeType: string;
      fixedSalaryIncome: number;
      shiftDays: Set<string>;
      shiftIncome: number;
      commissionItems: Map<string, { itemName: string; serviceRevenue: number; commission: number }>;
    }
  >();
  const serviceCommissions = new Map<
    string,
    { employeeId: string; employeeName: string; employeeType: string; serviceRevenue: number; commission: number }
  >();

  function employeeTypeFromTags(tags: { name: string }[] = []) {
    return employeeReportTags.find((tag) => tags.some((employeeTag) => employeeTag.name === tag));
  }

  function payoutForEmployee(employee: { id: string; name: string; tags: { name: string }[] }, employeeType?: string) {
    const current = employeePayouts.get(employee.id) ?? {
      employeeId: employee.id,
      employeeName: employee.name,
      employeeType: employeeType ?? "未分類",
      fixedSalaryIncome: 0,
      shiftDays: new Set<string>(),
      shiftIncome: 0,
      commissionItems: new Map<string, { itemName: string; serviceRevenue: number; commission: number }>()
    };
    if (employeeType) current.employeeType = employeeType;
    employeePayouts.set(employee.id, current);
    return current;
  }

  for (const sale of sales) {
    const paymentCurrent = paymentMethodAnalysis.get(sale.paymentMethod) ?? {
      paymentMethod: sale.paymentMethod,
      revenue: 0
    };
    paymentCurrent.revenue += Number(sale.total);
    paymentMethodAnalysis.set(sale.paymentMethod, paymentCurrent);

    for (const line of sale.lines) {
      const current = itemAnalysis.get(line.itemId) ?? {
        name: line.item.name,
        type: line.item.type,
        quantity: 0,
        revenue: 0
      };
      current.quantity += line.quantity;
      current.revenue += Number(line.lineTotal);
      itemAnalysis.set(line.itemId, current);

      const typeCurrent = itemTypeAnalysis.get(line.item.type) ?? {
        type: line.item.type,
        revenue: 0,
        revenueRate: 0
      };
      typeCurrent.revenue += Number(line.lineTotal);
      itemTypeAnalysis.set(line.item.type, typeCurrent);

      if (line.item.event) {
        const activityCurrent = activityAnalysis.get(line.item.event.id) ?? {
          eventId: line.item.event.id,
          eventName: line.item.event.title,
          revenue: 0,
          revenueRate: 0
        };
        activityCurrent.revenue += Number(line.lineTotal);
        activityAnalysis.set(line.item.event.id, activityCurrent);
      }

      if (sale.servicePerson) {
        const employeeType = employeeTypeFromTags(sale.servicePerson.tags);
        const lineRevenue = Number(line.lineTotal);
        const commission = calculateCommission(line.item.type, lineRevenue, line.quantity);
        if (employeeType && commission > 0) {
          const commissionCurrent = serviceCommissions.get(sale.servicePerson.id) ?? {
            employeeId: sale.servicePerson.id,
            employeeName: sale.servicePerson.name,
            employeeType,
            serviceRevenue: 0,
            commission: 0
          };
          commissionCurrent.serviceRevenue += lineRevenue;
          commissionCurrent.commission += commission;
          serviceCommissions.set(sale.servicePerson.id, commissionCurrent);

          const payout = payoutForEmployee(sale.servicePerson, employeeType);
          const itemCommission = payout.commissionItems.get(line.itemId) ?? {
            itemName: line.item.name,
            serviceRevenue: 0,
            commission: 0
          };
          itemCommission.serviceRevenue += lineRevenue;
          itemCommission.commission += commission;
          payout.commissionItems.set(line.itemId, itemCommission);
        }
      }
    }
  }

  for (const sale of previousMonthSales) {
    for (const line of sale.lines) {
      previousItemTypeRevenue.set(
        line.item.type,
        (previousItemTypeRevenue.get(line.item.type) ?? 0) + Number(line.lineTotal)
      );
    }
  }

  const fixedExpenseAnalysis = fixedExpenses.map((expense) => ({
    id: expense.id,
    purpose: expense.purpose,
    amount: Number(expense.amount),
    entryDate: expense.entryDate,
    employeeName: expense.employee?.name ?? ""
  }));
  const pettyCashExpenseAnalysis = pettyCash
    .filter((entry) => entry.type === "EXPENSE")
    .map((entry) => ({
      id: entry.id,
      purpose: entry.purpose,
      amount: Number(entry.amount),
      entryDate: entry.entryDate,
      employeeName: entry.employee?.name ?? "",
      checkedOut: entry.checkedOut
    }));

  for (const expense of fixedExpenses) {
    if (!expense.employee || !fixedSalaryPurposes.has(expense.purpose)) continue;
    const employeeType = employeeTypeFromTags(expense.employee.tags);
    if (!employeeType) continue;
    const payout = payoutForEmployee(expense.employee, employeeType);
    payout.fixedSalaryIncome += Number(expense.amount);
  }

  const shiftDaysByEmployee = new Map<
    string,
    { employeeId: string; employeeName: string; employeeType: string; days: Set<string> }
  >();
  for (const shift of shifts) {
    if (!shift.employee) continue;
    if (!shift.employee.tags.some((employeeTag) => employeeTag.name === shiftIncomeEmployeeTag)) continue;
    const current = shiftDaysByEmployee.get(shift.employee.id) ?? {
      employeeId: shift.employee.id,
      employeeName: shift.employee.name,
      employeeType: shiftIncomeEmployeeTag,
      days: new Set<string>()
    };
    current.days.add(shift.startsAt.toISOString().slice(0, 10));
    shiftDaysByEmployee.set(shift.employee.id, current);

    const payout = payoutForEmployee(shift.employee, shiftIncomeEmployeeTag);
    payout.shiftDays.add(shift.startsAt.toISOString().slice(0, 10));
  }

  const shiftIncomeAnalysis = Array.from(shiftDaysByEmployee.values())
    .map((employee) => ({
      employeeId: employee.employeeId,
      employeeName: employee.employeeName,
      employeeType: employee.employeeType,
      days: employee.days.size,
      income: employee.days.size * shiftDailyIncome
    }))
    .sort((left, right) => left.employeeType.localeCompare(right.employeeType) || right.income - left.income);

  const fixedExpenseSystemSalaryAnalysis = period === "monthly"
    ? shiftIncomeAnalysis.map((employee) => ({
        id: `system-external-salary-${start.toISOString().slice(0, 7)}-${employee.employeeId}`,
        purpose: `外部員工排班薪資（${employee.days} 天）`,
        amount: employee.income,
        entryDate: new Date(start.getFullYear(), start.getMonth() + 1, 0),
        employeeName: employee.employeeName
      }))
    : [];
  const monthlyFixedExpenseAnalysis = [...fixedExpenseAnalysis, ...fixedExpenseSystemSalaryAnalysis];
  const fixedExpenseTotal = monthlyFixedExpenseAnalysis.reduce((sum, expense) => sum + expense.amount, 0);
  const shiftIncomeTotal = shiftIncomeAnalysis.reduce((sum, employee) => sum + employee.income, 0);
  const serviceCommissionTotal = Array.from(serviceCommissions.values()).reduce(
    (sum, employee) => sum + employee.commission,
    0
  );
  const yearlyMonthlyGrossProfit = period === "yearly"
    ? revenue - fixedExpenseTotal - shiftIncomeTotal - pettyExpense - serviceCommissionTotal
    : undefined;
  const employeeTypeOrder = new Map([["內部員工", 0], ["外部員工", 1]]);
  const employeePayoutAnalysis = Array.from(employeePayouts.values())
    .map((employee) => {
      const shiftDays = employee.shiftDays.size;
      const shiftIncome = shiftDays * shiftDailyIncome;
      const commissionItems = Array.from(employee.commissionItems.values()).sort((a, b) => b.commission - a.commission);
      const commissionTotal = commissionItems.reduce((sum, item) => sum + item.commission, 0);
      return {
        employeeId: employee.employeeId,
        employeeName: employee.employeeName,
        employeeType: employee.employeeType,
        fixedSalaryIncome: employee.fixedSalaryIncome,
        shiftDays,
        shiftIncome,
        commissionItems,
        commissionTotal,
        payoutTotal: employee.fixedSalaryIncome + shiftIncome + commissionTotal
      };
    })
    .filter((employee) => employee.payoutTotal > 0)
    .sort((left, right) => {
      const leftTypeOrder = employeeTypeOrder.get(left.employeeType) ?? 99;
      const rightTypeOrder = employeeTypeOrder.get(right.employeeType) ?? 99;
      if (leftTypeOrder !== rightTypeOrder) return leftTypeOrder - rightTypeOrder;
      return left.employeeName.localeCompare(right.employeeName);
    });
  const employeePayoutTotal = employeePayoutAnalysis.reduce((sum, employee) => sum + employee.payoutTotal, 0);

  return NextResponse.json({
    period,
    start,
    end,
    summary: {
      salesCount: sales.length,
      revenue,
      previousMonthRevenue,
      revenueMonthlyChangeRate,
      discounts,
      lineCost,
      grossProfit: yearlyMonthlyGrossProfit ?? revenue - lineCost,
      pettyIncome,
      pettyExpense,
      netCash: revenue + pettyIncome - pettyExpense,
      activeAssetValue: assets.reduce((sum, asset) => sum + Number(asset.value), 0),
      fixedExpenseTotal,
      shiftIncomeTotal,
      serviceCommissionTotal,
      employeePayoutTotal
    },
    itemAnalysis: Array.from(itemAnalysis.values()).sort((a, b) => b.revenue - a.revenue),
    itemTypeAnalysis: Array.from(itemTypeAnalysis.values())
      .map((item) => ({
        ...item,
        revenueRate: revenue > 0 ? (item.revenue / revenue) * 100 : 0,
        previousRevenueRate: previousMonthRevenue > 0
          ? ((previousItemTypeRevenue.get(item.type) ?? 0) / previousMonthRevenue) * 100
          : null
      }))
      .map((item) => ({
        ...item,
        revenueRateChange: item.previousRevenueRate == null ? null : item.revenueRate - item.previousRevenueRate
      }))
      .sort((a, b) => b.revenue - a.revenue),
    paymentMethodAnalysis: Array.from(paymentMethodAnalysis.values()).sort((a, b) => b.revenue - a.revenue),
    activityAnalysis: Array.from(activityAnalysis.values())
      .map((activity) => ({
        ...activity,
        revenueRate: revenue > 0 ? (activity.revenue / revenue) * 100 : 0
      }))
      .sort((a, b) => b.revenue - a.revenue),
    fixedExpenseAnalysis: monthlyFixedExpenseAnalysis,
    pettyCashExpenseAnalysis,
    shiftIncomeAnalysis,
    serviceCommissionAnalysis: Array.from(serviceCommissions.values()).sort((a, b) => b.commission - a.commission),
    employeePayoutAnalysis,
    sales,
    pettyCash
  });
}
