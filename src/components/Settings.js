import { Link } from "react-router";

const Settings = () => {
  return (
    <div className="settings-container">
      <div className="settings-content">
        <div className="settings-general">
          <div className="settings-subtitle">
            <h3>General</h3>
          </div>
          <div className="settings-item-container">
            <Link className="settings-item" to={"/settings/language"}>
              <span>Language</span>
              <i className="fa-solid fa-chevron-right"></i>
            </Link>
            <Link className="settings-item" to={"/settings/theme"}>
              <span>Low Light</span>
              <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </div>
        </div>
        <div className="settings-bible">
          <div className="settings-subtitle">
            <h3>Bible Reading</h3>
          </div>
          <div className="settings-item-container">
            <Link className="settings-item" to={"/settings/font"}>
              <span>Font Size</span>
              <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
