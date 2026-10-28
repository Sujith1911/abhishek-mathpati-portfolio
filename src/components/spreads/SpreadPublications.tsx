import React from 'react';
import { RESUME_DATA } from '../../data/resumeData';
import { ArchivalStamp } from '../ArchivalStamp';
import { HandwrittenNote } from '../HandwrittenNote';
import { ParetoFrontierDiagram, ForensicWorkflowDiagram } from '../ArchivalDiagrams';

export const SpreadPublications: React.FC = () => {
  const [paper1, paper2, paper3] = RESUME_DATA.publications;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
      {/* LEFT PAGE: IEEE RESEARCH MONOGRAPHS (PAPERS 1 & 2) */}
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#211F1B]/15 relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start border-b border-[#211F1B]/20 pb-2">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#686158] block">
                SCHOLARLY PUBLICATIONS // IEEE CONFERENCES
              </span>
              <h2 className="font-typewriter text-lg sm:text-xl font-bold uppercase tracking-wider text-[#211F1B]">
                RESEARCH PAPERS (I & II)
              </h2>
            </div>
            <ArchivalStamp text="IEEE PEER REVIEWED" variant="red" rotation={-2} />
          </div>

          {/* Paper 1: LLM Adversarial Benchmark */}
          <div className="mt-4 p-3 bg-[#e8deca]/50 border border-[#211F1B]/25 rounded-xs space-y-2">
            <div className="flex justify-between items-start gap-2">
              <span className="font-mono-tech text-[9px] uppercase font-bold text-[#8C3833] tracking-wider px-1.5 py-0.5 border border-[#8C3833]/40 bg-[#8C3833]/10">
                IEEE ISDDC 2026 • ACCEPTED
              </span>
              <span className="font-mono-tech text-[9px] text-[#686158]">
                {paper1.date}
              </span>
            </div>

            <h3 className="font-serif-vintage text-sm sm:text-base font-bold text-[#211F1B] leading-tight">
              {paper1.title}
            </h3>

            <div className="font-mono-tech text-[10px] text-[#5b583f] italic">
              Venue: {paper1.venue}
            </div>

            <p className="font-serif-vintage text-xs text-[#211F1B]/90 leading-relaxed">
              {paper1.methodology}
            </p>

            <div className="pt-1 border-t border-[#211F1B]/15">
              <span className="font-mono-tech text-[9px] font-bold text-[#686158] uppercase block mb-0.5">
                EXPERIMENTAL CONTRIBUTIONS:
              </span>
              <ul className="space-y-1 font-mono-tech text-[9px] text-[#332f28]">
                {paper1.contributions.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-1">
                    <span className="text-[#8C3833] font-bold">▸</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-[9px] font-mono-tech font-bold text-[#8C3833] bg-[#8C3833]/5 p-1 border border-[#8C3833]/20">
              METRIC: {paper1.metrics}
            </div>
          </div>

          {/* Paper 2: Decentralized File Sharing */}
          <div className="mt-3 p-3 bg-[#e8deca]/50 border border-[#211F1B]/25 rounded-xs space-y-1.5">
            <div className="flex justify-between items-start gap-2">
              <span className="font-mono-tech text-[9px] uppercase font-bold text-[#5b583f] tracking-wider px-1.5 py-0.5 border border-[#5b583f]/40 bg-[#5b583f]/10">
                IEEE IC(SEC)² 2026 • ACCEPTED & PRESENTED
              </span>
              <span className="font-mono-tech text-[9px] text-[#686158]">
                {paper2.date}
              </span>
            </div>

            <h3 className="font-serif-vintage text-xs sm:text-sm font-bold text-[#211F1B] leading-tight">
              {paper2.title}
            </h3>

            <div className="font-mono-tech text-[9px] text-[#5b583f] italic">
              Presented in Coimbatore, India • To appear in IEEE Xplore
            </div>

            <p className="font-serif-vintage text-[11px] text-[#211F1B]/90 leading-relaxed">
              {paper2.methodology}
            </p>

            <div className="text-[8.5px] font-mono-tech text-[#332f28] flex items-center gap-1">
              <span className="font-bold text-[#5b583f]">TECH:</span>
              <span>Blockchain Anchoring • IPFS Cluster • Shamir's Secret Sharing • Isolation Forest</span>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={-1.5} arrow="down" color="#8C3833">
              {paper1.handwrittenNote}
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-[#211F1B]/15 flex justify-between items-center text-[10px] font-mono-tech text-[#686158]">
            <span>THE ARCHIVE // SCHOLARLY PAPERS</span>
            <span className="font-typewriter font-bold text-[#211F1B]">PAGE 07</span>
          </div>
        </div>
      </div>

      {/* RIGHT PAGE: JOURNAL PUBLICATION & METHODOLOGY SKETCH (PAPER 3) */}
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start border-b border-[#211F1B]/20 pb-2">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#686158] block">
                SCHOLARLY PUBLICATIONS // DIGITAL FORENSICS
              </span>
              <h2 className="font-typewriter text-lg sm:text-xl font-bold uppercase tracking-wider text-[#211F1B]">
                FORENSIC JOURNAL (III)
              </h2>
            </div>
            <ArchivalStamp text="IJRDET PUBLISHED" variant="olive" rotation={2} />
          </div>

          {/* Paper 3: Instagram Forensics */}
          <div className="mt-4 p-3 bg-[#e8deca]/50 border border-[#211F1B]/25 rounded-xs space-y-2">
            <div className="flex justify-between items-start gap-2">
              <span className="font-mono-tech text-[9px] uppercase font-bold text-[#5b583f] tracking-wider px-1.5 py-0.5 border border-[#5b583f]/40 bg-[#5b583f]/10">
                INTERNATIONAL JOURNAL (IJRDET)
              </span>
              <span className="font-mono-tech text-[9px] text-[#686158]">
                {paper3.date}
              </span>
            </div>

            <h3 className="font-serif-vintage text-sm sm:text-base font-bold text-[#211F1B] leading-tight">
              {paper3.title}
            </h3>

            <div className="font-mono-tech text-[10px] text-[#5b583f] italic">
              Published in International Journal of Recent Development in Engineering and Technology
            </div>

            <p className="font-serif-vintage text-xs text-[#211F1B]/90 leading-relaxed">
              {paper3.methodology}
            </p>

            <div className="pt-1 border-t border-[#211F1B]/15">
              <span className="font-mono-tech text-[9px] font-bold text-[#686158] uppercase block mb-0.5">
                KEY FORENSIC ADVANCEMENTS:
              </span>
              <ul className="space-y-1 font-mono-tech text-[9px] text-[#332f28]">
                {paper3.contributions.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-1">
                    <span className="text-[#5b583f] font-bold">▸</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Research Technical Diagrams */}
          <div className="mt-4 space-y-3">
            <ParetoFrontierDiagram />
            <ForensicWorkflowDiagram />
          </div>
        </div>

        {/* Footer Notes */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={1} arrow="up" color="#5b583f">
              {paper3.handwrittenNote}
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-[#211F1B]/15 flex justify-between items-center text-[10px] font-mono-tech text-[#686158]">
            <span>THE ARCHIVE // FORENSIC FRAMEWORKS</span>
            <span className="font-typewriter font-bold text-[#211F1B]">PAGE 08</span>
          </div>
        </div>
      </div>
    </div>
  );
};
