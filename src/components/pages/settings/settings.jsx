import { Link } from "react-router";
import styles from "./settings.module.css";
import { settingsConfig } from "../../../configs/settings-config";

export default function SettingsPage() {
  return (
    <div className={styles.settings}>
      {Object.entries(settingsConfig).map(([section, { title, items }]) => (
        <div key={section} className={styles.section}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          <div className={styles.sectionLinks}>
            {items.map((item) => (
              <Link key={item.name} to={item.path} className={styles.link}>
                <span>{item.name}</span>
                <i className="fa-solid fa-chevron-right" />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
