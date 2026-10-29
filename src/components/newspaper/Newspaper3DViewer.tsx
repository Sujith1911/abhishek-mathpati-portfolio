import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { renderNewspaperPage } from './NewspaperPages';

interface Newspaper3DViewerProps {
  currentSpread: number;
  totalSpreads: number;
  targetSpread: number;
  isFlipping: boolean;
  flipDirection: 'forward' | 'backward' | null;
  onFlipComplete: () => void;
  onTurnNext: () => void;
  onTurnPrev: () => void;
  onNavigateToSpread: (spreadIndex: number) => void;
}

export const Newspaper3DViewer: React.FC<Newspaper3DViewerProps> = ({
  currentSpread,
  totalSpreads,
  targetSpread,
  isFlipping,
  flipDirection,
  onFlipComplete,
  onTurnNext,
  onTurnPrev,
  onNavigateToSpread,
}) => {
  const [progress, setProgress] = useState(0);
  const animFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const onCompleteRef = useRef(onFlipComplete);
  onCompleteRef.current = onFlipComplete;

  // Real-time animation loop using requestAnimationFrame
  useEffect(() => {
    if (!isFlipping || !flipDirection) {
      setProgress(0);
      startTimeRef.current = null;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    const DURATION = 820; // ms for authentic broadsheet paper weight

    // Quintic/Cubic easing curve for physical paper acceleration and soft landing
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const rawProgress = Math.min(elapsed / DURATION, 1);
      const eased = easeInOutCubic(rawProgress);
      setProgress(eased);

      if (rawProgress < 1) {
        animFrameRef.current = requestAnimationFrame(animate);
      } else {
        startTimeRef.current = null;
        onCompleteRef.current();
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isFlipping, flipDirection]);

  // Page Numbers calculation
  const getPagesForSpread = (s: number) => {
    if (s === 1) return { left: 0, right: 1 };
    return { left: s * 2 - 2, right: s * 2 - 1 };
  };

  const currentPages = getPagesForSpread(currentSpread);
  const targetPages = getPagesForSpread(targetSpread);

  const isForward = flipDirection === 'forward';

  // Determine pages for turning leaf and bases during turn
  let turningFrontPage = 1;
  let turningBackPage = 2;
  let baseLeftPage = 0;
  let baseRightPage = 3;

  if (isFlipping) {
    if (isForward) {
      if (currentSpread === 1) {
        // OPENING FROM SPREAD 1 (COVER) TO SPREAD 2
        // Front of turning leaf is Front Cover (Page 01)
        turningFrontPage = 1;
        // Back of turning leaf is Page 02 (Overview)
        turningBackPage = 2;
        // Left base MUST be 0 (EMPTY)! Absolutely NO page visible on left before leaf lands!
        baseLeftPage = 0;
        // Right base reveals Page 03 as the cover lifts away
        baseRightPage = 3;
      } else {
        // Forward turn between interior spreads (e.g. Spread 2 -> 3)
        turningFrontPage = currentPages.right;
        turningBackPage = targetPages.left;
        baseLeftPage = currentPages.left;
        baseRightPage = targetPages.right;
      }
    } else {
      if (targetSpread === 1) {
        // CLOSING BACK TO SPREAD 1 (COVER)
        turningFrontPage = currentPages.left;
        turningBackPage = 1;
        baseLeftPage = 0;
        baseRightPage = currentPages.right;
      } else {
        // Backward turn between interior spreads (e.g. Spread 3 -> 2)
        turningFrontPage = currentPages.left;
        turningBackPage = targetPages.right;
        baseLeftPage = targetPages.left;
        baseRightPage = currentPages.right;
      }
    }
  }

  // Rotation angles and paper curvature
  const angle = isForward ? -180 * progress : 180 * progress;
  const curl = Math.sin(progress * Math.PI) * 2.2;
  const shadowOpacity = Math.sin(progress * Math.PI) * 0.38;

  // Is closed single-page state
  const isClosedSinglePage = currentSpread === 1 && !isFlipping;

  return (
    <div
      className="relative w-full h-full flex items-center justify-center select-none"
      style={{ perspective: '2600px' }}
    >
      {/* ========================================================================= */}
      {/* 1. CLOSED NEWSPAPER (SPREAD 1) WHEN NOT FLIPPING */}
      {/* ========================================================================= */}
      {isClosedSinglePage && (
        <div className="relative w-full h-full flex items-center justify-center animate-in fade-in duration-300">
          <div className="newspaper-paper-texture newspaper-broadsheet-shadow relative h-full max-h-[calc(100vh-1.25rem)] aspect-[622/877] max-w-full border-2 border-[#141210] rounded-xs overflow-hidden flex flex-col justify-between">
            {renderNewspaperPage(1, {
              onOpenNewspaper: onTurnNext,
              onNavigateToSpread,
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. OPEN 2-PAGE BROADSHEET WHEN NOT FLIPPING (SPREADS 2 TO 6) */}
      {/* ========================================================================= */}
      {currentSpread >= 2 && !isFlipping && (
        <div className="newspaper-paper-texture newspaper-broadsheet-shadow relative w-full h-full max-h-[calc(100vh-1.25rem)] border-2 border-[#141210] rounded-xs overflow-hidden flex flex-col justify-between animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full relative">
            {/* Left Page */}
            <div className="h-full w-full overflow-hidden border-b md:border-b-0 md:border-r border-[#141210]/20 relative">
              {renderNewspaperPage(currentPages.left, { onNavigateToSpread })}
            </div>

            {/* Right Page */}
            <div className="h-full w-full overflow-hidden relative">
              {renderNewspaperPage(currentPages.right, { onNavigateToSpread })}
            </div>

            {/* Central Broadsheet Vertical Fold Crease Shadow */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-12 -ml-6 bg-gradient-to-r from-transparent via-[#141210]/25 to-transparent pointer-events-none z-20" />
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-[#141210]/35 pointer-events-none z-20" />
          </div>

          {/* Lateral Hover Turn Wings */}
          {currentSpread > 1 && (
            <button
              type="button"
              onClick={onTurnPrev}
              className="hidden lg:flex absolute left-0 top-0 bottom-0 w-12 items-center justify-center group bg-transparent hover:bg-black/[0.04] transition-all cursor-pointer z-30"
              title="Previous Broadsheet (Click or Arrow Left)"
              aria-label="Previous Page"
            >
              <div className="opacity-0 group-hover:opacity-90 transition-opacity bg-[#14100c]/85 text-[#f5f0e1] p-2 rounded-xs shadow-lg flex items-center justify-center">
                <ChevronLeft className="w-5 h-5 text-[#d9c49f]" />
              </div>
            </button>
          )}

          {currentSpread < totalSpreads && (
            <button
              type="button"
              onClick={onTurnNext}
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
      )}

      {/* ========================================================================= */}
      {/* 3. REALTIME 3D PHYSICAL BROADSHEET SPREADING & PAGE TURN (DURING FLIP) */}
      {/* ========================================================================= */}
      {isFlipping && (
        <div
          className="newspaper-paper-texture newspaper-broadsheet-shadow relative w-full h-full max-h-[calc(100vh-1.25rem)] border-2 border-[#141210] rounded-xs overflow-hidden flex flex-col justify-between"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Base Spread Layout (Underneath Turning Leaf) */}
          <div className="grid grid-cols-2 h-full w-full relative">
            {/* Left Base Page */}
            <div className="h-full w-full overflow-hidden border-r border-[#141210]/20 relative bg-[#f4f3ef]">
              {baseLeftPage > 0 ? (
                renderNewspaperPage(baseLeftPage, { onNavigateToSpread })
              ) : (
                /* Blank clean paper surface on left during initial open — NO PAGE VISIBLE BEFORE LEAF LANDS! */
                <div className="w-full h-full bg-[#f4f3ef]" />
              )}

              {/* Dynamic Cast Shadow from Landing Leaf */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity bg-gradient-to-l from-[#141210]/30 to-transparent"
                style={{
                  opacity: isForward && progress > 0.5 ? (progress - 0.5) * 2 * 0.4 : 0,
                }}
              />
            </div>

            {/* Right Base Page */}
            <div className="h-full w-full overflow-hidden relative bg-[#f4f3ef]">
              {baseRightPage > 0 ? (
                renderNewspaperPage(baseRightPage, { onNavigateToSpread })
              ) : (
                <div className="w-full h-full bg-[#f4f3ef]" />
              )}

              {/* Dynamic Cast Shadow from Lifting Leaf */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity bg-gradient-to-r from-[#141210]/30 to-transparent"
                style={{
                  opacity: isForward && progress < 0.5 ? (0.5 - progress) * 2 * 0.4 : 0,
                }}
              />
            </div>

            {/* Central Broadsheet Vertical Fold Crease */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-12 -ml-6 bg-gradient-to-r from-transparent via-[#141210]/25 to-transparent pointer-events-none z-20" />
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-[#141210]/35 pointer-events-none z-20" />
          </div>

          {/* ========================================================================= */}
          {/* THE 3D TURNING LEAF (HOLDS REAL INTACT CONTENT ON BOTH FACES) */}
          {/* ========================================================================= */}
          {isForward ? (
            /* FORWARD TURN: Leaf on Right half rotating along left spine from 0° to -180° */
            <div
              className="absolute top-0 bottom-0 right-0 w-1/2 h-full z-40 pointer-events-none"
              style={{
                transformOrigin: '0% 50%',
                transformStyle: 'preserve-3d',
                transform: `rotateY(${angle}deg) rotateZ(${curl}deg)`,
                willChange: 'transform',
              }}
            >
              {/* FRONT FACE: Current Page being turned */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden bg-[#f4f3ef] border-l border-[#141210]/20 shadow-2xl"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                {renderNewspaperPage(turningFrontPage, { onNavigateToSpread })}

                {/* Shading as page turns away from viewer */}
                <div
                  className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/25 via-black/10 to-transparent"
                  style={{ opacity: shadowOpacity }}
                />
              </div>

              {/* BACK FACE: Target Left Page landing on reverse */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden bg-[#f4f3ef] border-r border-[#141210]/20 shadow-2xl"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                {renderNewspaperPage(turningBackPage, { onNavigateToSpread })}

                {/* Shading as page lands towards viewer */}
                <div
                  className="absolute inset-0 pointer-events-none bg-gradient-to-l from-black/25 via-black/10 to-transparent"
                  style={{ opacity: shadowOpacity }}
                />
              </div>
            </div>
          ) : (
            /* BACKWARD TURN: Leaf on Left half rotating along right spine from 0° to 180° */
            <div
              className="absolute top-0 bottom-0 left-0 w-1/2 h-full z-40 pointer-events-none"
              style={{
                transformOrigin: '100% 50%',
                transformStyle: 'preserve-3d',
                transform: `rotateY(${angle}deg) rotateZ(${-curl}deg)`,
                willChange: 'transform',
              }}
            >
              {/* FRONT FACE (facing left): Current Left Page */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden bg-[#f4f3ef] border-r border-[#141210]/20 shadow-2xl"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                {renderNewspaperPage(turningFrontPage, { onNavigateToSpread })}

                {/* Shading */}
                <div
                  className="absolute inset-0 pointer-events-none bg-gradient-to-l from-black/25 via-black/10 to-transparent"
                  style={{ opacity: shadowOpacity }}
                />
              </div>

              {/* BACK FACE (facing right): Previous Right Page */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden bg-[#f4f3ef] border-l border-[#141210]/20 shadow-2xl"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(-180deg)',
                }}
              >
                {renderNewspaperPage(turningBackPage, { onNavigateToSpread })}

                {/* Shading */}
                <div
                  className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/25 via-black/10 to-transparent"
                  style={{ opacity: shadowOpacity }}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
