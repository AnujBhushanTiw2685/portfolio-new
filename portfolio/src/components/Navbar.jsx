import React from 'react';

const Navbar = () => {
  const links = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="fixed top-0 w-full bg-dark/80 backdrop-blur-md z-50 border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-primary cursor-pointer">
          ABT.
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          {links.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-primary transition-colors text-slate-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

