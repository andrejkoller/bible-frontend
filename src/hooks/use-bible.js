import * as React from "react";
import { BibleContext } from "../contexts/bible-context";

export const useBible = () => {
  const context = React.useContext(BibleContext);

  if (!context) {
    throw new Error("useBible must be used within BibleProvider");
  }

  return context;
};
