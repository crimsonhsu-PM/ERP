"use client";

import {
  AppstoreOutlined,
  BarChartOutlined,
  CalendarOutlined,
  DatabaseOutlined,
  FileTextOutlined,
  LogoutOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  WalletOutlined
} from "@ant-design/icons";
import { Button, Layout, Menu, Typography } from "antd";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";

type NavGroup = {
  label: string;
  icon: ReactNode;
  links: { href: string; label: string; icon?: ReactNode }[];
};

const groups: NavGroup[] = [
  {
    label: "營收",
    icon: <AppstoreOutlined />,
    links: [
      { href: "/sales", label: "營收登記", icon: <WalletOutlined /> },
      { href: "/dashboard", label: "數據總覽", icon: <BarChartOutlined /> }
    ]
  },
  {
    label: "管理",
    icon: <ShopOutlined />,
    links: [
      { href: "/items", label: "進銷項目", icon: <ShopOutlined /> },
      { href: "/employees", label: "人員管理" },
      { href: "/shifts", label: "排班紀錄" }
    ]
  },
  {
    label: "報表",
    icon: <BarChartOutlined />,
    links: [
      { href: "/reports/monthly", label: "月報表" },
      { href: "/reports/yearly", label: "年報表" }
    ]
  },
  {
    label: "資產",
    icon: <DatabaseOutlined />,
    links: [
      { href: "/inventory", label: "庫存紀錄" },
      { href: "/petty-cash", label: "零用支出" },
      { href: "/fixed-expenses", label: "固定支出" }
    ]
  },
  {
    label: "活動",
    icon: <CalendarOutlined />,
    links: [
      { href: "/events", label: "活動管理" }
    ]
  },
  {
    label: "服務",
    icon: <FileTextOutlined />,
    links: [
      { href: "/sops", label: "SOP" },
      { href: "/customer-service-records", label: "客服紀錄" }
    ]
  }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  const menuItems = groups.map((group) => ({
    key: group.label,
    icon: group.icon,
    label: group.label,
    children: group.links.map((link) => ({
      key: link.href,
      icon:
        link.icon ??
        (link.href.includes("customer") ? (
          <UserOutlined />
        ) : link.href.includes("shift") || link.href.includes("employee") ? (
          <TeamOutlined />
        ) : link.href.includes("event") ? (
          <CalendarOutlined />
        ) : (
          <FileTextOutlined />
        )),
      label: link.label
    }))
  }));

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Sider width={260} breakpoint="lg" collapsedWidth={0}>
        <div className="erp-logo">UNV.PLAN ERP</div>
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[pathname]}
          defaultOpenKeys={groups.map((group) => group.label)}
          items={menuItems}
          onClick={(event) => router.push(event.key)}
        />
      </Layout.Sider>
      <Layout>
        <Layout.Header className="erp-header">
          <Button icon={<LogoutOutlined />} onClick={logout}>
            登出
          </Button>
        </Layout.Header>
        <Layout.Content className="erp-content">{children}</Layout.Content>
      </Layout>
    </Layout>
  );
}
