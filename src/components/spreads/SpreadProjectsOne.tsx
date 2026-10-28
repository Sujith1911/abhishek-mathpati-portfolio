import React from 'react';
import { RESUME_DATA } from '../../data/resumeData';
import { ArchivalStamp } from '../ArchivalStamp';
import { HandwrittenNote } from '../HandwrittenNote';
import { DistributedNodesDiagram } from '../ArchivalDiagrams';

export const SpreadProjectsOne: React.FC = () => {
  const project1 = RESUME_DATA.projects.find((p) => p.id === 'secureshare')!;
  const project2 = RESUME_DATA.projects.find((p) => p.id === 'qpat')!;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
      {/* LEFT PAGE: SPECIMEN 001-P — SECURESHARE */}
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#211F1B]/15 relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start border-b border-[#211F1B]/20 pb-2">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
                {project1.specimenNo} // FLAGSHIP ARCHITECTURE
              </span>
              <h2 className="font-typewriter text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#211F1B]">
                {project1.title}
              </h2>
            </div>
            <ArchivalStamp text="DECENTRALIZED" variant="red" rotation={-3} date={project1.dateRange} />
          </div>

          <div className="font-mono-tech text-[10px] text-[#5b583f] font-semibold mt-1">
            {project1.subtitle}
          </div>

          {/* Objective & Problem Dossier */}
          <div className="mt-3 space-y-2 text-xs font-serif-vintage leading-relaxed">
            <div className="p-2 border border-[#211F1B]/20 bg-[#211F1B]/3">
              <span className="font-mono-tech text-[9px] font-bold uppercase text-[#8C3833] block">
                PROBLEM STATEMENT:
              </span>
              <p className="text-[#332f28] mt-0.5">{project1.problem}</p>
            </div>

            <div className="p-2 border border-[#211F1B]/20 bg-[#211F1B]/3">
              <span className="font-mono-tech text-[9px] font-bold uppercase text-[#5b583f] block">
                SYSTEM ARCHITECTURE:
              </span>
              <p className="text-[#332f28] mt-0.5">{project1.approach}</p>
            </div>
          </div>

          {/* Key Implementations */}
          <div className="mt-3">
            <span className="font-mono-tech text-[9px] font-bold uppercase text-[#686158] block mb-1">
              ENGINEERED PROTOCOLS & IMPLEMENTATION:
            </span>
            <ul className="space-y-1.5 font-serif-vintage text-xs text-[#211F1B]">
              {project1.keyImplementations.map((impl, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="font-typewriter text-[#8C3833] font-bold text-xs">▸</span>
                  <span className="leading-snug">{impl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Diagram */}
          <div className="mt-3">
            <DistributedNodesDiagram />
          </div>

          {/* Stack Pills */}
          <div className="mt-3">
            <div className="flex flex-wrap gap-1 font-mono-tech text-[9px]">
              {project1.technologies.map((t, i) => (
                <span key={i} className="px-1.5 py-0.5 border border-[#211F1B]/30 bg-[#f1e8d5] text-[#211F1B]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={-2} arrow="up" color="#8C3833">
              {project1.handwrittenNote}
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-[#211F1B]/15 flex justify-between items-center text-[10px] font-mono-tech text-[#686158]">
            <span>THE ARCHIVE // ENGINEERING SPECIMENS</span>
            <span className="font-typewriter font-bold text-[#211F1B]">PAGE 09</span>
          </div>
        </div>
      </div>

      {/* RIGHT PAGE: SPECIMEN 002-P — QPAT */}
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start border-b border-[#211F1B]/20 pb-2">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#5b583f] font-bold block">
                {project2.specimenNo} // ACADEMIC NLP
              </span>
              <h2 className="font-typewriter text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#211F1B]">
                QPAT SYSTEM
              </h2>
            </div>
            <ArchivalStamp text="ACADEMIC TOOL" variant="olive" rotation={2} date={project2.dateRange} />
          </div>

          <div className="font-mono-tech text-[10px] text-[#8C3833] font-semibold mt-1">
            {project2.subtitle}
          </div>

          {/* Objective & Problem */}
          <div className="mt-3 space-y-2 text-xs font-serif-vintage leading-relaxed">
            <div className="p-2 border border-[#211F1B]/20 bg-[#211F1B]/3">
              <span className="font-mono-tech text-[9px] font-bold uppercase text-[#8C3833] block">
                PROBLEM STATEMENT:
              </span>
              <p className="text-[#332f28] mt-0.5">{project2.problem}</p>
            </div>

            <div className="p-2 border border-[#211F1B]/20 bg-[#211F1B]/3">
              <span className="font-mono-tech text-[9px] font-bold uppercase text-[#5b583f] block">
                TECHNICAL APPROACH:
              </span>
              <p className="text-[#332f28] mt-0.5">{project2.approach}</p>
            </div>
          </div>

          {/* Key Implementations */}
          <div className="mt-3">
            <span className="font-mono-tech text-[9px] font-bold uppercase text-[#686158] block mb-1">
              NLP & TAXONOMY ALIGNMENT FEATURES:
            </span>
            <ul className="space-y-1.5 font-serif-vintage text-xs text-[#211F1B]">
              {project2.keyImplementations.map((impl, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="font-typewriter text-[#5b583f] font-bold text-xs">▸</span>
                  <span className="leading-snug">{impl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bloom's Taxonomy Cognitive Pyramid Sketch */}
          <div className="mt-3 p-2.5 border border-[#211F1B]/20 bg-[#211F1B]/3">
            <div className="text-[9px] font-mono-tech tracking-wider text-[#686158] uppercase mb-1 flex justify-between items-center border-b border-[#211F1B]/15 pb-0.5">
              <span>FIG. 4.2 — BLOOM'S TAXONOMY NLP CLASSIFIER</span>
              <span>[CO MAPPING]</span>
            </div>
            <div className="space-y-1 font-mono-tech text-[9px] text-center pt-1">
              <div className="w-2/5 mx-auto py-0.5 bg-[#8C3833]/20 border border-[#8C3833]/40 text-[#8C3833] font-bold">
                L6: CREATE / EVALUATE
              </div>
              <div className="w-3/5 mx-auto py-0.5 bg-[#77745A]/20 border border-[#77745A]/40 text-[#5b583f] font-bold">
                L4–L5: ANALYZE & APPLY
              </div>
              <div className="w-4/5 mx-auto py-0.5 bg-[#211F1B]/10 border border-[#211F1B]/25 text-[#211F1B] font-bold">
                L1–L3: REMEMBER & UNDERSTAND
              </div>
            </div>
            <div className="text-[8px] font-handwriting text-[#5b583f] mt-1 text-center">
              * NLP semantic analysis calculates exact Course Outcome (CO) distributions.
            </div>
          </div>

          {/* Stack Pills */}
          <div className="mt-3">
            <div className="flex flex-wrap gap-1 font-mono-tech text-[9px]">
              {project2.technologies.map((t, i) => (
                <span key={i} className="px-1.5 py-0.5 border border-[#211F1B]/30 bg-[#f1e8d5] text-[#211F1B]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={1} arrow="left" color="#5b583f">
              {project2.handwrittenNote}
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-[#211F1B]/15 flex justify-between items-center text-[10px] font-mono-tech text-[#686158]">
            <span>THE ARCHIVE // ENGINEERING SPECIMENS</span>
            <span className="font-typewriter font-bold text-[#211F1B]">PAGE 10</span>
          </div>
        </div>
      </div>
    </div>
  );
};
