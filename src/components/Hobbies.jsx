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
import { useTranslation } from "react-i18next";

const books = [
  {
    title: "My Favorite Thing Is Monsters",
    author: "Emil Ferris",
    review: "hobbies.book_reviews.monsters",
    cover: "/images/readBooks/FerrisMyFavoriteThingIsMonsters.jpg"
  },
  {
    title: "Encabanée",
    author: "Gabrielle Filteau-Chiba",
    review: "hobbies.book_reviews.encabanee",
    cover: "/images/readBooks/FilteauCEncabanee.webp",
  },
  {
    title: "Ahab's Wife",
    author: "Sena Jeter Naslund",
    review: "hobbies.book_reviews.ahab",
    cover: "/images/readBooks/Ahabs-Wife.jpg",
  },
  {
    title: "The Enchantress of Florence",
    author: "Salman Rushdie",
    review: "hobbies.book_reviews.florence",
    cover: "/images/readBooks/Enchantress_of_florence.jpg",
  },
];

const itemsPerPage = 2;

export default function Hobbies() {
  const { t } = useTranslation();

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
      label: t("hobbies.form_labels.book_title"),
      type: "text",
      placeholder: t("hobbies.form_labels.book_placeholder"),
      required: true,
    },
    {
      id: "author",
      label: t("hobbies.form_labels.book_author"),
      type: "text",
      placeholder: t("hobbies.form_labels.author_placeholder"),
      required: true,
    },
  ];

  const handleSuggestBook = (formData) => {
    const title = formData.title.trim();
    const author = formData.author.trim();

    if (!title && !author) return;

    const textRegex = /^[A-Za-z0-9\s.,'-]+$/;

    if (title && !textRegex.test(title)) {
      alert(t("hobbies.form.validation_title"));
      return;
    }

    if (author && !textRegex.test(author)) {
      alert(t("hobbies.form.validation_author"));
      return;
    }

    setSuggestedBooks((prev) => [
      ...prev,
      { title, author, reason: "User suggested" },
    ]);
    localStorage.setItem("bookTitle", title);
    localStorage.setItem("bookAuthor", author);

    setSuccessMessage(t("hobbies.suggestion_messages.book_suggested_success"));
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <Container id="content" sx={{ py: 5 }}>
      {/* =============== READING REVIEWS =============== */}
      <section className="reading-reviews">
        <Typography variant="h3" align="center" gutterBottom>
          {t("hobbies.reading_reviews_title")}
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          {t("hobbies.reading_reviews_subtitle")}
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {paginatedBooks.map((book, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                elevation={4}
                sx={{
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.02)" },
                }}
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
                    {t("hobbies.book_reviews.by", { author: book.author })}
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    {book.review
                      ? t(book.review)
                      : t("hobbies.book_reviews.no_review")}
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
          title={t("hobbies.suggestion_messages.suggest_book")}
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
          {t("hobbies.search_title")}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {t("hobbies.search_subtitle")}
        </Typography>
        <BookSearch />
      </section>
    </Container>
  );
}
