import React, { useState } from 'react';
import {
  RotateCcw,
  ChevronUp,
  ChevronDown,
  Bookmark,
  Volume2,
  VolumeX,
  Download,
  Maximize2,
  Minimize2,
  Newspaper,
  FileText,
} from 'lucide-react';
import { soundManager } from '../../utils/sound';

interface NewspaperSideNavProps {
  currentSpread: number;
  totalSpreads: number;
  onNavigateToSpread: (spreadIndex: number) => void;
  onPrevSpread: () => void;
  onNextSpread: () => void;
  isFlipping: boolean;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenIndex: () => void;
}

export const NewspaperSideNav: React.FC<NewspaperSideNavProps> = ({
  currentSpread,
  totalSpreads,
  onNavigateToSpread,
  onPrevSpread,
  onNextSpread,
  isFlipping,
  soundEnabled,
  onToggleSound,
  onOpenIndex,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  const sectionPills = [
    { spread: 1, title: 'Front Cover', pages: '01', subtitle: 'The Daily Chronicle • Notes on a Life' },
    { spread: 2, title: 'Contents', pages: '02', subtitle: 'Archival Table of Contents' },
    { spread: 3, title: 'Education', pages: '03', subtitle: '01. Education • Academic Ledger (KMEC, Masab Tank)' },
    { spread: 4, title: 'Experience', pages: '04', subtitle: '02. Professional Experience • Telangana Police Bharosa' },
    { spread: 5, title: 'Projects', pages: '05', subtitle: '03. Projects • SecureShare, QPAT & SMIA' },
    { spread: 6, title: 'Publications', pages: '06', subtitle: '04. Publications • 3 IEEE & IJRDET Papers' },
    { spread: 7, title: 'Skills', pages: '07', subtitle: '05. Skills • Classified Technical Arsenal' },
    { spread: 8, title: 'Certifications', pages: '08', subtitle: '06. Certifications • NLU Odisha 87% Distinction' },
    { spread: 9, title: 'Activities', pages: '09', subtitle: '07. Activities • Student Council President & Arts' },
    { spread: 10, title: 'Dispatch', pages: '10', subtitle: 'Encrypted Resend Telegraph Terminal' },
    { spread: 11, title: 'Colophon & PDF', pages: '11', subtitle: 'Official Verified Resume PDF & Colophon' },
  ];

  return (
    <aside className="relative z-30 h-full max-h-[calc(100vh-1rem)] flex flex-col justify-between items-center py-3 px-2 sm:px-2.5 bg-[#14100c]/95 border border-[#30261e] rounded-xs text-[#f5f0e1] shadow-2xl select-none flex-shrink-0 transition-all mr-2 sm:mr-3">
      {/* Top: Publication Brand Icon with Flyout Tooltip */}
      <div className="flex flex-col items-center gap-2">
        <div className="relative group">
          <button
            type="button"
            onClick={() => onNavigateToSpread(1)}
            className="w-10 h-10 rounded-xs bg-[#221a14] hover:bg-[#30261d] border border-[#3d2e23] flex items-center justify-center text-[#d9c49f] hover:text-white transition-all shadow-sm cursor-pointer"
            title="Front Page"
          >
            <Newspaper className="w-5 h-5" />
          </button>
          
          {/* Tooltip flyout on hover */}
          <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:flex flex-col bg-[#1c1611] text-[#f5f0e1] border border-[#4a3a2d] px-2.5 py-1.5 rounded-xs shadow-xl font-mono-tech text-[10px] whitespace-nowrap z-50 pointer-events-none">
            <span className="font-bold text-[#d9c49f]">THE CHRONICLE ARCHIVE</span>
            <span className="text-[#8a7662]">Mythreie Dumpati (2026)</span>
          </div>
        </div>

        {/* Front Page Reset */}
        <div className="relative group">
          <button
            type="button"
            onClick={() => onNavigateToSpread(1)}
            className="w-9 h-9 rounded-xs bg-[#221a14] hover:bg-[#30261d] border border-[#3d2e23] flex items-center justify-center text-[#d9c49f] hover:text-white transition-all cursor-pointer"
            title="Return to Front Page"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:flex flex-col bg-[#1c1611] text-[#f5f0e1] border border-[#4a3a2d] px-2.5 py-1.5 rounded-xs shadow-xl font-mono-tech text-[10px] whitespace-nowrap z-50 pointer-events-none">
            <span className="font-bold text-[#d9c49f]">Front Page</span>
            <span className="text-[#8a7662]">Return to Folio 01</span>
          </div>
        </div>
      </div>

      {/* Middle: Vertical Spread Navigator & Section Jumps */}
      <div className="flex flex-col items-center gap-2 my-auto">
        {/* Previous Spread Button */}
        <div className="relative group">
          <button
            type="button"
            onClick={onPrevSpread}
            disabled={isFlipping || currentSpread === 1}
            className="w-8 h-8 rounded-xs bg-[#221a14] hover:bg-[#30261d] text-[#f5f0e1] disabled:opacity-25 border border-[#3d2e23] flex items-center justify-center transition-all cursor-pointer"
            aria-label="Previous Broadsheet"
          >
            <ChevronUp className="w-4 h-4 text-[#d9c49f]" />
          </button>
          <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:flex flex-col bg-[#1c1611] text-[#f5f0e1] border border-[#4a3a2d] px-2.5 py-1 rounded-xs shadow-xl font-mono-tech text-[10px] whitespace-nowrap z-50 pointer-events-none">
            <span>Previous Broadsheet [←]</span>
          </div>
        </div>

        {/* Five Section Indicators with Rich Hover Tooltips */}
        <div className="flex flex-col items-center gap-1.5 py-2 border-y border-[#30261e]/80 my-1">
          {sectionPills.map((pill) => {
            const isCurrent = currentSpread === pill.spread;
            return (
              <div key={pill.spread} className="relative group">
                <button
                  type="button"
                  onClick={() => onNavigateToSpread(pill.spread)}
                  className={`w-7 h-7 rounded-xs font-mono-tech text-[10px] font-bold flex items-center justify-center transition-all cursor-pointer border ${
                    isCurrent
                      ? 'bg-[#8C3833] text-white border-[#8C3833] shadow-md scale-110'
                      : 'bg-[#221a14] text-[#a6947e] border-[#3d2e23] hover:border-[#d9c49f] hover:text-[#f5f0e1]'
                  }`}
                  aria-label={`Jump to ${pill.title}`}
                >
                  {String(pill.spread).padStart(2, '0')}
                </button>

                {/* Rich Tooltip on Hover */}
                <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:flex flex-col bg-[#1c1611] text-[#f5f0e1] border border-[#4a3a2d] px-3 py-2 rounded-xs shadow-2xl font-mono-tech text-[10px] whitespace-nowrap z-50 pointer-events-none min-w-[180px]">
                  <div className="flex items-center justify-between gap-3 border-b border-[#3d2e23] pb-1 mb-1">
                    <span className="font-bold text-[#d9c49f] uppercase">{pill.title}</span>
                    <span className="text-[#8C3833] font-bold">PP. {pill.pages}</span>
                  </div>
                  <span className="text-[#8a7662] text-[9.5px]">{pill.subtitle}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Next Spread Button */}
        <div className="relative group">
          <button
            type="button"
            onClick={onNextSpread}
            disabled={isFlipping || currentSpread === totalSpreads}
            className="w-8 h-8 rounded-xs bg-[#221a14] hover:bg-[#30261d] text-[#f5f0e1] disabled:opacity-25 border border-[#3d2e23] flex items-center justify-center transition-all cursor-pointer"
            aria-label="Next Broadsheet"
          >
            <ChevronDown className="w-4 h-4 text-[#d9c49f]" />
          </button>
          <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:flex flex-col bg-[#1c1611] text-[#f5f0e1] border border-[#4a3a2d] px-2.5 py-1 rounded-xs shadow-xl font-mono-tech text-[10px] whitespace-nowrap z-50 pointer-events-none">
            <span>Next Broadsheet [→]</span>
          </div>
        </div>

        {/* Current Folio Indicator */}
        <span className="font-mono-tech text-[9px] text-[#8a7662] tracking-widest mt-1">
          {String(currentSpread).padStart(2, '0')}/{String(totalSpreads).padStart(2, '0')}
        </span>
      </div>

      {/* Bottom: Utilities (Index, Audio, PDF, Fullscreen) */}
      <div className="flex flex-col items-center gap-2">
        {/* Table of Contents Index */}
        <div className="relative group">
          <button
            type="button"
            onClick={onOpenIndex}
            className="w-9 h-9 rounded-xs bg-[#221a14] hover:bg-[#30261d] border border-[#3d2e23] flex items-center justify-center text-[#d9c49f] hover:text-white transition-all cursor-pointer"
            title="General Catalogue Index"
          >
            <Bookmark className="w-4 h-4 text-[#8C3833]" />
          </button>
          <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:flex flex-col bg-[#1c1611] text-[#f5f0e1] border border-[#4a3a2d] px-2.5 py-1.5 rounded-xs shadow-xl font-mono-tech text-[10px] whitespace-nowrap z-50 pointer-events-none">
            <span className="font-bold text-[#d9c49f]">Index Catalogue</span>
            <span className="text-[#8a7662]">Open Rapid Navigation</span>
          </div>
        </div>

        {/* Audio Paper Sound Toggle */}
        <div className="relative group">
          <button
            type="button"
            onClick={onToggleSound}
            className="w-9 h-9 rounded-xs bg-[#221a14] hover:bg-[#30261d] border border-[#3d2e23] flex items-center justify-center text-[#d9c49f] hover:text-white transition-all cursor-pointer"
            title="Toggle Newsprint Sound"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-[#d9c49f]" />
            ) : (
              <VolumeX className="w-4 h-4 text-[#6c5947]" />
            )}
          </button>
          <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:flex flex-col bg-[#1c1611] text-[#f5f0e1] border border-[#4a3a2d] px-2.5 py-1.5 rounded-xs shadow-xl font-mono-tech text-[10px] whitespace-nowrap z-50 pointer-events-none">
            <span className="font-bold text-[#d9c49f]">Paper Rustle Audio</span>
            <span className="text-[#8a7662]">{soundEnabled ? 'Enabled' : 'Muted'}</span>
          </div>
        </div>

        {/* Fullscreen Toggle */}
        <div className="relative group">
          <button
            type="button"
            onClick={toggleFullscreen}
            className="w-9 h-9 rounded-xs bg-[#221a14] hover:bg-[#30261d] border border-[#3d2e23] flex items-center justify-center text-[#d9c49f] hover:text-white transition-all cursor-pointer"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </button>
          <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:flex flex-col bg-[#1c1611] text-[#f5f0e1] border border-[#4a3a2d] px-2.5 py-1.5 rounded-xs shadow-xl font-mono-tech text-[10px] whitespace-nowrap z-50 pointer-events-none">
            <span className="font-bold text-[#d9c49f]">Fullscreen Mode</span>
            <span className="text-[#8a7662]">Fit to Screen</span>
          </div>
        </div>

        {/* Download Authorized PDF Resume */}
        <div className="relative group">
          <a
            href="/MYTHREIE_DUMPATI.pdf"
            download="MYTHREIE_DUMPATI_RESUME.pdf"
            onClick={() => soundManager.playStampSound()}
            className="w-9 h-9 rounded-xs bg-[#8C3833] hover:bg-[#a6423c] border border-[#a6423c] flex items-center justify-center text-white transition-all shadow-md cursor-pointer"
            title="Download PDF Resume"
          >
            <Download className="w-4 h-4" />
          </a>
          <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:flex flex-col bg-[#1c1611] text-[#f5f0e1] border border-[#4a3a2d] px-3 py-2 rounded-xs shadow-2xl font-mono-tech text-[10px] whitespace-nowrap z-50 pointer-events-none">
            <div className="flex items-center gap-1.5 font-bold text-[#d9c49f]">
              <FileText className="w-3.5 h-3.5 text-[#8C3833]" />
              <span>OFFICIAL PDF RESUME</span>
            </div>
            <span className="text-[#8a7662] text-[9.5px]">MYTHREIE_DUMPATI.pdf</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

