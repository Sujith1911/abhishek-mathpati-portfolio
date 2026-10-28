import React from 'react';
import { NewspaperHeader } from '../NewspaperHeader';
import { NewspaperFooter } from '../NewspaperFooter';
import { RESUME_DATA } from '../../../data/resumeData';
import { ArchivalStamp } from '../../ArchivalStamp';
import { HandwrittenNote } from '../../HandwrittenNote';
import { ParetoFrontierDiagram, DistributedNodesDiagram } from '../../ArchivalDiagrams';

interface NewsPageProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

export const NewsPage3: React.FC<NewsPageProps> = ({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
}) => {
  const [paper1, paper2, paper3] = RESUME_DATA.publications;

  return (
    <article className="w-full flex flex-col justify-between">
      <NewspaperHeader
        pageNumber={currentPage}
        totalPages={totalPages}
        subTitle="THE SCIENTIFIC DISPATCH: IEEE & INTERNATIONAL JOURNALS"
        category="PEER-REVIEWED RESEARCH MONOGRAPHS"
        date="OCTOBER 28, 2026"
      />

      <div className="space-y-4">
        {/* TOP STORY: IEEE ISDDC Adversarial LLM Benchmark */}
        <div className="p-3 bg-[#e8deca]/50 border-2 border-[#1f1d19]">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1f1d19]/25 pb-1 mb-2">
            <span className="font-mono-tech text-[9.5px] uppercase font-bold text-[#8C3833] bg-[#8C3833]/10 px-2 py-0.5 border border-[#8C3833]/30">
              IEEE ISDDC 2026 • ACCEPTED FOR PUBLICATION
            </span>
            <span className="font-mono-tech text-[9.5px] text-[#686158]">
              PUDUCHERRY • {paper1.date}
            </span>
          </div>

          <h3 className="font-serif-vintage text-base sm:text-lg lg:text-xl font-bold text-[#1f1d19] leading-snug mb-2">
            {paper1.title}
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
            <div className="lg:col-span-7 space-y-1.5 font-serif-vintage text-xs text-[#26231e] leading-relaxed text-justify">
              <p>{paper1.methodology}</p>
              <ul className="space-y-1 font-mono-tech text-[9.5px] text-[#332f28] pt-1">
                {paper1.contributions.map((c, i) => (
                  <li key={i} className="flex items-start gap-1">
                    <span className="text-[#8C3833] font-bold">▸</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <div className="text-[9px] font-mono-tech font-bold text-[#8C3833] bg-[#8C3833]/10 p-1 border border-[#8C3833]/25 mt-1">
                EVALUATION METRIC: {paper1.metrics}
              </div>
            </div>

            <div className="lg:col-span-5">
              <ParetoFrontierDiagram />
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Two Conference & Journal Articles Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          {/* Paper 2: IEEE IC(SEC)² Coimbatore */}
          <div className="p-3 bg-[#e8deca]/40 border-2 border-[#1f1d19] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start border-b border-[#1f1d19]/20 pb-1 mb-1.5">
                <span className="font-mono-tech text-[9px] uppercase font-bold text-[#5b583f] bg-[#5b583f]/10 px-1.5 py-0.5 border border-[#5b583f]/30">
                  IEEE IC(SEC)² 2026 • PRESENTED
                </span>
                <ArchivalStamp text="IEEE XPLORE" variant="olive" rotation={1} />
              </div>

              <h4 className="font-serif-vintage text-sm font-bold text-[#1f1d19] leading-snug mb-1">
                {paper2.title}
              </h4>
              <div className="font-mono-tech text-[9.5px] text-[#5b583f] italic mb-1.5">
                Presented in Coimbatore • To appear in IEEE Xplore
              </div>

              <p className="font-serif-vintage text-xs text-[#26231e] leading-relaxed text-justify mb-2">
                {paper2.methodology}
              </p>

              <div className="my-1">
                <DistributedNodesDiagram />
              </div>
            </div>

            <div className="mt-2 text-right">
              <HandwrittenNote rotation={-1.5} arrow="left" color="#5b583f">
                {paper2.handwrittenNote}
              </HandwrittenNote>
            </div>
          </div>

          {/* Paper 3: IJRDET Forensic Automation */}
          <div className="p-3 bg-[#e8deca]/40 border-2 border-[#1f1d19] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start border-b border-[#1f1d19]/20 pb-1 mb-1.5">
                <span className="font-mono-tech text-[9px] uppercase font-bold text-[#8C3833] bg-[#8C3833]/10 px-1.5 py-0.5 border border-[#8C3833]/30">
                  IJRDET JOURNAL • PUBLISHED DEC 2025
                </span>
                <ArchivalStamp text="PEER REVIEWED" variant="dark" rotation={-1} />
              </div>

              <h4 className="font-serif-vintage text-sm font-bold text-[#1f1d19] leading-snug mb-1">
                {paper3.title}
              </h4>
              <div className="font-mono-tech text-[9.5px] text-[#5b583f] italic mb-1.5">
                International Journal of Recent Development in Engg. & Technology
              </div>

              <p className="font-serif-vintage text-xs text-[#26231e] leading-relaxed text-justify mb-2">
                {paper3.methodology}
              </p>

              <div className="p-2 border border-[#1f1d19]/20 bg-[#1f1d19]/3 font-mono-tech text-[9px] text-[#332f28] space-y-1">
                {paper3.contributions.map((c, i) => (
                  <div key={i} className="flex items-start gap-1">
                    <span className="text-[#8C3833] font-bold">✓</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-2 text-right">
              <HandwrittenNote rotation={1} arrow="up" color="#8C3833">
                {paper3.handwrittenNote}
              </HandwrittenNote>
            </div>
          </div>
        </div>
      </div>

      <NewspaperFooter
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
        bannerText="CONTINUED ON PAGE 4: ENGINEERING BULLETINS & SYSTEMS ➔"
      />
    </article>
  );
};
