import { NextRequest, NextResponse } from "next/server";
import { requireApiPermission } from "@/lib/api-auth";
import { apiError } from "@/lib/api-modules";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const auth = await requireApiPermission("employees");
  if (auth.response) return auth.response;

  const tags = await prisma.employeeTag.findMany({ orderBy: { name: "asc" } });
  return NextResponse.json(tags);
}

export async function POST(request: NextRequest) {
  const auth = await requireApiPermission("employees");
  if (auth.response) return auth.response;

  const body = await request.json();
  const name = String(body.name ?? "").trim();
  if (!name) return apiError("請輸入 TAG 名稱。", 400);

  const tag = await prisma.employeeTag.upsert({
    where: { name },
    update: {},
    create: { name }
  });
  return NextResponse.json(tag, { status: 201 });
}
