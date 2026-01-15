import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white/5">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-4xl font-bold mb-16 text-center text-white"
        >
          Technical Skills
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, borderColor: '#3b82f6' }}
              className="p-6 bg-dark rounded-2xl border border-white/10 flex flex-col items-center gap-4 w-36 md:w-44 shadow-xl cursor-default"
            >
              <div className="text-5xl text-primary">{skill.icon}</div>
              <span className="font-medium text-white">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;