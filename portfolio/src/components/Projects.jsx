import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Import the icon
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <section id="projects" className="py-24 container mx-auto px-6">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold mb-16 text-center text-white"
      >
        Selected Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all hover:bg-white/10 group flex flex-col relative"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              {/* Conditionally render the link if it exists */}
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary transition-colors p-2"
                  title="View Live Demo"
                >
                  <FaExternalLinkAlt size={18} />
                </a>
              )}
            </div>

            <p className="text-sm text-primary font-mono mb-6">{project.subtitle}</p>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {project.points.map((point, i) => (
                <li key={i} className="text-slate-300 text-sm leading-relaxed flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs bg-dark text-slate-300 px-3 py-1 rounded-full border border-white/10">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;