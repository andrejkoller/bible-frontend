import * as React from "react";
import { useBible } from "../../../../hooks/use-bible";
import { fetchBibles } from "../../../../services/bible-service";
import { useNavigate, Link } from "react-router-dom";
import styles from "./translations.module.css";

export default function TranslationsPage() {
  const {
    language,
    bibles,
    setBibles,
    selectedBible,
    setSelectedBible,
    isLoading,
    setIsLoading,
    error,
    setError,
  } = useBible();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!language?.id) return;

    setIsLoading(true);
    setError(null);

    fetchBibles(language.id)
      .then(setBibles)
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [language?.id, setBibles, setIsLoading, setError]);

  const handleBibleSelect = (bible) => {
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
            <p className={styles.error}>Error: {error}</p>
          ) : isLoading ? (
            <p className={styles.loading}>Loading...</p>
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
            <p className={styles.noTranslations}>No translations available</p>
          )}
        </div>
      </div>
    </div>
  );
}
