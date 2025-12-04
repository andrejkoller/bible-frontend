import { useTheme } from "../../../hooks/use-theme";

const Theme = () => {
  const { theme, setLightTheme, setDarkTheme } = useTheme();

  return (
    <div className="theme-container">
      <div className="theme-content">
        <div className="theme-title">
          <h3>Match Device Setting</h3>
        </div>
        <div className="theme-list">
          <div className="theme-item" onClick={setLightTheme}>
            <span>Off</span>
            {theme === "light" && <i className="fa-solid fa-check"></i>}
          </div>
          <div className="theme-item" onClick={setDarkTheme}>
            <span>On</span>
            {theme === "dark" && <i className="fa-solid fa-check"></i>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
