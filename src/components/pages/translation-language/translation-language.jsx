import { useNavigate } from "react-router";
import { useBible } from "../../../hooks/use-bible";
import styles from "./translation-language.module.css";

export default function TranslationLanguagePage() {
  const { language, setLanguage } = useBible();
  const navigate = useNavigate();

  const handleTranslationLanguage = (id, name) => {
    const languageObject = {
      id,
      name,
    };

    localStorage.setItem("translationLanguage", JSON.stringify(languageObject));
    setLanguage(languageObject);
    navigate(`/`);
  };

  return (
    <div className={styles.translationLanguage}>
      <div
        className={styles.translationLanguageItem}
        onClick={() => handleTranslationLanguage("eng", "English")}
      >
        <span>English</span>
        {language?.id === "eng" && <i className="fa-solid fa-check"></i>}
      </div>
      <div
        className={styles.translationLanguageItem}
        onClick={() => handleTranslationLanguage("deu", "German")}
      >
        <span>German</span>
        {language?.id === "deu" && <i className="fa-solid fa-check"></i>}
      </div>
    </div>
  );
}
