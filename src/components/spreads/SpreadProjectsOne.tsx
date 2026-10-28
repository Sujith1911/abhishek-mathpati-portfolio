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
      <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-black/20 relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start border-b border-black/20 pb-3">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-black font-bold block">
                {project1.specimenNo} // FLAGSHIP ARCHITECTURE
              </span>
              <h2 className="font-typewriter text-xl sm:text-2xl font-bold uppercase tracking-wider text-black">
                {project1.title}
              </h2>
            </div>
            <ArchivalStamp text="DECENTRALIZED" variant="dark" rotation={-3} date={project1.dateRange} />
          </div>

          <div className="font-mono-tech text-[10.5px] text-neutral-800 font-bold mt-1.5">
            {project1.subtitle}
          </div>

          {/* Objective & Problem Dossier */}
          <div className="mt-4 space-y-2.5 text-xs font-serif-vintage leading-relaxed">
            <div className="p-3 border-2 border-black bg-white shadow-xs">
              <span className="font-mono-tech text-[9px] font-bold uppercase text-black block">
                PROBLEM STATEMENT:
              </span>
              <p className="text-neutral-900 mt-0.5">{project1.problem}</p>
            </div>

            <div className="p-3 border-2 border-black bg-white shadow-xs">
              <span className="font-mono-tech text-[9px] font-bold uppercase text-black block">
                SYSTEM ARCHITECTURE:
              </span>
              <p className="text-neutral-900 mt-0.5">{project1.approach}</p>
            </div>
          </div>

          {/* Key Implementations */}
          <div className="mt-4">
            <span className="font-mono-tech text-[9px] font-bold uppercase text-black block mb-1">
              ENGINEERED PROTOCOLS & IMPLEMENTATION:
            </span>
            <ul className="space-y-1.5 font-serif-vintage text-xs text-neutral-950">
              {project1.keyImplementations.map((impl, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-typewriter text-black font-bold text-xs mt-0.5">▸</span>
                  <span className="leading-snug">{impl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Diagram */}
          <div className="mt-3.5">
            <DistributedNodesDiagram />
          </div>

          {/* Stack Pills */}
          <div className="mt-3.5">
            <div className="flex flex-wrap gap-1.5 font-mono-tech text-[9px]">
              {project1.technologies.map((t, i) => (
                <span key={i} className="px-2 py-0.5 border border-black bg-neutral-100 text-black font-semibold">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={-2} arrow="up" color="#000000">
              {project1.handwrittenNote}
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-black/20 flex justify-between items-center text-[10px] font-mono-tech text-neutral-600">
            <span>THE ARCHIVE // ENGINEERING SPECIMENS</span>
            <span className="font-typewriter font-bold text-black">PAGE 09</span>
          </div>
        </div>
      </div>

      {/* RIGHT PAGE: SPECIMEN 002-P — QPAT */}
      <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start border-b border-black/20 pb-3">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-neutral-600 font-bold block">
                {project2.specimenNo} // ACADEMIC NLP
              </span>
              <h2 className="font-typewriter text-xl sm:text-2xl font-bold uppercase tracking-wider text-black">
                QPAT SYSTEM
              </h2>
            </div>
            <ArchivalStamp text="ACADEMIC TOOL" variant="olive" rotation={2} date={project2.dateRange} />
          </div>

          <div className="font-mono-tech text-[10.5px] text-neutral-800 font-bold mt-1.5">
            {project2.subtitle}
          </div>

          {/* Objective & Problem */}
          <div className="mt-4 space-y-2.5 text-xs font-serif-vintage leading-relaxed">
            <div className="p-3 border-2 border-black bg-white shadow-xs">
              <span className="font-mono-tech text-[9px] font-bold uppercase text-black block">
                PROBLEM STATEMENT:
              </span>
              <p className="text-neutral-900 mt-0.5">{project2.problem}</p>
            </div>

            <div className="p-3 border-2 border-black bg-white shadow-xs">
              <span className="font-mono-tech text-[9px] font-bold uppercase text-black block">
                TECHNICAL APPROACH:
              </span>
              <p className="text-neutral-900 mt-0.5">{project2.approach}</p>
            </div>
          </div>

          {/* Key Implementations */}
          <div className="mt-4">
            <span className="font-mono-tech text-[9px] font-bold uppercase text-black block mb-1">
              NLP & TAXONOMY ALIGNMENT FEATURES:
            </span>
            <ul className="space-y-1.5 font-serif-vintage text-xs text-neutral-950">
              {project2.keyImplementations.map((impl, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-typewriter text-black font-bold text-xs mt-0.5">▸</span>
                  <span className="leading-snug">{impl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bloom's Taxonomy Cognitive Pyramid Sketch in Black & White */}
          <div className="mt-3.5 p-3 border border-black/30 bg-black/[0.02]">
            <div className="text-[9px] font-mono-tech tracking-wider text-neutral-600 uppercase mb-1.5 flex justify-between items-center border-b border-black/20 pb-1">
              <span className="font-bold text-black">FIG. 4.2 — BLOOM'S TAXONOMY NLP CLASSIFIER</span>
              <span className="bg-black text-white px-1.5 py-0.2 text-[8px]">[CO MAPPING]</span>
            </div>
            <div className="space-y-1.5 font-mono-tech text-[9px] text-center pt-1.5">
              <div className="w-2/5 mx-auto py-1 bg-black text-white font-bold border border-black">
                L6: CREATE / EVALUATE
              </div>
              <div className="w-3/5 mx-auto py-1 bg-neutral-300 text-black font-bold border border-black">
                L4–L5: ANALYZE & APPLY
              </div>
              <div className="w-4/5 mx-auto py-1 bg-neutral-100 text-black font-bold border border-black">
                L1–L3: REMEMBER & UNDERSTAND
              </div>
            </div>
            <div className="text-[8.5px] font-handwriting text-neutral-800 mt-1.5 text-center font-bold">
              * NLP semantic analysis calculates exact Course Outcome (CO) distributions.
            </div>
          </div>

          {/* Stack Pills */}
          <div className="mt-3.5">
            <div className="flex flex-wrap gap-1.5 font-mono-tech text-[9px]">
              {project2.technologies.map((t, i) => (
                <span key={i} className="px-2 py-0.5 border border-black bg-neutral-100 text-black font-semibold">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={1} arrow="left" color="#000000">
              {project2.handwrittenNote}
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-black/20 flex justify-between items-center text-[10px] font-mono-tech text-neutral-600">
            <span>THE ARCHIVE // ENGINEERING SPECIMENS</span>
            <span className="font-typewriter font-bold text-black">PAGE 10</span>
          </div>
        </div>
      </div>
    </div>
  );
};
