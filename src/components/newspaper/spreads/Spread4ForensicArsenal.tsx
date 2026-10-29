import React from 'react';
import { RESUME_DATA } from '../../../data/resumeData';
import { NewspaperStamp } from '../elements/NewspaperStamp';
import { HandwrittenNote } from '../../HandwrittenNote';
import { ShieldCheck, Terminal, Cpu } from 'lucide-react';

export const Spread4ForensicArsenal: React.FC = () => {
  const smia = RESUME_DATA.projects.find((p) => p.id === 'smia')!;
  const alcoholProject = RESUME_DATA.projects.find((p) => p.id === 'alcohol-detector')!;
  const { skills, certifications } = RESUME_DATA;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
      {/* LEFT PAGE: PAGE 07 — FORENSIC & HARDWARE SPECIMENS */}
      <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#141210]/20 relative">
        <div>
          {/* Header */}
          <div className="border-b-2 border-[#141210] pb-2 mb-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
                  APPLIED INVESTIGATIONS // SECTION 07
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-[#141210]">
                  FORENSIC TOOLS & EMBEDDED CONTROL
                </h3>
              </div>
              <NewspaperStamp text="LAW ENFORCEMENT" variant="crimson" rotation={-2} />
            </div>
            <p className="font-newsreader text-xs italic text-[#4a423a] mt-0.5">
              "Judicial chain-of-custody evidence collectors and automotive embedded sensor interlocks."
            </p>
          </div>

          {/* Specimen 003-P: SMIA Investigator */}
          <div className="p-3 bg-[#ece4cf]/60 border border-[#141210] space-y-1.5 shadow-xs">
            <div className="flex justify-between items-baseline">
              <span className="font-mono-tech text-[9px] uppercase tracking-wider text-[#8C3833] font-bold">
                {smia.specimenNo} // JUDICIAL ADMISSIBILITY
              </span>
              <span className="font-mono-tech text-[9.5px] text-[#5a5047]">
                {smia.dateRange}
              </span>
            </div>

            <h4 className="font-serif-vintage text-base font-bold text-[#141210]">
              {smia.title}
            </h4>
            <div className="font-mono-tech text-[10px] text-[#4b4e39] font-bold">
              {smia.subtitle}
            </div>

            <p className="font-serif-vintage text-[11.5px] text-[#141210]/90 leading-snug">
              <strong className="font-sans font-bold text-[#8C3833]">DEFICIENCY: </strong>{smia.problem}
            </p>

            <div className="p-2 bg-[#8C3833]/10 border-l-2 border-[#8C3833] text-[9.5px] font-mono-tech text-[#2a2521]">
              <span className="font-bold text-[#8C3833] block">JUDICIAL ADMISSIBILITY:</span>
              {smia.verifiedOutcomes}
            </div>

            <div className="flex flex-wrap gap-1 font-mono-tech text-[8.5px] pt-1">
              {smia.technologies.map((t, i) => (
                <span key={i} className="px-1.5 py-0.5 border border-[#141210]/30 bg-[#f5f0e1] text-[#141210] font-semibold">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Specimen 004-P: Alcohol Detector Interlock */}
          <div className="mt-2.5 p-3 bg-[#ece4cf]/60 border border-[#141210] space-y-1.5 shadow-xs">
            <div className="flex justify-between items-baseline">
              <span className="font-mono-tech text-[9px] uppercase tracking-wider text-[#4b4e39] font-bold">
                {alcoholProject.specimenNo} // AUTOMOTIVE SAFETY
              </span>
              <span className="font-mono-tech text-[9.5px] text-[#5a5047]">
                {alcoholProject.dateRange}
              </span>
            </div>

            <h4 className="font-serif-vintage text-base font-bold text-[#141210]">
              {alcoholProject.title}
            </h4>
            <div className="font-mono-tech text-[10px] text-[#8C3833] font-bold">
              {alcoholProject.subtitle}
            </div>

            <p className="font-serif-vintage text-[11.5px] text-[#141210]/90 leading-snug">
              <strong className="font-sans font-bold text-[#4b4e39]">CIRCUITRY: </strong>{alcoholProject.approach}
            </p>

            <div className="p-2 bg-[#ece4cf] border border-[#141210]/30 font-mono-tech text-[9px] text-[#2a2521]">
              <span className="font-bold block text-[#141210]">HARDWARE SIGNAL PATHWAY:</span>
              MQ-3 Sensor ➔ Arduino Analog ADC ➔ Real-Time Threshold Logic ➔ Relay Ignition Cutoff
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={-1.5} arrow="down" color="#8C3833">
              {smia.handwrittenNote}
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a5047]">
            <span>THE CHRONICLE // INVESTIGATIVE SPECIMENS</span>
            <span className="font-typewriter font-bold text-[#141210]">PAGE 07</span>
          </div>
        </div>
      </div>

      {/* RIGHT PAGE: PAGE 08 — ARSENAL INVENTORY & CERTIFICATIONS */}
      <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-between relative">
        <div>
          {/* Header */}
          <div className="border-b-2 border-[#141210] pb-2 mb-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
                  TECHNICAL ARSENAL // SECTION 08
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-[#141210]">
                  SPECIMEN INVENTORY & DIPLOMAS
                </h3>
              </div>
              <NewspaperStamp text="87% NLU ODISHA" variant="crimson" rotation={2} />
            </div>
            <p className="font-newsreader text-xs italic text-[#4a423a] mt-0.5">
              "Comprehensive classified inventory of forensic utilities, languages, and institutional accreditations."
            </p>
          </div>

          {/* Technical Categories */}
          <div className="space-y-2 font-mono-tech text-[9.5px]">
            {/* Category 1: Digital Forensics & Security */}
            <div className="p-2 bg-[#ece4cf]/60 border border-[#141210]">
              <span className="font-bold text-[#8C3833] uppercase flex items-center gap-1 mb-1">
                <ShieldCheck className="w-3 h-3 text-[#8C3833]" />
                <span>CYBERSECURITY & DIGITAL FORENSICS</span>
              </span>
              <div className="flex flex-wrap gap-1">
                {skills.cybersecurityAndForensics.map((s, i) => (
                  <span key={i} className="px-1.5 py-0.5 bg-[#f5f0e1] border border-[#141210]/30 text-[#141210]">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 2: Forensic Tools */}
            <div className="p-2 bg-[#ece4cf]/60 border border-[#141210]">
              <span className="font-bold text-[#4b4e39] uppercase flex items-center gap-1 mb-1">
                <Terminal className="w-3 h-3 text-[#4b4e39]" />
                <span>FORENSIC TOOLS & UTILITIES</span>
              </span>
              <div className="flex flex-wrap gap-1">
                {skills.securityTools.map((s, i) => (
                  <span key={i} className="px-1.5 py-0.5 bg-[#f5f0e1] border border-[#141210]/30 text-[#141210] font-bold">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 3: Programming Languages */}
            <div className="p-2 bg-[#ece4cf]/60 border border-[#141210]">
              <span className="font-bold text-[#141210] uppercase flex items-center gap-1 mb-1">
                <Cpu className="w-3 h-3 text-[#141210]" />
                <span>PROGRAMMING LANGUAGES & DISTRIBUTED</span>
              </span>
              <div className="flex flex-wrap gap-1">
                {[...skills.programmingLanguages, ...skills.distributedSystems].map((s, i) => (
                  <span key={i} className="px-1.5 py-0.5 bg-[#f5f0e1] border border-[#141210]/30 text-[#141210]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Roster */}
          <div className="mt-3 space-y-1.5">
            <div className="font-mono-tech text-[9.5px] uppercase font-bold text-[#141210] tracking-wider border-b border-[#141210]/20 pb-0.5">
              ACCREDITED CERTIFICATIONS & DIPLOMAS
            </div>
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-2 bg-[#ece4cf]/50 border border-[#141210]/30 flex items-start justify-between gap-2"
              >
                <div>
                  <h5 className="font-serif-vintage text-xs font-bold text-[#141210] leading-tight">
                    {cert.title}
                  </h5>
                  <span className="font-mono-tech text-[9px] text-[#5a5047]">
                    {cert.issuer} • {cert.date}
                  </span>
                </div>
                {cert.score && (
                  <span className="font-mono-tech text-[9px] font-bold text-[#8C3833] bg-[#8C3833]/10 px-1.5 py-0.5 border border-[#8C3833]/30 flex-shrink-0">
                    {cert.score}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={1} arrow="left" color="#8C3833">
              National Law University Odisha 87% distinction in Cyber Forensics!
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a5047]">
            <span>THE CHRONICLE // ARSENAL INVENTORY</span>
            <span className="font-typewriter font-bold text-[#141210]">PAGE 08</span>
          </div>
        </div>
      </div>
    </div>
  );
};
