"use client";

import { useEffect, useMemo, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Alert, Button, Card, Checkbox, Col, Form, Input, Modal, Row, Select, Space, Switch, Table, Tag, Tree, Typography } from "antd";

type PagePermission = {
  key: string;
  label: string;
  group: string;
};

type RoleRecord = {
  id: string;
  name: string;
  notes: string | null;
  active: boolean;
  pagePermissions: string[];
};

type UserRecord = {
  id: string;
  email: string;
  name: string;
  active: boolean;
  isAdmin: boolean;
  roleId: string | null;
  role: { id: string; name: string } | null;
  pagePermissions: string[];
};

type PermissionsPayload = {
  pagePermissions: PagePermission[];
  currentUser: { id: string; isAdmin: boolean; pagePermissions: string[] } | null;
  roles: RoleRecord[];
  users: UserRecord[];
};

type PermissionTreeNode = {
  title: string;
  key: string;
  children?: PermissionTreeNode[];
};

const emptyRoleForm = { name: "", notes: "", pagePermissions: [] as string[], active: true };
const emptyUserForm = { email: "", password: "", roleId: "", active: true };

function parseJsonResponse(response: Response) {
  return response.json().catch(() => null);
}

function errorMessage(data: unknown, fallback: string) {
  if (data && typeof data === "object" && "error" in data && typeof data.error === "string") return data.error;
  return fallback;
}

