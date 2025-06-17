import React, { useState } from "react";

const books = [
  {
    title: "My Favorite Thing Is Monsters",
    author: "Emil Ferris",
    review: "A haunting and beautifully illustrated story about monsters, both real and imagined...",
  },
  {
    title: "Encabanée",
    author: "Gabrielle Filteau-Chiba",
    review: "A poetic and meditative exploration of solitude in nature, written with raw elegance...",
  },
  {
    title: "Ahab's Wife",
    author: "Sena Jeter Naslund",
    review: "A sweeping historical novel that reimagines the life of Captain Ahab’s wife with depth and grace...",
  },
  {
    title: "The Enchantress of Florence",
    author: "Salman Rushdie",
    review: "A tale of magical realism connecting East and West, rich with storytelling and imagination...",
  },
];

const initialPaintings = [
  { src: "/shared_assets/images/IMG_20210208_090255_351.jpg", alt: "Vlad Dracula as a walrus" },
  { src: "/shared_assets/images/20250111_100225.jpg", alt: "Birth of Venus as walruses" },
  { src: "/shared_assets/images/IMG_20210217_090313_884.jpg", alt: "Girl with a Pearl Earring as a walrus" },
];

const extraPaintings = [
  { src: "/shared_assets/images/20250111_095921.jpg", alt: "Frida Kahlo as a walrus" },
  { src: "/shared_assets/images/IMG_20210131_221746_948.jpg", alt: "Napoleon as a walrus" },
  { src: "/shared_assets/images/20250111_100242.jpg", alt: "Son of Man as a walrus" },
];

export default function Hobbies() {
  const [showMorePaintings, setShowMorePaintings] = useState(false);

  return (
    <div id="content">
      {/* =============== READING REVIEWS =============== */}
      <section className="reading-reviews text-center py-5">
        <h3>Reading Reviews</h3>
        <div className="transparent-background-warm p-4">
          <p>Ana has always been an avid reader. Here are some recent reads.</p>
          <ul className="books list-unstyled">
            {books.map((book, idx) => (
              <li key={idx} className="flip my-3">
                <strong>"{book.title}"</strong> by {book.author}
                <div className="panel mt-2">{book.review}</div>
              </li>
            ))}
          </ul>

          <div className="suggested-books mt-4">
            <p>Books recommended by users</p>
            {/* Table to be added here */}
          </div>

          {/* Book Suggestion Form */}
          <fieldset className="border p-4 rounded mt-4 contact">
            <p>Would you like to suggest a book?</p>
            <form className="mx-auto" style={{ maxWidth: "500px" }}>
              <div className="mb-3">
                <label htmlFor="bookTitle" className="form-label">Book Title</label>
                <input type="text" id="bookTitle" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="bookAuthor" className="form-label">Author</label>
                <input type="text" id="bookAuthor" className="form-control" />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary w-75">Add Book</button>
              </div>
            </form>
          </fieldset>

          {/* Google Book Search */}
          <fieldset className="border p-4 rounded mt-4 contact">
            <p>Searching for a book? Try Google Books API!</p>
            <div className="mb-3">
              <label htmlFor="search" className="form-label">Enter Book Title</label>
              <input type="text" id="search" className="form-control" />
            </div>
            <div className="text-center">
              <button type="button" className="btn btn-primary w-100">Search</button>
            </div>
            <div className="book-container mt-4" id="bookResults">{/* Results here */}</div>
          </fieldset>
        </div>
      </section>

      {/* =============== WATERCOLOR GALLERY =============== */}
      <section className="watercolor-art-gallery py-5">
        <h3 className="text-center">Watercolor Painting</h3>
        <div className="transparent-background-cold p-4">
          <p className="text-center">
            Painting is very relaxing.<br />Here are some of my recent works.
          </p>

          <div className="row row-cols-sm-2 row-cols-md-3 g-4 paintings">
            {initialPaintings.map((img, idx) => (
              <div key={idx} className="col">
                <a href={img.src} target="_blank" rel="noopener noreferrer">
                  <img src={img.src} alt={img.alt} className="img-fluid rounded-3" loading="lazy" />
                </a>
              </div>
            ))}

            {showMorePaintings &&
              extraPaintings.map((img, idx) => (
                <div key={`extra-${idx}`} className="col">
                  <a href={img.src} target="_blank" rel="noopener noreferrer">
                    <img src={img.src} alt={img.alt} className="img-fluid rounded-3" loading="lazy" />
                  </a>
                </div>
              ))}
          </div>

          {/* Toggle buttons */}
          <div className="text-center mt-4">
            {!showMorePaintings ? (
              <button className="btn btn-primary" onClick={() => setShowMorePaintings(true)}>
                More walruses!
              </button>
            ) : (
              <button className="btn btn-primary" onClick={() => setShowMorePaintings(false)}>
                Less walruses...
              </button>
            )}
          </div>

          <div className="text-center mt-4">
            <p>For more art, see my gallery</p>
            <button className="btn btn-primary">Visit Gallery</button>
          </div>
        </div>
      </section>
    </div>
  );
}
