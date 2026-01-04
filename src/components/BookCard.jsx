import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography } from "@mui/material";
import ResponsiveImage from "./ResponsiveImage";

const BookCard = ({ title, author, reviewText, cover }) => {
  const coverFilename = cover ? cover.split('/').pop() : '';

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
      <div style={{ height: 280, overflow: 'hidden' }}>
        <ResponsiveImage
          src={coverFilename}
          alt={`Cover of ${title}`}
          folder="readBooks"
          sizes={["(max-width: 576px) 100vw", "(max-width: 992px) 50vw", "33vw"]}
          style={{ height: 280, objectFit: "cover", width: "100%" }}
        />
      </div>
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