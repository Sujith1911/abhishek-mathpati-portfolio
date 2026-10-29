import React from 'react';
import { X, ChevronRight, Newspaper } from 'lucide-react';

interface NewspaperIndexModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSpread: (spreadIndex: number) => void;
  currentSpread: number;
}

export const NewspaperIndexModal: React.FC<NewspaperIndexModalProps> = ({
  isOpen,
  onClose,
  onSelectSpread,
  currentSpread,
}) => {
  if (!isOpen) return null;

  const sections = [
    {
      spread: 1,
      title: 'The Daily Chronicle: Notes on a Life',
      pages: '01',
      tag: 'FRONT COVER',
      desc: 'The official vintage broadsheet cover: Notes on a Life, portrait photography, and curated field notes.',
    },
    {
      spread: 2,
      title: 'Table of Contents & 01. Education',
      pages: '02–03',
      tag: 'CONTENTS & ACADEMICS',
      desc: 'Editorial Table of Contents and 01. Education (KMEC B.E. 8.36, Masab Tank Diploma 8.8, SSC 81.4%).',
    },
    {
      spread: 3,
      title: '02. Professional Experience & 03. Projects',
      pages: '04–05',
      tag: 'EXPERIENCE & PROJECTS',
      desc: 'Telangana Police Bharosa Module, Teleparadigm Systems, SecureShare P2P & QPAT NLP Tool.',
    },
    {
      spread: 4,
      title: '04. Publications & 05. Skills',
      pages: '06–07',
      tag: 'PUBLICATIONS & ARSENAL',
      desc: '3 IEEE/IJRDET research publications with Pareto curves, and classified technical skills inventory.',
    },
    {
      spread: 5,
      title: '06. Certifications & 07. Activities and Societies',
      pages: '08–09',
      tag: 'CREDENTIALS & SOCIETIES',
      desc: 'NLU Odisha Cyber Law 87% Distinction, CCNAv7, IBM Analyst, Student Council President & Arts.',
    },
    {
      spread: 6,
      title: 'Telegraph Dispatch & Verified PDF Colophon',
      pages: '10–11',
      tag: 'DISPATCH & ARCHIVE',
      desc: 'Archival telegraph transmission desk and official verified resume PDF download.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl newspaper-paper-texture p-6 sm:p-8 rounded-xs border-2 border-[#141210] newspaper-broadsheet-shadow">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-[#141210] hover:bg-[#141210] hover:text-[#f5f0e1] rounded-xs transition-colors cursor-pointer"
          aria-label="Close Index"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="newspaper-double-rule pb-2 mb-4">
          <div className="flex items-center gap-2 text-[#8C3833] font-mono-tech text-[10px] uppercase font-bold tracking-widest">
            <Newspaper className="w-4 h-4" />
            <span>EDITORIAL DESK // RAPID BROADSHEET NAVIGATION</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#141210] mt-1">
            GENERAL CATALOGUE & INDEX
          </h3>
        </div>

        {/* Sections List */}
        <div className="max-h-[60vh] overflow-y-auto editorial-scroll scroll-smooth space-y-2 pr-1">
          {sections.map((sec) => {
            const isCurrent = currentSpread === sec.spread;
            return (
              <button
                key={sec.spread}
                type="button"
                onClick={() => {
                  onSelectSpread(sec.spread);
                  onClose();
                }}
                className={`w-full text-left p-3 rounded-xs border transition-all cursor-pointer flex items-center justify-between ${
                  isCurrent
                    ? 'bg-[#141210] text-[#f5f0e1] border-[#141210] shadow-sm'
                    : 'bg-[#141210]/4 border-[#141210]/20 hover:border-[#141210] hover:bg-[#141210]/8 text-[#141210]'
                }`}
              >
                <div className="overflow-hidden mr-3">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className={`font-mono-tech text-[10px] font-bold ${isCurrent ? 'text-[#e5d5be]' : 'text-[#8C3833]'}`}>
                      PAGES {sec.pages}
                    </span>
                    <span className={`font-mono-tech text-[9px] uppercase tracking-wider px-1.5 py-0.2 border ${isCurrent ? 'border-neutral-500 text-neutral-300' : 'border-[#141210]/30 text-[#5a5047]'}`}>
                      {sec.tag}
                    </span>
                  </div>
                  <h4 className="font-serif-vintage text-base font-bold leading-tight truncate">
                    {sec.title}
                  </h4>
                  <p className={`text-[11px] font-newsreader truncate mt-0.5 ${isCurrent ? 'text-neutral-300' : 'text-[#5a5047]'}`}>
                    {sec.desc}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0">
                  {isCurrent && (
                    <span className="font-mono-tech text-[9px] font-bold bg-[#f5f0e1] text-[#141210] px-1.5 py-0.5">
                      ACTIVE
                    </span>
                  )}
                  <ChevronRight className={`w-4 h-4 ${isCurrent ? 'text-white' : 'text-[#141210]/60'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="mt-4 pt-3 border-t border-[#141210]/20 flex items-center justify-between font-mono-tech text-[10px] text-[#5a5047]">
          <span>SELECT ANY SECTION TO TURN IMMEDIATELY</span>
          <span className="font-bold text-[#141210]">[PRESS ESC TO CLOSE]</span>
        </div>
      </div>
    </div>
  );
};

