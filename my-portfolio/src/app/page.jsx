'use client';

import Image from 'next/image';
import Modal from '@/components/Modal'; 
import useDownloadModal from '@/hooks/useDownloadModal';
import ReviewCarousel from '@/components/ReviewCarousel';


export default function HomePage() {

   const {
    modalOpen,
    openModal,
    closeModal,
    formData,
    setFormData,
    errors,
    handleSubmit,
  } = useDownloadModal();

  return (
    <main id="gradient-background" className="min-h-screen p-8">
      {/* Hero Section */}
     <header className="hero position-relative text-light">
  {/* Blurred background */}
  <Image
    src="/images/vector1.jpg"
    alt="banner background"
    fill
    className="hero-img position-absolute w-100 h-100 object-fit-cover"
  />

  {/* Foreground content */}
  <div className="container h-100">
    <div className="row h-100 align-items-center justify-content-center text-center text-md-end position-relative" style={{ zIndex: 3 }}>
      <div className="col-md-6 col-12 mb-4 mb-md-0" id="hero-text">
        <h1 className="display-4 fw-bold">Hello, this is Ana</h1>
        <h2 className="h3">Web Developer and Nurse Clinician</h2>
        <p>
          <a
            href="/images/DeansList.png"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-underline"
          >
            Dean's List Recipient
          </a>
        </p>
      </div>

      <div className="col-md-6 col-12 text-center">
        <Image
          src="/images/f7ad9720-7002-4c57-8d44-0405b7e00ee2.jpg"
          alt="Ana's face"
          className="img-fluid rounded-4 z-3 position-relative"
          loading="lazy"
          width={400}
          height={400}
        />
      </div>
    </div>
  </div>
</header>


      {/* Download CV Section */}
      <section className="welcome text-center py-5">
        <div className="cv_download mt-4">
          <button
  className="btn btn-primary"
  onClick={() => openModal('/shared_assets/images/Resume.pdf')}
>
  PDF
</button>
<button
  className="btn btn-success"
  onClick={() => openModal('/shared_assets/images/Resume.docx')}
>
  Word
</button>

        </div>
      </section>
        

    {modalOpen && (
        <Modal
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          onClose={closeModal}
          onSubmit={handleSubmit}
        />
      )}

      {/* Add Review Section */}
  <section id="addReview" className="mt-5">
    <h2 className="text-center mb-3">Add Your Review</h2>
    <ReviewCarousel />
  </section>
    </main>
  );
}
