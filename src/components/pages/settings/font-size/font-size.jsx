import { useFontSize } from "../../../../hooks/use-font-size";
import styles from "./font-size.module.css";

export default function FontSizePage() {
  const {
    fontSize,
    setFontSize10,
    setFontSize12,
    setFontSize14,
    setFontSize16,
    setFontSize18,
    setFontSize20,
    setFontSize22,
    setFontSize24,
    setFontSize26,
    setFontSize28,
    setFontSize30,
  } = useFontSize();

  return (
    <div className={styles.fontSize}>
      <div className={styles.fontSizeItem} onClick={setFontSize10}>
        <span>10pt</span>
        {fontSize === "10" && <i className="fa-solid fa-check"></i>}
      </div>
      <div className={styles.fontSizeItem} onClick={setFontSize12}>
        <span>12pt</span>
        {fontSize === "12" && <i className="fa-solid fa-check"></i>}
      </div>
      <div className={styles.fontSizeItem} onClick={setFontSize14}>
        <span>14pt</span>
        {fontSize === "14" && <i className="fa-solid fa-check"></i>}
      </div>
      <div className={styles.fontSizeItem} onClick={setFontSize16}>
        <span>16pt</span>
        {fontSize === "16" && <i className="fa-solid fa-check"></i>}
      </div>
      <div className={styles.fontSizeItem} onClick={setFontSize18}>
        <span>18pt</span>
        {fontSize === "18" && <i className="fa-solid fa-check"></i>}
      </div>
      <div className={styles.fontSizeItem} onClick={setFontSize20}>
        <span>20pt</span>
        {fontSize === "20" && <i className="fa-solid fa-check"></i>}
      </div>
      <div className={styles.fontSizeItem} onClick={setFontSize22}>
        <span>22pt</span>
        {fontSize === "22" && <i className="fa-solid fa-check"></i>}
      </div>
      <div className={styles.fontSizeItem} onClick={setFontSize24}>
        <span>24pt</span>
        {fontSize === "24" && <i className="fa-solid fa-check"></i>}
      </div>
      <div className={styles.fontSizeItem} onClick={setFontSize26}>
        <span>26pt</span>
        {fontSize === "26" && <i className="fa-solid fa-check"></i>}
      </div>
      <div className={styles.fontSizeItem} onClick={setFontSize28}>
        <span>28pt</span>
        {fontSize === "28" && <i className="fa-solid fa-check"></i>}
      </div>
      <div className={styles.fontSizeItem} onClick={setFontSize30}>
        <span>30pt</span>
        {fontSize === "30" && <i className="fa-solid fa-check"></i>}
      </div>
    </div>
  );
}
