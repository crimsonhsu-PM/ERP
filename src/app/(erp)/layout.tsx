import { AppShell } from "@/components/AppShell";

export default async function ErpLayout({ children }: { children: React.ReactNode }) {
  return <AppShell>{children}</AppShell>;
}
