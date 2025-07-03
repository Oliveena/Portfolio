import React, { useState } from "react";
import { Container, Typography, Box, Divider, Alert } from "@mui/material";
import { useTranslation } from "react-i18next";

import ReadBooksGrid from "./ReadBooks";  // <--- updated import here
import RecommendedTable from "./RecommendedTable";
import BookTable from "./BookTable"; 
import Form from "./Form";
import BookSearch from "./BookSearch";

const readBooks = [
  {
    title: "Tragic Design: The Impact Of Bad Design And How To Fix It",
    author: "Jonathan Shariat & Cynthia Savard Saucier",
    reviewKey: "hobbies.book_reviews.design",
    cover: "/images/readBooks/ShariatSaucierTragicDesign.jpg",
  },
  {
    title: "My Favorite Thing Is Monsters",
    author: "Emil Ferris",
    reviewKey: "hobbies.book_reviews.monsters",
    cover: "/images/readBooks/FerrisMyFavoriteThingIsMonsters.jpg",
  },
  {
    title: "Encabanée",
    author: "Gabrielle Filteau-Chiba",
    reviewKey: "hobbies.book_reviews.encabanee",
    cover: "/images/readBooks/FilteauCEncabanee.webp",
  },
  {
    title: "Ahab's Wife",
    author: "Sena Jeter Naslund",
    reviewKey: "hobbies.book_reviews.ahab",
    cover: "/images/readBooks/Ahabs-Wife.jpg",
  },
  {
    title: "The Enchantress of Florence",
    author: "Salman Rushdie",
    reviewKey: "hobbies.book_reviews.florence",
    cover: "/images/readBooks/Enchantress_of_florence.jpg",
  },
];

const recommendedBooks = [
  { title: "Chateaux de la colere", author: "Alessandro Barrico" },
  { title: "The Glass Castle", author: "Jeannette Walls" },
  { title: "Why Lhasa de Sela Matters", author: "Fred Goodman" },
  { title: "Le Semaphore d'Alexandrie", author: "Robert Sole" },
];

export default function Hobbies() {
  const { t } = useTranslation();
  const [suggestedBooks, setSuggestedBooks] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSuggestBook = (formData) => {
    const title = formData.title.trim();
    const author = formData.author.trim();
    const textRegex = /^[A-Za-z0-9\s.,'-]+$/;

    if (!title || !author) return;
    if (!textRegex.test(title) || !textRegex.test(author)) return;

    setSuggestedBooks((prev) => [...prev, { title, author }]);
    setSuccessMessage(t("hobbies.suggestion_messages.book_suggested_success"));
    setTimeout(() => setSuccessMessage(""), 3000);
  };

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

  return (
    <Container id="hobbies" sx={{ py: 5 }}>
      {/* Read Books */}
      <Box textAlign="center" mb={5}>
        <Typography variant="h3">{t("hobbies.reading_reviews_title")}</Typography>
        <Typography variant="body1">{t("hobbies.reading_reviews_subtitle")}</Typography>
      </Box>

      {/* Use ReadBooksGrid instead of old ReadBooks */}
      <ReadBooksGrid books={readBooks} />

      {/* Recommended Books */}
      <Divider sx={{ my: 6 }} />
      <RecommendedTable books={recommendedBooks} />

      {/* Suggest a Book */}
      <Divider sx={{ my: 6 }} />
      <Box>
        <Typography variant="h5" align="center" mb={3}>
          {t("hobbies.suggestion_messages.suggest_book")}
        </Typography>
        <Form fields={suggestionFields} onSubmit={handleSuggestBook} />
        {successMessage && (
          <Alert severity="success" sx={{ mt: 2, maxWidth: 600, mx: "auto" }}>
            {successMessage}
          </Alert>
        )}
      </Box>

      {/* Display Suggested Books */}
      {suggestedBooks.length > 0 && (
        <Box mt={6}>
          <BookTable books={suggestedBooks} />
        </Box>
      )}

      {/* Book Search */}
      <Divider sx={{ my: 6 }} />
      <BookSearch />
    </Container>
  );
}