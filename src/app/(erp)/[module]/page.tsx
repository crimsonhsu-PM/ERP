import { notFound } from "next/navigation";
import { CrudPage } from "@/components/CrudPage";
import { EventsTabbedPage } from "@/components/EventsTabbedPage";
import { ShiftsCalendarPage } from "@/components/ShiftsCalendarPage";
import { getModuleConfig } from "@/lib/module-config";
import { requirePagePermission } from "@/lib/page-auth";
import { modulePermissionKey } from "@/lib/permissions";

export default async function Page({ params }: { params: Promise<{ module: string }> }) {
  const { module } = await params;
  const config = getModuleConfig(module);
  if (!config) notFound();
  await requirePagePermission(modulePermissionKey(module));
  if (config.slug === "shifts") return <ShiftsCalendarPage config={config} />;
  if (config.slug === "events") {
    const registrationsConfig = getModuleConfig("event-registrations");
    if (!registrationsConfig) notFound();
    return <EventsTabbedPage eventsConfig={config} registrationsConfig={registrationsConfig} />;
  }
  return <CrudPage config={config} />;
}
