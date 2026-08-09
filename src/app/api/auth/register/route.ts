import { NextRequest, NextResponse } from "next/server";
import { hashPassword, setSessionCookie } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const email = String(body.email || "").trim().toLowerCase();
  const name = String(body.name || "").trim();
  const password = String(body.password || "");

  if (!email || !name || password.length < 6) {
    return NextResponse.json(
      { error: "請填寫姓名、Email，密碼至少 6 碼。" },
      { status: 400 }
    );
  }

  const user = await prisma.user.create({
    data: {
      email,
      name,
      passwordHash: await hashPassword(password)
    },
    select: { id: true, email: true, name: true }
  });
  await setSessionCookie(user.id);
  return NextResponse.json(user, { status: 201 });
}
