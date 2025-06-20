// components/MetaHead.jsx
import Head from 'next/head';

export default function MetaHead({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Anastassia Tarassova" />
      <meta name="keywords" content="HTML, CSS, JS, Java, SQL, Portfolio, Women in STEM" />
      <link rel="icon" href="/shared_assets/images/walrus_favicon_io/favicon.ico" />
    </Head>
  );
}
