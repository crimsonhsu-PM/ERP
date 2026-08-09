import { NextRequest, NextResponse } from "next/server";
import { setSessionCookie, verifyPassword } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");

  const user = await prisma.user.findFirst({ where: { email, active: true } });
  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    return NextResponse.json({ error: "帳號或密碼錯誤。" }, { status: 401 });
  }

  await setSessionCookie(user.id);
  return NextResponse.json({ id: user.id, email: user.email, name: user.name });
}
