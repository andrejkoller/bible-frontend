import { useEffect, useRef, useState } from "react";
import { useBible } from "../../../hooks/use-bible";
import { useNavigate } from "react-router-dom";

const Bible = () => {
  const {
    books,
    chapters,
    selectedBook,
    selectedBible,
    setSelectedBook,
    setSelectedChapter,
    isChaptersVisible,
    setIsChaptersVisible,
    isLoading,
    error,
  } = useBible();
  const navigate = useNavigate();
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const bookRefs = useRef({});

  useEffect(() => {
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

  const handleBookSelect = async (bookId) => {
    if (selectedBook === bookId) {
      setSelectedBook("");
      setSelectedChapter("");
      setIsChaptersVisible(false);
    } else {
      setIsRendered(true);
      setSelectedBook(bookId);
      setIsChaptersVisible(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 10);
    }
  };

  const handleChapterSelect = async (chapterId) => {
    setSelectedChapter(chapterId);
    navigate(`/${selectedBible.id}/${selectedBook}/${chapterId}`);
  };

  return (
    <div className="bible-container">
      <div className="bible-content">
        <div className="book-content">
          {books.length > 0 ? (
            <>
              <div className="books">
                {books.map((book) => (
                  <div
                    className="book"
                    key={book.id}
                    ref={(el) => (bookRefs.current[book.id] = el)}
                    onClick={() => handleBookSelect(book.id)}
                  >
                    <span
                      className={
                        !isChaptersVisible && selectedBook === book.id
                          ? "book-link active"
                          : "book-link"
                      }
                    >
                      <span>{book.name}</span>
                      {
                        <i
                          className={"fa-solid fa-chevron-down"}
                          style={{
                            transform:
                              isChaptersVisible && selectedBook === book?.id
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                          }}
                        ></i>
                      }
                    </span>
                    <div className="chapter-content">
                      {selectedBook === book?.id && chapters.length > 0 && (
                        <div
                          className={`chapters ${
                            isRendered ? "rendered" : ""
                          } ${isVisible ? "visible" : ""}`}
                        >
                          {chapters
                            .filter((chapter) => chapter.number !== "intro")
                            .map((chapter, index) => (
                              <div
                                className="chapter"
                                key={`${selectedBook}-${chapter.id}-${index}`}
                                onClick={() =>
                                  handleChapterSelect(chapter.number)
                                }
                              >
                                <span>{chapter.number}</span>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : error ? (
            <p style={{ textAlign: "center", color: "red" }}>Error: {error}</p>
          ) : isLoading ? (
            <p style={{ textAlign: "center" }}>Loading...</p>
          ) : (
            <p style={{ textAlign: "center" }}>No books available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bible;
