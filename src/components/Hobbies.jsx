import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Pagination,
  Container,
  Alert
} from "@mui/material";
import BookTable from "./BookTable";
import BookSearch from "./BookSearch";
import Form from "./Form";
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const books = [
  {
    title: "My Favorite Thing Is Monsters",
    author: "Emil Ferris",
    review: "A haunting and beautifully illustrated story about monsters, both real and imagined...",
    cover: "/images/book1.jpg",
  },
  {
    title: "Encabanée",
    author: "Gabrielle Filteau-Chiba",
    review: "A poetic and meditative exploration of solitude in nature, written with raw elegance...",
    cover: "/images/book2.jpg",
  },
  {
    title: "Ahab's Wife",
    author: "Sena Jeter Naslund",
    review: "A sweeping historical novel that reimagines the life of Captain Ahab’s wife with depth and grace...",
    cover: "/images/book3.jpg",
  },
  {
    title: "The Enchantress of Florence",
    author: "Salman Rushdie",
    review: "A tale of magical realism connecting East and West, rich with storytelling and imagination...",
    cover: "/images/book4.jpg",
  },
];

const itemsPerPage = 2;

export default function Hobbies() {
  const [currentPage, setCurrentPage] = useState(1);
  const [suggestedBooks, setSuggestedBooks] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const pageCount = Math.ceil(books.length / itemsPerPage);

  const paginatedBooks = books.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const suggestionFields = [
    {
      id: "title",
      label: "Book Title",
      type: "text",
      placeholder: "e.g. The Adventures of Tom Sawyer",
      required: true,
    },
    {
      id: "author",
      label: "Author",
      type: "text",
      placeholder: "e.g. Mark Twain",
      required: true,
    },
  ];

  const handleSuggestBook = (formData) => {
    const title = formData.title.trim();
    const author = formData.author.trim();

    if (!title && !author) return;

    const textRegex = /^[A-Za-z0-9\s.,'-]+$/;

    if (title && !textRegex.test(title)) {
      alert("Book title may contain letters, numbers, spaces, commas, periods, and hyphens.");
      return;
    }

    if (author && !textRegex.test(author)) {
      alert("Author name may contain letters, numbers, spaces, commas, periods, and hyphens.");
      return;
    }

    setSuggestedBooks((prev) => [
      ...prev,
      { title, author, reason: "User suggested" },
    ]);

    localStorage.setItem("bookTitle", title);
    localStorage.setItem("bookAuthor", author);

    setSuccessMessage("✅ Thank you for suggesting a book!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <Container id="content" sx={{ py: 5 }}>
      {/* =============== READING REVIEWS =============== */}
      <section className="reading-reviews">
        <Typography variant="h3" align="center" gutterBottom>
          Reading Reviews
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          Ana has always been an avid reader. Here are some recent reads.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {paginatedBooks.map((book, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                elevation={4}
                sx={{
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
                aria-label={`Book card for ${book.title}`}
              >
                {book.cover && (
                  <CardMedia
                    component="img"
                    height="200"
                    image={book.cover}
                    alt={`Cover of ${book.title}`}
                    loading="lazy"
                  />
                )}
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    "{book.title}"
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    by {book.author}
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    {book.review}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={(e, value) => setCurrentPage(value)}
          color="primary"
          size="large"
          sx={{ mt: 4, display: "flex", justifyContent: "center" }}
          aria-label="Book pagination navigation"
        />
      </section>

      {/* =============== SUGGESTED BOOK TABLE =============== */}
      <section className="suggested-books" style={{ marginTop: "4rem" }}>
        <BookTable books={suggestedBooks} />
      </section>

      {/* =============== BOOK SUGGESTION FORM =============== */}
      <section style={{ marginTop: "4rem" }}>
        <Form
          title="Suggest a Book"
          fields={suggestionFields}
          onSubmit={handleSuggestBook}
          className="my-5"
        />
        {successMessage && (
          <Alert severity="success" sx={{ mt: 2 }}>
            {successMessage}
          </Alert>
        )}
      </section>

      {/* =============== BOOK SEARCH =============== */}
      <section className="book-search" style={{ marginTop: "4rem" }}>
        <Typography variant="h5" gutterBottom>
          Can't remember the title?
        </Typography>
        <Typography variant="body2" gutterBottom>
          Use the Google Books API to search by keyword, author, or topic.
        </Typography>
        <BookSearch />
      </section>
    </Container>
  );
}
