import React from 'react';
import { cn } from '../../utils/cn';

const ButtonPrimary = ({ children, onClick, className, type = 'button', disabled = false, loading = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        'relative group overflow-hidden bg-[#ed6a5a] text-white',
        'border-4 border-[#1a1a1a] shadow-[6px_6px_0px_#1a1a1a]', 
        'font-black uppercase tracking-widest px-8 py-4',
        'transition-all duration-200 ease-out',
        'hover:shadow-[2px_2px_0px_#1a1a1a] hover:translate-x-1 hover:translate-y-1',
        'active:shadow-none active:translate-x-1.5 active:translate-y-1.5',
        'disabled:opacity-50 disabled:pointer-events-none',
        className
      )}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmZmZmMiI+PC9yZWN0Pgo8L3N2Zz4=')] opacity-20 pointer-events-none" />
      
      <span className={cn('relative z-10 flex items-center justify-center gap-3', loading && 'opacity-0')}>
        {children}
      </span>
      {loading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="w-5 h-5 border-4 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </button>
  );
};

export default ButtonPrimary;
