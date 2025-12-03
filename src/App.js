import Footer from "./components/footer";
import Bible from "./components/pages/bible/bible";
import About from "./components/pages/about";
import Home from "./components/pages/home";
import More from "./components/pages/more";
import Developers from "./components/pages/developers";
import Help from "./components/pages/help";
import "./App.css";
import { Routes, Route, useLocation } from "react-router";
import Settings from "./components/pages/settings/settings";
import Theme from "./components/pages/settings/theme";
import { useTheme } from "./hooks/use-theme";
import FontSize from "./components/pages/settings/font-size";
import Language from "./components/pages/settings/language";
import { useLanguage } from "./hooks/use-language";
import Chapter from "./components/pages/bible/chapter";
import Header from "./components/header";
import Translations from "./components/pages/bible/translations";
import TranslationLanguage from "./components/pages/translation-language";

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
            <Route path="/bible-language" element={<TranslationLanguage />} />
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
