"use client";

import { type CSSProperties, useEffect, useMemo, useState } from "react";
import { Alert, Button, Card, DatePicker, Input, Modal, Segmented, Select, Space, Tag, Typography } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import dayjs, { type Dayjs } from "dayjs";
import type { ModuleConfig } from "@/lib/module-config";

type EmployeeTag = {
  id: string;
  name: string;
};

type Employee = {
  id: string;
  name: string;
  role?: string | null;
  active?: boolean;
  tags?: EmployeeTag[];
};

type ShiftRecord = {
  id: string;
  employeeId?: string | null;
  type: "ONSITE" | "CHARITY";
  startsAt: string;
  endsAt: string;
  location?: string | null;
  notes?: string | null;
  employee?: Pick<Employee, "id" | "name"> | null;
};

type DisplayMode = "ALL" | "NOTES" | "EMPLOYEES";
type EmployeeWorkDaySummary = {
  employeeId: string;
  name: string;
  count: number;
  category: "FULL_TIME" | "PART_TIME" | "OTHER";
};
type RangeNoteSegment = {
  note: string;
  startDate: string;
  endDate: string;
  recordIds: string[];
  startColumn: number;
  span: number;
  row: number;
};
type DayNote = {
  note: string;
  recordIds: string[];
};

const weekdayLabels = ["日", "一", "二", "三", "四", "五", "六"];
const rosterEmployeeTags = new Set(["內部員工", "外部員工"]);

function shiftTypeLabel(type: ShiftRecord["type"]) {
  return type === "CHARITY" ? "公益服務" : "現場服務";
}

function employeeCategory(employee?: Employee) {
  if (employee?.role?.includes("兼職")) return "PART_TIME";
  if (employee?.role?.includes("正職")) return "FULL_TIME";
  return "OTHER";
}

