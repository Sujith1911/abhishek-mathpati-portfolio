import React from 'react';

interface NewspaperMastheadProps {
  edition?: string;
  volume?: string;
  date?: string;
  showFullBanner?: boolean;
}

export const NewspaperMasthead: React.FC<NewspaperMastheadProps> = ({
  edition = 'LATE CITY SPECIAL EDITION',
  volume = 'VOL. XXIV ... NO. 102',
  date = 'OCTOBER 2026',
  showFullBanner = true,
}) => {
  return (
    <div className="w-full text-center select-none pb-2">
      {/* Top Folio Bar */}
      <div className="flex justify-between items-center text-[9px] sm:text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#5a5047] border-b border-[#221e1a]/30 pb-1 mb-1.5 px-1">
        <span>ESTABLISHED 2026</span>
        <span className="hidden sm:inline">HYDERABAD, TELANGANA • INDIA</span>
        <span>PRICE FIVE CENTS</span>
      </div>

      {/* Main Title Masthead */}
      <div className="py-1">
        <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-[0.06em] text-[#141210] leading-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]">
          THE CHRONICLE
        </h1>
        <p className="font-serif-vintage text-[11px] sm:text-sm tracking-[0.25em] uppercase text-[#3a332c] mt-1 font-semibold italic">
          OF CYBERNETIC INVESTIGATION & DIGITAL FORENSICS
        </p>
      </div>

      {showFullBanner && (
        <>
          {/* Subtitle Banner & Editorial Purpose */}
          <div className="newspaper-double-rule my-1.5 flex items-center justify-between text-[9px] sm:text-[10.5px] font-mono-tech uppercase tracking-widest text-[#221e1a] font-bold px-2">
            <span>{volume}</span>
            <span className="text-[#8C3833]">{edition}</span>
            <span>{date}</span>
          </div>

          <div className="text-[10px] sm:text-[11px] font-serif-vintage italic text-[#4a423a] text-center border-b border-[#221e1a]/25 pb-1 mb-2">
            "A Comprehensive Archival Record of Investigations, Decentralized Architectures, and Scholarly Inquiries."
          </div>
        </>
      )}
    </div>
  );
};
