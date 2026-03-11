const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const headers = {
  "api-key": API_KEY,
  "Content-Type": "application/json",
};

const fetchFromApi = async (url) => {
  const response = await fetch(url, { headers });

  if (!response.ok)
    throw new Error(`API Error: ${response.status} ${response.statusText}`);

  console.log(`API response from ${url}:`, response);

  const data = await response.json();
  return data.data;
};

export const fetchBibles = async (languageId) => {
  if (!languageId) throw new Error("Language ID is required");

  return fetchFromApi(`${BASE_URL}/bibles`).then((bibles) =>
    bibles.filter((bible) => bible.language.id === languageId),
  );
};

export const fetchBooks = async (bibleId) => {
  if (!bibleId) throw new Error("Bible ID is required");

  return fetchFromApi(`${BASE_URL}/bibles/${bibleId}/books`);
};

export const fetchChapters = async (bibleId, bookId) => {
  if (!bibleId || !bookId) throw new Error("Bible ID and Book ID are required");

  return fetchFromApi(`${BASE_URL}/bibles/${bibleId}/books/${bookId}/chapters`);
};

export const fetchVerses = async (bibleId, bookId, chapterId) => {
  if (!bibleId || !bookId || !chapterId)
    throw new Error("Bible ID, Book ID, and Chapter ID are required");

  return fetchFromApi(
    `${BASE_URL}/bibles/${bibleId}/chapters/${bookId}.${chapterId}?content-type=json`,
  ).then((data) => {
    if (!data.content) return [];

    console.log("Raw API response:", data);

    return data.content
      .flatMap((item) => item.items || [])
      .filter((item) => item.type === "text")
      .map((item) => item.text);
  });
};
