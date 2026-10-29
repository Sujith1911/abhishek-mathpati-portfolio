import React from 'react';
import { RESUME_DATA } from '../../../data/resumeData';
import { NewspaperStamp } from '../elements/NewspaperStamp';
import { HandwrittenNote } from '../../HandwrittenNote';
import { GraduationCap, ShieldAlert } from 'lucide-react';

export const Spread2AcademicExp: React.FC = () => {
  const policeExp = RESUME_DATA.experience.find((e) => e.id === 'telangana-police')!;
  const teleparadigmExp = RESUME_DATA.experience.find((e) => e.id === 'teleparadigm')!;
  const mithraExp = RESUME_DATA.experience.find((e) => e.id === 'mithra-agencies')!;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
      {/* LEFT PAGE: PAGE 03 — ACADEMIC RECORD & TIMELINE */}
      <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#141210]/20 relative">
        <div>
          {/* Header */}
          <div className="border-b-2 border-[#141210] pb-2 mb-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
                  SCHOLASTIC REPORT // SECTION 03
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-[#141210]">
                  THE ACADEMIC LEDGER
                </h3>
              </div>
              <NewspaperStamp text="ACCREDITED" variant="crimson" rotation={2} />
            </div>
            <p className="font-newsreader text-xs italic text-[#4a423a] mt-0.5">
              "Chronological ledger of formal qualifications, institutional distinctions, and technical training."
            </p>
          </div>

          {/* Academic Timeline Entries */}
          <div className="space-y-4">
            {RESUME_DATA.academicRecord.map((record, index) => (
              <div
                key={index}
                className="relative pl-5 border-l-2 border-[#141210] pb-3 last:pb-0"
              >
                {/* Node point */}
                <div className="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#141210] bg-[#f5f0e1]"></div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h4 className="font-serif-vintage text-base font-bold text-[#141210]">
                    {record.degree}
                  </h4>
                  <span className="font-mono-tech text-xs font-bold text-[#8C3833] bg-[#8C3833]/10 px-2 py-0.5 border border-[#8C3833]/30 self-start">
                    {record.grade}
                  </span>
                </div>

                <div className="font-typewriter text-xs text-[#4b4e39] font-bold mt-0.5">
                  {record.institution}
                </div>

                <div className="font-mono-tech text-[9.5px] text-[#5a5047] flex items-center gap-2 mt-0.5">
                  <span>PERIOD: {record.period}</span>
                  {record.specialization && (
                    <>
                      <span>•</span>
                      <span>{record.specialization}</span>
                    </>
                  )}
                </div>

                <p className="font-serif-vintage text-[11.5px] text-[#2a2521] mt-1 italic">
                  "{record.notes}"
                </p>
              </div>
            ))}
          </div>

          {/* Institutional Accreditation Notice Box */}
          <div className="mt-4 p-3 border-2 border-dashed border-[#141210]/30 bg-[#141210]/[0.02] flex items-start gap-2.5">
            <GraduationCap className="w-6 h-6 text-[#141210] flex-shrink-0 mt-0.5" />
            <div className="font-mono-tech text-[9.5px] text-[#2a2521] leading-relaxed">
              <span className="font-bold text-[#141210] block uppercase tracking-wider">REGISTRAR VERIFICATION NOTICE:</span>
              Demonstrated academic distinction in Computer Science & Engineering (8.36 CGPA) alongside Automobile Engineering & Embedded Control Systems (8.8 CGPA).
            </div>
          </div>
        </div>

        {/* Footer Notes & Page Indicator */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={1} arrow="left" color="#8C3833">
              Automobile Engineering Diploma distinction (8.8/10) with engine interlock!
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a5047]">
            <span>THE CHRONICLE // ACADEMIC TIMELINE</span>
            <span className="font-typewriter font-bold text-[#141210]">PAGE 03</span>
          </div>
        </div>
      </div>

      {/* RIGHT PAGE: PAGE 04 — FIELD EXPERIENCE: POLICE & INDUSTRY */}
      <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-between relative">
        <div>
          {/* Header */}
          <div className="border-b-2 border-[#141210] pb-2 mb-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
                  FIELD DISPATCHES // SECTION 04
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-[#141210]">
                  PUBLIC SAFETY & INDUSTRY
                </h3>
              </div>
              <NewspaperStamp text="VERIFIED" variant="dark" rotation={-1} date={policeExp.dates} />
            </div>
            <p className="font-newsreader text-xs italic text-[#4a423a] mt-0.5">
              "Operational analytics for state law enforcement alongside decentralized protocol development."
            </p>
          </div>

          {/* Dossier 1: Telangana Police Bharosa Module */}
          <div className="p-3 bg-[#ece4cf]/60 border border-[#141210] space-y-1.5 shadow-xs">
            <div className="flex justify-between items-baseline">
              <h4 className="font-serif-vintage text-base font-bold text-[#141210] flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-[#8C3833]" />
                <span>{policeExp.role}</span>
              </h4>
              <span className="font-mono-tech text-[10px] text-[#8C3833] font-bold">
                {policeExp.dates}
              </span>
            </div>
            <div className="font-mono-tech text-[10.5px] text-[#4b4e39] font-bold">
              {policeExp.organization} • BHAROSA MODULE (26 STATEWIDE CENTRES)
            </div>

            <ul className="space-y-1 font-serif-vintage text-[11.5px] text-[#141210]/90">
              {policeExp.responsibilities.slice(0, 2).map((resp, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="font-typewriter text-[#8C3833] font-bold mt-0.5">§</span>
                  <span className="leading-snug">{resp}</span>
                </li>
              ))}
            </ul>

            <div className="pt-1 border-t border-[#141210]/20 text-[9.5px] font-mono-tech text-[#2a2521]">
              <span className="font-bold text-[#8C3833]">OUTCOME:</span> {policeExp.verifiedOutcomes}
            </div>
          </div>

          {/* Dossier 2: Teleparadigm Networks */}
          <div className="mt-2.5 p-3 bg-[#ece4cf]/60 border border-[#141210] space-y-1 shadow-xs">
            <div className="flex justify-between items-baseline">
              <h4 className="font-serif-vintage text-sm sm:text-base font-bold text-[#141210]">
                {teleparadigmExp.role}
              </h4>
              <span className="font-mono-tech text-[10px] text-[#4b4e39] font-bold">
                {teleparadigmExp.dates}
              </span>
            </div>
            <div className="font-mono-tech text-[10px] text-[#8C3833] font-bold">
              {teleparadigmExp.organization} • Decentralized Protocol Engineering
            </div>

            <p className="font-serif-vintage text-[11.5px] text-[#141210]/90 leading-snug">
              {teleparadigmExp.responsibilities[0]}
            </p>

            <div className="flex flex-wrap gap-1 font-mono-tech text-[8.5px] pt-1">
              {teleparadigmExp.toolsUsed.map((tool, idx) => (
                <span key={idx} className="px-1.5 py-0.5 border border-[#141210]/30 bg-[#f5f0e1] text-[#141210] font-semibold">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Dossier 3: Mithra Agencies Industrial Training */}
          <div className="mt-2.5 p-2.5 bg-[#ece4cf]/40 border border-[#141210]/30 space-y-0.5">
            <div className="flex justify-between items-baseline font-mono-tech text-[10px]">
              <span className="font-bold text-[#141210]">{mithraExp.role}</span>
              <span className="text-[#5a5047]">{mithraExp.dates}</span>
            </div>
            <p className="font-serif-vintage text-[11px] text-[#3a332c] leading-snug">
              {mithraExp.organization} • {mithraExp.responsibilities[0]}
            </p>
          </div>
        </div>

        {/* Footer with Handwritten Verification */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={1.5} arrow="left" color="#4b4e39">
              {policeExp.handwrittenNote}
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a5047]">
            <span>THE CHRONICLE // FIELD OPERATIONS</span>
            <span className="font-typewriter font-bold text-[#141210]">PAGE 04</span>
          </div>
        </div>
      </div>
    </div>
  );
};
