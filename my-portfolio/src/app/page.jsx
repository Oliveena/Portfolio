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
      <header className="relative">
        <Image
          src="/images/vector1.jpg"
          alt="banner"
          width={1920}
          height={600}
          className="w-full object-cover"
        />
        <Image
          src="/images/f7ad9720-7002-4c57-8d44-0405b7e00ee2.jpg"
          alt="Ana's face"
          className="absolute top-1/6 right-1/2 translate-x-[150%] max-w-[25%] rounded-3xl z-20"
          loading="lazy"
          width={400}
          height={400}
        />
        <div className="hero-text absolute top-20 right-1/4 z-30 text-white">
          <h1 className="text-4xl font-bold">Hello, this is Ana</h1>
          <h2 className="text-2xl">Web Developer and Nurse Clinician</h2>
          <p>
            <a
              href="/shared_assets/images/DeansList.png"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Dean's List Recipient
            </a>
          </p>
        </div>
      </header>

      {/* Download CV Section */}
      <section className="text-center py-10">
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
