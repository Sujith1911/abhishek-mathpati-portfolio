import React from 'react';
import {
  ExternalLink,
  Mail,
  Fingerprint,
  CheckCircle,
  Download,
  Send,
} from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';
import { NewspaperMasthead } from './NewspaperMasthead';
import { NewspaperStamp } from './elements/NewspaperStamp';
import { GithubIcon, LinkedinIcon } from '../SocialIcons';
import { HandwrittenNote } from '../HandwrittenNote';

// =========================================================================
// PAGE 01: THE OFFICIAL FRONT COVER (Exact reference from user upload)
// =========================================================================
export const Page01Cover: React.FC<{ onOpenNewspaper?: () => void }> = ({ onOpenNewspaper }) => {
  return (
    <div
      onClick={onOpenNewspaper}
      className="w-full h-full flex flex-col items-center justify-center p-2 sm:p-4 overflow-hidden relative cursor-pointer select-none bg-[#f2f1ec] group"
      role="button"
      tabIndex={0}
      aria-label="The Daily Chronicle - Notes on a Life. Click to open archive."
    >
      <div className="relative h-full max-h-[calc(100vh-2rem)] aspect-[622/877] max-w-full shadow-2xl transition-transform duration-500 rounded-xs overflow-hidden group-hover:scale-[1.008]">
        {/* Exact Cover Graphic */}
        <img
          src="/daily_chronicle_cover.jpg"
          alt="The Daily Chronicle - Notes on a Life"
          className="w-full h-full object-contain pointer-events-none select-none block"
          loading="eager"
        />

        {/* Tactile Click Target over the Button Area */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            onOpenNewspaper?.();
          }}
          className="absolute bottom-[4.5%] left-1/2 -translate-x-1/2 w-[52%] h-[5%] cursor-pointer group-hover:brightness-125 transition-all"
          title="Click to Open Archive"
        />

        {/* Hover Highlight Ring */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#141210]/20 pointer-events-none transition-colors" />
      </div>

      <div className="sr-only">
        <h1>THE DAILY CHRONICLE - VOL 01. 2026</h1>
        <h2>NOTES ON A LIFE</h2>
        <p>A collection of work, thoughts, and curiosities. An ongoing chapter.</p>
        <p>Portfolio of {RESUME_DATA.personal.name}, Cybersecurity Researcher and Engineer.</p>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 02: LEAD DISPATCH & EXECUTIVE OVERVIEW
// =========================================================================
export const Page02Overview: React.FC<{ onNavigateToSpread?: (spread: number) => void }> = ({
  onNavigateToSpread,
}) => {
  return (
    <div className="p-4 sm:p-5 lg:p-6 xl:p-8 flex flex-col justify-between h-full overflow-y-auto relative bg-[#f4f3ef] text-[#141210]">
      <div>
        {/* Masthead */}
        <NewspaperMasthead
          edition="LATE CITY SPECIAL EDITION"
          volume="VOL. XXIV ... NO. 102"
          date="OCTOBER 2026"
          showFullBanner={true}
        />

        {/* Banner Headline */}
        <div className="text-center my-2 pb-2 border-b-2 border-[#141210] cursor-default">
          <h2 className="font-display text-lg sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-[#141210] leading-tight">
            CYBERSECURITY RESEARCHER DEPLOYS DECENTRALIZED PROTOCOLS &amp; FORENSIC SAFEGUARDS
          </h2>
          <p className="font-serif-vintage text-xs sm:text-sm text-[#4a453e] mt-1 font-semibold italic">
            Mythreie Dumpati pairs empirical computer science with court-admissible forensic architectures and applied AI benchmarking.
          </p>
        </div>

        {/* Multi-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mt-1.5">
          {/* Left Column: Portrait & Meta */}
          <div className="sm:col-span-5 flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-[#141210]/20 pr-0 sm:pr-3">
            <div className="relative p-2 bg-[#eae8e2] border border-[#141210] shadow-xs text-center">
              <div className="aspect-[4/5] bg-gradient-to-b from-[#ebe9e3] to-[#dedbd2] border border-[#141210]/40 flex flex-col items-center justify-center p-2 text-center overflow-hidden">
                <img
                  src="/front_cover_portrait.jpg"
                  alt="Mythreie Dumpati Portrait"
                  className="w-full h-full object-cover grayscale contrast-110"
                />
              </div>
              <div className="text-[9px] font-newsreader italic text-[#5a554e] mt-1">
                Fig. 1 — Chief Investigator Mythreie Dumpati (B.E. 2026).
              </div>
            </div>

            <div className="mt-2 pt-2 border-t border-[#141210]/20 font-mono-tech text-[9.5px] space-y-1">
              <div className="flex justify-between">
                <span className="text-[#5a554e]">STATION:</span>
                <span className="font-bold">Hyderabad, India</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5a554e]">STATUS:</span>
                <span className="font-bold text-[#8C3833]">OFFICIAL DOSSIER</span>
              </div>
            </div>

            <div className="mt-2 pt-2 border-t border-[#141210]/20 flex flex-wrap gap-1 font-mono-tech text-[9px]">
              <a
                href={`mailto:${RESUME_DATA.personal.email}`}
                className="px-2 py-0.5 border border-[#141210] hover:bg-[#8C3833] hover:text-white hover:border-[#8C3833] transition-all font-bold inline-flex items-center gap-1 shadow-2xs"
              >
                <Mail className="w-2.5 h-2.5 text-[#8C3833]" />
                <span>Telegraph</span>
              </a>
              <a
                href={RESUME_DATA.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-0.5 border border-[#141210] hover:bg-[#141210] hover:text-[#f5f0e1] transition-all font-bold inline-flex items-center gap-1 shadow-2xs"
              >
                <GithubIcon className="w-2.5 h-2.5" />
                <span>GitHub</span>
                <ExternalLink className="w-2 h-2 opacity-60" />
              </a>
              <a
                href={RESUME_DATA.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-0.5 border border-[#141210] hover:bg-[#141210] hover:text-white transition-all font-bold inline-flex items-center gap-1 shadow-2xs"
              >
                <LinkedinIcon className="w-2.5 h-2.5" />
                <span>LinkedIn</span>
                <ExternalLink className="w-2 h-2 opacity-60" />
              </a>
            </div>
          </div>

          {/* Right Column: Lead Narrative & Index */}
          <div className="sm:col-span-7 flex flex-col justify-between pl-0 sm:pl-1">
            <div>
              <div className="flex items-center justify-between border-b border-[#141210]/20 pb-1 mb-1.5">
                <span className="font-mono-tech text-[9px] uppercase tracking-wider text-[#8C3833] font-bold">
                  SPECIAL DISPATCH REPORT
                </span>
                <NewspaperStamp text="ARCHIVE" variant="crimson" rotation={1} />
              </div>

              <div className="font-serif-vintage text-xs sm:text-[12.5px] leading-relaxed text-[#141210] space-y-2 text-justify">
                <p>
                  HYDERABAD — In an era marked by sophisticated cyber intrusions and evolving adversarial exploits, computer science researcher Mythreie Dumpati has emerged with a multidisciplinary approach bridging digital forensics, decentralized architectures, and applied machine learning security.
                </p>
                <p>
                  Graduating in 2026 from Keshav Memorial Engineering College with an 8.36 CGPA and possessing an earlier foundation in Automobile Engineering (8.8 CGPA from Masab Tank Government Polytechnic College), Dumpati’s recent research spans direct investigative contributions to public safety initiatives across 26 statewide crisis centres, peer-reviewed publications accepted into IEEE conferences, and the development of court-admissible evidence preservation software.
                </p>
              </div>
            </div>

            {/* Quick Index */}
            <div className="mt-2.5 p-2.5 bg-[#eae8e2]/70 border-2 border-[#141210]">
              <div className="flex items-center justify-between border-b border-[#141210] pb-1 mb-1.5 font-mono-tech text-[9px] uppercase tracking-widest font-bold text-[#141210]">
                <span>IN THIS SPECIAL EDITION</span>
                <span className="text-[#8C3833]">[RAPID JUMP]</span>
              </div>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1 font-newsreader text-[11px] leading-tight">
                <button
                  type="button"
                  onClick={() => onNavigateToSpread?.(3)}
                  className="text-left hover:text-[#8C3833] hover:underline cursor-pointer flex justify-between p-0.5 rounded-xs hover:bg-[#141210]/5 transition-colors"
                >
                  <span>§ Academic Timeline</span>
                  <span className="font-mono-tech font-bold text-[9px]">p. 04</span>
                </button>
                <button
                  type="button"
                  onClick={() => onNavigateToSpread?.(3)}
                  className="text-left hover:text-[#8C3833] hover:underline cursor-pointer flex justify-between p-0.5 rounded-xs hover:bg-[#141210]/5 transition-colors"
                >
                  <span>§ Police Bharosa Lab</span>
                  <span className="font-mono-tech font-bold text-[9px]">p. 05</span>
                </button>
                <button
                  type="button"
                  onClick={() => onNavigateToSpread?.(4)}
                  className="text-left hover:text-[#8C3833] hover:underline cursor-pointer flex justify-between p-0.5 rounded-xs hover:bg-[#141210]/5 transition-colors"
                >
                  <span>§ 3 IEEE Publications</span>
                  <span className="font-mono-tech font-bold text-[9px]">p. 06</span>
                </button>
                <button
                  type="button"
                  onClick={() => onNavigateToSpread?.(4)}
                  className="text-left hover:text-[#8C3833] hover:underline cursor-pointer flex justify-between p-0.5 rounded-xs hover:bg-[#141210]/5 transition-colors"
                >
                  <span>§ SecureShare P2P</span>
                  <span className="font-mono-tech font-bold text-[9px]">p. 07</span>
                </button>
                <button
                  type="button"
                  onClick={() => onNavigateToSpread?.(5)}
                  className="text-left hover:text-[#8C3833] hover:underline cursor-pointer flex justify-between p-0.5 rounded-xs hover:bg-[#141210]/5 transition-colors"
                >
                  <span>§ Forensic SMIA &amp; MQ-3</span>
                  <span className="font-mono-tech font-bold text-[9px]">p. 08</span>
                </button>
                <button
                  type="button"
                  onClick={() => onNavigateToSpread?.(6)}
                  className="text-left hover:text-[#8C3833] hover:underline cursor-pointer flex justify-between p-0.5 rounded-xs hover:bg-[#141210]/5 transition-colors"
                >
                  <span>§ Student Presidency</span>
                  <span className="font-mono-tech font-bold text-[9px]">p. 10</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a554e]">
        <span>THE DAILY CHRONICLE // LEAD DISPATCH</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 02</span>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 03: THE BIOGRAPHICAL CHRONICLE & CORE PILLARS
// =========================================================================
export const Page03Bio: React.FC = () => {
  return (
    <div className="p-4 sm:p-5 lg:p-6 xl:p-8 flex flex-col justify-between h-full overflow-y-auto relative bg-[#f4f3ef] text-[#141210]">
      <div>
        <div className="border-b-2 border-[#141210] pb-2 mb-3 flex justify-between items-start">
          <div>
            <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
              BIOGRAPHICAL CHRONICLE // SECTION 02
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-[#141210]">
              FIELD DOSSIER: RESEARCH IDENTITY
            </h3>
          </div>
          <NewspaperStamp text="CLASSIFIED" variant="crimson" rotation={-2} />
        </div>

        {/* Identity Dossier */}
        <div className="p-3 bg-[#eae8e2]/70 border border-[#141210] mb-3">
          <div className="flex items-center gap-2 border-b border-[#141210]/20 pb-1 mb-1.5 font-mono-tech text-[10px] text-[#141210] font-bold uppercase">
            <Fingerprint className="w-3.5 h-3.5 text-[#8C3833]" />
            <span>OPERATIONAL SPECIFICATION &amp; METHODOLOGY</span>
          </div>
          <p className="font-serif-vintage text-xs sm:text-[12.5px] leading-relaxed text-[#2a2521] text-justify">
            Mythreie Dumpati is an aspiring cybersecurity researcher and software engineer operating at the convergence of digital forensics, cryptography, and artificial intelligence safety. With dual formal training across computer science and hardware mechanics, she formulates computational defenses that account for protocol resilience down to physical telemetry.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="space-y-2 mt-2">
          <div className="border-l-2 border-[#141210] pl-3 py-1">
            <h4 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-[#141210]">
              I. Decentralized &amp; Zero-Trust Storage
            </h4>
            <p className="font-serif-vintage text-[11.5px] text-[#2a2521] leading-snug">
              Designing fault-tolerant peer-to-peer repositories leveraging Shamir&apos;s Secret Sharing and IPFS to eradicate single points of compromise without trusted intermediaries.
            </p>
          </div>

          <div className="border-l-2 border-[#8C3833] pl-3 py-1">
            <h4 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-[#8C3833]">
              II. Court-Admissible Digital Forensics
            </h4>
            <p className="font-serif-vintage text-[11.5px] text-[#2a2521] leading-snug">
              Engineering rigorous cryptographic verification pipelines ensuring electronic evidence extracted from cyber encounters satisfies legal scrutiny and RFC-3161 timestamps.
            </p>
          </div>

          <div className="border-l-2 border-[#4b4e39] pl-3 py-1">
            <h4 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4b4e39]">
              III. Adversarial LLM Defense &amp; Safety Benchmarking
            </h4>
            <p className="font-serif-vintage text-[11.5px] text-[#2a2521] leading-snug">
              Empirical evaluation of language models under multi-turn jailbreak attempts and prompt injection; mapping Pareto frontier curves across guardrail safety and response latency.
            </p>
          </div>
        </div>

        {/* Linguistic Cadre */}
        <div className="mt-3 pt-2 border-t border-[#141210]/20 flex items-center justify-between font-mono-tech text-[10px]">
          <span className="text-[#5a554e] font-bold">LINGUISTIC CADRE:</span>
          <div className="flex gap-1.5">
            {RESUME_DATA.personal.languagesSpoken.map((lang, idx) => (
              <span
                key={idx}
                className="px-1.5 py-0.5 border border-[#141210]/40 bg-[#eae8e2] text-[#141210] font-semibold text-[9.5px]"
              >
                {lang.name} {lang.name === 'German' ? '(A1)' : ''}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-2">
        <div className="mb-2">
          <HandwrittenNote rotation={-1.5} arrow="left" color="#8C3833">
            &quot;Focusing computational rigor toward public safety and privacy rights.&quot;
          </HandwrittenNote>
        </div>
        <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a554e]">
          <span>THE DAILY CHRONICLE // BIOGRAPHICAL DISPATCH</span>
          <span className="font-typewriter font-bold text-[#141210]">PAGE 03</span>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 04: THE ACADEMIC LEDGER
// =========================================================================
export const Page04Academic: React.FC = () => {
  return (
    <div className="p-4 sm:p-5 lg:p-6 xl:p-8 flex flex-col justify-between h-full overflow-y-auto relative bg-[#f4f3ef] text-[#141210]">
      <div>
        <div className="border-b-2 border-[#141210] pb-2 mb-3 flex justify-between items-start">
          <div>
            <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
              SCHOLASTIC REPORT // SECTION 03
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-[#141210]">
              THE ACADEMIC LEDGER
            </h3>
          </div>
          <NewspaperStamp text="ACCREDITED" variant="crimson" rotation={2} />
        </div>

        <div className="space-y-3.5">
          {RESUME_DATA.academicRecord.map((record, index) => (
            <div
              key={index}
              className="relative pl-5 border-l-2 border-[#141210] pb-2 last:pb-0 p-1.5 rounded-xs"
            >
              <div className="absolute -left-[6px] top-2 w-2.5 h-2.5 rounded-full border-2 border-[#141210] bg-[#f4f3ef]"></div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h4 className="font-serif-vintage text-base font-bold text-[#141210]">
                  {record.degree}
                </h4>
                <span className="font-mono-tech text-xs font-bold text-[#8C3833] bg-[#8C3833]/10 px-2 py-0.5 border border-[#8C3833]/30 self-start">
                  {record.grade}
                </span>
              </div>
              <div className="font-typewriter text-xs text-[#4b4e39] font-bold mt-0.5">
                {record.institution}
              </div>
              <div className="font-mono-tech text-[9.5px] text-[#5a554e] flex items-center gap-2 mt-0.5">
                <span>PERIOD: {record.period}</span>
                {record.specialization && (
                  <>
                    <span>•</span>
                    <span>{record.specialization}</span>
                  </>
                )}
              </div>
              <p className="font-serif-vintage text-[11.5px] text-[#2a2521] mt-1 italic leading-snug">
                &quot;{record.notes}&quot;
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-4 pt-3 border-t-2 border-[#141210]">
          <span className="font-mono-tech text-[9px] uppercase tracking-widest text-[#141210] font-bold block mb-1.5">
            INSTITUTIONAL ACCREDITATIONS &amp; DISTINCTIONS:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono-tech text-[10px]">
            {RESUME_DATA.certifications.slice(0, 4).map((cert, idx) => (
              <div key={idx} className="p-1.5 bg-[#eae8e2]/70 border border-[#141210]/30 flex items-start gap-1.5">
                <CheckCircle className="w-3 h-3 text-[#8C3833] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#141210] leading-tight">{cert.title}</div>
                  <div className="text-[8.5px] text-[#5a554e]">{cert.issuer} {cert.score ? `• ${cert.score}` : ''}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a554e]">
        <span>THE DAILY CHRONICLE // CURRICULUM LEDGER</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 04</span>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 05: FIELD OPERATIONS & TELANGANA POLICE BHAROSA
// =========================================================================
export const Page05Police: React.FC = () => {
  const policeExp = RESUME_DATA.experience.find((e) => e.id === 'telangana-police')!;
  const teleparadigmExp = RESUME_DATA.experience.find((e) => e.id === 'teleparadigm')!;

  return (
    <div className="p-4 sm:p-5 lg:p-6 xl:p-8 flex flex-col justify-between h-full overflow-y-auto relative bg-[#f4f3ef] text-[#141210]">
      <div>
        <div className="border-b-2 border-[#141210] pb-2 mb-3 flex justify-between items-start">
          <div>
            <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
              FIELD INVESTIGATION // SECTION 04
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-[#141210]">
              STATE POLICE &amp; INDUSTRY OPERATIONS
            </h3>
          </div>
          <NewspaperStamp text="FIELD AGENT" variant="olive" rotation={-1} />
        </div>

        {/* Feature 1: Telangana Police */}
        <div className="p-3 bg-[#eae8e2]/70 border-2 border-[#141210] mb-3">
          <div className="flex items-center justify-between border-b border-[#141210] pb-1 mb-2">
            <div>
              <span className="font-mono-tech text-[9px] text-[#8C3833] uppercase font-bold tracking-widest block">
                SPECIAL LAW ENFORCEMENT MODULE
              </span>
              <h4 className="font-serif-vintage text-base font-bold text-[#141210]">
                {policeExp.role}
              </h4>
            </div>
            <span className="font-mono-tech text-[9.5px] bg-[#141210] text-[#f5f0e1] px-2 py-0.5 font-bold">
              {policeExp.dates}
            </span>
          </div>

          <div className="font-typewriter text-xs text-[#4b4e39] font-bold mb-1">
            {policeExp.organization} • {policeExp.location}
          </div>

          <p className="font-newsreader text-xs italic text-[#3a352f] mb-2">
            &quot;{policeExp.verifiedOutcomes}&quot;
          </p>

          <div className="space-y-1.5 font-newsreader text-[11px] text-[#141210]">
            {policeExp.responsibilities.map((r, i) => (
              <div key={i} className="flex items-start gap-1.5">
                <span className="text-[#8C3833] font-bold">▶</span>
                <span>{r}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Feature 2: Teleparadigm Systems */}
        <div className="p-3 bg-[#eae8e2]/50 border border-[#141210]">
          <div className="flex items-center justify-between border-b border-[#141210]/20 pb-1 mb-1.5">
            <div>
              <h4 className="font-serif-vintage text-sm font-bold text-[#141210]">
                {teleparadigmExp.role}
              </h4>
              <div className="font-typewriter text-[11px] text-[#5a554e]">
                {teleparadigmExp.organization}
              </div>
            </div>
            <span className="font-mono-tech text-[9px] text-[#5a554e] font-bold">
              {teleparadigmExp.dates}
            </span>
          </div>

          <div className="space-y-1 font-newsreader text-[11px] text-[#141210]">
            {teleparadigmExp.responsibilities.map((r, i) => (
              <div key={i} className="flex items-start gap-1.5">
                <span className="text-[#141210] font-bold">▪</span>
                <span>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-2">
        <div className="mb-2">
          <HandwrittenNote rotation={1} arrow="right" color="#4b4e39">
            &quot;Applied analytics deployed directly into operational crisis centres.&quot;
          </HandwrittenNote>
        </div>
        <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a554e]">
          <span>THE DAILY CHRONICLE // POLICE DISPATCH</span>
          <span className="font-typewriter font-bold text-[#141210]">PAGE 05</span>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 06: SCHOLARLY PRESS & IEEE RESEARCH
// =========================================================================
export const Page06Research: React.FC = () => {
  return (
    <div className="p-4 sm:p-5 lg:p-6 xl:p-8 flex flex-col justify-between h-full overflow-y-auto relative bg-[#f4f3ef] text-[#141210]">
      <div>
        <div className="border-b-2 border-[#141210] pb-2 mb-3 flex justify-between items-start">
          <div>
            <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
              SCHOLARLY PRESS // SECTION 05
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-[#141210]">
              PEER-REVIEWED MONOGRAPHS
            </h3>
          </div>
          <NewspaperStamp text="3 PAPERS" variant="crimson" rotation={2} />
        </div>

        <div className="space-y-3">
          {RESUME_DATA.publications.map((paper, idx) => (
            <div key={idx} className="p-2.5 bg-[#eae8e2]/70 border border-[#141210]">
              <div className="flex items-baseline justify-between gap-2 border-b border-[#141210]/20 pb-1 mb-1">
                <span className="font-mono-tech text-[8.5px] uppercase font-bold text-[#8C3833]">
                  {paper.venue} • {paper.date}
                </span>
                <span className="font-mono-tech text-[8px] bg-[#141210] text-[#f5f0e1] px-1.5 py-0.2">
                  {paper.status}
                </span>
              </div>
              <h4 className="font-serif-vintage text-xs sm:text-sm font-bold text-[#141210] leading-snug">
                {paper.title}
              </h4>
              <div className="font-typewriter text-[9.5px] text-[#5a554e] mt-0.5">
                SCOPE: {paper.scope}
              </div>
              <p className="font-newsreader text-[10.5px] text-[#2a2521] mt-1 italic leading-tight">
                {paper.methodology}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a554e]">
        <span>THE DAILY CHRONICLE // SCHOLARLY PRESS</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 06</span>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 07: FLAGSHIP RESEARCH SYSTEMS (SecureShare & QPAT)
// =========================================================================
export const Page07Systems: React.FC = () => {
  const secureShare = RESUME_DATA.projects.find((p) => p.id === 'secureshare')!;
  const qpat = RESUME_DATA.projects.find((p) => p.id === 'qpat')!;

  return (
    <div className="p-4 sm:p-5 lg:p-6 xl:p-8 flex flex-col justify-between h-full overflow-y-auto relative bg-[#f4f3ef] text-[#141210]">
      <div>
        <div className="border-b-2 border-[#141210] pb-2 mb-3 flex justify-between items-start">
          <div>
            <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
              FLAGSHIP SYSTEMS // SECTION 06
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-[#141210]">
              DECENTRALIZED ARCHITECTURES &amp; NLP
            </h3>
          </div>
          <NewspaperStamp text="DEPLOYED" variant="olive" rotation={-1} />
        </div>

        {/* SecureShare */}
        <div className="p-3 bg-[#eae8e2]/80 border-2 border-[#141210] mb-3">
          <div className="flex items-center justify-between border-b border-[#141210] pb-1 mb-1.5">
            <h4 className="font-serif-vintage text-sm sm:text-base font-bold text-[#141210]">
              {secureShare.title}
            </h4>
            <span className="font-mono-tech text-[8.5px] bg-[#8C3833] text-white px-2 py-0.5 font-bold">
              IPFS + SHAMIR SSS
            </span>
          </div>
          <p className="font-newsreader text-[11px] text-[#2a2521] leading-relaxed mb-2">
            {secureShare.subtitle}
          </p>
          <div className="space-y-1 font-newsreader text-[10.5px] text-[#141210]">
            {secureShare.keyImplementations.map((b, i) => (
              <div key={i} className="flex items-start gap-1.5">
                <span className="text-[#8C3833] font-bold">▶</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* QPAT */}
        <div className="p-3 bg-[#eae8e2]/60 border border-[#141210]">
          <div className="flex items-center justify-between border-b border-[#141210]/20 pb-1 mb-1.5">
            <h4 className="font-serif-vintage text-sm font-bold text-[#141210]">
              {qpat.title}
            </h4>
            <span className="font-mono-tech text-[8.5px] text-[#5a554e] font-bold">
              NLP &amp; TF-IDF CLASSIFIER
            </span>
          </div>
          <p className="font-newsreader text-[11px] text-[#2a2521] leading-relaxed mb-2">
            {qpat.subtitle}
          </p>
          <div className="space-y-1 font-newsreader text-[10.5px] text-[#141210]">
            {qpat.keyImplementations.slice(0, 3).map((b, i) => (
              <div key={i} className="flex items-start gap-1.5">
                <span className="text-[#141210] font-bold">▪</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a554e]">
        <span>THE DAILY CHRONICLE // FLAGSHIP SYSTEMS</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 07</span>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 08: FORENSIC SPECIMENS & VEHICLE INTERLOCK
// =========================================================================
export const Page08Forensics: React.FC = () => {
  const smia = RESUME_DATA.projects.find((p) => p.id === 'smia')!;
  const alcohol = RESUME_DATA.projects.find((p) => p.id === 'alcohol-detector')!;

  return (
    <div className="p-4 sm:p-5 lg:p-6 xl:p-8 flex flex-col justify-between h-full overflow-y-auto relative bg-[#f4f3ef] text-[#141210]">
      <div>
        <div className="border-b-2 border-[#141210] pb-2 mb-3 flex justify-between items-start">
          <div>
            <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
              FORENSIC SPECIMENS // SECTION 07
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-[#141210]">
              COURT EVIDENCE &amp; HARDWARE INTERLOCK
            </h3>
          </div>
          <NewspaperStamp text="AUDITED" variant="crimson" rotation={1} />
        </div>

        {/* SMIA Tool */}
        <div className="p-3 bg-[#eae8e2]/70 border border-[#141210] mb-3">
          <div className="flex items-center justify-between border-b border-[#141210]/20 pb-1 mb-1.5">
            <h4 className="font-serif-vintage text-sm sm:text-base font-bold text-[#141210]">
              {smia.title}
            </h4>
            <span className="font-mono-tech text-[8.5px] bg-[#141210] text-[#f5f0e1] px-2 py-0.5 font-bold">
              COURT-ADMISSIBLE
            </span>
          </div>
          <p className="font-newsreader text-[11px] text-[#2a2521] leading-relaxed mb-2">
            {smia.subtitle}
          </p>
          <div className="space-y-1 font-newsreader text-[10.5px] text-[#141210]">
            {smia.keyImplementations.map((b, i) => (
              <div key={i} className="flex items-start gap-1.5">
                <span className="text-[#8C3833] font-bold">▶</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Alcohol Detection */}
        <div className="p-3 bg-[#eae8e2]/70 border border-[#141210]">
          <div className="flex items-center justify-between border-b border-[#141210]/20 pb-1 mb-1.5">
            <h4 className="font-serif-vintage text-sm font-bold text-[#141210]">
              {alcohol.title}
            </h4>
            <span className="font-mono-tech text-[8.5px] text-[#4b4e39] font-bold">
              ARDUINO UNO + MQ-3
            </span>
          </div>
          <p className="font-newsreader text-[11px] text-[#2a2521] leading-relaxed mb-2">
            {alcohol.subtitle}
          </p>
          <div className="space-y-1 font-newsreader text-[10.5px] text-[#141210]">
            {alcohol.keyImplementations.map((b, i) => (
              <div key={i} className="flex items-start gap-1.5">
                <span className="text-[#4b4e39] font-bold">▪</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a554e]">
        <span>THE DAILY CHRONICLE // FORENSIC SPECIMENS</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 08</span>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 09: TECHNICAL ARSENAL INVENTORY
// =========================================================================
export const Page09Arsenal: React.FC = () => {
  const skillCategories = [
    { title: 'Cybersecurity & Forensics', items: RESUME_DATA.skills.cybersecurityAndForensics },
    { title: 'Security Tools', items: RESUME_DATA.skills.securityTools },
    { title: 'Programming Languages', items: RESUME_DATA.skills.programmingLanguages },
    { title: 'Distributed Systems & Web', items: [...RESUME_DATA.skills.distributedSystems, ...RESUME_DATA.skills.backendAndWeb] },
    { title: 'AI & Applied Analytics', items: RESUME_DATA.skills.aiAndAppliedData },
    { title: 'Environments & Tools', items: RESUME_DATA.skills.environmentsAndTools },
  ];

  return (
    <div className="p-4 sm:p-5 lg:p-6 xl:p-8 flex flex-col justify-between h-full overflow-y-auto relative bg-[#f4f3ef] text-[#141210]">
      <div>
        <div className="border-b-2 border-[#141210] pb-2 mb-3 flex justify-between items-start">
          <div>
            <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
              ARSENAL INVENTORY // SECTION 08
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-[#141210]">
              TECHNICAL ARTIFACTS &amp; TOOLING
            </h3>
          </div>
          <NewspaperStamp text="VERIFIED" variant="crimson" rotation={-2} />
        </div>

        <div className="space-y-2.5">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="p-2 bg-[#eae8e2]/60 border border-[#141210]">
              <div className="font-mono-tech text-[9.5px] font-bold uppercase tracking-wider text-[#141210] border-b border-[#141210]/20 pb-0.5 mb-1 flex items-center justify-between">
                <span>{category.title}</span>
                <span className="text-[#8C3833] text-[8px]">[{category.items.length} ITEMS]</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {category.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-1.5 py-0.2 font-mono-tech text-[9.5px] bg-[#f4f3ef] border border-[#141210]/40 text-[#141210] font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a554e]">
        <span>THE DAILY CHRONICLE // ARSENAL INVENTORY</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 09</span>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 10: INSTITUTIONAL GOVERNANCE & CULTURAL ARTS
// =========================================================================
export const Page10Governance: React.FC = () => {
  return (
    <div className="p-4 sm:p-5 lg:p-6 xl:p-8 flex flex-col justify-between h-full overflow-y-auto relative bg-[#f4f3ef] text-[#141210]">
      <div>
        <div className="border-b-2 border-[#141210] pb-2 mb-3 flex justify-between items-start">
          <div>
            <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
              INSTITUTIONAL GOVERNANCE // SECTION 09
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-[#141210]">
              CAMPUS PRESIDENCY &amp; CLASSICAL DISCIPLINES
            </h3>
          </div>
          <NewspaperStamp text="LEADERSHIP" variant="olive" rotation={1} />
        </div>

        {/* Presidency Highlight */}
        <div className="p-3 bg-[#eae8e2]/80 border-2 border-[#141210] mb-3">
          <div className="flex items-center justify-between border-b border-[#141210] pb-1 mb-2">
            <div>
              <span className="font-mono-tech text-[8.5px] text-[#8C3833] uppercase font-bold tracking-widest block">
                ELECTED CHAIR OF THE GENERAL STUDENT BODY
              </span>
              <h4 className="font-serif-vintage text-base font-bold text-[#141210]">
                President, Student Council
              </h4>
            </div>
            <span className="font-mono-tech text-[9.5px] bg-[#141210] text-[#f5f0e1] px-2 py-0.5 font-bold">
              2025 – 2026
            </span>
          </div>
          <div className="font-typewriter text-xs text-[#4b4e39] font-bold mb-1">
            Keshav Memorial Engineering College • Hyderabad
          </div>
          <p className="font-newsreader text-xs text-[#2a2521] leading-relaxed">
            Represented 1,200+ undergraduate engineering scholars across academic boards, institutional safety audits, campus infrastructure expansion, and national collegiate hackathon delegations.
          </p>
        </div>

        {/* Extracurricular and Classical Arts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
          {RESUME_DATA.activitiesAndSocieties.map((activity, idx) => (
            <div key={idx} className="p-2.5 bg-[#eae8e2]/60 border border-[#141210]">
              <div className="flex items-center justify-between border-b border-[#141210]/20 pb-1 mb-1">
                <span className="font-serif-vintage text-xs font-bold text-[#141210]">{activity.role}</span>
                <span className="font-mono-tech text-[8.5px] text-[#8C3833] font-bold">DISCIPLINE</span>
              </div>
              <div className="font-typewriter text-[9.5px] text-[#5a554e]">{activity.organization}</div>
              <p className="font-newsreader text-[10.5px] text-[#2a2521] mt-1 leading-snug">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a554e]">
        <span>THE DAILY CHRONICLE // INSTITUTIONAL GOVERNANCE</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 10</span>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 11: ARCHIVAL DISPATCH & OFFICIAL RESUME DOWNLOAD
// =========================================================================
export const Page11Colophon: React.FC = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sent');
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setStatus('idle');
    }, 4000);
  };

  return (
    <div className="p-4 sm:p-5 lg:p-6 xl:p-8 flex flex-col justify-between h-full overflow-y-auto relative bg-[#f4f3ef] text-[#141210]">
      <div>
        <div className="border-b-2 border-[#141210] pb-2 mb-3 flex justify-between items-start">
          <div>
            <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
              DISPATCH TERMINAL // SECTION 10
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-[#141210]">
              TRANSMISSION &amp; OFFICIAL RECORD
            </h3>
          </div>
          <NewspaperStamp text="DISPATCH" variant="crimson" rotation={-1} />
        </div>

        {/* Telegram Transmission Form */}
        <div className="p-3 bg-[#eae8e2]/80 border-2 border-[#141210] mb-3">
          <div className="flex items-center gap-2 border-b border-[#141210] pb-1 mb-2 font-mono-tech text-[10px] uppercase font-bold text-[#141210]">
            <Send className="w-3.5 h-3.5 text-[#8C3833]" />
            <span>ENCRYPTED TELEGRAPH TRANSMISSION</span>
          </div>

          {status === 'sent' ? (
            <div className="p-4 text-center bg-[#141210] text-[#f5f0e1] font-mono-tech text-xs">
              <span className="text-[#d9c49f] font-bold block mb-1">★ DISPATCH TRANSMITTED ★</span>
              <span>Your message has been logged into the chief investigator&apos;s terminal.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2 font-mono-tech text-[10px]">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[#5a554e] font-bold mb-0.5">SENDER NAME:</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Inspector / Colleague"
                    className="w-full p-1.5 border border-[#141210] bg-[#f4f3ef] text-[#141210] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-[#5a554e] font-bold mb-0.5">RETURN TELEGRAPH (EMAIL):</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="station@agency.org"
                    className="w-full p-1.5 border border-[#141210] bg-[#f4f3ef] text-[#141210] focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#5a554e] font-bold mb-0.5">DISPATCH INQUIRY:</label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Inquiry regarding forensic research, collaborations, or engineering..."
                  className="w-full p-1.5 border border-[#141210] bg-[#f4f3ef] text-[#141210] focus:outline-hidden resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-[#141210] hover:bg-[#8C3833] text-[#f5f0e1] font-bold uppercase tracking-widest transition-all cursor-pointer shadow-xs"
              >
                TRANSMIT DISPATCH →
              </button>
            </form>
          )}
        </div>

        {/* PDF Download Button */}
        <div className="p-3 bg-[#141210] text-[#f5f0e1] border-2 border-[#141210] mb-3 flex items-center justify-between">
          <div>
            <div className="font-mono-tech text-[10.5px] uppercase font-bold text-[#d9c49f]">
              OFFICIAL VERIFIED RESUME RECORD
            </div>
            <div className="font-newsreader text-xs italic text-[#cfc5b0]">
              Full cryptographic curriculum ledger (MYTHREIE_DUMPATI.pdf)
            </div>
          </div>
          <a
            href="/MYTHREIE_DUMPATI.pdf"
            download="MYTHREIE_DUMPATI_RESUME.pdf"
            className="px-3.5 py-1.5 bg-[#8C3833] hover:bg-[#a6423c] text-white font-mono-tech text-xs uppercase font-bold tracking-wider inline-flex items-center gap-1.5 shadow-sm transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>DOWNLOAD</span>
          </a>
        </div>

        {/* Colophon */}
        <div className="p-2 border-t border-[#141210]/30 font-newsreader text-[10px] text-[#5a554e] text-center italic">
          Typeset in Didone, IM Fell English, and IBM Plex Mono. Authored and maintained by Mythreie Dumpati. Hyderabad, Telangana • India.
        </div>
      </div>

      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a554e]">
        <span>THE DAILY CHRONICLE // EDITORIAL COLOPHON</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 11</span>
      </div>
    </div>
  );
};

// =========================================================================
// UNIVERSAL PAGE RENDERER
// =========================================================================
export const renderNewspaperPage = (
  pageNum: number,
  callbacks?: {
    onOpenNewspaper?: () => void;
    onNavigateToSpread?: (spread: number) => void;
  }
) => {
  switch (pageNum) {
    case 1:
      return <Page01Cover onOpenNewspaper={callbacks?.onOpenNewspaper} />;
    case 2:
      return <Page02Overview onNavigateToSpread={callbacks?.onNavigateToSpread} />;
    case 3:
      return <Page03Bio />;
    case 4:
      return <Page04Academic />;
    case 5:
      return <Page05Police />;
    case 6:
      return <Page06Research />;
    case 7:
      return <Page07Systems />;
    case 8:
      return <Page08Forensics />;
    case 9:
      return <Page09Arsenal />;
    case 10:
      return <Page10Governance />;
    case 11:
      return <Page11Colophon />;
    default:
      return <Page01Cover onOpenNewspaper={callbacks?.onOpenNewspaper} />;
  }
};
