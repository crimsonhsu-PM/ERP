# 庫存營收關聯

- `InventoryMovement.saleId` 是可空外鍵，指向 `Sale.id`，並設有索引。
- 一般營收及共用新增營收流程產生的銷售扣庫存會填入 `saleId`。手動新增庫存紀錄不指定此欄位；手動 `SALE` 紀錄也可以沒有來源營收。
- 營收編輯、刪除以 `saleId` 尋找庫存紀錄，不再比對 `reason`。刪除營收時資料庫會連帶刪除其關聯庫存紀錄，符合目前直接刪除營收的政策。
- `GET /api/inventory`、`GET /api/inventory/:id` 回傳 `saleId` 與 `reason`。庫存列表顯示「原因」。
- 庫存 POST/PATCH 不接受手動指定 `saleId` 或 `sale`（400），避免變更來源關聯。

## 舊資料更新

先使用 SQLite 備份，再執行 `pnpm prisma:generate` 與 `pnpm prisma:push`。

預覽：`pnpm exec tsx scripts/backfill-inventory-sale-links.ts`

套用：`pnpm exec tsx scripts/backfill-inventory-sale-links.ts --apply`

只處理尚未有 saleId 的 SALE 紀錄：原因必須完整符合「銷售單 {現存營收 ID}」，且品項與扣庫存數量須吻合該營收明細。無法確認的資料保持原樣；腳本可重複執行，不改動數量、日期或原因。

## 驗證

`pnpm exec tsx scripts/inventory-sale-link-test.ts`

測試自行建立暫存 SQLite 資料庫並在 3001 埠啟動測試伺服器，使用測試帳號登入，驗證營收新增、修改、刪除、原因文字變更後的追蹤、無關庫存保留、API 關聯保護及舊資料回填。測試結束會關閉伺服器，不修改本機工作資料庫。
