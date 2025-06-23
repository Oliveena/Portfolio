import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Anastassia's Web Dev Portfolio - Contact</title>
        <meta
          name="description"
          content="A personal portfolio webpage for Anastassia Tarassova, junior developer."
        />
        <meta name="author" content="Anastassia Tarassova" />
        <meta
          name="keywords"
          content="HTML, CSS, JS, Java, SQL, Personal, Portfolio, Web Dev, Women in STEM, Excellence"
        />
        <link
          rel="icon"
          href="/shared_assets/images/walrus_favicon_io/favicon.ico"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
        
      </Helmet>

      <Navbar />
      <main>
        <ContactForm />
      </main>
    </>
  );
}
<link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
        />