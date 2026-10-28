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
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#211F1B]/15 relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start border-b border-[#211F1B]/20 pb-2">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#686158] block">
                INVENTORY SECTION 07 // ARSENAL
              </span>
              <h2 className="font-typewriter text-lg sm:text-xl font-bold uppercase tracking-wider text-[#211F1B]">
                SPECIMEN CATALOGUE
              </h2>
            </div>
            <ArchivalStamp text="INVENTORY VERIFIED" variant="dark" rotation={-2} />
          </div>

          {/* Technical Categories */}
          <div className="mt-3 space-y-2.5 font-mono-tech text-[10px]">
            {/* Category 1: Cybersecurity & Forensics */}
            <div className="p-2 border border-[#211F1B]/20 bg-[#211F1B]/3 rounded-xs">
              <span className="font-bold text-[#8C3833] uppercase flex items-center gap-1 mb-1">
                <ShieldCheck className="w-3 h-3 text-[#8C3833]" />
                <span>CYBERSECURITY & DIGITAL FORENSICS</span>
              </span>
              <div className="flex flex-wrap gap-1">
                {skills.cybersecurityAndForensics.map((s, i) => (
                  <span key={i} className="px-1.5 py-0.5 bg-[#f1e8d5] border border-[#211F1B]/25 text-[#211F1B]">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 2: Security & Forensic Tools */}
            <div className="p-2 border border-[#211F1B]/20 bg-[#211F1B]/3 rounded-xs">
              <span className="font-bold text-[#5b583f] uppercase flex items-center gap-1 mb-1">
                <Terminal className="w-3 h-3 text-[#5b583f]" />
                <span>FORENSIC TOOLS & UTILITIES</span>
              </span>
              <div className="flex flex-wrap gap-1">
                {skills.securityTools.map((s, i) => (
                  <span key={i} className="px-1.5 py-0.5 bg-[#f1e8d5] border border-[#211F1B]/25 text-[#211F1B] font-semibold">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 3: Programming Languages */}
            <div className="p-2 border border-[#211F1B]/20 bg-[#211F1B]/3 rounded-xs">
              <span className="font-bold text-[#211F1B] uppercase flex items-center gap-1 mb-1">
                <Cpu className="w-3 h-3 text-[#211F1B]" />
                <span>PROGRAMMING LANGUAGES</span>
              </span>
              <div className="flex flex-wrap gap-1">
                {skills.programmingLanguages.map((s, i) => (
                  <span key={i} className="px-1.5 py-0.5 bg-[#f1e8d5] border border-[#211F1B]/25 text-[#211F1B]">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 4: Backend & Distributed Protocols */}
            <div className="p-2 border border-[#211F1B]/20 bg-[#211F1B]/3 rounded-xs">
              <span className="font-bold text-[#8C3833] uppercase flex items-center gap-1 mb-1">
                <Database className="w-3 h-3 text-[#8C3833]" />
                <span>BACKEND & DISTRIBUTED SYSTEMS</span>
              </span>
              <div className="flex flex-wrap gap-1">
                {[...skills.backendAndWeb, ...skills.distributedSystems].map((s, i) => (
                  <span key={i} className="px-1.5 py-0.5 bg-[#f1e8d5] border border-[#211F1B]/25 text-[#211F1B]">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 5: AI, Mobile & Environments */}
            <div className="p-2 border border-[#211F1B]/20 bg-[#211F1B]/3 rounded-xs">
              <span className="font-bold text-[#5b583f] uppercase flex items-center gap-1 mb-1">
                <Wrench className="w-3 h-3 text-[#5b583f]" />
                <span>AI, MOBILE & DEVELOPER ENVIRONMENTS</span>
              </span>
              <div className="flex flex-wrap gap-1">
                {[...skills.aiAndAppliedData, ...skills.mobileAndApp, ...skills.environmentsAndTools.slice(0, 5)].map((s, i) => (
                  <span key={i} className="px-1.5 py-0.5 bg-[#f1e8d5] border border-[#211F1B]/25 text-[#211F1B]">
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
            <HandwrittenNote rotation={-2} arrow="up" color="#5b583f">
              No arbitrary percentage bars; classified by demonstrated application.
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-[#211F1B]/15 flex justify-between items-center text-[10px] font-mono-tech text-[#686158]">
            <span>THE ARCHIVE // SPECIMEN INVENTORY</span>
            <span className="font-typewriter font-bold text-[#211F1B]">PAGE 13</span>
          </div>
        </div>
      </div>

      {/* RIGHT PAGE: SECTION VIII — ARCHIVAL ACCREDITATIONS & CERTIFICATIONS */}
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start border-b border-[#211F1B]/20 pb-2">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#686158] block">
                ACCREDITATIONS SECTION 08 // DIPLOMAS
              </span>
              <h2 className="font-typewriter text-lg sm:text-xl font-bold uppercase tracking-wider text-[#211F1B]">
                CERTIFICATIONS
              </h2>
            </div>
            <ArchivalStamp text="90% NLU ODISHA" variant="red" rotation={3} />
          </div>

          {/* Certifications Roster */}
          <div className="mt-3 space-y-2">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-2 bg-[#e8deca]/40 border border-[#211F1B]/20 rounded-xs flex items-start justify-between gap-2"
              >
                <div className="flex items-start gap-2">
                  <span className="font-mono-tech text-[10px] text-[#8C3833] font-bold mt-0.5">
                    [{String(idx + 1).padStart(2, '0')}]
                  </span>
                  <div>
                    <h4 className="font-serif-vintage text-xs font-bold text-[#211F1B] leading-tight">
                      {cert.title}
                    </h4>
                    <span className="font-mono-tech text-[9.5px] text-[#5b583f] block mt-0.5">
                      {cert.issuer}
                    </span>
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <span className="font-mono-tech text-[9px] text-[#686158] block">
                    {cert.date}
                  </span>
                  {cert.score && (
                    <span className="font-mono-tech text-[9px] font-bold text-[#8C3833] bg-[#8C3833]/10 px-1 py-0.2 border border-[#8C3833]/30 inline-block mt-0.5">
                      {cert.score}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Seal Notice */}
          <div className="mt-3 p-2 border border-dashed border-[#211F1B]/25 bg-[#211F1B]/2 flex items-center gap-2">
            <Award className="w-5 h-5 text-[#8C3833] flex-shrink-0" />
            <span className="font-mono-tech text-[9px] text-[#403c35]">
              Includes rigorous cyber forensics distinction from National Law University Odisha (90%) and Elite NPTEL Ethical Hacking certification (71%).
            </span>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={1} arrow="left" color="#8C3833">
              NLU Odisha 90% score in Cybercrime & Digital Forensics!
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-[#211F1B]/15 flex justify-between items-center text-[10px] font-mono-tech text-[#686158]">
            <span>THE ARCHIVE // ACCREDITATIONS</span>
            <span className="font-typewriter font-bold text-[#211F1B]">PAGE 14</span>
          </div>
        </div>
      </div>
    </div>
  );
};
