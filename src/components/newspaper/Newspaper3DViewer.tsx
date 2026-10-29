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

  // Page numbers calculation:
  // Spread 1: Page 1 (Cover - Single)
  // Spread 2: Page 2 (Contents - Single)
  // Spread 3: Page 3 (Left) & Page 4 (Right)
  // Spread 4: Page 5 (Left) & Page 6 (Right)
  // Spread 5: Page 7 (Left) & Page 8 (Right)
  // Spread 6: Page 9 (Left) & Page 10 (Right)
  // Spread 7: Page 11 (Left) & Page 12 (Right)
  const getPagesForSpread = (s: number) => {
    if (s === 1) return { left: 0, right: 1 };
    if (s === 2) return { left: 0, right: 2 };
    const leftPage = (s - 3) * 2 + 3;
    const rightPage = (s - 3) * 2 + 4;
    return { left: leftPage, right: rightPage };
  };

  const currentPages = getPagesForSpread(currentSpread);
  const targetPages = getPagesForSpread(targetSpread);

  const isForward = flipDirection === 'forward';

  // Check if turning between the two single-page spreads (Spread 1 and Spread 2)
  const isSingleToSingleFlip =
    (currentSpread === 1 && targetSpread === 2) ||
    (currentSpread === 2 && targetSpread === 1);

  // Determine pages for turning leaf and bases during turn
  let turningFrontPage = 1;
  let turningBackPage = 2;
  let baseLeftPage = 0;
  let baseRightPage = 3;

  if (isFlipping) {
    if (isForward) {
      if (currentSpread === 1) {
        turningFrontPage = 1;
        turningBackPage = targetSpread === 2 ? 2 : targetPages.left;
        baseLeftPage = 0;
        baseRightPage = targetSpread === 2 ? 2 : targetPages.right;
      } else if (currentSpread === 2) {
        // Turning from Content page (Single) into 2-page broadsheet (Spread 3+)
        turningFrontPage = 2;
        turningBackPage = targetPages.left;
        baseLeftPage = 0; // Empty on left until leaf lands
        baseRightPage = targetPages.right; // Reveal right page underneath
      } else {
        // Forward turn between 2-page broadsheet spreads
        turningFrontPage = currentPages.right;
        turningBackPage = targetPages.left;
        baseLeftPage = currentPages.left;
        baseRightPage = targetPages.right;
      }
    } else {
      if (targetSpread === 1) {
        turningFrontPage = currentSpread === 2 ? 2 : currentPages.left;
        turningBackPage = 1;
        baseLeftPage = 0;
        baseRightPage = currentSpread === 2 ? 1 : currentPages.right;
      } else if (targetSpread === 2) {
        // Closing back from 2-page broadsheet to Content page (Single)
        turningFrontPage = currentPages.left;
        turningBackPage = 2;
        baseLeftPage = 0;
        baseRightPage = currentPages.right;
      } else {
        // Backward turn between 2-page broadsheet spreads
        turningFrontPage = currentPages.left;
        turningBackPage = targetPages.right;
        baseLeftPage = targetPages.left;
        baseRightPage = currentPages.right;
      }
    }
  }

  // Physical Rotation angles and dynamic page curl
  const angle = isForward ? -180 * progress : 180 * progress;
  const curl = Math.sin(progress * Math.PI) * 2.2;
  const shadowOpacity = Math.sin(progress * Math.PI) * 0.38;

  return (
    <div
      className="relative w-full h-full flex items-center justify-center select-none"
      style={{ perspective: '2600px' }}
    >
      {/* ========================================================================= */}
      {/* 1. SPREAD 01: FRONT COVER (SINGLE PAGE VIEW WHEN NOT FLIPPING)           */}
      {/* ========================================================================= */}
      {currentSpread === 1 && !isFlipping && (
        <div className="relative w-full h-full flex items-center justify-center animate-in fade-in duration-300">
          <div className="newspaper-paper-texture newspaper-broadsheet-shadow relative h-full max-h-[calc(100vh-1.25rem)] aspect-[622/877] max-w-full border-2 border-[#141210] rounded-xs overflow-hidden flex flex-col justify-between">
            {renderNewspaperPage(1, {
              onOpenNewspaper: onTurnNext,
              onNavigateToSpread,
            })}
          </div>

          {/* Right hover turn wing */}
          <button
            type="button"
            onClick={onTurnNext}
            className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-24 items-center justify-center group bg-transparent hover:bg-black/[0.04] transition-all cursor-pointer z-30"
            title="Turn to Contents (Click or Arrow Right)"
            aria-label="Next Page"
          >
            <div className="opacity-0 group-hover:opacity-90 transition-opacity bg-[#14100c]/85 text-[#f5f0e1] p-2.5 rounded-xs shadow-lg flex items-center justify-center">
              <ChevronRight className="w-5 h-5 text-[#d9c49f]" />
            </div>
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. SPREAD 02: TABLE OF CONTENTS (SINGLE PAGE VIEW WHEN NOT FLIPPING)      */}
      {/* ========================================================================= */}
      {currentSpread === 2 && !isFlipping && (
        <div className="relative w-full h-full flex items-center justify-center animate-in fade-in duration-300">
          <div className="newspaper-paper-texture newspaper-broadsheet-shadow relative h-full max-h-[calc(100vh-1.25rem)] aspect-[622/877] max-w-full border-2 border-[#141210] rounded-xs overflow-hidden flex flex-col justify-between">
            {renderNewspaperPage(2, {
              onNavigateToSpread,
            })}
          </div>

          {/* Left turn wing (back to Cover) */}
          <button
            type="button"
            onClick={onTurnPrev}
            className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-24 items-center justify-center group bg-transparent hover:bg-black/[0.04] transition-all cursor-pointer z-30"
            title="Return to Cover (Click or Arrow Left)"
            aria-label="Previous Page"
          >
            <div className="opacity-0 group-hover:opacity-90 transition-opacity bg-[#14100c]/85 text-[#f5f0e1] p-2.5 rounded-xs shadow-lg flex items-center justify-center">
              <ChevronLeft className="w-5 h-5 text-[#d9c49f]" />
            </div>
          </button>

          {/* Right turn wing (open broadsheet) */}
          <button
            type="button"
            onClick={onTurnNext}
            className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-24 items-center justify-center group bg-transparent hover:bg-black/[0.04] transition-all cursor-pointer z-30"
            title="Open Broadsheet Archive (Click or Arrow Right)"
            aria-label="Next Page"
          >
            <div className="opacity-0 group-hover:opacity-90 transition-opacity bg-[#14100c]/85 text-[#f5f0e1] p-2.5 rounded-xs shadow-lg flex items-center justify-center">
              <ChevronRight className="w-5 h-5 text-[#d9c49f]" />
            </div>
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. SPREADS 03 TO 07: 2-PAGE BROADSHEET SPREADS (WHEN NOT FLIPPING)        */}
      {/* ========================================================================= */}
      {currentSpread >= 3 && !isFlipping && (
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
          <button
            type="button"
            onClick={onTurnPrev}
            className="hidden lg:flex absolute left-0 top-0 bottom-0 w-12 items-center justify-center group bg-transparent hover:bg-black/[0.04] transition-all cursor-pointer z-30"
            title="Previous Page / Spread (Click or Arrow Left)"
            aria-label="Previous Page"
          >
            <div className="opacity-0 group-hover:opacity-90 transition-opacity bg-[#14100c]/85 text-[#f5f0e1] p-2 rounded-xs shadow-lg flex items-center justify-center">
              <ChevronLeft className="w-5 h-5 text-[#d9c49f]" />
            </div>
          </button>

          {currentSpread < totalSpreads && (
            <button
              type="button"
              onClick={onTurnNext}
              className="hidden lg:flex absolute right-0 top-0 bottom-0 w-12 items-center justify-center group bg-transparent hover:bg-black/[0.04] transition-all cursor-pointer z-30"
              title="Next Broadsheet Spread (Click or Arrow Right)"
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
      {/* 4. REAL-TIME 3D PHYSICAL PAGE TURNING (DURING FLIP)                       */}
      {/* ========================================================================= */}
      {isFlipping && isSingleToSingleFlip && (
        /* FLIPPING BETWEEN SPREAD 1 (COVER) AND SPREAD 2 (CONTENTS) AS SINGLE PAGES */
        <div className="relative w-full h-full flex items-center justify-center">
          <div
            className="newspaper-paper-texture newspaper-broadsheet-shadow relative h-full max-h-[calc(100vh-1.25rem)] aspect-[622/877] max-w-full border-2 border-[#141210] rounded-xs overflow-visible"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Base Underneath (Revealed Target Page) */}
            <div className="w-full h-full overflow-hidden bg-[#faf9f6]">
              {renderNewspaperPage(targetPages.right, { onNavigateToSpread })}
            </div>

            {/* The 3D Turning Single Page Leaf */}
            {isForward ? (
              <div
                className="absolute inset-0 w-full h-full z-40 pointer-events-none"
                style={{
                  transformOrigin: '0% 50%',
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${angle}deg) rotateZ(${curl}deg)`,
                  willChange: 'transform',
                }}
              >
                {/* Front Face: Cover (Page 01) */}
                <div
                  className="absolute inset-0 w-full h-full overflow-hidden bg-[#f4f3ef] border border-[#141210]/30 shadow-2xl"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  {renderNewspaperPage(turningFrontPage, { onNavigateToSpread })}
                  <div
                    className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/25 via-black/10 to-transparent"
                    style={{ opacity: shadowOpacity }}
                  />
                </div>

                {/* Back Face: Contents (Page 02) */}
                <div
                  className="absolute inset-0 w-full h-full overflow-hidden bg-[#faf9f6] border border-[#141210]/30 shadow-2xl"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  {renderNewspaperPage(turningBackPage, { onNavigateToSpread })}
                  <div
                    className="absolute inset-0 pointer-events-none bg-gradient-to-l from-black/25 via-black/10 to-transparent"
                    style={{ opacity: shadowOpacity }}
                  />
                </div>
              </div>
            ) : (
              <div
                className="absolute inset-0 w-full h-full z-40 pointer-events-none"
                style={{
                  transformOrigin: '100% 50%',
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${angle}deg) rotateZ(${-curl}deg)`,
                  willChange: 'transform',
                }}
              >
                {/* Front Face: Contents (Page 02) */}
                <div
                  className="absolute inset-0 w-full h-full overflow-hidden bg-[#faf9f6] border border-[#141210]/30 shadow-2xl"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  {renderNewspaperPage(turningFrontPage, { onNavigateToSpread })}
                  <div
                    className="absolute inset-0 pointer-events-none bg-gradient-to-l from-black/25 via-black/10 to-transparent"
                    style={{ opacity: shadowOpacity }}
                  />
                </div>

                {/* Back Face: Cover (Page 01) */}
                <div
                  className="absolute inset-0 w-full h-full overflow-hidden bg-[#f4f3ef] border border-[#141210]/30 shadow-2xl"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(-180deg)',
                  }}
                >
                  {renderNewspaperPage(turningBackPage, { onNavigateToSpread })}
                  <div
                    className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/25 via-black/10 to-transparent"
                    style={{ opacity: shadowOpacity }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. 2-PAGE BROADSHEET PHYSICAL PAGE TURN (DURING FLIP SPREADS 2 -> 3+ ETC) */}
      {/* ========================================================================= */}
      {isFlipping && !isSingleToSingleFlip && (
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

          {/* ===================================================================== */}
          {/* THE 3D TURNING LEAF (HOLDS REAL INTACT CONTENT ON BOTH FACES)         */}
          {/* ===================================================================== */}
          {isForward ? (
            /* FORWARD TURN: Leaf on Right half rotating along central spine from 0° to -180° */
            <div
              className="absolute top-0 bottom-0 right-0 w-1/2 h-full z-40 pointer-events-none"
              style={{
                transformOrigin: '0% 50%',
                transformStyle: 'preserve-3d',
                transform: `rotateY(${angle}deg) rotateZ(${curl}deg)`,
                willChange: 'transform',
              }}
            >
              {/* FRONT FACE: Page turning away */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden bg-[#f4f3ef] border-l border-[#141210]/20 shadow-2xl"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                {renderNewspaperPage(turningFrontPage, { onNavigateToSpread })}
                <div
                  className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/25 via-black/10 to-transparent"
                  style={{ opacity: shadowOpacity }}
                />
              </div>

              {/* BACK FACE: Target page landing on reverse */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden bg-[#f4f3ef] border-r border-[#141210]/20 shadow-2xl"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                {renderNewspaperPage(turningBackPage, { onNavigateToSpread })}
                <div
                  className="absolute inset-0 pointer-events-none bg-gradient-to-l from-black/25 via-black/10 to-transparent"
                  style={{ opacity: shadowOpacity }}
                />
              </div>
            </div>
          ) : (
            /* BACKWARD TURN: Leaf on Left half rotating along central spine from 0° to 180° */
            <div
              className="absolute top-0 bottom-0 left-0 w-1/2 h-full z-40 pointer-events-none"
              style={{
                transformOrigin: '100% 50%',
                transformStyle: 'preserve-3d',
                transform: `rotateY(${angle}deg) rotateZ(${-curl}deg)`,
                willChange: 'transform',
              }}
            >
              {/* FRONT FACE (facing left): Current Page */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden bg-[#f4f3ef] border-r border-[#141210]/20 shadow-2xl"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                {renderNewspaperPage(turningFrontPage, { onNavigateToSpread })}
                <div
                  className="absolute inset-0 pointer-events-none bg-gradient-to-l from-black/25 via-black/10 to-transparent"
                  style={{ opacity: shadowOpacity }}
                />
              </div>

              {/* BACK FACE (facing right): Previous Page landing */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden bg-[#f4f3ef] border-l border-[#141210]/20 shadow-2xl"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(-180deg)',
                }}
              >
                {renderNewspaperPage(turningBackPage, { onNavigateToSpread })}
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