export function PermissionsPage() {
  const [pagePermissions, setPagePermissions] = useState<PagePermission[]>([]);
  const [roles, setRoles] = useState<RoleRecord[]>([]);
  const [users, setUsers] = useState<UserRecord[]>([]);
  const [currentUserPermissions, setCurrentUserPermissions] = useState<string[]>([]);
  const [roleForm, setRoleForm] = useState(emptyRoleForm);
  const [userForm, setUserForm] = useState(emptyUserForm);
  const [editingRoleId, setEditingRoleId] = useState<string | null>(null);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [roleModalOpen, setRoleModalOpen] = useState(false);
  const [error, setError] = useState("");

  const permissionTreeData = useMemo<PermissionTreeNode[]>(() => {
    const groups = new Map<string, PermissionTreeNode>();
    for (const permission of pagePermissions) {
      if (!currentUserPermissions.includes(permission.key)) continue;
      const groupKey = `group:${permission.group}`;
      const group = groups.get(permission.group) ?? {
        title: permission.group,
        key: groupKey,
        children: []
      };
      group.children?.push({
        title: permission.label,
        key: permission.key
      });
      groups.set(permission.group, group);
    }
    return [...groups.values()];
  }, [currentUserPermissions, pagePermissions]);

  const expandedPermissionTreeKeys = useMemo(
    () => permissionTreeData.map((node) => node.key),
    [permissionTreeData]
  );

  const selectablePermissionKeys = useMemo(
    () => new Set(pagePermissions.map((permission) => permission.key)),
    [currentUserPermissions, pagePermissions]
  );

  const permissionLabelMap = useMemo(
    () => new Map(pagePermissions.map((permission) => [permission.key, permission.label])),
    [pagePermissions]
  );

  async function load() {
    const response = await fetch("/api/permissions");
    const data = await parseJsonResponse(response);
    if (!response.ok || !data) {
      setError(errorMessage(data, "權限資料讀取失敗。"));
      return;
    }
    const payload = data as PermissionsPayload;
    setPagePermissions(payload.pagePermissions);
    setRoles(payload.roles);
    setUsers(payload.users);
    setCurrentUserPermissions(payload.currentUser?.pagePermissions ?? []);
  }

  useEffect(() => {
    void load();
  }, []);

  async function submitRole() {
    setError("");
    const response = await fetch(editingRoleId ? `/api/permissions/roles/${editingRoleId}` : "/api/permissions", {
      method: editingRoleId ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "role", ...roleForm })
    });
    const data = await parseJsonResponse(response);
    if (!response.ok) {
      setError(errorMessage(data, "角色儲存失敗。"));
      return;
    }
    setRoleForm(emptyRoleForm);
    setEditingRoleId(null);
    setRoleModalOpen(false);
    await load();
  }

  async function submitUser() {
    setError("");
    const response = await fetch(editingUserId ? `/api/permissions/users/${editingUserId}` : "/api/permissions", {
      method: editingUserId ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "user", ...userForm })
    });
    const data = await parseJsonResponse(response);
    if (!response.ok) {
      setError(errorMessage(data, "帳號儲存失敗。"));
      return;
    }
    setUserForm(emptyUserForm);
    setEditingUserId(null);
    await load();
  }

  async function toggleUserActive(user: UserRecord, active: boolean) {
    if (user.isAdmin) return;
    setError("");
    const response = await fetch(`/api/permissions/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ active, roleId: user.roleId })
    });
    const data = await parseJsonResponse(response);
    if (!response.ok) {
      setError(errorMessage(data, "帳號狀態更新失敗。"));
      return;
    }
    await load();
  }

  async function toggleRoleActive(role: RoleRecord, active: boolean) {
    if (role.name === "Admin") return;
    setError("");
    const response = await fetch(`/api/permissions/roles/${role.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: role.name,
        notes: role.notes ?? "",
        pagePermissions: role.pagePermissions,
        active
      })
    });
    const data = await parseJsonResponse(response);
    if (!response.ok) {
      setError(errorMessage(data, "角色狀態更新失敗。"));
      return;
    }
    await load();
  }

  function editRole(role: RoleRecord) {
    setEditingRoleId(role.id);
    setRoleModalOpen(true);
    setRoleForm({
      name: role.name,
      notes: role.notes ?? "",
      active: role.active,
      pagePermissions: role.pagePermissions.filter((permission) => currentUserPermissions.includes(permission))
    });
  }

  function createRole() {
    setEditingRoleId(null);
    setRoleForm(emptyRoleForm);
    setRoleModalOpen(true);
  }

  function updateRolePermissions(checked: unknown) {
    const checkedKeys = Array.isArray(checked)
      ? checked
      : checked && typeof checked === "object" && "checked" in checked && Array.isArray(checked.checked)
        ? checked.checked
        : [];
    setRoleForm({
      ...roleForm,
      pagePermissions: checkedKeys.map(String).filter((key) => selectablePermissionKeys.has(key))
    });
  }

  function editUser(user: UserRecord) {
    setEditingUserId(user.id);
    setUserForm({
      email: user.email,
      password: "",
      roleId: user.roleId ?? "",
      active: user.active
    });
  }

  function rolePermissions(roleId: string) {
    return roles.find((role) => role.id === roleId)?.pagePermissions ?? [];
  }

  return (
    <>
      <div className="page-heading">
        <Typography.Title level={2}>權限設定</Typography.Title>
        <Typography.Text type="secondary">設定角色可觀看頁面，並由角色建立帳號權限。</Typography.Text>
      </div>
      {error && <Alert type="error" message={error} showIcon style={{ marginBottom: 16 }} />}
      <Space direction="vertical" size={16} style={{ width: "100%" }}>
        <Card
          title="角色設定"
          extra={
            <Button type="primary" icon={<PlusOutlined />} onClick={createRole}>
              新增角色
            </Button>
          }
        >
          <Table
            rowKey="id"
            size="small"
            pagination={{ pageSize: 30, pageSizeOptions: [30, 50, 100], showSizeChanger: true }}
            dataSource={roles}
            columns={[
              { title: "角色", dataIndex: "name" },
              {
                title: "備註",
                dataIndex: "notes",
                render: (notes: string | null) => notes || ""
              },
              {
                title: "啟用",
                render: (_: unknown, role: RoleRecord) => (
                  <Switch
                    checked={role.active}
                    checkedChildren="開"
                    unCheckedChildren="關"
                    disabled={role.name === "Admin"}
                    onChange={(checked) => toggleRoleActive(role, checked)}
                  />
                )
              },
              { title: "操作", render: (_: unknown, role: RoleRecord) => <Button onClick={() => editRole(role)}>編輯</Button> }
            ]}
          />
        </Card>
        <Modal
          title={editingRoleId ? "編輯角色" : "新增角色"}
          open={roleModalOpen}
          okText={editingRoleId ? "更新角色" : "新增角色"}
          cancelText="取消"
          width={640}
          onOk={submitRole}
          onCancel={() => {
            setRoleModalOpen(false);
            setEditingRoleId(null);
            setRoleForm(emptyRoleForm);
          }}
        >
          <Form layout="vertical">
            <Form.Item label="角色名稱" required>
              <Input value={roleForm.name} onChange={(event) => setRoleForm({ ...roleForm, name: event.target.value })} />
            </Form.Item>
            <Form.Item label="備註">
              <Input.TextArea
                rows={3}
                value={roleForm.notes}
                onChange={(event) => setRoleForm({ ...roleForm, notes: event.target.value })}
              />
            </Form.Item>
            <Form.Item label="權限樹">
              <Tree
                checkable
                defaultExpandAll
                expandedKeys={expandedPermissionTreeKeys}
                checkedKeys={roleForm.pagePermissions}
                treeData={permissionTreeData}
                onCheck={updateRolePermissions}
              />
            </Form.Item>
            <Form.Item>
              <Checkbox
                checked={roleForm.active}
                onChange={(event) => setRoleForm({ ...roleForm, active: event.target.checked })}
              >
                啟用
              </Checkbox>
            </Form.Item>
          </Form>
        </Modal>
        <Card title="建立帳號">
          <Form layout="vertical">
            <Row gutter={12} align="bottom">
              <Col xs={24} md={editingUserId ? 12 : 8}>
                <Form.Item label="Email" required>
                  <Input
                    type="email"
                    value={userForm.email}
                    disabled={Boolean(editingUserId)}
                    onChange={(event) => setUserForm({ ...userForm, email: event.target.value })}
                  />
                </Form.Item>
              </Col>
              {!editingUserId && (
                <Col xs={24} md={8}>
                  <Form.Item label="密碼" required>
                    <Input.Password
                      value={userForm.password}
                      minLength={6}
                      onChange={(event) => setUserForm({ ...userForm, password: event.target.value })}
                    />
                  </Form.Item>
                </Col>
              )}
              <Col xs={24} md={editingUserId ? 12 : 8}>
                <Form.Item label="角色" required>
                  <Select
                    value={userForm.roleId || undefined}
                    options={roles.filter((role) => role.active).map((role) => ({ label: role.name, value: role.id }))}
                    onChange={(roleId) => setUserForm({ ...userForm, roleId })}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={12} align="middle">
              <Col>
                <Form.Item>
                  <Checkbox
                    checked={userForm.active}
                    onChange={(event) => setUserForm({ ...userForm, active: event.target.checked })}
                  >
                    啟用
                  </Checkbox>
                </Form.Item>
              </Col>
              <Col>
                <Form.Item>
                  <Space>
                    <Button type="primary" onClick={submitUser}>
                      {editingUserId ? "更新帳號" : "建立帳號"}
                    </Button>
                    {editingUserId && (
                      <Button
                        onClick={() => {
                          setEditingUserId(null);
                          setUserForm(emptyUserForm);
                        }}
                      >
                        取消
                      </Button>
                    )}
                  </Space>
                </Form.Item>
              </Col>
            </Row>
            {userForm.roleId && (
              <Form.Item label="此帳號將取得的頁面權限">
                <Space size={[4, 4]} wrap>
                  {rolePermissions(userForm.roleId)
                    .filter((permission) => currentUserPermissions.includes(permission))
                    .map((permission) => (
                      <Tag key={permission} color="green">
                        {permissionLabelMap.get(permission) ?? permission}
                      </Tag>
                    ))}
                </Space>
              </Form.Item>
            )}
          </Form>
        </Card>
        <Table
          rowKey="id"
          size="small"
          pagination={{ pageSize: 30, pageSizeOptions: [30, 50, 100], showSizeChanger: true }}
          dataSource={users}
          columns={[
            { title: "Email", dataIndex: "email" },
            { title: "角色", render: (_: unknown, user: UserRecord) => user.role?.name ?? (user.isAdmin ? "Admin" : "") },
            {
              title: "狀態",
              render: (_: unknown, user: UserRecord) => (
                <Switch
                  checked={user.active}
                  checkedChildren="開"
                  unCheckedChildren="關"
                  disabled={user.isAdmin}
                  onChange={(checked) => toggleUserActive(user, checked)}
                />
              )
            },
            {
              title: "操作",
              render: (_: unknown, user: UserRecord) =>
                user.isAdmin ? "最高權限" : <Button onClick={() => editUser(user)}>編輯</Button>
            }
          ]}
        />
      </Space>
    </>
  );
}
