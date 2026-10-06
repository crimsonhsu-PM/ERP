import type { Prisma } from "@prisma/client";
import { customerPhoneError, normalizeCustomerPhone } from "@/lib/customer-phone";

export class RegistrationCustomerError extends Error {}

/** Resolve the customer inside the same transaction as the registration and its sale. */
export async function resolveRegistrationCustomer(
  tx: Prisma.TransactionClient,
  input: Record<string, unknown>,
  previous?: { phone: string | null; attendeeName: string | null; customerId: string | null }
) {
  const phone = normalizeCustomerPhone("phone" in input ? input.phone : previous?.phone);
  if (!phone) throw new RegistrationCustomerError(customerPhoneError);
  if ("customer" in input) throw new RegistrationCustomerError("客戶由手機號碼識別，請勿直接設定客戶關聯。");
  if ("attendeeName" in input && input.attendeeName !== null && typeof input.attendeeName !== "string") {
    throw new RegistrationCustomerError("姓名格式不正確。");
  }
  const existing = await tx.customer.findUnique({ where: { phone } });
  if ("customerId" in input && input.customerId !== existing?.id) {
    throw new RegistrationCustomerError("客戶與手機號碼不一致，請重新確認手機號碼。");
  }
  const explicitName = "attendeeName" in input;
  const attendeeName = explicitName
    ? (typeof input.attendeeName === "string" ? input.attendeeName.trim() : "") || null
    : previous && normalizeCustomerPhone(previous.phone) === phone
      ? previous.attendeeName
      : existing?.name ?? null;
  const customer = await tx.customer.upsert({
    where: { phone },
    create: { phone, name: attendeeName },
    update: explicitName ? { name: attendeeName } : {}
  });
  return { customerId: customer.id, phone, attendeeName };
}
