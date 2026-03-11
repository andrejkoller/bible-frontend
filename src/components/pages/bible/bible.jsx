import * as React from "react";
import { useBible } from "../../../hooks/use-bible";
import { fetchBooks, fetchChapters } from "../../../services/bible-service";
import { useNavigate } from "react-router-dom";
import styles from "./bible.module.css";

export default function BiblePage() {
  const {
    books,
    setBooks,
    chapters,
    setChapters,
    selectedBook,
    selectedBible,
    setSelectedBook,
    setSelectedChapter,
    isChapterVisible,
    setIsChapterVisible,
    isLoading,
    setIsLoading,
    error,
    setError,
  } = useBible();
  const navigate = useNavigate();
  const [isRendered, setIsRendered] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const bookRefs = React.useRef({});

  React.useEffect(() => {
    if (!selectedBible?.id) return;

    setIsLoading(true);
    setError(null);

    fetchBooks(selectedBible.id)
      .then(setBooks)
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [selectedBible?.id, setBooks, setIsLoading, setError]);

  React.useEffect(() => {
    if (!selectedBible?.id || !selectedBook) return;

    fetchChapters(selectedBible.id, selectedBook)
      .then(setChapters)
      .catch((err) => setError(err.message));
  }, [selectedBible?.id, selectedBook, setChapters, setError]);

  React.useEffect(() => {
    if (selectedBook && books.length > 0) {
      const foundBook = books.find((book) => book.id === selectedBook);
      if (foundBook) {
        setTimeout(() => {
          if (bookRefs.current[foundBook.id]) {
            bookRefs.current[foundBook.id].scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }, 300);
      }
    }
  }, [books, selectedBook]);

  const handleBookSelect = (bookId) => {
    if (selectedBook === bookId) {
      setSelectedBook("");
      setSelectedChapter("");
      setIsChapterVisible(false);
    } else {
      setIsRendered(true);
      setSelectedBook(bookId);
      setIsChapterVisible(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 10);
    }
  };

  const handleChapterSelect = (chapterId) => {
    setSelectedChapter(chapterId);
    navigate(`/${selectedBible.id}/${selectedBook}/${chapterId}`);
  };

  return (
    <div className={styles.bible}>
      {books.length > 0 ? (
        <>
          <div className={styles.books}>
            {books.map((book) => (
              <div
                className={styles.book}
                key={book.id}
                ref={(el) => (bookRefs.current[book.id] = el)}
                onClick={() => handleBookSelect(book.id)}
              >
                <span
                  className={
                    isChapterVisible && selectedBook === book.id
                      ? `${styles.bookLink} ${styles.active}`
                      : styles.bookLink
                  }
                >
                  <span>{book.name}</span>
                  {
                    <i
                      className={"fa-solid fa-chevron-down"}
                      style={{
                        transform:
                          isChapterVisible && selectedBook === book?.id
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                    ></i>
                  }
                </span>
                {selectedBook === book?.id && chapters.length > 0 && (
                  <div
                    className={`${styles.chapters} ${
                      isRendered ? styles.rendered : ""
                    } ${isVisible ? styles.visible : ""}`}
                  >
                    {chapters
                      .filter((chapter) => chapter.number !== "intro")
                      .map((chapter, index) => (
                        <div
                          className={styles.chapter}
                          key={`${selectedBook}-${chapter.id}-${index}`}
                          onClick={() => handleChapterSelect(chapter.number)}
                        >
                          <span>{chapter.number}</span>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      ) : error ? (
        <p className={styles.error}>Error: {error}</p>
      ) : isLoading ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        <p className={styles.noBooks}>No books available</p>
      )}
    </div>
  );
}
