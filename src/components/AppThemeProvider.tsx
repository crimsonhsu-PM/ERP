"use client";

import { ConfigProvider, theme as antdTheme } from "antd";
import zhTW from "antd/locale/zh_TW";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type ThemeMode = "light" | "dark";

type ThemeContextValue = {
  mode: ThemeMode;
  toggleMode: () => void;
};

const themeStorageKey = "unv-plan-erp-theme";

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const savedMode = window.localStorage.getItem(themeStorageKey);
    if (savedMode === "dark" || savedMode === "light") {
      setMode(savedMode);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  const contextValue = useMemo<ThemeContextValue>(
    () => ({
      mode,
      toggleMode: () => {
        setMode((currentMode) => {
          const nextMode = currentMode === "light" ? "dark" : "light";
          window.localStorage.setItem(themeStorageKey, nextMode);
          return nextMode;
        });
      }
    }),
    [mode]
  );

  const darkMode = mode === "dark";

  return (
    <ThemeContext.Provider value={contextValue}>
      <ConfigProvider
        locale={zhTW}
        theme={{
          algorithm: darkMode ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
          token: {
            colorPrimary: darkMode ? "#2b91ad" : "#126a7a",
            colorBgLayout: darkMode ? "#101820" : "#f5f7fa",
            colorBgContainer: darkMode ? "#18242e" : "#ffffff",
            colorBorderSecondary: darkMode ? "#31414e" : "#edf0f2",
            borderRadius: 6,
            fontFamily: 'Arial, "Noto Sans TC", sans-serif'
          },
          components: {
            Layout: {
              bodyBg: darkMode ? "#101820" : "#f5f7fa",
              siderBg: darkMode ? "#111d27" : "#eaf6ff",
              headerBg: darkMode ? "#17232d" : "#ffffff"
            },
            Menu: {
              itemBg: darkMode ? "#111d27" : "#eaf6ff",
              itemColor: darkMode ? "#a9bfca" : "#25566f",
              itemHoverBg: darkMode ? "#1a3443" : "#d8efff",
              itemHoverColor: darkMode ? "#e0f7ff" : "#0b6382",
              itemSelectedBg: darkMode ? "#1d5269" : "#c8e8ff",
              itemSelectedColor: darkMode ? "#f3fbff" : "#075c78",
              subMenuItemBg: darkMode ? "#111d27" : "#eaf6ff"
            }
          }
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useAppTheme 必須在 AppThemeProvider 內使用");
  return context;
}
