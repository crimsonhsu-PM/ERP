"use client";

import { useEffect, useState } from "react";
import { Button, Card, Collapse, DatePicker, Empty, InputNumber, Modal, Popover, Progress, Statistic, Typography } from "antd";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";

const itemTypeLabels: Record<string, string> = {
  DIVINATION_SERVICE: "占卜服務",
  RITUAL_SERVICE: "儀式服務",
  FENG_SHUI_SERVICE: "風水服務",
  COURSE_SERVICE: "課程服務",
  OIL_DONATION: "香油捐贈",
  PHYSICAL_PRODUCT: "實體商品",
  LIGHTING_SERVICE: "點燈服務"
};

type ItemRevenueShare = {
  itemName: string;
  itemType: string;
  quantity: number;
  revenue: number;
  share: number;
};

type TypeRevenueShare = {
  itemType: string;
  quantity: number;
  revenue: number;
  share: number;
  items: ItemRevenueShare[];
};

type DailyRevenueBar = {
  date: string;
  day: number;
  revenue: number;
};

const chartColors = ["#0b7f95", "#2fa6c6", "#72c6dd", "#f0a35e", "#d97745", "#7aa874", "#8b8ed8", "#b07ac4", "#e08aa4", "#7d95a6"];
const defaultDailyRevenueGoal = 20000;
const defaultMonthlyRevenueGoal = 600000;
const legacyMonthlyRevenueGoal = 850000;

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

function dailyGoalKey(date: Dayjs) {
  return `dashboard.dailyRevenueGoal.${date.format("YYYY-MM-DD")}`;
}

function readStoredGoal(key: string) {
  const savedGoal = Number(window.localStorage.getItem(key) ?? 0);
  return Number.isFinite(savedGoal) && savedGoal > 0 ? savedGoal : 0;
}

function readStoredGoalOrDefault(key: string, defaultGoal: number) {
  const savedGoal = readStoredGoal(key);
  return savedGoal > 0 ? savedGoal : defaultGoal;
}

function readMonthlyGoal() {
  const savedGoal = readStoredGoal("dashboard.monthlyRevenueGoal");
  if (savedGoal === legacyMonthlyRevenueGoal) return defaultMonthlyRevenueGoal;
  return savedGoal > 0 ? savedGoal : defaultMonthlyRevenueGoal;
}

