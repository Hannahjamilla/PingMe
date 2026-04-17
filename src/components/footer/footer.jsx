import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img 
            src="/pingme-logo.png" 
            alt="PingMe Logo" 
            className="w-6 h-6 object-contain"
          />
          <span className="text-xs font-semibold text-neutral-400">
            PingMe — helping beginners in tech
          </span>
        </div>
        
        <span className="text-neutral-600 text-xs">
          &copy; {new Date().getFullYear()} PingMe
        </span>
      </div>
    </footer>
  );
};

export default Footer;
