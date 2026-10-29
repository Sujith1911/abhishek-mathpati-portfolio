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
  onNavigateToSpread: (pageIndex: number) => void;
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
  const [isCornerHovered, setIsCornerHovered] = useState(false);
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

    const DURATION = 740; // ms for authentic broadsheet paper weight and smooth lift

    // Cubic easing curve for physical lift acceleration from corner to top
    const easeCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const rawProgress = Math.min(elapsed / DURATION, 1);
      const eased = easeCubic(rawProgress);
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

  const isForward = flipDirection === 'forward';

  // ---------------------------------------------------------------------------
  // PHYSICAL 3D EDGE LIFT & FADE OUT TO TOP CALCULATION
  // Starts by pulling up from the bottom-right edge (P.T.O. corner),
  // arching upward in 3D, elevating, and fading cleanly out toward the top.
  // ---------------------------------------------------------------------------
  const p = isForward ? progress : 1 - progress;

  // Elevation rising toward viewer (translateZ)
  const liftElevation = Math.sin(p * Math.PI * 0.75) * 240;

  // Glides upward toward the top (translateY)
  const liftY = -p * 280;

  // Slight natural diagonal drift as pulled from bottom-right (translateX)
  const liftX = -p * 70;

  // Arching pitch (rotateX) as the bottom edge curls upward
  const rotateX = Math.sin(p * Math.PI * 0.8) * 28;

  // Yaw (rotateY) as the right edge lifts ahead of the left
  const rotateY = p * 16;

  // Roll tilt (rotateZ) as hand pulls diagonally up
  const rotateZ = -p * 12;

  // Clean fade out to the top:
  // Solid during initial lift, then smoothly dissolves into the top of the viewport
  const sheetOpacity = isForward
    ? p > 0.35
      ? Math.max(0, 1 - (p - 0.35) / 0.65)
      : 1
    : p < 0.65
    ? Math.max(0, p / 0.65)
    : 1;

  // Dynamic shadow cast on the base page below
  const castShadowOpacity = isForward
    ? Math.max(0, 1 - progress * 1.4) * 0.4
    : Math.max(0, progress * 1.4) * 0.4;

  const dynamicSheetShadow = Math.sin(progress * Math.PI) * 0.4;

  return (
    <div
      className="relative w-full h-full flex items-center justify-center select-none"
      style={{ perspective: '2400px' }}
    >
      {/* Centered Broadsheet Stack Stage with Exact Aspect Ratio Container */}
      <div className="relative h-full max-h-[calc(100vh-1.25rem)] aspect-[622/877] max-w-full flex items-center justify-center">
        {/* Archival Depth Stack Layers Underneath (Seamlessly Aligned) */}
        <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#e3dfd3] border border-[#141210]/30 rounded-xs shadow-md pointer-events-none" />
        <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[#dad5c6] border border-[#141210]/40 rounded-xs shadow-xl pointer-events-none" />

        {/* ===================================================================== */}
        {/* 1. STATIC SINGLE PAGE (WHEN NOT FLIPPING)                             */}
        {/* ===================================================================== */}
        {!isFlipping && (
          <div className="newspaper-paper-texture newspaper-broadsheet-shadow relative w-full h-full border-2 border-[#141210] rounded-xs overflow-hidden flex flex-col justify-between z-10 animate-in fade-in duration-300">
            {renderNewspaperPage(currentSpread, {
              onOpenNewspaper: onTurnNext,
              onNavigateToSpread,
            })}

            {/* P.T.O. (Please Turn Over) Clean Archival Lift Trigger */}
            {currentSpread < totalSpreads && (
              <div
                onClick={onTurnNext}
                onMouseEnter={() => setIsCornerHovered(true)}
                onMouseLeave={() => setIsCornerHovered(false)}
                className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 z-30 flex items-center group cursor-pointer pointer-events-auto"
                title="Please Turn Over (P.T.O.)"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onTurnNext();
                  }
                }}
              >
                <div
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xs font-mono-tech text-[9.5px] sm:text-[10px] font-bold tracking-widest uppercase transition-all duration-300 border shadow-md select-none ${
                    isCornerHovered
                      ? 'bg-[#8C3833] text-white border-[#8C3833] -translate-y-0.5 shadow-lg'
                      : 'bg-[#141210] text-[#f5f0e1] border-[#141210] hover:bg-[#8C3833]'
                  }`}
                >
                  <span className="text-[#d9c49f] font-bold">P.T.O.</span>
                  <span className="text-[11px] transition-transform duration-200 group-hover:translate-x-0.5">
                    ➔
                  </span>
                </div>
              </div>
            )}

            {/* Corner Fold Curl (Perfect Alignment inside page border) */}
            {currentSpread < totalSpreads && (
              <div
                onClick={onTurnNext}
                onMouseEnter={() => setIsCornerHovered(true)}
                onMouseLeave={() => setIsCornerHovered(false)}
                className="absolute bottom-0 right-0 w-12 h-12 z-25 cursor-pointer overflow-hidden pointer-events-auto"
              >
                <div className="absolute bottom-0 right-0 w-7 h-7 bg-[#dedad0] border-t border-l border-[#141210]/20 shadow-inner" />
                <div
                  className={`absolute bottom-0 right-0 w-0 h-0 border-solid border-b-transparent border-r-transparent border-t-[#d4cfbf] border-l-[#d4cfbf] transition-all duration-300 shadow-[-3px_-3px_8px_rgba(0,0,0,0.22)] ${
                    isCornerHovered
                      ? 'border-t-[34px] border-l-[34px]'
                      : 'border-t-[22px] border-l-[22px]'
                  }`}
                />
              </div>
            )}
          </div>
        )}

        {/* ===================================================================== */}
        {/* 2. REAL-TIME PHYSICAL "LIFT & FADE OUT TO TOP" FLIP ANIMATION         */}
        {/* ===================================================================== */}
        {isFlipping && (
          <div
            className="relative w-full h-full overflow-visible"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* ----------------------------------------------------------------- */}
            {/* BASE PAGE UNDERNEATH (STATIONARY ON DESK, PERFECTLY ALIGNED)     */}
            {/* ----------------------------------------------------------------- */}
            <div className="newspaper-paper-texture newspaper-broadsheet-shadow absolute inset-0 w-full h-full border-2 border-[#141210] rounded-xs overflow-hidden flex flex-col justify-between z-10 bg-[#faf9f6]">
              {renderNewspaperPage(isForward ? targetSpread : currentSpread, {
                onNavigateToSpread,
              })}

              {/* P.T.O. Indicator on Target Base Page */}
              {(isForward ? targetSpread : currentSpread) < totalSpreads && (
                <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 z-30 flex items-center pointer-events-none">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xs font-mono-tech text-[9.5px] sm:text-[10px] font-bold tracking-widest uppercase bg-[#141210] text-[#f5f0e1] border border-[#141210] shadow-md">
                    <span className="text-[#d9c49f] font-bold">P.T.O.</span>
                    <span className="text-[11px]">➔</span>
                  </div>
                </div>
              )}

              {/* Dynamic cast shadow from ascending sheet */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity bg-gradient-to-t from-black/45 via-black/15 to-transparent"
                style={{ opacity: castShadowOpacity }}
              />
            </div>

            {/* ----------------------------------------------------------------- */}
            {/* THE LIFTING SHEET (LIFTS FROM BOTTOM-RIGHT & FADES OUT TO TOP)    */}
            {/* ----------------------------------------------------------------- */}
            <div
              className="newspaper-paper-texture absolute inset-0 w-full h-full border-2 border-[#141210] rounded-xs overflow-hidden flex flex-col justify-between z-40 pointer-events-none"
              style={{
                transformOrigin: '20% 10%',
                transformStyle: 'preserve-3d',
                transform: `translate3d(${liftX}px, ${liftY}px, ${liftElevation}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
                opacity: sheetOpacity,
                boxShadow: `0 ${35 * progress}px ${70 * progress}px rgba(0,0,0,${dynamicSheetShadow})`,
                willChange: 'transform, opacity',
              }}
            >
              {renderNewspaperPage(isForward ? currentSpread : targetSpread, {
                onNavigateToSpread,
              })}

              {/* P.T.O. on lifting sheet as it pulls up */}
              {(isForward ? currentSpread : targetSpread) < totalSpreads && (
                <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 z-30 flex items-center">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xs font-mono-tech text-[9.5px] sm:text-[10px] font-bold tracking-widest uppercase bg-[#8C3833] text-white border border-[#8C3833] shadow-lg">
                    <span className="text-[#d9c49f] font-bold">P.T.O.</span>
                    <span className="text-[11px]">➔</span>
                  </div>
                </div>
              )}

              {/* Realistic Curvature Sheen as sheet arches in 3D */}
              <div
                className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/20 via-transparent to-black/25"
                style={{ opacity: dynamicSheetShadow }}
              />
            </div>
          </div>
        )}
      </div>

      {/* ======================================================================= */}
      {/* DESK SIDE NAVIGATION CONTROLS (LATERAL WINGS)                           */}
      {/* ======================================================================= */}
      {currentSpread > 1 && (
        <button
          type="button"
          onClick={onTurnPrev}
          disabled={isFlipping}
          className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-24 items-center justify-center group bg-transparent hover:bg-black/[0.04] transition-all cursor-pointer z-30 disabled:opacity-30"
          title="Previous Page (Click or Arrow Left)"
          aria-label="Previous Page"
        >
          <div className="opacity-0 group-hover:opacity-90 transition-opacity bg-[#14100c]/85 text-[#f5f0e1] p-2.5 rounded-xs shadow-lg flex items-center justify-center">
            <ChevronLeft className="w-5 h-5 text-[#d9c49f]" />
          </div>
        </button>
      )}

      {currentSpread < totalSpreads && (
        <button
          type="button"
          onClick={onTurnNext}
          disabled={isFlipping}
          className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-24 items-center justify-center group bg-transparent hover:bg-black/[0.04] transition-all cursor-pointer z-30 disabled:opacity-30"
          title="Next Page • P.T.O. (Click or Arrow Right)"
          aria-label="Next Page"
        >
          <div className="opacity-0 group-hover:opacity-90 transition-opacity bg-[#14100c]/85 text-[#f5f0e1] p-2.5 rounded-xs shadow-lg flex items-center justify-center">
            <ChevronRight className="w-5 h-5 text-[#d9c49f]" />
          </div>
        </button>
      )}
    </div>
  );
};
