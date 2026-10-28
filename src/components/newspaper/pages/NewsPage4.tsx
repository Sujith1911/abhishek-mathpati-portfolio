import React from 'react';
import { NewspaperHeader } from '../NewspaperHeader';
import { NewspaperFooter } from '../NewspaperFooter';
import { RESUME_DATA } from '../../../data/resumeData';
import { ArchivalStamp } from '../../ArchivalStamp';

interface NewsPageProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

export const NewsPage4: React.FC<NewsPageProps> = ({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
}) => {
  const [p1, p2, p3, p4, p5] = RESUME_DATA.projects;

  return (
    <article className="w-full flex flex-col justify-between">
      <NewspaperHeader
        pageNumber={currentPage}
        totalPages={totalPages}
        subTitle="THE TECHNICAL BULLETIN: PRODUCTION SYSTEMS & SPECIMENS"
        category="ENGINEERING SPECIMEN DOSSIER"
        date="OCTOBER 28, 2026"
      />

      <div className="space-y-4">
        {/* UPPER SECTION: Two Flagship Systems (SecureShare & QPAT) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-3 border-b border-[#1f1d19]/25">
          {/* Specimen 01: SecureShare */}
          <div className="p-3 bg-[#e8deca]/50 border-2 border-[#1f1d19] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start border-b border-[#1f1d19]/20 pb-1 mb-1.5">
                <div>
                  <span className="font-mono-tech text-[9px] uppercase font-bold text-[#8C3833]">
                    {p1.specimenNo} // FLAGSHIP SYSTEM
                  </span>
                  <h3 className="font-typewriter text-lg font-bold text-[#1f1d19]">
                    {p1.title}
                  </h3>
                </div>
                <ArchivalStamp text="DECENTRALIZED" variant="red" rotation={-2} date={p1.dateRange} />
              </div>

              <div className="font-mono-tech text-[10px] text-[#5b583f] font-semibold mb-2">
                {p1.subtitle}
              </div>

              <div className="space-y-1.5 font-serif-vintage text-xs text-[#26231e] leading-relaxed text-justify mb-2">
                <p><strong>Architecture:</strong> {p1.approach}</p>
                <ul className="space-y-1 font-mono-tech text-[9.5px] text-[#332f28]">
                  {p1.keyImplementations.map((impl, idx) => (
                    <li key={idx} className="flex items-start gap-1">
                      <span className="text-[#8C3833] font-bold">▸</span>
                      <span>{impl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1 font-mono-tech text-[9px] mb-2">
                {p1.technologies.map((t, idx) => (
                  <span key={idx} className="px-1.5 py-0.5 border border-[#1f1d19]/30 bg-[#f4eedd] text-[#1f1d19]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-1.5 bg-[#8C3833]/10 border-l-2 border-[#8C3833] font-mono-tech text-[9.5px] text-[#8C3833] font-bold">
              VERIFIED OUTCOME: {p1.verifiedOutcomes}
            </div>
          </div>

          {/* Specimen 02: QPAT */}
          <div className="p-3 bg-[#e8deca]/50 border-2 border-[#1f1d19] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start border-b border-[#1f1d19]/20 pb-1 mb-1.5">
                <div>
                  <span className="font-mono-tech text-[9px] uppercase font-bold text-[#5b583f]">
                    {p2.specimenNo} // ACADEMIC NLP
                  </span>
                  <h3 className="font-typewriter text-lg font-bold text-[#1f1d19]">
                    {p2.title}
                  </h3>
                </div>
                <ArchivalStamp text="ACADEMIC TOOL" variant="olive" rotation={1} date={p2.dateRange} />
              </div>

              <div className="font-mono-tech text-[10px] text-[#8C3833] font-semibold mb-2">
                {p2.subtitle}
              </div>

              <div className="space-y-1.5 font-serif-vintage text-xs text-[#26231e] leading-relaxed text-justify mb-2">
                <p><strong>Technical Innovation:</strong> {p2.approach}</p>
                <ul className="space-y-1 font-mono-tech text-[9.5px] text-[#332f28]">
                  {p2.keyImplementations.map((impl, idx) => (
                    <li key={idx} className="flex items-start gap-1">
                      <span className="text-[#5b583f] font-bold">▸</span>
                      <span>{impl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bloom's Cognitive Levels Strip */}
              <div className="p-1.5 border border-[#1f1d19]/25 bg-[#1f1d19]/3 text-[9px] font-mono-tech text-center mb-2">
                <span className="font-bold text-[#5b583f] block mb-0.5">BLOOM'S TAXONOMY COGNITIVE LEVELS CLASSIFIER:</span>
                <span className="text-[#8C3833] font-bold">L1–L3: Knowledge/Recall</span> • <span className="text-[#5b583f] font-bold">L4–L5: Analysis/Synthesis</span> • <span className="text-[#1f1d19] font-bold">L6: Evaluation</span>
              </div>
            </div>

            <div className="p-1.5 bg-[#5b583f]/10 border-l-2 border-[#5b583f] font-mono-tech text-[9.5px] text-[#5b583f] font-bold">
              VERIFIED OUTCOME: {p2.verifiedOutcomes}
            </div>
          </div>
        </div>

        {/* LOWER SECTION: Three Field Specimens (SMIA, Techtonic, ParkHub) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
          {/* Specimen 03: SMIA */}
          <div className="p-2.5 bg-[#e8deca]/40 border border-[#1f1d19]/40 flex flex-col justify-between">
            <div>
              <span className="font-mono-tech text-[8.5px] uppercase font-bold text-[#8C3833]">
                {p3.specimenNo} • POLICE FORENSIC APP
              </span>
              <h4 className="font-serif-vintage text-sm font-bold text-[#1f1d19] mb-1">
                {p3.title}
              </h4>
              <p className="font-serif-vintage text-xs text-[#26231e] leading-snug text-justify mb-2">
                {p3.approach} Built with timestamp-validated screenshot evidence capture, secure local storage, and cloud metadata sync.
              </p>
            </div>
            <div className="text-[8.5px] font-mono-tech text-[#8C3833] font-bold border-t border-[#1f1d19]/15 pt-1">
              Zero unauthorized-scraping architecture.
            </div>
          </div>

          {/* Specimen 04: Techtonic Hackathon Winner */}
          <div className="p-2.5 bg-[#e8deca]/40 border border-[#1f1d19]/40 flex flex-col justify-between">
            <div>
              <span className="font-mono-tech text-[8.5px] uppercase font-bold text-[#5b583f]">
                {p4.specimenNo} • 1ST PLACE CHAMPION
              </span>
              <h4 className="font-serif-vintage text-sm font-bold text-[#1f1d19] mb-1">
                {p4.title}
              </h4>
              <p className="font-serif-vintage text-xs text-[#26231e] leading-snug text-justify mb-2">
                Responsive high-performance web portal (HTML/CSS/JS). Outperformed 30+ competing engineering teams at TECHTONIC '24.
              </p>
            </div>
            <div className="text-[8.5px] font-mono-tech text-[#5b583f] font-bold border-t border-[#1f1d19]/15 pt-1">
              Winner among 30+ collegiate engineering teams.
            </div>
          </div>

          {/* Specimen 05: Park Hub */}
          <div className="p-2.5 bg-[#e8deca]/40 border border-[#1f1d19]/40 flex flex-col justify-between">
            <div>
              <span className="font-mono-tech text-[8.5px] uppercase font-bold text-[#1f1d19]">
                {p5.specimenNo} • URBAN MOBILITY
              </span>
              <h4 className="font-serif-vintage text-sm font-bold text-[#1f1d19] mb-1">
                {p5.title}
              </h4>
              <p className="font-serif-vintage text-xs text-[#26231e] leading-snug text-justify mb-2">
                Smart parking app using Flutter and Firebase Realtime DB. Integrated interactive mapping, live spot availability, and dynamic pricing.
              </p>
            </div>
            <div className="text-[8.5px] font-mono-tech text-[#1f1d19] font-bold border-t border-[#1f1d19]/15 pt-1">
              Significantly reduced urban parking search times.
            </div>
          </div>
        </div>
      </div>

      <NewspaperFooter
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
        bannerText="CONTINUED ON PAGE 5: COMPETITIVE HONOURS & ACCREDITATIONS ➔"
      />
    </article>
  );
};
