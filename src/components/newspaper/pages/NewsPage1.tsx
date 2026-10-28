import React from 'react';
import { NewspaperHeader } from '../NewspaperHeader';
import { NewspaperFooter } from '../NewspaperFooter';
import { RESUME_DATA } from '../../../data/resumeData';
import { ArchivalStamp } from '../../ArchivalStamp';
import { HandwrittenNote } from '../../HandwrittenNote';
import { Shield, Fingerprint, Camera, Award } from 'lucide-react';

interface NewsPageProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

export const NewsPage1: React.FC<NewsPageProps> = ({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
}) => {
  return (
    <article className="w-full flex flex-col justify-between">
      {/* Top Broadsheet Masthead */}
      <NewspaperHeader
        pageNumber={currentPage}
        totalPages={totalPages}
        subTitle="SPECIAL DISPATCH: CYBERSECURITY RESEARCH DOSSIER"
        category="LEAD STORY & RESEARCHER PROFILE"
        date="OCTOBER 28, 2026"
      />

      {/* Main Newspaper Editorial Grid */}
      <div className="space-y-4">
        {/* UPPER SECTION: Large Featured Archival Photograph Plate & Right Date Column (Matching Reference Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pb-4 border-b border-[#1f1d19]/25">
          {/* Large Photo Placeholder Frame (8 cols on lg) */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="p-3 bg-[#e8deca]/70 border-2 border-[#1f1d19] shadow-md relative">
              {/* Retro Film Camera / Lens Evidence Illustration */}
              <div className="relative aspect-[16/9] sm:aspect-[21/10] bg-gradient-to-b from-[#dfd2bb] to-[#c7b79a] border border-[#1f1d19]/60 flex flex-col items-center justify-center p-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent,transparent_2px,rgba(0,0,0,0.035)_2px,rgba(0,0,0,0.035)_4px)]"></div>
                
                {/* Vintage Camera & Monogram Graphic */}
                <div className="relative z-10 flex items-center justify-center gap-4 mb-2">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-dashed border-[#1f1d19]/50 bg-[#f4eedd]/50 flex items-center justify-center shadow-inner">
                    <Camera className="w-8 h-8 text-[#1f1d19]/80" />
                  </div>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#8C3833] bg-[#8C3833]/10 flex items-center justify-center">
                    <Fingerprint className="w-8 h-8 text-[#8C3833]" />
                  </div>
                </div>

                <div className="relative z-10">
                  <span className="font-typewriter text-base sm:text-lg font-bold tracking-widest text-[#1f1d19] uppercase block">
                    ABHISHEK MATHPATI
                  </span>
                  <span className="font-mono-tech text-[11px] text-[#5a544b] tracking-wider block">
                    B.E. Computer Science & Engineering • Keshav Memorial Engineering College
                  </span>
                </div>

                {/* Corner Stamp */}
                <div className="absolute bottom-2 right-2">
                  <ArchivalStamp text="VERIFIED EVIDENCE" variant="red" rotation={-3} date="2026" />
                </div>
              </div>

              {/* Photo Caption (Matching Vintage Editorial Style) */}
              <div className="mt-2 text-[10px] sm:text-[11px] font-serif-vintage italic text-[#4a443c] leading-snug">
                <strong>PLATE NO. 1:</strong> Archival dossier portrait of Abhishek Mathpati, candidate in Computer Science & Engineering specializing in active digital forensics, empirical LLM security benchmarks, and decentralized privacy-preserving protocols.
              </div>
            </div>
          </div>

          {/* Right Lead Story Column (4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col justify-between pl-0 lg:pl-2">
            <div>
              {/* Date Header matching reference image: "APRIL 1, 2045" */}
              <div className="border-b-2 border-[#1f1d19] pb-1 mb-2">
                <h3 className="font-display text-xl sm:text-2xl font-black text-[#1f1d19] tracking-wider uppercase">
                  OCTOBER 2026
                </h3>
              </div>

              <p className="font-serif-vintage text-xs sm:text-sm text-[#26231e] leading-relaxed text-justify first-letter:font-typewriter first-letter:text-4xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-[#8C3833]">
                A rigorously compiled archive of cybersecurity engineering, forensic investigations, and empirical research monographs is published this season. Graduating in 2026 from Keshav Memorial Engineering College, Abhishek Mathpati brings systematic digital forensics, open-source intelligence (OSINT), and tamper-evident decentralized architectures into modern computational defense.
              </p>

              <div className="mt-3 p-2 border border-[#1f1d19]/25 bg-[#1f1d19]/3">
                <span className="font-mono-tech text-[9px] uppercase font-bold text-[#8C3833] block mb-0.5">
                  STATION & CREDENTIALS:
                </span>
                <div className="font-mono-tech text-[10px] text-[#332f28] space-y-0.5">
                  <div>• LOCATION: Hyderabad, Telangana, India</div>
                  <div>• DEGREE: B.E. Computer Science & Engg. (2022–2026)</div>
                  <div>• CGPA: 8.41 / 10 (First Class with Distinction)</div>
                </div>
              </div>
            </div>

            {/* Pull Quote Matching Reference Image */}
            <div className="my-3 py-2 px-3 border-y-2 border-double border-[#1f1d19]/40 bg-[#1f1d19]/3 text-center">
              <span className="font-serif-vintage italic text-sm sm:text-base font-bold text-[#1f1d19] block leading-snug">
                “TIMELESS DISCIPLINE, TAMPER-EVIDENT FORENSICS & RIGOROUS EVIDENCE.”
              </span>
            </div>
          </div>
        </div>

        {/* LOWER SECTION: Three News Columns (Matching Reference Bottom Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {/* Column 1: Core Research Pillars */}
          <div className="news-col-rule pr-0 md:pr-4">
            <h4 className="font-typewriter text-xs font-bold uppercase tracking-wider text-[#1f1d19] border-b border-[#1f1d19]/20 pb-1 mb-2 flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-[#8C3833]" />
              <span>I. THREE CORE PILLARS</span>
            </h4>
            <div className="space-y-2 font-serif-vintage text-xs text-[#26231e] leading-relaxed text-justify">
              <p>
                <strong>1. Digital Forensics:</strong> Applied during active fieldwork with the Women Safety Wing, Telangana Police; specializing in OSINT threat tracing and court-admissible evidence documentation.
              </p>
              <p>
                <strong>2. Decentralized Protocols:</strong> Engineered peer-to-peer storage with IPFS, smart contract ledger anchoring, and Shamir's Secret Sharing to eradicate single points of failure.
              </p>
              <p>
                <strong>3. Applied AI Security:</strong> Empirical benchmarking of 5 open-weight LLMs (Llama-3.2, Qwen-2.5) across 2,500 queries mapping the multi-objective Pareto safety frontier.
              </p>
            </div>
          </div>

          {/* Column 2: Academic Ledger */}
          <div className="news-col-rule pr-0 md:pr-4">
            <h4 className="font-typewriter text-xs font-bold uppercase tracking-wider text-[#1f1d19] border-b border-[#1f1d19]/20 pb-1 mb-2 flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-[#5b583f]" />
              <span>II. SCHOLARLY TIMELINE</span>
            </h4>
            <div className="space-y-2 font-mono-tech text-[10.5px] text-[#332f28]">
              <div className="p-1.5 border border-[#1f1d19]/20 bg-[#1f1d19]/3">
                <span className="font-bold text-[#1f1d19] block">B.E. Computer Science & Engg.</span>
                <span className="text-[#5b583f] block">Keshav Memorial Engineering College</span>
                <div className="flex justify-between text-[9.5px] text-[#686158] mt-0.5">
                  <span>2022 – 2026</span>
                  <span className="font-bold text-[#8C3833]">8.41 / 10 CGPA</span>
                </div>
              </div>

              <div className="p-1.5 border border-[#1f1d19]/20 bg-[#1f1d19]/3">
                <span className="font-bold text-[#1f1d19] block">12th TSBIE (Maths, Physics, Chem)</span>
                <span className="text-[#5b583f] block">Narayana Junior College</span>
                <div className="flex justify-between text-[9.5px] text-[#686158] mt-0.5">
                  <span>2020 – 2022</span>
                  <span className="font-bold text-[#8C3833]">96.9% Distinction</span>
                </div>
              </div>

              <div className="p-1.5 border border-[#1f1d19]/20 bg-[#1f1d19]/3">
                <span className="font-bold text-[#1f1d19] block">10th SSC (General Sciences)</span>
                <span className="text-[#5b583f] block">St. Mark’s Boys Town High School</span>
                <div className="flex justify-between text-[9.5px] text-[#686158] mt-0.5">
                  <span>2019 – 2020</span>
                  <span className="font-bold text-[#8C3833]">10.0 / 10 GPA Perfect</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Spoken Languages & Handwritten Dispatch */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="font-typewriter text-xs font-bold uppercase tracking-wider text-[#1f1d19] border-b border-[#1f1d19]/20 pb-1 mb-2">
                III. LINGUISTIC PROFICIENCY
              </h4>
              <div className="grid grid-cols-2 gap-1 font-mono-tech text-[9.5px]">
                {RESUME_DATA.personal.languagesSpoken.map((lang, idx) => (
                  <div key={idx} className="p-1 border border-[#1f1d19]/20 bg-[#f4eedd] text-[#1f1d19]">
                    <span className="font-bold block">{lang.name}</span>
                    <span className="text-[8.5px] text-[#686158]">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 text-right">
              <HandwrittenNote rotation={-2} arrow="down" color="#8C3833">
                Turn over broadsheet for active police investigations & field notes →
              </HandwrittenNote>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Double-Border Banner Matching Reference Image */}
      <NewspaperFooter
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
        bannerText="READ MORE AT GITHUB.COM/ABHISHEK-MATHPATI"
      />
    </article>
  );
};
