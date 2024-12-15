import React from "react";
import { useTranslation } from "react-i18next";
import style from "./LanguageSwitcher.module.scss"
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const currentLanguage = i18n.language;

  return (
    <div className={`flex ${style.language} gap-2 justify-center items-center`}>
      <button
        onClick={() => handleChangeLanguage("pt")}
        className={
          currentLanguage === "pt"
            ? "bg-blue-500 text-white"
            : "bg-transparent text-gray-light-4"
        }
      >
        PT
      </button>
      <span className="text-xs relative bottom-[2px] mx-2">|</span>
      <button
        onClick={() => handleChangeLanguage("en")}
        className={
          currentLanguage === "en"
            ? "bg-blue-500 text-white"
            : "bg-transparent text-gray-light-4"
        }
      >
        EN
      </button>
      <span className="text-xs relative bottom-[2px] mx-2">|</span>
      <button
        onClick={() => handleChangeLanguage("es")}
        className={
          currentLanguage === "es"
            ? "bg-blue-500 text-white"
            : "bg-transparent text-gray-light-4"
        }
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;
