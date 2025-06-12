'use client';

import Image from 'next/image';

export default function HomePage() {
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
        <h3>Download my resume</h3>
        <div className="mt-4 space-x-4">
          <button className="btn btn-primary">PDF</button>
          <button className="btn btn-success">Word</button>
        </div>
      </section>

      {/* Download Modal */}
      <section>
        <div
          className="modal fade"
          id="downloadModal"
          tabIndex={-1}
          aria-labelledby="downloadModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="downloadModalLabel">
                  Please enter your details:
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form id="downloadForm">
                  <div className="mb-3">
                    <label htmlFor="userName" className="form-label">
                      Name or Company Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="userName"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="userEmail" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="userEmail"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-info">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add Review Section */}
      <section id="addReview" className="mt-5">
        <h3 className="text-center mb-3">Add Your Review</h3>
        <form
          id="reviewForm"
          className="mx-auto"
          style={{ maxWidth: "500px" }}
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: Handle review submission here
          }}
        >
          <div className="mb-3">
            <label htmlFor="reviewText" className="form-label">
              Your Review:
            </label>
            <textarea
              id="reviewText"
              className="form-control"
              rows={4}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="reviewName" className="form-label">
              Your Name:
            </label>
            <input
              type="text"
              id="reviewName"
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit Review
          </button>
        </form>
      </section>
    </main>
  );
}
