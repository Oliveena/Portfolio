import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import FeaturedProjects from './components/FeaturedProjects';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './i18n';
import { useTranslation } from 'react-i18next'; 
import { useParams } from 'react-router-dom'; 
import ScrollToTop from './components/ScrollToTop';
import MetaTags from './components/MetaTags';

function App() {

  const { i18n } = useTranslation();
  const { lang } = useParams();

  return (
    <>
     <MetaTags title="Ana's Portfolio" description="Junior dev portfolio website" />
      <Navbar />
      <ScrollToTop /> 
      <main className="min-h-screen p-8" id="gradient-background">
 <Routes>
  <Route path="/" element={<Navigate to="/en/" replace />} />
  <Route path="/:lang/" element={<Home />} />
  <Route path="/:lang/skills" element={<Skills />} />
  <Route path="/:lang/projects" element={<FeaturedProjects />} />
  <Route path="/:lang/hobbies" element={<Hobbies />} />
  <Route path="/:lang/contact" element={<Contact />} />
</Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
