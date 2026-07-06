import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Gamepad2 } from 'lucide-react';

const NAV_LINKS = [
  { label: 'HOME', page: 'landing' },
  { label: 'PROJECTS', page: 'projects' },
  { label: 'CONTACT', page: 'home' },
];

const Navbar = ({ onNavigate, currentPage }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (page) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white border-b-2 border-[#1a1a1a]`}>
        <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
          
          {/* Logo */}
          <motion.button
            className="flex items-center gap-2 group"
            onClick={() => handleNav('landing')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative w-8 h-8 bg-white border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] flex items-center justify-center p-1 group-hover:bg-[#f4f1bb] transition-colors">
              <img
                src="/pingme-logo.png"
                alt="PingMe Logo"
                className="w-full h-full object-contain relative z-10"
              />
            </div>
            <span className="text-sm font-black tracking-tight font-display text-[#1a1a1a] uppercase bg-[#ed6a5a] text-white px-2 py-0.5 border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] -rotate-1 group-hover:rotate-0 transition-transform">
              PingMe
            </span>
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden sm:flex items-center gap-3">
            {NAV_LINKS.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <motion.button
                  key={link.page}
                  onClick={() => handleNav(link.page)}
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 1 }}
                  className={`relative text-[10px] font-bold font-mono tracking-wider px-3 py-1.5 border-2 border-[#1a1a1a] transition-all duration-200 ${
                    isActive
                      ? 'bg-[#9bc1bc] text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]'
                      : 'bg-white text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] hover:bg-[#f4f1bb]'
                  }`}
                >
                  {link.label}
                </motion.button>
              );
            })}

            {/* Ping CTA pill */}
            <motion.button
              onClick={() => handleNav('home')}
              whileHover={{ y: -1 }}
              whileTap={{ y: 1 }}
              className="ml-2 flex items-center gap-1.5 text-[10px] font-black font-mono tracking-wider px-3 py-1.5 bg-[#ed6a5a] text-white border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] uppercase hover:bg-white hover:text-[#ed6a5a] transition-colors"
            >
              <div className="w-1.5 h-1.5 bg-white flex shrink-0 animate-pulse border border-[#1a1a1a]" />
              LET'S TALK
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden flex items-center justify-center w-8 h-8 bg-white border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-4 h-4 text-[#1a1a1a] stroke-[3]" /> : <Menu className="w-4 h-4 text-[#1a1a1a] stroke-[3]" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            className="fixed top-14 left-0 right-0 z-40 bg-white border-b-2 border-[#1a1a1a] shadow-[0_4px_0_#1a1a1a] sm:hidden"
          >
            <div className="p-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    key={link.page}
                    onClick={() => handleNav(link.page)}
                    className={`text-center font-mono font-bold text-sm tracking-wider px-4 py-3 border-2 border-[#1a1a1a] uppercase transition-all duration-200 ${
                      isActive
                        ? 'bg-[#9bc1bc] text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]'
                        : 'bg-white text-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <button 
                onClick={() => handleNav('home')}
                className="mt-2 flex items-center justify-center gap-2 bg-[#ed6a5a] text-white p-3 border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] font-black tracking-wider font-mono uppercase text-sm"
              >
                LET'S CHAT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
