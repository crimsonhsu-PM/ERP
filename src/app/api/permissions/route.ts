import { NextRequest, NextResponse } from "next/server";
import { hashPassword } from "@/lib/auth";
import { requireApiPermission } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";
import {
  allPagePermissionKeys,
  constrainPermissions,
  pagePermissions,
  parsePagePermissions,
  serializePagePermissions,
  userPermissionKeys
} from "@/lib/permissions";

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

export async function GET() {
  const auth = await requireApiPermission("permissions");
  if (auth.response) return auth.response;

  const [roles, users] = await Promise.all([
    prisma.role.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.user.findMany({
      include: { role: { select: { id: true, name: true } } },
      orderBy: { createdAt: "desc" }
    })
  ]);

  return NextResponse.json({
    pagePermissions,
    currentUser: auth.user
      ? {
          id: auth.user.id,
          email: auth.user.email,
          name: auth.user.name,
          isAdmin: auth.user.isAdmin,
          pagePermissions: userPermissionKeys(auth.user)
        }
      : null,
    roles: roles.map(rolePayload),
    users: users.map(userPayload)
  });
}

export async function POST(request: NextRequest) {
  const auth = await requireApiPermission("permissions");
  if (auth.response) return auth.response;
  if (!auth.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const type = String(body.type ?? "");

  if (type === "role") {
    const name = String(body.name ?? "").trim();
    const notes = String(body.notes ?? "").trim();
    const pagePermissionKeys = constrainPermissions(body.pagePermissions, auth.user);
    if (!name) return NextResponse.json({ error: "請輸入角色名稱。" }, { status: 400 });

    const role = await prisma.role.create({
      data: {
        name,
        notes: notes || null,
        pagePermissions: serializePagePermissions(pagePermissionKeys)
      }
    });
    return NextResponse.json(rolePayload(role), { status: 201 });
  }

  if (type === "user") {
    const email = String(body.email ?? "").trim().toLowerCase();
    const name = String(body.name ?? "").trim() || email.split("@")[0] || email;
    const password = String(body.password ?? "");
    const roleId = body.roleId ? String(body.roleId) : null;
    if (!email || password.length < 6 || !roleId) {
      return NextResponse.json({ error: "請填寫 Email、角色，密碼至少 6 碼。" }, { status: 400 });
    }

    const role = await prisma.role.findUnique({ where: { id: roleId } });
    if (!role || !role.active) return NextResponse.json({ error: "請選擇有效角色。" }, { status: 400 });

    const rolePermissionKeys = parsePagePermissions(role.pagePermissions);
    const pagePermissionKeys = constrainPermissions(rolePermissionKeys, auth.user);
    const user = await prisma.user.create({
      data: {
        email,
        name,
        roleId,
        passwordHash: await hashPassword(password),
        pagePermissions: serializePagePermissions(pagePermissionKeys),
        isAdmin: false
      },
      include: { role: { select: { id: true, name: true } } }
    });
    return NextResponse.json(userPayload(user), { status: 201 });
  }

  return NextResponse.json({ error: "Unknown permission action." }, { status: 400 });
}
