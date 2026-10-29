import { useEffect, useState } from 'react';

export function AntiDevTools() {
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    // Advanced DevTools detection (Dimension Check)
    // Browsers like Edge have patched the console getter tricks,
    // so we check if the window's internal area suddenly shrinks compared to the outer browser window.
    // This instantly catches DevTools when it is docked to the side or bottom.
    const detectDevTools = setInterval(() => {
      // Do not run on mobile devices as dimensions change naturally (keyboard, scroll)
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) return;

      const threshold = 160;
      const widthDiff = window.outerWidth - window.innerWidth > threshold;
      const heightDiff = window.outerHeight - window.innerHeight > threshold;

      if (widthDiff || heightDiff) {
        triggerLock();
      }
    }, 500);

    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault();
        triggerLock();
      }
      // Ctrl+Shift+I / Cmd+Option+I (DevTools)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
        e.preventDefault();
        triggerLock();
      }
      // Ctrl+Shift+J / Cmd+Option+J (Console)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'J' || e.key === 'j')) {
        e.preventDefault();
        triggerLock();
      }
      // Ctrl+U / Cmd+U (View Source)
      if ((e.ctrlKey || e.metaKey) && (e.key === 'U' || e.key === 'u')) {
        e.preventDefault();
        triggerLock();
      }
      // Ctrl+Shift+C / Cmd+Option+C (Inspect Element)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'C' || e.key === 'c')) {
        e.preventDefault();
        triggerLock();
      }
    };

    const triggerLock = () => {
      setIsLocked(true);
      // Display the security breach warning then neutralize
      setTimeout(() => {
        window.location.replace('about:blank');
      }, 1400);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(detectDevTools);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isLocked) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center text-red-500 font-mono p-4 text-center select-none">
      <div className="border-2 border-red-600 bg-red-950/20 p-8 sm:p-12 max-w-xl shadow-[0_0_80px_rgba(255,0,0,0.5)]">
        <h1 className="text-4xl sm:text-6xl font-black mb-4 animate-pulse tracking-widest text-red-500">
          ACCESS DENIED
        </h1>
        <div className="w-full h-0.5 bg-red-500/60 my-4" />
        <p className="text-lg sm:text-xl font-bold uppercase tracking-wider text-red-400">
          Security Protocol Activated.
        </p>
        <p className="text-sm sm:text-base mt-2 text-red-500/90 font-mono">
          Unauthorized diagnostic access detected and neutralized.
        </p>
      </div>
    </div>
  );
}

