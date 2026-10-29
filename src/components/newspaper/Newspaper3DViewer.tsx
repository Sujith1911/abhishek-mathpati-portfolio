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
  const [isHoveredRight, setIsHoveredRight] = useState(false);
  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
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

    // Check for prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 960ms for a deliberate, physical, tactile paper curl
    const DURATION = prefersReducedMotion ? 250 : 960;

    // Physically informed cubic easing: gentle anticipation, continuous sweep, soft deceleration settling
    const easePageCurl = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const rawProgress = Math.min(elapsed / DURATION, 1);
      const eased = easePageCurl(rawProgress);
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
  // GEOMETRIC PAGE CURL & MOVING FOLD CALCULATIONS
  // Coordinates are computed in normalized percentage space [0, 100] x [0, 100].
  // ---------------------------------------------------------------------------
  
  // Forward turn: fold line equation x + y = D sweeps from 200 (bottom-right) down to -25 (top-left)
  // Backward turn: fold line equation y - x = D sweeps from 100 (bottom-left) down to -125 (top-right)
  let clipPathCurrent = 'none';
  let foldMidX = 100;
  let foldMidY = 100;
  let foldAngle = -45;
  let foldLength = 0;
  let foldReflectX = 100;
  let foldReflectY = 100;
  let flapClipPath = 'none';

  if (isFlipping) {
    if (isForward) {
      // D ranges from 200 down to -25
      const D = 200 - 225 * progress;
      foldReflectX = Math.max(-20, D - 100);
      foldReflectY = Math.max(-20, D - 100);

      if (D >= 100) {
        const y_r = D - 100;
        const x_b = D - 100;
        clipPathCurrent = `polygon(0% 0%, 100% 0%, 100% ${y_r}%, ${x_b}% 100%, 0% 100%)`;
        foldMidX = (100 + x_b) / 2;
        foldMidY = (y_r + 100) / 2;
        foldLength = Math.hypot(100 - x_b, 100 - y_r);
        foldAngle = -45;

        // Reflected curled paper flap polygon
        flapClipPath = `polygon(${x_b}% 100%, ${foldReflectX}% ${foldReflectY}%, 100% ${y_r}%)`;
      } else if (D > 0) {
        const x_t = D;
        const y_l = D;
        clipPathCurrent = `polygon(0% 0%, ${x_t}% 0%, 0% ${y_l}%)`;
        foldMidX = x_t / 2;
        foldMidY = y_l / 2;
        foldLength = Math.hypot(x_t, y_l);
        foldAngle = -45;

        // Reflected curled flap across remaining width
        flapClipPath = `polygon(0% ${y_l}%, ${foldReflectX}% ${foldReflectY}%, ${x_t}% 0%)`;
      } else {
        clipPathCurrent = 'polygon(0% 0%, 0% 0%, 0% 0%)';
        flapClipPath = 'none';
        foldLength = 0;
      }
    } else {
      // Backward turn: D sweeps from 100 down to -125
      const D = 100 - 225 * progress;
      foldReflectX = Math.min(120, 100 - D);
      foldReflectY = Math.max(-20, D);

      if (D >= 0) {
        const y_l = D;
        const x_b = 100 - D;
        clipPathCurrent = `polygon(0% 0%, 100% 0%, 100% 100%, ${x_b}% 100%, 0% ${y_l}%)`;
        foldMidX = x_b / 2;
        foldMidY = (100 + y_l) / 2;
        foldLength = Math.hypot(x_b, 100 - y_l);
        foldAngle = 45;

        flapClipPath = `polygon(0% ${y_l}%, ${foldReflectX}% ${foldReflectY}%, ${x_b}% 100%)`;
      } else if (D > -100) {
        const K = -D;
        const x_t = K;
        const y_r = 100 - K;
        clipPathCurrent = `polygon(${x_t}% 0%, 100% 0%, 100% ${y_r}%)`;
        foldMidX = (x_t + 100) / 2;
        foldMidY = y_r / 2;
        foldLength = Math.hypot(100 - x_t, y_r);
        foldAngle = 45;

        flapClipPath = `polygon(${x_t}% 0%, ${foldReflectX}% ${foldReflectY}%, 100% ${y_r}%)`;
      } else {
        clipPathCurrent = 'polygon(0% 0%, 0% 0%, 0% 0%)';
        flapClipPath = 'none';
        foldLength = 0;
      }
    }
  }

  // 3D elevation of the curled crest
  const curlElevation = Math.sin(progress * Math.PI) * 75; // px towards camera
  const shadowIntensity = Math.sin(progress * Math.PI) * 0.42;

  return (
    <div
      className="relative w-full h-full flex items-center justify-center select-none"
      style={{ perspective: '2400px' }}
    >
      {/* Centered Broadsheet Stage Frame */}
      <div className="relative h-full max-h-[calc(100vh-1.25rem)] aspect-[622/877] max-w-full flex items-center justify-center">
        {/* Subtle Stack Depth Layers Underneath */}
        <div className="absolute inset-0 translate-x-1 translate-y-1 bg-[#e3dfd3] border border-[#141210]/30 rounded-xs shadow-md pointer-events-none" />
        <div className="absolute inset-0 translate-x-2 translate-y-2 bg-[#dad5c6] border border-[#141210]/40 rounded-xs shadow-xl pointer-events-none" />

        {/* ===================================================================== */}
        {/* 1. STATIC STATE: SINGLE ACTIVE ARTICLE PAGE (WHEN NOT FLIPPING)       */}
        {/* ===================================================================== */}
        {!isFlipping && (
          <div className="newspaper-paper-texture newspaper-broadsheet-shadow relative w-full h-full border-2 border-[#141210] rounded-xs overflow-hidden flex flex-col justify-between z-10 animate-in fade-in duration-200">
            {/* The Active Page Content (100% uncompromised original layout) */}
            {renderNewspaperPage(currentSpread, {
              onOpenNewspaper: onTurnNext,
              onNavigateToSpread,
            })}

            {/* ----------------------------------------------------------------- */}
            {/* RESTING CORNER CURL: BOTTOM-RIGHT (NEXT PAGE INVITATION)          */}
            {/* ----------------------------------------------------------------- */}
            {currentSpread < totalSpreads && (
              <div
                onClick={onTurnNext}
                onMouseEnter={() => setIsHoveredRight(true)}
                onMouseLeave={() => setIsHoveredRight(false)}
                className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 cursor-pointer z-40 group pointer-events-auto overflow-hidden"
                title="Turn to next page"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onTurnNext();
                  }
                }}
                aria-label="Turn to next page"
              >
                {/* Exposed underlying paper peek under the corner */}
                <div
                  className={`absolute bottom-0 right-0 bg-[#e0dcd0] border-t border-l border-[#141210]/20 shadow-inner transition-all duration-300 ${
                    isHoveredRight ? 'w-12 h-12' : 'w-7 h-7'
                  }`}
                />

                {/* The 3D Curled Corner Flap */}
                <div
                  className={`absolute bottom-0 right-0 w-0 h-0 border-solid border-b-transparent border-r-transparent border-t-[#dedad0] border-l-[#dedad0] transition-all duration-300 shadow-[-4px_-4px_10px_rgba(0,0,0,0.22)] ${
                    isHoveredRight
                      ? 'border-t-[48px] border-l-[48px] -translate-x-1 -translate-y-1 shadow-[-6px_-6px_16px_rgba(0,0,0,0.35)]'
                      : 'border-t-[30px] border-l-[30px]'
                  }`}
                >
                  {/* Subtle specular sheen along diagonal crease */}
                  <div className="absolute -top-[48px] -left-[48px] w-16 h-16 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Whispered Archival "p.t.o." Margin Callout on Hover */}
                <span
                  className={`absolute bottom-1 right-1 font-serif italic text-[9px] font-bold text-[#8C3833] tracking-wider transition-opacity duration-200 pointer-events-none ${
                    isHoveredRight ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  p.t.o. ➔
                </span>
              </div>
            )}

            {/* ----------------------------------------------------------------- */}
            {/* RESTING CORNER CURL: BOTTOM-LEFT (PREVIOUS PAGE INVITATION)       */}
            {/* ----------------------------------------------------------------- */}
            {currentSpread > 1 && (
              <div
                onClick={onTurnPrev}
                onMouseEnter={() => setIsHoveredLeft(true)}
                onMouseLeave={() => setIsHoveredLeft(false)}
                className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 cursor-pointer z-40 group pointer-events-auto overflow-hidden"
                title="Return to previous page"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onTurnPrev();
                  }
                }}
                aria-label="Return to previous page"
              >
                {/* Exposed underlying paper peek */}
                <div
                  className={`absolute bottom-0 left-0 bg-[#e0dcd0] border-t border-r border-[#141210]/20 shadow-inner transition-all duration-300 ${
                    isHoveredLeft ? 'w-12 h-12' : 'w-7 h-7'
                  }`}
                />

                {/* Curled Corner Flap */}
                <div
                  className={`absolute bottom-0 left-0 w-0 h-0 border-solid border-b-transparent border-l-transparent border-t-[#dedad0] border-r-[#dedad0] transition-all duration-300 shadow-[4px_-4px_10px_rgba(0,0,0,0.22)] ${
                    isHoveredLeft
                      ? 'border-t-[48px] border-r-[48px] translate-x-1 -translate-y-1 shadow-[6px_-6px_16px_rgba(0,0,0,0.35)]'
                      : 'border-t-[30px] border-r-[30px]'
                  }`}
                >
                  <div className="absolute -top-[48px] -right-[48px] w-16 h-16 bg-gradient-to-bl from-white/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <span
                  className={`absolute bottom-1 left-1 font-serif italic text-[9px] font-bold text-[#8C3833] tracking-wider transition-opacity duration-200 pointer-events-none ${
                    isHoveredLeft ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  ← back
                </span>
              </div>
            )}
          </div>
        )}

        {/* ===================================================================== */}
        {/* 2. DYNAMIC PAGE-CURL INTERACTION (PHYSICAL 3D MOVING FOLD & PEEL)     */}
        {/* ===================================================================== */}
        {isFlipping && (
          <div
            className="relative w-full h-full border-2 border-[#141210] rounded-xs overflow-hidden z-20"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* ----------------------------------------------------------------- */}
            {/* LAYER 1: THE UNDERLYING TARGET PAGE (PROGRESSIVELY UNVEILED)      */}
            {/* ----------------------------------------------------------------- */}
            <div className="newspaper-paper-texture absolute inset-0 w-full h-full overflow-hidden flex flex-col justify-between z-10 bg-[#faf9f6]">
              {renderNewspaperPage(isForward ? targetSpread : targetSpread, {
                onNavigateToSpread,
              })}
            </div>

            {/* ----------------------------------------------------------------- */}
            {/* LAYER 2: MOVING DROP SHADOW CAST ALONG THE FOLD ONTO NEXT PAGE    */}
            {/* ----------------------------------------------------------------- */}
            {foldLength > 0 && (
              <div
                className="absolute z-15 pointer-events-none"
                style={{
                  left: `${foldMidX}%`,
                  top: `${foldMidY}%`,
                  width: `${foldLength * 1.6}%`,
                  height: '75px',
                  transform: `translate(-50%, -50%) rotate(${foldAngle}deg)`,
                  background:
                    'linear-gradient(to bottom, rgba(15,12,10,0.48) 0%, rgba(15,12,10,0.18) 45%, rgba(15,12,10,0.04) 75%, transparent 100%)',
                  opacity: shadowIntensity,
                  filter: 'blur(4px)',
                }}
              />
            )}

            {/* ----------------------------------------------------------------- */}
            {/* LAYER 3: CURRENT PAGE (CLIPPED TO THE STATIONARY, UNPEELED AREA)  */}
            {/* ----------------------------------------------------------------- */}
            <div
              className="newspaper-paper-texture absolute inset-0 w-full h-full overflow-hidden flex flex-col justify-between z-20 bg-[#faf9f6]"
              style={{
                clipPath: clipPathCurrent,
                WebkitClipPath: clipPathCurrent,
              }}
            >
              {renderNewspaperPage(currentSpread, {
                onNavigateToSpread,
              })}
            </div>

            {/* ----------------------------------------------------------------- */}
            {/* LAYER 4: REVERSE SIDE OF THE CURLING SHEET (PARCHMENT BACK FACE)  */}
            {/* ----------------------------------------------------------------- */}
            {flapClipPath !== 'none' && (
              <div
                className="absolute inset-0 w-full h-full pointer-events-none z-30"
                style={{
                  clipPath: flapClipPath,
                  WebkitClipPath: flapClipPath,
                  backgroundColor: '#eae5d8',
                  backgroundImage:
                    'radial-gradient(ellipse at 80% 80%, rgba(255,255,255,0.45) 0%, transparent 60%), repeating-linear-gradient(45deg, rgba(20,18,16,0.02) 0px, rgba(20,18,16,0.02) 1px, transparent 1px, transparent 6px)',
                  boxShadow: 'inset 0 0 40px rgba(20,18,16,0.18)',
                  transform: `translateZ(${curlElevation}px)`,
                }}
              >
                {/* Bleed-through hint of newspaper text on reverse side */}
                <div className="w-full h-full opacity-15 bg-[repeating-linear-gradient(to_bottom,#141210,#141210_2px,transparent_2px,transparent_9px)]" />
              </div>
            )}

            {/* ----------------------------------------------------------------- */}
            {/* LAYER 5: SPECULAR CYLINDRICAL HIGHLIGHT ALONG THE MOVING CREST   */}
            {/* ----------------------------------------------------------------- */}
            {foldLength > 0 && (
              <div
                className="absolute z-35 pointer-events-none"
                style={{
                  left: `${foldMidX}%`,
                  top: `${foldMidY}%`,
                  width: `${foldLength * 1.5}%`,
                  height: '24px',
                  transform: `translate(-50%, -50%) rotate(${foldAngle}deg)`,
                  background:
                    'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.65) 45%, rgba(255,255,255,0.15) 75%, transparent 100%)',
                  opacity: Math.sin(progress * Math.PI) * 0.9,
                }}
              />
            )}
          </div>
        )}
      </div>

      {/* ======================================================================= */}
      {/* DESK SIDE NAVIGATION CONTROLS (LATERAL DESK WINGS)                     */}
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
          title="Next Page (Click or Arrow Right)"
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
