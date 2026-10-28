import React from 'react';
import { RESUME_DATA } from '../../data/resumeData';
import { ArchivalStamp } from '../ArchivalStamp';
import { HandwrittenNote } from '../HandwrittenNote';
import { FileSearch } from 'lucide-react';

export const SpreadExperience: React.FC = () => {
  const policeExp = RESUME_DATA.experience.find((e) => e.id === 'telangana-police')!;
  const teleparadigmExp = RESUME_DATA.experience.find((e) => e.id === 'teleparadigm')!;
  const mithraExp = RESUME_DATA.experience.find((e) => e.id === 'mithra-agencies')!;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
      {/* LEFT PAGE: BHAROSA MODULE — TELANGANA POLICE */}
      <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-black/20 relative">
        <div>
          <div className="flex justify-between items-start border-b border-black/20 pb-3">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-neutral-600 block">
                FIELD DOSSIER // PUBLIC SAFETY & ANALYTICS
              </span>
              <h2 className="font-typewriter text-lg sm:text-xl font-bold uppercase tracking-wider text-black">
                TELANGANA POLICE DEPT.
              </h2>
            </div>
            <ArchivalStamp text={policeExp.stampText} variant="dark" rotation={-3} date={policeExp.dates} />
          </div>

          {/* Role Metadata Card */}
          <div className="mt-4 p-4 bg-white border-2 border-black shadow-xs">
            <div className="flex justify-between items-baseline">
              <span className="font-serif-vintage text-base font-bold text-black">
                {policeExp.role}
              </span>
              <span className="font-mono-tech text-xs bg-black text-white px-2 py-0.5 font-bold">
                {policeExp.dates}
              </span>
            </div>
            <div className="font-mono-tech text-xs text-neutral-800 font-bold mt-1">
              {policeExp.organization}
            </div>
            <div className="font-mono-tech text-[9px] text-neutral-600 mt-0.5">
              DIVISION: BHAROSA MODULE • 26 CRISIS CENTRES STATEWIDE
            </div>
          </div>

          {/* Primary Responsibilities */}
          <div className="mt-5 space-y-2.5">
            <h4 className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-black font-bold flex items-center gap-1.5 border-b border-black/30 pb-1">
              <FileSearch className="w-3.5 h-3.5 text-black" />
              <span>PUBLIC SAFETY INITIATIVES & WORKFLOWS</span>
            </h4>
            <ul className="space-y-2 font-serif-vintage text-xs text-neutral-900">
              {policeExp.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="font-typewriter text-black font-bold mt-0.5">§</span>
                  <span className="leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Contributions */}
          <div className="mt-4">
            <h4 className="font-mono-tech text-[9px] uppercase tracking-[0.2em] text-neutral-600 font-bold mb-1.5">
              OPERATIONAL ANALYTICS HIGHLIGHTS:
            </h4>
            <div className="grid grid-cols-1 gap-1.5 font-mono-tech text-[10px] text-black">
              {policeExp.technicalContributions.map((tc, idx) => (
                <div key={idx} className="flex items-center gap-2 px-2.5 py-1 bg-black/[0.03] border-l-2 border-black">
                  <span className="font-bold">✓</span>
                  <span>{tc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Outcome Verification */}
          <div className="mt-4 p-3 bg-neutral-100 border-2 border-black text-[10px] font-mono-tech text-black">
            <span className="font-bold block text-black uppercase tracking-wider mb-0.5">MEASURABLE CITIZEN IMPACT:</span>
            {policeExp.verifiedOutcomes}
          </div>
        </div>

        {/* Footer with Handwritten Verification */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={-2} arrow="up" color="#000000">
              {policeExp.handwrittenNote}
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-black/20 flex justify-between items-center text-[10px] font-mono-tech text-neutral-600">
            <span>THE ARCHIVE // FIELD EXPERIENCE</span>
            <span className="font-typewriter font-bold text-black">PAGE 05</span>
          </div>
        </div>
      </div>

      {/* RIGHT PAGE: TELEPARADIGM NETWORKS & MITHRA AGENCIES */}
      <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between relative">
        <div>
          <div className="flex justify-between items-start border-b border-black/20 pb-3">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-neutral-600 block">
                FIELD DOSSIER // DECENTRALIZED PROTOCOLS & INDUSTRY
              </span>
              <h2 className="font-typewriter text-lg sm:text-xl font-bold uppercase tracking-wider text-black">
                ENGINEERING & INDUSTRY
              </h2>
            </div>
            <ArchivalStamp text={teleparadigmExp.stampText} variant="olive" rotation={2} date={teleparadigmExp.dates} />
          </div>

          {/* Dossier 1: Teleparadigm Networks */}
          <div className="mt-4 p-4 bg-white border-2 border-black shadow-xs">
            <div className="flex justify-between items-baseline">
              <span className="font-serif-vintage text-base font-bold text-black">
                {teleparadigmExp.role}
              </span>
              <span className="font-mono-tech text-xs bg-black text-white px-2 py-0.5 font-bold">
                {teleparadigmExp.dates}
              </span>
            </div>
            <div className="font-mono-tech text-xs text-neutral-800 font-bold mt-1">
              {teleparadigmExp.organization}
            </div>

            <ul className="mt-2.5 space-y-1.5 font-serif-vintage text-xs text-neutral-900">
              {teleparadigmExp.responsibilities.slice(0, 2).map((resp, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="font-typewriter text-black font-bold mt-0.5">▸</span>
                  <span className="leading-snug">{resp}</span>
                </li>
              ))}
            </ul>

            <div className="mt-3 flex flex-wrap gap-1.5 font-mono-tech text-[9px]">
              {teleparadigmExp.toolsUsed.map((tool, idx) => (
                <span key={idx} className="px-2 py-0.5 border border-black bg-neutral-100 text-black font-semibold">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Dossier 2: Mithra Agencies Industrial Training */}
          <div className="mt-4 p-4 bg-white border-2 border-black shadow-xs">
            <div className="flex justify-between items-baseline">
              <span className="font-serif-vintage text-base font-bold text-black">
                {mithraExp.role}
              </span>
              <span className="font-mono-tech text-xs border border-black px-2 py-0.5 font-bold text-black">
                {mithraExp.dates}
              </span>
            </div>
            <div className="font-mono-tech text-xs text-neutral-800 font-bold mt-1">
              {mithraExp.organization} • Automotive Dealership
            </div>

            <p className="mt-2 font-serif-vintage text-xs text-neutral-900 leading-relaxed">
              {mithraExp.responsibilities[0]}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5 font-mono-tech text-[9px]">
              {mithraExp.toolsUsed.map((tool, idx) => (
                <span key={idx} className="px-2 py-0.5 border border-black bg-neutral-100 text-black font-semibold">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer with Handwritten Verification */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={1.5} arrow="left" color="#000000">
              {teleparadigmExp.handwrittenNote}
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-black/20 flex justify-between items-center text-[10px] font-mono-tech text-neutral-600">
            <span>THE ARCHIVE // FIELD EXPERIENCE</span>
            <span className="font-typewriter font-bold text-black">PAGE 06</span>
          </div>
        </div>
      </div>
    </div>
  );
};
