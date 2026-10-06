import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { customerPhoneError, normalizeCustomerPhone } from "@/lib/customer-phone";

export async function saveCustomerProfile(body: Record<string, unknown>, id?: string) {
  const phone = normalizeCustomerPhone(body.phone);
  if ((!id || "phone" in body) && !phone) {
    return NextResponse.json({ error: customerPhoneError }, { status: 400 });
  }
  const data: { phone?: string; name?: string | null; email?: string | null; notes?: string | null; serviceLink?: string | null } = {};
  if (phone) data.phone = phone;
  for (const key of ["name", "email", "notes", "serviceLink"] as const) {
    if (!(key in body)) continue;
    if (body[key] !== null && typeof body[key] !== "string") {
      return NextResponse.json({ error: "客戶資料格式不正確。" }, { status: 400 });
    }
    data[key] = typeof body[key] === "string" ? body[key].trim() || null : null;
  }
  try {
    const customer = id
      ? await prisma.customer.update({ where: { id }, data })
      : await prisma.customer.create({ data: { ...data, phone: phone! } });
    return NextResponse.json(customer, { status: id ? 200 : 201 });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") return NextResponse.json({ error: "此手機號碼已有客戶資料。" }, { status: 409 });
      if (error.code === "P2025") return NextResponse.json({ error: "找不到客戶資料。" }, { status: 404 });
    }
    throw error;
  }
}
