import { PrismaClient } from "@prisma/client";
import { randomUUID } from "node:crypto";
import { normalizeCustomerPhone } from "../src/lib/customer-phone";

// Raw reads also support the old nullable schema before prisma db push.
const db = new PrismaClient();
type CustomerRow = { id: string; phone: string | null; name: string | null };
type RegistrationRow = CustomerRow & { customerId: string | null; attendeeName: string | null };

async function main() {
  const apply = process.argv.includes("--apply");
  const result = await db.$transaction(async (tx) => {
    const customers = await tx.$queryRaw<CustomerRow[]>`SELECT id, phone, name FROM Customer`;
    const registrations = await tx.$queryRaw<RegistrationRow[]>`
      SELECT id, phone, customerId, attendeeName FROM EventRegistration ORDER BY updatedAt, createdAt, id`;
    const byPhone = new Map<string, CustomerRow>();
    const problems: { kind: string; id: string }[] = [];
    for (const customer of customers) {
      const phone = normalizeCustomerPhone(customer.phone);
      if (!phone) { problems.push({ kind: "customer_missing_or_invalid_phone", id: customer.id }); continue; }
      if (byPhone.has(phone)) problems.push({ kind: "duplicate_customer_phone", id: customer.id });
      byPhone.set(phone, { ...customer, phone });
    }
    const plans: { registration: RegistrationRow; phone: string; customer: CustomerRow }[] = [];
    const newCustomers = new Set<string>();
    for (const registration of registrations) {
      const phone = normalizeCustomerPhone(registration.phone);
      if (!phone) { problems.push({ kind: "registration_missing_or_invalid_phone", id: registration.id }); continue; }
      let customer = byPhone.get(phone);
      if (registration.customerId && registration.customerId !== customer?.id) {
        problems.push({ kind: "registration_customer_phone_mismatch", id: registration.id });
        continue;
      }
      if (!customer) {
        customer = { id: `customer-${randomUUID()}`, phone, name: registration.attendeeName };
        byPhone.set(phone, customer);
        newCustomers.add(customer.id);
      }
      // Preserve registration snapshots; keep the last saved name for future lookup.
      customer.name = registration.attendeeName;
      plans.push({ registration, phone, customer });
    }
    if (apply && problems.length) throw new Error(`尚有舊資料待處理：${JSON.stringify(problems)}`);
    if (apply) {
      const now = Date.now();
      for (const customer of byPhone.values()) {
        if (newCustomers.has(customer.id)) {
          await tx.$executeRaw`INSERT INTO Customer (id, name, phone, createdAt, updatedAt)
            VALUES (${customer.id}, ${customer.name ?? ""}, ${customer.phone}, ${now}, ${now})`;
        } else {
          await tx.$executeRaw`UPDATE Customer SET phone = ${customer.phone}, name = ${customer.name ?? ""} WHERE id = ${customer.id}`;
        }
      }
      for (const { registration, phone, customer } of plans) {
        await tx.$executeRaw`UPDATE EventRegistration SET phone = ${phone}, customerId = ${customer.id} WHERE id = ${registration.id}`;
      }
    }
    return { mode: apply ? "apply" : "preview", registrations: registrations.length, linkable: plans.length, newCustomers: newCustomers.size, problems };
  });
  console.log(JSON.stringify(result));
}

main().catch((error) => { console.error(error.message); process.exitCode = 1; }).finally(() => db.$disconnect());
