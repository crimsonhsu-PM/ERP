import { NextRequest, NextResponse } from "next/server";
import { requireApiPermission } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";
import { calculateSaleLines, type SaleLineInput } from "@/lib/sales";

type Context = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, context: Context) {
  const auth = await requireApiPermission("sales");
  if (auth.response) return auth.response;

  const { id } = await context.params;
  const sale = await prisma.sale.findUnique({
    where: { id },
    include: {
      salesPerson: true,
      servicePerson: true,
      lines: { include: { item: true } }
    }
  });
  if (!sale) return NextResponse.json({ error: "Record not found" }, { status: 404 });
  return NextResponse.json(sale);
}

export async function DELETE(_request: Request, context: Context) {
  const auth = await requireApiPermission("sales");
  if (auth.response) return auth.response;

  const { id } = await context.params;
  await prisma.$transaction([
    prisma.inventoryMovement.deleteMany({ where: { reason: `銷售單 ${id}` } }),
    prisma.sale.delete({ where: { id } })
  ]);
  return NextResponse.json({ ok: true });
}

export async function PATCH(request: NextRequest, context: Context) {
  const auth = await requireApiPermission("sales");
  if (auth.response) return auth.response;

  const { id } = await context.params;
  const body = await request.json();
  if (!body.salesPersonId) {
    return NextResponse.json({ error: "請選擇銷售人員。" }, { status: 400 });
  }
  const result = await calculateSaleLines((body.lines || []) as SaleLineInput[]);
  if ("error" in result) return NextResponse.json({ error: result.error }, { status: 400 });
  if (result.calculatedLines.some((line) => line.item.type !== "OIL_DONATION" && !line.servicePersonId)) {
    return NextResponse.json({ error: "請為每筆銷售明細選擇服務人員。" }, { status: 400 });
  }

  const discount = Number(body.discount || 0);
  const { calculatedLines, subtotal } = result;
  const total = Math.max(0, subtotal - discount);

  const sale = await prisma.$transaction(async (tx) => {
    await tx.saleLine.deleteMany({ where: { saleId: id } });
    await tx.inventoryMovement.deleteMany({ where: { reason: `銷售單 ${id}` } });

    const updatedSale = await tx.sale.update({
      where: { id },
      data: {
        soldAt: body.soldAt ? new Date(String(body.soldAt)) : new Date(),
        customerName: body.customerName || null,
        salesPersonId: body.salesPersonId || null,
        servicePersonId: calculatedLines[0]?.servicePersonId || null,
        paymentMethod: body.paymentMethod || "CASH",
        status: body.status || "CLOSED",
        subtotal,
        discount,
        total,
        notes: body.notes || null,
        lines: {
          create: calculatedLines.map((line) => ({
            itemId: line.itemId,
            quantity: line.quantity,
            unitPrice: line.unitPrice,
            lineTotal: line.lineTotal
          }))
        }
      },
      include: {
        salesPerson: true,
        servicePerson: true,
        lines: { include: { item: true } }
      }
    });

    for (const line of calculatedLines) {
      if (line.item.requiresInventory) {
        await tx.inventoryMovement.create({
          data: {
            itemId: line.itemId,
            type: "SALE",
            quantity: -line.quantity,
            reason: `銷售單 ${updatedSale.id}`,
            movedAt: updatedSale.soldAt
          }
        });
      }
    }

    return updatedSale;
  });

  return NextResponse.json(sale);
}
