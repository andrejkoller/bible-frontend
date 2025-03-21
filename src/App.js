import Footer from "./components/Footer";
import Bible from "./components/Bible";
import About from "./components/About";
import Home from "./components/Home";
import More from "./components/More";
import Developers from "./components/Developers";
import Help from "./components/Help";
import "./App.css";
import { Routes, Route, useLocation } from "react-router";
import Settings from "./components/Settings";
import Theme from "./components/Theme";
import { useTheme } from "./hooks/useTheme";
import FontSize from "./components/FontSize";
import Language from "./components/Language";
import { useLanguage } from "./hooks/useLanguage";
import Chapter from "./components/Chapter";
import Header from "./components/Header";
import Translations from "./components/Translations";

const App = () => {
  useLanguage();
  useTheme();

  let location = useLocation();

  return (
    <>
      <div className="app">
        {location.pathname !== "/home" && (
          <div className="header">
            <Header></Header>
          </div>
        )}
        <div className="body">
          <Routes>
            <Route index path="/home" element={<Home />} />
            <Route path="/" element={<Translations />} />
            <Route path="/:bibleId" element={<Bible />} />
            <Route path="/:bibleId/:bookId/:chapterId" element={<Chapter />} />
            <Route path="/more" element={<More />} />
            <Route path="/about" element={<About />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/help" element={<Help />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/settings/language" element={<Language />} />
            <Route path="/settings/theme" element={<Theme />} />
            <Route path="/settings/font" element={<FontSize />} />
          </Routes>
        </div>
        {location.pathname !== "/home" && (
          <div className="footer">
            <Footer></Footer>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
