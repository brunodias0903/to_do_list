import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const ThemeToggle: React.FC = () => {
  const { t } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={isDarkMode ? t("lightMode") : t("darkMode")}
    >
      {isDarkMode ? `☀️ ${t("lightMode")}` : `🌙 ${t("darkMode")}`}
    </button>
  );
};

export default ThemeToggle;
