import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light-theme"
  );

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const setLightTheme = () => {
    setTheme("light-theme");
  };

  const setDarkTheme = () => {
    setTheme("dark-theme");
  };

  return { theme, setLightTheme, setDarkTheme };
};
