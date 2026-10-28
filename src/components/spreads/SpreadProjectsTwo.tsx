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
      <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-black/20 relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start border-b border-black/20 pb-3">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-black font-bold block">
                {smia.specimenNo} // LAW ENFORCEMENT TOOL
              </span>
              <h2 className="font-typewriter text-xl sm:text-2xl font-bold uppercase tracking-wider text-black">
                SMIA INVESTIGATOR
              </h2>
            </div>
            <ArchivalStamp text="FORENSIC APP" variant="dark" rotation={-2} date={smia.dateRange} />
          </div>

          <div className="font-mono-tech text-[10.5px] text-neutral-800 font-bold mt-1.5">
            {smia.subtitle}
          </div>

          {/* Problem & Objective */}
          <div className="mt-4 space-y-2.5 text-xs font-serif-vintage leading-relaxed">
            <div className="p-3 border-2 border-black bg-white shadow-xs">
              <span className="font-mono-tech text-[9px] font-bold uppercase text-black block">
                INVESTIGATIVE DEFICIENCY:
              </span>
              <p className="text-neutral-900 mt-0.5">{smia.problem}</p>
            </div>

            <div className="p-3 border-2 border-black bg-white shadow-xs">
              <span className="font-mono-tech text-[9px] font-bold uppercase text-black block">
                COMPLIANCE ARCHITECTURE:
              </span>
              <p className="text-neutral-900 mt-0.5">{smia.approach}</p>
            </div>
          </div>

          {/* Key Implementations */}
          <div className="mt-4">
            <span className="font-mono-tech text-[9px] font-bold uppercase text-black block mb-1">
              FORENSIC WORKFLOW & CHAIN-OF-CUSTODY:
            </span>
            <ul className="space-y-1.5 font-serif-vintage text-xs text-neutral-950">
              {smia.keyImplementations.map((impl, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-typewriter text-black font-bold text-xs mt-0.5">▸</span>
                  <span className="leading-snug">{impl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Evidentiary Proof Box */}
          <div className="mt-4 p-3 bg-neutral-100 border-2 border-black text-[10px] font-mono-tech text-black">
            <span className="font-bold text-black block uppercase tracking-wider mb-0.5">JUDICIAL ADMISSIBILITY:</span>
            {smia.verifiedOutcomes}
          </div>

          {/* Stack Pills */}
          <div className="mt-4">
            <div className="flex flex-wrap gap-1.5 font-mono-tech text-[9px]">
              {smia.technologies.map((t, i) => (
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
            <HandwrittenNote rotation={-1.5} arrow="down" color="#000000">
              {smia.handwrittenNote}
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-black/20 flex justify-between items-center text-[10px] font-mono-tech text-neutral-600">
            <span>THE ARCHIVE // FORENSIC SPECIMENS</span>
            <span className="font-typewriter font-bold text-black">PAGE 11</span>
          </div>
        </div>
      </div>

      {/* RIGHT PAGE: SPECIMEN 004-P — ALCOHOL DETECTOR VEHICLE SYSTEM */}
      <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start border-b border-black/20 pb-3">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-neutral-600 font-bold block">
                {alcoholProject.specimenNo} // EMBEDDED AUTOMOTIVE SAFETY
              </span>
              <h2 className="font-typewriter text-xl sm:text-2xl font-bold uppercase tracking-wider text-black">
                ALCOHOL INTERLOCK
              </h2>
            </div>
            <ArchivalStamp text="VEHICLE SAFETY" variant="olive" rotation={2} date={alcoholProject.dateRange} />
          </div>

          <div className="font-mono-tech text-[10.5px] text-neutral-800 font-bold mt-1.5">
            {alcoholProject.subtitle}
          </div>

          {/* Problem & Objective */}
          <div className="mt-4 space-y-2.5 text-xs font-serif-vintage leading-relaxed">
            <div className="p-3 border-2 border-black bg-white shadow-xs">
              <span className="font-mono-tech text-[9px] font-bold uppercase text-black block">
                SAFETY HAZARD ADDRESSED:
              </span>
              <p className="text-neutral-900 mt-0.5">{alcoholProject.problem}</p>
            </div>

            <div className="p-3 border-2 border-black bg-white shadow-xs">
              <span className="font-mono-tech text-[9px] font-bold uppercase text-black block">
                EMBEDDED CONTROL ARCHITECTURE:
              </span>
              <p className="text-neutral-900 mt-0.5">{alcoholProject.approach}</p>
            </div>
          </div>

          {/* Key Implementations */}
          <div className="mt-4">
            <span className="font-mono-tech text-[9px] font-bold uppercase text-black block mb-1">
              SENSOR CALIBRATION & ENGINE DISENGAGEMENT:
            </span>
            <ul className="space-y-1.5 font-serif-vintage text-xs text-neutral-950">
              {alcoholProject.keyImplementations.map((impl, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-typewriter text-black font-bold text-xs mt-0.5">▸</span>
                  <span className="leading-snug">{impl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Embedded Hardware Diagram Box */}
          <div className="mt-4 p-3 bg-neutral-100 border border-black/40 text-[10px] font-mono-tech text-black space-y-1">
            <span className="font-bold text-black block uppercase">HARDWARE PIPELINE:</span>
            <div className="leading-relaxed">MQ-3 Electrochemical Gas Sensor ➔ Arduino UNO Analog ADC ➔ Real-Time Intoxication Threshold Logic ➔ Relay Ignition Interlock & Buzzer Alarm</div>
          </div>

          {/* Stack Pills */}
          <div className="mt-4">
            <div className="flex flex-wrap gap-1.5 font-mono-tech text-[9px]">
              {alcoholProject.technologies.map((t, idx) => (
                <span key={idx} className="px-2 py-0.5 border border-black bg-neutral-100 text-black font-semibold">
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
              {alcoholProject.handwrittenNote}
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-black/20 flex justify-between items-center text-[10px] font-mono-tech text-neutral-600">
            <span>THE ARCHIVE // HARDWARE SPECIMENS</span>
            <span className="font-typewriter font-bold text-black">PAGE 12</span>
          </div>
        </div>
      </div>
    </div>
  );
};
