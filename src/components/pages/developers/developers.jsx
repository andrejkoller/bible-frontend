import styles from "./developers.module.css";

export default function DevelopersPage() {
  return (
    <div className={styles.developers}>
      <div className={styles.developersDescription}>
        <p>
          This Bible reading app was built using React to provide a smooth and
          accessible reading experience for users. The design is optimized for
          readability, with a clean interface and customizable themes (Light and
          Dark Mode).
        </p>
        <p>
          The app uses the Bible API to fetch the text of the Bible in various
          translations. The API is free to use and provides accurate and
          up-to-date versions of the Bible in multiple languages.
        </p>
      </div>
    </div>
  );
};
