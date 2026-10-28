import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { soundManager } from '../../utils/sound';

interface NewspaperFooterProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
  bannerText?: string;
}

export const NewspaperFooter: React.FC<NewspaperFooterProps> = ({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
  bannerText = 'READ MORE AT GITHUB.COM/ABHISHEK-MATHPATI',
}) => {
  const handleNext = () => {
    soundManager.playPageTurnSound();
    onNextPage();
  };

  const handlePrev = () => {
    soundManager.playPageTurnSound();
    onPrevPage();
  };

  return (
    <footer className="w-full mt-6 select-none">
      {/* Bottom Double-Border Banner Matching Reference Image */}
      <div className="newspaper-double-rule-thick">
        <div className="flex items-center justify-between px-2 sm:px-4 py-1.5 bg-[#1f1d19]/4">
          <span className="text-xl sm:text-2xl font-black text-[#1f1d19]">✳</span>
          
          <a
            href="https://github.com/abhishek-mathpati"
            target="_blank"
            rel="noopener noreferrer"
            className="font-typewriter text-xs sm:text-base lg:text-lg font-bold tracking-[0.14em] text-[#1f1d19] hover:text-[#8C3833] uppercase transition-colors text-center px-2"
          >
            {bannerText}
          </a>

          <span className="text-xl sm:text-2xl font-black text-[#1f1d19]">✳</span>
        </div>
      </div>

      {/* Interactive Page Turnover Bar */}
      <div className="flex flex-wrap items-center justify-between pt-2 text-[10px] sm:text-xs font-mono-tech text-[#686158] border-t border-[#1f1d19]/15 mt-2">
        <div className="flex items-center gap-2">
          {currentPage > 1 ? (
            <button
              type="button"
              onClick={handlePrev}
              className="flex items-center gap-1 font-bold text-[#1f1d19] hover:text-[#8C3833] uppercase transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Turn Back (Page {currentPage - 1})</span>
            </button>
          ) : (
            <span>FRONT PAGE EDITION</span>
          )}
        </div>

        <div className="font-handwriting text-base text-[#8C3833]">
          {currentPage < totalPages
            ? `Turn over page for Section ${currentPage + 1} →`
            : 'End of Gazette • Archives Complete'}
        </div>

        <div className="flex items-center gap-2">
          {currentPage < totalPages && (
            <button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-1 font-bold text-[#8C3833] hover:text-[#1f1d19] uppercase transition-colors cursor-pointer bg-[#8C3833]/10 px-2 py-0.5 border border-[#8C3833]/30"
            >
              <span>Turn Over (Page {currentPage + 1})</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};