export function ShiftsCalendarPage({ config }: { config: ModuleConfig }) {
  const [month, setMonth] = useState(dayjs().format("YYYY-MM"));
  const [records, setRecords] = useState<ShiftRecord[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedEmployeeIds, setSelectedEmployeeIds] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [rangeNotes, setRangeNotes] = useState("");
  const [rangeDates, setRangeDates] = useState<[Dayjs, Dayjs] | null>(null);
  const [rangeModalOpen, setRangeModalOpen] = useState(false);
  const [editingRangeNote, setEditingRangeNote] = useState<RangeNoteSegment | null>(null);
  const [editingRangeNotes, setEditingRangeNotes] = useState("");
  const [editingRangeDates, setEditingRangeDates] = useState<[Dayjs, Dayjs] | null>(null);
  const [displayMode, setDisplayMode] = useState<DisplayMode>("ALL");
  const [error, setError] = useState("");
  const [rangeError, setRangeError] = useState("");
  const [editingRangeError, setEditingRangeError] = useState("");
  const [saving, setSaving] = useState(false);
  const [savingRange, setSavingRange] = useState(false);
  const [savingEditingRange, setSavingEditingRange] = useState(false);
  const [deletingIds, setDeletingIds] = useState<string[]>([]);

  async function load() {
    const [shiftResponse, employeeResponse] = await Promise.all([fetch("/api/shifts"), fetch("/api/employees")]);
    if (shiftResponse.ok) setRecords(await shiftResponse.json());
    if (employeeResponse.ok) setEmployees(await employeeResponse.json());
  }

  useEffect(() => {
    void load();
  }, []);

  const monthDate = dayjs(`${month}-01`);
  const monthDays = useMemo(
    () => Array.from({ length: monthDate.daysInMonth() }, (_, index) => monthDate.date(index + 1)),
    [monthDate]
  );
  const calendarCells = useMemo(() => {
    const leadingEmptyDays = monthDate.day();
    const cellCount = Math.ceil((leadingEmptyDays + monthDays.length) / 7) * 7;
    return Array.from({ length: cellCount }, (_, index) => {
      const dayIndex = index - leadingEmptyDays;
      return dayIndex >= 0 && dayIndex < monthDays.length ? monthDays[dayIndex] : null;
    });
  }, [monthDate, monthDays]);
  const calendarWeeks = useMemo(
    () => Array.from({ length: calendarCells.length / 7 }, (_, index) => calendarCells.slice(index * 7, index * 7 + 7)),
    [calendarCells]
  );

  const eligibleEmployees = useMemo(
    () =>
      employees.filter((employee) => {
        if (employee.active === false) return false;
        const tagNames = employee.tags?.map((tag) => tag.name) ?? [];
        return tagNames.some((tagName) => rosterEmployeeTags.has(tagName));
      }),
    [employees]
  );

  const recordsByDate = useMemo(() => {
    const grouped = new Map<string, ShiftRecord[]>();
    for (const record of records) {
      const key = dayjs(record.startsAt).format("YYYY-MM-DD");
      if (!key.startsWith(month)) continue;
      grouped.set(key, [...(grouped.get(key) ?? []), record]);
    }
    for (const shifts of grouped.values()) {
      shifts.sort((left, right) => String(left.employee?.name ?? "").localeCompare(String(right.employee?.name ?? "")));
    }
    return grouped;
  }, [month, records]);

  const employeeWorkDays = useMemo<EmployeeWorkDaySummary[]>(() => {
    const employeesById = new Map(employees.map((employee) => [employee.id, employee]));
    const grouped = new Map<string, { name: string; days: Set<string>; category: EmployeeWorkDaySummary["category"] }>();
    for (const record of records) {
      if (!record.employeeId) continue;
      const dateKey = dayjs(record.startsAt).format("YYYY-MM-DD");
      if (!dateKey.startsWith(month)) continue;
      const employee = employeesById.get(record.employeeId);
      const employeeName = record.employee?.name ?? employee?.name ?? record.employeeId;
      const current = grouped.get(record.employeeId) ?? {
        name: employeeName,
        days: new Set<string>(),
        category: employeeCategory(employee)
      };
      current.days.add(dateKey);
      grouped.set(record.employeeId, current);
    }
    return Array.from(grouped.entries())
      .map(([employeeId, value]) => ({
        employeeId,
        name: value.name,
        count: value.days.size,
        category: value.category
      }))
      .sort((left, right) => right.count - left.count || left.name.localeCompare(right.name));
  }, [employees, month, records]);

  const workDayGroups = useMemo(
    () => [
      { label: "正職", items: employeeWorkDays.filter((employee) => employee.category === "FULL_TIME") },
      { label: "兼職", items: employeeWorkDays.filter((employee) => employee.category === "PART_TIME") },
      { label: "其他", items: employeeWorkDays.filter((employee) => employee.category === "OTHER") }
    ],
    [employeeWorkDays]
  );

  const rangeNoteData = useMemo(() => {
    const dateIndexByKey = new Map<string, number>();
    calendarCells.forEach((date, index) => {
      if (date) dateIndexByKey.set(date.format("YYYY-MM-DD"), index);
    });

    const datesByNote = new Map<string, Map<string, string[]>>();
    for (const record of records) {
      const note = record.notes?.trim();
      const dateKey = dayjs(record.startsAt).format("YYYY-MM-DD");
      if (record.employeeId || !note || !dateKey.startsWith(month) || !dateIndexByKey.has(dateKey)) continue;
      const noteDates = datesByNote.get(note) ?? new Map<string, string[]>();
      noteDates.set(dateKey, [...(noteDates.get(dateKey) ?? []), record.id]);
      datesByNote.set(note, noteDates);
    }

    const segmentsByWeek = new Map<number, RangeNoteSegment[]>();
    const rangeNoteDateKeys = new Set<string>();

    for (const [note, dateRecords] of datesByNote.entries()) {
      const sortedDates = Array.from(dateRecords.keys()).sort();
      let rangeStart = sortedDates[0];
      let previousDate = sortedDates[0];

      function addRange(startDate?: string, endDate?: string) {
        if (!startDate || !endDate) return;
        const startIndex = dateIndexByKey.get(startDate);
        const endIndex = dateIndexByKey.get(endDate);
        if (startIndex === undefined || endIndex === undefined || endIndex <= startIndex) return;

        const recordIds: string[] = [];
        for (let index = startIndex; index <= endIndex; index += 1) {
          const date = calendarCells[index];
          if (date) {
            const dateKey = date.format("YYYY-MM-DD");
            rangeNoteDateKeys.add(`${dateKey}::${note}`);
            recordIds.push(...(dateRecords.get(dateKey) ?? []));
          }
        }

        const startWeek = Math.floor(startIndex / 7);
        const endWeek = Math.floor(endIndex / 7);
        for (let weekIndex = startWeek; weekIndex <= endWeek; weekIndex += 1) {
          const segmentStartColumn = weekIndex === startWeek ? startIndex % 7 : 0;
          const segmentEndColumn = weekIndex === endWeek ? endIndex % 7 : 6;
          const weekSegments = segmentsByWeek.get(weekIndex) ?? [];
          const usedRows = weekSegments.reduce<boolean[][]>((rows, segment) => {
            rows[segment.row] ??= Array.from({ length: 7 }, () => false);
            for (let column = segment.startColumn; column < segment.startColumn + segment.span; column += 1) {
              rows[segment.row][column] = true;
            }
            return rows;
          }, []);
          let row = 0;
          while (
            usedRows[row]?.some(
              (isUsed, column) =>
                isUsed && column >= segmentStartColumn && column <= segmentEndColumn
            )
          ) {
            row += 1;
          }
          weekSegments.push({
            note,
            startDate,
            endDate,
            recordIds,
            startColumn: segmentStartColumn,
            span: segmentEndColumn - segmentStartColumn + 1,
            row
          });
          segmentsByWeek.set(weekIndex, weekSegments);
        }
      }

      for (const dateKey of sortedDates.slice(1)) {
        if (dayjs(dateKey).diff(dayjs(previousDate), "day") === 1) {
          previousDate = dateKey;
          continue;
        }
        addRange(rangeStart, previousDate);
        rangeStart = dateKey;
        previousDate = dateKey;
      }
      addRange(rangeStart, previousDate);
    }

    return { segmentsByWeek, rangeNoteDateKeys };
  }, [calendarCells, month, records]);

  const selectedDayShifts = selectedDate ? recordsByDate.get(selectedDate) ?? [] : [];
  const availableEmployees = eligibleEmployees.filter(
    (employee) => !selectedDayShifts.some((shift) => shift.employeeId === employee.id)
  );

  function openDate(date: string) {
    setSelectedDate(date);
    setSelectedEmployeeIds([]);
    setNotes("");
    setError("");
  }

  function openRangeNote(segment: RangeNoteSegment) {
    setEditingRangeNote(segment);
    setEditingRangeNotes(segment.note);
    setEditingRangeDates([dayjs(segment.startDate), dayjs(segment.endDate)]);
    setEditingRangeError("");
  }

  function openDayNote(dateKey: string, note: DayNote) {
    setEditingRangeNote({
      note: note.note,
      startDate: dateKey,
      endDate: dateKey,
      recordIds: note.recordIds,
      startColumn: 0,
      span: 1,
      row: 0
    });
    setEditingRangeNotes(note.note);
    setEditingRangeDates([dayjs(dateKey), dayjs(dateKey)]);
    setEditingRangeError("");
  }

  async function createShifts() {
    if (!selectedDate) return;
    const trimmedNotes = notes.trim();
    if (selectedEmployeeIds.length === 0 && !trimmedNotes) {
      setError("請選擇員工或填寫備註。");
      return;
    }
    setSaving(true);
    setError("");
    try {
      const shiftTargets = selectedEmployeeIds.length > 0 ? selectedEmployeeIds : [null];
      for (const employeeId of shiftTargets) {
        const response = await fetch("/api/shifts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...(employeeId ? { employeeId } : {}),
            type: "ONSITE",
            startsAt: `${selectedDate}T09:00:00`,
            endsAt: `${selectedDate}T18:00:00`,
            location: "",
            notes: trimmedNotes
          })
        });
        if (!response.ok) throw new Error("新增排班失敗");
      }
      await load();
      setSelectedDate(null);
    } catch (currentError) {
      setError(currentError instanceof Error ? currentError.message : "新增排班失敗");
    } finally {
      setSaving(false);
    }
  }

  async function createRangeNotes() {
    const [startDate, endDate] = rangeDates ?? [];
    const trimmedNotes = rangeNotes.trim();
    if (!startDate || !endDate) {
      setRangeError("請選擇日期區間。");
      return;
    }
    if (!trimmedNotes) {
      setRangeError("請填寫備註。");
      return;
    }
    setSavingRange(true);
    setRangeError("");
    try {
      const dayCount = endDate.startOf("day").diff(startDate.startOf("day"), "day");
      for (let index = 0; index <= dayCount; index += 1) {
        const dateKey = startDate.add(index, "day").format("YYYY-MM-DD");
        const response = await fetch("/api/shifts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "ONSITE",
            startsAt: `${dateKey}T09:00:00`,
            endsAt: `${dateKey}T18:00:00`,
            location: "",
            notes: trimmedNotes
          })
        });
        if (!response.ok) throw new Error("新增區間備註失敗");
      }
      await load();
      setRangeModalOpen(false);
      setRangeDates(null);
      setRangeNotes("");
    } catch (currentError) {
      setRangeError(currentError instanceof Error ? currentError.message : "新增區間備註失敗");
    } finally {
      setSavingRange(false);
    }
  }

  async function updateRangeNote() {
    if (!editingRangeNote) return;
    const [startDate, endDate] = editingRangeDates ?? [];
    const trimmedNotes = editingRangeNotes.trim();
    if (!startDate || !endDate) {
      setEditingRangeError("請選擇日期區間。");
      return;
    }
    if (!trimmedNotes) {
      setEditingRangeError("請填寫備註。");
      return;
    }

    setSavingEditingRange(true);
    setEditingRangeError("");
    try {
      const dayCount = endDate.startOf("day").diff(startDate.startOf("day"), "day");
      for (const id of editingRangeNote.recordIds) {
        const response = await fetch(`/api/shifts/${id}`, { method: "DELETE" });
        if (!response.ok && response.status !== 409) throw new Error("更新區間備註失敗");
      }
      for (let index = 0; index <= dayCount; index += 1) {
        const dateKey = startDate.add(index, "day").format("YYYY-MM-DD");
        const response = await fetch("/api/shifts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "ONSITE",
            startsAt: `${dateKey}T09:00:00`,
            endsAt: `${dateKey}T18:00:00`,
            location: "",
            notes: trimmedNotes
          })
        });
        if (!response.ok) throw new Error("更新區間備註失敗");
      }
      await load();
      setEditingRangeNote(null);
      setEditingRangeDates(null);
      setEditingRangeNotes("");
    } catch (currentError) {
      setEditingRangeError(currentError instanceof Error ? currentError.message : "更新區間備註失敗");
    } finally {
      setSavingEditingRange(false);
    }
  }

  async function deleteRangeNote() {
    if (!editingRangeNote) return;

    setSavingEditingRange(true);
    setEditingRangeError("");
    try {
      for (const id of editingRangeNote.recordIds) {
        const response = await fetch(`/api/shifts/${id}`, { method: "DELETE" });
        if (!response.ok && response.status !== 409) throw new Error("移除區間備註失敗");
      }
      await load();
      setEditingRangeNote(null);
      setEditingRangeDates(null);
      setEditingRangeNotes("");
    } catch (currentError) {
      setEditingRangeError(currentError instanceof Error ? currentError.message : "移除區間備註失敗");
    } finally {
      setSavingEditingRange(false);
    }
  }

  async function deleteShift(id: string) {
    setError("");
    setDeletingIds((current) => [...current, id]);
    setRecords((current) => current.filter((record) => record.id !== id));
    try {
      const response = await fetch(`/api/shifts/${id}`, { method: "DELETE" });
      if (!response.ok && response.status !== 409) {
        setError("刪除排班失敗");
      }
      await load();
    } finally {
      setDeletingIds((current) => current.filter((currentId) => currentId !== id));
    }
  }

  return (
    <>
      <div className="page-heading">
        <Typography.Title level={2}>{config.title}</Typography.Title>
        <Typography.Text type="secondary">{config.description}</Typography.Text>
      </div>

      <Card className="shift-calendar-card">
        <div className="shift-calendar-toolbar">
          <Space size={10} wrap>
            <Typography.Text strong>月份</Typography.Text>
            <DatePicker
              allowClear={false}
              picker="month"
              value={monthDate}
              onChange={(value) => setMonth((value ?? dayjs()).format("YYYY-MM"))}
            />
            <Button
              onClick={() => {
                setRangeModalOpen(true);
                setRangeError("");
              }}
            >
              區間備註
            </Button>
          </Space>
          <Segmented
            value={displayMode}
            options={[
              { label: "備註＋人員", value: "ALL" },
              { label: "只顯示備註", value: "NOTES" },
              { label: "只顯示人員", value: "EMPLOYEES" }
            ]}
            onChange={(value) => setDisplayMode(value as DisplayMode)}
          />
        </div>
        <div className="shift-workday-summary">
          <Typography.Text strong>員工上班天數</Typography.Text>
          {employeeWorkDays.length > 0 ? (
            <div className="shift-workday-groups">
              {workDayGroups
                .filter((group) => group.items.length > 0)
                .map((group) => (
                  <div className="shift-workday-group" key={group.label}>
                    <Typography.Text type="secondary">{group.label}</Typography.Text>
                    <div className="shift-workday-list">
                      {group.items.map((employee) => (
                        <span className="shift-workday-chip" key={employee.employeeId}>
                          <span>{employee.name}</span>
                          <strong>{employee.count} 天</strong>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <Typography.Text type="secondary">本月尚無排班</Typography.Text>
          )}
        </div>
        <div className="shift-calendar-grid">
          {weekdayLabels.map((weekday) => (
            <div className="shift-weekday-cell" key={weekday}>
              星期{weekday}
            </div>
          ))}
          {calendarWeeks.map((week, weekIndex) => {
            const rangeSegments = rangeNoteData.segmentsByWeek.get(weekIndex) ?? [];
            const rangeRowCount = rangeSegments.reduce((maxRow, segment) => Math.max(maxRow, segment.row + 1), 0);
            const showNotes = displayMode === "ALL" || displayMode === "NOTES";
            const showEmployees = displayMode === "ALL" || displayMode === "EMPLOYEES";
            return (
              <div
                className="shift-calendar-week"
                key={`week-${weekIndex}`}
                style={{ "--range-note-rows": showNotes ? rangeRowCount : 0 } as CSSProperties}
              >
                {showNotes
                  ? rangeSegments.map((segment) => (
                      <button
                        className="shift-range-note-bar"
                        key={`${segment.note}-${segment.startDate}-${segment.startColumn}`}
                        type="button"
                        title={segment.note}
                        style={
                          {
                            "--range-start": segment.startColumn,
                            "--range-span": segment.span,
                            "--range-row": segment.row
                          } as CSSProperties
                        }
                        onClick={() => openRangeNote(segment)}
                      >
                        {segment.note}
                      </button>
                    ))
                  : null}
                {week.map((date, index) => {
                  if (!date) return <div className="shift-calendar-empty-cell" key={`empty-${weekIndex}-${index}`} />;
                  const dateKey = date.format("YYYY-MM-DD");
                  const dayShifts = recordsByDate.get(dateKey) ?? [];
                  const employeeShifts = dayShifts.filter((shift) => shift.employee || shift.employeeId);
                  const dayNotes = Array.from(
                    dayShifts.reduce((notesByText, shift) => {
                      const note = shift.notes?.trim();
                      if (!note || rangeNoteData.rangeNoteDateKeys.has(`${dateKey}::${note}`)) return notesByText;
                      notesByText.set(note, [...(notesByText.get(note) ?? []), shift.id]);
                      return notesByText;
                    }, new Map<string, string[]>())
                  ).map(([note, recordIds]) => ({ note, recordIds }));
                  return (
                    <div className="shift-calendar-day" key={dateKey}>
                      <span className="shift-calendar-day-header">
                        <span className="shift-calendar-date">{date.date()}</span>
                        <Button
                          aria-label={`新增 ${dateKey} 排班`}
                          className="shift-add-button"
                          icon={<PlusOutlined />}
                          onClick={() => openDate(dateKey)}
                          shape="circle"
                          size="small"
                          type="text"
                        />
                      </span>
                      {showNotes && rangeRowCount > 0 ? <span className="shift-range-note-spacer" /> : null}
                      {showNotes && dayNotes.length > 0 ? (
                        <span className="shift-notes">
                          {dayNotes.map((note) => (
                            <button key={note.note} type="button" onClick={() => openDayNote(dateKey, note)}>
                              {note.note}
                            </button>
                          ))}
                        </span>
                      ) : null}
                      {showEmployees ? (
                        <span className="shift-tags">
                          {employeeShifts.length > 0 ? (
                            employeeShifts.map((shift) => (
                              <Tag key={shift.id} color={shift.type === "CHARITY" ? "green" : "blue"}>
                                {shift.employee?.name ?? shift.employeeId}
                              </Tag>
                            ))
                          ) : null}
                        </span>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </Card>

      <Modal
        title={selectedDate ? `設定 ${selectedDate} 排班` : "設定排班"}
        open={Boolean(selectedDate)}
        okText="新增"
        cancelText="取消"
        confirmLoading={saving}
        onCancel={() => setSelectedDate(null)}
        onOk={createShifts}
      >
        <Space direction="vertical" size={12} style={{ width: "100%" }}>
          {error ? <Alert type="error" showIcon message={error} /> : null}
          {eligibleEmployees.length === 0 ? (
            <Alert type="warning" showIcon message="請先到員工管理設定內部員工或外部員工 TAG。" />
          ) : null}
          {selectedDayShifts.length > 0 ? (
            <div className="shift-existing-list">
              <Typography.Text strong>當日已排班</Typography.Text>
              {selectedDayShifts.map((shift) => (
                <div className="shift-existing-row" key={shift.id}>
                  <span>
                    {shift.employee?.name ?? shift.employeeId ?? "備註"} · {shiftTypeLabel(shift.type)}
                  </span>
                  <Button
                    danger
                    size="small"
                    icon={<DeleteOutlined />}
                    aria-label="刪除"
                    title="刪除"
                    loading={deletingIds.includes(shift.id)}
                    disabled={deletingIds.includes(shift.id)}
                    onClick={() => void deleteShift(shift.id)}
                  />
                </div>
              ))}
            </div>
          ) : null}
          <div>
            <Typography.Text strong>員工</Typography.Text>
            <Select
              mode="multiple"
              placeholder="請選擇"
              style={{ width: "100%", marginTop: 6 }}
              value={selectedEmployeeIds}
              options={availableEmployees.map((employee) => ({
                label: employee.role ? `${employee.name}（${employee.role}）` : employee.name,
                value: employee.id
              }))}
              onChange={setSelectedEmployeeIds}
            />
          </div>
          <div>
            <Typography.Text strong>備註</Typography.Text>
            <Input.TextArea
              autoSize={{ minRows: 2, maxRows: 4 }}
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              placeholder="非必填"
              style={{ marginTop: 6 }}
            />
          </div>
        </Space>
      </Modal>

      <Modal
        title="新增區間備註"
        open={rangeModalOpen}
        okText="新增"
        cancelText="取消"
        confirmLoading={savingRange}
        onCancel={() => setRangeModalOpen(false)}
        onOk={createRangeNotes}
      >
        <Space direction="vertical" size={12} style={{ width: "100%" }}>
          {rangeError ? <Alert type="error" showIcon message={rangeError} /> : null}
          <div>
            <Typography.Text strong>日期區間</Typography.Text>
            <DatePicker.RangePicker
              value={rangeDates}
              onChange={(value) => setRangeDates(value && value[0] && value[1] ? [value[0], value[1]] : null)}
              style={{ width: "100%", marginTop: 6 }}
            />
          </div>
          <div>
            <Typography.Text strong>備註</Typography.Text>
            <Input.TextArea
              autoSize={{ minRows: 2, maxRows: 4 }}
              value={rangeNotes}
              onChange={(event) => setRangeNotes(event.target.value)}
              placeholder="請填寫備註"
              style={{ marginTop: 6 }}
            />
          </div>
        </Space>
      </Modal>

      <Modal
        title="編輯區間備註"
        open={Boolean(editingRangeNote)}
        confirmLoading={savingEditingRange}
        onCancel={() => setEditingRangeNote(null)}
        onOk={updateRangeNote}
        footer={[
          <Button key="delete" danger loading={savingEditingRange} onClick={() => void deleteRangeNote()}>
            移除
          </Button>,
          <Button key="cancel" onClick={() => setEditingRangeNote(null)}>
            取消
          </Button>,
          <Button key="save" type="primary" loading={savingEditingRange} onClick={updateRangeNote}>
            儲存
          </Button>
        ]}
      >
        <Space direction="vertical" size={12} style={{ width: "100%" }}>
          {editingRangeError ? <Alert type="error" showIcon message={editingRangeError} /> : null}
          <div>
            <Typography.Text strong>日期區間</Typography.Text>
            <DatePicker.RangePicker
              value={editingRangeDates}
              onChange={(value) =>
                setEditingRangeDates(value && value[0] && value[1] ? [value[0], value[1]] : null)
              }
              style={{ width: "100%", marginTop: 6 }}
            />
          </div>
          <div>
            <Typography.Text strong>備註</Typography.Text>
            <Input.TextArea
              autoSize={{ minRows: 2, maxRows: 4 }}
              value={editingRangeNotes}
              onChange={(event) => setEditingRangeNotes(event.target.value)}
              placeholder="請填寫備註"
              style={{ marginTop: 6 }}
            />
          </div>
        </Space>
      </Modal>
    </>
  );
}
