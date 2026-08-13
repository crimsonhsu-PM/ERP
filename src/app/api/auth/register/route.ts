import { NextRequest, NextResponse } from "next/server";
import { hashPassword, setSessionCookie } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { allPagePermissionKeys, serializePagePermissions } from "@/lib/permissions";

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

  const existingUserCount = await prisma.user.count();
  if (existingUserCount > 0) {
    return NextResponse.json(
      { error: "已有帳號後，請由具備權限設定的帳號在權限模組建立新帳號。" },
      { status: 403 }
    );
  }

  const adminRole = await prisma.role.upsert({
    where: { name: "Admin" },
    update: { pagePermissions: serializePagePermissions(allPagePermissionKeys), active: true },
    create: {
      name: "Admin",
      pagePermissions: serializePagePermissions(allPagePermissionKeys)
    }
  });

  const user = await prisma.user.create({
    data: {
      email,
      name,
      passwordHash: await hashPassword(password),
      roleId: adminRole.id,
      pagePermissions: serializePagePermissions(allPagePermissionKeys),
      isAdmin: true
    },
    select: { id: true, email: true, name: true, isAdmin: true, pagePermissions: true, roleId: true }
  });
  await setSessionCookie(user.id);
  return NextResponse.json(user, { status: 201 });
}
