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
    <div className="relative w-full max-w-[500px] h-[680px] sm:h-[720px] transition-all duration-500 ease-out">
      {/* Real Book Thickness Layers (Spine & Page Stack) */}
      <div className="absolute -right-4 top-3 bottom-3 w-4 bg-[#d8caa8] rounded-r-sm shadow-xl border-y border-r border-[#968261]/60 flex flex-col justify-between overflow-hidden">
        {/* Layer lines simulating individual paper pages */}
        <div className="h-full w-full bg-[repeating-linear-gradient(to_bottom,#d8caa8,#d8caa8_2px,#bfae8a_2px,#bfae8a_3px)] opacity-60"></div>
      </div>
      <div className="absolute -right-2 top-2 bottom-2 w-2 bg-[#ecdcb9] rounded-r-xs border-y border-r border-[#968261]/40"></div>

      {/* Main Cover Body */}
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
        className="cover-leather-texture relative w-full h-full rounded-r-md rounded-l-xs p-8 sm:p-10 flex flex-col justify-between cursor-pointer select-none border-2 border-[#150d0a] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_10px_20px_rgba(0,0,0,0.6)] group hover:shadow-[0_30px_70px_-10px_rgba(0,0,0,0.95)] hover:-translate-y-1 transition-all duration-300"
      >
        {/* Left Book Spine Crease & Shadow */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0d0907]/90 via-[#221612]/40 to-transparent pointer-events-none rounded-l-xs"></div>
        <div className="absolute left-7 top-0 bottom-0 w-[2px] bg-[#110b08]/80 pointer-events-none shadow-[1px_0_2px_rgba(255,255,255,0.06)]"></div>

        {/* Brass Vintage Corners */}
        <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-[#bca060]/70 rounded-tr-md pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#bca060]/70 rounded-br-md pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-[#bca060]/40 rounded-tl-xs pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-[#bca060]/40 rounded-bl-xs pointer-events-none"></div>

        {/* Hanging Archival Ribbon Bookmark */}
        <div className="absolute -top-3 left-28 w-6 h-28 bg-[#8C3833] shadow-md border-x border-[#592320] rounded-b-sm pointer-events-none z-10 opacity-90 flex items-end justify-center pb-2">
          <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[8px] border-b-transparent transform rotate-180 mb-[-8px]"></div>
        </div>

        {/* Top Header & Archival File Stamp */}
        <div className="relative z-10 pt-2 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 px-3 py-1 border border-[#c4a96b]/30 bg-[#160e0a]/60 text-[#c4a96b] text-[10px] sm:text-xs font-mono-tech tracking-[0.25em] uppercase mb-4">
            <ShieldAlert className="w-3 h-3 text-[#c4a96b]" />
            <span>CONFIDENTIAL ARCHIVE • VOL. 2026</span>
          </div>

          <h3 className="font-mono-tech text-[10px] tracking-[0.3em] uppercase text-[#a99572] mb-1">
            ACADEMIC MONOGRAPH & DOSSIER
          </h3>
          <div className="w-16 h-[1px] bg-[#a99572]/40 mb-3"></div>
        </div>

        {/* Center Main Gilded Title Plate */}
        <div className="relative z-10 my-auto text-center px-2">
          <div className="py-6 px-4 border-y-2 border-double border-[#d2b77a]/40 bg-[#1f1511]/40 backdrop-blur-[1px]">
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.12em] text-[#e8d5a7] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight mb-2">
              THE ARCHIVE OF A CYBERSECURITY RESEARCHER
            </h1>
            <div className="w-12 h-1 bg-[#8C3833] mx-auto my-3"></div>
            <p className="font-typewriter text-xs sm:text-sm tracking-wider text-[#cfbc96] uppercase italic">
              "FIELD NOTES OF AN ASPIRING RESEARCHER"
            </p>
          </div>

          {/* Owner Identity */}
          <div className="mt-8">
            <span className="text-[10px] tracking-[0.3em] font-mono-tech text-[#8e7b5f] uppercase block mb-1">
              RECORDED & INVESTIGATED BY
            </span>
            <h2 className="font-serif-vintage text-2xl sm:text-3xl text-[#f3ebd8] font-bold tracking-wider drop-shadow-md">
              {RESUME_DATA.personal.name}
            </h2>
            <p className="font-mono-tech text-[11px] text-[#bca075] mt-1 tracking-wide">
              {RESUME_DATA.personal.title}
            </p>
            <p className="font-mono-tech text-[10px] text-[#8e7b5f] tracking-widest mt-0.5">
              {RESUME_DATA.personal.institution}
            </p>
          </div>
        </div>

        {/* Bottom Seal & Interactive CTA */}
        <div className="relative z-10 pt-4 flex flex-col items-center text-center">
          {/* Archival Monogram Wax Seal Emblem */}
          <div className="w-16 h-16 rounded-full border-2 border-[#c4a96b]/60 bg-[#8C3833] shadow-[inset_0_2px_4px_rgba(0,0,0,0.4),0_4px_8px_rgba(0,0,0,0.6)] flex items-center justify-center text-[#f3ebd8] font-serif-vintage text-xl font-bold mb-4 transform -rotate-6">
            <div className="w-13 h-13 rounded-full border border-dashed border-[#f3ebd8]/50 flex items-center justify-center">
              MD
            </div>
          </div>

          {/* Handwritten Hint */}
          <div className="font-handwriting text-lg text-[#e6c98f] tracking-wide mb-3 flex items-center gap-1.5 group-hover:scale-105 transition-transform">
            <span>Inspect the field notes & manuscripts</span>
            <span className="text-xl">→</span>
          </div>

          {/* Interactive Open Button */}
          <button
            type="button"
            className="flex items-center gap-2.5 px-6 py-2.5 rounded-sm bg-[#d2b77a]/15 hover:bg-[#d2b77a]/25 text-[#f3ebd8] border border-[#d2b77a]/50 text-xs font-mono-tech uppercase tracking-[0.2em] transition-all shadow-md group-hover:border-[#d2b77a]"
          >
            <BookOpen className="w-4 h-4 text-[#d2b77a]" />
            <span>Open Journal</span>
          </button>
        </div>
      </div>
    </div>
  );
};
