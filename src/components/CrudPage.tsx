"use client";

import { useEffect, useMemo, useState } from "react";
import {
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  PlusOutlined
} from "@ant-design/icons";
import {
  Alert,
  Button,
  Card,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Space,
  Table,
  Tag,
  Typography
} from "antd";
import dayjs from "dayjs";
import { itemTypeOptions, paymentMethods, type ModuleConfig, type ModuleField } from "@/lib/module-config";

type RecordValue = string | number | boolean | null | Record<string, unknown> | Record<string, unknown>[];
type DataRecord = Record<string, RecordValue> & { id: string };
type FormValue = string | number | boolean | string[];
const fixedExpenseEmployeeTags = new Set(["外部合作廠商", "內部員工", "外部員工"]);
const fixedExpenseSystemSalaryTag = "外部員工";
const fixedExpenseDailySalary = 1000;
const oilDonationItemType = "OIL_DONATION";
const paymentMethodLabels = new Map(paymentMethods.map((method) => [method.value, method.label]));
const moneyFieldNames = new Set([
  "amount",
  "afterAmount",
  "beforeAmount",
  "cost",
  "depreciation",
  "paidAmount",
  "price",
  "value"
]);
type BatchItemRow = {
  id?: string;
  type: string;
  name: string;
  price: number | null;
  cost: number;
  servicePersonId: string;
  requiresInventory: boolean;
  inventoryQuantity: number;
  notes: string;
  active: boolean;
};
type BatchInventoryRow = {
  itemId: string;
  type: string;
  quantity: number;
  movedAt: string;
  reason: string;
};
type RegistrationDetailRow = {
  eventId: string;
  itemId: string;
  paidAmount: number;
};

function createBatchRow() {
  return {
    id: undefined,
    type: "DIVINATION_SERVICE",
    name: "",
    price: null,
    cost: 0,
    servicePersonId: "",
    requiresInventory: false,
    inventoryQuantity: 0,
    notes: "",
    active: true
  };
}

function createBatchRows() {
  return [createBatchRow()];
}

function createBatchInventoryRow() {
  return {
    itemId: "",
    type: "PURCHASE",
    quantity: 0,
    movedAt: dayjs().format("YYYY-MM-DD"),
    reason: ""
  };
}

function createBatchInventoryRows() {
  return [createBatchInventoryRow()];
}

function createRegistrationDetailRow() {
  return {
    eventId: "",
    itemId: "",
    paidAmount: 0
  };
}

function createRegistrationDetailRows() {
  return [createRegistrationDetailRow()];
}

function defaultValue(field: ModuleField) {
  if (field.kind === "checkbox") return field.name === "active";
  if (field.kind === "number") return 0;
  if (field.kind === "multiRelation") return [];
  if (field.name === "entryDate" || field.name === "registeredAt") return dayjs().format("YYYY-MM-DD");
  if (field.name === "itemType") return "COURSE_SERVICE";
  if (field.kind === "select") return field.options?.[0]?.value ?? "";
  return "";
}

function renderValue(config: ModuleConfig, record: DataRecord, column: string) {
  const value = record[column];
  const enumLabels: Record<string, string> = {
    DIVINATION_SERVICE: "占卜服務",
    RITUAL_SERVICE: "儀式服務",
    FENG_SHUI_SERVICE: "風水服務",
    COURSE_SERVICE: "課程服務",
    OIL_DONATION: "香油捐贈",
    PHYSICAL_PRODUCT: "實體商品",
    PRODUCT: "實體商品",
    SERVICE: "占卜服務",
    CASH: "現金",
    TRANSFER: "匯款",
    CARD: "刷卡",
    LINE_PAY: "Line Pay",
    OTHER: "其他",
    FIXED: "固定資產",
    VARIABLE: "變動資產",
    PURCHASE: "進貨",
    SALE: "銷售",
    ADJUSTMENT: "調整",
    CONSUMPTION: "耗用",
    INCOME: "存入",
    EXPENSE: "支出",
    ONSITE: "現場服務",
    CHARITY: "公益服務",
    DRAFT: "草稿",
    ACTIVE: "啟用",
    ARCHIVED: "封存",
    TODO: "待辦",
    DOING: "進行中",
    DONE: "完成",
    REGISTERED: "已報名",
    PAID: "已付款",
    CANCELLED: "已取消"
  };
  if (column === "stockQuantity" && record.requiresInventory === false) return "";
  if (config.slug === "event-registrations" && column === "paidAmount" && value == null) return "0";
  if (isMoneyField(column) && (typeof value === "number" || typeof value === "string")) return formatMoney(value);
  if (column === "tags" && Array.isArray(value)) {
    return (
      <Space size={[4, 4]} wrap>
        {value.map((tag) => (
          <Tag key={String(tag.id)} color="blue">
            {String(tag.name ?? "")}
          </Tag>
        ))}
      </Space>
    );
  }
  if (value && typeof value === "object") {
    const related = value as Record<string, unknown>;
    return String(related.name ?? related.title ?? related.email ?? related.id ?? "");
  }
  if (typeof value === "boolean") return value ? "是" : "否";
  if (typeof value === "string" && enumLabels[value]) return enumLabels[value];
  if (config.slug === "events" && (column === "startsAt" || column === "endsAt") && typeof value === "string") {
    return new Date(value).toLocaleDateString("zh-TW");
  }
  if (config.slug === "assets" && column === "purchasedAt" && typeof value === "string") {
    return new Date(value).toLocaleDateString("zh-TW");
  }
  if (config.slug === "event-registrations" && column === "registeredAt" && typeof value === "string") {
    return new Date(value).toLocaleDateString("zh-TW");
  }
  if (
    ((config.slug === "inventory" && column === "movedAt") ||
      ((config.slug === "petty-cash" || config.slug === "fixed-expenses") && column === "entryDate")) &&
    typeof value === "string"
  ) {
    return new Date(value).toLocaleDateString("zh-TW");
  }
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    return new Date(value).toLocaleString("zh-TW");
  }
  return value == null ? "" : String(value);
}

function formatMoney(value: string | number | null | undefined) {
  if (value === "" || value == null) return "";
  return Number(value).toLocaleString();
}

function formatInputMoney(value: string | number | undefined) {
  if (value === "" || value == null) return "";
  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function parseInputMoney(value: string | undefined) {
  return Number(String(value ?? "").replace(/,/g, ""));
}

function isMoneyField(column: string) {
  return moneyFieldNames.has(column);
}

function escapeExcelCell(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function relatedName(value: RecordValue) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    const related = value as Record<string, unknown>;
    return String(related.name ?? related.title ?? related.id ?? "");
  }
  return "";
}

function columnTitle(config: ModuleConfig, column: string) {
  if (config.slug === "event-registrations" && column === "item") return "進銷項目";
  if (column === "item") return "品項";
  if (config.slug === "fixed-expenses" && column === "employee") {
    return "支出對象";
  }
  if (config.slug === "petty-cash" && column === "employee") {
    return "代墊者";
  }
  if (column === "employee") return "員工";
  if (column === "sop") return "SOP";
  if (column === "event") return "活動";
  if (column === "customer") return "客戶";
  if (config.slug === "event-registrations" && column === "status") return "付款";
  if (column === "active") return "啟用";
  if (column === "stockQuantity") return config.slug === "inventory" ? "庫存" : "庫存數量";
  if (column === "beforeAmount") return "異動前金額";
  if (column === "afterAmount") return "異動後金額";
  if (column === "checkedOut") return "出帳";
  if (column === "tags") return "TAG";
  if (config.slug === "events" && column === "startsAt") return "開始日期";
  if (config.slug === "events" && column === "endsAt") return "結束日期";
  return config.fields.find((field) => field.name === column)?.label ?? column;
}

