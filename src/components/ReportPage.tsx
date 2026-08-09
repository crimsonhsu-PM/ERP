"use client";

import { ExclamationCircleOutlined, ReloadOutlined } from "@ant-design/icons";
import { useCallback, useEffect, useState } from "react";
import { Button, Card, DatePicker, Form, InputNumber, Statistic, Table, Tooltip, Typography } from "antd";
import dayjs from "dayjs";

type Report = {
  summary: {
    revenue: number;
    previousMonthRevenue?: number;
    revenueMonthlyChangeRate?: number | null;
    grossProfit: number;
    pettyIncome: number;
    pettyExpense: number;
    netCash: number;
    fixedExpenseTotal?: number;
    shiftIncomeTotal?: number;
    serviceCommissionTotal?: number;
    employeePayoutTotal?: number;
  };
  itemAnalysis: { name: string; type: string; quantity: number; revenue: number }[];
  itemTypeAnalysis?: {
    type: string;
    revenue: number;
    revenueRate: number;
    previousRevenueRate?: number | null;
    revenueRateChange?: number | null;
  }[];
  paymentMethodAnalysis?: { paymentMethod: string; revenue: number }[];
  activityAnalysis?: { eventId: string; eventName: string; revenue: number; revenueRate: number }[];
  fixedExpenseAnalysis?: { id: string; purpose: string; amount: number; entryDate: string; employeeName: string }[];
  pettyCashExpenseAnalysis?: {
    id: string;
    purpose: string;
    amount: number;
    entryDate: string;
    employeeName: string;
    checkedOut: boolean;
  }[];
  shiftIncomeAnalysis?: {
    employeeId: string;
    employeeName: string;
    employeeType: string;
    days: number;
    income: number;
  }[];
  serviceCommissionAnalysis?: {
    employeeId: string;
    employeeName: string;
    employeeType: string;
    serviceRevenue: number;
    commission: number;
  }[];
  employeePayoutAnalysis?: {
    employeeId: string;
    employeeName: string;
    employeeType: string;
    fixedSalaryIncome: number;
    shiftDays: number;
    shiftIncome: number;
    commissionItems: {
      itemName: string;
      serviceRevenue: number;
      commission: number;
    }[];
    commissionTotal: number;
    payoutTotal: number;
  }[];
};

type ItemTypeAnalysisRow = {
  type: string;
  revenue: number;
  revenueRate: number;
  previousRevenueRate?: number | null;
  revenueRateChange?: number | null;
  items: {
    name: string;
    quantity: number;
    revenue: number;
    typeRevenueRate: number;
  }[];
};

const titles: Record<string, string> = {
  daily: "日報表",
  monthly: "月報表",
  quarterly: "季報表",
  yearly: "年報表 / 股東利潤"
};

const itemTypeLabels: Record<string, string> = {
  DIVINATION_SERVICE: "占卜服務",
  RITUAL_SERVICE: "儀式服務",
  FENG_SHUI_SERVICE: "風水服務",
  COURSE_SERVICE: "課程服務",
  OIL_DONATION: "香油捐贈",
  PHYSICAL_PRODUCT: "實體商品",
  SERVICE: "占卜服務",
  PRODUCT: "實體商品"
};

const paymentMethodLabels: Record<string, string> = {
  CASH: "現金",
  TRANSFER: "匯款",
  CARD: "刷卡",
  LINE_PAY: "Line Pay",
  OTHER: "其他"
};

const moneyColumn = (value: number) => Number(value).toLocaleString();
const percentColumn = (value: number) => `${Number(value).toFixed(1)}%`;
const signedPercentColumn = (value: number) => `${value > 0 ? "+" : ""}${Number(value).toFixed(1)}%`;
const itemTypeTableColumns = {
  name: "40%",
  revenue: "25%",
  rate: "25%"
};

