import { NextRequest, NextResponse } from "next/server";
import { requireApiPermission } from "@/lib/api-auth";
import { isLampType, lampTypes } from "@/lib/lighting";
import { prisma } from "@/lib/prisma";

function parseYear(value: string | null) {
  const year = Number(value);
  return Number.isInteger(year) && year >= 1900 && year <= 2200 ? year : null;
}

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

export async function GET(request: NextRequest) {
  const auth = await requireApiPermission("lighting");
  if (auth.response) return auth.response;

  const year = parseYear(request.nextUrl.searchParams.get("year"));
  if (!year) return NextResponse.json({ error: "請選擇有效年份。" }, { status: 400 });

  const [records, storedPrices] = await Promise.all([
    prisma.lampRecord.findMany({ where: { litYear: year }, orderBy: [{ litDate: "desc" }, { createdAt: "desc" }] }),
    prisma.lampPrice.findMany()
  ]);
  const pricesByType = new Map(storedPrices.map((item) => [item.type, Number(item.price)]));

  return NextResponse.json({
    records: records.map((record) => ({ ...record, price: Number(record.price) })),
    prices: lampTypes.map((lamp) => ({ type: lamp.value, price: pricesByType.get(lamp.value) ?? 0 }))
  });
}

export async function POST(request: NextRequest) {
  const auth = await requireApiPermission("lighting");
  if (auth.response) return auth.response;

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

  const configuredPrice = await prisma.lampPrice.findUnique({ where: { type: body.type } });
  const price = body.price === "" || body.price === null || body.price === undefined
    ? Number(configuredPrice?.price ?? 0)
    : Number(body.price);
  if (!Number.isFinite(price) || price < 0) {
    return NextResponse.json({ error: "價錢不可小於 0。" }, { status: 400 });
  }

  const record = await prisma.lampRecord.create({
    data: { personName, birthDate, address, type: body.type, litYear, litDate, price }
  });
  return NextResponse.json({ ...record, price: Number(record.price) }, { status: 201 });
}
