import { useNavigate } from "react-router";
import { useBible } from "../../hooks/use-bible";

const TranslationLanguage = () => {
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
    <div className="translation-language-container">
      <div className="translation-language-content">
        <div className="translation-language-title">
          <h3>Bibel Text</h3>
        </div>
        <div
          className="translation-language-item"
          onClick={() => handleTranslationLanguage("eng", "English")}
        >
          <span>English</span>
          {language?.id === "eng" && <i className="fa-solid fa-check"></i>}
        </div>
        <div
          className="translation-language-item"
          onClick={() => handleTranslationLanguage("deu", "German")}
        >
          <span>German</span>
          {language?.id === "deu" && <i className="fa-solid fa-check"></i>}
        </div>
      </div>
    </div>
  );
};

export default TranslationLanguage;
