"use client";

import { DeleteOutlined, DollarOutlined, PlusOutlined } from "@ant-design/icons";
import type { LampType } from "@prisma/client";
import {
  Alert,
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Popconfirm,
  Select,
  Space,
  Table,
  Typography
} from "antd";
import type { ColumnsType } from "antd/es/table";
import dayjs, { type Dayjs } from "dayjs";
import { useCallback, useEffect, useMemo, useState } from "react";
import { lampTypes } from "@/lib/lighting";

type LampRecord = {
  id: string;
  personName: string | null;
  birthDate: string | null;
  address: string | null;
  type: LampType;
  litYear: number;
  litDate: string;
  price: number;
};

type AddFormValues = {
  personName: string;
  birthDate: Dayjs;
  address: string;
  type: LampType;
  litDate: Dayjs;
  price: number;
};

type ApiData = {
  records: LampRecord[];
  prices: { type: LampType; price: number }[];
};

const typeLabels = new Map(lampTypes.map((lamp) => [lamp.value, lamp.label]));

async function responseError(response: Response, fallback: string) {
  try {
    const data = await response.json();
    return typeof data?.error === "string" ? data.error : fallback;
  } catch {
    return fallback;
  }
}

export function LightingPage() {
  const currentYear = dayjs().year();
  const [year, setYear] = useState(currentYear);
  const [typeFilter, setTypeFilter] = useState<LampType | "ALL">("ALL");
  const [records, setRecords] = useState<LampRecord[]>([]);
  const [prices, setPrices] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [addOpen, setAddOpen] = useState(false);
  const [pricesOpen, setPricesOpen] = useState(false);
  const [addForm] = Form.useForm<AddFormValues>();
  const [priceForm] = Form.useForm<Record<string, number>>();

  const load = useCallback(async (selectedYear: number) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`/api/lighting?year=${selectedYear}`);
      if (!response.ok) {
        setError(await responseError(response, "點燈資料讀取失敗。"));
        return;
      }
      const data = await response.json() as ApiData;
      setRecords(Array.isArray(data.records) ? data.records : []);
      const nextPrices = Object.fromEntries((data.prices ?? []).map((item) => [item.type, Number(item.price)]));
      setPrices(nextPrices);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load(year);
  }, [load, year]);

  function openAdd() {
    setError("");
    setNotice("");
    setAddOpen(true);
  }

  function openPrices() {
    setError("");
    setNotice("");
    setPricesOpen(true);
  }

  async function addRecord() {
    let values: AddFormValues;
    try {
      values = await addForm.validateFields();
    } catch {
      return;
    }
    setSaving(true);
    setError("");
    try {
      const response = await fetch("/api/lighting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          personName: values.personName.trim(),
          birthDate: values.birthDate.format("YYYY-MM-DD"),
          address: values.address.trim(),
          type: values.type,
          litDate: values.litDate.format("YYYY-MM-DD"),
          price: values.price
        })
      });
      if (!response.ok) {
        setError(await responseError(response, "新增點燈失敗。"));
        return;
      }
      const recordYear = values.litDate.year();
      setAddOpen(false);
      setNotice("點燈紀錄已新增。歷史價錢會保留，不受日後價格設定影響。");
      if (recordYear !== year) setYear(recordYear);
      else await load(year);
    } finally {
      setSaving(false);
    }
  }

  async function savePrices() {
    let values: Record<string, number>;
    try {
      values = await priceForm.validateFields();
    } catch {
      return;
    }
    setSaving(true);
    setError("");
    try {
      const response = await fetch("/api/lighting/prices", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prices: lampTypes.map((lamp) => ({ type: lamp.value, price: values[lamp.value] })) })
      });
      if (!response.ok) {
        setError(await responseError(response, "價格設定儲存失敗。"));
        return;
      }
      setPricesOpen(false);
      setNotice("六種燈的價格設定已更新。新點燈紀錄會自動帶入新價格。");
      await load(year);
    } finally {
      setSaving(false);
    }
  }

  async function deleteRecord(id: string) {
    setError("");
    const response = await fetch(`/api/lighting/${id}`, { method: "DELETE" });
    if (!response.ok) {
      setError(await responseError(response, "刪除點燈紀錄失敗。"));
      return;
    }
    setNotice("點燈紀錄已刪除。");
    await load(year);
  }

  const filteredRecords = useMemo(
    () => typeFilter === "ALL" ? records : records.filter((record) => record.type === typeFilter),
    [records, typeFilter]
  );
  const total = useMemo(
    () => filteredRecords.reduce((sum, record) => sum + Number(record.price), 0),
    [filteredRecords]
  );

  const columns: ColumnsType<LampRecord> = [
    {
      title: "姓名",
      dataIndex: "personName",
      width: 120,
      fixed: "left",
      render: (value: string | null) => value || "—"
    },
    {
      title: "生日",
      dataIndex: "birthDate",
      width: 130,
      render: (value: string | null) => value ? dayjs(value).format("YYYY/MM/DD") : "—"
    },
    {
      title: "住址",
      dataIndex: "address",
      width: 240,
      ellipsis: true,
      render: (value: string | null) => value || "—"
    },
    { title: "年份", dataIndex: "litYear", width: 120 },
    {
      title: "日期",
      dataIndex: "litDate",
      width: 140,
      render: (value: string) => dayjs(value).format("YYYY/MM/DD")
    },
    { title: "種類", dataIndex: "type", render: (value: LampType) => typeLabels.get(value) ?? value },
    {
      title: "價錢",
      dataIndex: "price",
      width: 140,
      align: "right",
      render: (value: number) => `$${Number(value).toLocaleString("zh-TW")}`
    },
    {
      title: "操作",
      key: "actions",
      width: 90,
      align: "center",
      render: (_, record) => (
        <Popconfirm title="確定刪除這筆點燈紀錄？" okText="刪除" cancelText="取消" onConfirm={() => deleteRecord(record.id)}>
          <Button type="text" danger icon={<DeleteOutlined />} aria-label="刪除" />
        </Popconfirm>
      )
    }
  ];

  return (
    <Space orientation="vertical" size={16} style={{ width: "100%" }}>
      <div>
        <Typography.Title level={2} style={{ marginBottom: 4 }}>點燈紀錄</Typography.Title>
        <Typography.Text type="secondary">依年份管理點燈日期、燈別與實際收費。</Typography.Text>
      </div>

      {error && <Alert type="error" showIcon message={error} closable onClose={() => setError("")} />}
      {notice && <Alert type="success" showIcon message={notice} closable onClose={() => setNotice("")} />}

      <Card>
        <Space wrap size={12} style={{ width: "100%", justifyContent: "space-between" }}>
          <Space wrap>
            <Typography.Text strong>年份</Typography.Text>
            <DatePicker
              picker="year"
              allowClear={false}
              value={dayjs().year(year)}
              onChange={(value) => value && setYear(value.year())}
            />
          </Space>
          <Space wrap>
            <Button icon={<DollarOutlined />} onClick={openPrices}>價錢</Button>
            <Button type="primary" icon={<PlusOutlined />} onClick={openAdd}>新增</Button>
          </Space>
        </Space>
      </Card>

      <Card styles={{ body: { padding: 0 } }}>
        <Space wrap size={12} style={{ width: "100%", padding: 16, borderBottom: "1px solid #f0f0f0" }}>
          <Typography.Text strong>種類</Typography.Text>
          <Select
            value={typeFilter}
            style={{ width: 150 }}
            options={[{ label: "全部", value: "ALL" }, ...lampTypes]}
            onChange={(value: LampType | "ALL") => setTypeFilter(value)}
          />
          <Typography.Text type="secondary">合計 ${total.toLocaleString("zh-TW")}</Typography.Text>
        </Space>
        <Table
          className="compact-data-table"
          rowKey="id"
          loading={loading}
          columns={columns}
          dataSource={filteredRecords}
          scroll={{ x: 1120 }}
          pagination={{ defaultPageSize: 30, showSizeChanger: true, pageSizeOptions: ["30", "50", "100"], showTotal: (count) => `共 ${count} 筆` }}
        />
      </Card>

      <Modal
        width={620}
        title="新增點燈"
        open={addOpen}
        confirmLoading={saving}
        okText="新增"
        cancelText="取消"
        onOk={addRecord}
        onCancel={() => setAddOpen(false)}
        afterOpenChange={(open) => {
          if (!open) return;
          const defaultType = lampTypes[0].value;
          addForm.setFieldsValue({ type: defaultType, litDate: dayjs(), price: prices[defaultType] ?? 0 });
        }}
        destroyOnHidden
      >
        <Form form={addForm} layout="vertical" preserve={false}>
          <Form.Item name="personName" label="姓名" rules={[{ required: true, whitespace: true, message: "請輸入點燈者姓名" }]}>
            <Input maxLength={80} placeholder="請輸入姓名" />
          </Form.Item>
          <Form.Item name="birthDate" label="生日" rules={[{ required: true, message: "請選擇生日" }]}>
            <DatePicker
              style={{ width: "100%" }}
              format="YYYY/MM/DD"
              disabledDate={(date) => date.isAfter(dayjs(), "day")}
            />
          </Form.Item>
          <Form.Item name="address" label="住址" rules={[{ required: true, whitespace: true, message: "請輸入點燈者住址" }]}>
            <Input.TextArea maxLength={300} autoSize={{ minRows: 2, maxRows: 4 }} placeholder="請輸入住址" />
          </Form.Item>
          <Form.Item name="type" label="燈的種類" rules={[{ required: true, message: "請選擇燈的種類" }]}>
            <Select
              options={lampTypes}
              onChange={(type: LampType) => addForm.setFieldValue("price", prices[type] ?? 0)}
            />
          </Form.Item>
          <Form.Item name="litDate" label="點燈日期" rules={[{ required: true, message: "請選擇點燈日期" }]}>
            <DatePicker style={{ width: "100%" }} format="YYYY/MM/DD" />
          </Form.Item>
          <Form.Item name="price" label="價錢" rules={[{ required: true, message: "請輸入價錢" }]}>
            <InputNumber min={0} precision={0} prefix="$" style={{ width: "100%" }} />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="設定燈的價錢"
        open={pricesOpen}
        confirmLoading={saving}
        okText="儲存"
        cancelText="取消"
        onOk={savePrices}
        onCancel={() => setPricesOpen(false)}
        afterOpenChange={(open) => {
          if (!open) return;
          priceForm.setFieldsValue(Object.fromEntries(lampTypes.map((lamp) => [lamp.value, prices[lamp.value] ?? 0])));
        }}
        destroyOnHidden
      >
        <Alert type="info" showIcon message="價格更新只套用於之後新增的紀錄，不會改動歷史收費。" style={{ marginBottom: 16 }} />
        <Form form={priceForm} layout="vertical" preserve={false}>
          {lampTypes.map((lamp) => (
            <Form.Item key={lamp.value} name={lamp.value} label={lamp.label} rules={[{ required: true, message: `請設定${lamp.label}價錢` }]}>
              <InputNumber min={0} precision={0} prefix="$" style={{ width: "100%" }} />
            </Form.Item>
          ))}
        </Form>
      </Modal>
    </Space>
  );
}
