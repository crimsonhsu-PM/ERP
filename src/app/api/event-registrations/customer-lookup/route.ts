import { NextRequest, NextResponse } from "next/server";
import { requireApiModulePermission } from "@/lib/api-auth";
import { customerPhoneError, normalizeCustomerPhone } from "@/lib/customer-phone";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const auth = await requireApiModulePermission("event-registrations");
  if (auth.response) return auth.response;
  const phone = normalizeCustomerPhone(request.nextUrl.searchParams.get("phone"));
  if (!phone) return NextResponse.json({ error: customerPhoneError }, { status: 400 });
  const customer = await prisma.customer.findUnique({ where: { phone }, select: { name: true } });
  return NextResponse.json({ found: Boolean(customer), name: customer?.name ?? "" }, {
    headers: { "Cache-Control": "no-store" }
  });
}
