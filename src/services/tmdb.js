const API_KEY = "b38b5d2488900bc64d56b9e177fc20df";
const BASE_URL = "https://api.themoviedb.org/3";

// Fetch trending (movies + series)
export async function getTrending() {
  const res = await fetch(
    `${BASE_URL}/trending/all/week?api_key=${API_KEY}`
  );
  return res.json();
}

// Fetch only movies
export async function getMovies() {
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}`
  );
  return res.json();
}

// Fetch only series
export async function getSeries() {
  const res = await fetch(
    `${BASE_URL}/discover/tv?api_key=${API_KEY}`
  );
  return res.json();
}

// Search movies or series by query
export async function search(query) {
  if (!query) return { results: [] };

  const res = await fetch(
    `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  return res.json();
}