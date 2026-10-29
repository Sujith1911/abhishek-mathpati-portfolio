import React from 'react';
import { RESUME_DATA } from '../../../data/resumeData';
import { NewspaperStamp } from '../elements/NewspaperStamp';
import { HandwrittenNote } from '../../HandwrittenNote';
import {
  DistributedNodesDiagram,
  ParetoFrontierDiagram,
  ForensicWorkflowDiagram,
} from '../elements/NewspaperDiagrams';

export const Spread3ResearchProjects: React.FC = () => {
  const [paper1, paper2, paper3] = RESUME_DATA.publications;
  const secureshare = RESUME_DATA.projects.find((p) => p.id === 'secureshare')!;
  const qpat = RESUME_DATA.projects.find((p) => p.id === 'qpat')!;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
      {/* LEFT PAGE: PAGE 05 — SCHOLARLY PRESS & PUBLICATIONS */}
      <div className="p-4 sm:p-5 lg:p-6 xl:p-8 flex flex-col justify-between h-full overflow-y-auto border-b md:border-b-0 md:border-r border-[#141210]/20 relative">
        <div>
          {/* Header */}
          <div className="border-b-2 border-[#141210] pb-2 mb-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
                  PEER-REVIEWED PRESS // SECTION 05
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-[#141210]">
                  RESEARCH MONOGRAPHS
                </h3>
              </div>
              <NewspaperStamp text="IEEE ACCEPTED" variant="crimson" rotation={-2} />
            </div>
            <p className="font-newsreader text-xs italic text-[#4a423a] mt-0.5">
              "Three scholarly investigations spanning LLM adversarial attacks, decentralized storage, and forensic workflows."
            </p>
          </div>

          {/* Paper 1: LLM Adversarial Benchmark with Hover Effect */}
          <div className="p-3 bg-[#ece4cf]/60 border border-[#141210] hover:shadow-md hover:border-[#8C3833] transition-all space-y-1.5 shadow-xs rounded-xs cursor-default">
            <div className="flex justify-between items-start gap-2">
              <span className="font-mono-tech text-[9px] uppercase font-bold text-[#8C3833] tracking-wider px-1.5 py-0.2 border border-[#8C3833]/40 bg-[#8C3833]/10">
                IEEE ISDDC 2026 • ACCEPTED
              </span>
              <span className="font-mono-tech text-[9px] text-[#5a5047] font-bold">
                {paper1.date}
              </span>
            </div>

            <h4 className="font-serif-vintage text-sm font-bold text-[#141210] leading-tight">
              {paper1.title}
            </h4>

            <p className="font-serif-vintage text-[11px] text-[#141210]/90 leading-snug">
              {paper1.methodology}
            </p>

            <div className="text-[9px] font-mono-tech font-bold text-[#8C3833]">
              ★ METRIC: {paper1.metrics}
            </div>
          </div>

          {/* Paper 2: Decentralized Storage with Hover Focus */}
          <div className="mt-2.5 p-3 bg-[#ece4cf]/60 border border-[#141210] hover:shadow-md hover:border-[#4b4e39] transition-all space-y-1 shadow-xs rounded-xs cursor-default">
            <div className="flex justify-between items-start gap-2">
              <span className="font-mono-tech text-[9px] uppercase font-bold text-[#4b4e39] tracking-wider px-1.5 py-0.2 border border-[#4b4e39]/40 bg-[#4b4e39]/10">
                IEEE IC(SEC)² 2026 • PRESENTED
              </span>
              <span className="font-mono-tech text-[9px] text-[#5a5047] font-bold">
                {paper2.date}
              </span>
            </div>

            <h4 className="font-serif-vintage text-xs sm:text-sm font-bold text-[#141210] leading-tight">
              {paper2.title}
            </h4>

            <p className="font-serif-vintage text-[11px] text-[#141210]/90 leading-snug">
              {paper2.methodology}
            </p>
          </div>

          {/* Paper 3 & Technical SVG Diagrams */}
          <div className="mt-2.5 space-y-2">
            <div className="p-2 border border-[#141210]/30 bg-[#ece4cf]/40 font-mono-tech text-[9.5px] rounded-xs">
              <span className="font-bold text-[#141210] block uppercase">IJRDET FORENSIC JOURNAL (III):</span>
              <span className="font-serif-vintage text-[11px] text-[#2a2521] block">{paper3.title}</span>
            </div>
            <ParetoFrontierDiagram className="hover:shadow-md transition-shadow" />
            <ForensicWorkflowDiagram className="hover:shadow-md transition-shadow" />
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={-1.5} arrow="down" color="#8C3833">
              {paper1.handwrittenNote}
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a5047]">
            <span>THE CHRONICLE // SCHOLARLY PRESS</span>
            <span className="font-typewriter font-bold text-[#141210]">PAGE 05</span>
          </div>
        </div>
      </div>

      {/* RIGHT PAGE: PAGE 06 — FLAGSHIP ENGINEERING SPECIMENS */}
      <div className="p-4 sm:p-5 lg:p-6 xl:p-8 flex flex-col justify-between h-full overflow-y-auto relative">
        <div>
          {/* Header */}
          <div className="border-b-2 border-[#141210] pb-2 mb-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
                  SYSTEMS ENGINEERING // SECTION 06
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-[#141210]">
                  FLAGSHIP ARCHITECTURES
                </h3>
              </div>
              <NewspaperStamp text="SPECIMENS" variant="olive" rotation={2} />
            </div>
            <p className="font-newsreader text-xs italic text-[#4a423a] mt-0.5">
              "Production architectures demonstrating decentralized cryptography and NLP syllabus classification."
            </p>
          </div>

          {/* Specimen 001-P: SecureShare with Hover Lift */}
          <div className="p-3 bg-[#ece4cf]/60 border border-[#141210] hover:shadow-md hover:border-[#8C3833] transition-all space-y-1.5 shadow-xs rounded-xs cursor-default">
            <div className="flex justify-between items-baseline">
              <span className="font-mono-tech text-[9px] uppercase tracking-wider text-[#8C3833] font-bold">
                {secureshare.specimenNo} // DECENTRALIZED CLOUD
              </span>
              <span className="font-mono-tech text-[9.5px] text-[#5a5047]">
                {secureshare.dateRange}
              </span>
            </div>

            <h4 className="font-serif-vintage text-base font-bold text-[#141210]">
              {secureshare.title}
            </h4>
            <div className="font-mono-tech text-[10px] text-[#4b4e39] font-bold">
              {secureshare.subtitle}
            </div>

            <p className="font-serif-vintage text-[11.5px] text-[#141210]/90 leading-snug">
              <strong className="font-sans font-bold text-[#8C3833]">PROBLEM: </strong>{secureshare.problem}
            </p>

            <DistributedNodesDiagram className="hover:shadow-xs transition-shadow" />

            <div className="flex flex-wrap gap-1 font-mono-tech text-[8.5px] pt-1">
              {secureshare.technologies.map((t, i) => (
                <span key={i} className="px-1.5 py-0.5 border border-[#141210]/30 bg-[#f5f0e1] text-[#141210] font-semibold hover:bg-[#141210] hover:text-[#f5f0e1] transition-colors cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Specimen 002-P: QPAT System */}
          <div className="mt-2.5 p-3 bg-[#ece4cf]/60 border border-[#141210] hover:shadow-md hover:border-[#4b4e39] transition-all space-y-1.5 shadow-xs rounded-xs cursor-default">
            <div className="flex justify-between items-baseline">
              <span className="font-mono-tech text-[9px] uppercase tracking-wider text-[#4b4e39] font-bold">
                {qpat.specimenNo} // ACADEMIC NLP
              </span>
              <span className="font-mono-tech text-[9.5px] text-[#5a5047]">
                {qpat.dateRange}
              </span>
            </div>

            <h4 className="font-serif-vintage text-base font-bold text-[#141210]">
              {qpat.title}
            </h4>
            <div className="font-mono-tech text-[10px] text-[#8C3833] font-bold">
              {qpat.subtitle}
            </div>

            <p className="font-serif-vintage text-[11.5px] text-[#141210]/90 leading-snug">
              <strong className="font-sans font-bold text-[#4b4e39]">APPROACH: </strong>{qpat.approach}
            </p>

            <div className="flex flex-wrap gap-1 font-mono-tech text-[8.5px] pt-1">
              {qpat.technologies.map((t, i) => (
                <span key={i} className="px-1.5 py-0.5 border border-[#141210]/30 bg-[#f5f0e1] text-[#141210] font-semibold hover:bg-[#141210] hover:text-[#f5f0e1] transition-colors cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={1} arrow="left" color="#4b4e39">
              {secureshare.handwrittenNote}
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a5047]">
            <span>THE CHRONICLE // ENGINEERING SPECIMENS</span>
            <span className="font-typewriter font-bold text-[#141210]">PAGE 06</span>
          </div>
        </div>
      </div>
    </div>
  );
};
