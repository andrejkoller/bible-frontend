import { useContext } from "react";
import { FontSizeContext } from "../contexts/font-size-context";

export const useFontSize = () => {
  const context = useContext(FontSizeContext);

  if (!context) {
    throw new Error("useFontSize must be used within FontSizeProvider");
  }

  return context;
};
