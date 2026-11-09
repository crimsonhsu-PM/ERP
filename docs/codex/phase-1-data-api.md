# 第 1 期：資料修正＋監控 API

## 1-1 資料修正
1. `Item` 新增欄位 `safetyStock Int?`（可為空，空值代表不檢查）。
   - 進銷項目頁（`src/lib/module-config.ts` 的 items 設定）加入「安全庫存」數字欄位，只有 `requiresInventory` 的品項需要填。
2. 香油錢等「價格為 0」的品項：
   - `src/lib/sales.ts` 的 `createSalesFromInput`：當品項 `price` 為 0 且該行沒有提供大於 0 的 `unitPrice` 時，回傳錯誤「{品項名稱} 沒有固定價格，請輸入金額」（status 400）。
   - 營收登記頁（`SalesPage.tsx`）選到價格為 0 的品項時，單價欄位 placeholder 顯示「請輸入金額」，送出前在前端也做同樣檢查。
3. 寫一支一次性腳本 `scripts/deactivate-test-items.ts`：把名稱以「權限驗收活動品項」開頭的品項設為 `active=false`。只執行一次，不要刪除資料。

## 1-2 計算邏輯：`src/lib/monitor/`
建立三個函式，型別要完整匯出：

### `getMonitorSummary(user: SessionUser)`
只計算使用者有權限的區塊，沒權限的區塊不要出現在回傳裡（key 不存在）。

| key | 權限 | 內容 |
|---|---|---|
| `revenue` | `dashboard` | `today`, `todayCount`, `month`, `monthCount`, `lastMonth`, `lastMonthCount`（只算 CLOSED） |
| `sales` | `sales` | `today`, `todayCount`, `openCount`（status = OPEN 的筆數，不限日期） |
| `lighting` | `lighting` | `year`（今年），`byType: Record<LampType, number>`（今年 `litYear` 的筆數） |
| `events` | `events` | 進行中或未來最近一場 `active` 活動：`title`, `startsAt`, `daysLeft`, `registered`, `paid`, `pending`（status REGISTERED） |
| `inventory` | `inventory` | 每個 `requiresInventory` 品項：`name`, `qty`（InventoryMovement 加總，PURCHASE 為正、SALE/CONSUMPTION 為負、ADJUSTMENT 依數量正負），`safetyStock`, `low`（有 safetyStock 且 qty < safetyStock） |
| `service` | `customer-service-records` | `weekRecords`（近 7 天 CustomerServiceRecord 筆數），`pendingPayments`（CoursePayment.status = 「待確認」） |
| `shifts` | `shifts` | `todayOnDuty`（今天時段內的 Shift 筆數），`todayCharity`（type = CHARITY） |

每個區塊另外帶 `status: "ok" | "warn" | "alarm"` 和 `reasons: string[]`，規則如下（與 Demo 的燈號規則一致）：
- sales：`openCount > 0` → warn
- events：`pending > 0` 且 `daysLeft <= 5` → warn；`registered` 達名額（目前 Event 沒有名額欄位，先略過此條）
- inventory：任一品項 `low` → alarm
- service：`pendingPayments > 0` → warn
- shifts：`todayOnDuty === 0` → alarm
- revenue、lighting：固定 ok

### `getMonitorHealth()`（僅 isAdmin）
- `dbOk`, `dbLatencyMs`：執行 `prisma.$queryRaw\`SELECT 1\`` 計時，失敗時 `dbOk=false`。
- `lastBackupAt`：讀取 `.local-backups/` 資料夾內最新檔案的修改時間，找不到回傳 null。
- `line`、`openai`：最後一次呼叫結果 `{ ok: boolean | null, at: string | null, error: string | null }`。
  - 新增 `src/lib/monitor/external-status.ts`，提供 `recordExternalCall(service, ok, error?)`，用模組層級變數保存即可（重啟會清空，可接受）。
  - 在 `src/app/api/line/webhook/route.ts` 裡，LINE 回覆與 OpenAI 呼叫成功／失敗時呼叫它。
- `checkedAt`：回傳時間。

### `getMonitorAnalysis()`
- `last7Days`：近 7 天（含今天）每天的營收與筆數。
- `monthByType`：本月營收依 `Item.type` 加總（用 SaleLine.lineTotal）。
- `topItems`：本月營收前 5 名品項：`name`, `quantity`, `amount`。
- `compare`：本月至今與上月的 `revenue`, `count`, `avgOrderValue`。

## 1-3 API
| 路由 | 權限 | 回傳 |
|---|---|---|
| `GET /api/monitor/summary` | 登入即可（內容依權限過濾） | `getMonitorSummary` |
| `GET /api/monitor/health` | 僅 isAdmin，否則 403 | `getMonitorHealth` |
| `GET /api/monitor/analysis` | `reports-monthly` | `getMonitorAnalysis` |

## 驗收條件
1. `pnpm prisma:push` 成功，進銷項目頁可以編輯安全庫存。
2. 營收登記選「香油錢」不輸入金額送出，前端與 API 都會擋下並顯示提示。
3. 執行 `scripts/deactivate-test-items.ts` 後，兩個測試品項不再出現在營收登記的品項選單。
4. 新增 `scripts/check-monitor.ts`，用 admin 身分呼叫三個函式並印出 JSON；數字與數據總覽頁、庫存紀錄頁一致。
5. 用非管理員帳號呼叫 `/api/monitor/health` 得到 403；`/api/monitor/summary` 只包含該帳號有權限的區塊。
6. `pnpm exec tsc --noEmit` 通過。
