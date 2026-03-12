import BiblePage from "./components/pages/bible/bible";
import AboutPage from "./components/pages/about/about";
import HomePage from "./components/pages/home/home";
import MorePage from "./components/pages/more/more";
import DevelopersPage from "./components/pages/developers/developers";
import HelpPage from "./components/pages/help/help";
import { Routes, Route, useLocation } from "react-router";
import SettingsPage from "./components/pages/settings/settings";
import ThemePage from "./components/pages/settings/theme/theme";
import FontSizePage from "./components/pages/settings/font-size/font-size";
import LanguagePage from "./components/pages/settings/language/language";
import ChapterPage from "./components/pages/bible/chapter/chapter";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import TranslationsPage from "./components/pages/bible/translations/translations";
import TranslationLanguagePage from "./components/pages/translation-language/translation-language";
import SearchPage from "./components/pages/search/search";
import "./App.css";
import "./index.css";

export default function App() {
  const location = useLocation();

  return (
    <>
      <div className="app">
        {location.pathname !== "/home" && <Header />}
        <main className="main">
          <Routes>
            <Route index path="/home" element={<HomePage />} />
            <Route
              path="/bible-language"
              element={<TranslationLanguagePage />}
            />
            <Route path="/" element={<TranslationsPage />} />
            <Route path="/:bibleId" element={<BiblePage />} />
            <Route
              path="/:bibleId/:bookId/:chapterId"
              element={<ChapterPage />}
            />
            <Route path="/more" element={<MorePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/developers" element={<DevelopersPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/:bibleId/search" element={<SearchPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/settings/language" element={<LanguagePage />} />
            <Route path="/settings/theme" element={<ThemePage />} />
            <Route path="/settings/font" element={<FontSizePage />} />
          </Routes>
        </main>
        {location.pathname !== "/home" && <Footer />}
      </div>
    </>
  );
}