export function DashboardClient({
  todayRevenue,
  monthRevenue,
  dailyRevenueBars,
  itemRevenueShares
}: {
  todayRevenue: number;
  monthRevenue: number;
  dailyRevenueBars: DailyRevenueBar[];
  itemRevenueShares: ItemRevenueShare[];
}) {
  const typeRevenueShares = Array.from(
    itemRevenueShares.reduce((typeMap, item) => {
      const current = typeMap.get(item.itemType) ?? {
        itemType: item.itemType,
        quantity: 0,
        revenue: 0,
        share: 0,
        items: []
      };
      current.quantity += item.quantity;
      current.revenue += item.revenue;
      current.share += item.share;
      current.items.push(item);
      typeMap.set(item.itemType, current);
      return typeMap;
    }, new Map<string, TypeRevenueShare>()).values()
  )
    .map((itemType) => ({
      ...itemType,
      items: itemType.items.sort((left, right) => right.revenue - left.revenue)
    }))
    .sort((left, right) => right.revenue - left.revenue);
  const chartItems = typeRevenueShares.slice(0, 10);
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [dailyDate, setDailyDate] = useState(dayjs());
  const [dailyRevenue, setDailyRevenue] = useState(todayRevenue);
  const [dailyRevenueLoading, setDailyRevenueLoading] = useState(false);
  const [dailyGoal, setDailyGoal] = useState(0);
  const [draftDailyGoal, setDraftDailyGoal] = useState(0);
  const [dailyGoalModalOpen, setDailyGoalModalOpen] = useState(false);
  const [monthlyGoal, setMonthlyGoal] = useState(0);
  const [draftMonthlyGoal, setDraftMonthlyGoal] = useState(0);
  const [goalModalOpen, setGoalModalOpen] = useState(false);
  const [selectedRevenueDay, setSelectedRevenueDay] = useState<DailyRevenueBar | null>(null);
  const activePieItem = chartItems[hoveredIndex] ?? chartItems[0];
  const selectedDay = selectedRevenueDay ?? dailyRevenueBars.find((item) => item.date === dailyDate.format("YYYY-MM-DD")) ?? dailyRevenueBars[0];
  const dailyGoalAchievement = dailyGoal > 0 ? (dailyRevenue / dailyGoal) * 100 : 0;
  const goalAchievement = monthlyGoal > 0 ? (monthRevenue / monthlyGoal) * 100 : 0;
  const maxDailyRevenue = Math.max(...dailyRevenueBars.map((item) => item.revenue), 1);
  const circumference = 2 * Math.PI * 44;
  let pieOffset = 0;

  useEffect(() => {
    const savedDailyGoal = readStoredGoalOrDefault(dailyGoalKey(dayjs()), defaultDailyRevenueGoal);
    setDailyGoal(savedDailyGoal);
    setDraftDailyGoal(savedDailyGoal);

    const savedGoal = readMonthlyGoal();
    setMonthlyGoal(savedGoal);
    setDraftMonthlyGoal(savedGoal);
  }, []);

  function saveMonthlyGoal() {
    const nextGoal = Math.max(0, Number(draftMonthlyGoal ?? 0));
    setMonthlyGoal(nextGoal);
    if (nextGoal > 0) {
      window.localStorage.setItem("dashboard.monthlyRevenueGoal", String(nextGoal));
    } else {
      window.localStorage.removeItem("dashboard.monthlyRevenueGoal");
    }
    setGoalModalOpen(false);
  }

  function saveDailyGoal() {
    const nextGoal = Math.max(0, Number(draftDailyGoal ?? 0));
    const storageKey = dailyGoalKey(dailyDate);
    setDailyGoal(nextGoal);
    if (nextGoal > 0) {
      window.localStorage.setItem(storageKey, String(nextGoal));
    } else {
      window.localStorage.removeItem(storageKey);
    }
    setDailyGoalModalOpen(false);
  }

  async function loadDailyRevenue(date: Dayjs) {
    setDailyDate(date);
    const nextDailyGoal = readStoredGoalOrDefault(dailyGoalKey(date), defaultDailyRevenueGoal);
    setDailyGoal(nextDailyGoal);
    setDraftDailyGoal(nextDailyGoal);
    setDailyRevenueLoading(true);
    try {
      const response = await fetch(`/api/reports/daily?date=${date.format("YYYY-MM-DD")}`);
      if (!response.ok) return;
      const payload = await response.json();
      setDailyRevenue(Number(payload.summary?.revenue ?? 0));
    } finally {
      setDailyRevenueLoading(false);
    }
  }

  return (
    <>
      <div className="page-heading">
        <Typography.Title level={2}>營運總覽</Typography.Title>
        <Typography.Text type="secondary">服務業為主的 ERP/POS MVP 工作台。</Typography.Text>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 16 }}>
        <Card>
          <div className="dashboard-daily-card">
            <div className="dashboard-daily-header">
              <Statistic
                title="今日營收"
                value={dailyRevenue}
                formatter={(value) => formatMoney(value as string | number)}
                styles={{ content: { opacity: dailyRevenueLoading ? 0.45 : 1 } }}
              />
              <DatePicker
                allowClear={false}
                size="small"
                value={dailyDate}
                onChange={(date) => {
                  if (date) void loadDailyRevenue(date);
                }}
              />
            </div>
            <div className="dashboard-goal-progress">
              <div className="dashboard-goal-line">
                <Typography.Text type="secondary">
                  目標：{dailyGoal > 0 ? dailyGoal.toLocaleString() : "未設定"}
                </Typography.Text>
                <Button
                  size="small"
                  onClick={() => {
                    setDraftDailyGoal(dailyGoal);
                    setDailyGoalModalOpen(true);
                  }}
                >
                  設定目標
                </Button>
              </div>
              <Progress
                percent={dailyGoal > 0 ? Number(Math.min(dailyGoalAchievement, 100).toFixed(1)) : 0}
                size="small"
                format={() => (dailyGoal > 0 ? `${dailyGoalAchievement.toFixed(1)}%` : "0%")}
              />
            </div>
          </div>
        </Card>
        <Card>
          <div className="dashboard-goal-card">
            <div className="dashboard-goal-header">
              <Statistic title="本月營收累積" value={monthRevenue} formatter={(value) => formatMoney(value as string | number)} />
            </div>
            <div className="dashboard-goal-progress">
              <div className="dashboard-goal-line">
                <Typography.Text type="secondary">
                  目標：{monthlyGoal > 0 ? monthlyGoal.toLocaleString() : "未設定"}
                </Typography.Text>
                <Button
                  size="small"
                  onClick={() => {
                    setDraftMonthlyGoal(monthlyGoal);
                    setGoalModalOpen(true);
                  }}
                >
                  設定目標
                </Button>
              </div>
              <Progress
                percent={monthlyGoal > 0 ? Number(Math.min(goalAchievement, 100).toFixed(1)) : 0}
                size="small"
                format={() => (monthlyGoal > 0 ? `${goalAchievement.toFixed(1)}%` : "0%")}
              />
            </div>
          </div>
        </Card>
      </div>

      <Modal
        title={`${dailyDate.format("YYYY-MM-DD")} 營收目標`}
        open={dailyGoalModalOpen}
        okText="儲存"
        cancelText="取消"
        onOk={saveDailyGoal}
        onCancel={() => setDailyGoalModalOpen(false)}
      >
        <InputNumber
          min={0}
          style={{ width: "100%" }}
          formatter={formatInputMoney}
          parser={parseInputMoney}
          value={draftDailyGoal}
          onChange={(value) => setDraftDailyGoal(Number(value ?? 0))}
        />
      </Modal>

      <Modal
        title="設定本月營收目標"
        open={goalModalOpen}
        okText="儲存"
        cancelText="取消"
        onOk={saveMonthlyGoal}
        onCancel={() => setGoalModalOpen(false)}
      >
        <InputNumber
          min={0}
          style={{ width: "100%" }}
          formatter={formatInputMoney}
          parser={parseInputMoney}
          value={draftMonthlyGoal}
          onChange={(value) => setDraftMonthlyGoal(Number(value ?? 0))}
        />
      </Modal>

      <Card title="每日營收" style={{ marginBottom: 16 }}>
        <div className="daily-revenue-chart" role="img" aria-label="本月每日營收長條圖">
          {dailyRevenueBars.map((item) => (
            <Popover
              content={
                <div className="daily-revenue-popover">
                  <Statistic
                    title={`${item.date} 營收`}
                    value={item.revenue}
                    formatter={(value) => formatMoney(value as string | number)}
                  />
                  <div className="dashboard-goal-progress">
                    <div className="dashboard-goal-line">
                      <Typography.Text type="secondary">
                        目標：{dailyGoal > 0 ? dailyGoal.toLocaleString() : "未設定"}
                      </Typography.Text>
                      <Typography.Text type="secondary">
                        完成度 {dailyGoal > 0 ? `${((item.revenue / dailyGoal) * 100).toFixed(1)}%` : "0%"}
                      </Typography.Text>
                    </div>
                    <Progress
                      percent={dailyGoal > 0 ? Number(Math.min((item.revenue / dailyGoal) * 100, 100).toFixed(1)) : 0}
                      size="small"
                      format={() => (dailyGoal > 0 ? `${((item.revenue / dailyGoal) * 100).toFixed(1)}%` : "0%")}
                    />
                  </div>
                </div>
              }
              key={item.date}
              open={selectedRevenueDay?.date === item.date}
              trigger="click"
              onOpenChange={(open) => setSelectedRevenueDay(open ? item : null)}
            >
              <button
                className={`daily-revenue-bar-cell${selectedDay?.date === item.date ? " daily-revenue-bar-cell-active" : ""}`}
                title={`${item.date}：${item.revenue.toLocaleString()}`}
                type="button"
              >
                <div className="daily-revenue-bar-wrap">
                  <div
                    className="daily-revenue-bar"
                    style={{ height: `${Math.max((item.revenue / maxDailyRevenue) * 100, item.revenue > 0 ? 4 : 0)}%` }}
                  />
                </div>
                <Typography.Text type="secondary" className="daily-revenue-day">
                  {item.day}
                </Typography.Text>
              </button>
            </Popover>
          ))}
        </div>
      </Card>

      <Card title="出售類型營收占比">
        {chartItems.length === 0 ? (
          <Empty description="尚無本月銷售資料" />
        ) : (
          <div className="revenue-share-layout">
            <div className="revenue-share-pie-panel">
              <div className="revenue-share-pie-wrap">
                <svg className="revenue-share-pie" viewBox="0 0 120 120" role="img" aria-label="出售類型營收占比圓餅圖">
                  <circle className="revenue-share-pie-bg" cx="60" cy="60" r="44" />
                  {chartItems.map((item, index) => {
                    const segmentLength = Math.max((item.share / 100) * circumference, 0.4);
                    const segment = (
                      <circle
                        className="revenue-share-pie-segment"
                        cx="60"
                        cy="60"
                        r="44"
                        key={item.itemType}
                        stroke={chartColors[index % chartColors.length]}
                        strokeDasharray={`${segmentLength} ${circumference - segmentLength}`}
                        strokeDashoffset={-pieOffset}
                        onMouseEnter={() => setHoveredIndex(index)}
                      >
                        <title>{`${itemTypeLabels[item.itemType] ?? item.itemType} ${item.share.toFixed(1)}%`}</title>
                      </circle>
                    );
                    pieOffset += segmentLength;
                    return segment;
                  })}
                </svg>
                <div className="revenue-share-pie-center">
                  <Typography.Text strong ellipsis>
                    {activePieItem ? itemTypeLabels[activePieItem.itemType] ?? activePieItem.itemType : ""}
                  </Typography.Text>
                  <Typography.Title level={3} style={{ margin: 0 }}>
                    {activePieItem ? activePieItem.share.toFixed(1) : "0.0"}%
                  </Typography.Title>
                </div>
              </div>
              <Typography.Text type="secondary">
                滑鼠移到區塊可查看類型與占比
              </Typography.Text>
            </div>
            <div className="revenue-share-chart">
              <Collapse
                className="revenue-share-collapse"
                ghost
                items={chartItems.map((item, index) => {
                  const color = chartColors[index % chartColors.length];
                  return {
                    key: item.itemType,
                    label: (
                      <div className="revenue-share-row" onMouseEnter={() => setHoveredIndex(index)}>
                        <div className="revenue-share-rank" style={{ background: color }}>
                          {index + 1}
                        </div>
                        <div className="revenue-share-meta">
                          <Typography.Text strong>{itemTypeLabels[item.itemType] ?? item.itemType}</Typography.Text>
                          <Typography.Text type="secondary">{item.quantity} 件</Typography.Text>
                        </div>
                        <div className="revenue-share-track">
                          <div
                            className="revenue-share-bar"
                            style={{
                              width: `${Math.max(item.share, 1)}%`,
                              background: color
                            }}
                          />
                        </div>
                        <div className="revenue-share-value">
                          <Typography.Text strong>{item.revenue.toLocaleString()}</Typography.Text>
                          <Typography.Text type="secondary">{item.share.toFixed(1)}%</Typography.Text>
                        </div>
                      </div>
                    ),
                    children: (
                      <div className="revenue-share-item-list">
                        {item.items.map((revenueItem) => (
                          <div className="revenue-share-row revenue-share-child-row" key={revenueItem.itemName}>
                            <div />
                            <div className="revenue-share-meta">
                              <Typography.Text>{revenueItem.itemName}</Typography.Text>
                              <Typography.Text type="secondary">{revenueItem.quantity} 件</Typography.Text>
                            </div>
                            <div className="revenue-share-track">
                              <div
                                className="revenue-share-bar"
                                style={{
                                  width: `${Math.max(revenueItem.share, 1)}%`,
                                  background: color
                                }}
                              />
                            </div>
                            <div className="revenue-share-value">
                              <Typography.Text>{revenueItem.revenue.toLocaleString()}</Typography.Text>
                              <Typography.Text type="secondary">{revenueItem.share.toFixed(1)}%</Typography.Text>
                            </div>
                          </div>
                        ))}
                      </div>
                    )
                  };
                })}
              />
            </div>
          </div>
        )}
      </Card>
    </>
  );
}
