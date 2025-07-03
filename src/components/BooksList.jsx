import React from "react";
import PropTypes from "prop-types";
import BookCard from "./BookCard";
import { Typography, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

/**
 * BooksList - reusable component to display books in table or card grid
 */
export default function BooksList({ books, variant = "table", showReview = false, title }) {
  if (!books || books.length === 0) return null;

  if (variant === "grid") {
    return (
      <>
        {title && (
          <Typography variant="h5" align="center" gutterBottom>
            {title}
          </Typography>
        )}
        <div className="book-container mt-4 row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {books.map((book, idx) => (
            <div key={idx} className="col">
              <BookCard
                title={book.title}
                author={book.author}
                cover={book.cover}
                reviewText={showReview ? book.reviewText : ""}
              />
            </div>
          ))}
        </div>
      </>
    );
  }

  // Default: table layout
  return (
    <>
      {title && (
        <Typography variant="h5" align="center" gutterBottom>
          {title}
        </Typography>
      )}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book, idx) => (
            <TableRow key={idx}>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  variant: PropTypes.oneOf(["table", "grid"]),
  showReview: PropTypes.bool,
  title: PropTypes.string,
};
