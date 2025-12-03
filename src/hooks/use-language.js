import { useEffect, useState } from "react";

export const useLanguage = () => {
  const [language, setLanguage] = useState(
    () => localStorage.getItem("language") || "en-US"
  );

  const setEnglish = () => {
    setLanguage("en-US");
  };

  const setGerman = () => {
    setLanguage("ger");
  };

  const setRussian = () => {
    setLanguage("ru");
  };

  useEffect(() => {
    document.body.lang = language;
    localStorage.setItem("language", language);
  }, [language]);

  return { language, setEnglish, setGerman, setRussian };
};
