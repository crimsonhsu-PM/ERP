# ERP/POS MVP

服務業為主、商品銷售為輔的 Next.js + Prisma ERP/POS MVP。

## 本機啟動

1. 複製環境變數

```bash
cp .env.example .env
```

2. 安裝套件

```bash
pnpm install
```

3. 建立資料庫

```bash
pnpm prisma:push
```

4. 匯入示範資料

```bash
pnpm seed
```

5. 啟動

```bash
pnpm dev
```

預設示範帳號：

- Email: `admin@example.com`
- Password: `password123`

## 已包含模組

- 登入與建立帳號
- 進銷項目
- 營收流水帳
- 每日、月、季、年報表
- 庫存與資產
- 零用金
- 員工與排班
- SOP 與步驟
- 活動期別與報名
- 客服資訊、客服紀錄、線上課程收費