export function ReportPage({ period }: { period: string }) {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [report, setReport] = useState<Report | null>(null);
  const [loading, setLoading] = useState(false);
  const [shareholderRate, setShareholderRate] = useState(30);
  const isMonthly = period === "monthly";
  const isYearly = period === "yearly";

  const loadReport = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/reports/${period}?date=${date}`, { cache: "no-store" });
      setReport(await response.json());
    } finally {
      setLoading(false);
    }
  }, [period, date]);

  useEffect(() => {
    void loadReport();
  }, [loadReport]);

  const summary = report?.summary;
  const shareholderProfit = summary ? (summary.grossProfit * shareholderRate) / 100 : 0;
  const monthlyProfit = summary
    ? summary.revenue - (summary.fixedExpenseTotal ?? 0) - summary.pettyExpense - (summary.serviceCommissionTotal ?? 0)
    : 0;
  const displayedGrossProfit = period === "monthly" ? monthlyProfit : summary?.grossProfit ?? 0;
  const monthlyOperatingExpenseTotal = summary ? (summary.fixedExpenseTotal ?? 0) + summary.pettyExpense : 0;
  const revenueMonthlyChangeRate = summary?.revenueMonthlyChangeRate;
  const itemTypeRows: ItemTypeAnalysisRow[] = (report?.itemTypeAnalysis ?? []).map((itemType) => ({
    ...itemType,
    items: report?.itemAnalysis
      .filter((item) => item.type === itemType.type)
      .map((item) => ({
        name: item.name,
        quantity: item.quantity,
        revenue: item.revenue,
        typeRevenueRate: itemType.revenue > 0 ? (item.revenue / itemType.revenue) * 100 : 0
      }))
      .sort((left, right) => right.revenue - left.revenue) ?? []
  }));

  return (
    <>
      <div className="page-heading">
        <Typography.Title level={2}>{titles[period]}</Typography.Title>
        <Typography.Text type="secondary">依營收登記、品項成本與零用金即時計算。</Typography.Text>
      </div>
      <Card style={{ marginBottom: 16 }}>
        <Form layout="inline">
          <Form.Item label={isYearly ? "基準年份" : isMonthly ? "基準月份" : "基準日期"}>
            <DatePicker
              picker={isYearly ? "year" : isMonthly ? "month" : "date"}
              value={dayjs(date)}
              onChange={(value) => {
                if (value) {
                  setDate(
                    isYearly
                      ? value.startOf("year").format("YYYY-MM-DD")
                      : isMonthly
                        ? value.startOf("month").format("YYYY-MM-DD")
                        : value.format("YYYY-MM-DD")
                  );
                }
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button icon={<ReloadOutlined />} loading={loading} onClick={loadReport}>
              刷新
            </Button>
          </Form.Item>
        {period === "yearly" && (
          <Form.Item label="股東分潤比例 %">
            <InputNumber
              value={shareholderRate}
              onChange={(value) => setShareholderRate(Number(value ?? 0))}
            />
          </Form.Item>
        )}
        </Form>
      </Card>
      {summary && (
        <>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 16 }}>
            {period !== "yearly" && (
              <Card>
                <Statistic title="營收" value={summary.revenue} formatter={(value) => moneyColumn(Number(value))} />
                {period === "monthly" && revenueMonthlyChangeRate != null && (
                  <Typography.Text
                    style={{
                      color: revenueMonthlyChangeRate >= 0 ? "#cf1322" : "#389e0d",
                      display: "block",
                      marginTop: 8
                    }}
                  >
                    較上月{revenueMonthlyChangeRate >= 0 ? "增加" : "減少"} {signedPercentColumn(revenueMonthlyChangeRate)}
                  </Typography.Text>
                )}
                {period === "monthly" && revenueMonthlyChangeRate == null && (
                  <Typography.Text type="secondary" style={{ display: "block", marginTop: 8 }}>
                    上月無營收資料
                  </Typography.Text>
                )}
              </Card>
            )}
            <Card>
              <Statistic
                title={
                  period === "monthly" ? (
	                    <span>
	                      毛利
	                      <Tooltip
	                        title={
	                          <div>
	                            <div>計算公式：營收 - 固定支出 - 零用金支出 - 服務分潤總額</div>
	                            <div>營收：{moneyColumn(summary.revenue)}</div>
	                            <div>固定支出：{moneyColumn(summary.fixedExpenseTotal ?? 0)}</div>
	                            <div>零用金支出：{moneyColumn(summary.pettyExpense)}</div>
	                            <div>服務分潤總額：{moneyColumn(summary.serviceCommissionTotal ?? 0)}</div>
	                            <div>毛利：{moneyColumn(monthlyProfit)}</div>
	                          </div>
	                        }
	                      >
	                        <ExclamationCircleOutlined style={{ color: "#8c8c8c", fontSize: 16, marginLeft: 8 }} />
	                      </Tooltip>
	                    </span>
                  ) : (
                    "毛利"
                  )
                }
                value={displayedGrossProfit}
                formatter={(value) => moneyColumn(Number(value))}
              />
            </Card>
            {period === "monthly" && (
              <>
                <Card>
                  <Statistic
                    title="固定支出與零用金總額"
                    value={monthlyOperatingExpenseTotal}
                    formatter={(value) => moneyColumn(Number(value))}
                  />
                </Card>
                <Card>
                  <Statistic
                    title="服務分潤總額"
                    value={summary.serviceCommissionTotal ?? 0}
                    formatter={(value) => moneyColumn(Number(value))}
                  />
                </Card>
              </>
            )}
            {period === "yearly" && (
              <Card>
                <Statistic
                  title="股東利潤估算"
                  value={shareholderProfit}
                  formatter={(value) => moneyColumn(Number(value))}
                />
              </Card>
            )}
          </div>
          {period === "monthly" && (
            <div style={{ display: "grid", gap: 16, marginBottom: 16 }}>
              <Card title="付款方式金額加總">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16 }}>
                  {(report.paymentMethodAnalysis ?? []).map((paymentMethod) => (
                    <Card key={paymentMethod.paymentMethod} size="small">
                      <Statistic
                        title={paymentMethodLabels[paymentMethod.paymentMethod] ?? paymentMethod.paymentMethod}
                        value={paymentMethod.revenue}
                        formatter={(value) => moneyColumn(Number(value))}
                      />
                    </Card>
                  ))}
                </div>
              </Card>
              <Card title="品項類型營收占比">
                <Table
                  rowKey="type"
                  dataSource={itemTypeRows}
                  pagination={false}
                  expandable={{
                    rowExpandable: (record) => record.items.length > 0,
                    expandedRowRender: (record) => (
                      <Table
                        rowKey="name"
                        dataSource={record.items}
                        pagination={false}
                        size="small"
                        columns={[
                          {
                            title: "品項",
                            dataIndex: "name",
                            width: itemTypeTableColumns.name,
                            render: (value: string, item: ItemTypeAnalysisRow["items"][number]) => (
                              <>
                                {value}
                                <Typography.Text type="secondary" style={{ marginLeft: 8 }}>
                                  x {item.quantity}
                                </Typography.Text>
                              </>
                            )
                          },
                          { title: "收入", dataIndex: "revenue", width: itemTypeTableColumns.revenue, render: moneyColumn },
                          {
                            title: "類型占比",
                            dataIndex: "typeRevenueRate",
                            width: itemTypeTableColumns.rate,
                            render: percentColumn
                          }
                        ]}
                      />
                    )
                  }}
                  columns={[
                    {
                      title: "類型",
                      dataIndex: "type",
                      width: itemTypeTableColumns.name,
                      render: (value: string) => itemTypeLabels[value] ?? value
                    },
                    { title: "收入", dataIndex: "revenue", width: itemTypeTableColumns.revenue, render: moneyColumn },
                    {
                      title: "營收占比",
                      dataIndex: "revenueRate",
                      width: itemTypeTableColumns.rate,
                      render: (value: number, record: ItemTypeAnalysisRow) => (
                        <div style={{ display: "grid", gap: 2 }}>
                          <Typography.Text>{percentColumn(value)}</Typography.Text>
                          {record.revenueRateChange != null ? (
                            <Typography.Text
                              style={{
                                color: record.revenueRateChange >= 0 ? "#cf1322" : "#389e0d",
                                fontSize: 12
                              }}
                            >
                              較上月 {signedPercentColumn(record.revenueRateChange)}
                            </Typography.Text>
                          ) : (
                            <Typography.Text type="secondary" style={{ fontSize: 12 }}>
                              上月無資料
                            </Typography.Text>
                          )}
                        </div>
                      )
                    }
                  ]}
                />
              </Card>
              <Card title="活動分析">
                <Table
                  rowKey="eventId"
                  dataSource={report.activityAnalysis ?? []}
                  pagination={{ pageSize: 30, pageSizeOptions: [30, 50, 100], showSizeChanger: true }}
                  columns={[
                    { title: "活動名稱", dataIndex: "eventName" },
                    { title: "活動總收入", dataIndex: "revenue", render: moneyColumn },
                    { title: "活動收入佔總營收", dataIndex: "revenueRate", render: percentColumn }
                  ]}
                />
              </Card>
              <Card title="月固定支出" extra={<Typography.Text strong>加總：{moneyColumn(summary.fixedExpenseTotal ?? 0)}</Typography.Text>}>
                <Table
                  rowKey="id"
                  dataSource={report.fixedExpenseAnalysis ?? []}
                  pagination={{ pageSize: 30, pageSizeOptions: [30, 50, 100], showSizeChanger: true }}
                  columns={[
                    {
                      title: "日期",
                      dataIndex: "entryDate",
                      render: (value: string) => new Date(value).toLocaleDateString("zh-TW")
                    },
                    { title: "項目", dataIndex: "purpose" },
                    { title: "對象", dataIndex: "employeeName" },
                    { title: "金額", dataIndex: "amount", render: moneyColumn }
                  ]}
                />
              </Card>
              <Card title="月零用金支出" extra={<Typography.Text strong>加總：{moneyColumn(summary.pettyExpense)}</Typography.Text>}>
                <Table
                  rowKey="id"
                  dataSource={report.pettyCashExpenseAnalysis ?? []}
                  pagination={{ pageSize: 30, pageSizeOptions: [30, 50, 100], showSizeChanger: true }}
                  columns={[
                    {
                      title: "日期",
                      dataIndex: "entryDate",
                      render: (value: string) => new Date(value).toLocaleDateString("zh-TW")
                    },
                    { title: "用途", dataIndex: "purpose" },
                    { title: "代墊者", dataIndex: "employeeName" },
                    { title: "金額", dataIndex: "amount", render: moneyColumn }
                  ]}
                />
              </Card>
              <div>
                <Typography.Title level={4}>
                  員工出帳彙總
                  <Tooltip
                    title={
                      <div>
                        <div>占卜服務：50%</div>
                        <div>儀式服務：總合的 30%</div>
                        <div>風水服務：50%</div>
                        <div>課程服務：一個課程分潤 2,000</div>
                        <div>香油捐贈：0</div>
                        <div>實體商品：30%</div>
                      </div>
                    }
                  >
                    <ExclamationCircleOutlined style={{ color: "#8c8c8c", fontSize: 16, marginLeft: 8 }} />
                  </Tooltip>
                </Typography.Title>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
                  {(report.employeePayoutAnalysis ?? []).map((employee) => {
                    return (
                      <Card
                        key={employee.employeeId}
                        title={`${employee.employeeName}收入`}
                        extra={<Typography.Text type="secondary">{employee.employeeType}</Typography.Text>}
                      >
                        <div style={{ display: "grid", gap: 8 }}>
                          {employee.fixedSalaryIncome > 0 && (
                            <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                              <Typography.Text>薪資</Typography.Text>
                              <Typography.Text>{moneyColumn(employee.fixedSalaryIncome)}</Typography.Text>
                            </div>
                          )}
                          {employee.shiftIncome > 0 && (
                            <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                              <Typography.Text>排班薪資（{employee.shiftDays} 天）</Typography.Text>
                              <Typography.Text>{moneyColumn(employee.shiftIncome)}</Typography.Text>
                            </div>
                          )}
                          <Typography.Text strong style={{ marginTop: 8 }}>
                            分潤
                          </Typography.Text>
                          {employee.commissionItems.length > 0 ? (
                            employee.commissionItems.map((item) => (
                              <div
                                key={item.itemName}
                                style={{ display: "flex", justifyContent: "space-between", gap: 12 }}
                              >
                                <Typography.Text>{item.itemName}</Typography.Text>
                                <Typography.Text>{moneyColumn(item.commission)}</Typography.Text>
                              </div>
                            ))
                          ) : (
                            <Typography.Text type="secondary">無服務分潤</Typography.Text>
                          )}
                          <div
                            style={{
                              borderTop: "1px solid #f0f0f0",
                              display: "flex",
                              justifyContent: "space-between",
                              gap: 12,
                              marginTop: 8,
                              paddingTop: 12
                            }}
                          >
                            <Typography.Text strong>出帳加總</Typography.Text>
                            <Typography.Text strong>{moneyColumn(employee.payoutTotal)}</Typography.Text>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          {period !== "monthly" && (
            <Card title="收入項目分析">
              <Table
                rowKey="name"
                dataSource={report.itemAnalysis}
                columns={[
                  { title: "品項", dataIndex: "name" },
                  { title: "類型", dataIndex: "type", render: (value: string) => itemTypeLabels[value] ?? value },
                  { title: "數量", dataIndex: "quantity" },
                  { title: "收入", dataIndex: "revenue", render: moneyColumn }
                ]}
              />
            </Card>
          )}
        </>
      )}
    </>
  );
}
