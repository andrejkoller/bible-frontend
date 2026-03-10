import { Link } from "react-router";
import styles from "./settings.module.css";

export default function SettingsPage() {
  return (
    <div className={styles.settings}>
      <div className={styles.settingsGeneral}>
        <div className={styles.settingsTitle}>
          <h3>General</h3>
        </div>
        <Link className={styles.link} to={"/settings/language"}>
          <span>Language</span>
          <i className="fa-solid fa-chevron-right"></i>
        </Link>
        <Link className={styles.link} to={"/settings/theme"}>
          <span>Low Light</span>
          <i className="fa-solid fa-chevron-right"></i>
        </Link>
      </div>
      <div className={styles.settingsBible}>
        <div className={styles.settingsTitle}>
          <h3>Bible Reading</h3>
        </div>
        <Link className={styles.link} to={"/settings/font"}>
          <span>Font Size</span>
          <i className="fa-solid fa-chevron-right"></i>
        </Link>
      </div>
    </div>
  );
}
