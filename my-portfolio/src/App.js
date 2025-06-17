// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/EN/skills" element={<Skills />} />
          <Route path="/EN/projects" element={<Projects />} />
          <Route path="/EN/hobbies" element={<Hobbies />} />
          <Route path="/EN/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
