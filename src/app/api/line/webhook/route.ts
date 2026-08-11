import { createHmac, timingSafeEqual } from "crypto";
import type { PaymentMethod } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { createSalesFromInput, type SaleLineInput } from "@/lib/sales";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

type LineWebhookBody = {
  events?: LineWebhookEvent[];
};

type LineWebhookEvent = {
  type?: string;
  replyToken?: string;
  source?: {
    userId?: string;
  };
  message?: {
    type?: string;
    text?: string;
  };
};

type ParsedSale = {
  intent: "create_sale" | "unknown";
  soldAt: string | null;
  customerName: string | null;
  salesPersonId: string | null;
  paymentMethod: "CASH" | "TRANSFER" | "CARD" | "LINE_PAY" | "OTHER" | null;
  notes: string | null;
  lines: {
    itemId: string | null;
    servicePersonId: string | null;
    quantity: number | null;
    unitPrice: number | null;
  }[];
  missingFields: string[];
  confidence: number;
};

type ValidatedSale =
  | { error: string }
  | {
      saleInput: {
        soldAt: string;
        customerName: string | null;
        salesPersonId: string;
        paymentMethod: PaymentMethod;
        status: "CLOSED";
        notes: string | null;
        lines: SaleLineInput[];
      };
    };

const serviceEmployeeTags = new Set(["外部員工", "內部員工"]);

function allowedUserIds() {
  return new Set(
    String(process.env.LINE_ALLOWED_USER_IDS || "")
      .split(/[,\s]+/)
      .map((value) => value.trim())
      .filter(Boolean)
  );
}

function verifyLineSignature(rawBody: string, signature: string | null) {
  const channelSecret = process.env.LINE_CHANNEL_SECRET;
  if (!channelSecret || !signature) return false;

  const expected = createHmac("sha256", channelSecret).update(rawBody).digest("base64");
  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  return signatureBuffer.length === expectedBuffer.length && timingSafeEqual(signatureBuffer, expectedBuffer);
}

async function replyToLine(replyToken: string | undefined, text: string) {
  const accessToken = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  if (!replyToken || !accessToken) return;

  await fetch("https://api.line.me/v2/bot/message/reply", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      replyToken,
      messages: [{ type: "text", text: text.slice(0, 5000) }]
    })
  });
}

function extractOpenAIText(payload: Record<string, unknown>) {
  if (typeof payload.output_text === "string") return payload.output_text;
  const output = Array.isArray(payload.output) ? payload.output : [];
  for (const item of output) {
    if (!item || typeof item !== "object") continue;
    const content = Array.isArray((item as { content?: unknown }).content) ? (item as { content: unknown[] }).content : [];
    for (const part of content) {
      if (!part || typeof part !== "object") continue;
      const text = (part as { text?: unknown }).text;
      if (typeof text === "string") return text;
    }
  }
  return "";
}

function formatToday() {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
  return formatter.format(new Date());
}

