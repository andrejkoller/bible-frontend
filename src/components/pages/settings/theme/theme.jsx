import { useTheme } from "../../../../hooks/use-theme";
import styles from "./theme.module.css";

export default function ThemePage() {
  const { theme, setTheme } = useTheme();

  const setLightTheme = () => {
    setTheme("light");
  };

  const setDarkTheme = () => {
    setTheme("dark");
  };

  return (
    <div className={styles.theme}>
      <div className={styles.themeItem} onClick={setLightTheme}>
        <span>Off</span>
        {theme === "light" && <i className="fa-solid fa-check"></i>}
      </div>
      <div className={styles.themeItem} onClick={setDarkTheme}>
        <span>On</span>
        {theme === "dark" && <i className="fa-solid fa-check"></i>}
      </div>
    </div>
  );
}
