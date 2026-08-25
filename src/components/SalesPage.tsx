"use client";

import { FormEvent, useEffect, useState } from "react";
import { paymentMethods } from "@/lib/module-config";
import { Button, Card, DatePicker, Form, Input, InputNumber, Modal, Select, Space, Table, Typography } from "antd";
import { DeleteOutlined, DownloadOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

function todayDate() {
  return dayjs().format("YYYY-MM-DD");
}

type Item = {
  id: string;
  name: string;
  type: string;
  price: string | number;
  notes?: string | null;
  eventId?: string | null;
  servicePersonId?: string | null;
  requiresInventory: boolean;
  active?: boolean;
};

type Employee = {
  id: string;
  name: string;
  active?: boolean;
  tags?: { id: string; name: string }[];
};

type Sale = {
  id: string;
  soldAt: string;
  customerName: string | null;
  paymentMethod: string;
  notes: string | null;
  total: string | number;
  discount: string | number;
  status: string;
  salesPerson?: Employee | null;
  servicePerson?: Employee | null;
  lines: { id: string; quantity: number; lineTotal: string | number; item: Item }[];
};

type DraftLine = {
  itemId: string;
  servicePersonId: string;
  quantity: number;
  unitPrice: string;
};

const itemTypeLabels: Record<string, string> = {
  DIVINATION_SERVICE: "占卜服務",
  RITUAL_SERVICE: "儀式服務",
  FENG_SHUI_SERVICE: "風水服務",
  COURSE_SERVICE: "課程服務",
  OIL_DONATION: "香油捐贈",
  PHYSICAL_PRODUCT: "實體商品",
  LIGHTING_SERVICE: "點燈服務",
  SERVICE: "占卜服務",
  PRODUCT: "實體商品"
};

const serviceEmployeeTags = new Set(["外部員工", "內部員工"]);
const oilDonationItemType = "OIL_DONATION";
const paymentMethodLabels = new Map(paymentMethods.map((method) => [method.value, method.label]));

function formatSaleItemLabel(item: Item) {
  const baseLabel = `${itemTypeLabels[item.type] ?? item.type} - ${item.name}`;
  return item.eventId ? `活動 - ${baseLabel}` : baseLabel;
}

function isOilDonationItem(item?: Item) {
  return item?.type === oilDonationItemType;
}

function fuzzyIncludes(source: string, keyword: string) {
  const normalizedSource = source.trim().toLowerCase();
  const normalizedKeyword = keyword.trim().toLowerCase();
  if (!normalizedKeyword) return true;
  let sourceIndex = 0;
  for (const character of normalizedKeyword) {
    sourceIndex = normalizedSource.indexOf(character, sourceIndex);
    if (sourceIndex === -1) return false;
    sourceIndex += 1;
  }
  return true;
}

function escapeExcelCell(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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

export function SalesPage() {
  const { RangePicker } = DatePicker;
  const [items, setItems] = useState<Item[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [sales, setSales] = useState<Sale[]>([]);
  const [lines, setLines] = useState<DraftLine[]>([{ itemId: "", servicePersonId: "", quantity: 1, unitPrice: "" }]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({
    soldAt: todayDate(),
    customerName: "",
    salesPersonId: "",
    paymentMethod: "CASH",
    notes: ""
  });
  const [dateFilter, setDateFilter] = useState<[string, string] | null>(null);
  const [customerFilter, setCustomerFilter] = useState("");
  const [salesPersonFilter, setSalesPersonFilter] = useState("");
  const [servicePersonFilter, setServicePersonFilter] = useState("");
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [exportMonth, setExportMonth] = useState(dayjs());
  const [error, setError] = useState("");
  const serviceEmployees = employees.filter((employee) => {
    const tagNames = employee.tags?.map((tag) => tag.name) ?? [];
    return tagNames.some((tagName) => serviceEmployeeTags.has(tagName));
  });
  const filteredSales = sales.filter((sale) => {
    const soldAt = dayjs(sale.soldAt);
    const matchesDate =
      !dateFilter ||
      (soldAt.isValid() &&
        !soldAt.isBefore(dayjs(dateFilter[0]), "day") &&
        !soldAt.isAfter(dayjs(dateFilter[1]), "day"));
    const saleSearchText = [
      sale.customerName ?? "",
      ...sale.lines.flatMap((line) => [
        line.item.name,
        itemTypeLabels[line.item.type] ?? line.item.type,
        line.item.type
      ])
    ].join(" ");
    const matchesCustomer = fuzzyIncludes(saleSearchText, customerFilter);
    const matchesSalesPerson = !salesPersonFilter || sale.salesPerson?.id === salesPersonFilter;
    const matchesServicePerson = !servicePersonFilter || sale.servicePerson?.id === servicePersonFilter;
    return matchesDate && matchesCustomer && matchesSalesPerson && matchesServicePerson;
  });

  async function load() {
    const [itemResponse, employeeResponse, saleResponse] = await Promise.all([
      fetch("/api/items"),
      fetch("/api/employees"),
      fetch("/api/sales")
    ]);
    setItems((await itemResponse.json()).filter((item: Item) => item.active !== false));
    setEmployees((await employeeResponse.json()).filter((employee: Employee) => employee.active !== false));
    setSales(await saleResponse.json());
  }

  useEffect(() => {
    load();
  }, []);

  function updateLine(index: number, patch: Partial<DraftLine>) {
    setLines(lines.map((line, current) => (current === index ? { ...line, ...patch } : line)));
  }

  function selectLineItem(index: number, itemId: string) {
    const item = items.find((current) => current.id === itemId);
    updateLine(index, {
      itemId,
      servicePersonId: isOilDonationItem(item) ? "" : item?.servicePersonId ?? lines[index]?.servicePersonId ?? "",
      unitPrice: item ? String(item.price) : ""
    });
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (!form.salesPersonId) {
      setError("請選擇銷售人員。");
      return;
    }
    if (lines.some((line) => !line.itemId)) {
      setError("請為每筆銷售明細選擇品項。");
      return;
    }
    if (lines.some((line) => line.itemId && !isOilDonationItem(items.find((item) => item.id === line.itemId)) && !line.servicePersonId)) {
      setError("請為每筆銷售明細選擇服務人員。");
      return;
    }
    const response = await fetch(editingId ? `/api/sales/${editingId}` : "/api/sales", {
      method: editingId ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, discount: 0, lines })
    });
    if (!response.ok) {
      const data = await response.json();
      setError(data.error || "新增營收失敗。");
      return;
    }
    setEditingId(null);
    setLines([{ itemId: "", servicePersonId: "", quantity: 1, unitPrice: "" }]);
    setForm({
      soldAt: todayDate(),
      customerName: "",
      salesPersonId: "",
      paymentMethod: "CASH",
      notes: ""
    });
    await load();
  }

  function editSale(sale: Sale) {
    setEditingId(sale.id);
    setForm({
      soldAt: dayjs(sale.soldAt).format("YYYY-MM-DD"),
      customerName: sale.customerName ?? "",
      salesPersonId: sale.salesPerson?.id ?? "",
      paymentMethod: sale.paymentMethod,
      notes: sale.notes ?? ""
    });
    setLines(
      sale.lines.map((line) => ({
        itemId: line.item.id,
        servicePersonId: sale.servicePerson?.id ?? "",
        quantity: line.quantity,
        unitPrice: String(line.lineTotal ? Number(line.lineTotal) / line.quantity : "")
      }))
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function cancelEdit() {
    setEditingId(null);
    setLines([{ itemId: "", servicePersonId: "", quantity: 1, unitPrice: "" }]);
    setForm({
      soldAt: todayDate(),
      customerName: "",
      salesPersonId: "",
      paymentMethod: "CASH",
      notes: ""
    });
  }

  async function deleteSale(id: string) {
    setError("");
    const response = await fetch(`/api/sales/${id}`, { method: "DELETE" });
    if (!response.ok) {
      const data = await response.json();
      setError(data.error || "刪除營收失敗。");
      return;
    }
    if (editingId === id) cancelEdit();
    await load();
  }

  function exportSalesExcel(exportRecords: Sale[], month = dayjs()) {
    const headers = ["日期", "客戶", "品項", "數量", "金額", "服務人員", "銷售人員", "支付方式", "匯款資訊"];
    const rows = exportRecords.map((sale) => [
      dayjs(sale.soldAt).format("YYYY/M/D"),
      sale.customerName ?? "",
      sale.lines.map((line) => line.item.name).join("、"),
      sale.lines.map((line) => line.quantity).join("、"),
      formatMoney(sale.total),
      sale.servicePerson?.name ?? "",
      sale.salesPerson?.name ?? "",
      paymentMethodLabels.get(sale.paymentMethod) ?? sale.paymentMethod,
      sale.notes ?? ""
    ]);
    const tableRows = [headers, ...rows]
      .map((row) => `<tr>${row.map((cell) => `<td>${escapeExcelCell(cell)}</td>`).join("")}</tr>`)
      .join("");
    const html = `<!doctype html><html><head><meta charset="utf-8" /></head><body><table>${tableRows}</table></body></html>`;
    const blob = new Blob([html], { type: "application/vnd.ms-excel;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `營收登記-${month.format("YYYYMM")}-${dayjs().format("YYYYMMDD-HHmm")}.xls`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function confirmExportSalesExcel() {
    const exportRecords = sales.filter((sale) => dayjs(sale.soldAt).isSame(exportMonth, "month"));
    exportSalesExcel(exportRecords, exportMonth);
    setExportModalOpen(false);
  }

  return (
    <>
      <div className="page-heading">
        <Typography.Title level={2}>營收登記</Typography.Title>
        <Typography.Text type="secondary">建立每筆營收，服務只記錄收入，商品會自動扣庫存。</Typography.Text>
      </div>

      <Card style={{ marginBottom: 16 }}>
      <form onSubmit={submit}>
        <Form layout="vertical" component={false}>
        <div className="sales-form-grid">
          <Form.Item label="銷售日期">
            <DatePicker
              style={{ width: "100%" }}
              value={form.soldAt ? dayjs(form.soldAt) : null}
              onChange={(date) => setForm({ ...form, soldAt: date ? date.format("YYYY-MM-DD") : todayDate() })}
            />
          </Form.Item>
          <Form.Item label="客戶名稱">
            <Input
              value={form.customerName}
              onChange={(event) => setForm({ ...form, customerName: event.target.value })}
            />
          </Form.Item>
          <Form.Item label="銷售人員" required>
            <Select
              showSearch
              placeholder="請選擇"
              value={form.salesPersonId || undefined}
              onChange={(value) => setForm({ ...form, salesPersonId: value })}
              filterOption={(input, option) => fuzzyIncludes(String(option?.label ?? ""), input)}
              options={serviceEmployees.map((employee) => ({
                value: employee.id,
                label: employee.name
              }))}
            />
          </Form.Item>
          <Form.Item label="付款方式">
            <Select
              value={form.paymentMethod}
              onChange={(value) => setForm({ ...form, paymentMethod: value })}
              options={paymentMethods}
            />
          </Form.Item>
          <Form.Item label="匯款資訊">
            <Input value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} />
          </Form.Item>
        </div>
        </Form>

        <Card size="small" title="銷售明細" style={{ marginBottom: 16 }}>
          <div className="sales-line-row sales-line-header">
            <Typography.Text strong className="required-column-label">品項</Typography.Text>
            <Typography.Text strong>服務人員</Typography.Text>
            <Typography.Text strong>數量</Typography.Text>
            <Typography.Text strong>單價</Typography.Text>
            <Typography.Text strong>操作</Typography.Text>
          </div>
          {lines.map((line, index) => (
            <div className="sales-line-row" key={index}>
              <Form.Item style={{ marginBottom: 0 }}>
                <Select
                  showSearch
                  style={{ width: "100%" }}
                  value={line.itemId || undefined}
                  aria-label="品項"
                  placeholder="請選擇"
                  onChange={(value) => selectLineItem(index, value)}
                  filterOption={(input, option) =>
                    fuzzyIncludes(`${option?.label ?? ""} ${option?.searchText ?? ""}`, input)
                  }
                  options={items.map((item) => ({
                    value: item.id,
                    label: formatSaleItemLabel(item),
                    searchText: `${item.name} ${itemTypeLabels[item.type] ?? item.type} ${item.type}`
                  }))}
                />
              </Form.Item>
              <Form.Item
                required={!isOilDonationItem(items.find((item) => item.id === line.itemId))}
                style={{ marginBottom: 0 }}
              >
                <Select
                  showSearch
                  disabled={isOilDonationItem(items.find((item) => item.id === line.itemId))}
                  placeholder={isOilDonationItem(items.find((item) => item.id === line.itemId)) ? "不需填寫" : "請選擇"}
                  value={line.servicePersonId || undefined}
                  aria-label="服務人員"
                  onChange={(value) => updateLine(index, { servicePersonId: value })}
                  filterOption={(input, option) => fuzzyIncludes(String(option?.label ?? ""), input)}
                  options={serviceEmployees.map((employee) => ({
                    value: employee.id,
                    label: employee.name
                  }))}
                />
              </Form.Item>
              <Form.Item style={{ marginBottom: 0 }}>
                <InputNumber
                  min={1}
                  style={{ width: "100%" }}
                  aria-label="數量"
                  value={line.quantity}
                  onChange={(value) => updateLine(index, { quantity: Number(value ?? 1) })}
                />
              </Form.Item>
              <Form.Item style={{ marginBottom: 0 }}>
                <InputNumber
                  style={{ width: "100%" }}
                  placeholder="預設售價"
                  aria-label="單價"
                  formatter={formatInputMoney}
                  parser={parseInputMoney}
                  value={line.unitPrice === "" ? null : Number(line.unitPrice)}
                  onChange={(value) => updateLine(index, { unitPrice: value == null ? "" : String(value) })}
                />
              </Form.Item>
              {index > 0 ? (
                <Form.Item style={{ marginBottom: 0 }}>
                  <Button
                    danger
                    icon={<DeleteOutlined />}
                    aria-label="刪除"
                    title="刪除"
                    onClick={() => setLines(lines.filter((_, current) => current !== index))}
                  />
                </Form.Item>
              ) : (
                <span />
              )}
            </div>
          ))}
          <Button
            icon={<PlusOutlined />}
            htmlType="button"
            onClick={() => setLines([...lines, { itemId: "", servicePersonId: "", quantity: 1, unitPrice: "" }])}
          >
            新增明細
          </Button>
        </Card>

        {error && <Typography.Text type="danger">{error}</Typography.Text>}
        <Space style={{ marginTop: 16 }}>
          <Button type="primary" htmlType="submit">{editingId ? "更新" : "新增"}</Button>
          {editingId && <Button onClick={cancelEdit}>取消修改</Button>}
        </Space>
      </form>
      </Card>

      <Card>
        <div style={{ marginBottom: 8 }}>
          <Button
            icon={<DownloadOutlined />}
            aria-label="匯出 Excel"
            title="匯出 Excel"
            onClick={() => {
              setExportMonth(dayjs());
              setExportModalOpen(true);
            }}
          />
        </div>
        <div className="sales-filter-row">
          <RangePicker
            placeholder={["開始日期", "結束日期"]}
            value={dateFilter ? [dayjs(dateFilter[0]), dayjs(dateFilter[1])] : null}
            onChange={(dates) =>
              setDateFilter(dates?.[0] && dates?.[1] ? [dates[0].format("YYYY-MM-DD"), dates[1].format("YYYY-MM-DD")] : null)
            }
          />
          <Input
            placeholder="客戶 / 品項"
            allowClear
            value={customerFilter}
            onChange={(event) => setCustomerFilter(event.target.value)}
          />
          <Select
            showSearch
            placeholder="銷售人員"
            allowClear
            value={salesPersonFilter || undefined}
            onChange={(value) => setSalesPersonFilter(value ?? "")}
            filterOption={(input, option) => fuzzyIncludes(String(option?.label ?? ""), input)}
            options={serviceEmployees.map((employee) => ({ value: employee.id, label: employee.name }))}
          />
          <Select
            showSearch
            placeholder="服務人員"
            allowClear
            value={servicePersonFilter || undefined}
            onChange={(value) => setServicePersonFilter(value ?? "")}
            filterOption={(input, option) => fuzzyIncludes(String(option?.label ?? ""), input)}
            options={serviceEmployees.map((employee) => ({ value: employee.id, label: employee.name }))}
          />
        </div>
        <Table
          rowKey="id"
          dataSource={filteredSales}
          scroll={{ x: true }}
          columns={[
            { title: "日期", dataIndex: "soldAt", render: (value: string) => new Date(value).toLocaleDateString("zh-TW") },
            { title: "客戶", dataIndex: "customerName" },
            {
              title: "品項",
              render: (_: unknown, sale: Sale) => sale.lines.map((line) => <div key={line.id}>{line.item.name}</div>)
            },
            {
              title: "數量",
              render: (_: unknown, sale: Sale) => sale.lines.map((line) => <div key={line.id}>{line.quantity}</div>)
            },
            { title: "金額", dataIndex: "total", render: (value: string | number) => formatMoney(value) },
            { title: "服務人員", render: (_: unknown, sale: Sale) => sale.servicePerson?.name ?? "" },
            { title: "銷售人員", render: (_: unknown, sale: Sale) => sale.salesPerson?.name ?? "" },
            { title: "支付方式", dataIndex: "paymentMethod", render: (value: string) => paymentMethodLabels.get(value) ?? value },
            { title: "匯款資訊", dataIndex: "notes" },
            {
              title: "操作",
              render: (_: unknown, sale: Sale) => (
                <Space>
                  <Button icon={<EditOutlined />} aria-label="編輯" title="編輯" onClick={() => editSale(sale)} />
                  <Button danger icon={<DeleteOutlined />} aria-label="刪除" title="刪除" onClick={() => deleteSale(sale.id)} />
                </Space>
              )
            }
          ]}
        />
      </Card>

      <Modal
        title="匯出營收 Excel"
        open={exportModalOpen}
        okText="匯出"
        cancelText="取消"
        onOk={confirmExportSalesExcel}
        onCancel={() => setExportModalOpen(false)}
      >
        <Form layout="vertical">
          <Form.Item label="匯出月份">
            <DatePicker
              allowClear={false}
              picker="month"
              style={{ width: "100%" }}
              value={exportMonth}
              onChange={(value) => {
                if (value) setExportMonth(value);
              }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
