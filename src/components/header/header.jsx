import { useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import styles from "./header.module.css";

export const Header = () => {
  const selectedBible = JSON.parse(localStorage.getItem("selectedBible"));
  let selectedBook = JSON.parse(localStorage.getItem("selectedBook"));
  let selectedChapter = JSON.parse(localStorage.getItem("selectedChapter"));
  const navigate = useNavigate();
  const location = useLocation();
  const prevPathRef = useRef();

  useEffect(() => {
    prevPathRef.current = location.pathname;
  }, [location.pathname]);

  const navigateToBooks = () => {
    navigate(`/${selectedBible?.id}`);
  };

  return (
    <div className={styles.header}>
      {location.pathname.startsWith(`/${selectedBible?.id}`) && (
        <>
          <div className={styles.book} onClick={() => navigateToBooks()}>
            {selectedBook && selectedChapter ? (
              <>
                {selectedBook} {selectedChapter}
              </>
            ) : (
              <span>Select a book and chapter</span>
            )}
          </div>
          <div className={styles.translation} onClick={() => navigate("/")}>
            {selectedBible?.id
              ? selectedBible?.abbreviation
              : "Select a Translation"}
          </div>
        </>
      )}

      {location.pathname === "/" && (
        <>
          <div className={styles.book} onClick={() => navigateToBooks()}>
            {selectedBook && selectedChapter ? (
              <>
                {selectedBook} {selectedChapter}
              </>
            ) : (
              <span>Select a book and chapter</span>
            )}
          </div>
          <div className={styles.translation} onClick={() => navigate("/")}>
            {selectedBible?.id
              ? selectedBible?.abbreviation
              : "Select a Translation"}
          </div>
        </>
      )}

      <div className={styles.headerTitle}>
        {location.pathname === "/bible-language" && <h2>Bible Language</h2>}
        {location.pathname === "/more" && <h2>More</h2>}
        {location.pathname === "/about" && <h2>About</h2>}
        {location.pathname === "/developers" && <h2>Developers</h2>}
        {location.pathname === "/help" && <h2>Help</h2>}
        {location.pathname === "/settings" && <h2>Settings</h2>}
        {location.pathname === "/settings/language" && <h2>Language</h2>}
        {location.pathname === "/settings/theme" && <h2>Low Light</h2>}
        {location.pathname === "/settings/font" && <h2>Font Size</h2>}
      </div>
    </div>
  );
};
