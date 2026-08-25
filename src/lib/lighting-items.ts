import type { LampType, Prisma } from "@prisma/client";
import { lampTypes } from "@/lib/lighting";

export function lampDefinition(type: LampType) {
  return lampTypes.find((lamp) => lamp.value === type);
}

export async function syncLightingPriceWithItem(
  tx: Prisma.TransactionClient,
  type: LampType,
  price: number
) {
  const definition = lampDefinition(type);
  if (!definition) throw new Error("Unknown lamp type");

  const setting = await tx.lampPrice.findUnique({ where: { type }, select: { id: true, itemId: true } });
  let itemId = setting?.itemId ?? null;

  if (itemId) {
    const itemExists = await tx.item.count({ where: { id: itemId } });
    if (!itemExists) itemId = null;
  }

  if (itemId) {
    await tx.item.update({
      where: { id: itemId },
      data: {
        type: "LIGHTING_SERVICE",
        name: definition.label,
        price,
        requiresInventory: false,
        active: true
      }
    });
  } else {
    const item = await tx.item.create({
      data: {
        type: "LIGHTING_SERVICE",
        name: definition.label,
        price,
        cost: 0,
        requiresInventory: false,
        active: true,
        notes: "點燈紀錄價格連動品項"
      }
    });
    itemId = item.id;
  }

  await tx.lampPrice.upsert({
    where: { type },
    update: { price, itemId },
    create: { type, price, itemId }
  });
}
