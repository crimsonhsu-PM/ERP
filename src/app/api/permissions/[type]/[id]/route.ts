import { NextRequest, NextResponse } from "next/server";
import { hashPassword } from "@/lib/auth";
import { requireApiPermission } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";
import {
  allPagePermissionKeys,
  constrainPermissions,
  parsePagePermissions,
  serializePagePermissions
} from "@/lib/permissions";

type Context = {
  params: Promise<{ type: string; id: string }>;
};

function rolePayload(role: { id: string; name: string; active: boolean; pagePermissions: string; notes: string | null }) {
  return {
    ...role,
    pagePermissions: parsePagePermissions(role.pagePermissions)
  };
}

function userPayload(user: {
  id: string;
  email: string;
  name: string;
  active: boolean;
  isAdmin: boolean;
  roleId: string | null;
  pagePermissions: string;
  role: { id: string; name: string } | null;
}) {
  return {
    ...user,
    pagePermissions: user.isAdmin ? allPagePermissionKeys : parsePagePermissions(user.pagePermissions)
  };
}

export async function PATCH(request: NextRequest, context: Context) {
  const auth = await requireApiPermission("permissions");
  if (auth.response) return auth.response;
  if (!auth.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { type, id } = await context.params;
  const body = await request.json();

  if (type === "roles") {
    const name = String(body.name ?? "").trim();
    const notes = String(body.notes ?? "").trim();
    const active = body.active === undefined ? true : Boolean(body.active);
    const pagePermissionKeys = constrainPermissions(body.pagePermissions, auth.user);
    if (!name) return NextResponse.json({ error: "請輸入角色名稱。" }, { status: 400 });

    const existingRole = await prisma.role.findUnique({ where: { id }, select: { name: true } });
    if (existingRole?.name === "Admin" && !active) {
      return NextResponse.json({ error: "Admin 角色不可關閉。" }, { status: 400 });
    }

    const role = await prisma.role.update({
      where: { id },
      data: {
        name,
        notes: notes || null,
        active,
        pagePermissions: serializePagePermissions(pagePermissionKeys)
      }
    });
    await prisma.user.updateMany({
      where: { roleId: id, isAdmin: false },
      data: { pagePermissions: serializePagePermissions(pagePermissionKeys) }
    });
    return NextResponse.json(rolePayload(role));
  }

  if (type === "users") {
    const target = await prisma.user.findUnique({ where: { id } });
    if (!target) return NextResponse.json({ error: "找不到帳號。" }, { status: 404 });
    if (target.isAdmin) return NextResponse.json({ error: "Admin 帳號保留全部權限，不可調整。" }, { status: 400 });

    const roleId = body.roleId ? String(body.roleId) : target.roleId;
    const role = roleId ? await prisma.role.findUnique({ where: { id: roleId } }) : null;
    if (!role || !role.active) return NextResponse.json({ error: "請選擇有效角色。" }, { status: 400 });

    const password = String(body.password ?? "");
    if (password && password.length < 6) {
      return NextResponse.json({ error: "新密碼至少需要 6 碼。" }, { status: 400 });
    }

    const rolePermissionKeys = parsePagePermissions(role.pagePermissions);
    const pagePermissionKeys = constrainPermissions(rolePermissionKeys, auth.user);
    const user = await prisma.user.update({
      where: { id },
      data: {
        name: String(body.name ?? target.name).trim() || target.name,
        active: body.active === undefined ? target.active : Boolean(body.active),
        roleId,
        ...(password ? { passwordHash: await hashPassword(password) } : {}),
        pagePermissions: serializePagePermissions(pagePermissionKeys)
      },
      include: { role: { select: { id: true, name: true } } }
    });
    return NextResponse.json(userPayload(user));
  }

  return NextResponse.json({ error: "Unknown permission action." }, { status: 400 });
}
