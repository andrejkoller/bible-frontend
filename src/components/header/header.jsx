import { useNavigate, useLocation } from "react-router";
import styles from "./header.module.css";
import { headerTitles } from "../../configs/header-config";
import { useBible } from "../../hooks/use-bible";

export const Header = () => {
  const { selectedBible, selectedBook, selectedChapter } = useBible();
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToBooks = () => {
    navigate(`/${selectedBible?.id}`);
  };

  const showBibleControls =
    location.pathname.startsWith(`/${selectedBible?.id}`) ||
    location.pathname === "/";

  return (
    <div className={styles.header}>
      {showBibleControls && (
        <>
          <div className={styles.book} onClick={navigateToBooks}>
            {selectedBook && selectedChapter ? (
              <>
                {selectedBook} {selectedChapter}
              </>
            ) : (
              <span>Select book and chapter</span>
            )}
          </div>
          <div className={styles.translation} onClick={() => navigate("/")}>
            {selectedBible?.id
              ? selectedBible?.abbreviation
              : "Select Translation"}
          </div>
        </>
      )}

      <div className={styles.headerTitle}>
        {headerTitles[location.pathname] && (
          <h2>{headerTitles[location.pathname]}</h2>
        )}
      </div>
    </div>
  );
};
