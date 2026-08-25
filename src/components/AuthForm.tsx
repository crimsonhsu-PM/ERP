"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, Suspense, useEffect, useState } from "react";
import { Alert, Button, Card, Form, Input, Space, Typography } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";

function AuthFormInner({ mode }: { mode: "login" | "register" }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({ email: "", password: "", name: "" });

  useEffect(() => {
    setValues({
      email: searchParams.get("email") ?? "",
      password: searchParams.get("password") ?? "",
      name: searchParams.get("name") ?? ""
    });
  }, [searchParams]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    const response = await fetch(`/api/auth/${mode}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    setLoading(false);
    if (!response.ok) {
      setError(data.error || "操作失敗，請稍後再試。");
      return;
    }
    router.push("/dashboard");
    router.refresh();
  }

  return (
    <div className="auth-page">
      <Card style={{ width: "min(460px, 100%)" }}>
        <form onSubmit={submit}>
          <Space direction="vertical" size={18} style={{ width: "100%" }}>
            <div>
              <Typography.Title level={2} style={{ margin: 0 }}>
                {mode === "login" ? "登入 ERP" : "建立帳號"}
              </Typography.Title>
              <Typography.Text type="secondary">
                {mode === "login" ? "登入後即可進入後台。" : "第一個帳號會直接進入本機 MVP。"}
              </Typography.Text>
            </div>
            <Form layout="vertical" component={false}>
          {mode === "register" && (
            <Form.Item label="姓名" required>
              <Input
                prefix={<UserOutlined />}
                id="name"
                name="name"
                required
                value={values.name}
                onChange={(event) => setValues({ ...values, name: event.target.value })}
              />
            </Form.Item>
          )}
          <Form.Item label="Email" required>
            <Input
              prefix={<MailOutlined />}
              id="email"
              name="email"
              type="email"
              required
              value={values.email}
              onChange={(event) => setValues({ ...values, email: event.target.value })}
            />
          </Form.Item>
          <Form.Item label="密碼" required>
            <Input.Password
              prefix={<LockOutlined />}
              id="password"
              name="password"
              required
              minLength={6}
              value={values.password}
              onChange={(event) => setValues({ ...values, password: event.target.value })}
            />
          </Form.Item>
            </Form>
        {error && <Alert type="error" message={error} showIcon />}
        <Space>
          <Button type="primary" htmlType="submit" loading={loading}>
            {loading ? "處理中..." : mode === "login" ? "登入" : "建立帳號"}
          </Button>
          {mode === "register" && (
            <Link href="/login">
              <Button>已有帳號</Button>
            </Link>
          )}
        </Space>
          </Space>
        </form>
      </Card>
    </div>
  );
}

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  return (
    <Suspense fallback={null}>
      <AuthFormInner mode={mode} />
    </Suspense>
  );
}
