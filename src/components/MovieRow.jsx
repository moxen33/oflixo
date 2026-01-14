import { Link } from "react-router-dom";

export default function MovieRow({ title, items, type }) {
  return (
    <div style={{ marginBottom: "30px" }}>
      <h2 style={{ marginBottom: "10px" }}>{title}</h2>

      <div
        style={{
          display: "flex",
          gap: "12px",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          paddingBottom: "10px",
        }}
      >
        {items.map((item) => (
          <Link
            key={item.id}
            to={`/player/${type}/${item.id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              minWidth: "150px",
              flexShrink: 0,
              scrollSnapAlign: "start",
              transition: "transform 0.2s",
            }}
          >
            <div
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt={item.title || item.name}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
              />
            </div>
            <p
              style={{
                fontSize: "14px",
                marginTop: "6px",
                textAlign: "center",
              }}
            >
              {item.title || item.name}
            </p>
          </Link>
        ))}
      </div>

      {/* Add hover effect via inline style */}
      <style>{`
        a:hover img {
          transform: scale(1.08);
          box-shadow: 0 8px 20px rgba(0,0,0,0.6);
        }
      `}</style>
    </div>
  );
}