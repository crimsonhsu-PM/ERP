"use client";

import { useEffect, useRef, useState } from "react";
import { Form, Input } from "antd";
import { normalizeCustomerPhone } from "@/lib/customer-phone";

export function RegistrationCustomerFields({ phone, name, onChange }: {
  phone: string;
  name: string;
  onChange: (patch: { phone?: string; attendeeName?: string }) => void;
}) {
  const [lookupPhone, setLookupPhone] = useState<string | null>(null);
  const [hint, setHint] = useState("");
  const nameVersion = useRef(0);
  const requestVersion = useRef(0);
  const changeRef = useRef(onChange);
  changeRef.current = onChange;

  useEffect(() => {
    // Opening an edit preserves that registration's historical name.
    if (!lookupPhone || normalizeCustomerPhone(phone) !== lookupPhone) {
      setHint("");
      return;
    }
    const controller = new AbortController();
    const version = requestVersion.current;
    const initialNameVersion = nameVersion.current;
    const timer = setTimeout(async () => {
      setHint("正在查詢客戶…");
      try {
        const response = await fetch(`/api/event-registrations/customer-lookup?phone=${encodeURIComponent(lookupPhone)}`, {
          signal: controller.signal, cache: "no-store"
        });
        if (!response.ok) throw new Error("lookup failed");
        const result: { found: boolean; name: string } = await response.json();
        if (controller.signal.aborted || version !== requestVersion.current) return;
        if (initialNameVersion === nameVersion.current) changeRef.current({ attendeeName: result.name });
        setHint(result.found ? "已找到客戶，姓名可修改。" : "新客戶，儲存報名時建立客戶資料。");
      } catch {
        if (!controller.signal.aborted && version === requestVersion.current) {
          setHint("無法查詢姓名，請重新輸入手機號碼再試。");
        }
      }
    }, 350);
    return () => { clearTimeout(timer); controller.abort(); };
  }, [lookupPhone, phone]);

  return <>
    <Form.Item label="手機號碼（必填）" required extra={hint || undefined}>
      <Input aria-label="手機號碼" aria-required="true" type="tel" autoComplete="tel" required value={phone}
        placeholder="例如 0912345678"
        onChange={(event) => {
          const next = event.target.value;
          const normalized = normalizeCustomerPhone(next);
          requestVersion.current += 1;
          nameVersion.current += 1;
          setHint("");
          setLookupPhone(normalized);
          changeRef.current({ phone: next, ...(normalized !== normalizeCustomerPhone(phone) ? { attendeeName: "" } : {}) });
        }} />
    </Form.Item>
    <Form.Item label="姓名">
      <Input aria-label="姓名" autoComplete="name" value={name} placeholder="選填"
        onChange={(event) => {
          nameVersion.current += 1;
          changeRef.current({ attendeeName: event.target.value });
        }} />
    </Form.Item>
  </>;
}
