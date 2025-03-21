import { useBible } from "../hooks/useBible";
import { useNavigate } from "react-router-dom";

const Translations = () => {
  const { bibles, selectedBible, setSelectedBible } = useBible();
  const navigate = useNavigate();

  const handleBibleSelect = async (bible) => {
    setSelectedBible(bible);
    navigate(`/${bible.id}`);
  };

  return (
    <div className="translations-container">
      <div className="translations-content">
        {bibles.length > 0 ? (
          <div className="bibles">
            {bibles.map((bible) => (
              <div
                className="bible-item"
                key={bible.id}
                onClick={() => handleBibleSelect(bible)}
              >
                <span>{bible.name.replace(/\(.*?\)/g, "").trim()}</span>
                {selectedBible?.id === bible.id && (
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
  );
};

export default Translations;
