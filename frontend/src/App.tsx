import "@/App.css";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import TodoList from "@/components/TodoList";
import "@/i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.setAttribute(
        "data-theme",
        prefersDark ? "dark" : "light"
      );
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <div className="top-controls">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
        <header className="app-header">
          <h1>{t("appTitle")}</h1>
        </header>
        <main>
          <TodoList />
        </main>
      </div>
    </QueryClientProvider>
  );
};

export default App;
