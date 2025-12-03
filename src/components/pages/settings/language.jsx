import { useLanguage } from "../../../hooks/use-language";

const Language = () => {
  const { language, setEnglish, setGerman, setRussian } = useLanguage();

  return (
    <div className="language-container">
      <div className="language-content">
        <div className="language-title">
          <h3>App Interface</h3>
        </div>
        <div className="language-item" onClick={setEnglish}>
          <span>English</span>
          {language === "en-US" && <i className="fa-solid fa-check"></i>}
        </div>
        <div className="language-item" onClick={setGerman}>
          <span>German</span>
          {language === "ger" && <i className="fa-solid fa-check"></i>}
        </div>
        <div className="language-item" onClick={setRussian}>
          <span>Russian</span>
          {language === "ru" && <i className="fa-solid fa-check"></i>}
        </div>
      </div>
    </div>
  );
};

export default Language;
