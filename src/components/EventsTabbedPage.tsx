"use client";

import { Tabs, Typography } from "antd";
import { CrudPage } from "@/components/CrudPage";
import type { ModuleConfig } from "@/lib/module-config";

export function EventsTabbedPage({
  eventsConfig,
  registrationsConfig
}: {
  eventsConfig: ModuleConfig;
  registrationsConfig: ModuleConfig;
}) {
  return (
    <>
      <div className="page-heading">
        <Typography.Title level={2}>活動管理</Typography.Title>
        <Typography.Text type="secondary">管理活動、活動品項與報名資料。</Typography.Text>
      </div>
      <Tabs
        className="module-tabs"
        defaultActiveKey="registrations"
        type="card"
        items={[
          {
            key: "events",
            label: "活動管理",
            children: <CrudPage config={eventsConfig} hideHeading />
          },
          {
            key: "registrations",
            label: "活動報名",
            children: <CrudPage config={registrationsConfig} hideHeading />
          }
        ]}
      />
    </>
  );
}
