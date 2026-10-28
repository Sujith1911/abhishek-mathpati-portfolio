import React, { useState, useEffect, useRef } from 'react';
import { BookCover } from './BookCover';
import { ThreePageCurl } from './ThreePageCurl';
import { SpreadIndex } from './spreads/SpreadIndex';
import { SpreadProfileAcademic } from './spreads/SpreadProfileAcademic';
import { SpreadExperience } from './spreads/SpreadExperience';
import { SpreadPublications } from './spreads/SpreadPublications';
import { SpreadProjectsOne } from './spreads/SpreadProjectsOne';
import { SpreadProjectsTwo } from './spreads/SpreadProjectsTwo';
import { SpreadSkillsCerts } from './spreads/SpreadSkillsCerts';
import { SpreadHonoursSocieties } from './spreads/SpreadHonoursSocieties';
import { SpreadContactColophon } from './spreads/SpreadContactColophon';
import { TableOfContentsModal } from './TableOfContentsModal';
import { soundManager } from '../utils/sound';
import {
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Volume2,
  VolumeX,
  Download,
  RotateCcw,
} from 'lucide-react';

export const TOTAL_SPREADS = 9;

export const BookShell: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSpread, setCurrentSpread] = useState(1);
  const [targetSpread, setTargetSpread] = useState(1);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'forward' | 'backward' | null>(null);
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const touchStartX = useRef<number | null>(null);

  // Sync sound manager state
  useEffect(() => {
    soundManager.enabled = soundEnabled;
  }, [soundEnabled]);

  // Handle completion of Three.js page-turn animation
  const handleFlipComplete = () => {
    setCurrentSpread(targetSpread);
    setIsFlipping(false);
    setFlipDirection(null);
  };

  // Turn page forward
  const turnNext = () => {
    if (isFlipping) return;
    if (currentSpread < TOTAL_SPREADS) {
      const next = currentSpread + 1;
      setTargetSpread(next);
      setIsFlipping(true);
      setFlipDirection('forward');
      soundManager.playPageTurnSound();
    }
  };

  // Turn page backward
  const turnPrev = () => {
    if (isFlipping) return;
    if (currentSpread > 1) {
      const prev = currentSpread - 1;
      setTargetSpread(prev);
      setIsFlipping(true);
      setFlipDirection('backward');
      soundManager.playPageTurnSound();
    } else {
      // Return to cover
      soundManager.playPageTurnSound();
      setIsOpen(false);
    }
  };

  // Direct navigation from index or modal
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
      if (isTocOpen) {
        if (e.key === 'Escape') setIsTocOpen(false);
        return;
      }

      if (!isOpen) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
          soundManager.playPageTurnSound();
          setIsOpen(true);
        }
        return;
      }

      if (e.key === 'ArrowRight') {
        turnNext();
      } else if (e.key === 'ArrowLeft') {
        turnPrev();
      } else if (e.key === 'Escape') {
        soundManager.playPageTurnSound();
        setIsOpen(false);
      } else if (e.key === 'Home') {
        navigateToSpread(1);
      } else if (e.key === 'End') {
        navigateToSpread(TOTAL_SPREADS);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentSpread, isFlipping, isTocOpen]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
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
        return <SpreadIndex onNavigateToSpread={navigateToSpread} />;
      case 2:
        return <SpreadProfileAcademic />;
      case 3:
        return <SpreadExperience />;
      case 4:
        return <SpreadPublications />;
      case 5:
        return <SpreadProjectsOne />;
      case 6:
        return <SpreadProjectsTwo />;
      case 7:
        return <SpreadSkillsCerts />;
      case 8:
        return <SpreadHonoursSocieties />;
      case 9:
        return <SpreadContactColophon />;
      default:
        return <SpreadIndex onNavigateToSpread={navigateToSpread} />;
    }
  };

  const leftPageNum = (currentSpread - 1) * 2 + 1;
  const rightPageNum = leftPageNum + 1;

  return (
    <div
      className="bw-desk-bg min-h-screen w-full flex flex-col items-center justify-between p-2 sm:p-4 md:p-6 lg:p-8 select-none relative overflow-x-hidden text-black"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Studio Lighting Ambient Glow (Monochrome) */}
      <div className="absolute inset-0 bg-radial from-white/[0.04] via-transparent to-black/80 pointer-events-none"></div>

      {/* TOP DESK CONTROL BAR - STARK BLACK & WHITE */}
      <header className="relative z-30 w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1560px] flex items-center justify-between py-2 px-3 sm:px-5 bg-black/95 border border-neutral-800 rounded-xs text-white shadow-2xl mb-2 sm:mb-4">
        {/* Left: Branding & Status */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            onClick={() => {
              soundManager.playPageTurnSound();
              setIsOpen(!isOpen);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-tech uppercase tracking-wider bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-100 rounded-xs transition-colors cursor-pointer"
            title={isOpen ? 'Close book and view cover' : 'Open book'}
          >
            <RotateCcw className="w-3.5 h-3.5 text-white" />
            <span className="hidden sm:inline font-bold">{isOpen ? 'Close Journal' : 'Open Journal'}</span>
          </button>

          <div className="hidden md:flex items-center gap-2 font-mono-tech text-[10px] text-neutral-400">
            <span className="text-neutral-500">DOSSIER MS-2026-MD</span>
            <span>•</span>
            <span className="text-white font-bold tracking-widest">MYTHREIE DUMPATI</span>
          </div>
        </div>

        {/* Center: Spread Indicator & Navigation */}
        {isOpen && (
          <div className="flex items-center gap-2 font-mono-tech text-xs">
            <button
              type="button"
              onClick={turnPrev}
              disabled={isFlipping}
              className="p-1 sm:px-2.5 sm:py-1 bg-neutral-900 hover:bg-neutral-800 text-white disabled:opacity-30 border border-neutral-700 rounded-xs transition-colors cursor-pointer"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-[10px] sm:text-xs tracking-wider text-white px-1 sm:px-2 font-bold">
              SPREAD {String(currentSpread).padStart(2, '0')} / {String(TOTAL_SPREADS).padStart(2, '0')}{' '}
              <span className="hidden sm:inline text-neutral-400 font-normal">
                (PP. {String(leftPageNum).padStart(2, '0')}–{String(rightPageNum).padStart(2, '0')})
              </span>
            </span>

            <button
              type="button"
              onClick={turnNext}
              disabled={isFlipping || currentSpread === TOTAL_SPREADS}
              className="p-1 sm:px-2.5 sm:py-1 bg-neutral-900 hover:bg-neutral-800 text-white disabled:opacity-30 border border-neutral-700 rounded-xs transition-colors cursor-pointer"
              aria-label="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Right: Sound, Index & Download Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {isOpen && (
            <button
              type="button"
              onClick={() => setIsTocOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-xs text-white font-mono-tech text-xs transition-colors cursor-pointer"
              title="Table of Contents"
            >
              <Bookmark className="w-3.5 h-3.5 text-white" />
              <span className="hidden sm:inline font-bold">Index</span>
            </button>
          )}

          {/* Sound Toggle */}
          <button
            type="button"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-1.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-xs text-white transition-colors cursor-pointer"
            title={soundEnabled ? 'Mute paper rustle audio' : 'Enable paper rustle audio'}
            aria-label="Toggle paper sound"
          >
            {soundEnabled ? (
              <Volume2 className="w-3.5 h-3.5 text-white" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-neutral-500" />
            )}
          </button>

          {/* Resume PDF Download */}
          <a
            href="/MYTHREIE_DUMPATI.pdf"
            download="MYTHREIE_DUMPATI_RESUME.pdf"
            onClick={() => soundManager.playStampSound()}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-neutral-200 text-black border border-white rounded-xs font-mono-tech text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            title="Download Original Resume PDF"
          >
            <Download className="w-3.5 h-3.5 text-black" />
            <span className="hidden md:inline">PDF Resume</span>
          </a>
        </div>
      </header>

      {/* MAIN BOOK STAGE - EXPANDED CINEMATIC WIDE MONOGRAPH */}
      <main className="relative z-20 flex-1 w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1560px] flex items-center justify-center my-auto py-2">
        {!isOpen ? (
          /* CLOSED COVER STATE */
          <div className="animate-in zoom-in-95 duration-500 flex items-center justify-center">
            <BookCover onOpen={() => setIsOpen(true)} />
          </div>
        ) : (
          /* OPEN BOOK SPREAD - WIDE FORMAT */
          <div className="relative w-full transition-all duration-300">
            {/* BOOK DEPTH / THICKNESS LAYERS (Stack of Stark Monochrome Pages) */}
            <div className="absolute -left-3.5 top-3 bottom-3 w-3.5 bg-neutral-200 rounded-l-xs border-y border-l border-neutral-500 shadow-2xl flex flex-col justify-between overflow-hidden">
              <div className="h-full w-full bg-[repeating-linear-gradient(to_bottom,#ffffff,#ffffff_2px,#cccccc_2px,#cccccc_3px)] opacity-90"></div>
            </div>
            <div className="absolute -right-3.5 top-3 bottom-3 w-3.5 bg-neutral-200 rounded-r-xs border-y border-r border-neutral-500 shadow-2xl flex flex-col justify-between overflow-hidden">
              <div className="h-full w-full bg-[repeating-linear-gradient(to_bottom,#ffffff,#ffffff_2px,#cccccc_2px,#cccccc_3px)] opacity-90"></div>
            </div>

            {/* Stark Obsidian Ribbon Bookmark Hanging From Book Top */}
            <button
              type="button"
              onClick={() => setIsTocOpen(true)}
              className="absolute -top-5 right-28 w-8 h-12 bg-black hover:h-14 transition-all duration-200 border-x border-neutral-700 shadow-xl z-30 flex items-center justify-center text-white cursor-pointer group"
              title="Click bookmark to open Catalogue Index"
            >
              <Bookmark className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* OPEN JOURNAL SPREAD CONTAINER */}
            <div
              className={`bw-paper-texture relative w-full min-h-[720px] sm:min-h-[780px] lg:min-h-[820px] xl:min-h-[860px] border-2 border-black bw-book-shadow rounded-xs overflow-hidden transition-all duration-300`}
            >
              {/* Three.js 3D Page Curling Transition Element */}
              <ThreePageCurl
                isFlipping={isFlipping}
                direction={flipDirection}
                onFlipComplete={handleFlipComplete}
                currentPage={currentSpread}
                targetPage={targetSpread}
              />

              {/* Central Spine Binding Crease & Gutter Shadows (Desktop) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-14 -ml-7 bg-gradient-to-r from-transparent via-black/25 to-transparent pointer-events-none z-20"></div>
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-black/40 pointer-events-none z-20"></div>

              {/* Deckled Edge Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-3 pointer-events-none z-20 opacity-50 bg-gradient-to-r from-black/20 to-transparent"></div>
              <div className="absolute right-0 top-0 bottom-0 w-3 pointer-events-none z-20 opacity-50 bg-gradient-to-l from-black/20 to-transparent"></div>

              {/* TWO-PAGE SPREAD CONTENT */}
              <div className="h-full w-full">{renderSpreadContent()}</div>
            </div>

            {/* Click-to-Turn Lateral Margins (Desktop Floating Controls) */}
            <button
              type="button"
              onClick={turnPrev}
              disabled={isFlipping}
              className="hidden lg:flex absolute -left-12 xl:-left-16 top-1/2 -translate-y-1/2 w-10 h-24 items-center justify-center text-neutral-400 hover:text-white hover:scale-110 transition-all cursor-pointer disabled:opacity-0"
              title="Previous Page (or Arrow Left)"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              type="button"
              onClick={turnNext}
              disabled={isFlipping || currentSpread === TOTAL_SPREADS}
              className="hidden lg:flex absolute -right-12 xl:-right-16 top-1/2 -translate-y-1/2 w-10 h-24 items-center justify-center text-neutral-400 hover:text-white hover:scale-110 transition-all cursor-pointer disabled:opacity-0"
              title="Next Page (or Arrow Right)"
              aria-label="Next Page"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        )}
      </main>

      {/* BOTTOM DESK ACCESSORY BAR */}
      <footer className="relative z-30 w-full max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1560px] flex flex-wrap items-center justify-between py-2 px-3 sm:px-5 text-[10px] sm:text-xs font-mono-tech text-neutral-400 mt-2 border-t border-neutral-800">
        <div className="flex items-center gap-3">
          <span className="text-neutral-500">KEYBOARD:</span>
          <span className="text-neutral-300 font-bold">[← / →] TURN PAGES</span>
          <span>•</span>
          <span className="text-neutral-300 font-bold">[ESC] CLOSE</span>
          <span>•</span>
          <span className="text-neutral-300 font-bold">[HOME / END] FIRST/LAST</span>
        </div>

        <div className="flex items-center gap-3 text-neutral-400">
          <span>CLASSIFIED DOSSIER • HYDERABAD</span>
          <span>•</span>
          <span className="text-white font-bold">© 2026 MYTHREIE DUMPATI</span>
        </div>
      </footer>

      {/* Table of Contents Modal */}
      <TableOfContentsModal
        isOpen={isTocOpen}
        onClose={() => setIsTocOpen(false)}
        onSelectSpread={navigateToSpread}
        currentSpread={currentSpread}
      />
    </div>
  );
};
