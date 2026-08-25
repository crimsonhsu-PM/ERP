import { NextResponse } from "next/server";
import { requireApiPermission } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";

type Context = { params: Promise<{ id: string }> };

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
