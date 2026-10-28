import React from 'react';
import { RESUME_DATA } from '../../data/resumeData';
import { ArchivalStamp } from '../ArchivalStamp';
import { HandwrittenNote } from '../HandwrittenNote';

export const SpreadProjectsTwo: React.FC = () => {
  const smia = RESUME_DATA.projects.find((p) => p.id === 'smia')!;
  const alcoholProject = RESUME_DATA.projects.find((p) => p.id === 'alcohol-detector')!;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
      {/* LEFT PAGE: SPECIMEN 003-P — SMIA FORENSIC APP */}
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#211F1B]/15 relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start border-b border-[#211F1B]/20 pb-2">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
                {smia.specimenNo} // LAW ENFORCEMENT TOOL
              </span>
              <h2 className="font-typewriter text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#211F1B]">
                SMIA INVESTIGATOR
              </h2>
            </div>
            <ArchivalStamp text="FORENSIC APP" variant="red" rotation={-2} date={smia.dateRange} />
          </div>

          <div className="font-mono-tech text-[10px] text-[#5b583f] font-semibold mt-1">
            {smia.subtitle}
          </div>

          {/* Problem & Objective */}
          <div className="mt-3 space-y-2 text-xs font-serif-vintage leading-relaxed">
            <div className="p-2 border border-[#211F1B]/20 bg-[#211F1B]/3">
              <span className="font-mono-tech text-[9px] font-bold uppercase text-[#8C3833] block">
                INVESTIGATIVE DEFICIENCY:
              </span>
              <p className="text-[#332f28] mt-0.5">{smia.problem}</p>
            </div>

            <div className="p-2 border border-[#211F1B]/20 bg-[#211F1B]/3">
              <span className="font-mono-tech text-[9px] font-bold uppercase text-[#5b583f] block">
                COMPLIANCE ARCHITECTURE:
              </span>
              <p className="text-[#332f28] mt-0.5">{smia.approach}</p>
            </div>
          </div>

          {/* Key Implementations */}
          <div className="mt-3">
            <span className="font-mono-tech text-[9px] font-bold uppercase text-[#686158] block mb-1">
              FORENSIC WORKFLOW & CHAIN-OF-CUSTODY:
            </span>
            <ul className="space-y-1.5 font-serif-vintage text-xs text-[#211F1B]">
              {smia.keyImplementations.map((impl, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="font-typewriter text-[#8C3833] font-bold text-xs">▸</span>
                  <span className="leading-snug">{impl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Evidentiary Proof Box */}
          <div className="mt-3 p-2 bg-[#8C3833]/5 border-l-2 border-[#8C3833] text-[10px] font-mono-tech text-[#403c35]">
            <span className="font-bold text-[#8C3833] block">JUDICIAL ADMISSIBILITY:</span>
            {smia.verifiedOutcomes}
          </div>

          {/* Stack Pills */}
          <div className="mt-3">
            <div className="flex flex-wrap gap-1 font-mono-tech text-[9px]">
              {smia.technologies.map((t, i) => (
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
            <HandwrittenNote rotation={-1.5} arrow="down" color="#8C3833">
              {smia.handwrittenNote}
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-[#211F1B]/15 flex justify-between items-center text-[10px] font-mono-tech text-[#686158]">
            <span>THE ARCHIVE // FORENSIC SPECIMENS</span>
            <span className="font-typewriter font-bold text-[#211F1B]">PAGE 11</span>
          </div>
        </div>
      </div>

      {/* RIGHT PAGE: SPECIMEN 004-P — ALCOHOL DETECTOR VEHICLE SYSTEM */}
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start border-b border-[#211F1B]/20 pb-2">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#5b583f] font-bold block">
                {alcoholProject.specimenNo} // EMBEDDED AUTOMOTIVE SAFETY
              </span>
              <h2 className="font-typewriter text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#211F1B]">
                ALCOHOL INTERLOCK
              </h2>
            </div>
            <ArchivalStamp text="VEHICLE SAFETY" variant="olive" rotation={2} date={alcoholProject.dateRange} />
          </div>

          <div className="font-mono-tech text-[10px] text-[#8C3833] font-semibold mt-1">
            {alcoholProject.subtitle}
          </div>

          {/* Problem & Objective */}
          <div className="mt-3 space-y-2 text-xs font-serif-vintage leading-relaxed">
            <div className="p-2 border border-[#211F1B]/20 bg-[#211F1B]/3">
              <span className="font-mono-tech text-[9px] font-bold uppercase text-[#8C3833] block">
                SAFETY HAZARD ADDRESSED:
              </span>
              <p className="text-[#332f28] mt-0.5">{alcoholProject.problem}</p>
            </div>

            <div className="p-2 border border-[#211F1B]/20 bg-[#211F1B]/3">
              <span className="font-mono-tech text-[9px] font-bold uppercase text-[#5b583f] block">
                EMBEDDED CONTROL ARCHITECTURE:
              </span>
              <p className="text-[#332f28] mt-0.5">{alcoholProject.approach}</p>
            </div>
          </div>

          {/* Key Implementations */}
          <div className="mt-3">
            <span className="font-mono-tech text-[9px] font-bold uppercase text-[#686158] block mb-1">
              SENSOR CALIBRATION & ENGINE DISENGAGEMENT:
            </span>
            <ul className="space-y-1.5 font-serif-vintage text-xs text-[#211F1B]">
              {alcoholProject.keyImplementations.map((impl, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="font-typewriter text-[#5b583f] font-bold text-xs">▸</span>
                  <span className="leading-snug">{impl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Embedded Hardware Diagram Box */}
          <div className="mt-3 p-2 bg-[#5b583f]/10 border border-[#5b583f]/30 text-[9.5px] font-mono-tech text-[#332f28] space-y-0.5">
            <span className="font-bold text-[#5b583f] block">HARDWARE PIPELINE:</span>
            <div>MQ-3 Electrochemical Gas Sensor ➔ Arduino UNO Analog ADC ➔ Real-Time Intoxication Threshold Logic ➔ Relay Ignition Interlock & Buzzer Alarm</div>
          </div>

          {/* Stack Pills */}
          <div className="mt-3">
            <div className="flex flex-wrap gap-1 font-mono-tech text-[9px]">
              {alcoholProject.technologies.map((t, idx) => (
                <span key={idx} className="px-1.5 py-0.5 border border-[#211F1B]/30 bg-[#f1e8d5] text-[#211F1B]">
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
              {alcoholProject.handwrittenNote}
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-[#211F1B]/15 flex justify-between items-center text-[10px] font-mono-tech text-[#686158]">
            <span>THE ARCHIVE // HARDWARE SPECIMENS</span>
            <span className="font-typewriter font-bold text-[#211F1B]">PAGE 12</span>
          </div>
        </div>
      </div>
    </div>
  );
};
