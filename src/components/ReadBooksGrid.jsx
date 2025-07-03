import React from "react";
import { useTranslation } from "react-i18next";
import BookCard from "./BookCard";

export default function ReadBooksGrid({ books }) {
  const { t } = useTranslation();

  return (
    <div className="book-container mt-4 row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
      {books.map(({ title, author, reviewKey, cover }, idx) => (
        <div key={idx} className="col">
          <BookCard
            title={title}
            author={author}
            cover={cover}
            reviewText={reviewKey ? t(reviewKey, { defaultValue: t("hobbies.book_reviews.no_review") }) : t("hobbies.book_reviews.no_review")}
          />
        </div>
      ))}
    </div>
  );
}