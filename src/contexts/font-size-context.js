import * as React from "react";

export const FontSizeContext = React.createContext(undefined);

export const FontSizeProvider = ({ children }) => {
  const [fontSize, setFontSize] = React.useState(
    () => localStorage.getItem("fontSize") || "16",
  );

  React.useEffect(() => {
    document.documentElement.style.fontSize = fontSize;
    localStorage.setItem("fontSize", fontSize);
  }, [fontSize]);

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};
