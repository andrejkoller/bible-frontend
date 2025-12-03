import { Link } from "react-router";

const More = () => {
  return (
    <div className="more-container">
      <div className="more-content">
        <div>
          <Link className="more-item" to={"/"}>
            <i className="fa-solid fa-book-bible"></i>
            <span>Read Bible</span>
          </Link>
        </div>
        <div>
          <Link className="more-item" to={"/about"}>
            <i className="fa-solid fa-circle-info"></i>
            <span>About</span>
          </Link>
          <Link className="more-item" to={"/developers"}>
            <i className="fa-solid fa-code"></i>
            <span>Developers</span>
          </Link>
          <Link className="more-item" to={"/help"}>
            <i className="fa-solid fa-circle-question"></i>
            <span>Help</span>
          </Link>
          <Link className="more-item" to={"/settings"}>
            <i className="fa-solid fa-cog"></i>
            <span>Settings</span>
          </Link>
        </div>
        <div>
          <a className="more-item" href="mailto:andrejkoller@outlook.com">
            <i className="fa-solid fa-envelope"></i>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default More;
