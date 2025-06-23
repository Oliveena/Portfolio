import React, { useState, useEffect } from "react";

const ReviewCarousel = ({ reviews, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const prevReview = () => {
    setCurrentIndex((i) => (i - 1 + reviews.length) % reviews.length);
  };

  const nextReview = () => {
    setCurrentIndex((i) => (i + 1) % reviews.length);
  };

  const goToReview = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`review-carousel-container ${className}`} aria-roledescription="carousel">
      <div className="reviews-wrapper" aria-live="polite" aria-atomic="true">
        {reviews.map((review, i) => (
          <div
            key={i}
            className={`review ${i === currentIndex ? "active" : ""}`}
            aria-hidden={i !== currentIndex}
          >
            <p>
              <em>"{review.text}"</em>
            </p>
            <p className="author">- {review.author}</p>
          </div>
        ))}
      </div>

      <button
        className="carousel-btn carousel-control-prev"
        onClick={prevReview}
        aria-label="Previous Review"
      >
        ‹
      </button>
      <button
        className="carousel-btn carousel-control-next"
        onClick={nextReview}
        aria-label="Next Review"
      >
        ›
      </button>

      <div className="dots" role="tablist" aria-label="Review navigation dots">
        {reviews.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => goToReview(i)}
            aria-selected={i === currentIndex}
            role="tab"
            tabIndex={i === currentIndex ? 0 : -1}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;
