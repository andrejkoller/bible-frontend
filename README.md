## Short description

A modern, responsive Bible reading application built with React that provides access to multiple Bible translations in various languages. Features a clean, customizable interface designed for enhanced scripture study and reading experience.

## ✨ Features

- Multiple Translations: Access various Bible translations across different languages
- Language Support: Read scripture in your preferred language
- Customizable Reading Experience:
  - Light and dark theme support
  - Adjustable font sizes (10pt - 30pt)
  - Responsive design optimized for mobile devices (max-width: 425px)
- Intuitive Navigation:
  - Browse books and chapters with smooth animations
  - Quick chapter navigation with prev/next controls
  - Persistent reading position (saves your last selected book and chapter)
- Clean UI: Modern interface with smooth transitions and hover effects

## 🛠️ Technologies Used

- React 19.0.0 - Frontend framework
- React Router 7.3.0 - Navigation and routing
- Material-UI 6.4.7 - UI components and icons
- Scripture API - Bible content and translations
- Custom Hooks - State management for theme, font size, language, and Bible data

## 📋 Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn package manager

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/andrejkoller/bible-frontend.git
cd bible-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your Scripture API credentials:

```env
REACT_APP_BASE_URL="https://api.scripture.api.bible/v1"
REACT_APP_API_KEY="your-api-key-here"
```

4. Start the development server:

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 🔑 Getting an API Key

This application uses the [Scripture API](https://scripture.api.bible/). To get your free API key:

1. Visit [https://scripture.api.bible/](https://scripture.api.bible/)
2. Sign up for a free account
3. Generate your API key
4. Add it to your `.env.local` file

## 📸 Screenshots
