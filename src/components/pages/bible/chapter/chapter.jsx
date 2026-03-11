import { useNavigate, useParams } from "react-router";
import { useBible } from "../../../../hooks/use-bible";
import { useFontSize } from "../../../../hooks/use-font-size";
import { fetchChapters, fetchVerses } from "../../../../services/bible-service";
import * as React from "react";
import styles from "./chapter.module.css";

export default function ChapterPage() {
  const { fontSize } = useFontSize();
  const { bibleId, bookId, chapterId } = useParams();
  const {
    chapters,
    setChapters,
    verses,
    setVerses,
    selectedBible,
    selectedBook,
    selectedChapter,
    setSelectedBible,
    setSelectedBook,
    setSelectedChapter,
    isLoading,
    setIsLoading,
    error,
    setError,
  } = useBible();
  const navigate = useNavigate();
  const filteredChapters = chapters.filter(
    (chapter) => chapter.number !== "intro",
  );

  React.useEffect(() => {
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

  React.useEffect(() => {
    if (!bibleId || !bookId) return;

    fetchChapters(bibleId, bookId)
      .then(setChapters)
      .catch((err) => setError(err.message));
  }, [bibleId, bookId, setChapters, setError]);

  React.useEffect(() => {
    if (!bibleId || !bookId || !chapterId) return;

    setIsLoading(true);
    setError(null);

    fetchVerses(bibleId, bookId, chapterId)
      .then(setVerses)
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [bibleId, bookId, chapterId, setVerses, setIsLoading, setError]);

  const handleChapterChange = (direction) => {
    const currentIndex = filteredChapters.findIndex(
      (ch) => ch.number === selectedChapter,
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
    <div className={styles.chapter}>
      {error ? (
        <p className={styles.error}>Error: {error}</p>
      ) : isLoading ? (
        <p className={styles.loading}>Loading...</p>
      ) : selectedBook && selectedChapter && verses.length > 0 ? (
        <>
          <div className={styles.chapters}>
            <div
              className={styles.verses}
              style={{ fontSize: `${fontSize}px` }}
            >
              {verses.map((verse, index) => (
                <div key={`${verse}-${index}`} className={styles.verse}>
                  <span className={styles.verseNumber}>{index + 1}</span>
                  <span className={styles.verseText}>{verse}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.chapterNavigation}>
            {filteredChapters.findIndex((ch) => ch.number === selectedChapter) >
              0 && (
              <div
                className={styles.prev}
                onClick={() => handleChapterChange("prev")}
              >
                <i className="fa-solid fa-chevron-left"></i>
              </div>
            )}
            {filteredChapters.findIndex((ch) => ch.number === selectedChapter) <
              filteredChapters.length - 1 && (
              <div
                className={styles.next}
                onClick={() => handleChapterChange("next")}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            )}
          </div>
        </>
      ) : (
        <p className={styles.noVerses}>No verses available</p>
      )}
    </div>
  );
}
