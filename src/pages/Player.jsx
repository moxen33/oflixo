import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_KEY = "b38b5d2488900bc64d56b9e177fc20df";
const BASE_URL = "https://api.themoviedb.org/3";

export default function Player() {
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

      <div style={{ marginTop: "20px" }}>
        {/* Placeholder for video player */}
        <div
          style={{
            background: "#222",
            width: "100%",
            maxWidth: "800px",
            height: "450px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#888",
            borderRadius: "8px",
          }}
        >
          Video Player Placeholder
        </div>

        <p style={{ marginTop: "20px", maxWidth: "800px" }}>{item.overview}</p>

        <p>
          <strong>Rating:</strong> {item.vote_average}
        </p>
        <p>
          <strong>Release Date:</strong> {item.release_date || item.first_air_date}
        </p>
      </div>
    </div>
  );
}