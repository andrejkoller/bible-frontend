import { useNavigate } from "react-router";
import { useBible } from "../../../hooks/use-bible";
import { useFontSize } from "../../../hooks/use-font-size";

const Chapter = () => {
  const {
    chapters,
    verses,
    selectedBible,
    selectedBook,
    selectedChapter,
    setSelectedChapter,
  } = useBible();
  const navigate = useNavigate();
  useFontSize();
  const filteredChapters = chapters.slice(1);

  const handleChapterChange = async (direction) => {
    if (direction) {
      let newChapter = parseInt(selectedChapter);

      if (direction === "next") {
        newChapter += 1;
      } else {
        newChapter -= 1;
      }

      setSelectedChapter(newChapter);
      navigate(`/${selectedBible.id}/${selectedBook}/${newChapter}`);
    }
  };

  return (
    <div className="chapter-container">
      <div className="chapter-content">
        {selectedBook && selectedChapter && (
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
                  {selectedChapter > 1 && (
                    <i className="fa-solid fa-chevron-left"></i>
                  )}
                </div>
              </div>
              <div className="chapter-nav">
                <div onClick={() => handleChapterChange("next")}>
                  {selectedChapter < filteredChapters.length && (
                    <i className="fa-solid fa-chevron-right"></i>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chapter;
