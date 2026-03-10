import { Link } from "react-router";
import styles from "./about.module.css";
import { aboutConfig } from "../../../configs/about-config";

export default function AboutPage() {
  return (
    <div className={styles.about}>
      <h3>BibleVersion</h3>
      <div className={styles.aboutDescription}>
        <p>
          We would like to thank the publishers, partners, volunteers, and
          donors who make it possible for the Bible to be freely distributed to
          all who long to read it. We are grateful for their generosity and
          dedication to the mission of making the Bible available to everyone.
        </p>
      </div>
      <div className={styles.aboutSocials}>
        {aboutConfig.socials.map((item) => (
          <Link
            key={item.name}
            to={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <span>{item.name}</span>
            <i className="fa-solid fa-chevron-right"></i>
          </Link>
        ))}
      </div>
      <div className={styles.aboutCta}>
        {aboutConfig.cta.map((item) => (
          <Link key={item.name} to={item.link} className={styles.link}>
            <span>{item.name}</span>
            <i className="fa-solid fa-chevron-right"></i>
          </Link>
        ))}
      </div>
    </div>
  );
}
