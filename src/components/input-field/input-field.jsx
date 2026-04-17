import React from 'react';
import { cn } from '../../utils/cn';

const InputField = ({ label, type = 'text', placeholder, value, onChange, name, required = false, isTextArea = false }) => {
  const inputClasses = cn(
    'w-full px-4 py-3.5 text-sm bg-[#f5f5f5] border border-neutral-200 rounded-xl',
    'focus:outline-none focus:border-black transition-all duration-300',
    'placeholder:text-neutral-400 text-black',
    'hover:border-neutral-300'
  );

  return (
    <div className="flex flex-col gap-2 w-full group">
      {label && (
        <label className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest ml-1 group-focus-within:text-black transition-colors">
          {label}
        </label>
      )}
      {isTextArea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          rows={4}
          className={cn(inputClasses, 'resize-none')}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={inputClasses}
        />
      )}
    </div>
  );
};

export default InputField;
