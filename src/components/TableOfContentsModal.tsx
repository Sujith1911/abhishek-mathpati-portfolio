import React from 'react';
import { X, ChevronRight } from 'lucide-react';
import { ArchivalStamp } from './ArchivalStamp';

interface TableOfContentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSpread: (spreadIndex: number) => void;
  currentSpread: number;
}

export const TableOfContentsModal: React.FC<TableOfContentsModalProps> = ({
  isOpen,
  onClose,
  onSelectSpread,
  currentSpread,
}) => {
  if (!isOpen) return null;

  const chapters = [
    { spread: 1, title: 'Frontispiece & Master Catalogue', pages: '01–02', category: 'INDEX' },
    { spread: 2, title: 'Researcher Profile & Academic Record', pages: '03–04', category: 'BIOGRAPHY' },
    { spread: 3, title: 'Field Experience: Police Bharosa & Teleparadigm', pages: '05–06', category: 'EXPERIENCE' },
    { spread: 4, title: 'Published Research: IEEE & IJRDET Papers', pages: '07–08', category: 'PUBLICATIONS' },
    { spread: 5, title: 'Projects: SecureShare & QPAT System', pages: '09–10', category: 'ENGINEERING' },
    { spread: 6, title: 'Projects: SMIA Forensic & Alcohol Interlock', pages: '11–12', category: 'FORENSICS & HARDWARE' },
    { spread: 7, title: 'Technical Specimen Index & Certifications', pages: '13–14', category: 'SKILLS & DIPLOMAS' },
    { spread: 8, title: 'Student Body President & Arts Cadre', pages: '15–16', category: 'LEADERSHIP' },
    { spread: 9, title: 'Dispatch, Correspondence & Archival Colophon', pages: '17–18', category: 'CORRESPONDENCE' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bw-paper-texture p-6 sm:p-8 rounded-sm border-2 border-black shadow-[0_25px_50px_rgba(0,0,0,0.9)]">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-black hover:bg-black hover:text-white rounded-xs transition-colors cursor-pointer"
          aria-label="Close Catalogue"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b-2 border-double border-black pb-3 mb-4">
          <span className="font-mono-tech text-[9px] uppercase tracking-[0.3em] text-neutral-600 block">
            RAPID NAVIGATION
          </span>
          <div className="flex items-center justify-between">
            <h3 className="font-typewriter text-xl font-bold uppercase tracking-wider text-black">
              ARCHIVAL DOSSIER INDEX
            </h3>
            <ArchivalStamp text="EXPEDITE" variant="olive" rotation={1} />
          </div>
        </div>

        {/* Chapter List */}
        <div className="max-h-[60vh] overflow-y-auto space-y-2 pr-1">
          {chapters.map((ch) => {
            const isCurrent = currentSpread === ch.spread;
            return (
              <button
                key={ch.spread}
                type="button"
                onClick={() => {
                  onSelectSpread(ch.spread);
                  onClose();
                }}
                className={`w-full text-left p-3 rounded-xs flex items-center justify-between transition-all border cursor-pointer ${
                  isCurrent
                    ? 'bg-black text-white border-black font-bold shadow-sm'
                    : 'bg-black/[0.03] border-black/20 hover:border-black hover:bg-black/10 text-black'
                }`}
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <span className={`font-mono-tech text-[10px] font-bold flex-shrink-0 ${isCurrent ? 'text-neutral-300' : 'text-neutral-600'}`}>
                    PP. {ch.pages}
                  </span>
                  <div className="truncate">
                    <span className="font-serif-vintage text-sm font-bold block truncate">
                      {ch.title}
                    </span>
                    <span className={`font-mono-tech text-[9px] uppercase ${isCurrent ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {ch.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
                  {isCurrent && (
                    <span className="font-mono-tech text-[9px] font-bold text-black bg-white px-1.5 py-0.5">
                      ACTIVE
                    </span>
                  )}
                  <ChevronRight className={`w-4 h-4 ${isCurrent ? 'text-white' : 'text-black/60'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Modal Footer Note */}
        <div className="mt-4 pt-3 border-t border-black/20 flex items-center justify-between font-mono-tech text-[10px] text-neutral-600">
          <span>SELECT ANY CHAPTER TO INSTANTLY TURN PAGES</span>
          <span className="font-bold text-black">[ESC TO CLOSE]</span>
        </div>
      </div>
    </div>
  );
};
