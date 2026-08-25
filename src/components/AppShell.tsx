"use client";

import {
  AppstoreOutlined,
  BarChartOutlined,
  CalendarOutlined,
  DatabaseOutlined,
  FileTextOutlined,
  FireOutlined,
  LogoutOutlined,
  SettingOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  WalletOutlined
} from "@ant-design/icons";
import { Button, Layout, Menu, Space, Typography } from "antd";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { pagePermissions } from "@/lib/permissions";

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
      { href: "/lighting", label: "點燈紀錄", icon: <FireOutlined /> },
      { href: "/sops", label: "SOP" }
    ]
  },
  {
    label: "系統",
    icon: <SettingOutlined />,
    links: [
      { href: "/permissions", label: "權限設定", icon: <SettingOutlined /> }
    ]
  }
];

export function AppShell({
  children,
  user,
  userPermissions
}: {
  children: React.ReactNode;
  user: { name: string | null; email: string };
  userPermissions: string[];
}) {
  const pathname = usePathname();
  const router = useRouter();
  const hrefPermissionMap = new Map<string, string>(pagePermissions.map((permission) => [permission.href, permission.key]));
  const allowedGroups = groups
    .map((group) => ({
      ...group,
      links: group.links.filter((link) => {
        const permissionKey = hrefPermissionMap.get(link.href);
        return !permissionKey || userPermissions.includes(permissionKey);
      })
    }))
    .filter((group) => group.links.length > 0);

  const menuItems = allowedGroups.map((group) => ({
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
        ) : link.href.includes("permission") ? (
          <SettingOutlined />
        ) : (
          <FileTextOutlined />
        )),
      label: link.label
    }))
  }));

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Sider width={260} breakpoint="lg" collapsedWidth={0}>
        <div className="erp-logo">UNV.PLAN ERP</div>
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[pathname]}
          defaultOpenKeys={allowedGroups.map((group) => group.label)}
          items={menuItems}
          onClick={(event) => router.push(event.key)}
        />
      </Layout.Sider>
      <Layout>
        <Layout.Header className="erp-header">
          <Space size={12}>
            <Typography.Text className="erp-header-user">
              {user.email}
            </Typography.Text>
            <Button icon={<LogoutOutlined />} onClick={logout}>
              登出
            </Button>
          </Space>
        </Layout.Header>
        <Layout.Content className="erp-content">{children}</Layout.Content>
      </Layout>
    </Layout>
  );
}
