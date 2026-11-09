# 監控分析中心：Codex 開發說明

## 分工
- **Claude**：撰寫每一期的規格與驗收條件，並在每期完成後檢查程式碼（git diff）與型別檢查結果。
- **Codex**：依本資料夾的規格實作，一次只做一期。
- **使用者**：把任務轉交給 Codex，並把 Codex 的完成回報轉給 Claude。

## 參考檔案
- `docs/codex/monitoring-center.html`：已完成的互動 Demo（3D 小島、儀表板模式、登記表單、機房監控、問題回報、分析分頁）。
  - 3D 場景（three.js r128 寫法）可以移植沿用；面板 UI 必須改用 antd 元件重寫，不要照抄 Demo 的 CSS。
  - Demo 裡的數字都是假資料，正式版一律從資料庫計算。

## 例外說明（重要）
`AGENTS.md` 寫著「避免裝飾性頁面」。**監控分析中心是經使用者確認的例外**，可以包含 3D 場景。其他規則照舊：沿用現有 patterns、小範圍修改、Ant Design 為基準。

## 共通規則
1. 開始前建立分支 `feature/monitor-center`，每一期完成後 commit 一次，commit 訊息以 `monitor: 第N期` 開頭。
2. API 權限一律用 `src/lib/api-auth.ts` 的 `requireApiPermission`；頁面用 `requirePagePermission`。
3. 資料庫變更沿用本專案的 `pnpm prisma:push`（不要建立 migrations 資料夾）。
4. 日期區間沿用 `src/app/(erp)/dashboard/page.tsx` 的本地時間算法，保持一致。
5. 計算邏輯放在 `src/lib/monitor/`，API route 只負責權限與回傳。
6. 顏色一律取 antd theme token（`theme.useToken()`），深色模式要能正常顯示。
7. 每一期結束前執行 `pnpm exec tsc --noEmit`，必須通過。
8. **每一期做完就停下來**，回報：修改／新增的檔案清單、驗收條件逐條結果、有疑問或偏離規格的地方。不要自行開始下一期。

## 開發期程
| 期 | 檔案 | 內容 |
|---|---|---|
| 1 | `phase-1-data-api.md` | 資料修正＋三支監控 API |
| 2 | `phase-2-page.md` | 監控分析中心頁面、預設首頁、權限 |
| 3 | `phase-3-issues.md` | 問題回報、AI 初判、LINE 通知（**暫緩**，2026-10-27 使用者決定先不做） |

## 目前狀態（2026-10-27）
- 第 1、2 期已完成並 commit 在 `feature/monitor-center` 分支，尚未合併回主線。
- 第 2 期 3D 造型修正（`phase-2-fixes.md`）與第 3 期皆暫緩。
