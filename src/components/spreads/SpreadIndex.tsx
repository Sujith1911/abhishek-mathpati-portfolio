import React from 'react';
import { Mail, ExternalLink, Fingerprint } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';
import { ArchivalStamp } from '../ArchivalStamp';
import { HandwrittenNote } from '../HandwrittenNote';
import { GithubIcon, LinkedinIcon } from '../SocialIcons';

interface SpreadIndexProps {
  onNavigateToSpread: (spreadIndex: number) => void;
}

export const SpreadIndex: React.FC<SpreadIndexProps> = ({ onNavigateToSpread }) => {
  const indexEntries = [
    { num: '§ I', title: 'Researcher Profile & Research Focus', page: 3, spread: 2, note: 'Bio, Pillars & Languages' },
    { num: '§ II', title: 'Academic Record & Scholarly Timeline', page: 4, spread: 2, note: 'KMEC, Narayana, High School' },
    { num: '§ III', title: 'Field Experience: Telangana Police Cyber Wing', page: 5, spread: 3, note: 'Digital Forensics & OSINT' },
    { num: '§ IV', title: 'Field Experience: Teleparadigm Networks', page: 6, spread: 3, note: 'Decentralized P2P & RBAC' },
    { num: '§ V', title: 'Research Publications: IEEE Conferences', page: 7, spread: 4, note: 'LLM Security & IPFS Arch' },
    { num: '§ VI', title: 'Research Publications: IJRDET Forensic Tool', page: 8, spread: 4, note: 'Court-admissible Evidence' },
    { num: '§ VII', title: 'Project Dossier: SecureShare & QPAT', page: 9, spread: 5, note: 'Blockchain, IPFS & NLP' },
    { num: '§ VIII', title: 'Project Dossier: SMIA & Hackathon Winner', page: 11, spread: 6, note: '1st Place Techtonic & ParkHub' },
    { num: '§ IX', title: 'Technical Specimen Index & Tool Arsenal', page: 13, spread: 7, note: 'Vulnerability, Languages, OS' },
    { num: '§ X', title: 'Archival Accreditations & Certifications', page: 14, spread: 7, note: 'NLU Odisha 90%, NPTEL, IIT' },
    { num: '§ XI', title: 'Competitive Honours & Leadership Cadre', page: 15, spread: 8, note: 'Aurora 95% Accuracy, CSI, NCC' },
    { num: '§ XII', title: 'Dispatch, Correspondence & Colophon', page: 17, spread: 9, note: 'Contact & Resume Download' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
      {/* LEFT PAGE: FRONTISPIECE & RESEARCHER IDENTIFICATION */}
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#211F1B]/15 relative">
        {/* Archival Accession Stamp */}
        <div className="flex justify-between items-start border-b border-[#211F1B]/20 pb-3">
          <div>
            <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#686158] block">
              LIBRARY ACCESSION NO.
            </span>
            <span className="font-typewriter text-xs font-bold tracking-wider text-[#211F1B]">
              MS-2026-AM / CYBER-FORENSICS
            </span>
          </div>
          <ArchivalStamp text="ARCHIVE COPY" variant="red" rotation={-3} date="OCT 2026" />
        </div>

        {/* Vintage Portrait / Researcher Dossier Plate */}
        <div className="my-auto py-4">
          <div className="relative mx-auto max-w-[280px] p-3 bg-[#e8deca] border border-[#211F1B]/30 shadow-md">
            {/* Paperclip Graphic */}
            <div className="absolute -top-3 left-6 w-5 h-9 border-2 border-[#7a7266] rounded-full opacity-80 pointer-events-none transform -rotate-12"></div>

            {/* Photo / Silhouette Placeholder */}
            <div className="relative aspect-[4/5] bg-gradient-to-b from-[#ded1ba] to-[#c7b79b] border border-[#211F1B]/40 flex flex-col items-center justify-center p-4 text-center overflow-hidden">
              {/* Subtle vintage halftone/scanline effect */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent,transparent_2px,rgba(0,0,0,0.04)_2px,rgba(0,0,0,0.04)_4px)]"></div>
              
              {/* Monogram Seal Silhouette */}
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#211F1B]/50 flex items-center justify-center mb-3 bg-[#f1e8d5]/40">
                <Fingerprint className="w-10 h-10 text-[#211F1B]/70" />
              </div>

              <span className="font-typewriter text-xs font-bold tracking-widest text-[#211F1B] uppercase">
                {RESUME_DATA.personal.name}
              </span>
              <span className="font-mono-tech text-[10px] text-[#686158] mt-1">
                CSE • Security & Forensics
              </span>
              <span className="font-mono-tech text-[9px] text-[#8C3833] mt-0.5 font-semibold">
                Keshav Memorial Engg. College
              </span>

              {/* Hand-written caption */}
              <div className="mt-3 pt-2 border-t border-[#211F1B]/20 w-full text-center">
                <span className="font-handwriting text-sm text-[#3b3832]">
                  "Active researcher in digital forensics & applied AI."
                </span>
              </div>
            </div>

            {/* Metadata Card Below Photo */}
            <div className="mt-3 pt-2 border-t border-[#211F1B]/20 font-mono-tech text-[10px] space-y-1 text-[#403c35]">
              <div className="flex justify-between">
                <span className="text-[#686158]">STATION:</span>
                <span className="font-medium">{RESUME_DATA.personal.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#686158]">CLASSIFICATION:</span>
                <span className="font-semibold text-[#8C3833]">RESTRICTED ACCESS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#686158]">PORTFOLIO ED.:</span>
                <span>VOL. 1 (2026)</span>
              </div>
            </div>
          </div>

          {/* Quick Dispatch Links */}
          <div className="mt-4 flex flex-wrap justify-center gap-2 font-mono-tech text-[10px]">
            <a
              href={`mailto:${RESUME_DATA.personal.email}`}
              className="inline-flex items-center gap-1 px-2.5 py-1 border border-[#211F1B]/25 hover:bg-[#211F1B]/10 hover:border-[#8C3833] transition-colors text-[#211F1B]"
            >
              <Mail className="w-3 h-3 text-[#8C3833]" />
              <span>Email</span>
            </a>
            <a
              href={RESUME_DATA.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 border border-[#211F1B]/25 hover:bg-[#211F1B]/10 hover:border-[#8C3833] transition-colors text-[#211F1B]"
            >
              <GithubIcon className="w-3 h-3 text-[#211F1B]" />
              <span>GitHub</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>
            <a
              href={RESUME_DATA.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 border border-[#211F1B]/25 hover:bg-[#211F1B]/10 hover:border-[#8C3833] transition-colors text-[#211F1B]"
            >
              <LinkedinIcon className="w-3 h-3 text-[#5b583f]" />
              <span>LinkedIn</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>
          </div>
        </div>

        {/* Running Footnote */}
        <div className="pt-2 border-t border-[#211F1B]/15 flex justify-between items-center text-[10px] font-mono-tech text-[#686158]">
          <span>THE ARCHIVE OF A CYBERSECURITY RESEARCHER</span>
          <span className="font-typewriter font-bold text-[#211F1B]">PAGE 01</span>
        </div>
      </div>

      {/* RIGHT PAGE: MASTER CATALOGUE (TABLE OF CONTENTS) */}
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative">
        {/* Header with Catalogue Number */}
        <div className="border-b-2 border-double border-[#211F1B]/30 pb-3 flex justify-between items-end">
          <div>
            <span className="font-mono-tech text-[9px] uppercase tracking-[0.3em] text-[#686158] block">
              GENERAL INDEX & CONTENTS
            </span>
            <h2 className="font-typewriter text-2xl sm:text-3xl font-bold uppercase tracking-wider text-[#211F1B]">
              CATALOGUE
            </h2>
          </div>
          <ArchivalStamp text="OFFICIAL RECORD" variant="olive" rotation={2} />
        </div>

        {/* Handwritten Instruction */}
        <div className="my-2">
          <HandwrittenNote arrow="down" rotation={-1.5} color="#8C3833">
            Click any section below to inspect the corresponding field notes
          </HandwrittenNote>
        </div>

        {/* Index Table with Dotted Leader Lines */}
        <div className="my-auto space-y-1.5 py-1">
          {indexEntries.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onNavigateToSpread(item.spread)}
              className="w-full text-left group flex items-baseline justify-between py-1 px-1.5 hover:bg-[#211F1B]/5 rounded-xs transition-colors cursor-pointer"
            >
              <div className="flex items-baseline gap-2 overflow-hidden mr-2">
                <span className="font-mono-tech text-[10px] font-bold text-[#8C3833] flex-shrink-0">
                  {item.num}
                </span>
                <span className="font-serif-vintage text-sm font-semibold text-[#211F1B] group-hover:text-[#8C3833] truncate transition-colors">
                  {item.title}
                </span>
              </div>
              
              {/* Dotted Leader Line */}
              <div className="flex-1 mx-2 border-b border-dotted border-[#211F1B]/30 mb-1 group-hover:border-[#8C3833]/50"></div>

              {/* Page Number */}
              <div className="flex items-center gap-1 flex-shrink-0">
                <span className="font-typewriter text-xs font-bold text-[#211F1B] group-hover:text-[#8C3833]">
                  p. {String(item.page).padStart(2, '0')}
                </span>
                <span className="opacity-0 group-hover:opacity-100 text-[#8C3833] text-xs font-bold transition-opacity">
                  →
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Archival Seal & Running Footer */}
        <div className="pt-2 border-t border-[#211F1B]/15 flex justify-between items-center text-[10px] font-mono-tech text-[#686158]">
          <span className="font-handwriting text-base text-[#5b583f]">
            * All citations verifiable via institutional & conference repositories.
          </span>
          <span className="font-typewriter font-bold text-[#211F1B]">PAGE 02</span>
        </div>
      </div>
    </div>
  );
};
