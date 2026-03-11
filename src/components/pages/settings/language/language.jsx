import { useLanguage } from "../../../../hooks/use-language";
import styles from "./language.module.css";

export default function LanguagePage() {
  const { language, setLanguage } = useLanguage();

  const setEnglish = () => {
    setLanguage("en");
  };

  const setGerman = () => {
    setLanguage("de");
  };

  return (
    <div className={styles.language}>
      <div className={styles.languageItem} onClick={setEnglish}>
        <span>English</span>
        {language === "en" && <i className="fa-solid fa-check"></i>}
      </div>
      <div className={styles.languageItem} onClick={setGerman}>
        <span>German</span>
        {language === "de" && <i className="fa-solid fa-check"></i>}
      </div>
    </div>
  );
}
