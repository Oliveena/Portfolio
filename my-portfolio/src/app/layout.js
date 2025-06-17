// src/app/layout.js
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';
import '../../styles/main.scss'; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Anastassia's Portfolio",
  description: "Welcome to Anastassia Tarassova's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2/dist/umd/popper.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5/dist/js/bootstrap.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
