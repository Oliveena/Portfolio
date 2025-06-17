import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
import BookTable from "./BookTable";
import BookSearch from "./BookSearch";

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

const initialSuggestedBooks = [
  { title: "1984", author: "George Orwell", reason: "Dystopian classic" },
  { title: "The Wind-Up Bird Chronicle", author: "Haruki Murakami", reason: "Magical realism" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", reason: "Timeless themes" },
];

const initialPaintings = [
  { src: "/images/IMG_20210208_090255_351.jpg", alt: "Vlad Dracula as a walrus" },
  { src: "/images/20250111_100225.jpg", alt: "Birth of Venus as walruses" },
  { src: "/images/IMG_20210217_090313_884.jpg", alt: "Girl with a Pearl Earring as a walrus" },
];

const extraPaintings = [
  { src: "/images/20250111_095921.jpg", alt: "Frida Kahlo as a walrus" },
  { src: "/images/IMG_20210131_221746_948.jpg", alt: "Napoleon as a walrus" },
  { src: "/images/20250111_100242.jpg", alt: "Son of Man as a walrus" },
];

export default function Hobbies() {

   // state of suggested books
  const [suggestedBooks, setSuggestedBooks] = useState(initialSuggestedBooks);

  <ul className="books list-unstyled">
  {books.map((book, idx) => (
    <li key={idx} className="flip my-3">
      <strong>"{book.title}"</strong> by {book.author}
      <div className="panel mt-2 d-flex flex-column align-items-center text-start">
        {book.cover && (
          <img
            src={book.cover}
            alt={`Cover of ${book.title}`}
            className="mb-2 rounded shadow-sm"
            style={{ maxWidth: "150px", height: "auto" }}
          />
        )}
        <p>{book.review}</p>
      </div>
    </li>
  ))}
</ul>


  // controlling inputs from form
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  // handling a book suggestion
  const handleAddBook = (e) => {
  e.preventDefault();

  // Trim user input
  const title = newTitle.trim();
  const author = newAuthor.trim();

  // allowing an empty input
  if (!title && !author) {
    setNewTitle("");
    setNewAuthor("");
    return;
  }

  // Validation
  const textRegex = /^[A-Za-z0-9\s.,'-]+$/;

  if (title && !textRegex.test(title)) {
    alert("Book title may contain letters, numbers, spaces, commas, periods, and hyphens.");
    return;
  }

  if (author && !textRegex.test(author)) {
    alert("Author name may contain letters, numbers, spaces, commas, periods, and hyphens.");
    return;
  }

  // Save to state
  setSuggestedBooks((prevBooks) => [
    ...prevBooks,
    { title, author, reason: "User suggested" },
  ]);

  // Save to localStorage
  localStorage.setItem("bookTitle", title);
  localStorage.setItem("bookAuthor", author);

  // Clear form
  setNewTitle("");
  setNewAuthor("");

  // Feedback
  alert("Thank you for suggesting a book! We appreciate your input.");
};


  const [showMorePaintings, setShowMorePaintings] = useState(false);

 
  return (
    <div id="content">
      {/* =============== READING REVIEWS =============== */}
      <section className="reading-reviews text-center py-5">
        <div className="transparent-background-warm p-4">
          <h3>Reading Reviews</h3>
          <p>Ana has always been an avid reader. Here are some recent reads.</p>
          <ul className="books list-unstyled">
            {books.map((book, idx) => (
              <li key={idx} className="flip my-3">
                <strong>"{book.title}"</strong> by {book.author}
                <div className="panel mt-2">{book.review}</div>
              </li>
            ))}
          </ul>

          {/* Suggested Books Section */}
         <div className="container my-4">
  <BookTable />
</div>

          {/* Google Book Search */}
<div className="container my-4">
  <BookSearch />
</div>
        </div>
      </section>

      {/* =============== WATERCOLOR GALLERY =============== */}
      <section className="watercolor-art-gallery py-5">
        
        <div className="transparent-background-cold p-4">
          <h3 className="text-center">Watercolor Painting</h3>
          <p className="text-center">
            Painting is very relaxing.<br />Here are some of my recent works.<br />
            Hover over them!
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

          {/* <div className="text-center mt-4">
            <p>For more art, see my gallery</p>
            <button className="btn btn-primary">Visit Gallery</button>
          </div> */}
        </div> 
      </section>
    </div>
  );
}
