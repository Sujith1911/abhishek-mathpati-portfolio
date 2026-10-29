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

    const DURATION = 760; // ms for authentic broadsheet paper weight and physical peel

    // Quintic / spring-like easing curve for tactile edge lifting
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

  // Physical 3D Edge Lift Calculation:
  // Instead of a 180° book turnover, the bottom-right edge lifts up in 3D (translateZ),
  // arching upward (rotateX), tilting (rotateZ), and peeling off the stack.
  const liftElevation = isForward
    ? Math.sin(progress * Math.PI * 0.72) * 260
    : Math.sin((1 - progress) * Math.PI * 0.72) * 260;

  const liftX = isForward ? -progress * 190 : -(1 - progress) * 190;
  const liftY = isForward ? -progress * 75 : -(1 - progress) * 75;
  const rotateX = isForward
    ? Math.sin(progress * Math.PI) * 24
    : Math.sin((1 - progress) * Math.PI) * 24;
  const rotateY = isForward ? progress * 16 : (1 - progress) * 16;
  const rotateZ = isForward ? -progress * 12 : -(1 - progress) * 12;

  const sheetOpacity = isForward
    ? progress > 0.72
      ? Math.max(0, 1 - (progress - 0.72) / 0.28)
      : 1
    : progress < 0.28
    ? Math.max(0, progress / 0.28)
    : 1;

  const dynamicShadowOpacity = Math.sin(progress * Math.PI) * 0.45;

  return (
    <div
      className="relative w-full h-full flex items-center justify-center select-none"
      style={{ perspective: '2200px' }}
    >
      {/* ========================================================================= */}
      {/* 1. STATIC SINGLE PAGE VIEW (WHEN NOT FLIPPING)                            */}
      {/* ========================================================================= */}
      {!isFlipping && (
        <div className="relative w-full h-full flex items-center justify-center animate-in fade-in duration-300">
          {/* Stack elevation border depth behind the single page */}
          <div className="absolute inset-0 max-h-[calc(100vh-1.25rem)] aspect-[622/877] max-w-full m-auto pointer-events-none">
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#e3dfd3] border border-[#141210]/30 rounded-xs shadow-md" />
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[#dad5c6] border border-[#141210]/40 rounded-xs shadow-xl" />
          </div>

          {/* Centered Single Page Broadsheet Frame */}
          <div className="newspaper-paper-texture newspaper-broadsheet-shadow relative h-full max-h-[calc(100vh-1.25rem)] aspect-[622/877] max-w-full border-2 border-[#141210] rounded-xs overflow-hidden flex flex-col justify-between z-10">
            {renderNewspaperPage(currentSpread, {
              onOpenNewspaper: onTurnNext,
              onNavigateToSpread,
            })}

            {/* Interactive Lifted Corner Flap (Bottom-Right Dog-Ear Curl) */}
            {currentSpread < totalSpreads && (
              <div
                onClick={onTurnNext}
                onMouseEnter={() => setIsCornerHovered(true)}
                onMouseLeave={() => setIsCornerHovered(false)}
                className="absolute bottom-0 right-0 w-16 h-16 cursor-pointer group z-40 pointer-events-auto"
                title="Lift corner to turn page"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onTurnNext();
                  }
                }}
              >
                {/* Exposed paper peek under corner */}
                <div className="absolute bottom-0 right-0 w-10 h-10 bg-[#e0dcd0] border-t border-l border-[#141210]/25 shadow-inner" />

                {/* 3D Folded/Curled Dog-Ear Corner */}
                <div
                  className={`absolute bottom-0 right-0 w-0 h-0 border-solid border-b-transparent border-r-transparent border-t-[#d8d3c3] border-l-[#d8d3c3] shadow-[-4px_-4px_10px_rgba(0,0,0,0.25)] transition-all duration-300 ${
                    isCornerHovered
                      ? 'border-t-[46px] border-l-[46px] -translate-x-1 -translate-y-1 shadow-[-6px_-6px_14px_rgba(0,0,0,0.35)]'
                      : 'border-t-[32px] border-l-[32px]'
                  }`}
                />

                {/* Subtle "LIFT" invitation text on hover */}
                <span
                  className={`absolute bottom-1 right-1 font-mono-tech text-[8px] font-bold text-[#8C3833] tracking-tighter transition-opacity duration-200 ${
                    isCornerHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  LIFT →
                </span>
              </div>
            )}
          </div>

          {/* Desk Wing: Left Navigation (Previous Page) */}
          {currentSpread > 1 && (
            <button
              type="button"
              onClick={onTurnPrev}
              className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-24 items-center justify-center group bg-transparent hover:bg-black/[0.04] transition-all cursor-pointer z-30"
              title="Previous Page (Click or Arrow Left)"
              aria-label="Previous Page"
            >
              <div className="opacity-0 group-hover:opacity-90 transition-opacity bg-[#14100c]/85 text-[#f5f0e1] p-2.5 rounded-xs shadow-lg flex items-center justify-center">
                <ChevronLeft className="w-5 h-5 text-[#d9c49f]" />
              </div>
            </button>
          )}

          {/* Desk Wing: Right Navigation (Next Page) */}
          {currentSpread < totalSpreads && (
            <button
              type="button"
              onClick={onTurnNext}
              className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-24 items-center justify-center group bg-transparent hover:bg-black/[0.04] transition-all cursor-pointer z-30"
              title="Next Page (Click or Arrow Right)"
              aria-label="Next Page"
            >
              <div className="opacity-0 group-hover:opacity-90 transition-opacity bg-[#14100c]/85 text-[#f5f0e1] p-2.5 rounded-xs shadow-lg flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-[#d9c49f]" />
              </div>
            </button>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. REAL-TIME PHYSICAL "LIFT UP FROM EDGE" ANIMATION (DURING FLIP)         */}
      {/* ========================================================================= */}
      {isFlipping && (
        <div
          className="relative w-full h-full flex items-center justify-center overflow-visible"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Depth Stack Below */}
          <div className="absolute inset-0 max-h-[calc(100vh-1.25rem)] aspect-[622/877] max-w-full m-auto pointer-events-none">
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#e3dfd3] border border-[#141210]/30 rounded-xs shadow-md" />
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[#dad5c6] border border-[#141210]/40 rounded-xs shadow-xl" />
          </div>

          {/* ------------------------------------------------------------------- */}
          {/* BASE PAGE UNDERNEATH (STATIONARY ON THE DESK STACK)                */}
          {/* ------------------------------------------------------------------- */}
          <div className="newspaper-paper-texture newspaper-broadsheet-shadow relative h-full max-h-[calc(100vh-1.25rem)] aspect-[622/877] max-w-full border-2 border-[#141210] rounded-xs overflow-hidden flex flex-col justify-between z-10 bg-[#faf9f6]">
            {renderNewspaperPage(isForward ? targetSpread : currentSpread, {
              onNavigateToSpread,
            })}

            {/* Dynamic cast shadow from the lifting sheet hovering above */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity bg-gradient-to-tl from-black/40 via-black/15 to-transparent"
              style={{
                opacity: isForward
                  ? (1 - progress) * 0.45
                  : progress * 0.45,
              }}
            />
          </div>

          {/* ------------------------------------------------------------------- */}
          {/* THE 3D LIFTING SHEET (LIFTS FROM BOTTOM-RIGHT EDGE OFF THE STACK)   */}
          {/* ------------------------------------------------------------------- */}
          <div
            className="newspaper-paper-texture absolute h-full max-h-[calc(100vh-1.25rem)] aspect-[622/877] max-w-full border-2 border-[#141210] rounded-xs overflow-hidden flex flex-col justify-between z-40 pointer-events-none"
            style={{
              transformOrigin: '0% 0%',
              transformStyle: 'preserve-3d',
              transform: `translate3d(${liftX}px, ${liftY}px, ${liftElevation}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
              opacity: sheetOpacity,
              boxShadow: `0 ${30 * progress}px ${60 * progress}px rgba(0,0,0,${dynamicShadowOpacity})`,
              willChange: 'transform, opacity',
            }}
          >
            {/* Content of the lifting sheet */}
            {renderNewspaperPage(isForward ? currentSpread : targetSpread, {
              onNavigateToSpread,
            })}

            {/* Realistic paper curvature light gradient as the edge curls upward */}
            <div
              className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/20 via-transparent to-black/20"
              style={{ opacity: dynamicShadowOpacity }}
            />

            {/* Bottom-right corner curl effect on the sheet as it lifts */}
            <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none bg-gradient-to-tl from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      )}
    </div>
  );
};
