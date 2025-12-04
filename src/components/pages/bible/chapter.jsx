import { useNavigate, useParams } from "react-router";
import { useBible } from "../../../hooks/use-bible";
import { useFontSize } from "../../../hooks/use-font-size";
import { useEffect } from "react";

const Chapter = () => {
  const { bibleId, bookId, chapterId } = useParams();
  const {
    chapters,
    verses,
    selectedBible,
    selectedBook,
    selectedChapter,
    setSelectedBible,
    setSelectedBook,
    setSelectedChapter,
    isLoading,
    error,
  } = useBible();
  const navigate = useNavigate();
  useFontSize();
  const filteredChapters = chapters.filter(
    (chapter) => chapter.number !== "intro"
  );

  useEffect(() => {
    if (bibleId && (!selectedBible || selectedBible.id !== bibleId)) {
      setSelectedBible({ id: bibleId });
    }
    if (bookId && selectedBook !== bookId) {
      setSelectedBook(bookId);
    }
    if (chapterId && selectedChapter !== chapterId) {
      setSelectedChapter(chapterId);
    }
  }, [
    bibleId,
    bookId,
    chapterId,
    selectedBible,
    selectedBook,
    selectedChapter,
    setSelectedBible,
    setSelectedBook,
    setSelectedChapter,
  ]);

  const handleChapterChange = async (direction) => {
    const currentIndex = filteredChapters.findIndex(
      (ch) => ch.number === selectedChapter
    );

    if (currentIndex === -1) return;

    let newIndex = currentIndex;
    if (direction === "next" && currentIndex < filteredChapters.length - 1) {
      newIndex = currentIndex + 1;
    } else if (direction === "prev" && currentIndex > 0) {
      newIndex = currentIndex - 1;
    } else {
      return;
    }

    const newChapter = filteredChapters[newIndex].number;
    setSelectedChapter(newChapter);
    navigate(`/${selectedBible.id}/${selectedBook}/${newChapter}`);
  };

  return (
    <div className="chapter-container">
      <div className="chapter-content">
        {error ? (
          <p style={{ textAlign: "center", color: "red" }}>Error: {error}</p>
        ) : isLoading ? (
          <p style={{ textAlign: "center" }}>Loading...</p>
        ) : selectedBook && selectedChapter && verses.length > 0 ? (
          <>
            <div className="chapter">
              <div className="verses">
                {verses.map((verse, index) => (
                  <div key={`${verse}-${index}`} className="verse">
                    <span className="verse-number">{index + 1}</span>
                    <span className="verse-text">{verse}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="chapter-navigation">
              <div className="chapter-nav">
                <div onClick={() => handleChapterChange("prev")}>
                  {filteredChapters.findIndex(
                    (ch) => ch.number === selectedChapter
                  ) > 0 && <i className="fa-solid fa-chevron-left"></i>}
                </div>
              </div>
              <div className="chapter-nav">
                <div onClick={() => handleChapterChange("next")}>
                  {filteredChapters.findIndex(
                    (ch) => ch.number === selectedChapter
                  ) <
                    filteredChapters.length - 1 && (
                    <i className="fa-solid fa-chevron-right"></i>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <p style={{ textAlign: "center" }}>No verses available</p>
        )}
      </div>
    </div>
  );
};

export default Chapter;
