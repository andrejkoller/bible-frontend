const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchBibles = async (languageId) => {
  if (!languageId) {
    throw new Error("Language ID is required");
  }

  const response = await fetch(`${BASE_URL}/bibles`, {
    headers: {
      "api-key": API_KEY,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch bibles: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();
  const bibles = data.data.filter((bible) => bible.language.id === languageId);

  return bibles;
};

export const fetchBooks = async (bibleId) => {
  if (!bibleId) {
    throw new Error("Bible ID is required");
  }

  const response = await fetch(`${BASE_URL}/bibles/${bibleId}/books`, {
    headers: {
      "api-key": API_KEY,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch books: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();
  return data.data;
};

export const fetchChapters = async (bibleId, bookId) => {
  if (!bibleId || !bookId) {
    throw new Error("Bible ID and Book ID are required");
  }

  const response = await fetch(
    `${BASE_URL}/bibles/${bibleId}/books/${bookId}/chapters`,
    {
      headers: {
        "api-key": API_KEY,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch chapters: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();
  return data.data;
};

export const fetchVerses = async (bibleId, bookId, chapterId) => {
  if (!bibleId || !bookId || !chapterId) {
    throw new Error("Bible ID, Book ID, and Chapter ID are required");
  }

  const response = await fetch(
    `${BASE_URL}/bibles/${bibleId}/chapters/${bookId}.${chapterId}?content-type=json`,
    {
      headers: {
        "api-key": API_KEY,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch verses: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();

  if (!data.data?.content) {
    return [];
  }

  const verses = data.data.content
    .flatMap((item) => item.items || [])
    .filter((item) => item.type === "text")
    .map((item) => item.text);

  return verses;
};