async function parseJsonResponse(response: Response) {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

function apiErrorMessage(data: unknown, fallback: string) {
  if (data && typeof data === "object" && "error" in data) {
    const error = (data as { error?: unknown }).error;
    if (typeof error === "string" && error.trim()) return error;
  }
  return fallback;
}

export function CrudPage({ config, hideHeading = false }: { config: ModuleConfig; hideHeading?: boolean }) {
  const initialForm = useMemo(
    () =>
      Object.fromEntries(
        config.fields.flatMap((field) => {
          const entries: [string, FormValue][] = [[field.name, defaultValue(field)]];
          if (field.kind === "dateRange" && field.endName) entries.push([field.endName, ""]);
          return entries;
        })
      ) as Record<string, FormValue>,
    [config.fields]
  );
  const [records, setRecords] = useState<DataRecord[]>([]);
  const [relations, setRelations] = useState<Record<string, DataRecord[]>>({});
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [tagModalOpen, setTagModalOpen] = useState(false);
  const [newTagName, setNewTagName] = useState("");
  const [typeFilter, setTypeFilter] = useState<string | undefined>();
  const [nameSearch, setNameSearch] = useState("");
  const [pettyCashEmployeeFilter, setPettyCashEmployeeFilter] = useState<string | undefined>();
  const [pettyCashCheckedOutFilter, setPettyCashCheckedOutFilter] = useState<string | undefined>();
  const [fixedExpenseMonthFilter, setFixedExpenseMonthFilter] = useState(dayjs().format("YYYY-MM"));
  const [registrationEventFilter, setRegistrationEventFilter] = useState<string | undefined>();
  const [registrationItemFilter, setRegistrationItemFilter] = useState<string | undefined>();
  const [registrationDateRangeFilter, setRegistrationDateRangeFilter] = useState<[string, string] | null>(null);
  const [registrationExportOpen, setRegistrationExportOpen] = useState(false);
  const [registrationExportEventId, setRegistrationExportEventId] = useState<string | undefined>();
  const [registrationExportDateRange, setRegistrationExportDateRange] = useState<[string, string] | null>(null);
  const [assetFromMonth, setAssetFromMonth] = useState(dayjs().subtract(1, "month").format("YYYY-MM"));
  const [assetToMonth, setAssetToMonth] = useState(dayjs().format("YYYY-MM"));
  const [assetMonthFilter, setAssetMonthFilter] = useState(dayjs().format("YYYY-MM"));
  const [assetCopying, setAssetCopying] = useState(false);
  const [assetCopyResult, setAssetCopyResult] = useState("");
  const [fixedExpenseShiftRecords, setFixedExpenseShiftRecords] = useState<DataRecord[]>([]);
  const [pageSize, setPageSize] = useState(30);
  const [deleteBlockMessage, setDeleteBlockMessage] = useState("");
  const showItemFilters = config.slug === "items";
  const showInventoryBatch = config.slug === "inventory";
  const showAssetMonthTools = config.slug === "assets";
  const showCashBalance = config.slug === "petty-cash" || config.slug === "fixed-expenses";
  const showPettyCashFilters = config.slug === "petty-cash";
  const showFixedExpenseFilters = config.slug === "fixed-expenses";
  const showRegistrationFilters = config.slug === "event-registrations";
  const showEventRegistrationSalesForm = config.slug === "event-registrations";
  const useWideFormCard =
    showCashBalance || config.slug === "employees" || config.slug === "events" || config.slug === "event-registrations";
  const visibleColumns = config.columns.filter((column) => {
    if (showItemFilters && column === "cost") return false;
    if (config.slug === "events" && column === "period") return false;
    return true;
  });
  const currentCashBalance = useMemo(() => {
    const latestRecord = [...records].sort((left, right) => {
      const leftDate = new Date(String(left.entryDate)).getTime();
      const rightDate = new Date(String(right.entryDate)).getTime();
      if (leftDate !== rightDate) return rightDate - leftDate;
      const leftCreatedAt = new Date(String(left.createdAt)).getTime();
      const rightCreatedAt = new Date(String(right.createdAt)).getTime();
      if (leftCreatedAt !== rightCreatedAt) return rightCreatedAt - leftCreatedAt;
      return String(right.id).localeCompare(String(left.id));
    })[0];
    return Number(latestRecord?.afterAmount ?? 0);
  }, [records]);
  const currentMonthPettyCashExpense = useMemo(() => {
    if (config.slug !== "petty-cash") return 0;
    const monthStart = dayjs().startOf("month");
    const monthEnd = dayjs().endOf("month");
    return records.reduce((total, record) => {
      const entryDate = record.entryDate ? dayjs(String(record.entryDate)) : null;
      if (record.type !== "EXPENSE" || !entryDate || !entryDate.isValid()) return total;
      if (entryDate.isBefore(monthStart) || entryDate.isAfter(monthEnd)) return total;
      return total + Number(record.amount ?? 0);
    }, 0);
  }, [config.slug, records]);
  const [batchRows, setBatchRows] = useState<BatchItemRow[]>(() => createBatchRows());
  const [batchSubmitting, setBatchSubmitting] = useState(false);
  const [batchInventoryRows, setBatchInventoryRows] = useState<BatchInventoryRow[]>(() =>
    createBatchInventoryRows()
  );
  const [registrationDetailRows, setRegistrationDetailRows] = useState<RegistrationDetailRow[]>(() =>
    createRegistrationDetailRows()
  );
  const inventoryItems = (relations.items ?? []).filter((item) => item.requiresInventory !== false);
  const showEventItemBatch = config.slug === "events";
  const fixedExpenseSystemSalaryRecords = useMemo<DataRecord[]>(() => {
    if (config.slug !== "fixed-expenses") return [];
    const employeesById = new Map((relations.employees ?? []).map((employee) => [employee.id, employee]));
    const workDaysByEmployee = new Map<string, Set<string>>();

    for (const shift of fixedExpenseShiftRecords) {
      const employeeId = String(shift.employeeId ?? "");
      if (!employeeId) continue;
      const employee = employeesById.get(employeeId);
      const tagNames = Array.isArray(employee?.tags) ? employee.tags.map((tag) => String(tag.name ?? "")) : [];
      if (!tagNames.includes(fixedExpenseSystemSalaryTag)) continue;

      const startsAt = shift.startsAt ? dayjs(String(shift.startsAt)) : null;
      if (!startsAt?.isValid() || startsAt.format("YYYY-MM") !== fixedExpenseMonthFilter) continue;

      const workDays = workDaysByEmployee.get(employeeId) ?? new Set<string>();
      workDays.add(startsAt.format("YYYY-MM-DD"));
      workDaysByEmployee.set(employeeId, workDays);
    }

    return [...workDaysByEmployee.entries()]
      .map(([employeeId, days]) => {
        const employee = employeesById.get(employeeId);
        const dayCount = days.size;
        return {
          id: `system-external-salary-${fixedExpenseMonthFilter}-${employeeId}`,
          type: "EXPENSE",
          amount: dayCount * fixedExpenseDailySalary,
          purpose: `外部員工排班薪資（${dayCount} 天）`,
          employeeId,
          employee: employee ? { id: employee.id, name: employee.name } : { id: employeeId, name: employeeId },
          entryDate: dayjs(`${fixedExpenseMonthFilter}-01`).endOf("month").format("YYYY-MM-DD"),
          systemGenerated: true
        } satisfies DataRecord;
      })
      .sort((left, right) => String(left.employeeId).localeCompare(String(right.employeeId)));
  }, [config.slug, fixedExpenseMonthFilter, fixedExpenseShiftRecords, relations.employees]);

  const visibleRecords = config.slug === "fixed-expenses"
    ? [...records, ...fixedExpenseSystemSalaryRecords]
    : records;

  const filteredRecords = visibleRecords.filter((record) => {
    if (showItemFilters && typeFilter && record.type !== typeFilter) return false;
    if (showItemFilters && nameSearch.trim()) {
      return String(record.name ?? "").toLowerCase().includes(nameSearch.trim().toLowerCase());
    }
    if (showAssetMonthTools && assetMonthFilter) {
      const purchasedAt = record.purchasedAt ? dayjs(String(record.purchasedAt)) : null;
      return Boolean(purchasedAt?.isValid() && purchasedAt.format("YYYY-MM") === assetMonthFilter);
    }
    if (showPettyCashFilters && pettyCashEmployeeFilter && record.employeeId !== pettyCashEmployeeFilter) {
      return false;
    }
    if (showPettyCashFilters && pettyCashCheckedOutFilter) {
      return Boolean(record.checkedOut) === (pettyCashCheckedOutFilter === "CHECKED");
    }
    if (showFixedExpenseFilters && fixedExpenseMonthFilter) {
      const entryDate = record.entryDate ? dayjs(String(record.entryDate)) : null;
      return Boolean(entryDate?.isValid() && entryDate.format("YYYY-MM") === fixedExpenseMonthFilter);
    }
    if (showRegistrationFilters && registrationEventFilter && record.eventId !== registrationEventFilter) {
      return false;
    }
    if (showRegistrationFilters && registrationItemFilter && record.itemId !== registrationItemFilter) {
      return false;
    }
    if (showRegistrationFilters && registrationDateRangeFilter) {
      const registeredAt = record.registeredAt ? dayjs(String(record.registeredAt)) : null;
      const [startDate, endDate] = registrationDateRangeFilter;
      return Boolean(
        registeredAt?.isValid() &&
          !registeredAt.isBefore(dayjs(startDate), "day") &&
          !registeredAt.isAfter(dayjs(endDate), "day")
      );
    }
    return true;
  });
  const fixedExpenseTotal = config.slug === "fixed-expenses"
    ? filteredRecords.reduce((total, record) => total + Number(record.amount ?? 0), 0)
    : 0;

  function exportEventRegistrationsExcel(exportRecords: DataRecord[]) {
    const headers = ["活動", "進銷項目", "日期", "姓名", "電話", "付款", "金額", "付款方式", "匯款資訊"];
    const rows = exportRecords.map((record) => [
      relatedName(record.event),
      relatedName(record.item),
      record.registeredAt ? dayjs(String(record.registeredAt)).format("YYYY/M/D") : "",
      record.attendeeName,
      record.phone,
      record.status === "PAID" ? "已付款" : "未付款",
      record.paidAmount,
      paymentMethodLabels.get(String(record.paymentMethod ?? "")) ?? record.paymentMethod ?? "",
      record.remittanceRef
    ]);
    const tableRows = [headers, ...rows]
      .map((row) => `<tr>${row.map((cell) => `<td>${escapeExcelCell(cell)}</td>`).join("")}</tr>`)
      .join("");
    const html = `<!doctype html><html><head><meta charset="utf-8" /></head><body><table>${tableRows}</table></body></html>`;
    const blob = new Blob([html], { type: "application/vnd.ms-excel;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `活動報名-${dayjs().format("YYYYMMDD-HHmm")}.xls`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function confirmEventRegistrationsExport() {
    const exportRecords = records.filter((record) => {
      if (registrationExportEventId && record.eventId !== registrationExportEventId) return false;
      if (registrationExportDateRange) {
        const registeredAt = record.registeredAt ? dayjs(String(record.registeredAt)) : null;
        const [startDate, endDate] = registrationExportDateRange;
        return Boolean(
          registeredAt?.isValid() &&
            !registeredAt.isBefore(dayjs(startDate), "day") &&
            !registeredAt.isAfter(dayjs(endDate), "day")
        );
      }
      return true;
    });
    exportEventRegistrationsExcel(exportRecords);
    setRegistrationExportOpen(false);
  }

  async function load() {
    const response = await fetch(`/api/${config.api}`);
    const data = await parseJsonResponse(response);
    if (!response.ok) {
      setRecords([]);
      setError(
        response.status === 401
          ? "登入狀態已失效，請重新登入。"
          : apiErrorMessage(data, "資料讀取失敗。")
      );
      return;
    }
    if (!Array.isArray(data)) {
      setRecords([]);
      setError("資料格式錯誤，請重新整理頁面。");
      return;
    }
    setRecords(data as DataRecord[]);
  }

  async function loadItemsRelation() {
    const response = await fetch("/api/items");
    if (!response.ok) return;
    const items = await parseJsonResponse(response);
    if (Array.isArray(items)) setRelations((current) => ({ ...current, items }));
  }

  async function loadRelationModule(module: string) {
    const response = await fetch(`/api/${module}`);
    if (!response.ok) return [module, [] as DataRecord[]] as const;
    const data = await parseJsonResponse(response);
    return [module, Array.isArray(data) ? (data as DataRecord[]) : [] as DataRecord[]] as const;
  }

  async function loadFixedExpenseShifts() {
    const response = await fetch("/api/shifts");
    if (!response.ok) return;
    const data = await parseJsonResponse(response);
    if (Array.isArray(data)) setFixedExpenseShiftRecords(data as DataRecord[]);
  }

  useEffect(() => {
    load();
    const relationModules = config.fields
      .filter((field) => (field.kind === "relation" || field.kind === "multiRelation") && field.relationModule)
      .map((field) => field.relationModule as string);
    Promise.all([...new Set([...relationModules, ...(showEventItemBatch ? ["employees"] : [])])].map(loadRelationModule)).then((entries) =>
      setRelations(Object.fromEntries(entries))
    );
    if (config.slug === "fixed-expenses") void loadFixedExpenseShifts();
  }, [config.api, config.fields]);

  useEffect(() => {
    if (config.slug === "fixed-expenses") {
      setFixedExpenseMonthFilter(dayjs().format("YYYY-MM"));
    }
  }, [config.slug]);

  async function submit() {
    setError("");
    if (showEventRegistrationSalesForm) {
      const detailRows = registrationDetailRows.map((row) => ({
        ...row,
        paidAmount: Number(row.paidAmount ?? 0)
      }));
      const invalidRowIndex = detailRows.findIndex((row) => !row.eventId || !row.itemId || row.paidAmount < 0);
      if (invalidRowIndex >= 0) {
        setError(`第 ${invalidRowIndex + 1} 筆報名明細請選擇活動、進銷項目，且金額不可為負。`);
        return;
      }

      const rowsToSubmit = editingId ? detailRows.slice(0, 1) : detailRows;
      for (const row of rowsToSubmit) {
        const response = await fetch(editingId ? `/api/${config.api}/${editingId}` : `/api/${config.api}`, {
          method: editingId ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            eventId: row.eventId,
            itemId: row.itemId,
            paidAmount: row.paidAmount
          })
        });
        if (!response.ok) {
          const data = await parseJsonResponse(response);
          setError(apiErrorMessage(data, "儲存失敗。"));
          return;
        }
      }

      setForm(initialForm);
      setEditingId(null);
      setRegistrationDetailRows(createRegistrationDetailRows());
      await load();
      return;
    }

    const payload: Record<string, unknown> = { ...form };
    if (showEventItemBatch) {
      const rowsToCreate = rowsWithItemData();
      if (!validateBatchItemRows(rowsToCreate, false)) return;
      payload.eventItems = rowsToCreate.map((row) => ({
        id: row.id,
        itemType: row.type,
        itemName: row.name.trim(),
        itemPrice: Number(row.price ?? 0),
        itemCost: Number(row.cost ?? 0),
        servicePersonId: row.servicePersonId || null,
        itemRequiresInventory: row.type === oilDonationItemType ? false : row.requiresInventory,
        itemInventoryQuantity:
          row.type !== oilDonationItemType && row.requiresInventory ? Number(row.inventoryQuantity ?? 0) : 0,
        active: row.active
      }));
    }

    const response = await fetch(editingId ? `/api/${config.api}/${editingId}` : `/api/${config.api}`, {
      method: editingId ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      const data = await parseJsonResponse(response);
      setError(apiErrorMessage(data, "儲存失敗。"));
      return;
    }
    setForm(initialForm);
    setEditingId(null);
    if (showEventItemBatch) {
      setBatchRows(createBatchRows());
      await loadItemsRelation();
    }
    await load();
  }

  function edit(record: DataRecord) {
    const next = { ...initialForm };
    for (const field of config.fields) {
      if (config.slug === "event-registrations" && field.name === "isPaid") {
        next[field.name] = record.status === "PAID";
        continue;
      }
      if (field.kind === "multiRelation") {
        const relationName = field.name === "tagIds" ? "tags" : field.name;
        const related = record[relationName];
        next[field.name] = Array.isArray(related) ? related.map((item) => String(item.id)).filter(Boolean) : [];
        continue;
      }
      const value = record[field.name];
      if (field.kind === "dateRange") {
        next[field.name] = typeof value === "string" ? value.slice(0, 10) : "";
        if (field.endName) {
          const endValue = record[field.endName];
          next[field.endName] = typeof endValue === "string" ? endValue.slice(0, 10) : "";
        }
        continue;
      }
      if (field.kind === "datetime" && typeof value === "string") next[field.name] = value.slice(0, 16);
      else if (field.kind === "date" && typeof value === "string") next[field.name] = value.slice(0, 10);
      else if (value == null) next[field.name] = defaultValue(field);
      else if (["string", "number", "boolean"].includes(typeof value)) {
        next[field.name] = value as FormValue;
      }
    }
    if (config.slug === "petty-cash" && next.type === "INCOME") {
      next.employeeId = "";
      next.checkedOut = false;
    }
    setForm(next);
    setEditingId(record.id);
    if (config.slug === "items") {
      setBatchRows([
        {
          id: record.id,
          type: String(record.type ?? "DIVINATION_SERVICE"),
          name: String(record.name ?? ""),
          price: record.price == null || record.price === "" ? null : Number(record.price),
          cost: Number(record.cost ?? 0),
          servicePersonId: String(record.servicePersonId ?? ""),
          requiresInventory: record.type === oilDonationItemType ? false : Boolean(record.requiresInventory),
          inventoryQuantity: Number(record.stockQuantity ?? 0),
          notes: String(record.notes ?? ""),
          active: record.active !== false
        }
      ]);
    }
    if (showEventItemBatch) {
      const items = Array.isArray(record.items) ? record.items : [];
      setBatchRows(
        items.map((item) => ({
          id: String(item.id ?? ""),
          type: String(item.type ?? "COURSE_SERVICE"),
          name: String(item.name ?? ""),
          price: item.type === oilDonationItemType ? null : Number(item.price ?? 0),
          cost: Number(item.cost ?? 0),
          servicePersonId: String(item.servicePersonId ?? ""),
          requiresInventory: item.type === oilDonationItemType ? false : Boolean(item.requiresInventory),
          inventoryQuantity: 0,
          notes: String(item.notes ?? ""),
          active: item.active !== false
        }))
      );
    }
    if (showEventRegistrationSalesForm) {
      setRegistrationDetailRows([
        {
          eventId: String(record.eventId ?? ""),
          itemId: String(record.itemId ?? ""),
          paidAmount: Number(record.paidAmount ?? 0)
        }
      ]);
    }
  }

  async function remove(id: string) {
    setError("");
    const response = await fetch(`/api/${config.api}/${id}`, { method: "DELETE" });
    if (!response.ok) {
      const data = await response.json();
      const errorMessage = data.error || "刪除失敗，可能已有其他資料引用。";
      if (config.slug === "items") {
        setDeleteBlockMessage(errorMessage);
      } else {
        setError(errorMessage);
      }
      return;
    }
    await load();
    if (showInventoryBatch) await loadItemsRelation();
  }

  async function toggleCheckedOut(record: DataRecord, checkedOut: boolean) {
    if (config.slug === "petty-cash" && record.type === "INCOME") return;
    setError("");
    const response = await fetch(`/api/${config.api}/${record.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ checkedOut })
    });
    if (!response.ok) {
      const data = await response.json();
      setError(data.error || "出帳狀態更新失敗。");
      return;
    }
    await load();
  }

  async function toggleRegistrationPaid(record: DataRecord, isPaid: boolean) {
    setError("");
    const response = await fetch(`/api/${config.api}/${record.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventId: record.eventId,
        itemId: record.itemId,
        registeredAt: record.registeredAt,
        attendeeName: record.attendeeName,
        phone: record.phone,
        isPaid,
        paidAmount: record.paidAmount,
        paymentMethod: record.paymentMethod,
        remittanceRef: record.remittanceRef
      })
    });
    if (!response.ok) {
      const data = await parseJsonResponse(response);
      setError(apiErrorMessage(data, "付款狀態更新失敗。"));
      return;
    }
    await load();
  }

  async function createEmployeeTag() {
    const name = newTagName.trim();
    if (!name) return;
    setError("");
    const response = await fetch("/api/employee-tags", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name })
    });
    if (!response.ok) {
      const data = await response.json();
      setError(data.error || "TAG 新增失敗。");
      return;
    }
    setNewTagName("");
    const [module, tags] = await loadRelationModule("employee-tags");
    setRelations((current) => ({ ...current, [module]: tags }));
  }

  async function deleteEmployeeTag(id: string) {
    setError("");
    const response = await fetch(`/api/employee-tags/${id}`, { method: "DELETE" });
    if (!response.ok) {
      const data = await response.json();
      setError(data.error || "TAG 刪除失敗。");
      return;
    }
    const selectedTags = Array.isArray(form.tagIds) ? form.tagIds.filter((tagId) => tagId !== id) : [];
    setForm({ ...form, tagIds: selectedTags });
    const [module, tags] = await loadRelationModule("employee-tags");
    setRelations((current) => ({ ...current, [module]: tags }));
    await load();
  }

  function updateBatchRow(index: number, patch: Partial<BatchItemRow>) {
    setBatchRows(batchRows.map((row, current) => (current === index ? { ...row, ...patch } : row)));
  }

  function updateBatchRowType(index: number, type: string) {
    updateBatchRow(index, {
      type,
      ...(type === oilDonationItemType ? { price: null, requiresInventory: false, inventoryQuantity: 0 } : {})
    });
  }

  function removeBatchRow(index: number) {
    if (index === 0 && !(showEventItemBatch && editingId)) return;
    setBatchRows(batchRows.filter((_, current) => current !== index));
  }

  function updateBatchInventoryRow(index: number, patch: Partial<BatchInventoryRow>) {
    setBatchInventoryRows(
      batchInventoryRows.map((row, current) => (current === index ? { ...row, ...patch } : row))
    );
  }

  function removeBatchInventoryRow(index: number) {
    if (index === 0) return;
    setBatchInventoryRows(batchInventoryRows.filter((_, current) => current !== index));
  }

  function stockForItem(itemId: string) {
    const item = inventoryItems.find((option) => option.id === itemId);
    const quantity = item?.stockQuantity;
    return typeof quantity === "number" || typeof quantity === "string" ? quantity : "";
  }

  function rowsWithItemData() {
    return batchRows.filter(
      (row) =>
        row.name.trim() ||
        Number(row.price ?? 0) > 0 ||
        row.cost > 0 ||
        row.requiresInventory ||
        row.inventoryQuantity > 0 ||
        row.id
    );
  }

  function validateBatchItemRows(rowsToCreate: BatchItemRow[], requireOne: boolean) {
    if (rowsToCreate.length === 0) {
      if (requireOne) setError("請至少填寫一個品項名稱。");
      return !requireOne;
    }

    const invalidIndex = rowsToCreate.findIndex(
      (row) => !row.name.trim() || Number(row.price ?? 0) < 0 || row.cost < 0
    );
    if (invalidIndex >= 0) {
      setError(`第 ${batchRows.indexOf(rowsToCreate[invalidIndex]) + 1} 列請填寫名稱，且售價與成本不可為負。`);
      return false;
    }

    const invalidInventoryIndex = rowsToCreate.findIndex(
      (row) => row.requiresInventory && !row.id && row.inventoryQuantity <= 0
    );
    if (invalidInventoryIndex >= 0) {
      setError(`第 ${batchRows.indexOf(rowsToCreate[invalidInventoryIndex]) + 1} 列請填寫庫存數量。`);
      return false;
    }

    return true;
  }

  async function submitBatchItems() {
    setError("");
    const rowsToCreate = rowsWithItemData();
    if (!validateBatchItemRows(rowsToCreate, true)) return;

    setBatchSubmitting(true);
    try {
      if (config.slug === "items" && editingId) {
        const row = rowsToCreate[0];
        const response = await fetch(`/api/items/${editingId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: row.type,
            name: row.name,
            price: row.price ?? 0,
            cost: row.cost,
            requiresInventory: row.type === oilDonationItemType ? false : row.requiresInventory,
            notes: row.notes,
            active: row.active
          })
        });
        if (!response.ok) {
          const data = await parseJsonResponse(response);
          setError(apiErrorMessage(data, `更新失敗：${row.name}`));
          return;
        }
        setEditingId(null);
        setBatchRows(createBatchRows());
        await load();
        return;
      }

      for (const row of rowsToCreate) {
        const response = await fetch("/api/items", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: row.type,
            name: row.name,
            price: row.price ?? 0,
            cost: row.cost,
            requiresInventory: row.type === oilDonationItemType ? false : row.requiresInventory,
            notes: row.notes,
            active: true
          })
        });
        if (!response.ok) {
          const data = await parseJsonResponse(response);
          setError(apiErrorMessage(data, `批次新增失敗：${row.name}`));
          return;
        }
        const item = await parseJsonResponse(response);
        if (row.type !== oilDonationItemType && row.requiresInventory && row.inventoryQuantity > 0) {
          const itemId = item && typeof item === "object" && "id" in item ? String(item.id) : "";
          if (!itemId) {
            setError(`庫存建立失敗：${row.name}`);
            return;
          }
          const inventoryResponse = await fetch("/api/inventory", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              itemId,
              type: "PURCHASE",
              quantity: row.inventoryQuantity,
              reason: "批次新增開帳庫存"
            })
          });
          if (!inventoryResponse.ok) {
            const data = await parseJsonResponse(inventoryResponse);
            setError(apiErrorMessage(data, `庫存建立失敗：${row.name}`));
            return;
          }
        }
      }

      setBatchRows(createBatchRows());
      await load();
    } catch {
      setError("批次新增失敗，請重新確認資料後再試。");
    } finally {
      setBatchSubmitting(false);
    }
  }

  async function submitBatchInventory() {
    setError("");
    const rowsToCreate = batchInventoryRows.filter(
      (row) => row.itemId || row.quantity !== 0 || row.reason.trim()
    );
    if (rowsToCreate.length === 0) {
      setError("請至少選擇一個品項並填寫數量。");
      return;
    }

    const invalidIndex = rowsToCreate.findIndex((row) => !row.itemId || row.quantity === 0);
    if (invalidIndex >= 0) {
      setError(`第 ${batchInventoryRows.indexOf(rowsToCreate[invalidIndex]) + 1} 列請選擇品項並填寫數量。`);
      return;
    }

    for (const row of rowsToCreate) {
      const quantity =
        row.type === "SALE" || row.type === "CONSUMPTION" ? -Math.abs(row.quantity) : row.quantity;
      const response = await fetch("/api/inventory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          itemId: row.itemId,
          type: row.type,
          quantity,
          movedAt: row.movedAt,
          reason: row.reason
        })
      });
      if (!response.ok) {
        const data = await response.json();
        setError(data.error || "批次新增庫存失敗。");
        return;
      }
    }

    setBatchInventoryRows(createBatchInventoryRows());
    await load();
    await loadItemsRelation();
  }

  async function copyFixedAssetsMonth() {
    setError("");
    setAssetCopyResult("");
    setAssetCopying(true);
    const response = await fetch("/api/assets/copy-fixed-month", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fromMonth: assetFromMonth, toMonth: assetToMonth })
    });
    setAssetCopying(false);
    const data = await parseJsonResponse(response);
    if (!response.ok) {
      setError(apiErrorMessage(data, "固定資產月份複製失敗。"));
      return;
    }
    const copied = data && typeof data === "object" && "copied" in data ? Number(data.copied) : 0;
    setAssetCopyResult(`已複製 ${copied} 筆固定資產至 ${assetToMonth}。`);
    setAssetMonthFilter(assetToMonth);
    await load();
  }

  function inputFor(field: ModuleField) {
    const value = form[field.name];
    if (field.kind === "textarea") {
      return (
        <Input.TextArea
          rows={3}
          value={String(value ?? "")}
          onChange={(event) => setForm({ ...form, [field.name]: event.target.value })}
        />
      );
    }
    if (field.kind === "select") {
      return (
        <Select
          value={String(value ?? "")}
          style={{ width: "100%" }}
          onChange={(nextValue) =>
            setForm({
              ...form,
              [field.name]: nextValue,
              ...(config.slug === "petty-cash" && field.name === "type" && nextValue === "INCOME"
                ? { employeeId: "", checkedOut: false }
                : {})
            })
          }
          options={field.options}
        />
      );
    }
    if (field.kind === "date" || field.kind === "datetime") {
      return (
        <DatePicker
          showTime={field.kind === "datetime"}
          style={{ width: "100%" }}
          value={value ? dayjs(String(value)) : null}
          onChange={(date) =>
            setForm({
              ...form,
              [field.name]: date ? date.format(field.kind === "datetime" ? "YYYY-MM-DDTHH:mm" : "YYYY-MM-DD") : ""
            })
          }
        />
      );
    }
    if (field.kind === "dateRange") {
      const endName = field.endName ?? "";
      const endValue = endName ? form[endName] : "";
      return (
        <DatePicker.RangePicker
          style={{ width: "100%" }}
          value={[
            value ? dayjs(String(value)) : null,
            endValue ? dayjs(String(endValue)) : null
          ]}
          onChange={(dates) =>
            setForm({
              ...form,
              [field.name]: dates?.[0] ? dates[0].format("YYYY-MM-DD") : "",
              ...(endName ? { [endName]: dates?.[1] ? dates[1].format("YYYY-MM-DD") : "" } : {})
            })
          }
        />
      );
    }
    if (field.kind === "number") {
      const readOnlyAmount = config.slug === "event-registrations" && field.name === "paidAmount";
      return (
        <InputNumber
          disabled={readOnlyAmount}
          style={{ width: "100%" }}
          formatter={isMoneyField(field.name) ? formatInputMoney : undefined}
          parser={isMoneyField(field.name) ? parseInputMoney : undefined}
          value={Number(value ?? 0)}
          onChange={(nextValue) => setForm({ ...form, [field.name]: Number(nextValue ?? 0) })}
        />
      );
    }
    if (field.kind === "relation") {
      let options = relations[field.relationModule ?? ""] ?? [];
      const disabledPettyCashEmployee = config.slug === "petty-cash" && field.name === "employeeId" && form.type === "INCOME";
      if (config.slug === "fixed-expenses" && field.name === "employeeId") {
        options = options.filter((option) => {
          const tags = option.tags;
          return Array.isArray(tags) && tags.some((tag) => fixedExpenseEmployeeTags.has(String(tag.name ?? "")));
        });
      }
      if (config.slug === "event-registrations" && field.name === "itemId") {
        const selectedEventId = String(form.eventId ?? "");
        options = options.filter((option) => option.eventId === selectedEventId);
      }
      return (
        <Select
          value={disabledPettyCashEmployee ? undefined : String(value ?? "") || undefined}
          disabled={disabledPettyCashEmployee}
          style={{ width: "100%" }}
          placeholder="請選擇"
          allowClear={!field.required}
          onChange={(nextValue) =>
            setForm(() => {
              const nextForm = {
                ...form,
                [field.name]: nextValue ?? "",
                ...(config.slug === "event-registrations" && field.name === "eventId"
                  ? { itemId: "", paidAmount: 0 }
                  : {})
              };
              if (config.slug === "event-registrations" && field.name === "itemId") {
                const selectedItem = (relations.items ?? []).find((item) => item.id === nextValue);
                nextForm.paidAmount = Number(selectedItem?.price ?? 0);
              }
              return nextForm;
            })
          }
          options={options.map((option) => ({
            value: option.id,
            label: String(option[field.relationLabel ?? "name"] ?? option.id)
          }))}
        >
        </Select>
      );
    }
    if (field.kind === "multiRelation") {
      const options = relations[field.relationModule ?? ""] ?? [];
      return (
        <Select
          mode="multiple"
          value={Array.isArray(value) ? value.map(String) : []}
          style={{ width: "100%" }}
          placeholder="請選擇"
          allowClear
          onChange={(nextValue) => setForm({ ...form, [field.name]: nextValue })}
          options={options.map((option) => ({
            value: option.id,
            label: String(option[field.relationLabel ?? "name"] ?? option.id)
          }))}
        />
      );
    }
    if (field.kind === "checkbox") {
      return (
        <Checkbox
          checked={Boolean(value)}
          onChange={(event) => setForm({ ...form, [field.name]: event.target.checked })}
        >
          {field.label}
        </Checkbox>
      );
    }
    return (
      <Input
        required={field.required}
        value={String(value ?? "")}
        onChange={(event) => setForm({ ...form, [field.name]: event.target.value })}
      />
    );
  }

  function eventItemsFor(eventId: string) {
    return (relations.items ?? []).filter((item) => item.eventId === eventId);
  }

  function updateRegistrationDetailRow(index: number, patch: Partial<RegistrationDetailRow>) {
    setRegistrationDetailRows((rows) =>
      rows.map((row, current) => {
        if (current !== index) return row;
        const next = { ...row, ...patch };
        if ("eventId" in patch) {
          next.itemId = "";
          next.paidAmount = 0;
        }
        if ("itemId" in patch) {
          const selectedItem = (relations.items ?? []).find((item) => item.id === patch.itemId);
          next.paidAmount = Number(selectedItem?.price ?? 0);
        }
        return next;
      })
    );
  }

  function removeRegistrationDetailRow(index: number) {
    setRegistrationDetailRows((rows) => (rows.length > 1 ? rows.filter((_, current) => current !== index) : rows));
  }

  function fieldByName(name: string) {
    return config.fields.find((field) => field.name === name);
  }

  function renderFormField(name: string, className?: string) {
    const field = fieldByName(name);
    if (!field || field.hiddenInForm) return null;
    return (
      <Form.Item
        className={className ?? (field.kind === "textarea" ? "compact-form-wide" : undefined)}
        key={field.name}
        label={field.kind === "checkbox" ? undefined : field.label}
        required={field.required}
      >
        {inputFor(field)}
      </Form.Item>
    );
  }

  return (
    <>
      {!hideHeading && (
        <div className="page-heading">
          <Typography.Title level={2}>{config.title}</Typography.Title>
          <Typography.Text type="secondary">{config.description}</Typography.Text>
        </div>
      )}

      {showEventRegistrationSalesForm && (
        <Card className="compact-form-card wide-form-card" style={{ marginBottom: 16 }}>
          <Form layout="vertical" onFinish={() => void submit()}>
            <div className="sales-form-grid">
              {renderFormField("registeredAt")}
              {renderFormField("attendeeName")}
              {renderFormField("paymentMethod")}
              {renderFormField("remittanceRef")}
              {renderFormField("isPaid")}
            </div>

            <Card size="small" title="報名明細" style={{ marginTop: 14 }}>
              <div className="registration-detail-row registration-detail-header">
                <Typography.Text strong>活動</Typography.Text>
                <Typography.Text strong>進銷項目</Typography.Text>
                <Typography.Text strong>金額</Typography.Text>
                <Typography.Text strong>操作</Typography.Text>
              </div>
              <div className="registration-detail-list">
                {registrationDetailRows.map((row, index) => (
                  <div className="registration-detail-row" key={index}>
                    <Form.Item required style={{ marginBottom: 0 }}>
                      <Select
                        showSearch
                        placeholder="請選擇"
                        value={row.eventId || undefined}
                        aria-label="活動"
                        onChange={(value) => updateRegistrationDetailRow(index, { eventId: value })}
                        filterOption={(input, option) =>
                          String(option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                        }
                        options={(relations.events ?? []).map((event) => ({
                          value: String(event.id),
                          label: String(event.title ?? event.name ?? event.id)
                        }))}
                      />
                    </Form.Item>
                    <Form.Item required style={{ marginBottom: 0 }}>
                      <Select
                        showSearch
                        placeholder="請選擇"
                        value={row.itemId || undefined}
                        aria-label="進銷項目"
                        disabled={!row.eventId}
                        onChange={(value) => updateRegistrationDetailRow(index, { itemId: value })}
                        filterOption={(input, option) =>
                          String(option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                        }
                        options={eventItemsFor(row.eventId).map((item) => ({
                          value: String(item.id),
                          label: String(item.name ?? item.id)
                        }))}
                      />
                    </Form.Item>
                    <Form.Item required style={{ marginBottom: 0 }}>
                      <InputNumber
                        min={0}
                        style={{ width: "100%" }}
                        aria-label="金額"
                        formatter={formatInputMoney}
                        parser={parseInputMoney}
                        value={row.paidAmount}
                        onChange={(value) => updateRegistrationDetailRow(index, { paidAmount: Number(value ?? 0) })}
                      />
                    </Form.Item>
                    {index > 0 && !editingId ? (
                      <Form.Item style={{ marginBottom: 0 }}>
                        <Button
                          danger
                          icon={<DeleteOutlined />}
                          aria-label="刪除"
                          title="刪除"
                          onClick={() => removeRegistrationDetailRow(index)}
                        />
                      </Form.Item>
                    ) : (
                      <span />
                    )}
                  </div>
                ))}
              </div>
              {!editingId && (
                <Button
                  icon={<PlusOutlined />}
                  htmlType="button"
                  style={{ marginTop: 12 }}
                  onClick={() => setRegistrationDetailRows([...registrationDetailRows, createRegistrationDetailRow()])}
                >
                  新增明細
                </Button>
              )}
            </Card>

            {error && <Alert type="error" message={error} showIcon style={{ marginTop: 12, marginBottom: 12 }} />}
            <Space style={{ marginTop: 16 }}>
              <Button type="primary" htmlType="submit">
                {editingId ? "更新" : "新增"}
              </Button>
              {editingId && (
                <Button
                  onClick={() => {
                    setEditingId(null);
                    setForm(initialForm);
                    setRegistrationDetailRows(createRegistrationDetailRows());
                  }}
                >
                  取消編輯
                </Button>
              )}
            </Space>
          </Form>
        </Card>
      )}

      {!showItemFilters && !showInventoryBatch && !showEventRegistrationSalesForm && (
        <Card className={`compact-form-card${useWideFormCard ? " wide-form-card" : ""}`} style={{ marginBottom: 16 }}>
          <Form layout="vertical" onFinish={() => void submit()}>
            <div className="compact-form-grid">
              {config.fields.filter((field) => !field.hiddenInForm).map((field) => (
                <Form.Item
                  className={field.kind === "textarea" ? "compact-form-wide" : undefined}
                  key={field.name}
                  label={field.kind === "checkbox" ? undefined : field.label}
                  required={field.required}
                >
                  {inputFor(field)}
                </Form.Item>
              ))}
            </div>
            {showEventItemBatch && (
              <div className="event-item-batch">
                <Typography.Title level={5} style={{ marginTop: 0 }}>
                  活動品項
                </Typography.Title>
                <div className="batch-item-grid">
                  <div className="batch-item-row batch-item-header">
                    <span />
                    <Typography.Text strong>類型</Typography.Text>
                    <Typography.Text strong>名稱</Typography.Text>
                    <Typography.Text strong>售價</Typography.Text>
                    <Typography.Text strong>成本</Typography.Text>
                    <Typography.Text strong>庫存</Typography.Text>
                    <Typography.Text strong>庫存數量</Typography.Text>
                    <span />
                  </div>
                  {batchRows.map((row, index) => (
                    <div className="batch-item-row" key={index}>
                      <Typography.Text type="secondary">{index + 1}</Typography.Text>
                      <Select
                        value={row.type}
                        onChange={(value) => updateBatchRowType(index, value)}
                        options={itemTypeOptions}
                      />
                      <Input
                        placeholder="名稱"
                        value={row.name}
                        onChange={(event) => updateBatchRow(index, { name: event.target.value })}
                      />
                      <InputNumber
                        min={0}
                        placeholder="售價"
                        formatter={formatInputMoney}
                        parser={parseInputMoney}
                        value={row.price}
                        onChange={(value) => updateBatchRow(index, { price: value == null ? null : Number(value) })}
                      />
                      <InputNumber
                        min={0}
                        placeholder="成本"
                        formatter={formatInputMoney}
                        parser={parseInputMoney}
                        value={row.cost}
                        onChange={(value) => updateBatchRow(index, { cost: Number(value ?? 0) })}
                      />
                      <Checkbox
                        checked={row.requiresInventory}
                        disabled={row.type === oilDonationItemType}
                        onChange={(event) =>
                          updateBatchRow(index, {
                            requiresInventory: event.target.checked,
                            inventoryQuantity: event.target.checked ? row.inventoryQuantity : 0
                          })
                        }
                      >
                        庫存
                      </Checkbox>
                      {row.type !== oilDonationItemType && row.requiresInventory ? (
                        <InputNumber
                          min={1}
                          disabled={Boolean(row.id)}
                          placeholder={row.id ? "既有庫存" : "庫存數量"}
                          value={row.inventoryQuantity}
                          onChange={(value) => updateBatchRow(index, { inventoryQuantity: Number(value ?? 0) })}
                        />
                      ) : (
                        <span />
                      )}
                      {index > 0 || editingId ? (
                        <Button
                          danger
                          htmlType="button"
                          icon={<DeleteOutlined />}
                          aria-label="刪除"
                          title="刪除"
                          onClick={() => removeBatchRow(index)}
                        />
                      ) : (
                        <span />
                      )}
                    </div>
                  ))}
                </div>
                <Space className="batch-item-actions" style={{ marginTop: 12 }}>
                  <Button htmlType="button" onClick={() => setBatchRows([...batchRows, createBatchRow()])}>
                    ＋新增品項
                  </Button>
                </Space>
              </div>
            )}
            {error && <Alert type="error" message={error} showIcon style={{ marginBottom: 12 }} />}
            <Space>
              <Button type="primary" htmlType="submit">
                {editingId ? "更新" : "新增"}
              </Button>
              {config.slug === "employees" && (
                <Button onClick={() => setTagModalOpen(true)}>
                  設定 TAG
                </Button>
              )}
              {editingId && (
                <Button
                  onClick={() => {
                    setEditingId(null);
                    setForm(initialForm);
                    if (showEventItemBatch) setBatchRows(createBatchRows());
                  }}
                >
                  取消編輯
                </Button>
              )}
            </Space>
          </Form>
        </Card>
      )}

      {config.slug === "employees" && (
        <Modal
          title="設定 TAG"
          open={tagModalOpen}
          footer={null}
          onCancel={() => setTagModalOpen(false)}
        >
          <Space.Compact style={{ width: "100%" }}>
            <Input
              placeholder="新增 TAG"
              value={newTagName}
              onChange={(event) => setNewTagName(event.target.value)}
              onPressEnter={createEmployeeTag}
            />
            <Button type="primary" onClick={createEmployeeTag}>
              新增
            </Button>
          </Space.Compact>
          <div className="employee-tag-list">
            {(relations["employee-tags"] ?? []).map((tag) => (
              <Tag
                key={tag.id}
                closable
                color="blue"
                onClose={(event) => {
                  event.preventDefault();
                  void deleteEmployeeTag(String(tag.id));
                }}
              >
                {String(tag.name ?? "")}
              </Tag>
            ))}
          </div>
        </Modal>
      )}

      {showInventoryBatch && (
        <Card className="batch-form-card inventory-batch-card" style={{ marginBottom: 16 }}>
          <Typography.Title level={5} style={{ marginTop: 0 }}>
            批次新增
          </Typography.Title>
          <div className="batch-inventory-grid">
            <div className="batch-inventory-row batch-item-header">
              <span />
              <Typography.Text strong>品項</Typography.Text>
              <Typography.Text strong>異動類型</Typography.Text>
              <Typography.Text strong>數量</Typography.Text>
              <Typography.Text strong>庫存</Typography.Text>
              <Typography.Text strong>異動時間</Typography.Text>
              <Typography.Text strong>原因</Typography.Text>
              <span />
            </div>
            {batchInventoryRows.map((row, index) => (
              <div className="batch-inventory-row" key={index}>
                <Typography.Text type="secondary">{index + 1}</Typography.Text>
                <Select
                  value={row.itemId || undefined}
                  placeholder="請選擇"
                  onChange={(value) => updateBatchInventoryRow(index, { itemId: value })}
                  options={inventoryItems.map((item) => ({
                    value: item.id,
                    label: String(item.name ?? item.id)
                  }))}
                />
                <Select
                  value={row.type}
                  onChange={(value) => updateBatchInventoryRow(index, { type: value })}
                  options={[
                    { label: "進貨", value: "PURCHASE" },
                    { label: "銷售", value: "SALE" },
                    { label: "調整", value: "ADJUSTMENT" },
                    { label: "耗用", value: "CONSUMPTION" }
                  ]}
                />
                <InputNumber
                  value={row.quantity}
                  onChange={(value) => updateBatchInventoryRow(index, { quantity: Number(value ?? 0) })}
                />
                <Input value={String(stockForItem(row.itemId))} disabled />
                <DatePicker
                  value={row.movedAt ? dayjs(row.movedAt) : null}
                  onChange={(date) =>
                    updateBatchInventoryRow(index, {
                      movedAt: date ? date.format("YYYY-MM-DD") : dayjs().format("YYYY-MM-DD")
                    })
                  }
                />
                <Input
                  placeholder="原因"
                  value={row.reason}
                  onChange={(event) => updateBatchInventoryRow(index, { reason: event.target.value })}
                />
                {index > 0 ? (
                  <Button
                    danger
                    icon={<DeleteOutlined />}
                    aria-label="刪除"
                    title="刪除"
                    onClick={() => removeBatchInventoryRow(index)}
                  />
                ) : (
                  <span />
                )}
              </div>
            ))}
          </div>
          <Space className="batch-item-actions batch-inventory-actions" size={12} style={{ marginTop: 12 }}>
            <Button onClick={() => setBatchInventoryRows([...batchInventoryRows, createBatchInventoryRow()])}>
              ＋新增
            </Button>
            <Button type="primary" onClick={submitBatchInventory}>
              批次新增
            </Button>
          </Space>
        </Card>
      )}

      {showItemFilters && (
        <Card className="batch-form-card" style={{ marginBottom: 16 }}>
          <Typography.Title level={5} style={{ marginTop: 0 }}>
            批次新增
          </Typography.Title>
          <div className="batch-item-grid">
            <div className="batch-item-row batch-item-header">
              <span />
              <Typography.Text strong>類型</Typography.Text>
              <Typography.Text strong>名稱</Typography.Text>
              <Typography.Text strong>售價</Typography.Text>
              <Typography.Text strong>庫存</Typography.Text>
              <Typography.Text strong>庫存數量</Typography.Text>
              <span />
            </div>
            {batchRows.map((row, index) => (
              <div className="batch-item-row" key={index}>
                <Typography.Text type="secondary">{index + 1}</Typography.Text>
                <Select
                  value={row.type}
                  onChange={(value) => updateBatchRowType(index, value)}
                  options={itemTypeOptions}
                />
                <Input
                  placeholder="名稱"
                  value={row.name}
                  onChange={(event) => updateBatchRow(index, { name: event.target.value })}
                />
                <InputNumber
                  min={0}
                  placeholder="售價"
                  formatter={formatInputMoney}
                  parser={parseInputMoney}
                  value={row.price}
                  onChange={(value) => updateBatchRow(index, { price: value == null ? null : Number(value) })}
                />
                <Checkbox
                  checked={row.requiresInventory}
                  disabled={row.type === oilDonationItemType}
                  onChange={(event) => updateBatchRow(index, { requiresInventory: event.target.checked })}
                >
                  庫存
                </Checkbox>
                {row.type !== oilDonationItemType && row.requiresInventory ? (
                  <InputNumber
                    min={1}
                    placeholder="庫存數量"
                    value={row.inventoryQuantity}
                    onChange={(value) => updateBatchRow(index, { inventoryQuantity: Number(value ?? 0) })}
                  />
                ) : (
                  <span />
                )}
                {index > 0 ? (
                  <Button
                    danger
                    icon={<DeleteOutlined />}
                    aria-label="刪除"
                    title="刪除"
                    onClick={() => removeBatchRow(index)}
                  />
                ) : (
                  <span />
                )}
              </div>
            ))}
          </div>
          <Space className="batch-item-actions" style={{ marginTop: 12 }}>
            <Button disabled={Boolean(editingId)} onClick={() => setBatchRows([...batchRows, createBatchRow()])}>
              ＋新增
            </Button>
            <Button type="primary" loading={batchSubmitting} onClick={submitBatchItems}>
              {editingId ? "更新" : "批次新增"}
            </Button>
            {editingId && (
              <Button
                onClick={() => {
                  setEditingId(null);
                  setBatchRows(createBatchRows());
                }}
              >
                取消編輯
              </Button>
            )}
          </Space>
        </Card>
      )}

      <Card>
        {showAssetMonthTools && (
          <Space wrap style={{ marginBottom: 16 }}>
            <DatePicker
              allowClear={false}
              picker="month"
              value={dayjs(assetMonthFilter)}
              onChange={(date) => setAssetMonthFilter((date ?? dayjs()).format("YYYY-MM"))}
            />
            <DatePicker
              allowClear={false}
              picker="month"
              value={dayjs(assetFromMonth)}
              onChange={(date) => setAssetFromMonth((date ?? dayjs()).format("YYYY-MM"))}
            />
            <Typography.Text>複製至</Typography.Text>
            <DatePicker
              allowClear={false}
              picker="month"
              value={dayjs(assetToMonth)}
              onChange={(date) => setAssetToMonth((date ?? dayjs()).format("YYYY-MM"))}
            />
            <Button type="primary" loading={assetCopying} onClick={copyFixedAssetsMonth}>
              複製固定資產
            </Button>
          </Space>
        )}
        {showAssetMonthTools && assetCopyResult && (
          <Alert type="success" message={assetCopyResult} showIcon style={{ marginBottom: 16 }} />
        )}
        {config.slug === "fixed-expenses" && (
          <div className="cash-filter-row">
            <DatePicker
              allowClear={false}
              picker="month"
              value={dayjs(fixedExpenseMonthFilter)}
              onChange={(date) => setFixedExpenseMonthFilter((date ?? dayjs()).format("YYYY-MM"))}
            />
          </div>
        )}
        {showCashBalance && (
          <div className="cash-summary-row">
            <div className="petty-cash-balance">
              <Typography.Text type="secondary">
                {config.slug === "fixed-expenses" ? "固定支出總額" : "目前零用金餘額"}
              </Typography.Text>
              <Typography.Title level={3} style={{ margin: 0 }}>
                {(config.slug === "fixed-expenses" ? fixedExpenseTotal : currentCashBalance).toLocaleString()}
              </Typography.Title>
            </div>
            {config.slug === "petty-cash" && (
              <div className="petty-cash-balance">
                <Typography.Text type="secondary">當月花費零用金總額</Typography.Text>
                <Typography.Title level={3} style={{ margin: 0 }}>
                  {currentMonthPettyCashExpense.toLocaleString()}
                </Typography.Title>
              </div>
            )}
          </div>
        )}
        {showItemFilters && (
          <Space wrap style={{ marginBottom: 16 }}>
            <Select
              allowClear
              placeholder="篩選類型"
              style={{ width: 160 }}
              value={typeFilter}
              onChange={(value) => setTypeFilter(value)}
              options={itemTypeOptions}
            />
            <Input.Search
              allowClear
              placeholder="搜尋名稱"
              style={{ width: 240 }}
              value={nameSearch}
              onChange={(event) => setNameSearch(event.target.value)}
            />
          </Space>
        )}
        {showPettyCashFilters && (
          <Space wrap style={{ marginBottom: 16 }}>
            <Select
              allowClear
              placeholder="篩選代墊者"
              style={{ width: 180 }}
              value={pettyCashEmployeeFilter}
              onChange={(value) => setPettyCashEmployeeFilter(value)}
              options={(relations.employees ?? []).map((employee) => ({
                value: employee.id,
                label: String(employee.name ?? employee.id)
              }))}
            />
            <Select
              allowClear
              placeholder="篩選出帳"
              style={{ width: 160 }}
              value={pettyCashCheckedOutFilter}
              onChange={(value) => setPettyCashCheckedOutFilter(value)}
              options={[
                { label: "勾選", value: "CHECKED" },
                { label: "未勾選", value: "UNCHECKED" }
              ]}
            />
          </Space>
        )}
        {showRegistrationFilters && (
          <div style={{ marginBottom: 16 }}>
            <div style={{ marginBottom: 8 }}>
              <Button
                icon={<DownloadOutlined />}
                onClick={() => setRegistrationExportOpen(true)}
                disabled={records.length === 0}
              >
                匯出Excel
              </Button>
            </div>
            <Space wrap>
              <Select
                allowClear
                placeholder="篩選活動"
                style={{ width: 180 }}
                value={registrationEventFilter}
                onChange={(value) => {
                  setRegistrationEventFilter(value);
                  setRegistrationItemFilter(undefined);
                }}
                options={(relations.events ?? []).map((event) => ({
                  value: event.id,
                  label: String(event.title ?? event.id)
                }))}
              />
              <Select
                allowClear
                placeholder="篩選項目"
                style={{ width: 180 }}
                value={registrationItemFilter}
                onChange={(value) => setRegistrationItemFilter(value)}
                options={(relations.items ?? [])
                  .filter((item) => !registrationEventFilter || item.eventId === registrationEventFilter)
                  .map((item) => ({
                    value: item.id,
                    label: String(item.name ?? item.id)
                  }))}
              />
              <DatePicker.RangePicker
                style={{ width: 260 }}
                value={
                  registrationDateRangeFilter
                    ? [dayjs(registrationDateRangeFilter[0]), dayjs(registrationDateRangeFilter[1])]
                    : null
                }
                onChange={(dates) =>
                  setRegistrationDateRangeFilter(
                    dates?.[0] && dates[1] ? [dates[0].format("YYYY-MM-DD"), dates[1].format("YYYY-MM-DD")] : null
                  )
                }
              />
            </Space>
          </div>
        )}
        <Table
          className={showItemFilters ? "compact-data-table" : undefined}
          rowKey="id"
          dataSource={filteredRecords}
          scroll={{ x: true }}
          pagination={{
            pageSize,
            showSizeChanger: true,
            pageSizeOptions: [30, 50, 100],
            onShowSizeChange: (_current, size) => setPageSize(size),
            onChange: (_page, size) => setPageSize(size)
          }}
          columns={[
            ...visibleColumns.map((column) => ({
              title: columnTitle(config, column),
              dataIndex: column,
              key: column,
              render: (_value: unknown, record: DataRecord) =>
                config.slug === "petty-cash" && column === "checkedOut" ? (
                  <Checkbox
                    checked={record.type === "INCOME" ? false : Boolean(record.checkedOut)}
                    disabled={record.type === "INCOME"}
                    onChange={(event) => toggleCheckedOut(record, event.target.checked)}
                  />
                ) : config.slug === "event-registrations" && column === "status" ? (
                  <Checkbox
                    checked={record.status === "PAID"}
                    onChange={(event) => toggleRegistrationPaid(record, event.target.checked)}
                  />
                ) : (
                  renderValue(config, record, column)
                )
            })),
            ...(!showInventoryBatch
              ? [
                  {
                    title: "操作",
                    key: "actions",
                    render: (_value: unknown, record: DataRecord) => (
                      <Space>
                        {record.systemGenerated ? (
                          <Tag color="processing">系統生成</Tag>
                        ) : (
                          <>
                            <Button icon={<EditOutlined />} aria-label="編輯" title="編輯" onClick={() => edit(record)} />
                            <Button
                              danger
                              icon={<DeleteOutlined />}
                              aria-label={config.softDelete ? "停用" : "刪除"}
                              title={config.softDelete ? "停用" : "刪除"}
                              onClick={() => remove(record.id)}
                            />
                          </>
                        )}
                      </Space>
                    )
                  }
                ]
              : [])
          ]}
        />
      </Card>
      {showRegistrationFilters && (
        <Modal
          title="匯出活動報名"
          open={registrationExportOpen}
          okText="匯出"
          cancelText="取消"
          onOk={confirmEventRegistrationsExport}
          onCancel={() => setRegistrationExportOpen(false)}
        >
          <Form layout="vertical">
            <Form.Item label="日期區間">
              <DatePicker.RangePicker
                style={{ width: "100%" }}
                value={
                  registrationExportDateRange
                    ? [dayjs(registrationExportDateRange[0]), dayjs(registrationExportDateRange[1])]
                    : null
                }
                onChange={(dates) =>
                  setRegistrationExportDateRange(
                    dates?.[0] && dates[1] ? [dates[0].format("YYYY-MM-DD"), dates[1].format("YYYY-MM-DD")] : null
                  )
                }
              />
            </Form.Item>
            <Form.Item label="活動">
              <Select
                allowClear
                placeholder="請選擇"
                value={registrationExportEventId}
                onChange={(value) => setRegistrationExportEventId(value)}
                options={(relations.events ?? []).map((event) => ({
                  value: event.id,
                  label: String(event.title ?? event.id)
                }))}
              />
            </Form.Item>
          </Form>
        </Modal>
      )}
      <Modal
        title="不可刪除"
        open={Boolean(deleteBlockMessage)}
        okText="知道了"
        cancelButtonProps={{ style: { display: "none" } }}
        onOk={() => setDeleteBlockMessage("")}
        onCancel={() => setDeleteBlockMessage("")}
      >
        <Typography.Text>{deleteBlockMessage}</Typography.Text>
      </Modal>
    </>
  );
}
