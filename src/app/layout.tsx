import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import zhTW from "antd/locale/zh_TW";
import "./globals.css";

export const metadata: Metadata = {
  title: "UNV.PLAN ERP",
  description: "Service-first ERP and POS MVP"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>
        <AntdRegistry>
          <ConfigProvider
            locale={zhTW}
            theme={{
              token: {
                colorPrimary: "#126a7a",
                borderRadius: 6,
                fontFamily: 'Arial, "Noto Sans TC", sans-serif'
              },
              components: {
                Layout: {
                  siderBg: "#eaf6ff",
                  headerBg: "#ffffff"
                },
                Menu: {
                  itemBg: "#eaf6ff",
                  itemColor: "#25566f",
                  itemHoverBg: "#d8efff",
                  itemHoverColor: "#0b6382",
                  itemSelectedBg: "#c8e8ff",
                  itemSelectedColor: "#075c78",
                  subMenuItemBg: "#eaf6ff"
                }
              }
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
