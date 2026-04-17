import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ onNavigate }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f5f5]/90 backdrop-blur-xl">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-2.5 cursor-pointer group"
          onClick={() => onNavigate('landing')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img 
            src="/src/assets/pingme-logo.png" 
            alt="PingMe Logo" 
            className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-sm font-bold tracking-tight text-black font-display">
            PingMe
          </span>
        </motion.div>
        
        <motion.button 
          onClick={() => onNavigate('home')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-[11px] font-semibold text-neutral-500 hover:text-black transition-colors duration-300 tracking-wide"
        >
          Say hello →
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;
