import React from 'react';

interface ArchivalStampProps {
  text: string;
  subtext?: string;
  variant?: 'red' | 'olive' | 'dark' | 'sepia' | 'inverted' | 'outline';
  rotation?: number;
  className?: string;
  date?: string;
}

export const ArchivalStamp: React.FC<ArchivalStampProps> = ({
  text,
  subtext,
  variant = 'dark',
  rotation = -3,
  className = '',
  date,
}) => {
  // Pure Black & White Monochromatic Stamp Variants
  const colorMap: Record<string, string> = {
    red: 'border-black text-black bg-black/5 hover:bg-black/10',
    olive: 'border-black text-white bg-black hover:bg-neutral-800',
    dark: 'border-2 border-black text-black bg-black/5 hover:bg-black/10',
    sepia: 'border-neutral-800 text-neutral-900 bg-neutral-100/90',
    inverted: 'border-black text-white bg-black shadow-sm',
    outline: 'border-2 border-dashed border-black text-black bg-transparent',
  };

  const selectedStyle = colorMap[variant] || colorMap.dark;

  return (
    <div
      className={`inline-flex flex-col items-center justify-center p-1.5 px-3 border-2 uppercase tracking-widest select-none transition-all duration-200 group-hover:scale-105 ${selectedStyle} ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        fontFamily: "'Special Elite', Courier, monospace",
        boxShadow: 'inset 0 0 3px rgba(0,0,0,0.1), 1px 1px 0 rgba(0,0,0,0.15)',
      }}
    >
      <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold leading-none">
        <span>★</span>
        <span>{text}</span>
        <span>★</span>
      </div>
      {subtext && (
        <span className="text-[8px] sm:text-[9px] tracking-normal font-mono-tech mt-0.5 opacity-90">
          {subtext}
        </span>
      )}
      {date && (
        <span className="text-[7px] sm:text-[8px] tracking-widest font-mono-tech opacity-80 mt-0.5 border-t border-current pt-0.5 w-full text-center">
          {date}
        </span>
      )}
    </div>
  );
};
