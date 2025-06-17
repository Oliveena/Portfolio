import React, { useState } from 'react';

export default function ReviewCarousel({ onSubmit }) {
  const [reviews, setReviews] = useState([
    { text: "Good portfolio.", name: "somebody" },
    { text: "Very nice.", name: "somebody else" },
    { text: "Super duper.", name: "someone from your neighborhood" },
    { text: "Solid results.", name: "your favorite colleague" },
    { text: "I like the color palette.", name: "your beloved aunt" },
    { text: "Very pleasant, I approve.", name: "your childhood friend" }
  ]);

  const [reviewText, setReviewText] = useState('');
  const [reviewName, setReviewName] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedText = reviewText.trim();
    const trimmedName = reviewName.trim();

    if (!trimmedText || !trimmedName) {
      alert('Please enter your name and your review.');
      return;
    }

    const nameRegex = /^[A-Za-z0-9\s.,'-]+$/;
    if (!nameRegex.test(trimmedName)) {
      alert("Name may contain letters, numbers, spaces, commas, periods, hyphens.");
      return;
    }

    const reviewRegex = /^[\w\s,.'-]{3,500}$/;
    if (!reviewRegex.test(trimmedText)) {
      alert('Reviews may contain between 3 to 500 characters.');
      return;
    }

    const newReview = { text: trimmedText, name: trimmedName };
    setReviews([...reviews, newReview]);
    setReviewText('');
    setReviewName('');
    setCurrentIndex(reviews.length);

    if (onSubmit) onSubmit(newReview);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : reviews.length - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <div className="container mb-5">
      <h3 className="text-center mb-4">Testimonials</h3>

      {/* Review Carousel Display */}
      <div id="testimonials" style={{ backgroundColor: 'white', color: 'white' }} className="bg-black text-light p-4 rounded">
        <div id="reviews-display" className="mb-3">
          <div className="review bg-secondary text-light p-3 rounded shadow-sm">
            <p><em>"{reviews[currentIndex].text}"</em></p>
            <p className="text-end">- {reviews[currentIndex].name}</p>
          </div>
        </div>

        {/* Carousel Arrows */}
        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-outline-light" onClick={prevReview} aria-label="Previous">‹</button>
          <button className="btn btn-outline-light" onClick={nextReview} aria-label="Next">›</button>
        </div>
      </div>

      {/* Form to Add Review */}
      <form id="reviewForm" onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="reviewText" className="form-label">Your Review:</label>
          <textarea
            id="reviewText"
            className="form-control"
            rows={3}
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="reviewName" className="form-label">Your Name:</label>
          <input
            type="text"
            id="reviewName"
            className="form-control"
            value={reviewName}
            onChange={(e) => setReviewName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit Review</button>
      </form>
    </div>
  );
}
