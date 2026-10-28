import React from 'react';

interface NewspaperHeaderProps {
  pageNumber: number;
  totalPages: number;
  subTitle?: string;
  category?: string;
  date?: string;
}

export const NewspaperHeader: React.FC<NewspaperHeaderProps> = ({
  pageNumber,
  totalPages,
  subTitle = 'PRODUCT LAUNCH PRESS RELEASE',
  category = 'CYBERSECURITY & DIGITAL FORENSICS DOSSIER',
  date = 'OCTOBER 28, 2026',
}) => {
  return (
    <header className="w-full text-center border-b-2 border-[#1f1d19]/40 pb-2 mb-4 select-none">
      {/* Top Dateline & Metadata Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-[#1f1d19]/30 pb-1 mb-2 font-mono-tech text-[9px] sm:text-[10px] uppercase tracking-widest text-[#5a544b]">
        <span>THE HYDERABAD RESEARCH CHRONICLE</span>
        <span>{date} • VOL. XXVI • NO. {String(pageNumber).padStart(2, '0')}</span>
        <span>PAGE {pageNumber} OF {totalPages} • PRICE: TWO CENTS</span>
      </div>

      {/* GIANT "EXTRA!! EXTRA!!" HEADLINE (Matching Reference Image) */}
      <div className="py-1">
        <h1 className="woodblock-headline text-5xl sm:text-7xl lg:text-8xl tracking-[0.06em] text-[#1a1815] leading-none py-1">
          EXTRA!! EXTRA!!
        </h1>
      </div>

      {/* DOUBLE-LINE BORDER WITH SUB-HEADER BANNER */}
      <div className="newspaper-double-rule-thick my-2">
        <h2 className="font-typewriter text-lg sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-[0.12em] text-[#1f1d19]">
          {subTitle}
        </h2>
      </div>

      {/* Micro-dateline and Category Kicker */}
      <div className="flex items-center justify-between px-1 text-[9px] sm:text-[10px] font-mono-tech tracking-wider text-[#686158] uppercase">
        <span>EDITION: RESEARCH SPECIAL DISPATCH</span>
        <span className="font-bold text-[#8C3833]">★ {category} ★</span>
        <span>AUTHENTIC RESUME DOSSIER</span>
      </div>
    </header>
  );
};
