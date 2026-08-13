import { NextResponse } from "next/server";
import { requireApiPermission } from "@/lib/api-auth";
import { apiError } from "@/lib/api-modules";
import { prisma } from "@/lib/prisma";

type Context = {
  params: Promise<{ id: string }>;
};

export async function DELETE(_request: Request, context: Context) {
  const auth = await requireApiPermission("employees");
  if (auth.response) return auth.response;

  const { id } = await context.params;
  try {
    await prisma.employeeTag.update({
      where: { id },
      data: { employees: { set: [] } }
    });
    await prisma.employeeTag.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch {
    return apiError("刪除 TAG 失敗。", 409);
  }
}
