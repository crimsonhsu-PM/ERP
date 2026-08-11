import { NextRequest, NextResponse } from "next/server";
import { requireApiPermission } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";
import { createSalesFromInput } from "@/lib/sales";

export async function GET() {
  const auth = await requireApiPermission("sales");
  if (auth.response) return auth.response;

  const sales = await prisma.sale.findMany({
    include: {
      salesPerson: true,
      servicePerson: true,
      lines: { include: { item: true } }
    },
    orderBy: { soldAt: "desc" }
  });
  return NextResponse.json(sales);
}

export async function POST(request: NextRequest) {
  const auth = await requireApiPermission("sales");
  if (auth.response) return auth.response;

  const body = await request.json();
  const result = await createSalesFromInput(body);
  if ("error" in result) return NextResponse.json({ error: result.error }, { status: result.status });

  return NextResponse.json(result.sales.length === 1 ? result.sales[0] : result.sales, { status: 201 });
}
