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
    { num: '§ II', title: 'Academic Record & Scholarly Timeline', page: 4, spread: 2, note: 'KMEC, Diploma, ICSE' },
    { num: '§ III', title: 'Field Experience: Bharosa Module, Police', page: 5, spread: 3, note: 'T-Safe & Operational Analytics' },
    { num: '§ IV', title: 'Field Experience: Teleparadigm & Mithra', page: 6, spread: 3, note: 'P2P Protocols & Diagnostics' },
    { num: '§ V', title: 'Research Publications: IEEE Conferences', page: 7, spread: 4, note: 'LLM Security & IPFS Arch' },
    { num: '§ VI', title: 'Research Publications: IJRDET Forensic Tool', page: 8, spread: 4, note: 'Court-admissible Evidence' },
    { num: '§ VII', title: 'Project Dossier: SecureShare & QPAT', page: 9, spread: 5, note: 'Blockchain, IPFS & NLP' },
    { num: '§ VIII', title: 'Project Dossier: SMIA & Alcohol Interlock', page: 11, spread: 6, note: 'Forensic Tool & Vehicle Safety' },
    { num: '§ IX', title: 'Technical Specimen Index & Tool Arsenal', page: 13, spread: 7, note: 'Vulnerability, Languages, OS' },
    { num: '§ X', title: 'Archival Accreditations & Certifications', page: 14, spread: 7, note: 'NLU Odisha 87%, CSI, IIT' },
    { num: '§ XI', title: 'Student Body President & Arts Cadre', page: 15, spread: 8, note: 'President, CSI, Carnatic Music' },
    { num: '§ XII', title: 'Dispatch, Correspondence & Colophon', page: 17, spread: 9, note: 'Contact & Resume Download' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
      {/* LEFT PAGE: FRONTISPIECE & RESEARCHER IDENTIFICATION */}
      <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-black/20 relative">
        {/* Archival Accession Stamp */}
        <div className="flex justify-between items-start border-b border-black/20 pb-3">
          <div>
            <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-neutral-600 block">
              LIBRARY ACCESSION NO.
            </span>
            <span className="font-typewriter text-xs font-bold tracking-wider text-black">
              MS-2026-MD / CYBER-FORENSICS
            </span>
          </div>
          <ArchivalStamp text="ARCHIVE COPY" variant="dark" rotation={-3} date="OCT 2026" />
        </div>

        {/* Vintage Portrait / Researcher Dossier Plate */}
        <div className="my-auto py-4">
          <div className="relative mx-auto max-w-[300px] p-4 bg-white border-2 border-black shadow-md">
            {/* Paperclip Graphic */}
            <div className="absolute -top-3 left-6 w-5 h-9 border-2 border-neutral-700 rounded-full opacity-80 pointer-events-none transform -rotate-12"></div>

            {/* Photo / Silhouette Placeholder */}
            <div className="relative aspect-[4/5] bg-neutral-100 border border-black/40 flex flex-col items-center justify-center p-4 text-center overflow-hidden">
              {/* Halftone / scanline effect */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent,transparent_2px,rgba(0,0,0,0.04)_2px,rgba(0,0,0,0.04)_4px)] pointer-events-none"></div>
              
              {/* Monogram Seal Silhouette */}
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-black flex items-center justify-center mb-3 bg-white">
                <Fingerprint className="w-10 h-10 text-black" />
              </div>

              <span className="font-typewriter text-xs font-bold tracking-widest text-black uppercase">
                {RESUME_DATA.personal.name}
              </span>
              <span className="font-mono-tech text-[10px] text-neutral-600 mt-1">
                CSE • Security & Forensics
              </span>
              <span className="font-mono-tech text-[9px] bg-black text-white px-2 py-0.5 mt-1 font-semibold">
                Keshav Memorial Engg. College
              </span>

              {/* Hand-written caption */}
              <div className="mt-3 pt-2 border-t border-black/20 w-full text-center">
                <span className="font-handwriting text-sm text-neutral-800 font-bold">
                  "Active researcher in digital forensics, decentralized systems & applied AI."
                </span>
              </div>
            </div>

            {/* Metadata Card Below Photo */}
            <div className="mt-3 pt-2 border-t border-black/20 font-mono-tech text-[10px] space-y-1 text-neutral-800">
              <div className="flex justify-between">
                <span className="text-neutral-500 font-medium">STATION:</span>
                <span className="font-bold">{RESUME_DATA.personal.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 font-medium">CLASSIFICATION:</span>
                <span className="font-bold text-black border-b border-black">RESTRICTED ACCESS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 font-medium">PORTFOLIO ED.:</span>
                <span className="font-bold">VOL. 1 (2026)</span>
              </div>
            </div>
          </div>

          {/* Quick Dispatch Links */}
          <div className="mt-4 flex flex-wrap justify-center gap-2 font-mono-tech text-[10px]">
            <a
              href={`mailto:${RESUME_DATA.personal.email}`}
              className="inline-flex items-center gap-1 px-3 py-1 border border-black hover:bg-black hover:text-white transition-colors text-black font-bold"
            >
              <Mail className="w-3 h-3" />
              <span>Email</span>
            </a>
            <a
              href={RESUME_DATA.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1 border border-black hover:bg-black hover:text-white transition-colors text-black font-bold"
            >
              <GithubIcon className="w-3 h-3" />
              <span>GitHub</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>
            <a
              href={RESUME_DATA.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1 border border-black hover:bg-black hover:text-white transition-colors text-black font-bold"
            >
              <LinkedinIcon className="w-3 h-3" />
              <span>LinkedIn</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60" />
            </a>
          </div>
        </div>

        {/* Running Footnote */}
        <div className="pt-2 border-t border-black/20 flex justify-between items-center text-[10px] font-mono-tech text-neutral-600">
          <span>THE ARCHIVE OF A CYBERSECURITY RESEARCHER</span>
          <span className="font-typewriter font-bold text-black">PAGE 01</span>
        </div>
      </div>

      {/* RIGHT PAGE: MASTER CATALOGUE (TABLE OF CONTENTS) */}
      <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between relative">
        {/* Header with Catalogue Number */}
        <div className="border-b-2 border-double border-black pb-3 flex justify-between items-end">
          <div>
            <span className="font-mono-tech text-[9px] uppercase tracking-[0.3em] text-neutral-600 block">
              GENERAL INDEX & CONTENTS
            </span>
            <h2 className="font-typewriter text-2xl sm:text-3xl font-bold uppercase tracking-wider text-black">
              CATALOGUE
            </h2>
          </div>
          <ArchivalStamp text="OFFICIAL RECORD" variant="olive" rotation={2} />
        </div>

        {/* Handwritten Instruction */}
        <div className="my-2">
          <HandwrittenNote arrow="down" rotation={-1.5} color="#000000">
            Click any section below to inspect the corresponding field notes
          </HandwrittenNote>
        </div>

        {/* Index Table with Dotted Leader Lines */}
        <div className="my-auto space-y-2 py-1">
          {indexEntries.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onNavigateToSpread(item.spread)}
              className="w-full text-left group flex items-baseline justify-between py-1 px-2 hover:bg-black hover:text-white rounded-xs transition-colors cursor-pointer"
            >
              <div className="flex items-baseline gap-2.5 overflow-hidden mr-2">
                <span className="font-mono-tech text-[10px] font-bold text-black group-hover:text-white flex-shrink-0">
                  {item.num}
                </span>
                <span className="font-serif-vintage text-sm font-bold text-black group-hover:text-white truncate transition-colors">
                  {item.title}
                </span>
              </div>
              
              {/* Dotted Leader Line */}
              <div className="flex-1 mx-2 border-b border-dotted border-black/30 mb-1 group-hover:border-white/50"></div>

              {/* Page Number */}
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <span className="font-typewriter text-xs font-bold text-black group-hover:text-white">
                  p. {String(item.page).padStart(2, '0')}
                </span>
                <span className="opacity-0 group-hover:opacity-100 text-white text-xs font-bold transition-opacity">
                  →
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Archival Seal & Running Footer */}
        <div className="pt-2 border-t border-black/20 flex justify-between items-center text-[10px] font-mono-tech text-neutral-600">
          <span className="font-handwriting text-base text-neutral-800 font-bold">
            * All citations verifiable via institutional & conference repositories.
          </span>
          <span className="font-typewriter font-bold text-black">PAGE 02</span>
        </div>
      </div>
    </div>
  );
};
