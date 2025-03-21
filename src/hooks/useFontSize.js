import { useEffect, useState } from "react";

export const useFontSize = () => {
  const [fontSize, setFontSize] = useState(
    () => localStorage.getItem("fontSize") || "16"
  );

  const setFontSize10 = () => {
    setFontSize("10");
  };

  const setFontSize12 = () => {
    setFontSize("12");
  };

  const setFontSize14 = () => {
    setFontSize("14");
  };

  const setFontSize16 = () => {
    setFontSize("16");
  };

  const setFontSize18 = () => {
    setFontSize("18");
  };

  const setFontSize20 = () => {
    setFontSize("20");
  };

  const setFontSize22 = () => {
    setFontSize("22");
  };

  const setFontSize24 = () => {
    setFontSize("24");
  };

  const setFontSize26 = () => {
    setFontSize("26");
  };

  const setFontSize28 = () => {
    setFontSize("28");
  };

  const setFontSize30 = () => {
    setFontSize("30");
  };

  useEffect(() => {
    let chapter = document.querySelector(".verses");
    if (chapter) {
      chapter.style.fontSize = `${fontSize}px`;
    }
    localStorage.setItem("fontSize", fontSize);
  }, [fontSize]);

  return {
    fontSize,
    setFontSize10,
    setFontSize12,
    setFontSize14,
    setFontSize16,
    setFontSize18,
    setFontSize20,
    setFontSize22,
    setFontSize24,
    setFontSize26,
    setFontSize28,
    setFontSize30,
  };
};
