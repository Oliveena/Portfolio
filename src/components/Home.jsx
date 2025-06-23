import React, { useState } from 'react';
import Modal from './Modal';
import useDownloadModal from '../hooks/useDownloadModal';
import ReviewCarousel from './ReviewCarousel';
import Form from './Form';

export default function Home() {
  const [reviews, setReviews] = useState([
    { text: "Good portfolio.", author: "somebody" },
    { text: "Very nice.", author: "somebody else" },
    { text: "Super duper.", author: "someone from your neighborhood" },
    { text: "Solid results.", author: "your favorite colleague" },
    { text: "I like the color palette.", author: "your beloved aunt" },
    { text: "Very pleasant, I approve.", author: "your childhood friend" }
  ]);

  const {
    modalOpen,
    openModal,
    closeModal,
    formData,
    setFormData,
    errors,
    handleSubmit,
    loading,
    success,
    downloadLink,
  } = useDownloadModal();

  // Called when form submits a new review
  const addReview = ({ name, review }) => {
    if (!name.trim() || !review.trim()) {
      alert("Please fill out both fields."); // simple validation alert
      return;
    }
    setReviews(prev => [...prev, { author: name.trim(), text: review.trim() }]);
  };

  return (
    <>
      {/* Hero Section */}
      <header className="hero position-relative text-light w-100">
        <img
          src="/images/vector1.jpg"
          alt="banner background"
          className="position-absolute w-100 h-100 object-fit-cover"
          style={{ objectFit: 'cover', zIndex: 1 }}
        />
        <div className="hero-overlay position-absolute w-100 h-100"></div>
        <div className="container h-100 position-relative" style={{ zIndex: 3 }}>
          <div className="row h-100 align-items-center justify-content-center justify-content-md-between text-center text-md-start">
            <div
              className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-center align-items-md-start mb-4 mb-md-0"
              id="hero-text"
            >
              <h1 className="display-4 fw-bold mt-2">Hello, this is Ana</h1>
              <h2 className="h3 m-2">Web Developer and Nurse Clinician</h2>
              <p className="m-2">
                <a
                  href="/images/DeansList.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-underline text-light"
                >
                  Dean's List Recipient
                </a>
              </p>
            </div>
            <div className="col-md-6 col-10 mx-auto mx-md-0 text-center">
              <img
                src="/images/f7ad9720-7002-4c57-8d44-0405b7e00ee2.jpg"
                alt="Ana's face"
                className="face-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Download CV Section */}
      <section className="welcome text-center py-5 m-0">
        <div id="download_text" className="mb-3">
          <h2>Download CV</h2>
          <p className="text-center">Choose a format:</p>
        </div>
        <div className="cv_download">
          <button className="btn btn-primary" onClick={() => openModal('/shared_assets/images/Resume.pdf')}>
            PDF
          </button>
          <button className="btn btn-success" onClick={() => openModal('/shared_assets/images/Resume.docx')}>
            Word
          </button>

          {modalOpen && (
            <Modal
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              loading={loading}
              success={success}
              onClose={closeModal}
              onSubmit={handleSubmit}
              downloadLink={downloadLink}
            />
          )}
        </div>
      </section>

      {/* Reviews Section */}
      <section id="addReview" className="mt-5 text-center">
        <h2 className="mb-3">Add Your Review</h2>
        <ReviewCarousel className="review-section-container" reviews={reviews} />
       <Form
  className="review-section-container form-section"
  title="Share A Review"
  fields={[
    { id: "name", label: "Your Name", type: "text", placeholder: "Enter your name", required: true },
    { id: "review", label: "Review", type: "textarea", placeholder: "Write your review here", required: true }
  ]}
  onSubmit={addReview}
/>

      </section>
    </>
  );
}