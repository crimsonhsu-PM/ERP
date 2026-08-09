export type FieldKind =
  | "text"
  | "textarea"
  | "number"
  | "date"
  | "dateRange"
  | "datetime"
  | "checkbox"
  | "select"
  | "relation"
  | "multiRelation";

export type ModuleField = {
  name: string;
  label: string;
  kind: FieldKind;
  required?: boolean;
  options?: { label: string; value: string }[];
  endName?: string;
  relationModule?: string;
  relationLabel?: string;
  hiddenInTable?: boolean;
  hiddenInForm?: boolean;
};

export type ModuleConfig = {
  slug: string;
  title: string;
  description: string;
  api: string;
  fields: ModuleField[];
  columns: string[];
  softDelete?: boolean;
};

export const paymentMethods = [
  { label: "現金", value: "CASH" },
  { label: "匯款", value: "TRANSFER" },
  { label: "刷卡", value: "CARD" },
  { label: "Line Pay", value: "LINE_PAY" },
  { label: "其他", value: "OTHER" }
];

export const itemTypeOptions = [
  { label: "占卜服務", value: "DIVINATION_SERVICE" },
  { label: "儀式服務", value: "RITUAL_SERVICE" },
  { label: "風水服務", value: "FENG_SHUI_SERVICE" },
  { label: "課程服務", value: "COURSE_SERVICE" },
  { label: "香油捐贈", value: "OIL_DONATION" },
  { label: "實體商品", value: "PHYSICAL_PRODUCT" }
];

