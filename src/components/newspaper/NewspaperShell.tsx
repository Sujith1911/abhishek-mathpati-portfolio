import React, { useState, useEffect, useRef } from 'react';
import { NewsPage1 } from './pages/NewsPage1';
import { NewsPage2 } from './pages/NewsPage2';
import { NewsPage3 } from './pages/NewsPage3';
import { NewsPage4 } from './pages/NewsPage4';
import { NewsPage5 } from './pages/NewsPage5';
import { NewsPage6 } from './pages/NewsPage6';
import { soundManager } from '../../utils/sound';
import {
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Volume2,
  VolumeX,
  Download,
  X,
} from 'lucide-react';

export const TOTAL_PAGES = 6;

export const NewspaperShell: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'forward' | 'backward' | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    soundManager.enabled = soundEnabled;
  }, [soundEnabled]);

  // Turn page forward with smooth realistic physics
  const turnNext = () => {
    if (isFlipping || currentPage >= TOTAL_PAGES) return;
    setIsFlipping(true);
    setFlipDirection('forward');
    soundManager.playPageTurnSound();

    setTimeout(() => {
      setCurrentPage((prev) => prev + 1);
      setIsFlipping(false);
      setFlipDirection(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 450);
  };

  // Turn page backward with smooth realistic physics
  const turnPrev = () => {
    if (isFlipping || currentPage <= 1) return;
    setIsFlipping(true);
    setFlipDirection('backward');
    soundManager.playPageTurnSound();

    setTimeout(() => {
      setCurrentPage((prev) => prev - 1);
      setIsFlipping(false);
      setFlipDirection(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 450);
  };

  // Direct page navigation from index
  const goToPage = (page: number) => {
    if (page < 1 || page > TOTAL_PAGES || page === currentPage || isFlipping) return;
    setIsFlipping(true);
    setFlipDirection(page > currentPage ? 'forward' : 'backward');
    soundManager.playPageTurnSound();

    setTimeout(() => {
      setCurrentPage(page);
      setIsFlipping(false);
      setFlipDirection(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isMenuOpen) {
        if (e.key === 'Escape') setIsMenuOpen(false);
        return;
      }

      if (e.key === 'ArrowRight') {
        turnNext();
      } else if (e.key === 'ArrowLeft') {
        turnPrev();
      } else if (e.key === 'Home') {
        goToPage(1);
      } else if (e.key === 'End') {
        goToPage(TOTAL_PAGES);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, isFlipping, isMenuOpen]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 55) {
      if (diff > 0) turnNext();
      else turnPrev();
    }
    touchStartX.current = null;
  };

  // Render current newspaper broadsheet content
  const renderCurrentPage = () => {
    const props = {
      currentPage,
      totalPages: TOTAL_PAGES,
      onNextPage: turnNext,
      onPrevPage: turnPrev,
    };

    switch (currentPage) {
      case 1:
        return <NewsPage1 {...props} />;
      case 2:
        return <NewsPage2 {...props} />;
      case 3:
        return <NewsPage3 {...props} />;
      case 4:
        return <NewsPage4 {...props} />;
      case 5:
        return <NewsPage5 {...props} />;
      case 6:
        return <NewsPage6 {...props} />;
      default:
        return <NewsPage1 {...props} />;
    }
  };

  const pageNames = [
    { num: 1, title: 'Front Page: Lead Story & Profile', section: 'BIOGRAPHY' },
    { num: 2, title: 'Field Dossier: Police & Teleparadigm', section: 'EXPERIENCE' },
    { num: 3, title: 'Scientific Dispatch: IEEE & IJRDET', section: 'PUBLICATIONS' },
    { num: 4, title: 'Technical Bulletin: SecureShare & QPAT', section: 'ENGINEERING' },
    { num: 5, title: 'Honours, Certifications & Arsenal', section: 'ACCREDITATIONS' },
    { num: 6, title: 'Telegraph Dispatch & PDF Resume', section: 'CORRESPONDENCE' },
  ];

  return (
    <div
      className="newsroom-desk min-h-screen w-full flex flex-col items-center justify-between p-2 sm:p-4 md:p-6 lg:p-8 select-none relative overflow-x-hidden text-[#1f1d19]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Ambient Newsroom Lamp Lighting Overlay */}
      <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-black/60 pointer-events-none"></div>

      {/* TOP NEWSPAPER CONTROLS TOOLBAR */}
      <nav className="relative z-30 w-full max-w-5xl flex items-center justify-between py-2 px-3 sm:px-4 bg-[#1a1410]/90 border border-[#3b2b20] rounded-sm text-[#e6d7b8] shadow-xl mb-3 sm:mb-5">
        {/* Left: Branding */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#8C3833] animate-pulse"></div>
          <div className="font-mono-tech text-xs tracking-wider text-[#d2b77a]">
            <span>THE RESEARCH CHRONICLE</span>
            <span className="hidden sm:inline text-[#8a7253] ml-2">• ABHISHEK MATHPATI</span>
          </div>
        </div>

        {/* Center: Page Turn Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 font-mono-tech text-xs">
          <button
            type="button"
            onClick={turnPrev}
            disabled={isFlipping || currentPage === 1}
            className="p-1 sm:px-2 sm:py-1 bg-[#2c2018] hover:bg-[#3d2d22] text-[#e6d7b8] disabled:opacity-30 border border-[#4d392a] rounded-xs transition-colors cursor-pointer"
            title="Previous Page (or Left Arrow)"
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="text-[11px] sm:text-xs font-bold text-[#d2b77a] px-1 sm:px-2 tracking-wider">
            PAGE {currentPage} / {TOTAL_PAGES}
          </span>

          <button
            type="button"
            onClick={turnNext}
            disabled={isFlipping || currentPage === TOTAL_PAGES}
            className="p-1 sm:px-2 sm:py-1 bg-[#2c2018] hover:bg-[#3d2d22] text-[#e6d7b8] disabled:opacity-30 border border-[#4d392a] rounded-xs transition-colors cursor-pointer"
            title="Next Page (or Right Arrow)"
            aria-label="Next Page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Section Index, Audio Toggle & PDF Download */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Section Index Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-1 px-2.5 py-1 bg-[#2c2018] hover:bg-[#3d2d22] border border-[#4d392a] rounded-xs text-[#e6d7b8] font-mono-tech text-xs transition-colors cursor-pointer"
            title="Jump to Section"
          >
            <Bookmark className="w-3.5 h-3.5 text-[#8C3833]" />
            <span className="hidden sm:inline">Sections</span>
          </button>

          {/* Sound Toggle */}
          <button
            type="button"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-1.5 bg-[#2c2018] hover:bg-[#3d2d22] border border-[#4d392a] rounded-xs text-[#e6d7b8] transition-colors cursor-pointer"
            title={soundEnabled ? 'Mute page turning sound' : 'Enable page turning sound'}
            aria-label="Toggle paper rustle sound"
          >
            {soundEnabled ? (
              <Volume2 className="w-3.5 h-3.5 text-[#d2b77a]" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-[#735e50]" />
            )}
          </button>

          {/* PDF Download Button */}
          <a
            href="/ABHISHEK_MATHPATI.pdf"
            download="ABHISHEK_MATHPATI_RESUME.pdf"
            onClick={() => soundManager.playStampSound()}
            className="flex items-center gap-1 px-2.5 py-1 bg-[#8C3833] hover:bg-[#a6423c] text-[#f4eedd] rounded-xs font-mono-tech text-xs uppercase tracking-wider transition-colors shadow-sm"
            title="Download PDF Resume"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden md:inline">PDF</span>
          </a>
        </div>
      </nav>

      {/* MAIN BROADSHEET NEWSPAPER STAGE */}
      <main className="relative z-20 flex-1 w-full max-w-5xl flex items-center justify-center my-auto py-2">
        {/* BROADSHEET PAPER CONTAINER WITH 3D PAGE-TURN PHYSICS */}
        <div className="relative w-full max-w-4xl page-turn-perspective">
          {/* Stacked Paper Layers Beneath Broadsheet */}
          <div className="absolute -left-1.5 -right-1.5 top-1.5 bottom-1.5 bg-[#dfd4bd] rounded-sm -z-10 shadow-lg border border-[#a18f73]/50"></div>
          <div className="absolute -left-3 -right-3 top-3 bottom-3 bg-[#cfc2a7] rounded-sm -z-20 shadow-xl border border-[#918063]/50"></div>

          {/* Broadsheet Page Surface */}
          <div
            className={`newsprint-paper relative w-full p-4 sm:p-6 md:p-8 lg:p-10 border-2 border-[#1f1d19]/60 newspaper-shadow rounded-sm page-turn-surface ${
              isFlipping
                ? flipDirection === 'forward'
                  ? 'page-turn-flip-left opacity-80'
                  : 'page-turn-flip-right opacity-80'
                : 'opacity-100'
            }`}
          >
            {/* Dynamic Page Turn Shadow Gradient during animation */}
            {isFlipping && (
              <div
                className={`absolute inset-0 z-30 pointer-events-none transition-opacity duration-400 ${
                  flipDirection === 'forward'
                    ? 'bg-gradient-to-r from-transparent via-black/10 to-black/25'
                    : 'bg-gradient-to-l from-transparent via-black/10 to-black/25'
                }`}
              ></div>
            )}

            {/* Current Newspaper Page Content */}
            <div className="relative z-10">{renderCurrentPage()}</div>

            {/* Realistic Bottom-Right Dog-Ear / Corner Curl Page-Turn Affordance */}
            {currentPage < TOTAL_PAGES && (
              <button
                type="button"
                onClick={turnNext}
                className="group absolute bottom-0 right-0 w-14 h-14 cursor-pointer overflow-hidden z-20 select-none"
                title={`Turn over to Page ${currentPage + 1}`}
                aria-label="Next Page"
              >
                {/* Triangular folded paper corner */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[40px] border-l-[40px] border-b-[#d5c7a9] border-l-transparent shadow-[-2px_-2px_4px_rgba(0,0,0,0.25)] group-hover:border-b-[48px] group-hover:border-l-[48px] transition-all duration-200"></div>
                <span className="absolute bottom-1.5 right-1.5 font-mono-tech text-[9px] font-bold text-[#8C3833] group-hover:scale-110 transition-transform">
                  ➔
                </span>
              </button>
            )}
          </div>

          {/* Desktop Floating Lateral Previous / Next Chevrons */}
          <button
            type="button"
            onClick={turnPrev}
            disabled={isFlipping || currentPage === 1}
            className="hidden lg:flex absolute -left-14 top-1/2 -translate-y-1/2 w-10 h-20 items-center justify-center text-[#d2b77a]/70 hover:text-[#d2b77a] hover:scale-110 transition-all cursor-pointer disabled:opacity-0"
            title="Previous Page (or Arrow Left)"
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            type="button"
            onClick={turnNext}
            disabled={isFlipping || currentPage === TOTAL_PAGES}
            className="hidden lg:flex absolute -right-14 top-1/2 -translate-y-1/2 w-10 h-20 items-center justify-center text-[#d2b77a]/70 hover:text-[#d2b77a] hover:scale-110 transition-all cursor-pointer disabled:opacity-0"
            title="Next Page (or Arrow Right)"
            aria-label="Next Page"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </main>

      {/* BOTTOM DESK BAR */}
      <footer className="relative z-30 w-full max-w-5xl flex flex-wrap items-center justify-between py-1.5 px-3 sm:px-4 text-[10px] sm:text-xs font-mono-tech text-[#8a7253] mt-3 border-t border-[#3b2b20]">
        <div>
          <span>KEYBOARD: [← / →] TURN OVER • [HOME / END] FIRST / LAST PAGE</span>
        </div>
        <div>
          <span>HYDERABAD, INDIA • B.E. CSE 2026 • ABHISHEK MATHPATI</span>
        </div>
      </footer>

      {/* SECTION QUICK-JUMP DRAWER / MODAL */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="newsprint-paper relative w-full max-w-lg p-6 sm:p-8 rounded-sm border-2 border-[#1f1d19] shadow-2xl">
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-[#1f1d19] hover:text-[#8C3833] hover:bg-[#1f1d19]/10 rounded-sm transition-colors cursor-pointer"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b-2 border-double border-[#1f1d19]/40 pb-2 mb-3">
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#686158] block">
                GAZETTE INDEX
              </span>
              <h3 className="font-typewriter text-xl font-bold uppercase tracking-wider text-[#1f1d19]">
                SELECT NEWSPAPER SECTION
              </h3>
            </div>

            <div className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-1">
              {pageNames.map((p) => {
                const isCurrent = currentPage === p.num;
                return (
                  <button
                    key={p.num}
                    type="button"
                    onClick={() => {
                      goToPage(p.num);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-xs flex items-center justify-between transition-colors border ${
                      isCurrent
                        ? 'bg-[#8C3833]/15 border-[#8C3833] text-[#8C3833]'
                        : 'bg-[#1f1d19]/4 border-transparent hover:border-[#1f1d19]/25 hover:bg-[#1f1d19]/8 text-[#1f1d19]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono-tech text-xs font-bold text-[#8C3833] flex-shrink-0">
                        PG. {p.num}
                      </span>
                      <div>
                        <span className="font-serif-vintage text-sm font-bold block">
                          {p.title}
                        </span>
                        <span className="font-mono-tech text-[9px] text-[#686158] uppercase">
                          {p.section}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
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

            <div className="mt-4 pt-3 border-t border-[#1f1d19]/20 flex justify-between items-center font-mono-tech text-[10px] text-[#686158]">
              <span>Select any section to turn directly to that page.</span>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="text-[#8C3833] hover:underline font-bold uppercase cursor-pointer"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
