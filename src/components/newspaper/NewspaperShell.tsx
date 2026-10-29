import React, { useState, useEffect, useRef } from 'react';
import { Spread1FrontPage } from './spreads/Spread1FrontPage';
import { Spread2AcademicExp } from './spreads/Spread2AcademicExp';
import { Spread3ResearchProjects } from './spreads/Spread3ResearchProjects';
import { Spread4ForensicArsenal } from './spreads/Spread4ForensicArsenal';
import { Spread5LeadershipColophon } from './spreads/Spread5LeadershipColophon';
import { ThreeNewspaperCurl } from './ThreeNewspaperCurl';
import { NewspaperIndexModal } from './NewspaperIndexModal';
import { soundManager } from '../../utils/sound';
import {
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Volume2,
  VolumeX,
  Download,
  RotateCcw,
  Newspaper,
} from 'lucide-react';

export const TOTAL_SPREADS = 5;

export const NewspaperShell: React.FC = () => {
  const [currentSpread, setCurrentSpread] = useState(1);
  const [targetSpread, setTargetSpread] = useState(1);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'forward' | 'backward' | null>(null);
  const [isIndexOpen, setIsIndexOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    soundManager.enabled = soundEnabled;
  }, [soundEnabled]);

  // Handle completion of Three.js broadsheet page curl
  const handleFlipComplete = () => {
    setCurrentSpread(targetSpread);
    setIsFlipping(false);
    setFlipDirection(null);
  };

  // Turn broadsheet forward
  const turnNext = () => {
    if (isFlipping || currentSpread >= TOTAL_SPREADS) return;
    const next = currentSpread + 1;
    setTargetSpread(next);
    setIsFlipping(true);
    setFlipDirection('forward');
    soundManager.playPageTurnSound();
  };

  // Turn broadsheet backward
  const turnPrev = () => {
    if (isFlipping || currentSpread <= 1) return;
    const prev = currentSpread - 1;
    setTargetSpread(prev);
    setIsFlipping(true);
    setFlipDirection('backward');
    soundManager.playPageTurnSound();
  };

  // Direct navigation from table of contents
  const navigateToSpread = (spreadIndex: number) => {
    if (spreadIndex < 1 || spreadIndex > TOTAL_SPREADS || spreadIndex === currentSpread || isFlipping) return;
    setTargetSpread(spreadIndex);
    setIsFlipping(true);
    setFlipDirection(spreadIndex > currentSpread ? 'forward' : 'backward');
    soundManager.playPageTurnSound();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isIndexOpen) {
        if (e.key === 'Escape') setIsIndexOpen(false);
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        turnNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        turnPrev();
      } else if (e.key === 'Home') {
        navigateToSpread(1);
      } else if (e.key === 'End') {
        navigateToSpread(TOTAL_SPREADS);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSpread, isFlipping, isIndexOpen]);

  // Touch swipe support for tablets / mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        turnNext();
      } else {
        turnPrev();
      }
    }
    touchStartX.current = null;
  };

  // Render current spread component
  const renderSpreadContent = () => {
    switch (currentSpread) {
      case 1:
        return <Spread1FrontPage onNavigateToSpread={navigateToSpread} />;
      case 2:
        return <Spread2AcademicExp />;
      case 3:
        return <Spread3ResearchProjects />;
      case 4:
        return <Spread4ForensicArsenal />;
      case 5:
        return <Spread5LeadershipColophon />;
      default:
        return <Spread1FrontPage onNavigateToSpread={navigateToSpread} />;
    }
  };

  const leftPageNum = (currentSpread - 1) * 2 + 1;
  const rightPageNum = leftPageNum + 1;

  return (
    <div
      className="newspaper-desk-bg min-h-screen w-full flex flex-col items-center justify-between p-2 sm:p-4 select-none relative overflow-x-hidden text-[#141210]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Warm Ambient Desk Lamp Vignette */}
      <div className="absolute inset-0 bg-radial from-amber-500/[0.04] via-transparent to-black/85 pointer-events-none"></div>

      {/* TOP DESK CONTROL & METADATA BAR */}
      <header className="relative z-30 w-full max-w-7xl 2xl:max-w-[1540px] flex items-center justify-between py-2 px-3 sm:px-5 bg-[#14100c]/95 border border-[#30261e] rounded-xs text-[#f5f0e1] shadow-2xl mb-2">
        {/* Left: Branding & Return to Front Page */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => navigateToSpread(1)}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono-tech uppercase tracking-wider bg-[#221a14] hover:bg-[#30261d] border border-[#3d2e23] text-[#f5f0e1] rounded-xs transition-colors cursor-pointer"
            title="Return to Front Page"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#d9c49f]" />
            <span className="hidden sm:inline font-bold">Front Page</span>
          </button>

          <div className="hidden md:flex items-center gap-2 font-mono-tech text-[10px] text-[#9c8973]">
            <Newspaper className="w-3 h-3 text-[#d9c49f]" />
            <span>THE CHRONICLE ARCHIVE</span>
            <span>•</span>
            <span className="text-[#f5f0e1] font-bold tracking-widest">MYTHREIE DUMPATI</span>
          </div>
        </div>

        {/* Center: Spread Navigation Controls */}
        <div className="flex items-center gap-2 font-mono-tech text-xs">
          <button
            type="button"
            onClick={turnPrev}
            disabled={isFlipping || currentSpread === 1}
            className="p-1 sm:px-2.5 sm:py-1 bg-[#221a14] hover:bg-[#30261d] text-[#f5f0e1] disabled:opacity-30 border border-[#3d2e23] rounded-xs transition-colors cursor-pointer"
            aria-label="Previous Broadsheet Page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="text-[10px] sm:text-xs tracking-wider text-[#d9c49f] px-1 sm:px-2 font-bold">
            SPREAD {String(currentSpread).padStart(2, '0')} / {String(TOTAL_SPREADS).padStart(2, '0')}{' '}
            <span className="hidden sm:inline text-[#9c8973] font-normal">
              (PP. {String(leftPageNum).padStart(2, '0')}–{String(rightPageNum).padStart(2, '0')})
            </span>
          </span>

          <button
            type="button"
            onClick={turnNext}
            disabled={isFlipping || currentSpread === TOTAL_SPREADS}
            className="p-1 sm:px-2.5 sm:py-1 bg-[#221a14] hover:bg-[#30261d] text-[#f5f0e1] disabled:opacity-30 border border-[#3d2e23] rounded-xs transition-colors cursor-pointer"
            aria-label="Next Broadsheet Page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Sound, Index & PDF Resume Download */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Index Modal Trigger */}
          <button
            type="button"
            onClick={() => setIsIndexOpen(true)}
            className="flex items-center gap-1 px-2.5 py-1 bg-[#221a14] hover:bg-[#30261d] border border-[#3d2e23] rounded-xs text-[#f5f0e1] font-mono-tech text-xs transition-colors cursor-pointer"
            title="Open General Catalogue Index"
          >
            <Bookmark className="w-3.5 h-3.5 text-[#8C3833]" />
            <span className="hidden sm:inline font-bold">Index</span>
          </button>

          {/* Sound Rustle Toggle */}
          <button
            type="button"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-1.5 bg-[#221a14] hover:bg-[#30261d] border border-[#3d2e23] rounded-xs text-[#f5f0e1] transition-colors cursor-pointer"
            title={soundEnabled ? 'Mute newsprint rustle audio' : 'Enable newsprint rustle audio'}
            aria-label="Toggle paper sound"
          >
            {soundEnabled ? (
              <Volume2 className="w-3.5 h-3.5 text-[#d9c49f]" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-[#6c5947]" />
            )}
          </button>

          {/* Resume PDF Download */}
          <a
            href="/MYTHREIE_DUMPATI.pdf"
            download="MYTHREIE_DUMPATI_RESUME.pdf"
            onClick={() => soundManager.playStampSound()}
            className="flex items-center gap-1 px-2.5 py-1 bg-[#8C3833] hover:bg-[#a6423c] text-[#f5f0e1] rounded-xs font-mono-tech text-xs uppercase font-bold tracking-wider transition-colors shadow-sm cursor-pointer"
            title="Download Original Resume PDF"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden md:inline">PDF Resume</span>
          </a>
        </div>
      </header>

      {/* MAIN BROADSHEET STAGE — FULL-SCREEN VIEWPORT AWARE */}
      <main className="relative z-20 flex-1 w-full max-w-7xl 2xl:max-w-[1540px] flex items-center justify-center my-auto py-1">
        <div className="relative w-full transition-all duration-300">
          {/* Broadsheet Stack Elevation Layers (Bottom Paper Depth) */}
          <div className="absolute -left-2.5 top-2.5 bottom-2.5 w-2.5 bg-[#ece3cc] rounded-l-xs border-y border-l border-[#221e1a]/40 shadow-xl flex flex-col justify-between overflow-hidden">
            <div className="h-full w-full bg-[repeating-linear-gradient(to_bottom,#f5f0e1,#f5f0e1_2px,#d9ceb4_2px,#d9ceb4_3px)] opacity-80"></div>
          </div>
          <div className="absolute -right-2.5 top-2.5 bottom-2.5 w-2.5 bg-[#ece3cc] rounded-r-xs border-y border-r border-[#221e1a]/40 shadow-xl flex flex-col justify-between overflow-hidden">
            <div className="h-full w-full bg-[repeating-linear-gradient(to_bottom,#f5f0e1,#f5f0e1_2px,#d9ceb4_2px,#d9ceb4_3px)] opacity-80"></div>
          </div>

          {/* OPEN NEWSPAPER SPREAD CONTAINER */}
          <div className="newspaper-paper-texture newspaper-broadsheet-shadow relative w-full min-h-[720px] sm:min-h-[780px] lg:min-h-[820px] xl:min-h-[860px] border-2 border-[#141210] rounded-xs overflow-hidden transition-all duration-300">
            {/* Three.js 3D Page Curling Transition Element */}
            <ThreeNewspaperCurl
              isFlipping={isFlipping}
              direction={flipDirection}
              onFlipComplete={handleFlipComplete}
              currentSpread={currentSpread}
              targetSpread={targetSpread}
            />

            {/* Central Broadsheet Vertical Fold Crease Shadow */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-12 -ml-6 bg-gradient-to-r from-transparent via-[#141210]/25 to-transparent pointer-events-none z-20"></div>
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-[#141210]/35 pointer-events-none z-20"></div>

            {/* Deckled Broadsheet Outer Edge Vignette */}
            <div className="absolute left-0 top-0 bottom-0 w-2.5 pointer-events-none z-20 opacity-40 bg-gradient-to-r from-[#141210]/25 to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-2.5 pointer-events-none z-20 opacity-40 bg-gradient-to-l from-[#141210]/25 to-transparent"></div>

            {/* SPREAD CONTENT */}
            <div className="h-full w-full">{renderSpreadContent()}</div>
          </div>

          {/* Click-to-Turn Lateral Margin Controls (Desktop Floating) */}
          <button
            type="button"
            onClick={turnPrev}
            disabled={isFlipping || currentSpread === 1}
            className="hidden lg:flex absolute -left-12 xl:-left-16 top-1/2 -translate-y-1/2 w-10 h-24 items-center justify-center text-[#d9c49f]/70 hover:text-[#d9c49f] hover:scale-110 transition-all cursor-pointer disabled:opacity-0"
            title="Previous Broadsheet (or Arrow Left)"
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            type="button"
            onClick={turnNext}
            disabled={isFlipping || currentSpread === TOTAL_SPREADS}
            className="hidden lg:flex absolute -right-12 xl:-right-16 top-1/2 -translate-y-1/2 w-10 h-24 items-center justify-center text-[#d9c49f]/70 hover:text-[#d9c49f] hover:scale-110 transition-all cursor-pointer disabled:opacity-0"
            title="Next Broadsheet (or Arrow Right)"
            aria-label="Next Page"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </main>

      {/* BOTTOM DESK ACCESSORY BAR */}
      <footer className="relative z-30 w-full max-w-7xl 2xl:max-w-[1540px] flex flex-wrap items-center justify-between py-1.5 px-3 sm:px-5 text-[10px] sm:text-xs font-mono-tech text-[#8a7662] mt-1 border-t border-[#30261e]">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-[#5a4c3e]">CONTROLS:</span>
          <span className="text-[#d9c49f] font-bold">[← / →] TURN BROADSHEET</span>
          <span>•</span>
          <span className="text-[#d9c49f] font-bold">[HOME / END] FIRST/LAST</span>
          <span>•</span>
          <span className="text-[#d9c49f] font-bold">[INDEX] DIRECT JUMP</span>
        </div>

        <div className="flex items-center gap-2 text-[#9c8973]">
          <span>THE CHRONICLE ARCHIVE • HYDERABAD</span>
          <span>•</span>
          <span className="text-[#f5f0e1] font-bold">© 2026 MYTHREIE DUMPATI</span>
        </div>
      </footer>

      {/* Index Navigation Modal */}
      <NewspaperIndexModal
        isOpen={isIndexOpen}
        onClose={() => setIsIndexOpen(false)}
        onSelectSpread={navigateToSpread}
        currentSpread={currentSpread}
      />
    </div>
  );
};
