import React from 'react';
import { NewspaperHeader } from '../NewspaperHeader';
import { NewspaperFooter } from '../NewspaperFooter';
import { RESUME_DATA } from '../../../data/resumeData';
import { ArchivalStamp } from '../../ArchivalStamp';
import { HandwrittenNote } from '../../HandwrittenNote';
import { Trophy } from 'lucide-react';

interface NewsPageProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

export const NewsPage5: React.FC<NewsPageProps> = ({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
}) => {
  const { achievements, certifications, skills } = RESUME_DATA;

  return (
    <article className="w-full flex flex-col justify-between">
      <NewspaperHeader
        pageNumber={currentPage}
        totalPages={totalPages}
        subTitle="HONOURS, ACCREDITATIONS & TECHNICAL ARSENAL"
        category="COMPETITIVE LAURELS & INVENTORY"
        date="OCTOBER 28, 2026"
      />

      <div className="space-y-4">
        {/* UPPER SECTION: Two National Competitive Honours */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-3 border-b border-[#1f1d19]/25">
          {/* Achievement 1: Aurora Contest */}
          <div className="p-3 bg-[#e8deca]/50 border-2 border-[#1f1d19] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start border-b border-[#1f1d19]/20 pb-1 mb-2">
                <div className="flex items-center gap-1.5 font-typewriter text-sm font-bold text-[#8C3833]">
                  <Trophy className="w-4 h-4 text-[#8C3833]" />
                  <span>1ST PLACE — NATIONAL CODING CONTEST</span>
                </div>
                <ArchivalStamp text="1ST PLACE" variant="red" rotation={-2} date={achievements[0].date} />
              </div>

              <div className="font-mono-tech text-[10px] text-[#5b583f] font-semibold mb-1">
                {achievements[0].issuer}
              </div>

              <p className="font-serif-vintage text-xs text-[#26231e] leading-relaxed text-justify mb-2">
                {achievements[0].description}
              </p>
            </div>

            <div className="p-1.5 bg-[#8C3833]/10 border-l-2 border-[#8C3833] font-mono-tech text-[10px] text-[#8C3833] font-bold">
              ★ {achievements[0].highlightMetric}
            </div>
          </div>

          {/* Achievement 2: Techtonic Winner */}
          <div className="p-3 bg-[#e8deca]/50 border-2 border-[#1f1d19] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start border-b border-[#1f1d19]/20 pb-1 mb-2">
                <div className="flex items-center gap-1.5 font-typewriter text-sm font-bold text-[#5b583f]">
                  <Trophy className="w-4 h-4 text-[#5b583f]" />
                  <span>1ST PLACE — TECHTONIC '24 HACKATHON</span>
                </div>
                <ArchivalStamp text="CHAMPION" variant="olive" rotation={2} date={achievements[1].date} />
              </div>

              <div className="font-mono-tech text-[10px] text-[#8C3833] font-semibold mb-1">
                {achievements[1].issuer}
              </div>

              <p className="font-serif-vintage text-xs text-[#26231e] leading-relaxed text-justify mb-2">
                {achievements[1].description}
              </p>
            </div>

            <div className="p-1.5 bg-[#5b583f]/10 border-l-2 border-[#5b583f] font-mono-tech text-[10px] text-[#5b583f] font-bold">
              ★ {achievements[1].highlightMetric}
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: Certifications & Technical Arsenal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left Column (5 cols): Accreditations List */}
          <div className="lg:col-span-5 space-y-1.5">
            <h4 className="font-typewriter text-xs font-bold uppercase tracking-wider text-[#1f1d19] border-b border-[#1f1d19]/20 pb-1 mb-1">
              ARCHIVAL CERTIFICATIONS ROSTER
            </h4>
            <div className="space-y-1.5">
              {certifications.map((c, i) => (
                <div key={i} className="p-1.5 border border-[#1f1d19]/20 bg-[#f4eedd] flex items-center justify-between text-[9.5px] font-mono-tech">
                  <div className="truncate mr-1">
                    <span className="font-bold text-[#1f1d19] block truncate">{c.title}</span>
                    <span className="text-[#686158] block">{c.issuer}</span>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-[#5b583f] block">{c.date}</span>
                    {c.score && (
                      <span className="font-bold text-[#8C3833] bg-[#8C3833]/10 px-1 py-0.2 border border-[#8C3833]/30">
                        {c.score}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (7 cols): Classified Specimen Categories */}
          <div className="lg:col-span-7 space-y-2">
            <h4 className="font-typewriter text-xs font-bold uppercase tracking-wider text-[#1f1d19] border-b border-[#1f1d19]/20 pb-1 mb-1">
              CLASSIFIED TECHNICAL ARSENAL
            </h4>
            
            <div className="p-2 border border-[#1f1d19]/20 bg-[#1f1d19]/3">
              <span className="font-mono-tech text-[9px] uppercase font-bold text-[#8C3833] block mb-0.5">
                CYBERSECURITY & FORENSIC ARSENAL:
              </span>
              <div className="flex flex-wrap gap-1 font-mono-tech text-[9px]">
                {[...skills.cybersecurityAndForensics, ...skills.securityTools].map((s, idx) => (
                  <span key={idx} className="px-1.5 py-0.5 border border-[#1f1d19]/25 bg-[#f4eedd] text-[#1f1d19]">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-2 border border-[#1f1d19]/20 bg-[#1f1d19]/3">
              <span className="font-mono-tech text-[9px] uppercase font-bold text-[#5b583f] block mb-0.5">
                LANGUAGES, BACKEND & PROTOCOLS:
              </span>
              <div className="flex flex-wrap gap-1 font-mono-tech text-[9px]">
                {[...skills.programmingLanguages, ...skills.backendAndWeb, ...skills.distributedSystems].map((s, idx) => (
                  <span key={idx} className="px-1.5 py-0.5 border border-[#1f1d19]/25 bg-[#f4eedd] text-[#1f1d19]">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-2 border border-[#1f1d19]/20 bg-[#1f1d19]/3">
              <span className="font-mono-tech text-[9px] uppercase font-bold text-[#1f1d19] block mb-0.5">
                AI, MOBILE & ENVIRONMENTS:
              </span>
              <div className="flex flex-wrap gap-1 font-mono-tech text-[9px]">
                {[...skills.aiAndAppliedData, ...skills.mobileAndApp, ...skills.environmentsAndTools.slice(0, 7)].map((s, idx) => (
                  <span key={idx} className="px-1.5 py-0.5 border border-[#1f1d19]/25 bg-[#f4eedd] text-[#1f1d19]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Cadre, Societies & Leadership */}
        <div className="pt-1 border-t border-[#1f1d19]/20 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono-tech">
          <div className="flex flex-wrap items-center gap-2 text-[#4a443c]">
            <span className="font-bold text-[#1f1d19]">CADRE & SOCIETIES:</span>
            <span>CSI KMEC Social Media Head</span> •
            <span>NCC Candidate (A Certificate)</span> •
            <span>NSS Volunteer</span> •
            <span>Martial Arts Practitioner</span>
          </div>
          <HandwrittenNote rotation={1} arrow="left" color="#8C3833">
            National Law University Odisha 90% Distinction!
          </HandwrittenNote>
        </div>
      </div>

      <NewspaperFooter
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
        bannerText="FINAL PAGE: TELEGRAPH DISPATCH & OFFICIAL RESUME (PAGE 6 ➔)"
      />
    </article>
  );
};
