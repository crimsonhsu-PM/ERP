import { createHmac } from "crypto";

const channelSecret = process.env.LINE_CHANNEL_SECRET || "test-secret";
const userId = process.env.LINE_TEST_USER_ID || process.env.LINE_ALLOWED_USER_IDS?.split(/[,\s]+/)[0] || "U_TEST_USER";
const text = process.argv.slice(2).join(" ") || "今天 小美 現金 占卜服務 1 1800 服務人員阿明 銷售阿珍";

const body = JSON.stringify({
  destination: "U_TEST_DESTINATION",
  events: [
    {
      type: "message",
      replyToken: "test-reply-token",
      source: { type: "user", userId },
      message: { type: "text", id: "test-message-id", text }
    }
  ]
});

const signature = createHmac("sha256", channelSecret).update(body).digest("base64");

console.log(
  [
    "curl -i -X POST http://localhost:3000/api/line/webhook",
    `  -H 'Content-Type: application/json'`,
    `  -H 'x-line-signature: ${signature}'`,
    `  --data '${body.replace(/'/g, "'\\''")}'`
  ].join(" \\\n")
);
