import React from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';
import { HERO_CONTENT, LINKS } from '../constants';
import profilePic from '../assets/profile.jpeg'; // <--- Make sure this matches your file name!

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-[10%] left-[-5%] w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] -z-10" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="text-left">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl text-primary font-medium mb-4 font-display"
          >
            {HERO_CONTENT.role}
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight leading-tight font-display"
          >
            {HERO_CONTENT.name}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
          >
            {HERO_CONTENT.description}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4"
          >
            <a 
              href={LINKS.resume} 
              download="Anuj_Tiwari_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-white font-bold hover:bg-blue-600 transition shadow-lg shadow-primary/25"
            >
              <FaFileDownload /> Resume
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full border border-slate-600 text-slate-300 hover:border-primary hover:text-primary transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Your Photo */}
        <div className="flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            {/* The Image */}
            <motion.img 
              src={profilePic}
              alt="Anuj Bhushan Tiwari"
              animate={{ 
                y: [0, -10, 0] // Gentle Float Animation
              }} 
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              // Styling: Circle shape, Blue Border, Shadow
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary shadow-[0_0_40px_rgba(59,130,246,0.5)]"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;