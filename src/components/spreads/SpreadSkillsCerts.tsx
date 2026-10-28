import React from 'react';
import { RESUME_DATA } from '../../data/resumeData';
import { ArchivalStamp } from '../ArchivalStamp';
import { HandwrittenNote } from '../HandwrittenNote';
import { Award, ShieldCheck, Terminal, Cpu, Database, Wrench } from 'lucide-react';

export const SpreadSkillsCerts: React.FC = () => {
  const { skills, certifications } = RESUME_DATA;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
      {/* LEFT PAGE: SECTION VII — TECHNICAL SPECIMEN INDEX */}
      <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-black/20 relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start border-b border-black/20 pb-3">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-neutral-600 block">
                INVENTORY SECTION 07 // ARSENAL
              </span>
              <h2 className="font-typewriter text-lg sm:text-xl font-bold uppercase tracking-wider text-black">
                SPECIMEN CATALOGUE
              </h2>
            </div>
            <ArchivalStamp text="INVENTORY VERIFIED" variant="dark" rotation={-2} />
          </div>

          {/* Technical Categories */}
          <div className="mt-4 space-y-3 font-mono-tech text-[10px]">
            {/* Category 1: Cybersecurity & Forensics */}
            <div className="p-3 border-2 border-black bg-white rounded-xs shadow-xs">
              <span className="font-bold text-black uppercase flex items-center gap-1.5 mb-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-black" />
                <span>CYBERSECURITY & DIGITAL FORENSICS</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {skills.cybersecurityAndForensics.map((s, i) => (
                  <span key={i} className="px-2 py-0.5 bg-neutral-100 border border-black text-black font-semibold">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 2: Security & Forensic Tools */}
            <div className="p-3 border-2 border-black bg-white rounded-xs shadow-xs">
              <span className="font-bold text-black uppercase flex items-center gap-1.5 mb-1.5">
                <Terminal className="w-3.5 h-3.5 text-black" />
                <span>FORENSIC TOOLS & UTILITIES</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {skills.securityTools.map((s, i) => (
                  <span key={i} className="px-2 py-0.5 bg-neutral-100 border border-black text-black font-bold">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 3: Programming Languages */}
            <div className="p-3 border-2 border-black bg-white rounded-xs shadow-xs">
              <span className="font-bold text-black uppercase flex items-center gap-1.5 mb-1.5">
                <Cpu className="w-3.5 h-3.5 text-black" />
                <span>PROGRAMMING LANGUAGES</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {skills.programmingLanguages.map((s, i) => (
                  <span key={i} className="px-2 py-0.5 bg-neutral-100 border border-black text-black font-semibold">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 4: Backend & Distributed Protocols */}
            <div className="p-3 border-2 border-black bg-white rounded-xs shadow-xs">
              <span className="font-bold text-black uppercase flex items-center gap-1.5 mb-1.5">
                <Database className="w-3.5 h-3.5 text-black" />
                <span>BACKEND & DISTRIBUTED SYSTEMS</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[...skills.backendAndWeb, ...skills.distributedSystems].map((s, i) => (
                  <span key={i} className="px-2 py-0.5 bg-neutral-100 border border-black text-black font-semibold">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 5: AI, Mobile & Environments */}
            <div className="p-3 border-2 border-black bg-white rounded-xs shadow-xs">
              <span className="font-bold text-black uppercase flex items-center gap-1.5 mb-1.5">
                <Wrench className="w-3.5 h-3.5 text-black" />
                <span>AI, MOBILE & DEVELOPER ENVIRONMENTS</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[...skills.aiAndAppliedData, ...skills.mobileAndApp, ...skills.environmentsAndTools.slice(0, 5)].map((s, i) => (
                  <span key={i} className="px-2 py-0.5 bg-neutral-100 border border-black text-black font-semibold">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={-2} arrow="up" color="#000000">
              No arbitrary percentage bars; classified by demonstrated application.
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-black/20 flex justify-between items-center text-[10px] font-mono-tech text-neutral-600">
            <span>THE ARCHIVE // SPECIMEN INVENTORY</span>
            <span className="font-typewriter font-bold text-black">PAGE 13</span>
          </div>
        </div>
      </div>

      {/* RIGHT PAGE: SECTION VIII — ARCHIVAL ACCREDITATIONS & CERTIFICATIONS */}
      <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start border-b border-black/20 pb-3">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-neutral-600 block">
                ACCREDITATIONS SECTION 08 // DIPLOMAS
              </span>
              <h2 className="font-typewriter text-lg sm:text-xl font-bold uppercase tracking-wider text-black">
                CERTIFICATIONS
              </h2>
            </div>
            <ArchivalStamp text="87% NLU ODISHA" variant="olive" rotation={3} />
          </div>

          {/* Certifications Roster */}
          <div className="mt-4 space-y-3">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-white border-2 border-black rounded-xs flex items-start justify-between gap-2.5 shadow-xs"
              >
                <div className="flex items-start gap-2.5">
                  <span className="font-mono-tech text-xs text-black font-bold mt-0.5">
                    [{String(idx + 1).padStart(2, '0')}]
                  </span>
                  <div>
                    <h4 className="font-serif-vintage text-sm font-bold text-black leading-tight">
                      {cert.title}
                    </h4>
                    <span className="font-mono-tech text-[10px] text-neutral-700 block mt-0.5 font-medium">
                      {cert.issuer}
                    </span>
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <span className="font-mono-tech text-[10px] text-neutral-600 block font-semibold">
                    {cert.date}
                  </span>
                  {cert.score && (
                    <span className="font-mono-tech text-[9.5px] font-bold text-white bg-black px-2 py-0.5 border border-black inline-block mt-1">
                      {cert.score}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Seal Notice */}
          <div className="mt-5 p-3.5 border-2 border-dashed border-black/40 bg-black/[0.02] flex items-center gap-3">
            <Award className="w-8 h-8 text-black flex-shrink-0" />
            <span className="font-mono-tech text-[10px] text-neutral-800 leading-normal">
              Includes rigorous cyber forensics distinction from National Law University Odisha (87%) and specialized machine learning & ethical hacking credentials from IIT Hyderabad & Computer Society of India.
            </span>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={1} arrow="left" color="#000000">
              National Law University Odisha 87% distinction score!
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-black/20 flex justify-between items-center text-[10px] font-mono-tech text-neutral-600">
            <span>THE ARCHIVE // ACCREDITATIONS</span>
            <span className="font-typewriter font-bold text-black">PAGE 14</span>
          </div>
        </div>
      </div>
    </div>
  );
};
