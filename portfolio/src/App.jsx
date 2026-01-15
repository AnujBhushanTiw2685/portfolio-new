import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-dark min-h-screen text-slate-300 selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;