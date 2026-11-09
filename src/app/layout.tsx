import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { AppThemeProvider } from "@/components/AppThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "門市管理 ERP",
  description: "Service-first ERP and POS MVP"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>
        <AntdRegistry>
          <AppThemeProvider>{children}</AppThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
