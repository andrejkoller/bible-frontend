import { useNavigate, useLocation, Link } from "react-router";
import styles from "./header.module.css";
import { headerTitles } from "../../configs/header-config";
import { useBible } from "../../hooks/use-bible";

export const Header = () => {
  const { selectedBible, selectedBook, selectedChapter } = useBible();
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToBibles = () => {
    navigate("/");
  };

  const navigateToBooks = () => {
    navigate(`/${selectedBible?.id}`);
  };

  const showBibleControls =
    (location.pathname.startsWith(`/${selectedBible?.id}`) ||
      location.pathname === "/") &&
    !location.pathname.includes("/search");

  return (
    <div className={styles.header}>
      {showBibleControls && (
        <div className={styles.controls}>
          <div className={styles.book} onClick={navigateToBooks}>
            {selectedBook && selectedChapter ? (
              <>
                {selectedBook} {selectedChapter}
              </>
            ) : (
              "Select Book and Chapter"
            )}
          </div>
          <div className={styles.translation} onClick={navigateToBibles}>
            {selectedBible?.id ? selectedBible?.abbreviation : ""}
          </div>
        </div>
      )}

      <div className={styles.headerTitle}>
        {headerTitles[location.pathname] ? (
          <h2>{headerTitles[location.pathname]}</h2>
        ) : location.pathname.includes("/search") ? (
          <h2>Search</h2>
        ) : null}
      </div>

      <div className={styles.navLinks}>
        <Link className={styles.searchLink} to={`/${selectedBible?.id}/search`}>
          <i className="fa-solid fa-magnifying-glass" />
        </Link>
        <Link className={styles.settingsLink} to="/settings">
          <i className="fa-solid fa-gear" />
        </Link>
      </div>
    </div>
  );
};
