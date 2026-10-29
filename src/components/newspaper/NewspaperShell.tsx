import React, { useState, useEffect, useRef } from 'react';
import { Newspaper3DViewer } from './Newspaper3DViewer';
import { NewspaperIndexModal } from './NewspaperIndexModal';
import { NewspaperSideNav } from './NewspaperSideNav';
import { soundManager } from '../../utils/sound';

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

  // Handle completion of physical 3D broadsheet page curl
  const handleFlipComplete = () => {
    setCurrentSpread(targetSpread);
    setIsFlipping(false);
    setFlipDirection(null);
  };

  // Turn broadsheet forward in real-time 3D
  const turnNext = () => {
    if (isFlipping || currentSpread >= TOTAL_SPREADS) return;

    const next = currentSpread + 1;
    setTargetSpread(next);
    setIsFlipping(true);
    setFlipDirection('forward');
    soundManager.playPageTurnSound();
  };

  // Turn broadsheet backward in real-time 3D
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
    if (
      spreadIndex < 1 ||
      spreadIndex > TOTAL_SPREADS ||
      spreadIndex === currentSpread ||
      isFlipping
    ) {
      return;
    }

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

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
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

      {/* MAIN BROADSHEET STAGE — REALTIME 3D PHYSICAL VIEWER */}
      <main className="relative z-20 flex-1 h-full max-h-[calc(100vh-1rem)] flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Broadsheet Stack Elevation Layers (Bottom Paper Depth) */}
          <div className="absolute -left-2 top-3 bottom-3 w-2.5 bg-[#eae8e1] rounded-l-xs border-y border-l border-[#221e1a]/40 shadow-xl flex flex-col justify-between overflow-hidden">
            <div className="h-full w-full bg-[repeating-linear-gradient(to_bottom,#f4f3ef,#f4f3ef_2px,#dedbd2_2px,#dedbd2_3px)] opacity-85"></div>
          </div>
          <div className="absolute -right-2 top-3 bottom-3 w-2.5 bg-[#eae8e1] rounded-r-xs border-y border-r border-[#221e1a]/40 shadow-xl flex flex-col justify-between overflow-hidden">
            <div className="h-full w-full bg-[repeating-linear-gradient(to_bottom,#f4f3ef,#f4f3ef_2px,#dedbd2_2px,#dedbd2_3px)] opacity-85"></div>
          </div>

          {/* REALTIME 3D SPREADING & PAGE-TURNING COMPONENT */}
          <Newspaper3DViewer
            currentSpread={currentSpread}
            totalSpreads={TOTAL_SPREADS}
            targetSpread={targetSpread}
            isFlipping={isFlipping}
            flipDirection={flipDirection}
            onFlipComplete={handleFlipComplete}
            onTurnNext={turnNext}
            onTurnPrev={turnPrev}
            onNavigateToSpread={navigateToSpread}
          />
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
