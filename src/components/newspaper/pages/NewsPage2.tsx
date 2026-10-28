import React from 'react';
import { NewspaperHeader } from '../NewspaperHeader';
import { NewspaperFooter } from '../NewspaperFooter';
import { RESUME_DATA } from '../../../data/resumeData';
import { ArchivalStamp } from '../../ArchivalStamp';
import { HandwrittenNote } from '../../HandwrittenNote';
import { ForensicWorkflowDiagram } from '../../ArchivalDiagrams';

interface NewsPageProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

export const NewsPage2: React.FC<NewsPageProps> = ({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
}) => {
  const policeExp = RESUME_DATA.experience.find((e) => e.id === 'telangana-police')!;
  const teleparadigmExp = RESUME_DATA.experience.find((e) => e.id === 'teleparadigm')!;

  return (
    <article className="w-full flex flex-col justify-between">
      <NewspaperHeader
        pageNumber={currentPage}
        totalPages={totalPages}
        subTitle="FIELD DOSSIER: LAW ENFORCEMENT & DECENTRALIZED SYSTEMS"
        category="INVESTIGATIVE FIELD EXPERIENCE"
        date="OCTOBER 28, 2026"
      />

      <div className="space-y-4">
        {/* UPPER LEAD SECTION: Two Major Case Reports */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-3 border-b border-[#1f1d19]/25">
          {/* Case Report 1: Telangana Police */}
          <div className="p-3 bg-[#e8deca]/50 border-2 border-[#1f1d19] flex flex-col justify-between relative">
            <div>
              <div className="flex justify-between items-start border-b border-[#1f1d19]/25 pb-1 mb-2">
                <div>
                  <span className="font-mono-tech text-[9px] uppercase tracking-wider text-[#8C3833] font-bold block">
                    CASE DOSSIER // LAW ENFORCEMENT
                  </span>
                  <h3 className="font-typewriter text-lg sm:text-xl font-bold uppercase text-[#1f1d19]">
                    TELANGANA POLICE DEPT.
                  </h3>
                </div>
                <ArchivalStamp text={policeExp.stampText} variant="red" rotation={-2} date={policeExp.dates} />
              </div>

              <div className="font-mono-tech text-[10px] text-[#5b583f] font-semibold mb-2">
                ROLE: {policeExp.role} ({policeExp.dates}) • {policeExp.organization}
              </div>

              <div className="space-y-1.5 font-serif-vintage text-xs text-[#26231e] leading-relaxed text-justify">
                {policeExp.responsibilities.map((r, i) => (
                  <p key={i}>
                    <strong>§ {i + 1}.</strong> {r}
                  </p>
                ))}
              </div>

              <div className="mt-2 pt-2 border-t border-[#1f1d19]/15">
                <span className="font-mono-tech text-[9px] uppercase font-bold text-[#686158] block mb-1">
                  TOOLS & METHODOLOGIES DEPLOYED:
                </span>
                <div className="flex flex-wrap gap-1 font-mono-tech text-[9px]">
                  {policeExp.toolsUsed.map((tool, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 border border-[#1f1d19]/30 bg-[#f4eedd] text-[#1f1d19]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-3 p-1.5 bg-[#8C3833]/10 border-l-2 border-[#8C3833] font-mono-tech text-[9.5px] text-[#8C3833] font-bold">
              VERIFIED OUTCOME: {policeExp.verifiedOutcomes}
            </div>
          </div>

          {/* Case Report 2: Teleparadigm Networks */}
          <div className="p-3 bg-[#e8deca]/50 border-2 border-[#1f1d19] flex flex-col justify-between relative">
            <div>
              <div className="flex justify-between items-start border-b border-[#1f1d19]/25 pb-1 mb-2">
                <div>
                  <span className="font-mono-tech text-[9px] uppercase tracking-wider text-[#5b583f] font-bold block">
                    ENGINEERING DOSSIER // DISTRIBUTED NODES
                  </span>
                  <h3 className="font-typewriter text-lg sm:text-xl font-bold uppercase text-[#1f1d19]">
                    TELEPARADIGM NETWORKS
                  </h3>
                </div>
                <ArchivalStamp text={teleparadigmExp.stampText} variant="olive" rotation={2} date={teleparadigmExp.dates} />
              </div>

              <div className="font-mono-tech text-[10px] text-[#8C3833] font-semibold mb-2">
                ROLE: {teleparadigmExp.role} ({teleparadigmExp.dates}) • {teleparadigmExp.organization}
              </div>

              <div className="space-y-1.5 font-serif-vintage text-xs text-[#26231e] leading-relaxed text-justify">
                {teleparadigmExp.responsibilities.map((r, i) => (
                  <p key={i}>
                    <strong>§ {i + 1}.</strong> {r}
                  </p>
                ))}
              </div>

              <div className="mt-2 pt-2 border-t border-[#1f1d19]/15">
                <span className="font-mono-tech text-[9px] uppercase font-bold text-[#686158] block mb-1">
                  PROTOCOLS & STACK:
                </span>
                <div className="flex flex-wrap gap-1 font-mono-tech text-[9px]">
                  {teleparadigmExp.toolsUsed.map((tool, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 border border-[#1f1d19]/30 bg-[#f4eedd] text-[#1f1d19]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-3 p-1.5 bg-[#5b583f]/10 border-l-2 border-[#5b583f] font-mono-tech text-[9.5px] text-[#5b583f] font-bold">
              VERIFIED OUTCOME: {teleparadigmExp.verifiedOutcomes}
            </div>
          </div>
        </div>

        {/* LOWER SECTION: Technical Forensic Schematics & Editorial Commentary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div>
            <h4 className="font-typewriter text-xs font-bold uppercase tracking-wider text-[#1f1d19] mb-1">
              FIG. 3.4 — JUDICIAL FORENSIC PIPELINE
            </h4>
            <ForensicWorkflowDiagram />
          </div>

          <div className="flex flex-col justify-between">
            <div className="p-3 border border-[#1f1d19]/25 bg-[#1f1d19]/3 font-serif-vintage text-xs leading-relaxed text-justify">
              <span className="font-typewriter font-bold text-[#8C3833] block mb-1 text-sm uppercase">
                EDITORIAL NOTE: THE CHAIN OF CUSTODY
              </span>
              Digital forensic investigations demand absolute evidentiary hygiene. During police fieldwork, procedures enforced deterministic SHA-256 evidence hashing and RFC-3161 timestamps to guarantee non-repudiation in judicial proceedings.
            </div>

            <div className="mt-2 text-right">
              <HandwrittenNote rotation={-1.5} arrow="left" color="#8C3833">
                {policeExp.handwrittenNote}
              </HandwrittenNote>
            </div>
          </div>
        </div>
      </div>

      <NewspaperFooter
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
        bannerText="TURN OVER FOR PEER-REVIEWED IEEE RESEARCH PAPERS ➔"
      />
    </article>
  );
};
