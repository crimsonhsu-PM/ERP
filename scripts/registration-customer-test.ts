import assert from "node:assert/strict";
import { spawn, execFileSync } from "node:child_process";
import { mkdtempSync, openSync, closeSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../src/lib/password";
import { normalizeCustomerPhone } from "../src/lib/customer-phone";

async function main() {
  assert.equal(normalizeCustomerPhone("+886 912-345-678"), "0912345678");
  assert.equal(normalizeCustomerPhone("０９１２３４５６７８"), "0912345678");
  assert.equal(normalizeCustomerPhone("0912abc678"), null);
  const root = resolve(__dirname, "..");
  const folder = mkdtempSync(join(tmpdir(), "erp-registration-test-"));
  const databaseUrl = `file:${join(folder, "test.db")}`;
  writeFileSync(join(folder, "test.db"), "");
  const env = { ...process.env, DATABASE_URL: databaseUrl, SESSION_SECRET: "isolated-registration-test" };
  execFileSync(process.execPath, [join(root, "node_modules/prisma/build/index.js"), "db", "push", "--skip-generate"], { cwd: root, env, stdio: "pipe" });
  const db = new PrismaClient({ datasourceUrl: databaseUrl });
  const base = "http://127.0.0.1:3001";
  assert.equal(await fetch(`${base}/login`, { signal: AbortSignal.timeout(1000) }).catch(() => null), null, "Port 3001 must be unused");
  const logPath = join(folder, "server.log");
  const log = openSync(logPath, "w");
  const server = spawn(process.execPath, [join(root, "node_modules/next/dist/bin/next"), "dev", "-p", "3001"], { cwd: root, env, detached: true, stdio: ["ignore", log, log] });
  closeSync(log);
  console.log(`Test log: ${logPath}`);
  try {
    let ready = false;
    for (let i = 0; i < 60; i++) {
      if (server.exitCode !== null) throw new Error(`Test server exited: ${logPath}`);
      if ((await fetch(`${base}/login`, { signal: AbortSignal.timeout(2000) }).catch(() => null))?.ok) { ready = true; break; }
      await delay(500);
    }
    assert.ok(ready);
    const password = "registration-test-only";
    const passwordHash = await hashPassword(password);
    const role = await db.role.create({ data: { name: "測試人員", active: true } });
    await db.user.create({ data: { email: "registration-test@example.invalid", name: "報名驗證", isAdmin: true, passwordHash } });
    await db.user.create({ data: { email: "event-only@example.invalid", name: "活動人員", passwordHash, roleId: role.id, pagePermissions: JSON.stringify(["events"]) } });
    await db.user.create({ data: { email: "no-events@example.invalid", name: "無活動權限", passwordHash, roleId: role.id, pagePermissions: JSON.stringify(["dashboard"]) } });
    async function login(email: string) {
      const response = await fetch(`${base}/api/auth/login`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
      assert.equal(response.status, 200);
      return response.headers.get("set-cookie")!.split(";")[0];
    }
    const cookie = await login("registration-test@example.invalid");
    async function request(path: string, method = "GET", body?: unknown, status = 200, auth = cookie) {
      const response = await fetch(`${base}${path}`, { method, headers: { cookie: auth, "Content-Type": "application/json" }, body: body === undefined ? undefined : JSON.stringify(body) });
      const data = await response.json();
      assert.equal(response.status, status, JSON.stringify(data));
      return data;
    }
    const lookup = "/api/event-registrations/customer-lookup?phone=";
    assert.equal((await fetch(`${base}${lookup}0912345678`)).status, 401);
    await request(`${lookup}0912345678`, "GET", undefined, 403, await login("no-events@example.invalid"));
    await request(`${lookup}bad`, "GET", undefined, 400);
    const person = await db.employee.create({ data: { name: "測試服務人員" } });
    const event = await db.event.create({ data: { title: "手機報名測試活動", active: true } });
    const item = await db.item.create({ data: { name: "手機報名測試品項", type: "RITUAL_SERVICE", eventId: event.id, servicePersonId: person.id, price: 600 } });
    const input = { eventId: event.id, itemId: item.id, phone: "0912345678", registeredAt: "2026-10-03", isPaid: false };
    const first = await request("/api/event-registrations", "POST", input, 201);
    assert.ok(first.customerId);
    assert.equal(first.attendeeName, null);
    assert.equal(first.customer.name, null);
    const second = await request("/api/event-registrations", "POST", { ...input, phone: "+886 912-345-678", attendeeName: "小美" }, 201);
    assert.equal(second.customerId, first.customerId);
    assert.equal(await db.customer.count(), 1);
    assert.equal(second.phone, "0912345678");
    const eventsCookie = await login("event-only@example.invalid");
    assert.deepEqual(await request(`${lookup}%2B886912345678`, "GET", undefined, 200, eventsCookie), { found: true, name: "小美" });
    const third = await request("/api/event-registrations", "POST", input, 201, eventsCookie);
    assert.equal(third.attendeeName, "小美");
    // Name changes become future defaults, while historical registration names remain unchanged.
    await request(`/api/event-registrations/${second.id}`, "PATCH", { attendeeName: "小美新姓名" });
    assert.equal((await request(`${lookup}0912345678`)).name, "小美新姓名");
    assert.equal((await db.eventRegistration.findUniqueOrThrow({ where: { id: third.id } })).attendeeName, "小美");
    await request(`/api/event-registrations/${third.id}`, "PATCH", { isPaid: true });
    assert.equal((await request(`${lookup}0912345678`)).name, "小美新姓名", "Payment toggle must not restore an old name");
    const paid = await db.eventRegistration.findUniqueOrThrow({ where: { id: third.id } });
    assert.equal((await db.sale.findUniqueOrThrow({ where: { id: paid.saleId! } })).customerName, "小美");
    await request(`/api/event-registrations/${third.id}`, "PATCH", { isPaid: false });
    assert.equal(await db.sale.count({ where: { id: paid.saleId! } }), 0);
    await request("/api/event-registrations", "POST", { ...input, phone: "" }, 400);
    await request("/api/event-registrations", "POST", { ...input, phone: undefined }, 400);
    await request(`/api/event-registrations/${first.id}`, "PATCH", { phone: null }, 400);
    await request("/api/event-registrations", "POST", { ...input, customerId: "wrong-customer" }, 400);
    await request("/api/event-registrations", "POST", { ...input, customer: { create: { phone: "0999999999" } } }, 400);
    const countBeforeFailure = await db.customer.count();
    await request("/api/event-registrations", "POST", { ...input, phone: "0999999999", paymentMethod: "INVALID" }, 500);
    assert.equal(await db.customer.count(), countBeforeFailure, "Failed registration must roll back new customer");
    await request("/api/customers", "POST", { phone: "0912-345-678" }, 409);
    await request("/api/customers", "POST", { name: "沒有手機" }, 400);
    const other = await request("/api/customers", "POST", { phone: "0987654321" }, 201);
    await request(`/api/customers/${other.id}`, "PATCH", { phone: "+886912345678" }, 409);
    const moved = await request(`/api/event-registrations/${first.id}`, "PATCH", { phone: "0987-654-321", attendeeName: "另一位客戶" });
    assert.equal(moved.customerId, other.id);
    assert.equal((await request(`${lookup}0912345678`)).name, "小美新姓名");
    await request(`/api/event-registrations/${first.id}`, "DELETE");
    assert.ok(await db.customer.findUnique({ where: { id: other.id } }), "Deleting registration preserves customer");
    await request(`/api/event-registrations/${second.id}`, "PATCH", { attendeeName: "" });
    assert.deepEqual(await request(`${lookup}0912345678`), { found: true, name: "" });
    await request(`/api/event-registrations/${second.id}`, "PATCH", { attendeeName: "小美" });
    assert.deepEqual(await request(`${lookup}0900000000`), { found: false, name: "" });
    // Database constraints independently enforce customer identity and registration links.
    await assert.rejects(db.customer.create({ data: { phone: "0912345678" } }));
    await assert.rejects(db.customer.delete({ where: { id: second.customerId } }));
    console.log("PASS: phone normalization, unique customers, optional names, lookup permissions, historical names, edits, payments, rollback and deletion");
    if (process.argv.includes("--preview")) {
      console.log("Preview: http://localhost:3001/events ; registration-test@example.invalid / registration-test-only");
      await new Promise<void>((resolve) => { process.once("SIGINT", resolve); process.once("SIGTERM", resolve); });
    }
  } finally {
    if (server.pid && server.exitCode === null) process.kill(-server.pid, "SIGTERM");
    await db.$disconnect();
  }
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
