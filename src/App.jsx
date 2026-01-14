import { useEffect, useState } from "react";
import { getTrending, getMovies, getSeries, search } from "./services/tmdb";
import MovieRow from "./components/MovieRow";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [trending, setTrending] = useState([]);
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [featured, setFeatured] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch rows
    getTrending().then((data) => {
      setTrending(data.results);
      if (data.results.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        setFeatured(data.results[randomIndex]);
      }
    });
    getMovies().then((data) => setMovies(data.results));
    getSeries().then((data) => setSeries(data.results));
  }, []);

  // Search effect
  useEffect(() => {
    if (query.length > 0) {
      search(query).then((data) => setSearchResults(data.results));
    } else {
      setSearchResults([]);
    }
  }, [query]);

  return (
    <div
      style={{
        background: "#0a0a0a",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <h1
          style={{
            textTransform: "lowercase",
            fontWeight: "700",
            letterSpacing: "1px",
            marginBottom: 0,
          }}
        >
          oflixo
        </h1>

        {/* Search input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies or series..."
          style={{
            padding: "8px 12px",
            borderRadius: "4px",
            border: "none",
            outline: "none",
            width: "250px",
          }}
        />
      </div>

      {/* Show search results if query exists */}
      {query.length > 0 && (
        <div style={{ padding: "0 20px", marginBottom: "30px" }}>
          <MovieRow
            title={`Search Results for "${query}"`}
            items={searchResults}
            type="all"
          />
        </div>
      )}

      {/* Featured Hero Section */}
      {!query && featured && (
        <div
          style={{
            position: "relative",
            height: "450px",
            marginBottom: "30px",
            backgroundImage: `url(https://image.tmdb.org/t/p/original${
              featured.backdrop_path || featured.poster_path
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "20px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to top, rgba(10,10,10,0.9) 20%, rgba(10,10,10,0) 80%)",
            }}
          ></div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>
              {featured.title || featured.name}
            </h2>
            <p style={{ maxWidth: "600px", marginBottom: "20px" }}>
              {featured.overview.length > 200
                ? featured.overview.slice(0, 200) + "..."
                : featured.overview}
            </p>
            <button
              onClick={() =>
                navigate(
                  `/player/${featured.media_type || "all"}/${featured.id}`
                )
              }
              style={{
                padding: "10px 20px",
                background: "#1db954",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              ▶ Play
            </button>
          </div>
        </div>
      )}

      {/* Rows */}
      {!query && (
        <div style={{ padding: "0 20px" }}>
          <MovieRow title="Trending Now" items={trending} type="all" />
          <MovieRow title="Movies" items={movies} type="movie" />
          <MovieRow title="Series" items={series} type="tv" />
        </div>
      )}
    </div>
  );
}