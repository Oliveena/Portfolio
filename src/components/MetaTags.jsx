// components/MetaTags.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

export default function MetaTags({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Anastassia Tarassova" />
      <meta name="keywords" content="HTML, CSS, JS, Java, SQL, Portfolio, Women in STEM" />
      <link rel="icon" href="/shared_assets/images/walrus_favicon_io/favicon.ico" />
    </Helmet>
  );
}
