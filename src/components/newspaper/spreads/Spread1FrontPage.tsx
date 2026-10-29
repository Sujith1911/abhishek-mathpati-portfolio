import React from 'react';
import { Mail, ExternalLink, Fingerprint } from 'lucide-react';
import { RESUME_DATA } from '../../../data/resumeData';
import { NewspaperMasthead } from '../NewspaperMasthead';
import { NewspaperStamp } from '../elements/NewspaperStamp';
import { GithubIcon, LinkedinIcon } from '../../SocialIcons';
import { HandwrittenNote } from '../../HandwrittenNote';

interface Spread1FrontPageProps {
  onNavigateToSpread: (spreadIndex: number) => void;
}

export const Spread1FrontPage: React.FC<Spread1FrontPageProps> = ({ onNavigateToSpread }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
      {/* LEFT PAGE: PAGE 01 — THE GRAND FRONT PAGE */}
      <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#141210]/20 relative">
        <div>
          {/* Newspaper Masthead */}
          <NewspaperMasthead
            edition="LATE CITY SPECIAL EDITION"
            volume="VOL. XXIV ... NO. 102"
            date="OCTOBER 2026"
            showFullBanner={true}
          />

          {/* Banner Lead Headline */}
          <div className="text-center my-2 pb-2 border-b-2 border-[#141210]">
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-[#141210] leading-tight">
              CYBERSECURITY RESEARCHER DEPLOYS DECENTRALIZED PROTOCOLS & FORENSIC SAFEGUARDS
            </h2>
            <p className="font-serif-vintage text-xs sm:text-sm text-[#3a332c] mt-1 font-semibold italic">
              Mythreie Dumpati pairs empirical computer science with court-admissible forensic architectures and applied AI benchmarking.
            </p>
          </div>

          {/* Front Page Multi-Column Story Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mt-2">
            {/* Column 1: Portrait & Bio Card (5 cols) */}
            <div className="sm:col-span-5 flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-[#141210]/20 pr-0 sm:pr-3">
              {/* Photo Box with Halftone Engraving Aesthetic */}
              <div className="relative p-2 bg-[#ece4cf] border border-[#141210] shadow-xs text-center">
                <div className="newsprint-halftone relative aspect-[4/5] bg-gradient-to-b from-[#e5dbc2] to-[#d6cbaf] border border-[#141210]/40 flex flex-col items-center justify-center p-3 text-center overflow-hidden">
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#141210] flex items-center justify-center mb-2 bg-[#f5f0e1]/60">
                    <Fingerprint className="w-8 h-8 text-[#141210]" />
                  </div>
                  <span className="font-typewriter text-xs font-bold tracking-widest text-[#141210] uppercase">
                    {RESUME_DATA.personal.name}
                  </span>
                  <span className="font-mono-tech text-[9.5px] text-[#5a5047] mt-0.5 font-bold">
                    CSE • Security & Forensics
                  </span>
                  <span className="font-mono-tech text-[9px] text-[#8C3833] mt-0.5 font-bold">
                    Keshav Memorial Engg College
                  </span>
                </div>
                <div className="text-[8.5px] font-newsreader italic text-[#5a5047] mt-1">
                  Fig. 1 — Chief Investigator Mythreie Dumpati (B.E. 2026).
                </div>
              </div>

              {/* Station Metadata */}
              <div className="mt-2 pt-2 border-t border-[#141210]/20 font-mono-tech text-[9.5px] space-y-1 text-[#2a2521]">
                <div className="flex justify-between">
                  <span className="text-[#5a5047]">STATION:</span>
                  <span className="font-bold">Hyderabad, India</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5a5047]">STATUS:</span>
                  <span className="font-bold text-[#8C3833]">OFFICIAL DOSSIER</span>
                </div>
              </div>

              {/* Dispatch Action Links */}
              <div className="mt-2 pt-2 border-t border-[#141210]/20 flex flex-wrap gap-1 font-mono-tech text-[9px]">
                <a
                  href={`mailto:${RESUME_DATA.personal.email}`}
                  className="px-2 py-0.5 border border-[#141210] hover:bg-[#141210] hover:text-[#f5f0e1] transition-colors font-bold inline-flex items-center gap-1"
                >
                  <Mail className="w-2.5 h-2.5 text-[#8C3833]" />
                  <span>Telegraph</span>
                </a>
                <a
                  href={RESUME_DATA.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-0.5 border border-[#141210] hover:bg-[#141210] hover:text-[#f5f0e1] transition-colors font-bold inline-flex items-center gap-1"
                >
                  <GithubIcon className="w-2.5 h-2.5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-2 h-2 opacity-60" />
                </a>
                <a
                  href={RESUME_DATA.personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-0.5 border border-[#141210] hover:bg-[#141210] hover:text-[#f5f0e1] transition-colors font-bold inline-flex items-center gap-1"
                >
                  <LinkedinIcon className="w-2.5 h-2.5 text-[#4b4e39]" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-2 h-2 opacity-60" />
                </a>
              </div>
            </div>

            {/* Column 2: Lead News Story & Index Box (7 cols) */}
            <div className="sm:col-span-7 flex flex-col justify-between pl-0 sm:pl-1">
              <div>
                <div className="flex items-center justify-between border-b border-[#141210]/20 pb-1 mb-1.5">
                  <span className="font-mono-tech text-[9px] uppercase tracking-wider text-[#8C3833] font-bold">
                    SPECIAL DISPATCH REPORT
                  </span>
                  <NewspaperStamp text="ARCHIVE" variant="crimson" rotation={1} />
                </div>

                <div className="font-serif-vintage text-xs sm:text-[12.5px] leading-relaxed text-[#141210]/95 space-y-2 text-justify">
                  <p className="drop-cap">
                    HYDERABAD — In an era marked by sophisticated cyber intrusions and evolving adversarial exploits, computer science researcher Mythreie Dumpati has emerged with a multidisciplinary approach bridging digital forensics, decentralized architectures, and applied machine learning security.
                  </p>
                  <p>
                    Graduating in 2026 from Keshav Memorial Engineering College with an 8.36 CGPA and possessing an earlier foundation in Automobile Engineering (8.8 CGPA), Dumpati’s recent research spans direct investigative contributions to public safety initiatives across 26 statewide crisis centres, peer-reviewed publications accepted into IEEE conferences, and the development of court-admissible evidence preservation software.
                  </p>
                </div>
              </div>

              {/* Front Page Broadsheet Index Box */}
              <div className="mt-3 p-2.5 bg-[#ece4cf]/70 border-2 border-[#141210]">
                <div className="flex items-center justify-between border-b border-[#141210] pb-1 mb-1.5 font-mono-tech text-[9px] uppercase tracking-widest font-bold text-[#141210]">
                  <span>IN THIS SPECIAL EDITION</span>
                  <span className="text-[#8C3833]">INDEX</span>
                </div>
                <div className="grid grid-cols-2 gap-x-2 gap-y-1 font-newsreader text-[11px] leading-tight">
                  <button
                    type="button"
                    onClick={() => onNavigateToSpread(2)}
                    className="text-left hover:text-[#8C3833] hover:underline cursor-pointer flex justify-between"
                  >
                    <span>§ Academic Timeline</span>
                    <span className="font-mono-tech font-bold text-[9px]">p. 03</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigateToSpread(2)}
                    className="text-left hover:text-[#8C3833] hover:underline cursor-pointer flex justify-between"
                  >
                    <span>§ Police & Field Experience</span>
                    <span className="font-mono-tech font-bold text-[9px]">p. 04</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigateToSpread(3)}
                    className="text-left hover:text-[#8C3833] hover:underline cursor-pointer flex justify-between"
                  >
                    <span>§ IEEE Research Papers</span>
                    <span className="font-mono-tech font-bold text-[9px]">p. 05</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigateToSpread(3)}
                    className="text-left hover:text-[#8C3833] hover:underline cursor-pointer flex justify-between"
                  >
                    <span>§ SecureShare & QPAT</span>
                    <span className="font-mono-tech font-bold text-[9px]">p. 06</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigateToSpread(4)}
                    className="text-left hover:text-[#8C3833] hover:underline cursor-pointer flex justify-between"
                  >
                    <span>§ Forensic & Vehicle Safety</span>
                    <span className="font-mono-tech font-bold text-[9px]">p. 07</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigateToSpread(4)}
                    className="text-left hover:text-[#8C3833] hover:underline cursor-pointer flex justify-between"
                  >
                    <span>§ Tool Arsenal & NLU 87%</span>
                    <span className="font-mono-tech font-bold text-[9px]">p. 08</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigateToSpread(5)}
                    className="text-left hover:text-[#8C3833] hover:underline cursor-pointer flex justify-between"
                  >
                    <span>§ Student Body Presidency</span>
                    <span className="font-mono-tech font-bold text-[9px]">p. 09</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigateToSpread(5)}
                    className="text-left hover:text-[#8C3833] hover:underline cursor-pointer flex justify-between"
                  >
                    <span>§ Dispatch & PDF Resume</span>
                    <span className="font-mono-tech font-bold text-[9px]">p. 10</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Folio Footer */}
        <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a5047]">
          <span>THE CHRONICLE OF CYBERNETIC INVESTIGATION</span>
          <span className="font-typewriter font-bold text-[#141210]">PAGE 01 • FRONTISPIECE</span>
        </div>
      </div>

      {/* RIGHT PAGE: PAGE 02 — THE PERSON BEHIND THE STORY */}
      <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-between relative">
        <div>
          {/* Section Header */}
          <div className="border-b-2 border-[#141210] pb-2 mb-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
                  EDITORIAL FEATURE // SECTION 02
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-[#141210]">
                  THE BIOGRAPHICAL CHRONICLE
                </h3>
              </div>
              <NewspaperStamp text="BIOGRAPHY" variant="olive" rotation={-2} />
            </div>
            <p className="font-newsreader text-xs italic text-[#4a423a] mt-0.5">
              "An investigation into the foundational principles, academic trajectory, and technical ethics of Mythreie Dumpati."
            </p>
          </div>

          {/* Core Biography Article */}
          <div className="space-y-2.5 font-serif-vintage text-xs sm:text-[12.5px] leading-relaxed text-[#141210]/95 text-justify">
            <p className="drop-cap">
              Rooted in both hardware control systems and computational network security, Mythreie Dumpati approaches software engineering through the lens of verifiable integrity. Her dual background in automobile embedded control and high-level computer science informs an instinct for designing systems that cannot fail silently.
            </p>
            <p>
              During her tenure as Student Body President at Keshav Memorial Engineering College, Dumpati demonstrated the administrative diplomacy and technical communication required to align diverse institutional stakeholders. Concurrently, her field engineering engagements with state law enforcement and decentralized protocol startups grounded her academic investigations in direct public utility.
            </p>
          </div>

          {/* Three Core Pillars of Research */}
          <div className="mt-4 space-y-2">
            <div className="font-mono-tech text-[10px] uppercase font-bold text-[#141210] tracking-widest border-b border-[#141210]/20 pb-0.5 flex justify-between">
              <span>THREE CORE INVESTIGATIVE PILLARS</span>
              <span className="text-[#8C3833]">[METHODOLOGY]</span>
            </div>

            <div className="p-2.5 border border-[#141210]/30 bg-[#141210]/[0.02] space-y-0.5">
              <span className="font-typewriter text-xs font-bold text-[#8C3833] block">
                1. Digital Forensics & Operational Analytics
              </span>
              <p className="font-serif-vintage text-[11.5px] text-[#2a2521] leading-snug">
                Statewide public safety workflows, crisis intervention data analytics across 26 centres, SHA-256 evidence hashing, and tamper-evident judicial audit packaging.
              </p>
            </div>

            <div className="p-2.5 border border-[#141210]/30 bg-[#141210]/[0.02] space-y-0.5">
              <span className="font-typewriter text-xs font-bold text-[#4b4e39] block">
                2. Decentralized Protocols & Privacy Control
              </span>
              <p className="font-serif-vintage text-[11.5px] text-[#2a2521] leading-snug">
                Eliminating single points of failure through IPFS content-addressed storage, blockchain transaction anchors, and Shamir’s Secret Sharing threshold cryptography.
              </p>
            </div>

            <div className="p-2.5 border border-[#141210]/30 bg-[#141210]/[0.02] space-y-0.5">
              <span className="font-typewriter text-xs font-bold text-[#141210] block">
                3. Applied AI & Adversarial Benchmarking
              </span>
              <p className="font-serif-vintage text-[11.5px] text-[#2a2521] leading-snug">
                Empirical evaluation of small and medium LLMs under multi-turn jailbreak attempts and prompt injection; mapping Pareto frontier curves across safety and latency.
              </p>
            </div>
          </div>

          {/* Spoken Languages & Margin Note */}
          <div className="mt-3 pt-2 border-t border-[#141210]/20 flex items-center justify-between font-mono-tech text-[10px]">
            <span className="text-[#5a5047] font-bold">LINGUISTIC CADRE:</span>
            <div className="flex gap-1.5">
              {RESUME_DATA.personal.languagesSpoken.map((lang, idx) => (
                <span key={idx} className="px-1.5 py-0.5 border border-[#141210]/40 bg-[#ece4cf] text-[#141210] font-semibold text-[9.5px]">
                  {lang.name} {lang.name === 'German' ? '(A1)' : ''}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer with Handwritten Verification */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={-1.5} arrow="left" color="#8C3833">
              "Focusing computational rigor toward public safety and privacy rights."
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a5047]">
            <span>THE CHRONICLE // BIOGRAPHICAL DISPATCH</span>
            <span className="font-typewriter font-bold text-[#141210]">PAGE 02</span>
          </div>
        </div>
      </div>
    </div>
  );
};
