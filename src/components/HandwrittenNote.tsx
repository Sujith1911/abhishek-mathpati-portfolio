import React from 'react';

interface HandwrittenNoteProps {
  children: React.ReactNode;
  rotation?: number;
  className?: string;
  arrow?: 'left' | 'right' | 'down' | 'up' | 'none';
  color?: string;
}

export const HandwrittenNote: React.FC<HandwrittenNoteProps> = ({
  children,
  rotation = -2,
  className = '',
  arrow = 'none',
  color = '#263238', // Faded blue-black or graphite ink
}) => {
  return (
    <div
      className={`font-handwriting text-base sm:text-lg leading-snug select-none inline-flex items-center gap-1.5 transition-transform ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        color,
        textShadow: '0 0 1px rgba(0,0,0,0.05)',
      }}
    >
      {arrow === 'left' && (
        <svg className="w-5 h-5 flex-shrink-0 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      )}
      {arrow === 'up' && (
        <svg className="w-5 h-5 flex-shrink-0 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      )}
      <span>{children}</span>
      {arrow === 'right' && (
        <svg className="w-5 h-5 flex-shrink-0 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      )}
      {arrow === 'down' && (
        <svg className="w-5 h-5 flex-shrink-0 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      )}
    </div>
  );
};

