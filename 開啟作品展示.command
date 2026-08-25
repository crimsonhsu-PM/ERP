#!/bin/zsh

set -e

PROJECT_DIR="/Users/xudanhe/Documents/ERP-Portfolio-Demo"
RUNTIME_PATH="/Users/xudanhe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:/Users/xudanhe/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/fallback:$PATH"
DEMO_PORT="3001"
DEMO_URL="http://localhost:${DEMO_PORT}"

cd "$PROJECT_DIR"
export PATH="$RUNTIME_PATH"

if ! command -v pnpm >/dev/null 2>&1; then
  echo "找不到 pnpm，請先安裝 Node.js / pnpm。"
  read -r "?按 Enter 關閉..."
  exit 1
fi

if [ ! -f ".env" ]; then
  echo "第一次啟動：建立本機環境設定..."
  cp .env.example .env
fi

if lsof -nP -iTCP:${DEMO_PORT} -sTCP:LISTEN >/dev/null 2>&1; then
  echo "ERP Demo 已經在 ${DEMO_URL} 執行。"
  open "${DEMO_URL}"
  exit 0
fi

if [ ! -d "node_modules" ]; then
  echo "第一次啟動：安裝套件中..."
  pnpm install
fi

if [ ! -f "prisma/dev.db" ]; then
  echo "第一次啟動：建立示範資料庫..."
  pnpm prisma:generate
  pnpm prisma:push
  pnpm seed
fi

(
  for i in {1..40}; do
    if curl -fsS "${DEMO_URL}" >/dev/null 2>&1; then
      open "${DEMO_URL}"
      exit 0
    fi
    sleep 1
  done
) &

echo "啟動作品展示版 ERP..."
echo "瀏覽器會自動開啟：${DEMO_URL}"
echo "請保持這個視窗開著；要停止 Demo 時按 Control + C。"
PORT="${DEMO_PORT}" pnpm run dev
