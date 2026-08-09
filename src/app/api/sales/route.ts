import { NextRequest, NextResponse } from "next/server";
import { requireApiUser } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";
import { calculateSaleLines, type SaleLineInput } from "@/lib/sales";

export async function GET() {
  const auth = await requireApiUser();
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
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const body = await request.json();
  if (!body.salesPersonId) {
    return NextResponse.json({ error: "請選擇銷售人員。" }, { status: 400 });
  }
  const result = await calculateSaleLines((body.lines || []) as SaleLineInput[]);
  if ("error" in result) return NextResponse.json({ error: result.error }, { status: 400 });
  const { calculatedLines } = result;
  if (calculatedLines.some((line) => line.item.type !== "OIL_DONATION" && !line.servicePersonId)) {
    return NextResponse.json({ error: "請為每筆銷售明細選擇服務人員。" }, { status: 400 });
  }
  const soldAt = body.soldAt ? new Date(String(body.soldAt)) : new Date();

  const sales = await prisma.$transaction(async (tx) => {
    const createdSales = [];

    for (const line of calculatedLines) {
      const createdSale = await tx.sale.create({
        data: {
          soldAt,
          customerName: body.customerName || null,
          salesPersonId: body.salesPersonId || null,
          servicePersonId: line.servicePersonId || null,
          paymentMethod: body.paymentMethod || "CASH",
          status: body.status || "CLOSED",
          subtotal: line.lineTotal,
          discount: 0,
          total: line.lineTotal,
          notes: body.notes || null,
          lines: {
            create: {
              itemId: line.itemId,
              quantity: line.quantity,
              unitPrice: line.unitPrice,
              lineTotal: line.lineTotal
            }
          }
        },
        include: {
          salesPerson: true,
          servicePerson: true,
          lines: { include: { item: true } }
        }
      });

      if (line.item.requiresInventory) {
        await tx.inventoryMovement.create({
          data: {
            itemId: line.itemId,
            type: "SALE",
            quantity: -line.quantity,
            reason: `銷售單 ${createdSale.id}`,
            movedAt: createdSale.soldAt
          }
        });
      }
      createdSales.push(createdSale);
    }

    return createdSales;
  });

  return NextResponse.json(sales.length === 1 ? sales[0] : sales, { status: 201 });
}
