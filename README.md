# ERP/POS Portfolio Demo

服務業為主、商品銷售為輔的 Next.js + Prisma ERP/POS 作品展示版。

這個版本移除了登入門檻，適合放在作品集給 HR、用人主管或技術主管直接瀏覽操作。首頁會直接進入數據總覽，所有主要模組都可用示範資料操作。

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
pnpm run dev
```

開啟：

```text
http://localhost:3000
```

## 已包含模組

- 進銷項目
- 營收流水帳
- 每日、月、季、年報表
- 庫存與資產
- 零用金
- 員工與排班
- SOP 與步驟
- 活動期別與報名
- 客服資訊、客服紀錄、線上課程收費
