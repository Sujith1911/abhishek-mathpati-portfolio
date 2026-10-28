import React from 'react';
import { RESUME_DATA } from '../../data/resumeData';
import { ArchivalStamp } from '../ArchivalStamp';
import { HandwrittenNote } from '../HandwrittenNote';
import { Shield, Cpu, Network, GraduationCap } from 'lucide-react';

export const SpreadProfileAcademic: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
      {/* LEFT PAGE: SECTION I — RESEARCHER PROFILE & INVESTIGATION PILLARS */}
      <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-black/20 relative">
        {/* Header */}
        <div>
          <div className="flex justify-between items-start border-b border-black/20 pb-3">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-neutral-600 block">
                DOSSIER SECTION 01 // OVERVIEW
              </span>
              <h2 className="font-typewriter text-xl sm:text-2xl font-bold uppercase tracking-wider text-black">
                RESEARCHER PROFILE
              </h2>
            </div>
            <ArchivalStamp text="DOSSIER DEPT." variant="dark" rotation={-2} />
          </div>

          {/* Core Biography / Executive Summary */}
          <div className="mt-5 font-serif-vintage text-xs sm:text-sm leading-relaxed text-black/90 space-y-2.5">
            <p className="first-letter:font-typewriter first-letter:text-4xl first-letter:font-bold first-letter:float-left first-letter:mr-2.5 first-letter:text-black first-letter:border first-letter:border-black first-letter:p-1">
              Mythreie Dumpati is a Computer Science and Engineering researcher and software engineer graduating in 2026 from Keshav Memorial Engineering College. Holding a dual foundation across computational systems and automobile engineering, her work spans digital forensics, decentralized architectures, and adversarial machine learning.
            </p>
            <p>
              Having served as Student Body President and contributed directly to government public safety operations and decentralized protocol engineering, her methodology pairs empirical mathematical rigor with tamper-evident evidentiary integrity.
            </p>
          </div>

          {/* Three Core Pillars of Research */}
          <div className="mt-5 space-y-3">
            <h3 className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-black font-bold border-b border-black pb-1 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-black" />
              <span>CORE RESEARCH PILLARS</span>
            </h3>

            <div className="p-3 border border-black/30 bg-black/[0.02] rounded-xs space-y-1">
              <div className="flex items-center gap-2 font-typewriter text-xs font-bold text-black">
                <Shield className="w-3.5 h-3.5 text-black" />
                <span>1. Digital Forensics & Operational Analytics</span>
              </div>
              <p className="font-mono-tech text-[10px] text-neutral-700 leading-normal pl-5">
                Public safety workflows, crisis intervention analytics across 26 centres, SHA-256 evidence hashing, and court-admissible forensic case management.
              </p>
            </div>

            <div className="p-3 border border-black/30 bg-black/[0.02] rounded-xs space-y-1">
              <div className="flex items-center gap-2 font-typewriter text-xs font-bold text-black">
                <Network className="w-3.5 h-3.5 text-black" />
                <span>2. Decentralized Protocols & Privacy Control</span>
              </div>
              <p className="font-mono-tech text-[10px] text-neutral-700 leading-normal pl-5">
                Designing zero-single-point-of-failure architectures utilizing IPFS content addressing, blockchain transaction anchoring, and Shamir's Secret Sharing.
              </p>
            </div>

            <div className="p-3 border border-black/30 bg-black/[0.02] rounded-xs space-y-1">
              <div className="flex items-center gap-2 font-typewriter text-xs font-bold text-black">
                <Cpu className="w-3.5 h-3.5 text-black" />
                <span>3. Applied AI & Adversarial Benchmarking</span>
              </div>
              <p className="font-mono-tech text-[10px] text-neutral-700 leading-normal pl-5">
                Evaluating small and medium LLMs under direct jailbreaks and indirect prompt injection; mapping Pareto efficiency across safety, refusal, and latency.
              </p>
            </div>
          </div>
        </div>

        {/* Spoken Languages & Margin Note */}
        <div className="pt-3">
          <div className="border-t border-black/20 pt-2 flex items-center justify-between">
            <span className="font-mono-tech text-[9px] uppercase tracking-wider text-neutral-600 font-bold">
              SPOKEN LANGUAGES:
            </span>
            <div className="flex flex-wrap gap-1.5 font-mono-tech text-[10px]">
              {RESUME_DATA.personal.languagesSpoken.map((lang, idx) => (
                <span key={idx} className="px-2 py-0.5 border border-black bg-white text-black font-semibold">
                  {lang.name} {lang.name === 'German' ? '(Beginner)' : ''}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-2 text-right">
            <HandwrittenNote rotation={-2} arrow="none" color="#000000">
              Focused on privacy-preserving architectures & public safety.
            </HandwrittenNote>
          </div>

          {/* Running Footer */}
          <div className="pt-2 border-t border-black/20 flex justify-between items-center text-[10px] font-mono-tech text-neutral-600">
            <span>THE ARCHIVE // PROFILE</span>
            <span className="font-typewriter font-bold text-black">PAGE 03</span>
          </div>
        </div>
      </div>

      {/* RIGHT PAGE: SECTION II — ACADEMIC RECORD & SCHOLARLY LEDGER */}
      <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between relative">
        {/* Header */}
        <div>
          <div className="flex justify-between items-start border-b border-black/20 pb-3">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-neutral-600 block">
                DOSSIER SECTION 02 // CURRICULUM
              </span>
              <h2 className="font-typewriter text-xl sm:text-2xl font-bold uppercase tracking-wider text-black">
                ACADEMIC LEDGER
              </h2>
            </div>
            <ArchivalStamp text="ACCREDITED" variant="olive" rotation={2} />
          </div>

          {/* Vintage Scholarly Timeline Table */}
          <div className="mt-5 space-y-4">
            {RESUME_DATA.academicRecord.map((record, index) => (
              <div
                key={index}
                className="relative pl-6 border-l-2 border-black pb-3 last:pb-0"
              >
                {/* Node Point */}
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full border-2 border-black bg-white"></div>

                {/* Entry Content */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h4 className="font-serif-vintage text-base font-bold text-black">
                    {record.degree}
                  </h4>
                  <span className="font-mono-tech text-xs font-bold text-white bg-black px-2 py-0.5 border border-black self-start">
                    {record.grade}
                  </span>
                </div>

                <div className="font-typewriter text-xs text-neutral-800 font-bold mt-0.5">
                  {record.institution}
                </div>

                <div className="font-mono-tech text-[10px] text-neutral-600 flex items-center gap-2 mt-1">
                  <span>PERIOD: {record.period}</span>
                  {record.specialization && (
                    <>
                      <span>•</span>
                      <span>{record.specialization}</span>
                    </>
                  )}
                </div>

                <p className="font-serif-vintage text-xs text-neutral-800 mt-1.5 italic">
                  "{record.notes}"
                </p>
              </div>
            ))}
          </div>

          {/* Institutional Seal Stamp */}
          <div className="mt-5 p-3.5 border-2 border-dashed border-black/40 bg-black/[0.02] flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-black flex-shrink-0" />
            <div className="font-mono-tech text-[10px] text-neutral-800">
              <span className="font-bold block text-black">DEGREE & DIPLOMA VERIFICATION NOTICE:</span>
              Demonstrated academic distinction in Computer Science & Engineering (8.36 CGPA) alongside Automobile Engineering & Embedded Control Systems (8.8 CGPA).
            </div>
          </div>
        </div>

        {/* Footer Notes & Page Indicator */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={1} arrow="left" color="#000000">
              Automobile Engineering Diploma (8.8/10) with automated vehicle interlock!
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-black/20 flex justify-between items-center text-[10px] font-mono-tech text-neutral-600">
            <span>THE ARCHIVE // SCHOLARLY LEDGER</span>
            <span className="font-typewriter font-bold text-black">PAGE 04</span>
          </div>
        </div>
      </div>
    </div>
  );
};