export const moduleConfigs: ModuleConfig[] = [
  {
    slug: "items",
    title: "進銷項目",
    description: "管理服務與實體商品，商品可設定是否需要庫存。",
    api: "items",
    columns: ["type", "name", "price", "cost", "requiresInventory", "stockQuantity"],
    fields: [
      {
        name: "type",
        label: "類型",
        kind: "select",
        required: true,
        options: itemTypeOptions
      },
      { name: "name", label: "名稱", kind: "text", required: true },
      { name: "price", label: "售價", kind: "number" },
      { name: "cost", label: "成本", kind: "number" },
      { name: "requiresInventory", label: "需要庫存", kind: "checkbox" },
      { name: "notes", label: "備註", kind: "textarea", hiddenInTable: true }
    ]
  },
  {
    slug: "inventory",
    title: "庫存紀錄",
    description: "記錄進貨、耗用、調整與銷售扣庫存。",
    api: "inventory",
    columns: ["item", "type", "quantity", "stockQuantity", "movedAt"],
    fields: [
      {
        name: "itemId",
        label: "品項",
        kind: "relation",
        relationModule: "items",
        relationLabel: "name",
        required: true
      },
      {
        name: "type",
        label: "異動類型",
        kind: "select",
        required: true,
        options: [
          { label: "進貨", value: "PURCHASE" },
          { label: "銷售", value: "SALE" },
          { label: "調整", value: "ADJUSTMENT" },
          { label: "耗用", value: "CONSUMPTION" }
        ]
      },
      { name: "quantity", label: "數量", kind: "number", required: true },
      { name: "movedAt", label: "異動時間", kind: "datetime" },
      { name: "reason", label: "原因", kind: "textarea" }
    ]
  },
  {
    slug: "assets",
    title: "固定/變動資產",
    description: "管理店內設備、用品與其他資產。",
    api: "assets",
    softDelete: true,
    columns: ["type", "name", "value", "purchasedAt", "depreciation", "active"],
    fields: [
      {
        name: "type",
        label: "資產類型",
        kind: "select",
        required: true,
        options: [
          { label: "固定資產", value: "FIXED" },
          { label: "變動資產", value: "VARIABLE" }
        ]
      },
      { name: "name", label: "名稱", kind: "text", required: true },
      { name: "value", label: "價值", kind: "number", required: true },
      { name: "purchasedAt", label: "購買日期", kind: "date" },
      { name: "depreciation", label: "折舊", kind: "number" },
      { name: "active", label: "啟用", kind: "checkbox" },
      { name: "notes", label: "備註", kind: "textarea", hiddenInTable: true }
    ]
  },
  {
    slug: "petty-cash",
    title: "零用金",
    description: "記錄零用金收入、支出與用途。",
    api: "petty-cash",
    columns: ["type", "amount", "beforeAmount", "afterAmount", "purpose", "employee", "entryDate", "checkedOut"],
    fields: [
      {
        name: "type",
        label: "類型",
        kind: "select",
        required: true,
        options: [
          { label: "支出", value: "EXPENSE" },
          { label: "存入", value: "INCOME" }
        ]
      },
      { name: "amount", label: "金額", kind: "number", required: true },
      { name: "purpose", label: "用途", kind: "text", required: true },
      {
        name: "employeeId",
        label: "代墊者",
        kind: "relation",
        relationModule: "employees",
        relationLabel: "name"
      },
      { name: "checkedOut", label: "出帳", kind: "checkbox", hiddenInForm: true },
      { name: "entryDate", label: "日期", kind: "date" }
    ]
  },
  {
    slug: "fixed-expenses",
    title: "固定支出",
    description: "記錄固定支出、支出對象與支出日期。",
    api: "fixed-expenses",
    columns: ["type", "amount", "purpose", "employee", "entryDate"],
    fields: [
      {
        name: "type",
        label: "類型",
        kind: "select",
        required: true,
        options: [
          { label: "支出", value: "EXPENSE" }
        ]
      },
      { name: "amount", label: "金額", kind: "number", required: true },
      {
        name: "purpose",
        label: "用途",
        kind: "select",
        required: true,
        options: [
          { label: "房租", value: "房租" },
          { label: "水電", value: "水電" },
          { label: "正職人員薪資", value: "正職人員薪資" },
          { label: "兼職人員薪資", value: "兼職人員薪資" },
          { label: "物品修繕", value: "物品修繕" }
        ]
      },
      {
        name: "employeeId",
        label: "支出對象",
        kind: "relation",
        relationModule: "employees",
        relationLabel: "name",
        required: true
      },
      { name: "entryDate", label: "日期", kind: "date" }
    ]
  },
  {
    slug: "employees",
    title: "人員管理",
    description: "管理員工基本資料與啟用狀態。",
    api: "employees",
    softDelete: true,
    columns: ["name", "role", "tags", "active"],
    fields: [
      { name: "name", label: "姓名", kind: "text", required: true },
      { name: "role", label: "職務", kind: "text" },
      {
        name: "tagIds",
        label: "TAG",
        kind: "multiRelation",
        relationModule: "employee-tags",
        relationLabel: "name"
      }
    ]
  },
  {
    slug: "shifts",
    title: "排班紀錄",
    description: "管理現場服務與公益服務排班。",
    api: "shifts",
    columns: ["employee", "type", "startsAt", "endsAt", "location"],
    fields: [
      {
        name: "employeeId",
        label: "員工",
        kind: "relation",
        relationModule: "employees",
        relationLabel: "name",
        required: true
      },
      {
        name: "type",
        label: "班別",
        kind: "select",
        required: true,
        options: [
          { label: "現場服務", value: "ONSITE" },
          { label: "公益服務", value: "CHARITY" }
        ]
      },
      { name: "startsAt", label: "開始時間", kind: "datetime", required: true },
      { name: "endsAt", label: "結束時間", kind: "datetime", required: true },
      { name: "location", label: "地點", kind: "text" },
      { name: "notes", label: "備註", kind: "textarea", hiddenInTable: true }
    ]
  },
  {
    slug: "sops",
    title: "工作流程 SOP",
    description: "建立 SOP 主檔與目前狀態。",
    api: "sops",
    columns: ["title", "category", "status"],
    fields: [
      { name: "title", label: "標題", kind: "text", required: true },
      { name: "category", label: "分類", kind: "text" },
      {
        name: "status",
        label: "狀態",
        kind: "select",
        required: true,
        options: [
          { label: "草稿", value: "DRAFT" },
          { label: "啟用", value: "ACTIVE" },
          { label: "封存", value: "ARCHIVED" }
        ]
      },
      { name: "description", label: "說明", kind: "textarea", hiddenInTable: true }
    ]
  },
  {
    slug: "sop-steps",
    title: "SOP 步驟",
    description: "管理每份 SOP 的執行步驟。",
    api: "sop-steps",
    columns: ["sop", "sortOrder", "title", "owner", "status"],
    fields: [
      {
        name: "sopId",
        label: "SOP",
        kind: "relation",
        relationModule: "sops",
        relationLabel: "title",
        required: true
      },
      { name: "sortOrder", label: "順序", kind: "number" },
      { name: "title", label: "步驟標題", kind: "text", required: true },
      { name: "owner", label: "負責人/角色", kind: "text" },
      {
        name: "status",
        label: "狀態",
        kind: "select",
        required: true,
        options: [
          { label: "待辦", value: "TODO" },
          { label: "進行中", value: "DOING" },
          { label: "完成", value: "DONE" }
        ]
      },
      { name: "description", label: "說明", kind: "textarea", hiddenInTable: true }
    ]
  },
  {
    slug: "events",
    title: "活動管理",
    description: "管理不定期活動、活動品項與前置作業。",
    api: "events",
    columns: ["title", "startsAt", "endsAt"],
    fields: [
      { name: "title", label: "活動名稱", kind: "text", required: true },
      { name: "startsAt", label: "活動日期", kind: "dateRange", endName: "endsAt" }
    ]
  },
  {
    slug: "event-registrations",
    title: "活動報名登記",
    description: "記錄報名、付款與匯款狀態。",
    api: "event-registrations",
    columns: ["event", "item", "attendeeName", "registeredAt", "paidAmount", "status"],
    fields: [
      {
        name: "eventId",
        label: "活動",
        kind: "relation",
        relationModule: "events",
        relationLabel: "title",
        required: true
      },
      {
        name: "itemId",
        label: "進銷項目",
        kind: "relation",
        relationModule: "items",
        relationLabel: "name",
        required: true
      },
      { name: "registeredAt", label: "日期", kind: "date", required: true },
      {
        name: "attendeeName",
        label: "姓名",
        kind: "text",
        required: true
      },
      { name: "phone", label: "電話", kind: "text" },
      { name: "paidAmount", label: "金額", kind: "number", required: true },
      { name: "paymentMethod", label: "付款方式", kind: "select", options: paymentMethods },
      { name: "remittanceRef", label: "匯款資訊", kind: "text" },
      {
        name: "isPaid",
        label: "付款",
        kind: "checkbox",
        hiddenInTable: true
      }
    ]
  },
  {
    slug: "customers",
    title: "客服資訊",
    description: "管理客戶資料、客服連結與備註。",
    api: "customers",
    columns: ["name", "phone", "email", "serviceLink"],
    fields: [
      { name: "name", label: "姓名", kind: "text", required: true },
      { name: "phone", label: "電話", kind: "text" },
      { name: "email", label: "Email", kind: "text" },
      { name: "serviceLink", label: "客服連結", kind: "text" },
      { name: "notes", label: "備註", kind: "textarea", hiddenInTable: true }
    ]
  },
  {
    slug: "customer-service-records",
    title: "客服使用紀錄",
    description: "記錄客服主題、資訊連結與追蹤備註。",
    api: "customer-service-records",
    columns: ["customer", "topic", "link", "recordedAt"],
    fields: [
      {
        name: "customerId",
        label: "客戶",
        kind: "relation",
        relationModule: "customers",
        relationLabel: "name",
        required: true
      },
      { name: "topic", label: "主題", kind: "text", required: true },
      { name: "link", label: "連結", kind: "text" },
      { name: "recordedAt", label: "記錄時間", kind: "datetime" },
      { name: "notes", label: "備註", kind: "textarea", hiddenInTable: true }
    ]
  },
  {
    slug: "course-payments",
    title: "線上課程收費",
    description: "追蹤課程收費、匯款與確認狀態。",
    api: "course-payments",
    columns: ["customer", "courseName", "amount", "paymentMethod", "status"],
    fields: [
      {
        name: "customerId",
        label: "客戶",
        kind: "relation",
        relationModule: "customers",
        relationLabel: "name",
        required: true
      },
      { name: "courseName", label: "課程名稱", kind: "text", required: true },
      { name: "amount", label: "金額", kind: "number", required: true },
      { name: "paymentMethod", label: "付款方式", kind: "select", options: paymentMethods },
      { name: "paidAt", label: "付款時間", kind: "datetime" },
      { name: "remittanceRef", label: "匯款資訊", kind: "text" },
      { name: "status", label: "狀態", kind: "text" }
    ]
  }
];

export function getModuleConfig(slug: string) {
  return moduleConfigs.find((module) => module.slug === slug);
}