async function parseSaleMessage(message: string, items: Awaited<ReturnType<typeof activeItems>>, employees: Awaited<ReturnType<typeof serviceEmployees>>) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not configured");
  }

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-5-mini",
      input: [
        {
          role: "developer",
          content:
            "你是 ERP 營收登記解析器。只從使用者訊息抽取資料，不要發明不存在的品項或人員。日期以 Asia/Taipei 為準。若無法在提供的清單中唯一確認品項或人員，對應 id 填 null 並列入 missingFields。付款方式只可為 CASH、TRANSFER、CARD、LINE_PAY、OTHER。"
        },
        {
          role: "user",
          content: JSON.stringify({
            today: formatToday(),
            message,
            activeItems: items.map((item) => ({
              id: item.id,
              name: item.name,
              type: item.type,
              price: Number(item.price),
              requiresInventory: item.requiresInventory,
              defaultServicePersonId: item.servicePersonId
            })),
            employees: employees.map((employee) => ({
              id: employee.id,
              name: employee.name,
              tags: employee.tags.map((tag) => tag.name)
            }))
          })
        }
      ],
      text: {
        format: {
          type: "json_schema",
          name: "line_sale_entry",
          strict: true,
          schema: {
            type: "object",
            additionalProperties: false,
            required: ["intent", "soldAt", "customerName", "salesPersonId", "paymentMethod", "notes", "lines", "missingFields", "confidence"],
            properties: {
              intent: { type: "string", enum: ["create_sale", "unknown"] },
              soldAt: { type: ["string", "null"], description: "YYYY-MM-DD" },
              customerName: { type: ["string", "null"] },
              salesPersonId: { type: ["string", "null"] },
              paymentMethod: { type: ["string", "null"], enum: ["CASH", "TRANSFER", "CARD", "LINE_PAY", "OTHER", null] },
              notes: { type: ["string", "null"] },
              lines: {
                type: "array",
                items: {
                  type: "object",
                  additionalProperties: false,
                  required: ["itemId", "servicePersonId", "quantity", "unitPrice"],
                  properties: {
                    itemId: { type: ["string", "null"] },
                    servicePersonId: { type: ["string", "null"] },
                    quantity: { type: ["number", "null"] },
                    unitPrice: { type: ["number", "null"] }
                  }
                }
              },
              missingFields: { type: "array", items: { type: "string" } },
              confidence: { type: "number" }
            }
          }
        }
      }
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenAI API error: ${response.status} ${errorText}`);
  }

  const payload = (await response.json()) as Record<string, unknown>;
  const outputText = extractOpenAIText(payload);
  return JSON.parse(outputText) as ParsedSale;
}

async function activeItems() {
  return prisma.item.findMany({
    where: { active: true },
    orderBy: { name: "asc" }
  });
}

async function serviceEmployees() {
  const employees = await prisma.employee.findMany({
    where: { active: true },
    include: { tags: true },
    orderBy: { name: "asc" }
  });
  return employees.filter((employee) => employee.tags.some((tag) => serviceEmployeeTags.has(tag.name)));
}

function validateParsedSale(
  parsed: ParsedSale,
  items: Awaited<ReturnType<typeof activeItems>>,
  employees: Awaited<ReturnType<typeof serviceEmployees>>
): ValidatedSale {
  const itemIds = new Set(items.map((item) => item.id));
  const itemById = new Map(items.map((item) => [item.id, item]));
  const employeeIds = new Set(employees.map((employee) => employee.id));
  const missing = new Set(parsed.missingFields);

  if (parsed.intent !== "create_sale") missing.add("營收內容");
  if (!parsed.soldAt) missing.add("銷售日期");
  if (!parsed.salesPersonId || !employeeIds.has(parsed.salesPersonId)) missing.add("銷售人員");
  if (!Array.isArray(parsed.lines) || parsed.lines.length === 0) missing.add("銷售明細");

  const lines: SaleLineInput[] = [];
  for (const line of parsed.lines || []) {
    const item = line.itemId ? itemById.get(line.itemId) : null;
    if (!line.itemId || !item || !itemIds.has(line.itemId)) {
      missing.add("品項");
      continue;
    }
    const quantity = Number(line.quantity ?? 1);
    if (!Number.isFinite(quantity) || quantity <= 0) {
      missing.add(`${item.name} 數量`);
      continue;
    }
    if (item.type !== "OIL_DONATION" && (!line.servicePersonId || !employeeIds.has(line.servicePersonId))) {
      missing.add(`${item.name} 服務人員`);
      continue;
    }
    const unitPrice = line.unitPrice == null ? undefined : Number(line.unitPrice);
    if (unitPrice != null && (!Number.isFinite(unitPrice) || unitPrice < 0)) {
      missing.add(`${item.name} 單價`);
      continue;
    }
    lines.push({
      itemId: line.itemId,
      servicePersonId: item.type === "OIL_DONATION" ? "" : line.servicePersonId || "",
      quantity: Math.trunc(quantity),
      unitPrice
    });
  }

  if (missing.size > 0) {
    return { error: `無法新增營收，請補充或確認：${[...missing].join("、")}。` };
  }

  const soldAt = parsed.soldAt as string;
  const salesPersonId = parsed.salesPersonId as string;

  return {
    saleInput: {
      soldAt,
      customerName: parsed.customerName || null,
      salesPersonId,
      paymentMethod: parsed.paymentMethod || "CASH",
      status: "CLOSED",
      notes: parsed.notes || null,
      lines
    }
  };
}

function successMessage(sales: { id: string; total: unknown; lines: { item: { name: string }; quantity: number }[] }[]) {
  const total = sales.reduce((sum, sale) => sum + Number(sale.total), 0);
  const details = sales
    .flatMap((sale) => sale.lines.map((line) => `${line.item.name} x${line.quantity}`))
    .join("、");
  return `已新增營收：${details}，合計 ${total.toLocaleString()} 元。`;
}

async function handleEvent(event: LineWebhookEvent) {
  if (event.type !== "message" || event.message?.type !== "text" || !event.message.text) return;

  const userId = event.source?.userId;
  if (!userId || !allowedUserIds().has(userId)) {
    await replyToLine(event.replyToken, "此 LINE 使用者未開通營收登記權限。");
    return;
  }

  try {
    const [items, employees] = await Promise.all([activeItems(), serviceEmployees()]);
    const parsed = await parseSaleMessage(event.message.text, items, employees);
    const validation = validateParsedSale(parsed, items, employees);
    if ("error" in validation) {
      await replyToLine(event.replyToken, validation.error);
      return;
    }

    const result = await createSalesFromInput(validation.saleInput);
    if ("error" in result) {
      await replyToLine(event.replyToken, `新增營收失敗：${result.error}`);
      return;
    }

    await replyToLine(event.replyToken, successMessage(result.sales));
  } catch (error) {
    console.error("LINE sales webhook failed", error);
    await replyToLine(event.replyToken, "AI 解析或新增營收時發生錯誤，請稍後再試。");
  }
}

export async function POST(request: NextRequest) {
  const rawBody = await request.text();
  if (!verifyLineSignature(rawBody, request.headers.get("x-line-signature"))) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let body: LineWebhookBody;
  try {
    body = JSON.parse(rawBody) as LineWebhookBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const events = Array.isArray(body.events) ? body.events : [];
  await Promise.all(events.map(handleEvent));
  return NextResponse.json({ ok: true });
}
