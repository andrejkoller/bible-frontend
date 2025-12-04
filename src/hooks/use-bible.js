import { useState, useEffect } from "react";
import {
  fetchBibles,
  fetchBooks,
  fetchChapters,
  fetchVerses,
} from "../services/bible-service";

const getLocalStorageItem = (key, defaultValue) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || defaultValue;
  } catch (errror) {
    return defaultValue;
  }
};

export const useBible = () => {
  const [bibles, setBibles] = useState([]);
  const [books, setBooks] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [verses, setVerses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [language, setLanguage] = useState(
    getLocalStorageItem("translationLanguage", "")
  );

  const [selectedBible, setSelectedBible] = useState(
    getLocalStorageItem("selectedBible", "")
  );
  const [selectedBook, setSelectedBook] = useState(
    getLocalStorageItem("selectedBook", "")
  );
  const [selectedChapter, setSelectedChapter] = useState(
    getLocalStorageItem("selectedChapter", "")
  );
  const [isChaptersVisible, setIsChaptersVisible] = useState(false);

  useEffect(() => {
    if (selectedBible)
      localStorage.setItem("selectedBible", JSON.stringify(selectedBible));
  }, [selectedBible]);

  useEffect(() => {
    if (selectedBook)
      localStorage.setItem("selectedBook", JSON.stringify(selectedBook));
  }, [selectedBook]);

  useEffect(() => {
    if (selectedChapter)
      localStorage.setItem("selectedChapter", JSON.stringify(selectedChapter));
  }, [selectedChapter]);

  useEffect(() => {
    const getBibles = async () => {
      if (!language.id) return;
      setIsLoading(true);
      setError(null);
      try {
        const bibleList = await fetchBibles(language.id);
        setBibles(bibleList);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getBibles();
  }, [language]);

  useEffect(() => {
    const getBooks = async () => {
      if (!selectedBible?.id) {
        setBooks([]);
        setSelectedBook("");
        setSelectedChapter("");
        return;
      }
      setIsLoading(true);
      setError(null);
      try {
        const bookList = await fetchBooks(selectedBible.id);
        setBooks(bookList);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getBooks();
  }, [selectedBible]);

  useEffect(() => {
    const getChapters = async () => {
      if (!selectedBible?.id || !selectedBook) {
        setChapters([]);
        setSelectedChapter("");
        return;
      }
      setIsLoading(true);
      setError(null);
      try {
        const chapterList = await fetchChapters(selectedBible.id, selectedBook);
        setChapters(chapterList);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getChapters();
  }, [selectedBible, selectedBook]);

  useEffect(() => {
    const getVerses = async () => {
      if (!selectedBible?.id || !selectedBook || !selectedChapter) {
        setVerses([]);
        return;
      }
      setIsLoading(true);
      setError(null);
      try {
        const verseList = await fetchVerses(
          selectedBible.id,
          selectedBook,
          selectedChapter
        );
        setVerses(verseList);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getVerses();
  }, [selectedBible, selectedBook, selectedChapter]);

  return {
    language,
    bibles,
    books,
    chapters,
    verses,
    selectedBible,
    selectedBook,
    selectedChapter,
    isLoading,
    error,
    setLanguage,
    setChapters,
    setSelectedBible,
    setSelectedBook,
    setSelectedChapter,
    isChaptersVisible,
    setIsChaptersVisible,
  };
};
