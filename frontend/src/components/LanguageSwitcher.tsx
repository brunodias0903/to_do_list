import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <span>{t("language")}: </span>
      <button
        onClick={() => changeLanguage("en")}
        className={`lang-btn ${i18n.language === "en" ? "active" : ""}`}
      >
        {t("english")}
      </button>
      <button
        onClick={() => changeLanguage("pt-BR")}
        className={`lang-btn ${i18n.language === "pt-BR" ? "active" : ""}`}
      >
        {t("portuguese")}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
