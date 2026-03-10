import { Link } from "react-router";
import styles from "./footer.module.css";
import { footerConfig } from "../../configs/footer-config";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      {footerConfig.links.map((item) => (
        <Link key={item.name} to={item.path} className={styles.footerLink}>
          <i className={item.icon}></i>
          <p>{item.name}</p>
        </Link>
      ))}
    </div>
  );
};
