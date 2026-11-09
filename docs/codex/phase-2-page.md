# 第 2 期：監控分析中心頁面

## 2-1 路由與權限
1. `src/lib/permissions.ts` 的 `pagePermissions` 最前面新增 `{ key: "monitor", label: "監控分析中心", href: "/monitor", group: "營收" }`。
2. 新增頁面 `src/app/(erp)/monitor/page.tsx`，用 `requirePagePermission("monitor")`。
3. 根路由 `/`：使用者有 `monitor` 權限就導向 `/monitor`，否則維持導向 `/dashboard`（避免沒權限的人被擋在首頁）。
4. 小島與權限對應（沒權限的島不顯示，連同橋）：
   數據總覽=`dashboard`、營收櫃台=`sales`、點燈殿=`lighting`、活動報名=`events`、庫存小倉=`inventory`、客服小屋=`customer-service-records`、人員排班=`shifts`、機房=僅 isAdmin。

## 2-2 元件結構（`src/components/monitor/`）
- `MonitorPage.tsx`（client）：整頁版面、資料抓取、模式切換。
- `IslandScene.tsx`：three.js 場景，從 Demo 移植。用 `next/dynamic` 載入並設定 `ssr: false`。安裝 `three` 與 `@types/three`（固定版本）。改用 npm 套件寫法，`OrbitControls` 從 `three/examples/jsm/controls/OrbitControls.js` 匯入。離開頁面時要 dispose renderer、geometry、material，並移除事件監聽。
- `IslandDashboard.tsx`：儀表板模式，用 antd `Card` + `Tag` + `Statistic` 的格狀卡片。
- `IslandDetailPanel.tsx`：右側詳情，用 antd `Card`、`Tabs`、`Descriptions`、`Tag`、`Statistic`。
- `SalesQuickForm.tsx`、`LightingQuickForm.tsx`：登記表單，用 antd `Form`。

## 2-3 行為（以 Demo 為準）
1. 頁首：標題「監控分析中心」、系統狀態 Tag（僅 admin）、`Segmented` 切換「資訊島／儀表板」（記在 localStorage）、「回報問題」按鈕（第 3 期才接功能，這期先隱藏）。
2. 每 30 秒抓一次 `/api/monitor/summary`；admin 另外抓 `/api/monitor/health`。
3. 超過 120 秒沒有成功取得資料：所有業務小島變灰（狀態「資料過期」），頁面上方顯示 antd `Alert`「已 N 秒沒有取得新資料，燈號暫停判斷」，表單送出按鈕停用。
4. 燈號同時用顏色與圖示表達：正常 `CheckCircleFilled`、注意 `ExclamationCircleFilled`、異常 `CloseCircleFilled`、過期 `MinusCircleFilled`。
5. 營收櫃台的「登記營收」分頁：呼叫現有 `POST /api/sales`，payload 格式與 `SalesPage.tsx` 相同；支援多個品項、香油錢必填金額。成功後用 antd `message.success` 提示並立即重抓 summary。
6. 點燈殿的「登記點燈」分頁：呼叫現有點燈 API（參考 `LightingPage.tsx` 的送出格式），金額取 `LampPrice`。
7. 數據總覽的內容見 2-4 第 6 點（與 `DashboardClient` 一致，不另設「分析」分頁）。
8. 機房（僅 admin）：顯示 health 各項數值、白話說明區塊、燈號規則；`lastBackupAt` 超過 24 小時為 warn，`dbLatencyMs > 500` 為 warn，`dbOk=false` 為 alarm，LINE／OpenAI 最近一次失敗為 warn。
9. 寬度小於 768px：3D 與面板上下排列；提供「儀表板」模式作為舊設備的備案。

## 2-4 後續確認的設計決策（以 Demo 為準）
1. **小島造型**：全部是「溫馨小屋」風格（Demo 的 `buildCozyShop`、`buildIsland`、`gableRoof`、`house` 等函式可直接移植）：
   數據總覽=市政廳＋鐘塔（鐘面顯示真實時間）、營收櫃台=小商店、點燈殿=台灣廟宇（重簷、燕尾脊）、活動報名=市集帳篷、庫存小倉=木造穀倉、客服小屋=郵局（綠紅郵筒）、人員排班=三層員工宿舍、機房=石造機房。
2. **主題標誌**：每座島上方有浮動標誌（金幣、長條圖、三盞陶碗油燈、日曆、紙箱、對話泡泡、時鐘、齒輪）。
3. **營收櫃台最醒目**：放在最靠近鏡頭的位置並放大 1.18 倍；門口金幣堆依「今日營收 ÷ 每日目標」堆高，附進度環，達標時發光。
4. **固定「＋ 登記營收」按鈕**：3D 區右下角，資訊島與儀表板模式都顯示，按下直接開啟營收櫃台的登記表單。進入頁面時預設選取營收櫃台。
5. **點小島會放大鏡頭**，並出現「看全景」按鈕。
6. **數據總覽的內容必須與現有 `DashboardClient.tsx` 一致**：今日營收、本月營收累積（含目標與達成率）、每日營收長條圖、出售類型營收占比（甜甜圈＋可展開品項清單）。
   - 請直接共用 `DashboardClient` 的計算與元件，不要另寫一套；能抽成共用元件就抽出來。
   - 每日／每月目標沿用 `DashboardClient` 存在 localStorage 的同一組 key，兩個頁面要讀到同一個目標。
