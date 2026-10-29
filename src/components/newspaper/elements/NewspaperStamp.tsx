import React from 'react';

interface NewspaperStampProps {
  text: string;
  subtext?: string;
  variant?: 'crimson' | 'dark' | 'olive';
  rotation?: number;
  className?: string;
  date?: string;
}

export const NewspaperStamp: React.FC<NewspaperStampProps> = ({
  text,
  subtext,
  variant = 'crimson',
  rotation = -3,
  className = '',
  date,
}) => {
  const styles = {
    crimson: 'border-[#8C3833] text-[#8C3833] bg-[#8C3833]/5',
    dark: 'border-[#141210] text-[#141210] bg-[#141210]/5',
    olive: 'border-[#4b4e39] text-[#4b4e39] bg-[#4b4e39]/5',
  };

  return (
    <div
      className={`inline-flex flex-col items-center justify-center p-1.5 px-3 border-2 border-dashed uppercase tracking-widest select-none pointer-events-none transition-transform ${styles[variant]} ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        fontFamily: "'Special Elite', Courier, monospace",
        boxShadow: 'inset 0 0 4px rgba(0,0,0,0.06)',
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
        <span className="text-[7.5px] sm:text-[8px] tracking-widest font-mono-tech opacity-80 mt-0.5 border-t border-current pt-0.5 w-full text-center">
          {date}
        </span>
      )}
    </div>
  );
};
