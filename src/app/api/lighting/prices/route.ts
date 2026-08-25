import { NextRequest, NextResponse } from "next/server";
import { requireApiPermission } from "@/lib/api-auth";
import { isLampType, lampTypes } from "@/lib/lighting";
import { syncLightingPriceWithItem } from "@/lib/lighting-items";
import { prisma } from "@/lib/prisma";

export async function PUT(request: NextRequest) {
  const auth = await requireApiPermission("lighting");
  if (auth.response) return auth.response;

  const body = await request.json();
  if (!Array.isArray(body.prices)) return NextResponse.json({ error: "價格資料格式錯誤。" }, { status: 400 });
  const submitted = new Map<string, number>();
  for (const item of body.prices) {
    const price = Number(item?.price);
    if (!isLampType(item?.type) || !Number.isFinite(price) || price < 0) {
      return NextResponse.json({ error: "請確認所有燈別的價錢皆為 0 或正數。" }, { status: 400 });
    }
    submitted.set(item.type, price);
  }
  if (lampTypes.some((lamp) => !submitted.has(lamp.value))) {
    return NextResponse.json({ error: "請設定全部六種燈的價錢。" }, { status: 400 });
  }

  await prisma.$transaction(async (tx) => {
    for (const lamp of lampTypes) {
      await syncLightingPriceWithItem(tx, lamp.value, submitted.get(lamp.value) ?? 0);
    }
  });
  return NextResponse.json({ ok: true });
}