7. 右側「今日概況」卡片：今日營收（目標＋進度）、本月營收累積（目標＋進度）、今日銷售筆數與客單價、待處理件數。
8. **人員排班要顯示在班人員**（對照 `ShiftsCalendarPage`）：詳情列出今天班別內的人，每人顯示姓名、類別標籤（正職／兼職依 `Employee.role` 是否含「正職」「兼職」判斷，公益服務班顯示「公益」）、職務、班別時段（目前營業班為 12:00–21:00）、班別類型（現場服務=藍、公益服務=綠，同 ERP Tag 顏色）。平常 2 人在班：少於 2 人黃燈、0 人紅燈（僅在營業時段內判斷）。島上走動的小人頭上顯示姓名，人數＝在班人數。

## 驗收條件
1. admin 登入後，首頁自動進入 `/monitor`，看得到 8 座島。
2. 只有 `sales`、`lighting` 權限的帳號登入後，只看得到營收櫃台和點燈殿，且看不到機房與系統狀態 Tag。
3. 在營收櫃台登記一筆兩個品項的營收，營收登記頁出現同一筆資料，小島數字 30 秒內（送出後立即）更新。
4. 停掉 dev server 超過 120 秒，畫面變灰並出現提示；重新啟動後自動恢復。
5. 切換深色模式，所有文字與卡片可正常閱讀。
6. 離開 `/monitor` 再回來，沒有重複的 canvas，console 沒有 WebGL 相關警告。
7. `pnpm exec tsc --noEmit` 通過。

## 2-5 第 1 期 API 需要補的欄位（本期一併處理）
- `/api/monitor/summary` 的 `shifts` 區塊加上：
  - `onDuty: { employeeId, name, role, startsAt, endsAt, type }[]`（現在時間落在班別時段內）
  - `laterToday: { employeeId, name, role, startsAt, endsAt, type }[]`（今天有班但尚未開始或已結束）
- Employee 沒有「員工代碼」欄位時，畫面上只顯示姓名與職務即可，不要新增欄位。
- `/api/monitor/analysis` 目前回傳的是近 7 天／Top 5／月比較，**改成與 `DashboardClient` 相同的資料**：本月每日營收（`dailyRevenueBars`）與出售類型營收占比（含各類型底下的品項、件數、金額、占比）。最好把 `dashboard/page.tsx` 裡的計算抽到 `src/lib/` 共用，兩邊呼叫同一個函式。

## 2-6 效能要求（以「電腦整天開著放在櫃台」為前提）
1. **合併靜態幾何**：每座島建好後，把不會動的零件依材質用 `BufferGeometryUtils.mergeGeometries` 合併（會動的金幣、火焰、旗子、小人、燈號氣球、LED 保持獨立）。目標：整個場景 draw calls < 150（用 `renderer.info.render.calls` 檢查）。
2. **閒置降速**：有操作（滑鼠、滾輪、點擊、資料更新、鏡頭動畫）後 30 秒內正常更新，最高 30 fps；閒置超過 30 秒降到約 10 fps；`document.hidden` 時完全停止 render loop，回到前景再恢復。
3. **陰影只算一次**：`renderer.shadowMap.autoUpdate = false`，建好場景後 `needsUpdate = true` 算一次；之後只有場景結構改變（例如切換身分隱藏小島）才重算。
4. **效能偵測提示**：連續 5 秒平均低於 20 fps 時，用 antd `message` 提示「這台電腦顯示 3D 較吃力，建議切換為儀表板模式」，並提供一鍵切換（只提示一次，記在 localStorage）。
5. `setPixelRatio(Math.min(devicePixelRatio, 1.5))`，儀表板模式時完全不 render 3D。
6. 離開頁面時 dispose 所有 geometry、material、texture 與 renderer。

### 驗收
- 開發模式下在畫面角落（僅 admin、可關閉）顯示 fps 與 draw calls，閒置 30 秒後 fps 明顯下降。
- 切到別的分頁再回來，畫面正常且沒有重複動畫。

## 2-7 手機不顯示 3D
- 手機開啟時一律使用**原本的數據總覽 `/dashboard`**，不載入、不顯示 3D：
  - 根路由 `/`：用 `next/headers` 的 `userAgent()` 判斷，`device.type === "mobile"` 時導向 `/dashboard`；電腦且有 `monitor` 權限才導向 `/monitor`。
  - `/monitor` 頁本身：client 端 `matchMedia("(max-width: 768px)")` 成立時 `router.replace("/dashboard")`，且在判斷完成前不要 dynamic import three.js（避免手機下載 3D 套件）。
- 平板（寬度大於 768px）照電腦版處理，但仍保留「儀表板」模式切換。
- 驗收：用手機模擬（Chrome DevTools 選 iPhone）開 `/` 與 `/monitor` 都會落在 `/dashboard`，Network 面板沒有載入 three.js。
