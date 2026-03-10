import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./home.module.css";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <div className={styles.introduction}>
        <h1>BibleVersion</h1>
        <p>
          The Bible is a collection of religious texts or scriptures sacred to
          Christians. Dive into the Bible and start reading today.
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Button variant="contained" onClick={() => navigate("/")}>
          Start your journey
        </Button>
      </div>
    </div>
  );
}
