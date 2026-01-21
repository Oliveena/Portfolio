import React, { useState } from "react";
import { Container, Typography, Box, Divider, Alert } from "@mui/material";
import { useTranslation } from "react-i18next";

import BooksList from "./BooksList";
import RecommendedTable from "./RecommendedTable";
import BookTable from "./BookTable"; 
import Form from "./Form";
import BookSearch from "./BookSearch";
import { Pagination } from "@mui/material";

const readBooks = [
  {
    title: "Tragic Design: The Impact Of Bad Design And How To Fix It",
    author: "Jonathan Shariat & Cynthia Savard Saucier",
    reviewKey: "hobbies.book_reviews.design",
    cover: "/images/readBooks/ShariatSaucierTragicDesign.jpg",
  },
  {
    title: "La Terre Des Hommes",
    author: "Antoine De Saint-Exupery",
    reviewKey: "hobbies.book_reviews.terre",
    cover: "/images/readBooks/ExuperyTerreDesHommes.jpg",
  },
  {
    title: "Encabanée",
    author: "Gabrielle Filteau-Chiba",
    reviewKey: "hobbies.book_reviews.encabanee",
    cover: "/images/readBooks/FilteauCEncabanee.webp",
  },
  {
    title: "The Enchantress of Florence",
    author: "Salman Rushdie",
    reviewKey: "hobbies.book_reviews.florence",
    cover: "/images/readBooks/Enchantress_of_florence.jpg",
  },
 {
    title: "Ahab's Wife",
    author: "Sena Jeter Naslund",
    reviewKey: "hobbies.book_reviews.ahab",
    cover: "/images/readBooks/Ahabs-Wife.jpg",
  },
   {
    title: "Master And Margarita",
    author: "Mikhail Bulgakov",
    reviewKey: "hobbies.book_reviews.master",
    cover: "/images/readBooks/BulgakovMasterAndMargarita.jpg",
  },
  {
    title: "My Favorite Thing Is Monsters",
    author: "Emil Ferris",
    reviewKey: "hobbies.book_reviews.monsters",
    cover: "/images/readBooks/FerrisMyFavoriteThingIsMonsters.jpg",
  },
  {
    title: "Salt Fat Acid Heat",
    author: "Samin Nosrat",
    reviewKey: null,
    cover: "/images/readBooks/SaltFatAcidHeat.jpg",
  },
  {
    title: "Olas",
    author: "Maria Carla",
    reviewKey: null,
    cover: "/images/readBooks/olas.jpeg",
  },
  {
    title: "Children of Dune",
    author: "Frank Herbert",
    reviewKey: null,
    cover: "/images/readBooks/4f0d17e42274f6032fff586c667af254.webp",
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

  const booksPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1); 

  const startIndex = (currentPage - 1) * booksPerPage;
  const paginatedBooks = readBooks.slice(startIndex, startIndex + booksPerPage);

  const [suggestedBooks, setSuggestedBooks] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

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
    <Container id="hobbies" sx={{ py: 12 }}>
      {/* Read Books */}
      <Box textAlign="center" mb={5}>
        <Typography variant="h3"  mb={2}>{t("hobbies.reading_reviews_title")}</Typography>
        <Typography variant="body1">{t("hobbies.reading_reviews_subtitle")}</Typography>
      </Box>

      <BooksList books={paginatedBooks} variant="grid" showReview/>
      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination
          count={Math.ceil(readBooks.length / booksPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>

      <Box sx={{ maxWidth: 1000, mx: "auto", px: 2 }}>
  <RecommendedTable books={recommendedBooks} />
</Box>

<Divider sx={{ my: 6 }} />

<Box sx={{ maxWidth: 600, mx: "auto", px: 2 }}>
  <Typography variant="h5" align="center" mt={3} mb={3}>
    {t("hobbies.suggestion_messages.suggest_book")}
  </Typography>
  <Form fields={suggestionFields} onSubmit={handleSuggestBook} />
  {successMessage && (
    <Alert severity="success" sx={{ mt: 2 }}>
      {successMessage}
    </Alert>
  )}
</Box>

<Divider sx={{ my: 6 }} />

{suggestedBooks.length > 0 && (
  <Box sx={{ maxWidth: 1000, mx: "auto", px: 2 }}>
    <BookTable books={suggestedBooks} />
  </Box>
)}

<Divider sx={{ my: 6 }} />

<Box sx={{ maxWidth: 1000, mx: "auto", px: 2 }}>
  <BookSearch />
</Box>
</Container>
  );
}