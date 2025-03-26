import { useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
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
    <div className="header-container">
      {location.pathname.startsWith(`/${selectedBible?.id}`) && (
        <>
          <div className="book-translation">
            <div className="book" onClick={() => navigateToBooks()}>
              {selectedBook && selectedChapter ? (
                <>
                  {selectedBook} {selectedChapter}
                </>
              ) : (
                <span>Select a book and chapter</span>
              )}
            </div>
            <div className="translation" onClick={() => navigate("/")}>
              {selectedBible?.id
                ? selectedBible?.abbreviation
                : "Select a Translation"}
            </div>
          </div>
          <div className="header-settings">
            <i
              className="fa-solid fa-cog"
              onClick={() => navigate("/settings")}
            ></i>
          </div>
        </>
      )}

      {location.pathname === "/more" && (
        <div className="header-title">
          <h2>More</h2>
        </div>
      )}

      {location.pathname === "/" && (
        <>
          <div className="book-translation">
            <div className="book" onClick={() => navigateToBooks()}>
              {selectedBook && selectedChapter ? (
                <>
                  {selectedBook} {selectedChapter}
                </>
              ) : (
                <span>Select a book and chapter</span>
              )}
            </div>
            <div className="translation" onClick={() => navigate("/")}>
              {selectedBible?.id
                ? selectedBible?.abbreviation
                : "Select a Translation"}
            </div>
          </div>
          <div className="header-settings">
            <i
              className="fa-solid fa-cog"
              onClick={() => navigate("/settings")}
            ></i>
          </div>
        </>
      )}

      {location.pathname !== "/" &&
        location.pathname !== "/more" &&
        !location.pathname.startsWith(`/${selectedBible?.id}`) && (
          <div className="header-s-container">
            {![
              "/",
              `/${selectedBible?.id}`,
              `/${selectedBible?.id}/${selectedBook}`,
              `/${selectedBible?.id}/${selectedBook}/${selectedChapter}`,
            ].includes(prevPathRef.current) &&
              ["/about", "/developers", "/help", "/settings"].includes(
                location.pathname
              ) &&
              location.pathname && (
                <Link className="header-back" to={"/more"}>
                  <i className="fa-solid fa-chevron-left"></i>
                  <p>More</p>
                </Link>
              )}
            {[
              "/",
              `/${selectedBible?.id}`,
              `/${selectedBible?.id}/${selectedBook}`,
              `/${selectedBible?.id}/${selectedBook}/${selectedChapter}`,
            ].includes(prevPathRef.current) && (
              <Link className="header-back" to={`${prevPathRef.current}`}>
                <i className="fa-solid fa-chevron-left"></i>
                <p>Bible</p>
              </Link>
            )}
            {[
              "/settings/language",
              "/settings/theme",
              "/settings/font",
            ].includes(location.pathname) && (
              <Link className="header-back" to={"/settings"}>
                <i className="fa-solid fa-chevron-left"></i>
                <p>Settings</p>
              </Link>
            )}

            <div className="header-s-title">
              {location.pathname === "/about" && <h2>About</h2>}
              {location.pathname === "/developers" && <h2>Developers</h2>}
              {location.pathname === "/help" && <h2>Help</h2>}
              {location.pathname === "/settings" && <h2>Settings</h2>}
              {location.pathname === "/settings/language" && <h2>Language</h2>}
              {location.pathname === "/settings/theme" && <h2>Low Light</h2>}
              {location.pathname === "/settings/font" && <h2>Font Size</h2>}
            </div>
          </div>
        )}
    </div>
  );
};

export default Header;
