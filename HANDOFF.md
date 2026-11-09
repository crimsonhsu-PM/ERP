# UNV.PLAN ERP｜維護交接

## 系統用途

這是服務型門市的營收、商品庫存、活動、員工、客戶與報表管理系統。正式本機版具有登入與頁面權限，供日常營運資料登錄與查詢；公開展示版是另一個 repo，見 https://github.com/crimsonhsu-PM/erp-sites-demo。

## 技術架構

- TypeScript、React、Next.js App Router、Ant Design。
- Prisma ORM、SQLite；資料模型在 `prisma/schema.prisma`。主要套件：`@prisma/client`、`antd`、`dayjs`。
- 主要入口：`src/app/`；API 路由同在 `src/app/api/`。

## 資料夾結構

- `src/app/`：頁面、路由、API；`src/components/`：營運表單與表格。
- `src/lib/`：權限、驗證、銷售、照明、客戶及共用業務規則。
- `prisma/`：Schema、種子資料及本機 SQLite；`scripts/`：人工驗證腳本。
- `public/`：靜態資源；`docs/`：規格與歷史開發紀錄。

## 從 clone 到畫面

需要 Node.js、pnpm。執行：

```bash
git clone https://github.com/crimsonhsu-PM/ERP.git
cd ERP
pnpm install
cp .env.example .env
# 編輯 .env：DATABASE_URL=file:./dev.db；SESSION_SECRET=自行產生的長隨機值
pnpm prisma:generate
pnpm prisma:push
pnpm seed
pnpm dev
```

瀏覽 http://localhost:3000 。種子示範管理員為 `admin@example.com`，密碼 `password123`；這只是公開的本機示範憑證，正式部署務必另設帳號。

## 測試

`pnpm exec tsc --noEmit` 檢查型別；`pnpm build` 檢查正式建置。`scripts/` 有銷售與庫存連動、客戶及報名關聯等人工／腳本驗證，執行前先閱讀各檔案；目前沒有統一的 `pnpm test`。本次交接沒有更改業務功能。

## 部署與搬遷

這個 repo 是本機 Next.js／Prisma SQLite 原始碼，沒有確認的正式線上部署。展示網址為 https://unv-plan-erp-demo.lazyer1016.chatgpt.site，但其程式與部署設定在獨立 `erp-sites-demo` repo，不能把兩者視為同一分支直接覆蓋。

一般 Node 主機可 `pnpm build && pnpm start`，需提供持久 SQLite 磁碟及 `.env` 的正式值；Vercel 等無持久本機磁碟環境須先改用外部資料庫與相應 Prisma 設定。GitHub Pages 不能執行此伺服器與資料庫。部署需 GitHub 寫入權、主機部署權及正式環境密鑰管理權。不要上傳 `.env`、`prisma/dev.db`。

## 資料模型

`User` 連到 `Role`；`Item` 連到 `SaleLine` 和 `InventoryMovement`；`Sale` 含銷售與服務人員並連一筆銷售明細；`Event` 連活動商品與 `EventRegistration`；`Customer` 連服務紀錄、報名及課程付款；`Employee` 連標籤與班表。另有固定支出、零用金、資產、SOP、點燈價格與紀錄。欄位與關係以 `prisma/schema.prisma` 為準，請勿從舊規格反推資料庫。

## 業務規則位置

- 銷售與庫存：`src/lib/sales.ts`、`src/app/api/sales/`、`src/lib/api-modules.ts`。
- 權限與登入：`src/lib/permissions.ts`、`api-auth.ts`、`page-auth.ts`、`src/app/api/auth/`。
- 模組欄位：`src/lib/module-config.ts`；點燈與客戶：`src/lib/lighting.ts`、`customer-profile.ts`。
- 頁面實作：`src/components/`；報表 API：`src/app/api/reports/`。

## 示範資料重置

本機可刪除自己的 `prisma/dev.db` 後重新執行 `pnpm prisma:push && pnpm seed`。此操作會清空本機資料；`seed.ts` 部分交易資料使用 `create`，在已有資料庫重跑可能重複，勿對正式資料庫執行。公開 Sites Demo 的重置方式見其獨立交接文件。

## 已知問題與未完成事項

- `seed.ts` 尚非完全冪等；財務歷史成本、跨表刪改及時間區域邏輯應依現行程式再驗證。
- `.env.example` 僅列用途與空值；部署密鑰及資料庫由接手者在主機安全設定。
- 此 repo 有先前留存的本機未提交 ERP 畫面／文件變更；本次依使用者要求一併提交，未改動其功能內容。
