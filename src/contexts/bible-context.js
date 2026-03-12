import * as React from "react";
import { getLocalStorageItem } from "../lib/utils/get-local-storage-item";

export const BibleContext = React.createContext(undefined);

export const BibleProvider = ({ children }) => {
  const [bibles, setBibles] = React.useState([]);
  const [books, setBooks] = React.useState([]);
  const [chapters, setChapters] = React.useState([]);
  const [verses, setVerses] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const [language, setLanguage] = React.useState(
    getLocalStorageItem("translationLanguage", { id: "eng", name: "English" }),
  );

  const [selectedBible, setSelectedBible] = React.useState(() =>
    getLocalStorageItem("selectedBible", {
      id: "de4e12af7f28f599-02",
      abbreviation: "KJV",
      name: "King James Version",
    }),
  );

  const [selectedBook, setSelectedBook] = React.useState(() =>
    getLocalStorageItem("selectedBook", "JHN"),
  );

  const [selectedChapter, setSelectedChapter] = React.useState(() =>
    getLocalStorageItem("selectedChapter", "3"),
  );

  const [isChapterVisible, setIsChapterVisible] = React.useState(false);

  React.useEffect(() => {
    if (language) {
      localStorage.setItem("translationLanguage", JSON.stringify(language));
    } else {
      localStorage.removeItem("translationLanguage");
    }
  }, [language]);

  React.useEffect(() => {
    if (selectedBible) {
      localStorage.setItem("selectedBible", JSON.stringify(selectedBible));
    } else {
      localStorage.removeItem("selectedBible");
    }
  }, [selectedBible]);

  React.useEffect(() => {
    if (selectedBook) {
      localStorage.setItem("selectedBook", JSON.stringify(selectedBook));
    } else {
      localStorage.removeItem("selectedBook");
    }
  }, [selectedBook]);

  React.useEffect(() => {
    if (selectedChapter) {
      localStorage.setItem("selectedChapter", JSON.stringify(selectedChapter));
    } else {
      localStorage.removeItem("selectedChapter");
    }
  }, [selectedChapter]);

  return (
    <BibleContext.Provider
      value={{
        bibles,
        setBibles,
        books,
        setBooks,
        chapters,
        setChapters,
        verses,
        setVerses,
        isLoading,
        setIsLoading,
        error,
        setError,
        language,
        setLanguage,
        selectedBible,
        setSelectedBible,
        selectedBook,
        setSelectedBook,
        selectedChapter,
        setSelectedChapter,
        isChapterVisible,
        setIsChapterVisible,
      }}
    >
      {children}
    </BibleContext.Provider>
  );
};
