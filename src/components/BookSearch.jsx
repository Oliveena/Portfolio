import { blueGrey } from "@mui/material/colors";
import React, { useState } from "react";

export default function BookSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    const apiKey = "AIzaSyBz1eVKan_8rxl22fXIThv75xcL4Q0yepY";
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setResults(data.items || []);
      setError("");
    } catch (err) {
      setError("Something went wrong while fetching data.");
    }
  };

  return (
    <div className="mt-5 custom-container mx-auto">
      <fieldset className="border p-4 rounded">
        <legend>Search Google Books</legend>
        <div className="mb-3">
          <label htmlFor="bookQuery" className="form-label">Enter Book Title</label>
          <input
            id="bookQuery"
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="text-center mb-3">
          <button className="btn btn-primary w-100" onClick={handleSearch}>Search</button>
        </div>
        {error && <p className="text-danger">{error}</p>}

        <div className="book-container mt-4 row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {results.map((book, idx) => {
            const info = book.volumeInfo;
            return (
              <div key={idx} className="col">
                <div className="border p-3 rounded shadow-sm h-100 bg-white">
                  {info.imageLinks?.thumbnail && (
                    <img
                      src={info.imageLinks.thumbnail}
                      alt={info.title}
                      className="mb-2 img-fluid"
                    />
                  )}
                  <h5>{info.title}</h5>
                  <p><strong>Authors:</strong> {info.authors?.join(", ") || "Unknown"}</p>
                  <p style={{ fontSize: "0.9em"}}>
                    {info.description
                      ? info.description.slice(0, 150) + "..."
                      : "No description available."}
                  </p>
                  <a href={info.infoLink} target="_blank" rel="noopener noreferrer">
                    More Info
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}
