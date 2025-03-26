import { useBible } from "../hooks/useBible";
import { useNavigate } from "react-router-dom";

const Bible = () => {
  const {
    books,
    chapters,
    selectedBook,
    selectedBible,
    setChapters,
    setSelectedBook,
    setSelectedChapter,
    isChaptersVisible,
    setIsChaptersVisible,
  } = useBible();
  const navigate = useNavigate();
  let storedBook = JSON.parse(localStorage.getItem("selectedBook"));

  const handleBookSelect = async (bookId) => {
    if (selectedBook === bookId) {
      setSelectedBook("");
      setChapters([]);
      setSelectedChapter("");
      setIsChaptersVisible(false);
    } else {
      setSelectedBook(bookId);
      setIsChaptersVisible(true);
    }
  };

  const handleChapterSelect = async (chapterId) => {
    setSelectedChapter(chapterId);
    localStorage.setItem("selectedChapter", chapterId);
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
                    onClick={() => handleBookSelect(book.id)}
                  >
                    <span
                      className={
                        !isChaptersVisible && storedBook === book.id
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
                    <div
                      className="chapter-content"
                      style={{
                        transform:
                          isChaptersVisible && selectedBook === book?.id
                            ? "scaleY(1)"
                            : "scaleY(0)",
                        display:
                          isChaptersVisible && selectedBook === book?.id
                            ? "block"
                            : "none",
                        transformOrigin: "top",
                        transition:
                          "display 0.3s ease-out, transform 0.5s ease-out",
                      }}
                    >
                      {selectedBook === book?.id && chapters.length > 0 && (
                        <div className="chapters">
                          {chapters.slice(1).map((chapter, index) => (
                            <div
                              className="chapter"
                              key={`${selectedBook}-${chapter}-${index}`}
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
          ) : (
            <p style={{ textAlign: "center" }}>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bible;
