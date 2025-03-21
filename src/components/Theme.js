import { useTheme } from "../hooks/useTheme";

const Theme = () => {
  const { theme, setLightTheme, setDarkTheme } = useTheme();

  return (
    <div className="theme-container">
      <div className="theme-content">
        <div>
          <h3>Match Device Setting</h3>
        </div>
        <div>
          <div className="theme-item" onClick={setLightTheme}>
            <span>Off</span>
            {theme === "light-theme" && <i className="fa-solid fa-check"></i>}
          </div>
          <div className="theme-item" onClick={setDarkTheme}>
            <span>On</span>
            {theme === "dark-theme" && <i className="fa-solid fa-check"></i>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
