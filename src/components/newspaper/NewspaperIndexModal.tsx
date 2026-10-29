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
      title: 'The Front Cover: Special Dispatch',
      pages: '01',
      tag: 'EXTRA!! EXTRA!!',
      desc: 'Authentic vintage newspaper cover, photo holders, live telemetry, fingerprint seal & RFC-3161 digest.',
    },
    {
      spread: 2,
      title: 'The Editorial Spread & Biographical Chronicle',
      pages: '02–03',
      tag: 'LEAD STORIES',
      desc: 'Lead headline, researcher portrait engraving, core pillars & spoken languages.',
    },
    {
      spread: 3,
      title: 'Academic Ledger & Field Experience',
      pages: '04–05',
      tag: 'CURRICULUM & FIELD',
      desc: 'KMEC CSE (8.36), Automobile Diploma (8.8), Telangana Police Bharosa & Teleparadigm.',
    },
    {
      spread: 4,
      title: 'Scholarly Press & Flagship Engineering',
      pages: '06–07',
      tag: 'RESEARCH & SYSTEMS',
      desc: '3 IEEE/IJRDET papers, Pareto diagrams, SecureShare P2P & QPAT NLP classifier.',
    },
    {
      spread: 5,
      title: 'Forensic Specimen & Arsenal Inventory',
      pages: '08–09',
      tag: 'FORENSICS & TOOLS',
      desc: 'SMIA court tool, Alcohol Vehicle Interlock, Technical skills & NLU Odisha 87%.',
    },
    {
      spread: 6,
      title: 'Institutional Governance & Archival Colophon',
      pages: '10–11',
      tag: 'GOVERNANCE & DISPATCH',
      desc: 'Student Body President, Carnatic arts, Telegraph dispatch & verified PDF resume.',
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
        <div className="max-h-[60vh] overflow-y-auto space-y-2 pr-1">
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

