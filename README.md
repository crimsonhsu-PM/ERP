# ERP/POS MVP

服務業為主、商品銷售為輔的 Next.js + Prisma ERP/POS MVP。公開作品展示版另見 https://unv-plan-erp-demo.lazyer1016.chatgpt.site/；其來源與此 repo 分開維護。

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

## LINE Chatbot 營收登記

LINE 與 OpenAI 相關設定及用途列在 `.env.example`；需要時複製到未追蹤的 `.env` 填入自己的值。不要將正式憑證提交到 GitHub。

本機 MVP 可用 ngrok 或 Cloudflare Tunnel 將 `http://localhost:3000` 暴露成 HTTPS，並在 LINE Developers Console 將 webhook URL 設為：

```text
https://你的公開網址/api/line/webhook
```

LINE 訊息範例：

```text
今天 小美 現金 占卜服務 1 1800 服務人員阿明 銷售阿珍
8/11 王小姐 匯款 塔羅占卜 1800 服務阿明 銷售阿珍 備註末五碼12345
```

本機簽章測試可先啟動 `pnpm run dev`，再產生 curl 指令：

```bash
LINE_CHANNEL_SECRET="test-secret" LINE_ALLOWED_USER_IDS="U_TEST_USER" pnpm exec tsx scripts/line-webhook-test.ts "今天 小美 現金 占卜服務 1 1800 服務人員阿明 銷售阿珍"
```

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
