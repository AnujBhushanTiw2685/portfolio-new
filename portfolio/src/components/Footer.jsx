// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { LINKS } from '../constants'; // Import the links

const Footer = () => {
  return (
    <footer id="contact" className="py-12 bg-black/40 text-center border-t border-white/5">
      <div className="flex justify-center gap-8 mb-8 text-3xl">
        {/* GitHub Link */}
        <a 
          href={LINKS.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-slate-400 hover:text-primary transition-transform hover:-translate-y-1"
        >
          <FaGithub />
        </a>

        {/* LinkedIn Link */}
        <a 
          href={LINKS.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-slate-400 hover:text-primary transition-transform hover:-translate-y-1"
        >
          <FaLinkedin />
        </a>

        {/* Email Link */}
        <a 
          href={LINKS.email} 
          className="text-slate-400 hover:text-primary transition-transform hover:-translate-y-1"
        >
          <FaEnvelope />
        </a>
      </div>
      <p className="text-slate-500">© 2026 Anuj Bhushan Tiwari. Designed with React & Tailwind v4.</p>
    </footer>
  );
};

export default Footer;