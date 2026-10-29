import React, { useState } from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { RESUME_DATA } from '../../../data/resumeData';

interface NewspaperCoverPageProps {
  onOpenNewspaper: () => void;
  isDisappearing?: boolean;
}

export const NewspaperCoverPage: React.FC<NewspaperCoverPageProps> = ({
  onOpenNewspaper,
  isDisappearing = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onOpenNewspaper}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
          e.preventDefault();
          onOpenNewspaper();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label="The Daily Chronicle - Notes on a Life. Click to open and inspect the archive."
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full h-full flex flex-col items-center justify-center p-1 sm:p-2 md:p-3 overflow-hidden relative cursor-pointer select-none bg-[#f2f1ec] focus:outline-hidden"
    >
      {/* Container strictly preserving the exact 723:1024 newspaper broadsheet proportions */}
      <div
        className={`relative h-full max-h-[calc(100vh-2rem)] aspect-[723/1024] max-w-full transition-all duration-500 rounded-xs overflow-hidden ${
          isHovered && !isDisappearing
            ? 'scale-[1.01] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.35)]'
            : 'scale-100 shadow-xl'
        }`}
      >
        {/* The Exact Front Page Image — Byte-for-byte exact to user uploaded reference */}
        <img
          src="/daily_chronicle_cover.jpg"
          alt="The Daily Chronicle - Notes on a Life"
          className="w-full h-full object-contain pointer-events-none select-none block"
          loading="eager"
        />

        {/* Elegant Hover Overlay Prompt */}
        <div
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-all duration-300 pointer-events-none z-20 ${
            isHovered && !isDisappearing
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2'
          }`}
        >
          <div className="bg-[#141210]/95 text-[#f5f0e1] backdrop-blur-xs px-4 py-2 rounded-xs border border-[#d9c49f]/40 shadow-2xl flex items-center gap-2 font-mono-tech text-xs uppercase tracking-[0.2em] font-bold">
            <BookOpen className="w-3.5 h-3.5 text-[#d9c49f]" />
            <span>CLICK TO OPEN ARCHIVE</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#d9c49f]" />
          </div>
        </div>

        {/* Subtle Bottom Affordance (Fades out when hovered) */}
        {!isDisappearing && (
          <div
            className={`absolute bottom-2.5 right-3.5 font-mono-tech text-[9.5px] uppercase tracking-widest text-[#141210]/45 transition-opacity duration-300 ${
              isHovered ? 'opacity-0' : 'opacity-85'
            }`}
          >
            [ CLICK TO TURN PAGE → ]
          </div>
        )}

        {/* Active Disappearing State Feedback */}
        {isDisappearing && (
          <div className="absolute inset-0 bg-[#f4f3ef]/25 backdrop-blur-[0.5px] flex items-center justify-center z-30 animate-in fade-in duration-200">
            <div className="bg-[#141210] text-[#f5f0e1] px-5 py-2.5 rounded-xs border border-[#d9c49f] shadow-2xl flex items-center gap-2.5 font-mono-tech text-xs uppercase tracking-[0.2em] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#8C3833] animate-ping"></span>
              <span>OPENING THE CHRONICLE...</span>
            </div>
          </div>
        )}
      </div>

      {/* Screen Reader Semantic Information */}
      <div className="sr-only">
        <h1>THE DAILY CHRONICLE - VOL 01. 2026</h1>
        <h2>NOTES ON A LIFE</h2>
        <p>A collection of work, thoughts, and curiosities. An ongoing chapter.</p>
        <p>Portfolio of {RESUME_DATA.personal.name}, Cybersecurity Researcher and Engineer.</p>
      </div>
    </div>
  );
};
