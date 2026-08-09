import { prisma } from "@/lib/prisma";

export type SaleLineInput = {
  itemId: string;
  servicePersonId?: string;
  quantity: number;
  unitPrice?: number | string;
};

export async function calculateSaleLines(rawLines: SaleLineInput[]) {
  const lines = rawLines
    .filter((line) => line.itemId && Number(line.quantity) > 0)
    .map((line) => ({
      itemId: line.itemId,
      servicePersonId: line.servicePersonId || "",
      quantity: Number(line.quantity),
      unitPrice: line.unitPrice === "" || line.unitPrice == null ? undefined : Number(line.unitPrice)
    }));

  if (lines.length === 0) {
    return { error: "請至少新增一個銷售明細。" as const };
  }

  const itemIds = [...new Set(lines.map((line) => line.itemId))];
  const items = await prisma.item.findMany({ where: { id: { in: itemIds }, active: true } });
  const itemById = new Map(items.map((item) => [item.id, item]));

  if (items.length !== itemIds.length) {
    return { error: "銷售明細包含不存在或停用的品項。" as const };
  }

  const calculatedLines = lines.map((line) => {
    const item = itemById.get(line.itemId);
    if (!item) throw new Error("Missing item");
    const unitPrice = line.unitPrice ?? Number(item.price);
    return {
      item,
      itemId: line.itemId,
      servicePersonId: line.servicePersonId,
      quantity: line.quantity,
      unitPrice,
      lineTotal: unitPrice * line.quantity
    };
  });

  return {
    calculatedLines,
    subtotal: calculatedLines.reduce((sum, line) => sum + line.lineTotal, 0)
  };
}
