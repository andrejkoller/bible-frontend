import { useBible } from "../../../hooks/use-bible";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Translations = () => {
  const { language, bibles, selectedBible, setSelectedBible } = useBible();
  const navigate = useNavigate();

  const handleBibleSelect = async (bible) => {
    setSelectedBible(bible);
    navigate(`/${bible.id}`);
  };

  return (
    <div className="translations">
      <div className="language-link">
        <Link className="language-link-item" to={"/bible-language"}>
          <div>
            <i className="fa-solid fa-globe"></i>
            <span>Language</span>
          </div>
          <i className="fa-solid fa-chevron-right"></i>
        </Link>
      </div>
      <div className="translations-container">
        <div className="translations-header">
          <h2>
            {bibles?.length} {language?.name} Versions
          </h2>
        </div>
        <div className="translations-content">
          {bibles?.length > 0 ? (
            <div className="bibles">
              {bibles.map((bible) => (
                <div
                  className="bible-item"
                  key={bible?.id}
                  onClick={() => handleBibleSelect(bible)}
                >
                  <span>{bible.name.replace(/\(.*?\)/g, "").trim()}</span>
                  {selectedBible?.id === bible?.id && (
                    <i className="fa-solid fa-check"></i>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p style={{ textAlign: "center" }}>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Translations;
