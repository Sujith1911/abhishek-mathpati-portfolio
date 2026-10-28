import React from 'react';

interface ArchivalStampProps {
  text: string;
  subtext?: string;
  variant?: 'red' | 'olive' | 'dark' | 'sepia';
  rotation?: number;
  className?: string;
  date?: string;
}

export const ArchivalStamp: React.FC<ArchivalStampProps> = ({
  text,
  subtext,
  variant = 'red',
  rotation = -4,
  className = '',
  date,
}) => {
  const colorMap = {
    red: 'border-[#8C3833]/85 text-[#8C3833]/90 bg-[#8C3833]/5',
    olive: 'border-[#5b583f]/85 text-[#5b583f]/90 bg-[#5b583f]/5',
    dark: 'border-[#26231e]/85 text-[#26231e]/90 bg-[#26231e]/5',
    sepia: 'border-[#876e4b]/85 text-[#876e4b]/90 bg-[#876e4b]/5',
  };

  return (
    <div
      className={`inline-flex flex-col items-center justify-center p-1.5 px-3 border-2 border-dashed uppercase tracking-widest select-none pointer-events-none transition-transform ${colorMap[variant]} ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        fontFamily: "'Special Elite', monospace",
        boxShadow: 'inset 0 0 4px rgba(0,0,0,0.06)',
      }}
    >
      <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold leading-none">
        <span>★</span>
        <span>{text}</span>
        <span>★</span>
      </div>
      {subtext && (
        <span className="text-[8px] sm:text-[9px] tracking-normal font-mono-tech mt-0.5 opacity-85">
          {subtext}
        </span>
      )}
      {date && (
        <span className="text-[7px] sm:text-[8px] tracking-widest font-mono-tech opacity-75 mt-0.5 border-t border-current pt-0.5 w-full text-center">
          {date}
        </span>
      )}
    </div>
  );
};
