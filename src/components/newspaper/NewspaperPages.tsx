import React from 'react';
import {
  ExternalLink,
  CheckCircle,
  Download,
  Send,
} from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';
import { NewspaperStamp } from './elements/NewspaperStamp';
import { GithubIcon, LinkedinIcon } from '../SocialIcons';

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
// UNIVERSAL PAGE TOP HEADER (Name on top of every page)
// =========================================================================
export const NewspaperPageHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between font-serif text-xs sm:text-[13px] md:text-[14px] tracking-[0.2em] sm:tracking-[0.25em] text-[#111111] uppercase pb-2 mb-5 sm:mb-7 border-b-[2px] border-[#111111] select-none">
      <span>MYTHREIE DUMPATI</span>
      <span>PORTFOLIO . 2026</span>
    </div>
  );
};

// =========================================================================
// PAGE 02: CONTENTS (Exact reproduction of uploaded reference image)
// =========================================================================
export const Page02Contents: React.FC<{ onNavigateToSpread?: (spread: number) => void }> = ({
  onNavigateToSpread,
}) => {
  const contentsList = [
    {
      num: '01',
      title: 'Education',
      desc: 'My academic journey and qualifications',
      page: 3,
    },
    {
      num: '02',
      title: 'Professional Experience',
      desc: 'Practical experience across industry and public service',
      page: 4,
    },
    {
      num: '03',
      title: 'Projects',
      desc: 'Technical solutions built through research and development',
      page: 5,
    },
    {
      num: '04',
      title: 'Publications',
      desc: 'Research contributions in cybersecurity and related fields',
      page: 6,
    },
    {
      num: '05',
      title: 'Skills',
      desc: 'Technical competencies and tools',
      page: 7,
    },
    {
      num: '06',
      title: 'Certifications',
      desc: 'Professional training and recognized credentials',
      page: 8,
    },
    {
      num: '07',
      title: 'Activities and Societies',
      desc: 'Leadership, campus involvement, and extracurricular pursuits',
      page: 9,
    },
  ];

  return (
    <div className="editorial-scroll scroll-smooth p-6 sm:p-9 md:p-12 lg:p-14 flex flex-col justify-between h-full overflow-y-auto relative bg-[#faf9f6] text-[#141210] select-none">
      <div>
        {/* Universal Top Header Bar */}
        <NewspaperPageHeader />

        {/* Title and Subtitle */}
        <div className="mt-4 sm:mt-6 mb-5 sm:mb-6">
          <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-[44px] uppercase tracking-[0.02em] text-[#111111] leading-none">
            CONTENTS
          </h2>
          <p className="font-serif italic text-sm sm:text-base md:text-[17px] text-[#222222] mt-2.5 sm:mt-3 leading-snug">
            A record of academic work, research, and experience.
          </p>
          <div className="w-full border-b-[1.5px] border-[#111111] mt-3.5 sm:mt-4" />
        </div>

        {/* The 7 Numbered Sections */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6 mt-6 sm:mt-7">
          {contentsList.map((item) => (
            <div
              key={item.num}
              onClick={() => onNavigateToSpread?.(item.page)}
              className="group cursor-pointer transition-transform duration-150 p-1 -mx-1 rounded-xs hover:translate-x-1"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onNavigateToSpread?.(item.page);
                }
              }}
            >
              <div>
                <h3 className="font-serif font-bold text-base sm:text-lg md:text-[19px] text-[#111111] group-hover:text-[#8C3833] transition-colors leading-tight">
                  <span className="inline-block w-8 sm:w-9">{item.num}.</span>
                  <span>{item.title}</span>
                </h3>
              </div>
              <p className="font-serif text-xs sm:text-sm md:text-[15px] text-[#2c2825] pl-8 sm:pl-9 mt-1 leading-snug">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Turn to Broadsheet Trigger */}
      <div className="mt-6 pt-3 border-t border-[#141210]/20">
        <button
          type="button"
          onClick={() => onNavigateToSpread?.(3)}
          className="w-full py-2.5 px-4 bg-[#141210] hover:bg-[#8C3833] text-[#f5f0e1] font-mono-tech text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-between shadow-xs group"
        >
          <span>LIFT PAGE &amp; TURN TO 01. EDUCATION →</span>
          <span className="text-[10px] text-[#d9c49f] group-hover:text-white transition-colors">
            PAGE 03
          </span>
        </button>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 03: 01. EDUCATION (Exact reproduction of uploaded reference image)
// =========================================================================
export const Page03Education: React.FC = () => {
  const milestones = [
    {
      year: '2026',
      title: 'Bachelor of Engineering in Computer Science and Engineering',
      institution: 'Keshav Memorial Engineering College',
      score: '8.36/10',
      image: '/education_kmec.jpg',
      alt: 'Keshav Memorial Engineering College Campus',
    },
    {
      year: '2023',
      title: 'Diploma in Automobile Engineering',
      institution: 'Masab Tank Government Polytechnic College',
      score: '8.8/10',
      image: '/education_masab_tank.jpg',
      alt: 'Masab Tank Government Polytechnic College Building',
    },
    {
      year: '2020',
      title: 'ICSE — Secondary Education',
      institution: 'Living Vikasa Vidya Vanam',
      score: '81.4%',
      image: '/education_school.jpg',
      alt: 'Living Vikasa Vidya Vanam Campus',
    },
  ];

  return (
    <div className="editorial-scroll scroll-smooth p-6 sm:p-9 md:p-12 lg:p-14 flex flex-col justify-start h-full overflow-y-auto relative bg-[#faf9f6] text-[#141210] select-none">
      {/* Universal Top Header Bar (Name on top of page) */}
      <NewspaperPageHeader />

      {/* Heading matching reference image */}
      <div className="mb-5 sm:mb-7">
        <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-[42px] text-[#111111] tracking-[0.01em] leading-tight">
          01. Education
        </h2>
        <div className="w-full border-b border-[#111111] mt-3 sm:mt-4" />
      </div>

      {/* 3-Row Education Timeline Grid */}
      <div className="space-y-6 sm:space-y-8 relative">
        {milestones.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1.15fr] gap-4 sm:gap-6 items-center relative"
          >
            {/* Left Column: Campus Photograph */}
            <div className="w-full aspect-[298/200] max-h-[175px] bg-[#ebe7dc] border border-[#141210]/60 overflow-hidden shadow-xs">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover grayscale contrast-110 block"
                loading="eager"
              />
            </div>

            {/* Center Timeline Node Dot & Spine Segment */}
            <div className="hidden sm:flex flex-col items-center self-stretch relative w-5">
              {/* Vertical timeline line */}
              <div className="w-[2.5px] bg-[#111111] h-full absolute top-0 bottom-0 left-1/2 -translate-x-1/2" />
              {/* Timeline Solid Node Dot */}
              <div className="w-3.5 h-3.5 rounded-full bg-[#111111] ring-4 ring-[#faf9f6] relative z-10 my-auto" />
            </div>

            {/* Right Column: Educational Ledger */}
            <div className="flex flex-col justify-center">
              <span className="font-serif text-sm sm:text-base text-[#111111] mb-1 font-normal block">
                {item.year}
              </span>
              <h3 className="font-serif font-bold text-sm sm:text-base md:text-[17px] text-[#111111] leading-snug">
                {item.title}
              </h3>
              <p className="font-serif text-xs sm:text-sm md:text-[15px] text-[#2c2825] mt-1 leading-snug">
                {item.institution}
              </p>
              <span className="font-serif font-bold text-sm sm:text-base text-[#111111] mt-2 block">
                {item.score}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 04: 02. PROFESSIONAL EXPERIENCE
// =========================================================================
export const Page04Experience: React.FC = () => {
  const policeExp = RESUME_DATA.experience.find((e) => e.id === 'telangana-police')!;
  const teleparadigmExp = RESUME_DATA.experience.find((e) => e.id === 'teleparadigm')!;
  const mithraExp = RESUME_DATA.experience.find((e) => e.id === 'mithra-agencies')!;

  return (
    <div className="editorial-scroll scroll-smooth p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between h-full overflow-y-auto relative bg-[#faf9f6] text-[#141210]">
      <div>
        {/* Universal Top Header Bar */}
        <NewspaperPageHeader />

        <div className="border-b-2 border-[#141210] pb-2 mb-4 flex justify-between items-start">
          <div>
            <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
              SECTION 02 // FIELD OPERATIONS
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-[#141210]">
              PROFESSIONAL EXPERIENCE
            </h3>
          </div>
          <NewspaperStamp text="VERIFIED" variant="olive" rotation={-1} />
        </div>

        {/* Feature 1: Telangana Police */}
        <div className="p-3.5 bg-[#eae8e2]/70 border-2 border-[#141210] mb-3">
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
        <div className="p-3 bg-[#eae8e2]/50 border border-[#141210] mb-2">
          <div className="flex items-center justify-between border-b border-[#141210]/20 pb-1 mb-1.5">
            <div>
              <h4 className="font-serif-vintage text-sm font-bold text-[#141210]">
                {teleparadigmExp.role}
              </h4>
              <div className="font-typewriter text-[11px] text-[#5a554e]">
                {teleparadigmExp.organization} • {teleparadigmExp.location}
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

        {/* Feature 3: Mithra Agencies */}
        {mithraExp && (
          <div className="p-2.5 bg-[#eae8e2]/40 border border-[#141210]/30 font-newsreader text-[10.5px]">
            <div className="flex justify-between items-baseline font-bold text-[#141210]">
              <span>{mithraExp.role} — {mithraExp.organization}</span>
              <span className="font-mono-tech text-[9px] text-[#5a554e]">{mithraExp.dates}</span>
            </div>
            <p className="italic text-[#4a453e] mt-0.5">{mithraExp.verifiedOutcomes}</p>
          </div>
        )}
      </div>

      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a554e]">
        <span>MYTHREIE DUMPATI // 02. PROFESSIONAL EXPERIENCE</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 04</span>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 05: 03. PROJECTS
// =========================================================================
export const Page05Projects: React.FC = () => {
  const secureShare = RESUME_DATA.projects.find((p) => p.id === 'secureshare')!;
  const qpat = RESUME_DATA.projects.find((p) => p.id === 'qpat')!;
  const smia = RESUME_DATA.projects.find((p) => p.id === 'smia')!;
  const alcohol = RESUME_DATA.projects.find((p) => p.id === 'alcohol-detector')!;

  return (
    <div className="editorial-scroll scroll-smooth p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between h-full overflow-y-auto relative bg-[#faf9f6] text-[#141210]">
      <div>
        {/* Universal Top Header Bar */}
        <NewspaperPageHeader />

        <div className="border-b-2 border-[#141210] pb-2 mb-4 flex justify-between items-start">
          <div>
            <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
              SECTION 03 // TECHNICAL SOLUTIONS
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-[#141210]">
              FLAGSHIP RESEARCH PROJECTS
            </h3>
          </div>
          <NewspaperStamp text="DEPLOYED" variant="crimson" rotation={1} />
        </div>

        {/* SecureShare */}
        <div className="p-3 bg-[#eae8e2]/80 border-2 border-[#141210] mb-2.5">
          <div className="flex items-center justify-between border-b border-[#141210] pb-1 mb-1.5">
            <h4 className="font-serif-vintage text-sm sm:text-base font-bold text-[#141210]">
              {secureShare.title}
            </h4>
            <span className="font-mono-tech text-[8.5px] bg-[#8C3833] text-white px-2 py-0.5 font-bold">
              IPFS + SHAMIR SSS
            </span>
          </div>
          <p className="font-newsreader text-[11px] text-[#2a2521] leading-relaxed mb-1.5">
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
        <div className="p-2.5 bg-[#eae8e2]/60 border border-[#141210] mb-2">
          <div className="flex items-center justify-between border-b border-[#141210]/20 pb-1 mb-1">
            <h4 className="font-serif-vintage text-xs sm:text-sm font-bold text-[#141210]">
              {qpat.title}
            </h4>
            <span className="font-mono-tech text-[8px] text-[#5a554e] font-bold">
              NLP &amp; BLOOM&apos;S TAXONOMY
            </span>
          </div>
          <p className="font-newsreader text-[10.5px] text-[#2a2521] leading-snug">
            {qpat.subtitle} — {qpat.keyImplementations[0]}
          </p>
        </div>

        {/* SMIA & Alcohol Detector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="p-2 bg-[#eae8e2]/50 border border-[#141210]/30">
            <div className="font-serif-vintage text-xs font-bold text-[#141210]">{smia.title}</div>
            <div className="font-mono-tech text-[8px] text-[#8C3833]">FORENSIC EVIDENCE TOOL</div>
            <p className="font-newsreader text-[9.5px] text-[#3a352f] mt-0.5">{smia.subtitle}</p>
          </div>
          <div className="p-2 bg-[#eae8e2]/50 border border-[#141210]/30">
            <div className="font-serif-vintage text-xs font-bold text-[#141210]">{alcohol.title}</div>
            <div className="font-mono-tech text-[8px] text-[#4b4e39]">ARDUINO UNO + MQ-3</div>
            <p className="font-newsreader text-[9.5px] text-[#3a352f] mt-0.5">{alcohol.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a554e]">
        <span>MYTHREIE DUMPATI // 03. PROJECTS</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 05</span>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 06: 04. PUBLICATIONS
// =========================================================================
export const Page06Publications: React.FC = () => {
  return (
    <div className="editorial-scroll scroll-smooth p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between h-full overflow-y-auto relative bg-[#faf9f6] text-[#141210]">
      <div>
        {/* Universal Top Header Bar */}
        <NewspaperPageHeader />

        <div className="border-b-2 border-[#141210] pb-2 mb-4 flex justify-between items-start">
          <div>
            <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
              SECTION 04 // SCHOLARLY CONTRIBUTIONS
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-[#141210]">
              PEER-REVIEWED PUBLICATIONS
            </h3>
          </div>
          <NewspaperStamp text="3 PAPERS" variant="crimson" rotation={2} />
        </div>

        <div className="space-y-3">
          {RESUME_DATA.publications.map((paper, idx) => (
            <div key={idx} className="p-3.5 bg-[#eae8e2]/70 border border-[#141210]">
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
              <p className="font-newsreader text-[11px] text-[#2a2521] mt-1 italic leading-snug">
                {paper.methodology}
              </p>
              {paper.metrics && (
                <div className="mt-1.5 pt-1 border-t border-[#141210]/15 font-mono-tech text-[8.5px] text-[#8C3833] font-bold">
                  {paper.metrics}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a554e]">
        <span>MYTHREIE DUMPATI // 04. PUBLICATIONS</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 06</span>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 07: 05. SKILLS
// =========================================================================
export const Page07Skills: React.FC = () => {
  const skillCategories = [
    { title: 'Cybersecurity & Forensics', items: RESUME_DATA.skills.cybersecurityAndForensics },
    { title: 'Security Tools', items: RESUME_DATA.skills.securityTools },
    { title: 'Programming Languages', items: RESUME_DATA.skills.programmingLanguages },
    { title: 'Distributed Systems & Web', items: [...RESUME_DATA.skills.distributedSystems, ...RESUME_DATA.skills.backendAndWeb] },
    { title: 'AI & Applied Analytics', items: RESUME_DATA.skills.aiAndAppliedData },
    { title: 'Environments & Tools', items: RESUME_DATA.skills.environmentsAndTools },
  ];

  return (
    <div className="editorial-scroll scroll-smooth p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between h-full overflow-y-auto relative bg-[#faf9f6] text-[#141210]">
      <div>
        {/* Universal Top Header Bar */}
        <NewspaperPageHeader />

        <div className="border-b-2 border-[#141210] pb-2 mb-4 flex justify-between items-start">
          <div>
            <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
              SECTION 05 // TECHNICAL COMPETENCIES
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-[#141210]">
              SKILLS &amp; ARTIFACTS
            </h3>
          </div>
          <NewspaperStamp text="VERIFIED" variant="olive" rotation={-2} />
        </div>

        <div className="space-y-2.5">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="p-2.5 bg-[#eae8e2]/60 border border-[#141210]">
              <div className="font-mono-tech text-[9.5px] font-bold uppercase tracking-wider text-[#141210] border-b border-[#141210]/20 pb-0.5 mb-1 flex items-center justify-between">
                <span>{category.title}</span>
                <span className="text-[#8C3833] text-[8px]">[{category.items.length} ITEMS]</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {category.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-1.5 py-0.5 font-mono-tech text-[9.5px] bg-[#f4f3ef] border border-[#141210]/40 text-[#141210] font-semibold"
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
        <span>MYTHREIE DUMPATI // 05. SKILLS</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 07</span>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 08: 06. CERTIFICATIONS
// =========================================================================
export const Page08Certifications: React.FC = () => {
  return (
    <div className="editorial-scroll scroll-smooth p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between h-full overflow-y-auto relative bg-[#faf9f6] text-[#141210]">
      <div>
        {/* Universal Top Header Bar */}
        <NewspaperPageHeader />

        <div className="border-b-2 border-[#141210] pb-2 mb-4 flex justify-between items-start">
          <div>
            <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
              SECTION 06 // PROFESSIONAL CREDENTIALS
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-[#141210]">
              CERTIFICATIONS &amp; ACCREDITATIONS
            </h3>
          </div>
          <NewspaperStamp text="AUDITED" variant="crimson" rotation={1} />
        </div>

        <div className="space-y-3">
          {RESUME_DATA.certifications.map((cert, idx) => (
            <div key={idx} className="p-3 bg-[#eae8e2]/70 border border-[#141210]">
              <div className="flex items-start justify-between gap-2 border-b border-[#141210]/20 pb-1.5 mb-1.5">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#8C3833] flex-shrink-0" />
                  <h4 className="font-serif-vintage text-sm sm:text-base font-bold text-[#141210]">
                    {cert.title}
                  </h4>
                </div>
                {cert.score && (
                  <span className="font-mono-tech text-[9px] bg-[#8C3833] text-white px-2 py-0.5 font-bold flex-shrink-0">
                    {cert.score}
                  </span>
                )}
              </div>
              <div className="flex justify-between font-mono-tech text-[9.5px] text-[#5a554e]">
                <span>ISSUER: {cert.issuer}</span>
                <span>DATE: {cert.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* NLU Odisha Special Callout */}
        <div className="mt-4 p-3 bg-[#eae8e2]/90 border-2 border-[#141210]">
          <div className="font-mono-tech text-[9.5px] uppercase font-bold text-[#8C3833]">
            SPECIAL LEGAL &amp; FORENSIC DISTINCTION
          </div>
          <div className="font-serif-vintage text-xs text-[#2a2521] mt-1 leading-snug">
            National Law University Odisha (NLUO) Post Graduate Diploma in Cyber Law and Digital Forensics, completed with an exceptional 87% Distinction grade.
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a554e]">
        <span>MYTHREIE DUMPATI // 06. CERTIFICATIONS</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 08</span>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 09: 07. ACTIVITIES AND SOCIETIES
// =========================================================================
export const Page09Activities: React.FC = () => {
  return (
    <div className="editorial-scroll scroll-smooth p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between h-full overflow-y-auto relative bg-[#faf9f6] text-[#141210]">
      <div>
        {/* Universal Top Header Bar */}
        <NewspaperPageHeader />

        <div className="border-b-2 border-[#141210] pb-2 mb-4 flex justify-between items-start">
          <div>
            <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
              SECTION 07 // CAMPUS &amp; COMMUNITY
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-[#141210]">
              ACTIVITIES AND SOCIETIES
            </h3>
          </div>
          <NewspaperStamp text="LEADERSHIP" variant="olive" rotation={1} />
        </div>

        {/* Presidency Highlight */}
        <div className="p-3.5 bg-[#eae8e2]/80 border-2 border-[#141210] mb-3">
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

        {/* Activities List */}
        <div className="space-y-2 mt-2">
          {RESUME_DATA.activitiesAndSocieties.map((activity, idx) => (
            <div key={idx} className="p-2.5 bg-[#eae8e2]/60 border border-[#141210]">
              <div className="flex items-center justify-between border-b border-[#141210]/20 pb-1 mb-1">
                <span className="font-serif-vintage text-xs sm:text-sm font-bold text-[#141210]">{activity.role}</span>
                <span className="font-mono-tech text-[8.5px] text-[#8C3833] font-bold">{activity.organization}</span>
              </div>
              <p className="font-newsreader text-[11px] text-[#2a2521] mt-0.5 leading-snug">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a554e]">
        <span>MYTHREIE DUMPATI // 07. ACTIVITIES AND SOCIETIES</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 09</span>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 10: ARCHIVAL TELEGRAPH TRANSMISSION (CONTACT)
// =========================================================================
export const Page10Dispatch: React.FC = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'sent' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedbackMsg('');

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to dispatch transmission.');
      }
      setStatus('sent');
      setFeedbackMsg(data.id ? `TRANSMISSION ID: ${data.id}` : 'Logged into chief investigator ledger.');
      setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
        setStatus('idle');
      }, 5000);
    } catch (err: any) {
      setStatus('error');
      setFeedbackMsg(err.message || 'Dispatch failed. Direct telegraph: mythreie.dumpati@gmail.com');
    }
  };

  return (
    <div className="editorial-scroll scroll-smooth p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between h-full overflow-y-auto relative bg-[#faf9f6] text-[#141210]">
      <div>
        {/* Universal Top Header Bar */}
        <NewspaperPageHeader />

        <div className="border-b-2 border-[#141210] pb-2 mb-4 flex justify-between items-start">
          <div>
            <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
              COMMUNICATION TERMINAL // SECTION 08
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-[#141210]">
              ENCRYPTED TELEGRAPH DISPATCH
            </h3>
          </div>
          <NewspaperStamp text="DISPATCH" variant="crimson" rotation={-1} />
        </div>

        {/* Form */}
        <div className="p-3.5 bg-[#eae8e2]/80 border-2 border-[#141210] mb-3">
          <div className="flex items-center gap-2 border-b border-[#141210] pb-1 mb-2 font-mono-tech text-[10px] uppercase font-bold text-[#141210]">
            <Send className="w-3.5 h-3.5 text-[#8C3833]" />
            <span>TRANSMIT DISPATCH MESSAGE (RESEND VERIFIED)</span>
          </div>

          {status === 'sent' ? (
            <div className="p-4 text-center bg-[#141210] text-[#f5f0e1] font-mono-tech text-xs">
              <span className="text-[#d9c49f] font-bold block mb-1">★ DISPATCH TRANSMITTED ★</span>
              <span>Your message has been received by the investigator.</span>
              {feedbackMsg && <span className="block mt-1 text-[10px] text-[#cfc5b0]">{feedbackMsg}</span>}
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

              {status === 'error' && (
                <div className="p-1.5 bg-[#8C3833]/10 border border-[#8C3833] text-[#8C3833] text-[9.5px]">
                  {feedbackMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-2 bg-[#141210] hover:bg-[#8C3833] disabled:opacity-50 text-[#f5f0e1] font-bold uppercase tracking-widest transition-all cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
              >
                <span>{status === 'loading' ? 'TRANSMITTING VIA RESEND...' : 'TRANSMIT DISPATCH →'}</span>
              </button>
            </form>
          )}
        </div>

        {/* Direct Contacts */}
        <div className="p-3 bg-[#eae8e2]/60 border border-[#141210] font-mono-tech text-[9.5px] space-y-1">
          <div className="flex justify-between">
            <span className="text-[#5a554e]">TELEGRAPH:</span>
            <a href={`mailto:${RESUME_DATA.personal.email}`} className="font-bold underline">{RESUME_DATA.personal.email}</a>
          </div>
          <div className="flex justify-between">
            <span className="text-[#5a554e]">STATION:</span>
            <span>{RESUME_DATA.personal.location}</span>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a554e]">
        <span>MYTHREIE DUMPATI // DISPATCH TERMINAL</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 10</span>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 11: OFFICIAL RECORD DOWNLOAD & EDITORIAL COLOPHON
// =========================================================================
export const Page11Colophon: React.FC = () => {
  return (
    <div className="editorial-scroll scroll-smooth p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between h-full overflow-y-auto relative bg-[#faf9f6] text-[#141210]">
      <div>
        {/* Universal Top Header Bar */}
        <NewspaperPageHeader />

        <div className="border-b-2 border-[#141210] pb-2 mb-4 flex justify-between items-start">
          <div>
            <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
              OFFICIAL ARCHIVE // COLOPHON
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-[#141210]">
              VERIFIED RECORD &amp; COLOPHON
            </h3>
          </div>
          <NewspaperStamp text="RECORD" variant="olive" rotation={1} />
        </div>

        {/* PDF Download Box */}
        <div className="p-3.5 bg-[#141210] text-[#f5f0e1] border-2 border-[#141210] mb-4 flex items-center justify-between">
          <div>
            <div className="font-mono-tech text-[10.5px] uppercase font-bold text-[#d9c49f]">
              OFFICIAL VERIFIED RESUME RECORD
            </div>
            <div className="font-newsreader text-xs italic text-[#cfc5b0] mt-0.5">
              Full cryptographic curriculum ledger (MYTHREIE_DUMPATI.pdf)
            </div>
          </div>
          <a
            href="/MYTHREIE_DUMPATI.pdf"
            download="MYTHREIE_DUMPATI_RESUME.pdf"
            className="px-3.5 py-2 bg-[#8C3833] hover:bg-[#a6423c] text-white font-mono-tech text-xs uppercase font-bold tracking-wider inline-flex items-center gap-1.5 shadow-sm transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>DOWNLOAD PDF</span>
          </a>
        </div>

        {/* Social Dispatches */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <a
            href={RESUME_DATA.personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-[#eae8e2]/70 border border-[#141210] flex items-center justify-between hover:bg-[#141210] hover:text-[#f5f0e1] transition-all font-mono-tech text-[10px] font-bold"
          >
            <div className="flex items-center gap-2">
              <GithubIcon className="w-4 h-4" />
              <span>GITHUB</span>
            </div>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
          <a
            href={RESUME_DATA.personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-[#eae8e2]/70 border border-[#141210] flex items-center justify-between hover:bg-[#141210] hover:text-[#f5f0e1] transition-all font-mono-tech text-[10px] font-bold"
          >
            <div className="flex items-center gap-2">
              <LinkedinIcon className="w-4 h-4" />
              <span>LINKEDIN</span>
            </div>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>

        {/* Editorial Colophon */}
        <div className="p-3 bg-[#eae8e2]/50 border border-[#141210] font-newsreader text-xs text-[#3a352f] leading-relaxed text-center">
          <div className="font-display font-bold uppercase tracking-wider text-[#141210] text-xs mb-1">
            THE CHRONICLE ARCHIVE COLOPHON
          </div>
          <p className="italic">
            Typeset in classic Didone, IM Fell English, and IBM Plex Mono. Authored and maintained by Mythreie Dumpati. Hyderabad, Telangana • India.
          </p>
        </div>
      </div>

      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a554e]">
        <span>MYTHREIE DUMPATI // EDITORIAL COLOPHON</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 11</span>
      </div>
    </div>
  );
};

// =========================================================================
// PAGE 12: ARCHIVAL DIRECTORY & MASTER INDEX SUMMARY
// =========================================================================
export const Page12ClosingBroadside: React.FC<{ onNavigateToSpread?: (spread: number) => void }> = ({
  onNavigateToSpread,
}) => {
  const archives = [
    { num: '01', title: 'ACADEMIC LEDGER', desc: 'KMEC CSE (8.36), Diploma (8.8), ICSE (81.4%)', spread: 3 },
    { num: '02', title: 'PUBLIC SAFETY & INDUSTRY', desc: 'Telangana Police Bharosa Module, Teleparadigm', spread: 3 },
    { num: '03', title: 'ENGINEERING ARTIFACTS', desc: 'SecureShare, QPAT Classifier, SMIA, Interlock', spread: 4 },
    { num: '04', title: 'SCHOLARLY MONOGRAPHS', desc: '3 IEEE & IJRDET Papers with Pareto Benchmarks', spread: 4 },
    { num: '05', title: 'TECHNICAL ARSENAL', desc: 'Cybersecurity, Reverse Eng., Python, ML & Cryptography', spread: 5 },
    { num: '06', title: 'RECOGNIZED CREDENTIALS', desc: 'NLU Odisha 87% Distinction, CCNAv7, IBM Analyst', spread: 5 },
    { num: '07', title: 'INSTITUTIONAL GOVERNANCE', desc: 'Student Body President, Cultural Head, Carnatic Vocalist', spread: 6 },
  ];

  return (
    <div className="editorial-scroll scroll-smooth p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between h-full overflow-y-auto relative bg-[#faf9f6] text-[#141210]">
      <div>
        {/* Universal Top Header Bar */}
        <NewspaperPageHeader />

        <div className="border-b-2 border-[#141210] pb-2 mb-4 flex justify-between items-start">
          <div>
            <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
              FINAL REGISTER // VOLUME 01
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-[#141210]">
              ARCHIVAL DIRECTORY &amp; CLOSING
            </h3>
          </div>
          <NewspaperStamp text="CLASSIFIED" variant="crimson" rotation={-2} />
        </div>

        {/* Archival Table */}
        <div className="border-2 border-[#141210] p-3 bg-[#eae8e2]/70 mb-3 space-y-2">
          <div className="font-mono-tech text-[10px] uppercase font-bold text-[#141210] border-b border-[#141210] pb-1 flex justify-between">
            <span>MASTER DOSSIER DIRECTORY</span>
            <span>HYDERABAD ARCHIVE</span>
          </div>
          <div className="space-y-1.5 font-mono-tech text-[10px]">
            {archives.map((a) => (
              <div
                key={a.num}
                onClick={() => onNavigateToSpread?.(a.spread)}
                className="flex items-start justify-between p-1 hover:bg-[#141210] hover:text-[#f5f0e1] transition-colors cursor-pointer group"
              >
                <div>
                  <span className="font-bold text-[#8C3833] group-hover:text-[#d9c49f] mr-1.5">[{a.num}]</span>
                  <span className="font-bold">{a.title}</span>
                  <p className="text-[9px] text-[#5a554e] group-hover:text-[#cfc5b0]">{a.desc}</p>
                </div>
                <span className="text-[9px] uppercase tracking-wider underline">SPREAD 0{a.spread}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Clearance and Seal */}
        <div className="p-3 bg-[#141210] text-[#f5f0e1] border-2 border-[#141210] flex items-center justify-between">
          <div>
            <span className="font-mono-tech text-[9px] uppercase tracking-widest text-[#d9c49f] block">
              RESEARCH SECURITY CLEARANCE
            </span>
            <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider">
              AUTHORIZATION LEVEL 4 // ARCHIVE COMPLETE
            </span>
          </div>
          <NewspaperStamp text="VERIFIED" variant="olive" rotation={1} />
        </div>
      </div>

      <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a554e]">
        <span>MYTHREIE DUMPATI // CLOSING BROADSIDE</span>
        <span className="font-typewriter font-bold text-[#141210]">PAGE 12</span>
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
      return <Page02Contents onNavigateToSpread={callbacks?.onNavigateToSpread} />;
    case 3:
      return <Page03Education />;
    case 4:
      return <Page04Experience />;
    case 5:
      return <Page05Projects />;
    case 6:
      return <Page06Publications />;
    case 7:
      return <Page07Skills />;
    case 8:
      return <Page08Certifications />;
    case 9:
      return <Page09Activities />;
    case 10:
      return <Page10Dispatch />;
    case 11:
      return <Page11Colophon />;
    case 12:
      return <Page12ClosingBroadside onNavigateToSpread={callbacks?.onNavigateToSpread} />;
    default:
      return <Page01Cover onOpenNewspaper={callbacks?.onOpenNewspaper} />;
  }
};
