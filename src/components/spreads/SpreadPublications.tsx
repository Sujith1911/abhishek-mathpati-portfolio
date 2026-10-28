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
      <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-black/20 relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start border-b border-black/20 pb-3">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-neutral-600 block">
                SCHOLARLY PUBLICATIONS // IEEE CONFERENCES
              </span>
              <h2 className="font-typewriter text-lg sm:text-xl font-bold uppercase tracking-wider text-black">
                RESEARCH PAPERS (I & II)
              </h2>
            </div>
            <ArchivalStamp text="IEEE PEER REVIEWED" variant="dark" rotation={-2} />
          </div>

          {/* Paper 1: LLM Adversarial Benchmark */}
          <div className="mt-4 p-4 bg-white border-2 border-black rounded-xs space-y-2.5 shadow-xs">
            <div className="flex justify-between items-start gap-2">
              <span className="font-mono-tech text-[9px] uppercase font-bold text-white bg-black tracking-wider px-2 py-0.5 border border-black">
                IEEE ISDDC 2026 • ACCEPTED
              </span>
              <span className="font-mono-tech text-[9px] text-neutral-600 font-bold">
                {paper1.date}
              </span>
            </div>

            <h3 className="font-serif-vintage text-sm sm:text-base font-bold text-black leading-tight">
              {paper1.title}
            </h3>

            <div className="font-mono-tech text-[10px] text-neutral-700 italic">
              Venue: {paper1.venue}
            </div>

            <p className="font-serif-vintage text-xs text-neutral-900 leading-relaxed">
              {paper1.methodology}
            </p>

            <div className="pt-1.5 border-t border-black/20">
              <span className="font-mono-tech text-[9px] font-bold text-black uppercase block mb-1">
                EXPERIMENTAL CONTRIBUTIONS:
              </span>
              <ul className="space-y-1 font-mono-tech text-[9.5px] text-neutral-800">
                {paper1.contributions.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-black font-bold">▸</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-[9.5px] font-mono-tech font-bold text-black bg-black/[0.04] p-1.5 border border-black/30">
              METRIC: {paper1.metrics}
            </div>
          </div>

          {/* Paper 2: Decentralized File Sharing */}
          <div className="mt-3.5 p-4 bg-white border-2 border-black rounded-xs space-y-2 shadow-xs">
            <div className="flex justify-between items-start gap-2">
              <span className="font-mono-tech text-[9px] uppercase font-bold text-white bg-neutral-900 tracking-wider px-2 py-0.5 border border-black">
                IEEE IC(SEC)² 2026 • ACCEPTED & PRESENTED
              </span>
              <span className="font-mono-tech text-[9px] text-neutral-600 font-bold">
                {paper2.date}
              </span>
            </div>

            <h3 className="font-serif-vintage text-xs sm:text-sm font-bold text-black leading-tight">
              {paper2.title}
            </h3>

            <div className="font-mono-tech text-[9.5px] text-neutral-700 italic">
              Presented in Coimbatore, India • To appear in IEEE Xplore
            </div>

            <p className="font-serif-vintage text-[11.5px] text-neutral-900 leading-relaxed">
              {paper2.methodology}
            </p>

            <div className="text-[9px] font-mono-tech text-neutral-800 flex items-center gap-1.5">
              <span className="font-bold text-black">TECH:</span>
              <span>Blockchain Anchoring • IPFS Cluster • Shamir's Secret Sharing • Isolation Forest</span>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={-1.5} arrow="down" color="#000000">
              {paper1.handwrittenNote}
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-black/20 flex justify-between items-center text-[10px] font-mono-tech text-neutral-600">
            <span>THE ARCHIVE // SCHOLARLY PAPERS</span>
            <span className="font-typewriter font-bold text-black">PAGE 07</span>
          </div>
        </div>
      </div>

      {/* RIGHT PAGE: JOURNAL PUBLICATION & METHODOLOGY SKETCH (PAPER 3) */}
      <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start border-b border-black/20 pb-3">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-neutral-600 block">
                SCHOLARLY PUBLICATIONS // DIGITAL FORENSICS
              </span>
              <h2 className="font-typewriter text-lg sm:text-xl font-bold uppercase tracking-wider text-black">
                FORENSIC JOURNAL (III)
              </h2>
            </div>
            <ArchivalStamp text="IJRDET PUBLISHED" variant="olive" rotation={2} />
          </div>

          {/* Paper 3: Instagram Forensics */}
          <div className="mt-4 p-4 bg-white border-2 border-black rounded-xs space-y-2 shadow-xs">
            <div className="flex justify-between items-start gap-2">
              <span className="font-mono-tech text-[9px] uppercase font-bold text-white bg-black tracking-wider px-2 py-0.5 border border-black">
                INTERNATIONAL JOURNAL (IJRDET)
              </span>
              <span className="font-mono-tech text-[9px] text-neutral-600 font-bold">
                {paper3.date}
              </span>
            </div>

            <h3 className="font-serif-vintage text-sm sm:text-base font-bold text-black leading-tight">
              {paper3.title}
            </h3>

            <div className="font-mono-tech text-[10px] text-neutral-700 italic">
              Published in International Journal of Recent Development in Engineering and Technology
            </div>

            <p className="font-serif-vintage text-xs text-neutral-900 leading-relaxed">
              {paper3.methodology}
            </p>

            <div className="pt-1.5 border-t border-black/20">
              <span className="font-mono-tech text-[9px] font-bold text-black uppercase block mb-1">
                KEY FORENSIC ADVANCEMENTS:
              </span>
              <ul className="space-y-1 font-mono-tech text-[9.5px] text-neutral-800">
                {paper3.contributions.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-black font-bold">▸</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Research Technical Diagrams in Black & White */}
          <div className="mt-4 space-y-3">
            <ParetoFrontierDiagram />
            <ForensicWorkflowDiagram />
          </div>
        </div>

        {/* Footer Notes */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={1} arrow="up" color="#000000">
              {paper3.handwrittenNote}
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-black/20 flex justify-between items-center text-[10px] font-mono-tech text-neutral-600">
            <span>THE ARCHIVE // FORENSIC FRAMEWORKS</span>
            <span className="font-typewriter font-bold text-black">PAGE 08</span>
          </div>
        </div>
      </div>
    </div>
  );
};
