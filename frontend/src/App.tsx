import "@/App.css";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import TodoList from "@/components/TodoList";
import "@/i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
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

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <LanguageSwitcher />
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
