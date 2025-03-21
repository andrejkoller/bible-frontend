import { useState, useEffect } from "react";
import {
  fetchBibles,
  fetchBooks,
  fetchChapters,
  fetchVerses,
} from "../services/bibleService";

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
      const bibleList = await fetchBibles();
      setBibles(bibleList);
    };

    getBibles();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedBible) return;
      const bookList = await fetchBooks(selectedBible.id);
      setBooks(bookList);

      if (selectedBook) {
        const chapterList = await fetchChapters(selectedBible.id, selectedBook);
        setChapters(chapterList);

        if (selectedBook && selectedChapter) {
          const verseList = await fetchVerses(
            selectedBible.id,
            selectedBook,
            selectedChapter
          );
          setVerses(verseList);
        }
      }
    };

    fetchData();
  }, [selectedBible, selectedBook, selectedChapter]);

  return {
    bibles,
    books,
    chapters,
    verses,
    selectedBible,
    selectedBook,
    selectedChapter,
    setChapters,
    setSelectedBible,
    setSelectedBook,
    setSelectedChapter,
    isChaptersVisible,
    setIsChaptersVisible,
  };
};
