import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const apply = process.argv.includes("--apply");
  const result = await prisma.$transaction(async (tx) => {
    const movements = await tx.inventoryMovement.findMany({
      where: { type: "SALE", saleId: null },
      select: { id: true, itemId: true, quantity: true, reason: true }
    });
    let matched = 0;
    for (const movement of movements) {
      if (!movement.reason?.startsWith("銷售單 ")) continue;
      const saleId = movement.reason.slice("銷售單 ".length);
      const sale = await tx.sale.findUnique({
        where: { id: saleId },
        select: { lines: { select: { itemId: true, quantity: true } } }
      });
      const lines = sale?.lines.filter((line) => line.itemId === movement.itemId) ?? [];
      if (!lines.length || movement.quantity !== -lines.reduce((sum, line) => sum + line.quantity, 0)) continue;
      matched += 1;
      if (apply) {
        await tx.inventoryMovement.update({ where: { id: movement.id }, data: { saleId } });
      }
    }
    return { mode: apply ? "apply" : "preview", matched, unchanged: movements.length - matched };
  });
  console.log(JSON.stringify(result));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}).finally(() => prisma.$disconnect());
