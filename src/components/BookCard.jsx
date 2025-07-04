import React from "react";
import PropTypes from "prop-types";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const BookCard = ({ title, author, reviewText, cover }) => {
  return (
    <Card
    className="book-card"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
  }}
    >
      <CardMedia
        component="img"
        image={cover}
        alt={`Cover of ${title}`}
        sx={{
          height: 280,
          objectFit: "cover",
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          "{title}"
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {author}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {reviewText || "No review available."}
        </Typography>
      </CardContent>
    </Card>
  );
};

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  reviewText: PropTypes.string,
  cover: PropTypes.string,
};

export default BookCard;