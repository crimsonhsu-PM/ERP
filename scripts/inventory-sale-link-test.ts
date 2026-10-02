import assert from "node:assert/strict";
import { spawn, execFileSync } from "node:child_process";
import { mkdtempSync, openSync, closeSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../src/lib/password";

async function main() {
  const root = resolve(__dirname, "..");
  const folder = mkdtempSync(join(tmpdir(), "erp-inventory-link-test-"));
  const databaseUrl = `file:${join(folder, "test.db")}`;
  writeFileSync(join(folder, "test.db"), "");
  const env = { ...process.env, DATABASE_URL: databaseUrl, SESSION_SECRET: "isolated-inventory-test" };
  execFileSync(process.execPath, [join(root, "node_modules/prisma/build/index.js"), "db", "push", "--skip-generate"], {
    cwd: root, env, stdio: "pipe"
  });
  const db = new PrismaClient({ datasourceUrl: databaseUrl });
  const base = "http://127.0.0.1:3001";
  const probe = await fetch(`${base}/login`, { signal: AbortSignal.timeout(1000) }).catch(() => null);
  assert.equal(probe, null, "Port 3001 must be unused to avoid testing a different server");
  const logPath = join(folder, "server.log");
  const log = openSync(logPath, "w");
  const server = spawn(process.execPath, [join(root, "node_modules/next/dist/bin/next"), "dev", "-p", "3001"], {
    cwd: root, env, detached: true, stdio: ["ignore", log, log]
  });
  closeSync(log);
  console.log(`Isolated test server log: ${logPath}`);
  try {
    let ready = false;
    for (let attempt = 0; attempt < 60; attempt += 1) {
      if (server.exitCode !== null) throw new Error(`Test server exited; see ${logPath}`);
      const response = await fetch(`${base}/login`, { signal: AbortSignal.timeout(2000) }).catch(() => null);
      if (response?.ok) { ready = true; break; }
      await delay(500);
    }
    assert.ok(ready, "Test server should start");
    const email = "inventory-test@example.invalid";
    const password = "inventory-test-only";
    await db.user.create({ data: { email, name: "庫存驗證", isAdmin: true, passwordHash: await hashPassword(password) } });
    const login = await fetch(`${base}/api/auth/login`, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password })
    });
    assert.equal(login.status, 200);
    const cookie = login.headers.get("set-cookie")!.split(";")[0];
    async function request(path: string, method = "GET", body?: unknown, status = 200) {
      const response = await fetch(`${base}${path}`, {
        method, headers: { cookie, "Content-Type": "application/json" },
        body: body === undefined ? undefined : JSON.stringify(body)
      });
      const data = await response.json();
      assert.equal(response.status, status, JSON.stringify(data));
      return data;
    }
    assert.equal((await fetch(`${base}/api/inventory`)).status, 401);
    const person = await db.employee.create({ data: { name: "測試服務人員" } });
    const item = await db.item.create({ data: { name: "課程教材包（驗證）", type: "PHYSICAL_PRODUCT", price: 600, requiresInventory: true } });
    const purchase = await request("/api/inventory", "POST", { itemId: item.id, type: "PURCHASE", quantity: 10, reason: "進貨驗證" }, 201);
    const input = {
      soldAt: "2026-10-01", salesPersonId: person.id,
      lines: [{ itemId: item.id, quantity: 2, servicePersonId: person.id }]
    };
    const sale = await request("/api/sales", "POST", input, 201);
    const movement = await db.inventoryMovement.findFirstOrThrow({ where: { saleId: sale.id } });
    assert.equal(movement.quantity, -2);
    assert.equal(movement.reason, `銷售單 ${sale.id}`);
    await request(`/api/inventory/${movement.id}`, "PATCH", { reason: "已改過的說明" });
    await request(`/api/inventory/${movement.id}`, "PATCH", { saleId: null }, 400);
    await request("/api/inventory", "POST", { itemId: item.id, type: "SALE", quantity: -1, sale: { connect: { id: sale.id } } }, 400);
    const unrelated = await request("/api/inventory", "POST", {
      itemId: item.id, type: "ADJUSTMENT", quantity: 1, reason: `銷售單 ${sale.id}`
    }, 201);
    // A matching reason must never cause an unrelated record to be removed.
    await request(`/api/sales/${sale.id}`, "PATCH", { ...input, lines: [{ ...input.lines[0], quantity: 3 }] });
    const updated = await db.inventoryMovement.findMany({ where: { saleId: sale.id } });
    assert.equal(updated.length, 1);
    assert.equal(updated[0].quantity, -3);
    assert.equal(await db.inventoryMovement.count({ where: { id: movement.id } }), 0);
    assert.equal(await db.inventoryMovement.count({ where: { id: unrelated.id } }), 1);
    const beforeFailure = updated[0].id;
    // An invalid person causes the transaction to roll back the inventory removal.
    const failed = await fetch(`${base}/api/sales/${sale.id}`, {
      method: "PATCH", headers: { cookie, "Content-Type": "application/json" },
      body: JSON.stringify({ ...input, salesPersonId: "missing-employee" })
    });
    assert.ok(failed.status >= 400);
    assert.equal(await db.inventoryMovement.count({ where: { id: beforeFailure } }), 1);
    await request(`/api/inventory/${updated[0].id}`, "PATCH", { reason: "刪除前改過的說明" });
    await request(`/api/sales/${sale.id}`, "DELETE");
    assert.equal(await db.inventoryMovement.count({ where: { saleId: sale.id } }), 0);
    assert.equal(await db.inventoryMovement.count({ where: { id: { in: [purchase.id, unrelated.id] } } }), 2);

    const sample = await request("/api/sales", "POST", input, 201);
    const legacy = await db.inventoryMovement.findFirstOrThrow({ where: { saleId: sample.id } });
    await db.inventoryMovement.update({ where: { id: legacy.id }, data: { saleId: null } });
    const orphan = await db.inventoryMovement.create({ data: { itemId: item.id, type: "SALE", quantity: -1, reason: "舊紀錄未確認來源" } });
    const mismatch = await db.inventoryMovement.create({ data: { itemId: item.id, type: "SALE", quantity: -9, reason: `銷售單 ${sample.id}` } });
    const runBackfill = (...args: string[]) => JSON.parse(execFileSync(process.execPath,
      ["--import", "tsx", join(root, "scripts/backfill-inventory-sale-links.ts"), ...args], { cwd: root, env, encoding: "utf8" }).trim());
    assert.equal(runBackfill().matched, 1);
    assert.equal((await db.inventoryMovement.findUniqueOrThrow({ where: { id: legacy.id } })).saleId, null);
    assert.equal(runBackfill("--apply").matched, 1);
    assert.equal(runBackfill("--apply").matched, 0);
    const linked = await db.inventoryMovement.findUniqueOrThrow({ where: { id: legacy.id } });
    assert.deepEqual(linked, legacy);
    assert.equal(await db.inventoryMovement.count({ where: { id: { in: [orphan.id, mismatch.id] }, saleId: null } }), 2);
    const rows = await request("/api/inventory");
    assert.ok(rows.some((row: { id: string; saleId: string; reason: string }) => row.id === legacy.id && row.saleId === sample.id && row.reason === legacy.reason));
    // Database deletion also removes linked movements, including other sales deletion paths.
    await db.sale.delete({ where: { id: sample.id } });
    assert.equal(await db.inventoryMovement.count({ where: { id: legacy.id } }), 0);
    await request("/api/sales", "POST", input, 201);
    console.log("PASS: creation, edit/delete after reason changes, unrelated records, rollback, relation protection, backfill, cascade and API output");
    if (process.argv.includes("--preview")) {
      console.log("Preview ready at http://localhost:3001/inventory; test login: inventory-test@example.invalid / inventory-test-only");
      await new Promise<void>((resolve) => { process.once("SIGINT", resolve); process.once("SIGTERM", resolve); });
    }
  } finally {
    if (server.pid && server.exitCode === null) process.kill(-server.pid, "SIGTERM");
    await db.$disconnect();
  }
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
