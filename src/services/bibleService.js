const BASE_URL = "https://api.scripture.api.bible/v1";
const API_KEY = "0e291c855b4e948675a6d4f5f7e90ce3";

export const fetchBibles = async () => {
  try {
    const response = await fetch(`${BASE_URL}/bibles`, {
      headers: { "api-key": API_KEY },
    });

    if (!response.ok) {
      throw new Error("Error retrieving bibles");
    }

    const data = await response.json();
    const bibles = data.data.filter((bible) => bible.language.id === "eng");

    return bibles;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchBooks = async (bibleId) => {
  try {
    const response = await fetch(`${BASE_URL}/bibles/${bibleId}/books`, {
      headers: { "api-key": API_KEY },
    });

    if (!response.ok) {
      throw new Error("Error retrieving books");
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchChapters = async (bibleId, bookId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/bibles/${bibleId}/books/${bookId}/chapters`,
      {
        headers: { "api-key": API_KEY },
      }
    );

    if (!response.ok) {
      throw new Error("Error retrieving chapters");
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchVerses = async (bibleId, bookId, chapterId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/bibles/${bibleId}/chapters/${bookId}.${chapterId}?content-type=json`,
      {
        headers: { "api-key": API_KEY },
      }
    );

    if (!response.ok) {
      throw new Error("Error retrieving verses");
    }
    const data = await response.json();
    const verses = data.data.content
      .flatMap((item) => item.items)
      .filter((item) => item.type === "text")
      .map((item) => item.text);

    return verses;
  } catch (error) {
    console.error(error);
    return [];
  }
};
