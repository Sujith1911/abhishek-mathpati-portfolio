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
    { spread: 3, title: 'Field Experience: Police & Teleparadigm', pages: '05–06', category: 'EXPERIENCE' },
    { spread: 4, title: 'Published Research: IEEE & IJRDET Papers', pages: '07–08', category: 'PUBLICATIONS' },
    { spread: 5, title: 'Projects: SecureShare & QPAT System', pages: '09–10', category: 'ENGINEERING' },
    { spread: 6, title: 'Projects: SMIA Forensic, Techtonic & ParkHub', pages: '11–12', category: 'FORENSICS' },
    { spread: 7, title: 'Technical Specimen Index & Certifications', pages: '13–14', category: 'SKILLS' },
    { spread: 8, title: 'Competitive Honours & Leadership Cadre', pages: '15–16', category: 'HONOURS' },
    { spread: 9, title: 'Dispatch, Correspondence & Archival Colophon', pages: '17–18', category: 'CORRESPONDENCE' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg parchment-texture p-6 sm:p-8 rounded-sm border-2 border-[#211F1B] shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#211F1B] hover:text-[#8C3833] hover:bg-[#211F1B]/10 rounded-sm transition-colors cursor-pointer"
          aria-label="Close Catalogue"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b-2 border-double border-[#211F1B]/30 pb-3 mb-4">
          <span className="font-mono-tech text-[9px] uppercase tracking-[0.3em] text-[#686158] block">
            RAPID NAVIGATION
          </span>
          <div className="flex items-center justify-between">
            <h3 className="font-typewriter text-xl font-bold uppercase tracking-wider text-[#211F1B]">
              ARCHIVAL DOSSIER INDEX
            </h3>
            <ArchivalStamp text="EXPEDITE" variant="olive" rotation={1} />
          </div>
        </div>

        {/* Chapter List */}
        <div className="max-h-[60vh] overflow-y-auto space-y-1.5 pr-1">
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
                className={`w-full text-left p-2.5 rounded-xs flex items-center justify-between transition-colors border ${
                  isCurrent
                    ? 'bg-[#8C3833]/15 border-[#8C3833] text-[#8C3833]'
                    : 'bg-[#211F1B]/3 border-transparent hover:border-[#211F1B]/25 hover:bg-[#211F1B]/8 text-[#211F1B]'
                }`}
              >
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <span className="font-mono-tech text-[10px] font-bold text-[#686158] flex-shrink-0">
                    PP. {ch.pages}
                  </span>
                  <div className="truncate">
                    <span className="font-serif-vintage text-sm font-bold block truncate">
                      {ch.title}
                    </span>
                    <span className="font-mono-tech text-[9px] text-[#686158] uppercase">
                      {ch.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                  {isCurrent && (
                    <span className="font-mono-tech text-[9px] font-bold text-[#8C3833] bg-[#8C3833]/15 px-1 py-0.5">
                      CURRENT
                    </span>
                  )}
                  <ChevronRight className="w-4 h-4 opacity-60" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="mt-4 pt-3 border-t border-[#211F1B]/20 flex justify-between items-center font-mono-tech text-[10px] text-[#686158]">
          <span>Select any chapter to immediately turn to that spread.</span>
          <button
            type="button"
            onClick={onClose}
            className="text-[#8C3833] hover:underline font-bold uppercase cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};
