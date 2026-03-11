import * as React from "react";

export const LanguageContext = React.createContext(undefined);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = React.useState(
    () => localStorage.getItem("language") || "en",
  );

  React.useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
