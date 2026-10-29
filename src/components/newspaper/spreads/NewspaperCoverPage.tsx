import React from 'react';
import {
  Fingerprint,
  ShieldCheck,
  Terminal,
  Cpu,
  Lock,
  ArrowRight,
  ExternalLink,
  Mail,
  Camera,
  Award,
  Hash,
} from 'lucide-react';
import { RESUME_DATA } from '../../../data/resumeData';
import { NewspaperStamp } from '../elements/NewspaperStamp';
import { GithubIcon, LinkedinIcon } from '../../SocialIcons';

interface NewspaperCoverPageProps {
  onOpenNewspaper: () => void;
  isDisappearing?: boolean;
}

export const NewspaperCoverPage: React.FC<NewspaperCoverPageProps> = ({
  onOpenNewspaper,
  isDisappearing = false,
}) => {
  return (
    <div className="w-full h-full overflow-y-auto p-4 sm:p-6 lg:p-8 flex flex-col justify-between relative select-none">
      <div>
        {/* ========================================================================= */}
        {/* 1. TOP 'EXTRA!! EXTRA!!' BANNER — DIRECTLY INSPIRED BY VINTAGE REFERENCE */}
        {/* ========================================================================= */}
        <div className="text-center pb-2 mb-2 border-b-2 border-[#141210]">
          {/* Top Thin Masthead Metadata */}
          <div className="flex items-center justify-between text-[9px] sm:text-[10.5px] font-mono-tech uppercase tracking-[0.25em] text-[#5a5047] pb-1 border-b border-[#141210]/30 font-bold">
            <span>VOL. XXIV ... NO. 102</span>
            <span>HYDERABAD, TELANGANA • INDIA</span>
            <span>PRICE FIVE CENTS</span>
          </div>

          {/* MASSIVE 'EXTRA!! EXTRA!!' WOODBLOCK HEADLINE */}
          <div className="py-1 sm:py-2">
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-[0.12em] sm:tracking-[0.18em] text-[#141210] leading-none drop-shadow-[0_2px_3px_rgba(0,0,0,0.18)]">
              EXTRA!! EXTRA!!
            </h1>
          </div>

          {/* HEAVY DOUBLE RULE WITH PRESS RELEASE STRAPLINE */}
          <div className="border-y-4 border-double border-[#141210] py-1 sm:py-1.5 my-1 bg-[#ece4cf]/50">
            <div className="flex items-center justify-between px-2 sm:px-4">
              <span className="hidden sm:inline font-mono-tech text-[10px] tracking-widest text-[#8C3833] font-bold">
                ★ SPECIAL DISPATCH ★
              </span>
              <h2 className="font-display text-base sm:text-xl md:text-2xl font-black uppercase tracking-[0.12em] sm:tracking-[0.2em] text-[#141210] mx-auto text-center">
                CYBERSECURITY RESEARCH DOSSIER &amp; PRESS RELEASE
              </h2>
              <span className="hidden sm:inline font-mono-tech text-[10px] tracking-widest text-[#8C3833] font-bold">
                ★ LATE CITY EDITION ★
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. CHIEF RESEARCHER NAME & CREDENTIALS BANNER */}
        {/* ========================================================================= */}
        <div className="newspaper-double-rule my-2 py-2 text-center bg-[#ece4cf]/70 border-x border-[#141210]/20">
          <span className="font-mono-tech text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#5a5047] block font-bold">
            SUBJECT OF INVESTIGATION &amp; CHIEF AUTHOR
          </span>
          <h2 className="font-serif-vintage text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-wider text-[#141210] mt-0.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
            {RESUME_DATA.personal.name}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-mono-tech text-[10px] sm:text-[11.5px] text-[#2a2521] font-bold mt-1">
            <span className="bg-[#141210]/5 px-2 py-0.5 border border-[#141210]/20">
              B.E. COMPUTER SCIENCE &amp; ENGINEERING (8.36 CGPA)
            </span>
            <span className="text-[#8C3833]">•</span>
            <span className="bg-[#141210]/5 px-2 py-0.5 border border-[#141210]/20">
              DIPLOMA IN AUTOMOBILE ENGINEERING (8.8 CGPA)
            </span>
            <span className="text-[#8C3833]">•</span>
            <span className="bg-[#8C3833]/10 text-[#8C3833] px-2 py-0.5 border border-[#8C3833]/30">
              NLU ODISHA CYBER FORENSICS (87% DISTINCTION)
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. MAIN NEWSPAPER SPREAD: PHOTOGRAPH HOLDERS & CYBERSECURITY TELEMETRY */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-2.5">
          {/* LEFT: DOMINANT PHOTOGRAPH HOLDER SECTION (7 COLS) */}
          <div className="lg:col-span-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r-2 border-[#141210]/30 pr-0 lg:pr-4">
            {/* Primary Large Photograph Placeholder — Mimicking Reference Camera Photo */}
            <div className="relative p-2.5 sm:p-3 bg-[#ece4cf] border-2 border-[#141210] shadow-sm group hover:shadow-md transition-all">
              {/* Corner Photo Mounting Brackets (Physical Vintage Album Corners) */}
              <div className="absolute top-1 left-1 w-3.5 h-3.5 border-t-2 border-l-2 border-[#141210]"></div>
              <div className="absolute top-1 right-1 w-3.5 h-3.5 border-t-2 border-r-2 border-[#141210]"></div>
              <div className="absolute bottom-1 left-1 w-3.5 h-3.5 border-b-2 border-l-2 border-[#141210]"></div>
              <div className="absolute bottom-1 right-1 w-3.5 h-3.5 border-b-2 border-r-2 border-[#141210]"></div>

              {/* Photo Frame Container with Halftone Engraving */}
              <div className="newsprint-halftone relative aspect-[16/10] bg-gradient-to-b from-[#e2d7bd] to-[#cfc3a5] border-2 border-[#141210]/50 flex flex-col items-center justify-center p-4 text-center overflow-hidden">
                {/* Vintage Biometric Scanner Focal Element */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-dashed border-[#141210] flex items-center justify-center mb-2 bg-[#f5f0e1]/75 group-hover:scale-105 transition-transform shadow-inner">
                  <Fingerprint className="w-11 h-11 sm:w-13 sm:h-13 text-[#141210]" />
                </div>
                
                <div className="flex items-center gap-2 font-mono-tech text-[10px] sm:text-[11px] uppercase font-bold text-[#141210] tracking-widest bg-[#f5f0e1]/90 px-2.5 py-0.5 border border-[#141210] shadow-xs">
                  <Camera className="w-3.5 h-3.5 text-[#8C3833]" />
                  <span>[PHOTOGRAPH // EXHIBIT A: COMPUTATIONAL FORENSICS LAB]</span>
                </div>
                
                <span className="font-serif-vintage text-xs sm:text-sm text-[#2a2521] mt-1.5 font-bold">
                  Chief Researcher Mythreie Dumpati at Keshav Memorial Engineering College
                </span>
                <span className="font-mono-tech text-[9px] sm:text-[9.5px] text-[#5a5047] mt-0.5">
                  HYDERABAD • SECURITY TESTBED &amp; DECENTRALIZED PROTOCOL LABORATORY
                </span>
              </div>

              {/* Authentic Photo Caption */}
              <p className="text-[10px] font-newsreader italic text-[#3a332c] mt-2 leading-snug px-1 border-t border-[#141210]/20 pt-1.5">
                <strong>Figure 1.0</strong> — Authenticated archival portrait of Mythreie Dumpati. Documenting lead research in zero-trust architectures, Shamir&apos;s Secret Sharing, IPFS decentralized cluster pinning, and court-admissible forensic methodologies.
              </p>
            </div>

            {/* Two Secondary Photograph Holders Side-by-Side (Field Exhibits) */}
            <div className="grid grid-cols-2 gap-2.5 mt-3">
              {/* Secondary Photo 1: Telangana Police Lab */}
              <div className="p-2 bg-[#ece4cf]/80 border border-[#141210] group hover:border-[#8C3833] transition-colors shadow-2xs">
                <div className="newsprint-halftone aspect-[4/3] bg-gradient-to-b from-[#dfd4ba] to-[#cfc2a2] border border-[#141210]/30 flex flex-col items-center justify-center p-2 text-center overflow-hidden">
                  <ShieldCheck className="w-6 h-6 text-[#8C3833] mb-1 group-hover:scale-110 transition-transform" />
                  <span className="font-mono-tech text-[8.5px] font-bold uppercase text-[#141210] tracking-wider">
                    [EXHIBIT B: BHAROSA LAB]
                  </span>
                  <span className="font-mono-tech text-[7.5px] text-[#5a5047]">
                    Telangana Police Women Safety Wing
                  </span>
                </div>
                <p className="text-[9px] font-newsreader italic text-[#3a332c] mt-1 leading-tight">
                  <strong>Fig. 1.1</strong> — Operational crisis data analytics across 26 statewide centres.
                </p>
              </div>

              {/* Secondary Photo 2: Embedded Vehicle Safety */}
              <div className="p-2 bg-[#ece4cf]/80 border border-[#141210] group hover:border-[#4b4e39] transition-colors shadow-2xs">
                <div className="newsprint-halftone aspect-[4/3] bg-gradient-to-b from-[#dfd4ba] to-[#cfc2a2] border border-[#141210]/30 flex flex-col items-center justify-center p-2 text-center overflow-hidden">
                  <Cpu className="w-6 h-6 text-[#4b4e39] mb-1 group-hover:scale-110 transition-transform" />
                  <span className="font-mono-tech text-[8.5px] font-bold uppercase text-[#141210] tracking-wider">
                    [EXHIBIT C: HARDWARE INTERLOCK]
                  </span>
                  <span className="font-mono-tech text-[7.5px] text-[#5a5047]">
                    Arduino UNO + MQ-3 Sensor
                  </span>
                </div>
                <p className="text-[9px] font-newsreader italic text-[#3a332c] mt-1 leading-tight">
                  <strong>Fig. 1.2</strong> — Automated vehicle ignition cutoff preventing intoxicated driving.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: EDITORIAL ARTICLE, TELEMETRY & VINTAGE QUOTATION (5 COLS) */}
          <div className="lg:col-span-5 flex flex-col justify-between pl-0 lg:pl-2 space-y-3">
            {/* Top Date Callout — Exactly Matching Reference ("APRIL 1, 2045") */}
            <div className="border-b-2 border-[#141210] pb-1.5">
              <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-[0.15em] text-[#141210]">
                OCTOBER 2026
              </h3>
              <p className="font-newsreader text-xs sm:text-[12.5px] text-[#3a332c] mt-1 leading-relaxed">
                A meticulously documented portfolio chronicling applied computer science, digital forensics, and decentralized cryptosystems. Developed to provide immutable accountability, resilient peer-to-peer data protection, and real-time state crisis response infrastructure.
              </p>
            </div>

            {/* Prominent Vintage Pullquote — Exactly Matching Reference Quote Box */}
            <div className="my-1 py-2 px-3 border-y-2 border-[#141210] bg-[#ece4cf]/50 text-center">
              <blockquote className="font-serif-vintage text-base sm:text-lg md:text-xl font-bold italic uppercase tracking-wider text-[#141210] leading-snug">
                &ldquo;TIMELESS RIGOR, RECOVERED FROM SILICON &amp; DEPLOYED WITH INTEGRITY.&rdquo;
              </blockquote>
            </div>

            {/* CYBERSECURITY TERMINAL TELEMETRY BOX */}
            <div className="p-3 bg-[#141210] text-[#f5f0e1] border-2 border-[#141210] rounded-xs shadow-sm font-mono-tech text-[9.5px]">
              <div className="flex items-center justify-between border-b border-[#3d2e23] pb-1 mb-1.5 text-[#d9c49f] font-bold">
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#8C3833]" />
                  <span>CYBER TELEMETRY // REAL-TIME AUDIT</span>
                </div>
                <span className="text-[#8C3833] animate-pulse">● LIVE</span>
              </div>
              <div className="space-y-1 font-mono-tech text-[9px] text-[#cfc2a5]">
                <div className="flex justify-between">
                  <span>[NETWORK STATUS]:</span>
                  <span className="text-white font-bold">ZERO-TRUST AUDIT ONLINE</span>
                </div>
                <div className="flex justify-between">
                  <span>[CIPHER SUITE]:</span>
                  <span className="text-[#d9c49f]">AES-256-GCM + SHAMIR SSS</span>
                </div>
                <div className="flex justify-between">
                  <span>[IPFS ANCHOR]:</span>
                  <span className="text-white font-mono">QmZtmD2qt8fQgKm5... [VERIFIED]</span>
                </div>
                <div className="flex justify-between">
                  <span>[LLM BENCHMARK]:</span>
                  <span className="text-[#d9c49f]">2,500 ADVERSARIAL QUERIES</span>
                </div>
                <div className="flex justify-between">
                  <span>[LEGAL EVIDENCE]:</span>
                  <span className="text-[#8C3833] font-bold">SHA-256 COURT ADMISSIBLE</span>
                </div>
              </div>
            </div>

            {/* Threat Intelligence Alert Box */}
            <div className="p-2.5 bg-[#8C3833]/10 border-l-4 border-[#8C3833] space-y-1">
              <span className="font-mono-tech text-[9px] font-bold uppercase tracking-wider text-[#8C3833] flex items-center gap-1">
                <Lock className="w-3 h-3 text-[#8C3833]" />
                <span>CYBER DEFENSE INTELLIGENCE BULLETIN</span>
              </span>
              <p className="font-serif-vintage text-[11.5px] text-[#141210] leading-snug">
                Pioneering investigations into decentralized file sharing architectures that eliminate single points of failure, coupled with empirical Pareto frontier analysis characterizing small language model guardrail performance under adversarial prompt injection.
              </p>
            </div>

            {/* Official Stamps & Biometric Verification */}
            <div className="p-2 bg-[#ece4cf]/70 border border-[#141210] flex items-center justify-between gap-2">
              <NewspaperStamp text="RESTRICTED ACCESS" variant="crimson" rotation={-2} />
              <NewspaperStamp text="NLU ODISHA 87%" variant="olive" rotation={1} />
              <div className="text-right font-mono-tech text-[8.5px] text-[#5a5047]">
                <span className="block font-bold text-[#141210]">CERTIFIED RECORD</span>
                <span>VOL. 2026 // ED. 1</span>
              </div>
            </div>

            {/* Cryptographic Hash Ticker */}
            <div className="p-2 bg-[#ece4cf] border border-[#141210]/40 font-mono-tech text-[8.5px] text-[#3a332c] space-y-0.5">
              <div className="font-bold text-[#141210] flex items-center gap-1">
                <Hash className="w-3 h-3 text-[#8C3833]" />
                <span>RFC-3161 TIMESTAMPED EVIDENCE DIGEST:</span>
              </div>
              <div className="truncate text-[#8C3833] font-bold font-mono">
                SHA-256: 7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069
              </div>
              <div className="text-[#5a5047]">COURT OF LAW ADMISSIBLE • IMMUTABLE LEDGER</div>
            </div>

            {/* Quick Dispatch Links */}
            <div className="flex flex-wrap items-center gap-1.5 font-mono-tech text-[9px] pt-1">
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
                className="px-2 py-0.5 border border-[#141210] hover:bg-[#4b4e39] hover:text-white hover:border-[#4b4e39] transition-all font-bold inline-flex items-center gap-1 shadow-2xs"
              >
                <LinkedinIcon className="w-2.5 h-2.5 text-[#4b4e39]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-2 h-2 opacity-60" />
              </a>
              <span className="ml-auto font-mono-tech text-[8px] text-[#5a5047] flex items-center gap-1">
                <Award className="w-2.5 h-2.5 text-[#8C3833]" />
                <span>President, KMEC</span>
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. BOTTOM TWO-COLUMN EDITORIAL ARTICLE (MATCHING REFERENCE NEWSPAPER) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2.5 pb-2 border-t-2 border-[#141210] my-2">
          {/* Column 1 */}
          <div className="space-y-1">
            <h4 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-[#141210]">
              THE ARCHIVAL INITIATIVE
            </h4>
            <p className="font-newsreader text-[11px] sm:text-xs text-[#2a2521] leading-relaxed text-justify">
              Cybersecurity and computational forensics have long demanded more than theoretical speculation. They require resilient implementations engineered to withstand adversarial pressure. Inspired by historical cryptologic archives and modern decentralized paradigms, this portfolio presents verified artifacts—spanning peer-to-peer fault-tolerant storage to statewide police crisis intervention analytics.
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-1">
            <h4 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-[#141210]">
              EMPIRICAL RIGOR &amp; REPRODUCIBILITY
            </h4>
            <p className="font-newsreader text-[11px] sm:text-xs text-[#2a2521] leading-relaxed text-justify">
              Each investigation documented herein unites mathematical rigour with practical field utility. Through three peer-reviewed IEEE and IJRDET research publications, physical automotive safety interlocks, and court-admissible social media forensic crawlers, the candidate demonstrates balanced mastery across software engineering, threat modeling, and formal governance.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. BLACK BOTTOM BANNER — MATCHING * READ MORE AT... * FROM REFERENCE */}
        {/* ========================================================================= */}
        <div className="bg-[#141210] text-[#f5f0e1] py-2 px-4 text-center border-2 border-[#141210] shadow-sm my-1">
          <div className="flex flex-wrap items-center justify-between gap-2 font-mono-tech text-[10px] sm:text-xs tracking-[0.2em] font-bold">
            <span className="text-[#d9c49f]">★ ★ ★</span>
            <span className="uppercase text-[#f5f0e1] mx-auto text-center">
              READ COMPLETE RESEARCH ARCHIVE AT WWW.MYTHREIE-DUMPATI-CHRONICLE.COM
            </span>
            <span className="text-[#d9c49f]">★ ★ ★</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 6. BOTTOM CALL-TO-ACTION: OPEN NEWSPAPER / TURN PAGE BUTTON */}
      {/* ========================================================================= */}
      <div className="pt-2 border-t-2 border-[#141210] mt-1">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#ece4cf]/90 p-3 border border-[#141210]">
          <div className="text-center sm:text-left">
            <span className="font-mono-tech text-[10px] uppercase font-bold text-[#8C3833] tracking-widest block">
              ★ COMMENCE INVESTIGATION ★
            </span>
            <p className="font-serif-vintage text-xs sm:text-sm text-[#141210] font-bold">
              Turn over the front page to inspect the Academic Ledger, Police Fieldwork, IEEE Research &amp; Systems.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenNewspaper}
            disabled={isDisappearing}
            className={`flex items-center gap-2 px-6 py-2.5 font-mono-tech text-xs uppercase font-bold tracking-[0.2em] transition-all shadow-md hover:shadow-lg hover:scale-105 cursor-pointer flex-shrink-0 ${
              isDisappearing
                ? 'bg-[#8C3833] text-white opacity-85 cursor-wait'
                : 'bg-[#141210] hover:bg-[#8C3833] text-[#f5f0e1]'
            }`}
          >
            <span>{isDisappearing ? 'OPENING ARCHIVE...' : 'OPEN NEWSPAPER / TURN PAGE'}</span>
            <ArrowRight className={`w-4 h-4 text-[#d9c49f] ${isDisappearing ? 'animate-ping' : ''}`} />
          </button>
        </div>

        {/* Running Bottom Bar */}
        <div className="pt-2 flex justify-between items-center text-[9px] font-mono-tech text-[#5a5047]">
          <span>THE CHRONICLE OF CYBERNETIC INVESTIGATION // VOL. XXIV NO. 102</span>
          <span className="font-typewriter font-bold text-[#141210]">FOLIO 01 • FRONT COVER BROADSHEET</span>
        </div>
      </div>
    </div>
  );
};
