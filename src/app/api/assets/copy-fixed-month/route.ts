import { NextRequest, NextResponse } from "next/server";
import { requireApiUser } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";

function monthBounds(month: string) {
  if (!/^\d{4}-\d{2}$/.test(month)) return null;
  const [year, monthNumber] = month.split("-").map(Number);
  if (monthNumber < 1 || monthNumber > 12) return null;

  const start = new Date(Date.UTC(year, monthNumber - 1, 1));
  const end = new Date(Date.UTC(year, monthNumber, 1));
  return { start, end, year, monthNumber };
}

function shiftDateToMonth(date: Date, targetYear: number, targetMonth: number) {
  const day = date.getUTCDate();
  const lastTargetDay = new Date(Date.UTC(targetYear, targetMonth, 0)).getUTCDate();
  return new Date(
    Date.UTC(
      targetYear,
      targetMonth - 1,
      Math.min(day, lastTargetDay),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds(),
      date.getUTCMilliseconds()
    )
  );
}

export async function POST(request: NextRequest) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const body = await request.json();
  const fromMonth = typeof body.fromMonth === "string" ? body.fromMonth : "";
  const toMonth = typeof body.toMonth === "string" ? body.toMonth : "";
  const from = monthBounds(fromMonth);
  const to = monthBounds(toMonth);

  if (!from || !to) {
    return NextResponse.json({ error: "請選擇有效的來源月份與目標月份。" }, { status: 400 });
  }
  if (fromMonth === toMonth) {
    return NextResponse.json({ error: "來源月份與目標月份不能相同。" }, { status: 400 });
  }

  const sourceAssets = await prisma.asset.findMany({
    where: {
      type: "FIXED",
      purchasedAt: {
        gte: from.start,
        lt: from.end
      }
    },
    orderBy: [{ purchasedAt: "asc" }, { createdAt: "asc" }]
  });

  if (sourceAssets.length === 0) {
    return NextResponse.json({ error: "來源月份沒有固定資產項目可複製。" }, { status: 404 });
  }

  const createdAssets = await prisma.$transaction(
    sourceAssets.map((asset) =>
      prisma.asset.create({
        data: {
          type: asset.type,
          name: asset.name,
          value: asset.value,
          purchasedAt: asset.purchasedAt ? shiftDateToMonth(asset.purchasedAt, to.year, to.monthNumber) : null,
          depreciation: asset.depreciation,
          active: asset.active,
          notes: asset.notes
        }
      })
    )
  );

  return NextResponse.json({ copied: createdAssets.length, assets: createdAssets }, { status: 201 });
}
