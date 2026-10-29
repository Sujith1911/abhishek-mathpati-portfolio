import React, { useState, useEffect, useRef } from 'react';
import { NewspaperCoverPage } from './spreads/NewspaperCoverPage';
import { Spread1FrontPage } from './spreads/Spread1FrontPage';
import { Spread2AcademicExp } from './spreads/Spread2AcademicExp';
import { Spread3ResearchProjects } from './spreads/Spread3ResearchProjects';
import { Spread4ForensicArsenal } from './spreads/Spread4ForensicArsenal';
import { Spread5LeadershipColophon } from './spreads/Spread5LeadershipColophon';
import { ThreeNewspaperCurl } from './ThreeNewspaperCurl';
import { NewspaperIndexModal } from './NewspaperIndexModal';
import { NewspaperSideNav } from './NewspaperSideNav';
import { soundManager } from '../../utils/sound';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const TOTAL_SPREADS = 6;

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

  // Direct navigation from table of contents or sidebar
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
        return <NewspaperCoverPage onOpenNewspaper={turnNext} />;
      case 2:
        return <Spread1FrontPage onNavigateToSpread={navigateToSpread} />;
      case 3:
        return <Spread2AcademicExp />;
      case 4:
        return <Spread3ResearchProjects />;
      case 5:
        return <Spread4ForensicArsenal />;
      case 6:
        return <Spread5LeadershipColophon />;
      default:
        return <NewspaperCoverPage onOpenNewspaper={turnNext} />;
    }
  };

  return (
    <div
      className="newspaper-desk-bg h-screen w-full flex items-center justify-between p-2 sm:p-3 overflow-hidden select-none relative text-[#141210]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Warm Ambient Desk Lamp Vignette */}
      <div className="absolute inset-0 bg-radial from-amber-500/[0.04] via-transparent to-black/85 pointer-events-none"></div>

      {/* SIDEWARDS DOCKED NAVIGATION BAR */}
      <NewspaperSideNav
        currentSpread={currentSpread}
        totalSpreads={TOTAL_SPREADS}
        onNavigateToSpread={navigateToSpread}
        onPrevSpread={turnPrev}
        onNextSpread={turnNext}
        isFlipping={isFlipping}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
        onOpenIndex={() => setIsIndexOpen(true)}
      />

      {/* MAIN BROADSHEET STAGE — FILL SCREEN VIEWPORT ADAPTIVE */}
      <main className="relative z-20 flex-1 h-full max-h-[calc(100vh-1rem)] flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Broadsheet Stack Elevation Layers (Bottom Paper Depth) */}
          <div className="absolute -left-2 top-3 bottom-3 w-2.5 bg-[#ece3cc] rounded-l-xs border-y border-l border-[#221e1a]/40 shadow-xl flex flex-col justify-between overflow-hidden">
            <div className="h-full w-full bg-[repeating-linear-gradient(to_bottom,#f5f0e1,#f5f0e1_2px,#d9ceb4_2px,#d9ceb4_3px)] opacity-85"></div>
          </div>
          <div className="absolute -right-2 top-3 bottom-3 w-2.5 bg-[#ece3cc] rounded-r-xs border-y border-r border-[#221e1a]/40 shadow-xl flex flex-col justify-between overflow-hidden">
            <div className="h-full w-full bg-[repeating-linear-gradient(to_bottom,#f5f0e1,#f5f0e1_2px,#d9ceb4_2px,#d9ceb4_3px)] opacity-85"></div>
          </div>

          {/* OPEN NEWSPAPER BROADSHEET CONTAINER — FILLS VIEWPORT */}
          <div className="newspaper-paper-texture newspaper-broadsheet-shadow relative w-full h-full max-h-[calc(100vh-1.25rem)] border-2 border-[#141210] rounded-xs overflow-hidden flex flex-col justify-between transition-all duration-300">
            {/* Three.js 3D Page Curling Transition Element */}
            <ThreeNewspaperCurl
              isFlipping={isFlipping}
              direction={flipDirection}
              onFlipComplete={handleFlipComplete}
              currentSpread={currentSpread}
              targetSpread={targetSpread}
            />

            {/* Central Broadsheet Vertical Fold Crease Shadow (Shown on interior spreads) */}
            {currentSpread > 1 && (
              <>
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-12 -ml-6 bg-gradient-to-r from-transparent via-[#141210]/25 to-transparent pointer-events-none z-20"></div>
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-[#141210]/35 pointer-events-none z-20"></div>
              </>
            )}

            {/* Deckled Broadsheet Outer Edge Vignette */}
            <div className="absolute left-0 top-0 bottom-0 w-2.5 pointer-events-none z-20 opacity-40 bg-gradient-to-r from-[#141210]/25 to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-2.5 pointer-events-none z-20 opacity-40 bg-gradient-to-l from-[#141210]/25 to-transparent"></div>

            {/* SPREAD CONTENT */}
            <div className="h-full w-full overflow-hidden">{renderSpreadContent()}</div>

            {/* Interactive Lateral Hover Turn Wings */}
            {currentSpread > 1 && (
              <button
                type="button"
                onClick={turnPrev}
                disabled={isFlipping}
                className="hidden lg:flex absolute left-0 top-0 bottom-0 w-12 items-center justify-center group bg-transparent hover:bg-black/[0.04] transition-all cursor-pointer z-30"
                title="Previous Broadsheet (Click or Arrow Left)"
                aria-label="Previous Page"
              >
                <div className="opacity-0 group-hover:opacity-90 transition-opacity bg-[#14100c]/85 text-[#f5f0e1] p-2 rounded-xs shadow-lg flex items-center justify-center">
                  <ChevronLeft className="w-5 h-5 text-[#d9c49f]" />
                </div>
              </button>
            )}

            {currentSpread < TOTAL_SPREADS && (
              <button
                type="button"
                onClick={turnNext}
                disabled={isFlipping}
                className="hidden lg:flex absolute right-0 top-0 bottom-0 w-12 items-center justify-center group bg-transparent hover:bg-black/[0.04] transition-all cursor-pointer z-30"
                title="Next Broadsheet (Click or Arrow Right)"
                aria-label="Next Page"
              >
                <div className="opacity-0 group-hover:opacity-90 transition-opacity bg-[#14100c]/85 text-[#f5f0e1] p-2 rounded-xs shadow-lg flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 text-[#d9c49f]" />
                </div>
              </button>
            )}
          </div>
        </div>
      </main>

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
