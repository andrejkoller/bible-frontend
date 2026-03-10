import { Link } from "react-router";
import styles from "./more.module.css";
import { moreConfig } from "../../../configs/more-config";

export default function MorePage() {
  return (
    <div className={styles.more}>
      <div className={styles.moreLinks}>
        {moreConfig.links.map((item) => (
          <Link key={item.name} to={item.path} className={styles.link}>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
