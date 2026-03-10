import { useBible } from "../../../../hooks/use-bible";
import { useNavigate, Link } from "react-router-dom";
import styles from "./translations.module.css";

export default function TranslationsPage() {
  const {
    language,
    bibles,
    selectedBible,
    setSelectedBible,
    isLoading,
    error,
  } = useBible();
  const navigate = useNavigate();

  const handleBibleSelect = async (bible) => {
    setSelectedBible(bible);
    navigate(`/${bible.id}`);
  };

  return (
    <div className={styles.translations}>
      <Link className={styles.link} to={"/bible-language"}>
        <span>Language</span>
        <i className="fa-solid fa-chevron-right"></i>
      </Link>
      <div className={styles.translationsContainer}>
        <div className={styles.translationsTitle}>
          <h2>
            {bibles?.length} {language?.name} Versions
          </h2>
        </div>
        <div className={styles.translationsContent}>
          {error ? (
            <p style={{ textAlign: "center", color: "red" }}>Error: {error}</p>
          ) : isLoading ? (
            <p style={{ textAlign: "center" }}>Loading...</p>
          ) : bibles && bibles.length > 0 ? (
            <div className={styles.bibles}>
              {bibles.map((bible) => (
                <div
                  className={styles.bibleItem}
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
            <p style={{ textAlign: "center" }}>No translations available</p>
          )}
        </div>
      </div>
    </div>
  );
}
