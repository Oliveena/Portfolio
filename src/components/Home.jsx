import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import useDownloadModal from '../hooks/useDownloadModal';
import ReviewCarousel from './ReviewCarousel';
import Form from './Form';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

export default function Home() {

  const { lang } = useParams();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (lang && i18n.language !== lang.toLowerCase()) {
      i18n.changeLanguage(lang.toLowerCase());
    }
  }, [lang, i18n]);

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
              <h1 className="display-4 fw-bold mt-2">{t('hero.title')}</h1>
              <h2 className="h3 m-2">{t('hero.subtitle')}</h2>
              <p className="m-2">
  <a
    href="/images/DeansList.png"
    target="_blank"
    rel="noopener noreferrer"
    className="text-decoration-underline text-light"
  >
    {t('hero.deansList')}
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
          <h2>{t('cv.download')}</h2>
          <p className="text-center">{t('cv.chooseFormat')}</p>
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
        <h2 className="mb-3">{t('review.add')}</h2>
        <ReviewCarousel className="review-section-container" reviews={reviews} />
       <Form
  className="review-section-container form-section"
  title={t('review.share')}
  fields={[
    {
      id: "name",
      label: t('review.yourName'),
      type: "text",
      placeholder: t('review.yourName'),
      required: true,
    },
    {
      id: "review",
      label: t('review.yourReview'),
      type: "textarea",
      placeholder: t('review.yourReview'),
      required: true,
    }
  ]}
  onSubmit={addReview}
/>

      </section>
    </>
  );
}