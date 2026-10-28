import React from 'react';
import { RESUME_DATA } from '../../data/resumeData';
import { ArchivalStamp } from '../ArchivalStamp';
import { HandwrittenNote } from '../HandwrittenNote';
import { Shield, Cpu, Network, GraduationCap } from 'lucide-react';

export const SpreadProfileAcademic: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
      {/* LEFT PAGE: SECTION I — RESEARCHER PROFILE & INVESTIGATION PILLARS */}
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#211F1B]/15 relative">
        {/* Header */}
        <div>
          <div className="flex justify-between items-start border-b border-[#211F1B]/20 pb-2">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#686158] block">
                DOSSIER SECTION 01 // OVERVIEW
              </span>
              <h2 className="font-typewriter text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#211F1B]">
                RESEARCHER PROFILE
              </h2>
            </div>
            <ArchivalStamp text="DOSSIER DEPT." variant="dark" rotation={-2} />
          </div>

          {/* Core Biography / Executive Summary */}
          <div className="mt-4 font-serif-vintage text-xs sm:text-sm leading-relaxed text-[#211F1B]/90 space-y-2">
            <p className="first-letter:font-typewriter first-letter:text-3xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-[#8C3833]">
              Abhishek Mathpati is a Computer Science and Engineering researcher and software engineer graduating in 2026 from Keshav Memorial Engineering College. His work operates at the rigorous intersection of digital forensics, decentralized systems, and adversarial artificial intelligence.
            </p>
            <p>
              Having collaborated directly with law enforcement agencies and software engineering enterprises, his methodology emphasizes tamper-evident evidentiary integrity, cryptographic security, and empirical benchmarking of defensive architectures.
            </p>
          </div>

          {/* Three Core Pillars of Research */}
          <div className="mt-4 space-y-2.5">
            <h3 className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#686158] border-b border-[#211F1B]/15 pb-1 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#8C3833]" />
              <span>CORE RESEARCH PILLARS</span>
            </h3>

            <div className="p-2 border border-[#211F1B]/20 bg-[#211F1B]/3 rounded-xs space-y-1">
              <div className="flex items-center gap-1.5 font-typewriter text-xs font-bold text-[#211F1B]">
                <Shield className="w-3 h-3 text-[#8C3833]" />
                <span>1. Digital Forensics & OSINT</span>
              </div>
              <p className="font-mono-tech text-[10px] text-[#403c35] leading-normal pl-4.5">
                Specialized in active cybercrime investigation, SHA-256 evidence hashing, timestamp validation, and court-admissible forensic documentation.
              </p>
            </div>

            <div className="p-2 border border-[#211F1B]/20 bg-[#211F1B]/3 rounded-xs space-y-1">
              <div className="flex items-center gap-1.5 font-typewriter text-xs font-bold text-[#211F1B]">
                <Network className="w-3 h-3 text-[#5b583f]" />
                <span>2. Decentralized Protocols & Privacy</span>
              </div>
              <p className="font-mono-tech text-[10px] text-[#403c35] leading-normal pl-4.5">
                Designing zero-single-point-of-failure architectures utilizing IPFS content addressing, blockchain transaction anchoring, and Shamir's Secret Sharing.
              </p>
            </div>

            <div className="p-2 border border-[#211F1B]/20 bg-[#211F1B]/3 rounded-xs space-y-1">
              <div className="flex items-center gap-1.5 font-typewriter text-xs font-bold text-[#211F1B]">
                <Cpu className="w-3 h-3 text-[#8C3833]" />
                <span>3. Applied AI & Adversarial Benchmarking</span>
              </div>
              <p className="font-mono-tech text-[10px] text-[#403c35] leading-normal pl-4.5">
                Evaluating small and medium LLMs under direct jailbreaks and indirect prompt injection; mapping Pareto efficiency across safety, refusal, and latency.
              </p>
            </div>
          </div>
        </div>

        {/* Spoken Languages & Margin Note */}
        <div className="pt-3">
          <div className="border-t border-[#211F1B]/15 pt-2 flex items-center justify-between">
            <span className="font-mono-tech text-[9px] uppercase tracking-wider text-[#686158]">
              SPOKEN LANGUAGES:
            </span>
            <div className="flex flex-wrap gap-1.5 font-mono-tech text-[10px]">
              {RESUME_DATA.personal.languagesSpoken.map((lang, idx) => (
                <span key={idx} className="px-1.5 py-0.5 border border-[#211F1B]/20 bg-[#f1e8d5] text-[#211F1B]">
                  {lang.name} {lang.name === 'German' ? '(A1)' : ''}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-2 text-right">
            <HandwrittenNote rotation={-2} arrow="none" color="#5b583f">
              Focused on privacy-preserving architectures.
            </HandwrittenNote>
          </div>

          {/* Running Footer */}
          <div className="pt-2 border-t border-[#211F1B]/15 flex justify-between items-center text-[10px] font-mono-tech text-[#686158]">
            <span>THE ARCHIVE // PROFILE</span>
            <span className="font-typewriter font-bold text-[#211F1B]">PAGE 03</span>
          </div>
        </div>
      </div>

      {/* RIGHT PAGE: SECTION II — ACADEMIC RECORD & SCHOLARLY LEDGER */}
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative">
        {/* Header */}
        <div>
          <div className="flex justify-between items-start border-b border-[#211F1B]/20 pb-2">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#686158] block">
                DOSSIER SECTION 02 // CURRICULUM
              </span>
              <h2 className="font-typewriter text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#211F1B]">
                ACADEMIC LEDGER
              </h2>
            </div>
            <ArchivalStamp text="ACCREDITED" variant="olive" rotation={3} />
          </div>

          {/* Vintage Scholarly Timeline Table */}
          <div className="mt-4 space-y-4">
            {RESUME_DATA.academicRecord.map((record, index) => (
              <div
                key={index}
                className="relative pl-5 border-l-2 border-[#211F1B]/30 pb-3 last:pb-0"
              >
                {/* Vintage Node Point */}
                <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full border-2 border-[#211F1B] bg-[#f1e8d5]"></div>

                {/* Entry Content */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h4 className="font-serif-vintage text-base font-bold text-[#211F1B]">
                    {record.degree}
                  </h4>
                  <span className="font-mono-tech text-xs font-semibold text-[#8C3833] bg-[#8C3833]/10 px-2 py-0.5 border border-[#8C3833]/30 self-start">
                    {record.grade}
                  </span>
                </div>

                <div className="font-typewriter text-xs text-[#5b583f] font-semibold mt-0.5">
                  {record.institution}
                </div>

                <div className="font-mono-tech text-[10px] text-[#686158] flex items-center gap-2 mt-1">
                  <span>PERIOD: {record.period}</span>
                  {record.specialization && (
                    <>
                      <span>•</span>
                      <span>{record.specialization}</span>
                    </>
                  )}
                </div>

                <p className="font-serif-vintage text-xs text-[#3d3831] mt-1.5 italic">
                  "{record.notes}"
                </p>
              </div>
            ))}
          </div>

          {/* Institutional Seal Stamp */}
          <div className="mt-5 p-3 border border-dashed border-[#211F1B]/25 bg-[#211F1B]/2 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-[#5b583f] flex-shrink-0" />
            <div className="font-mono-tech text-[10px] text-[#403c35]">
              <span className="font-bold block text-[#211F1B]">DEGREE VERIFICATION NOTICE:</span>
              Curriculum covers Data Structures, Computer Networks, Operating Systems, Cryptography, and Machine Learning with active distinction.
            </div>
          </div>
        </div>

        {/* Footer Notes & Page Indicator */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={1} arrow="left" color="#8C3833">
              Perfect 10/10 GPA in 10th SSC; 96.9% in 12th TSBIE
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-[#211F1B]/15 flex justify-between items-center text-[10px] font-mono-tech text-[#686158]">
            <span>THE ARCHIVE // SCHOLARLY LEDGER</span>
            <span className="font-typewriter font-bold text-[#211F1B]">PAGE 04</span>
          </div>
        </div>
      </div>
    </div>
  );
};
