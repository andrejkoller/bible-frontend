import { useLanguage } from "../../../../hooks/use-language";
import styles from "./language.module.css";

export default function LanguagePage() {
  const { language, setEnglish, setGerman, setRussian } = useLanguage();

  return (
    <div className={styles.language}>
      <div className={styles.languageItem} onClick={setEnglish}>
        <span>English</span>
        {language === "en-US" && <i className="fa-solid fa-check"></i>}
      </div>
      <div className={styles.languageItem} onClick={setGerman}>
        <span>German</span>
        {language === "ger" && <i className="fa-solid fa-check"></i>}
      </div>
      <div className={styles.languageItem} onClick={setRussian}>
        <span>Russian</span>
        {language === "ru" && <i className="fa-solid fa-check"></i>}
      </div>
    </div>
  );
}
