import React, { useState, useEffect, useRef } from 'react';
import { BookCover } from './BookCover';
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
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'forward' | 'backward' | null>(null);
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const touchStartX = useRef<number | null>(null);

  // Sync sound manager state
  useEffect(() => {
    soundManager.enabled = soundEnabled;
  }, [soundEnabled]);

  // Turn page forward
  const turnNext = () => {
    if (isFlipping) return;
    if (currentSpread < TOTAL_SPREADS) {
      setIsFlipping(true);
      setFlipDirection('forward');
      soundManager.playPageTurnSound();
      setTimeout(() => {
        setCurrentSpread((prev) => prev + 1);
        setIsFlipping(false);
        setFlipDirection(null);
      }, 350);
    }
  };

  // Turn page backward
  const turnPrev = () => {
    if (isFlipping) return;
    if (currentSpread > 1) {
      setIsFlipping(true);
      setFlipDirection('backward');
      soundManager.playPageTurnSound();
      setTimeout(() => {
        setCurrentSpread((prev) => prev - 1);
        setIsFlipping(false);
        setFlipDirection(null);
      }, 350);
    } else {
      // Return to cover
      soundManager.playPageTurnSound();
      setIsOpen(false);
    }
  };

  // Direct navigation from index or modal
  const navigateToSpread = (spreadIndex: number) => {
    if (spreadIndex < 1 || spreadIndex > TOTAL_SPREADS || spreadIndex === currentSpread) return;
    setIsFlipping(true);
    setFlipDirection(spreadIndex > currentSpread ? 'forward' : 'backward');
    soundManager.playPageTurnSound();
    setTimeout(() => {
      setCurrentSpread(spreadIndex);
      setIsFlipping(false);
      setFlipDirection(null);
    }, 300);
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
      className="dark-wood-desk min-h-screen w-full flex flex-col items-center justify-between p-2 sm:p-4 md:p-6 lg:p-8 select-none relative overflow-x-hidden text-[#211F1B]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Desk Lamp Ambient Lighting Overlay */}
      <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-black/60 pointer-events-none"></div>

      {/* TOP DESK CONTROL BAR */}
      <header className="relative z-30 w-full max-w-6xl flex items-center justify-between py-2 px-3 sm:px-4 bg-[#1b1511]/85 border border-[#3d2f25] rounded-sm text-[#e6d7b8] shadow-lg mb-2 sm:mb-4">
        {/* Left: Branding & Status */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => {
              if (isOpen) {
                soundManager.playPageTurnSound();
                setIsOpen(false);
              } else {
                soundManager.playPageTurnSound();
                setIsOpen(true);
              }
            }}
            className="flex items-center gap-1.5 px-2 py-1 text-xs font-mono-tech uppercase tracking-wider bg-[#2e231c] hover:bg-[#403026] border border-[#523e32] text-[#e6d7b8] rounded-xs transition-colors cursor-pointer"
            title={isOpen ? 'Close book and view cover' : 'Open book'}
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#d2b77a]" />
            <span className="hidden sm:inline">{isOpen ? 'Close Journal' : 'Open Journal'}</span>
          </button>

          <div className="hidden md:flex items-center gap-1.5 font-mono-tech text-[10px] text-[#a18b6a]">
            <span>ARCHIVE MS-2026-MD</span>
            <span>•</span>
            <span className="text-[#d2b77a]">MYTHREIE DUMPATI</span>
          </div>
        </div>

        {/* Center: Spread Indicator & Navigation */}
        {isOpen && (
          <div className="flex items-center gap-2 font-mono-tech text-xs">
            <button
              type="button"
              onClick={turnPrev}
              disabled={isFlipping}
              className="p-1 sm:px-2 sm:py-1 bg-[#2e231c] hover:bg-[#403026] text-[#e6d7b8] disabled:opacity-40 border border-[#523e32] rounded-xs transition-colors cursor-pointer"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-[10px] sm:text-xs tracking-wider text-[#d2b77a] px-1 sm:px-2">
              SPREAD {String(currentSpread).padStart(2, '0')} / {String(TOTAL_SPREADS).padStart(2, '0')}{' '}
              <span className="hidden sm:inline text-[#a18b6a]">
                (PP. {String(leftPageNum).padStart(2, '0')}–{String(rightPageNum).padStart(2, '0')})
              </span>
            </span>

            <button
              type="button"
              onClick={turnNext}
              disabled={isFlipping || currentSpread === TOTAL_SPREADS}
              className="p-1 sm:px-2 sm:py-1 bg-[#2e231c] hover:bg-[#403026] text-[#e6d7b8] disabled:opacity-40 border border-[#523e32] rounded-xs transition-colors cursor-pointer"
              aria-label="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Right: Sound, Index & Download Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {isOpen && (
            <button
              type="button"
              onClick={() => setIsTocOpen(true)}
              className="flex items-center gap-1 px-2.5 py-1 bg-[#2e231c] hover:bg-[#403026] border border-[#523e32] rounded-xs text-[#e6d7b8] font-mono-tech text-xs transition-colors cursor-pointer"
              title="Table of Contents"
            >
              <Bookmark className="w-3.5 h-3.5 text-[#8C3833]" />
              <span className="hidden sm:inline">Index</span>
            </button>
          )}

          {/* Sound Toggle */}
          <button
            type="button"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-1.5 bg-[#2e231c] hover:bg-[#403026] border border-[#523e32] rounded-xs text-[#e6d7b8] transition-colors cursor-pointer"
            title={soundEnabled ? 'Mute page turning sound' : 'Enable page turning sound'}
            aria-label="Toggle paper sound"
          >
            {soundEnabled ? (
              <Volume2 className="w-3.5 h-3.5 text-[#d2b77a]" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-[#735e50]" />
            )}
          </button>

          {/* Resume PDF Download */}
          <a
            href="/MYTHREIE_DUMPATI.pdf"
            download="MYTHREIE_DUMPATI_RESUME.pdf"
            onClick={() => soundManager.playStampSound()}
            className="flex items-center gap-1 px-2.5 py-1 bg-[#8C3833] hover:bg-[#a6423c] text-[#f1e8d5] rounded-xs font-mono-tech text-xs uppercase tracking-wider transition-colors shadow-sm"
            title="Download Original Resume PDF"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden md:inline">PDF Resume</span>
          </a>
        </div>
      </header>

      {/* MAIN BOOK STAGE */}
      <main className="relative z-20 flex-1 w-full max-w-6xl flex items-center justify-center my-auto py-2">
        {!isOpen ? (
          /* CLOSED COVER STATE */
          <div className="animate-in zoom-in-95 duration-500 flex items-center justify-center">
            <BookCover onOpen={() => setIsOpen(true)} />
          </div>
        ) : (
          /* OPEN BOOK SPREAD */
          <div className="relative w-full max-w-5xl transition-all duration-300">
            {/* BOOK DEPTH / THICKNESS LAYERS (Stack of Paper Pages) */}
            <div className="absolute -left-3 top-3 bottom-3 w-3 bg-[#d5c7a5] rounded-l-xs border-y border-l border-[#8f7b59]/50 shadow-2xl flex flex-col justify-between overflow-hidden">
              <div className="h-full w-full bg-[repeating-linear-gradient(to_bottom,#d5c7a5,#d5c7a5_2px,#baa883_2px,#baa883_3px)] opacity-70"></div>
            </div>
            <div className="absolute -right-3 top-3 bottom-3 w-3 bg-[#d5c7a5] rounded-r-xs border-y border-r border-[#8f7b59]/50 shadow-2xl flex flex-col justify-between overflow-hidden">
              <div className="h-full w-full bg-[repeating-linear-gradient(to_bottom,#d5c7a5,#d5c7a5_2px,#baa883_2px,#baa883_3px)] opacity-70"></div>
            </div>

            {/* Brass / Ribbon Bookmark Hanging From Book Top */}
            <button
              type="button"
              onClick={() => setIsTocOpen(true)}
              className="absolute -top-5 right-24 w-8 h-12 bg-[#8C3833] hover:h-14 transition-all duration-200 border-x border-[#592320] shadow-md z-30 flex items-center justify-center text-white cursor-pointer group"
              title="Click bookmark to open Catalogue Index"
            >
              <Bookmark className="w-4 h-4 text-[#f1e8d5] group-hover:scale-110 transition-transform" />
            </button>

            {/* OPEN JOURNAL SPREAD CONTAINER */}
            <div
              className={`parchment-texture relative w-full min-h-[640px] sm:min-h-[700px] lg:min-h-[740px] border-2 border-[#211F1B]/40 book-stacked-shadow rounded-sm overflow-hidden transition-transform duration-300 ${
                isFlipping
                  ? flipDirection === 'forward'
                    ? 'scale-[0.99] rotate-y-[-2deg]'
                    : 'scale-[0.99] rotate-y-[2deg]'
                  : ''
              }`}
            >
              {/* Central Binding Crease & Gutter Shadows (Desktop) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-12 -ml-6 bg-gradient-to-r from-transparent via-[#211F1B]/20 to-transparent pointer-events-none z-20"></div>
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#211F1B]/30 pointer-events-none z-20"></div>

              {/* Deckled Edge Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-2 pointer-events-none z-20 opacity-40 bg-gradient-to-r from-[#211F1B]/15 to-transparent"></div>
              <div className="absolute right-0 top-0 bottom-0 w-2 pointer-events-none z-20 opacity-40 bg-gradient-to-l from-[#211F1B]/15 to-transparent"></div>

              {/* Dynamic Page Flip Shadow Curtain during Transition */}
              {isFlipping && (
                <div
                  className={`absolute inset-0 z-30 pointer-events-none transition-opacity duration-300 ${
                    flipDirection === 'forward'
                      ? 'bg-gradient-to-r from-transparent via-black/15 to-black/30'
                      : 'bg-gradient-to-l from-transparent via-black/15 to-black/30'
                  }`}
                ></div>
              )}

              {/* DESKTOP / TABLET TWO-PAGE SPREAD CONTENT */}
              <div className="h-full w-full">{renderSpreadContent()}</div>
            </div>

            {/* Click-to-Turn Lateral Margins (Desktop Convenience) */}
            <button
              type="button"
              onClick={turnPrev}
              disabled={isFlipping}
              className="hidden lg:flex absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-20 items-center justify-center text-[#d2b77a]/70 hover:text-[#d2b77a] hover:scale-110 transition-all cursor-pointer disabled:opacity-0"
              title="Previous Page (or Arrow Left)"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              type="button"
              onClick={turnNext}
              disabled={isFlipping || currentSpread === TOTAL_SPREADS}
              className="hidden lg:flex absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-20 items-center justify-center text-[#d2b77a]/70 hover:text-[#d2b77a] hover:scale-110 transition-all cursor-pointer disabled:opacity-0"
              title="Next Page (or Arrow Right)"
              aria-label="Next Page"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        )}
      </main>

      {/* BOTTOM DESK ACCESSORY BAR */}
      <footer className="relative z-30 w-full max-w-6xl flex flex-wrap items-center justify-between py-1.5 px-3 sm:px-4 text-[10px] sm:text-xs font-mono-tech text-[#876e4b] mt-2 border-t border-[#30241b]">
        <div className="flex items-center gap-2">
          <span>KEYBOARD: [← / →] TURN PAGES • [ESC] CLOSE</span>
        </div>

        <div className="flex items-center gap-3">
          <span>CONFIDENTIAL DOSSIER • HYDERABAD</span>
          <span>© 2026 MYTHREIE DUMPATI</span>
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
