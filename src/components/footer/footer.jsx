import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-[#1a1a1a] border-t-4 border-[#ed6a5a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIj48L3JlY3Q+Cjwvc3ZnPg==')] pointer-events-none" />
      
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12 flex flex-col items-center justify-center gap-6 relative z-10">
        
        <div className="text-center">
          <h2 className="font-display font-black text-2xl md:text-3xl uppercase text-white tracking-widest mb-1"
              style={{ textShadow: '2px 2px 0px #ed6a5a' }}>
            GET IN TOUCH
          </h2>
          <p className="font-mono font-bold text-[#f4f1bb] animate-pulse text-[10px] md:text-xs">Let's build something amazing together.</p>
        </div>

        <div className="flex items-center gap-3 bg-white border-2 border-[#ed6a5a] p-2 -rotate-1 shadow-[2px_2px_0px_#f4f1bb]">
          <div className="w-6 h-6 bg-[#f4f1bb] border border-[#1a1a1a] p-0.5">
            <img src="/pingme-logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-mono font-bold text-xs uppercase px-1">PingMe &copy; {new Date().getFullYear()}</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
