import React from 'react';
import { BookOpen, ShieldAlert } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { soundManager } from '../utils/sound';

interface BookCoverProps {
  onOpen: () => void;
}

export const BookCover: React.FC<BookCoverProps> = ({ onOpen }) => {
  const handleOpen = () => {
    soundManager.playPageTurnSound();
    onOpen();
  };

  return (
    <div className="relative w-full max-w-[560px] h-[720px] sm:h-[780px] transition-all duration-500 ease-out">
      {/* Real Book Thickness Layers (Spine & Page Stack) in Stark Monochrome */}
      <div className="absolute -right-4 top-3 bottom-3 w-4 bg-[#ececec] rounded-r-xs shadow-2xl border-y border-r border-neutral-600 flex flex-col justify-between overflow-hidden">
        {/* Layer lines simulating individual paper pages */}
        <div className="h-full w-full bg-[repeating-linear-gradient(to_bottom,#ffffff,#ffffff_2px,#cccccc_2px,#cccccc_3px)] opacity-80"></div>
      </div>
      <div className="absolute -right-2 top-2 bottom-2 w-2 bg-[#f5f5f5] rounded-r-xs border-y border-r border-neutral-500"></div>

      {/* Main Cover Body - Stark Black Leather/Buckram */}
      <div
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleOpen();
          }
        }}
        className="bw-cover-texture relative w-full h-full rounded-r-md rounded-l-xs p-8 sm:p-12 flex flex-col justify-between cursor-pointer select-none border-2 border-neutral-700 bw-book-shadow group hover:-translate-y-1.5 transition-all duration-300"
      >
        {/* Left Book Spine Crease & Shadow */}
        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-black via-black/60 to-transparent pointer-events-none rounded-l-xs"></div>
        <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-neutral-800 pointer-events-none shadow-[1px_0_2px_rgba(255,255,255,0.1)]"></div>

        {/* Polished Chrome/Silver Archival Corner Plates */}
        <div className="absolute top-0 right-0 w-14 h-14 border-t-4 border-r-4 border-neutral-400 rounded-tr-md pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-14 h-14 border-b-4 border-r-4 border-neutral-400 rounded-br-md pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-neutral-500 rounded-tl-xs pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-neutral-500 rounded-bl-xs pointer-events-none"></div>

        {/* Archival Obsidian Ribbon Bookmark */}
        <div className="absolute -top-3 left-32 w-7 h-32 bg-black shadow-2xl border-x border-neutral-700 rounded-b-xs pointer-events-none z-10 opacity-95 flex items-end justify-center pb-2">
          <div className="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[10px] border-b-neutral-900 transform rotate-180 mb-[-10px]"></div>
        </div>

        {/* Top Header & Archival File Stamp */}
        <div className="relative z-10 pt-2 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 px-3.5 py-1.5 border border-neutral-400 bg-black/90 text-neutral-200 text-[10px] sm:text-xs font-mono-tech tracking-[0.25em] uppercase mb-4 shadow-sm">
            <ShieldAlert className="w-3.5 h-3.5 text-white" />
            <span className="font-bold">CONFIDENTIAL ARCHIVE • VOL. 2026</span>
          </div>

          <h3 className="font-mono-tech text-[10px] tracking-[0.35em] uppercase text-neutral-400 mb-1">
            ACADEMIC MONOGRAPH & DOSSIER
          </h3>
          <div className="w-20 h-[1px] bg-neutral-500/60 mb-3"></div>
        </div>

        {/* Center Main Silver-Embossed Title Plate */}
        <div className="relative z-10 my-auto text-center px-2">
          <div className="py-7 px-5 border-y-2 border-double border-neutral-400/80 bg-neutral-950/60 backdrop-blur-xs">
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.14em] text-white uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] leading-tight mb-2">
              THE ARCHIVE OF A CYBERSECURITY RESEARCHER
            </h1>
            <div className="w-16 h-1 bg-white mx-auto my-3.5"></div>
            <p className="font-typewriter text-xs sm:text-sm tracking-widest text-neutral-300 uppercase italic">
              "FIELD NOTES OF AN ASPIRING RESEARCHER"
            </p>
          </div>

          {/* Owner Identity */}
          <div className="mt-8">
            <span className="text-[10px] tracking-[0.35em] font-mono-tech text-neutral-400 uppercase block mb-1">
              RECORDED & INVESTIGATED BY
            </span>
            <h2 className="font-serif-vintage text-2xl sm:text-3xl text-white font-bold tracking-wider drop-shadow-md">
              {RESUME_DATA.personal.name}
            </h2>
            <p className="font-mono-tech text-[11px] text-neutral-300 mt-1.5 tracking-wide">
              {RESUME_DATA.personal.title}
            </p>
            <p className="font-mono-tech text-[10px] text-neutral-400 tracking-widest mt-0.5">
              {RESUME_DATA.personal.institution}
            </p>
          </div>
        </div>

        {/* Bottom Seal & Interactive CTA */}
        <div className="relative z-10 pt-4 flex flex-col items-center text-center">
          {/* Stark Black & White Wax Seal Monogram */}
          <div className="w-16 h-16 rounded-full border-2 border-neutral-300 bg-black shadow-[inset_0_2px_6px_rgba(255,255,255,0.15),0_6px_14px_rgba(0,0,0,0.8)] flex items-center justify-center text-white font-serif-vintage text-xl font-bold mb-4 transform -rotate-6 group-hover:rotate-0 transition-transform">
            <div className="w-13 h-13 rounded-full border border-dashed border-neutral-400 flex items-center justify-center">
              MD
            </div>
          </div>

          {/* Handwritten Hint in Crisp White */}
          <div className="font-handwriting text-lg sm:text-xl text-neutral-200 tracking-wide mb-3.5 flex items-center gap-2 group-hover:scale-105 transition-transform">
            <span>Inspect the field notes & manuscripts</span>
            <span className="text-xl">→</span>
          </div>

          {/* Interactive Open Button - High Contrast Monochromatic */}
          <button
            type="button"
            className="flex items-center gap-2.5 px-7 py-3 rounded-xs bg-white text-black hover:bg-neutral-200 border border-white text-xs font-mono-tech uppercase font-bold tracking-[0.2em] transition-all shadow-lg group-hover:shadow-white/20 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-black" />
            <span>Open Journal</span>
          </button>
        </div>
      </div>
    </div>
  );
};
