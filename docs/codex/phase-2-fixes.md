# 第 2 期修正清單

> **狀態：暫緩（2026-10-27）**。使用者決定 ERP 畫面維持第 2 期現狀，不執行本清單。

第 2 期的功能、權限、手機導向、效能與資料共用都驗收通過（`tsc --noEmit` 通過）。
**未通過的是 3D 畫面**：目前的小島是簡化方塊造型，主題標誌是文字符號，和 `docs/codex/monitoring-center.html`（使用者確認過的設計）差很多。請依下列修正，其餘程式不要動。

## F-1 小島造型改為移植 Demo（最重要）
- 把 Demo 裡的建島程式移植成 TypeScript，放在 `src/components/monitor/scene/`：
  `kit`、`puff`、`cozyTree`、`bush`、`stones`、`flowerBox`、`flowerPotSmall`、`mushrooms`、`barrel`、`crate`、`hangLamp`、`lampPost`、`frontWin`、`sideWin`、`door`、`house`、`gableRoof`、`buildCozyShop`、`buildIsland`（各島分支）。
- 造型、尺寸、座標、顏色**照 Demo**，逐島對照：
  數據總覽＝市政廳（門廊白柱、三角山牆、鐘塔＋真實時間鐘面、噴水池、兩支旗子）、營收櫃台＝溫馨小商店、點燈殿＝台灣廟宇（重簷、燕尾脊、雙龍搶珠、三川門門釘、「點燈殿」匾額、紅燈籠、石燈、天公爐冒煙、六色燈架）、活動報名＝紅白條紋帳篷＋報名桌、庫存小倉＝紅棕木造穀倉、客服小屋＝郵局（綠紅郵筒、飛進郵筒的信、腳踏車）、人員排班＝三層員工宿舍、機房＝石造機房（衛星碟、三座機櫃 LED）。
- 與效能要求並存：**不會動的零件**用現有 `StaticBuilder` 依材質合併；**會動的**（燈籠、香爐煙、旗子、信件、小人、LED、衛星碟、噴水池水滴、鐘針、吊燈亮度）保持獨立 Mesh。
- 3D 場景顏色用 Demo 的固定配色，**不要套 antd token**（antd token 只用在面板 UI）。深色模式只需調整背景，小島顏色不變。
- 光線：three 0.180 是物理光照，Demo（r128）的強度不能直接照抄。請用 `MeshToonMaterial`＋三段 gradientMap（95/165/225），調整 Ambient／Hemisphere／Directional 強度，讓畫面亮度與 Demo 截圖相近（使用者先前反映「太亮」，寧可略暗）。

## F-2 主題標誌改為 3D 物件
照 Demo `buildEmblem`：營收櫃台＝旋轉金幣（$ 要正立）、數據總覽＝上升長條圖＋箭頭、點燈殿＝三盞陶碗油燈（火焰搖曳＋光暈）、活動報名＝日曆、庫存＝紙箱、客服＝對話泡泡（三個點輪流跳）、人員排班＝時鐘、機房＝齒輪（斷線時停轉）。拿掉現在的文字符號 sprite。

## F-3 驗收
1. 提供 `/monitor` 全景截圖與營收櫃台放大截圖，和 Demo 並排比對，造型一致。
2. 移植後 draw calls 仍 < 150；閒置降速、背景分頁停止 render 照常運作。
3. `pnpm exec tsc --noEmit` 通過，commit 訊息 `monitor: 第2期修正 3D 造型`。
4. 完成後停下來回報，**不要開始第 3 期**。
