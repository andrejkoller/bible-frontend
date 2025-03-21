import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-content">
          <div className="home-link">
            <Link to="/home">
              <i className="fa-solid fa-house"></i>
              <p>Home</p>
            </Link>
          </div>
          <div className="bible-link">
            <Link to="/">
              <i className="fa-solid fa-book-bible"></i>
              <p>Bible</p>
            </Link>
          </div>
          <div className="menu-link">
            <Link to="/more">
              <i className="fa-solid fa-bars"></i>
              <p>More</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
