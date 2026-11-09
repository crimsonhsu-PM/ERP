"use client";

import {
  AppstoreOutlined,
  BarChartOutlined,
  CalendarOutlined,
  DatabaseOutlined,
  FileTextOutlined,
  FireOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoonOutlined,
  SettingOutlined,
  ShopOutlined,
  SunOutlined,
  TeamOutlined,
  UserOutlined,
  WalletOutlined
} from "@ant-design/icons";
import { Button, Layout, Menu, Space, Typography } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { pagePermissions } from "@/lib/permissions";
import { useAppTheme } from "@/components/AppThemeProvider";

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
  const { mode, toggleMode } = useAppTheme();
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
  const selectedKey = pathname === "/" ? "/dashboard" : pathname;
  const selectedGroup = allowedGroups.find((group) => group.links.some((link) => link.href === selectedKey))?.label;
  const [collapsed, setCollapsed] = useState(false);
  const [sidebarReady, setSidebarReady] = useState(false);
  const [openKeys, setOpenKeys] = useState<string[]>(() => ["營收", "管理", ...(selectedGroup ? [selectedGroup] : [])]);

  useEffect(() => {
    if (window.localStorage.getItem("unv-erp-sidebar-collapsed") === "true") {
      setCollapsed(true);
      setOpenKeys([]);
    }
    setSidebarReady(true);
  }, []);

  useEffect(() => {
    if (sidebarReady && selectedGroup && !collapsed) {
      setOpenKeys((current) => current.includes(selectedGroup) ? current : [...current, selectedGroup]);
    }
  }, [sidebarReady, selectedGroup, collapsed]);

  function toggleSidebar() {
    const nextCollapsed = !collapsed;
    setCollapsed(nextCollapsed);
    setOpenKeys(nextCollapsed ? [] : ["營收", "管理", ...(selectedGroup ? [selectedGroup] : [])]);
    window.localStorage.setItem("unv-erp-sidebar-collapsed", String(nextCollapsed));
  }

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
  const primaryLabels = ["營收", "管理"];
  const secondaryLabels = allowedGroups.map((group) => group.label).filter((label) => !primaryLabels.includes(label));
  const primaryMenuItems = menuItems.filter((item) => primaryLabels.includes(item.key));
  const secondaryMenuItems = menuItems.filter((item) => secondaryLabels.includes(item.key));

  function handleOpenChange(keys: string[], sectionLabels: string[]) {
    setOpenKeys((current) => [...current.filter((key) => !sectionLabels.includes(key)), ...keys]);
  }

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Sider
        className="erp-sidebar"
        width={245}
        collapsedWidth={66}
        collapsed={collapsed}
        collapsible
        trigger={null}
        breakpoint="lg"
        onBreakpoint={(broken) => {
          if (broken) {
            setCollapsed(true);
            setOpenKeys([]);
          }
        }}
      >
        <div className="erp-sidebar-brand">
          <span className="erp-brand-mark"><ShopOutlined /></span>
          {!collapsed && <span className="erp-brand-copy"><strong>門市管理</strong><small>ERP 工作台</small></span>}
          <Button
            className="erp-sidebar-toggle"
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleSidebar}
            aria-label={collapsed ? "展開選單" : "收合選單"}
            title={collapsed ? "展開選單" : "收合選單"}
          />
        </div>
        <div className="erp-sidebar-navigation">
          {!collapsed && <div className="erp-sidebar-section">主要功能</div>}
          <Menu
            className="erp-sidebar-menu"
            theme="dark"
            mode="inline"
            inlineCollapsed={collapsed}
            selectedKeys={[selectedKey]}
            openKeys={openKeys.filter((key) => primaryLabels.includes(key))}
            onOpenChange={(keys) => handleOpenChange(keys, primaryLabels)}
            items={primaryMenuItems}
            onClick={(event) => router.push(event.key)}
          />
          {!collapsed && secondaryMenuItems.length > 0 && <div className="erp-sidebar-section erp-sidebar-section-secondary">其他功能</div>}
          <Menu
            className="erp-sidebar-menu"
            theme="dark"
            mode="inline"
            inlineCollapsed={collapsed}
            selectedKeys={[selectedKey]}
            openKeys={openKeys.filter((key) => secondaryLabels.includes(key))}
            onOpenChange={(keys) => handleOpenChange(keys, secondaryLabels)}
            items={secondaryMenuItems}
            onClick={(event) => router.push(event.key)}
          />
        </div>
        <div className="erp-sidebar-profile" title={user.name || user.email}>
          <span className="erp-profile-icon"><UserOutlined /></span>
          {!collapsed && <span className="erp-profile-copy"><strong>{user.name || user.email}</strong><small>ERP 工作台</small></span>}
        </div>
      </Layout.Sider>
      <Layout>
        <Layout.Header className="erp-header">
          <Space size={12}>
            <Typography.Text className="erp-header-user">
              {user.email}
            </Typography.Text>
            <Button
              className="erp-theme-toggle"
              icon={mode === "light" ? <MoonOutlined /> : <SunOutlined />}
              onClick={toggleMode}
              aria-label={mode === "light" ? "切換為深色模式" : "切換為藍白模式"}
            >
              {mode === "light" ? "深色" : "藍白"}
            </Button>
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
