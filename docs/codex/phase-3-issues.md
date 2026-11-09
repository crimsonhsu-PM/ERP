# 第 3 期：問題回報

## 3-1 資料表
新增 `IssueReport`：
- `id`, `createdAt`, `updatedAt`
- `reporterId`（User，可為空）
- `module String`、`impact String`（完全無法作業／可以先用別的方式／只是想問問）、`description String`
- `snapshot String`（JSON 字串：當下的 health、目前頁面、最近 5 筆事件）
- `aiSeverity String?`（高／中／低）、`aiSummary String?`
- `status`：enum `OPEN` / `IN_PROGRESS` / `RESOLVED`，預設 OPEN

## 3-2 API
- `POST /api/monitor/issues`：登入即可。建立回報；伺服器端補上 health 快照。
- `POST /api/monitor/issues/triage`：登入即可。傳入 module、impact、description，回傳 AI 初判 `{ severity, cause, workaround, needEngineer }`。
  - 使用 LINE webhook 已在用的 OpenAI 設定（`OPENAI_API_KEY`、`OPENAI_MODEL`）。
  - 沒有設定金鑰或呼叫失敗時，改用規則判斷（邏輯照 Demo 的 `aiTriage`），回傳時標示 `source: "rules"`。
- `GET /api/monitor/issues`、`PATCH /api/monitor/issues/[id]`（改狀態）：僅 isAdmin。

## 3-3 LINE 通知
- 新增環境變數 `LINE_ENGINEER_TARGET_ID`（群組或使用者 ID）。有設定時，建立回報後用現有 `LINE_CHANNEL_ACCESS_TOKEN` 推播摘要；沒設定就略過，不能讓回報失敗。

## 3-4 介面
- 頁首「回報問題」按鈕開啟 antd `Modal`：功能（Select，預設為目前選取的小島）、影響程度（Radio.Group）、描述（TextArea）、自動附上的快照（唯讀）。
- 「請 AI 先看看」顯示初判結果；「送出給工程師」建立回報，完成畫面提供「複製回報內容」。
- 機房島詳情顯示回報列表，admin 可切換狀態。

## 驗收條件
1. 一般帳號可以送出回報，但看不到回報列表。
2. 未設定 `OPENAI_API_KEY` 時，AI 初判仍有結果，且標示為規則判斷。
3. 未設定 `LINE_ENGINEER_TARGET_ID` 時，回報仍成功建立。
4. admin 在機房島把回報改為「已解決」，重新整理後狀態保留。
5. `pnpm exec tsc --noEmit` 通過。
