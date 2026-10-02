import { NextResponse } from "next/server";
import { requireApiPermission } from "@/lib/api-auth";
import { isLampType } from "@/lib/lighting";
import { prisma } from "@/lib/prisma";

type Context = { params: Promise<{ id: string }> };

function parseTaipeiDate(value: unknown) {
  if (typeof value !== "string") return null;
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;
  const [, yearText, monthText, dayText] = match;
  const year = Number(yearText);
  const month = Number(monthText);
  const day = Number(dayText);
  const calendarCheck = new Date(Date.UTC(year, month - 1, day));
  if (
    calendarCheck.getUTCFullYear() !== year ||
    calendarCheck.getUTCMonth() !== month - 1 ||
    calendarCheck.getUTCDate() !== day
  ) return null;
  return new Date(`${value}T00:00:00+08:00`);
}

export async function PATCH(request: Request, context: Context) {
  const auth = await requireApiPermission("lighting");
  if (auth.response) return auth.response;

  const { id } = await context.params;
  const body = await request.json();
  const personName = typeof body.personName === "string" ? body.personName.trim() : "";
  const address = typeof body.address === "string" ? body.address.trim() : "";
  if (!personName) return NextResponse.json({ error: "請輸入點燈者姓名。" }, { status: 400 });
  if (!address) return NextResponse.json({ error: "請輸入點燈者住址。" }, { status: 400 });
  if (!isLampType(body.type)) return NextResponse.json({ error: "請選擇燈的種類。" }, { status: 400 });

  const birthDate = parseTaipeiDate(body.birthDate);
  if (!birthDate || birthDate.getTime() > Date.now()) {
    return NextResponse.json({ error: "請選擇有效的生日。" }, { status: 400 });
  }
  const litDate = parseTaipeiDate(body.litDate);
  if (!litDate || typeof body.litDate !== "string") {
    return NextResponse.json({ error: "請選擇有效的點燈日期。" }, { status: 400 });
  }
  const litYear = Number(body.litDate.slice(0, 4));
  if (litYear < 1900 || litYear > 2200) {
    return NextResponse.json({ error: "請選擇有效的點燈日期。" }, { status: 400 });
  }
  const price = Number(body.price);
  if (!Number.isFinite(price) || price < 0) {
    return NextResponse.json({ error: "價錢不可小於 0。" }, { status: 400 });
  }

  try {
    const record = await prisma.lampRecord.update({
      where: { id },
      data: { personName, birthDate, address, type: body.type, litYear, litDate, price }
    });
    return NextResponse.json({ ...record, price: Number(record.price) });
  } catch {
    return NextResponse.json({ error: "找不到要編輯的點燈紀錄。" }, { status: 404 });
  }
}

export async function DELETE(_request: Request, context: Context) {
  const auth = await requireApiPermission("lighting");
  if (auth.response) return auth.response;
  const { id } = await context.params;
  try {
    await prisma.lampRecord.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "找不到要刪除的點燈紀錄。" }, { status: 404 });
  }
}
