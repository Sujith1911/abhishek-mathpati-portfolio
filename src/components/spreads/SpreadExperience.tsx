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
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#211F1B]/15 relative">
        <div>
          <div className="flex justify-between items-start border-b border-[#211F1B]/20 pb-2">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#686158] block">
                FIELD DOSSIER // PUBLIC SAFETY & ANALYTICS
              </span>
              <h2 className="font-typewriter text-lg sm:text-xl font-bold uppercase tracking-wider text-[#211F1B]">
                TELANGANA POLICE DEPT.
              </h2>
            </div>
            <ArchivalStamp text={policeExp.stampText} variant="red" rotation={-3} date={policeExp.dates} />
          </div>

          {/* Role Metadata Card */}
          <div className="mt-3 p-3 bg-[#e8deca]/60 border border-[#211F1B]/20">
            <div className="flex justify-between items-baseline">
              <span className="font-serif-vintage text-base font-bold text-[#211F1B]">
                {policeExp.role}
              </span>
              <span className="font-mono-tech text-[10px] text-[#8C3833] font-bold">
                {policeExp.dates}
              </span>
            </div>
            <div className="font-mono-tech text-[11px] text-[#5b583f] font-semibold mt-0.5">
              {policeExp.organization}
            </div>
            <div className="font-mono-tech text-[9px] text-[#686158] mt-0.5">
              DIVISION: BHAROSA MODULE • 26 CRISIS CENTRES STATEWIDE
            </div>
          </div>

          {/* Primary Responsibilities */}
          <div className="mt-4 space-y-2">
            <h4 className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#686158] flex items-center gap-1">
              <FileSearch className="w-3.5 h-3.5 text-[#8C3833]" />
              <span>PUBLIC SAFETY INITIATIVES & WORKFLOWS</span>
            </h4>
            <ul className="space-y-2 font-serif-vintage text-xs text-[#211F1B]/90">
              {policeExp.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="font-typewriter text-[#8C3833] font-bold mt-0.5">§</span>
                  <span className="leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Contributions */}
          <div className="mt-3">
            <h4 className="font-mono-tech text-[9px] uppercase tracking-[0.2em] text-[#686158] mb-1">
              OPERATIONAL ANALYTICS HIGHLIGHTS:
            </h4>
            <div className="grid grid-cols-1 gap-1 font-mono-tech text-[10px] text-[#3d3831]">
              {policeExp.technicalContributions.map((tc, idx) => (
                <div key={idx} className="flex items-center gap-1.5 px-2 py-0.5 bg-[#211F1B]/4 border-l-2 border-[#8C3833]">
                  <span>✓</span>
                  <span>{tc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Outcome Verification */}
          <div className="mt-3 p-2 bg-[#8C3833]/5 border-l-2 border-[#8C3833] text-[9.5px] font-mono-tech text-[#403c35]">
            <span className="font-bold text-[#8C3833] block">MEASURABLE CITIZEN IMPACT:</span>
            {policeExp.verifiedOutcomes}
          </div>
        </div>

        {/* Footer with Handwritten Verification */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={-2} arrow="up" color="#8C3833">
              {policeExp.handwrittenNote}
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-[#211F1B]/15 flex justify-between items-center text-[10px] font-mono-tech text-[#686158]">
            <span>THE ARCHIVE // FIELD EXPERIENCE</span>
            <span className="font-typewriter font-bold text-[#211F1B]">PAGE 05</span>
          </div>
        </div>
      </div>

      {/* RIGHT PAGE: TELEPARADIGM NETWORKS & MITHRA AGENCIES */}
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative">
        <div>
          <div className="flex justify-between items-start border-b border-[#211F1B]/20 pb-2">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#686158] block">
                FIELD DOSSIER // DECENTRALIZED PROTOCOLS & INDUSTRY
              </span>
              <h2 className="font-typewriter text-lg sm:text-xl font-bold uppercase tracking-wider text-[#211F1B]">
                ENGINEERING & INDUSTRY
              </h2>
            </div>
            <ArchivalStamp text={teleparadigmExp.stampText} variant="olive" rotation={2} date={teleparadigmExp.dates} />
          </div>

          {/* Dossier 1: Teleparadigm Networks */}
          <div className="mt-3 p-3 bg-[#e8deca]/60 border border-[#211F1B]/20">
            <div className="flex justify-between items-baseline">
              <span className="font-serif-vintage text-base font-bold text-[#211F1B]">
                {teleparadigmExp.role}
              </span>
              <span className="font-mono-tech text-[10px] text-[#5b583f] font-bold">
                {teleparadigmExp.dates}
              </span>
            </div>
            <div className="font-mono-tech text-[11px] text-[#8C3833] font-semibold mt-0.5">
              {teleparadigmExp.organization}
            </div>

            <ul className="mt-2 space-y-1 font-serif-vintage text-xs text-[#211F1B]/90">
              {teleparadigmExp.responsibilities.slice(0, 2).map((resp, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="font-typewriter text-[#5b583f] font-bold mt-0.5">▸</span>
                  <span className="leading-snug">{resp}</span>
                </li>
              ))}
            </ul>

            <div className="mt-2 flex flex-wrap gap-1 font-mono-tech text-[9px]">
              {teleparadigmExp.toolsUsed.map((tool, idx) => (
                <span key={idx} className="px-1.5 py-0.5 border border-[#211F1B]/30 bg-[#f1e8d5] text-[#211F1B]">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Dossier 2: Mithra Agencies Industrial Training */}
          <div className="mt-3 p-3 bg-[#e8deca]/60 border border-[#211F1B]/20">
            <div className="flex justify-between items-baseline">
              <span className="font-serif-vintage text-base font-bold text-[#211F1B]">
                {mithraExp.role}
              </span>
              <span className="font-mono-tech text-[10px] text-[#686158] font-bold">
                {mithraExp.dates}
              </span>
            </div>
            <div className="font-mono-tech text-[11px] text-[#5b583f] font-semibold mt-0.5">
              {mithraExp.organization} • Automotive Dealership
            </div>

            <p className="mt-1.5 font-serif-vintage text-xs text-[#211F1B]/90 leading-snug">
              {mithraExp.responsibilities[0]}
            </p>

            <div className="mt-2 flex flex-wrap gap-1 font-mono-tech text-[9px]">
              {mithraExp.toolsUsed.map((tool, idx) => (
                <span key={idx} className="px-1.5 py-0.5 border border-[#211F1B]/30 bg-[#f1e8d5] text-[#211F1B]">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer with Handwritten Verification */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={1.5} arrow="left" color="#5b583f">
              {teleparadigmExp.handwrittenNote}
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-[#211F1B]/15 flex justify-between items-center text-[10px] font-mono-tech text-[#686158]">
            <span>THE ARCHIVE // FIELD EXPERIENCE</span>
            <span className="font-typewriter font-bold text-[#211F1B]">PAGE 06</span>
          </div>
        </div>
      </div>
    </div>
  );
};
