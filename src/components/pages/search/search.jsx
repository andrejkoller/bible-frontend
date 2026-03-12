import * as React from "react";
import styles from "./search.module.css";
import { searchVerses } from "../../../services/bible-service";
import { useBible } from "../../../hooks/use-bible";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { selectedBible } = useBible();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery) return;
    setIsLoading(true);
    setError(null);
    searchVerses(selectedBible?.id, searchQuery)
      .then(setSearchResults)
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={styles.search}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for verses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
      <div className={styles.searchResults}>
        <h2>
          {isLoading
            ? "Searching..."
            : error
              ? `Error: ${error}`
              : searchResults.length > 0
                ? `Found ${searchResults.length} results`
                : "No results found"}
        </h2>
        <div className={styles.resultsList}>
          {Array.isArray(searchResults) &&
            searchResults.map((result) => (
              <div key={result.id} className={styles.resultItem}>
                <h3 className={styles.verseReference}>{result.reference}</h3>
                <p className={styles.verseText}>{result.text}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
