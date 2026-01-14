import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_KEY = "b38b5d2488900bc64d56b9e177fc20df";
const BASE_URL = "https://api.themoviedb.org/3";

export default function Details() {
  const { type, id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/${type}/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [type, id]);

  if (!item) return <p style={{ color: "#fff", padding: "20px" }}>Loading...</p>;

  return (
    <div
      style={{
        padding: "20px",
        background: "#0f0f0f",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <Link to="/" style={{ color: "#1db954", textDecoration: "none" }}>
        ← Back
      </Link>

      <h1 style={{ marginTop: "20px" }}>{item.title || item.name}</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt={item.title || item.name}
          style={{ width: "300px", borderRadius: "8px" }}
        />

        <div style={{ maxWidth: "600px" }}>
          <p>{item.overview}</p>
          <p>
            <strong>Rating:</strong> {item.vote_average}
          </p>
          <p>
            <strong>Release Date:</strong> {item.release_date || item.first_air_date}
          </p>
        </div>
      </div>
    </div>
  );
}