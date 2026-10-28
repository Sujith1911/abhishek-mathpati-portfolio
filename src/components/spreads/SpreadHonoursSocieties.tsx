import React from 'react';
import { RESUME_DATA } from '../../data/resumeData';
import { ArchivalStamp } from '../ArchivalStamp';
import { HandwrittenNote } from '../HandwrittenNote';
import { Users, Music, Crown, Calendar } from 'lucide-react';

export const SpreadHonoursSocieties: React.FC = () => {
  const { activitiesAndSocieties, skills } = RESUME_DATA;

  const presidentActivity = activitiesAndSocieties.find((a) => a.role === 'Student Body President')!;
  const csiActivity = activitiesAndSocieties.find((a) => a.role === 'Social Media Team')!;
  const eventActivity = activitiesAndSocieties.find((a) => a.role === 'Event Organizer')!;
  const carnaticActivity = activitiesAndSocieties.find((a) => a.role === 'Carnatic Music Member & Performer')!;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
      {/* LEFT PAGE: SECTION IX — INSTITUTIONAL LEADERSHIP & PRESIDENCY */}
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#211F1B]/15 relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start border-b border-[#211F1B]/20 pb-2">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
                LEADERSHIP SECTION 09 // GOVERNANCE
              </span>
              <h2 className="font-typewriter text-lg sm:text-xl font-bold uppercase tracking-wider text-[#211F1B]">
                INSTITUTIONAL LEADERSHIP
              </h2>
            </div>
            <ArchivalStamp text="PRESIDENCY" variant="red" rotation={-3} />
          </div>

          {/* Student Body President Card */}
          <div className="mt-4 p-3.5 bg-[#e8deca]/60 border border-[#211F1B]/30 rounded-xs space-y-2 relative">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-1.5 font-typewriter text-sm font-bold text-[#8C3833]">
                <Crown className="w-4 h-4 text-[#8C3833]" />
                <span>STUDENT BODY PRESIDENT</span>
              </div>
              <span className="font-mono-tech text-[9px] text-[#686158]">
                KMEC
              </span>
            </div>

            <div className="font-mono-tech text-[10px] text-[#5b583f] font-semibold">
              {presidentActivity.organization}
            </div>

            <p className="font-serif-vintage text-xs text-[#211F1B] leading-relaxed">
              {presidentActivity.description}
            </p>

            <div className="p-2 bg-[#8C3833]/10 border-l-2 border-[#8C3833] font-mono-tech text-[10px] font-bold text-[#8C3833]">
              ★ Spearheaded institutional policy improvements, campus initiatives, and student body advocacy.
            </div>
          </div>

          {/* CSI Social Media Team */}
          <div className="mt-3 p-3.5 bg-[#e8deca]/60 border border-[#211F1B]/30 rounded-xs space-y-2 relative">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-1.5 font-typewriter text-xs font-bold text-[#5b583f]">
                <Users className="w-4 h-4 text-[#5b583f]" />
                <span>COMPUTER SOCIETY OF INDIA (CSI)</span>
              </div>
              <span className="font-mono-tech text-[9px] text-[#686158]">
                KMEC
              </span>
            </div>

            <div className="font-mono-tech text-[10px] text-[#8C3833] font-semibold">
              {csiActivity.role} • {csiActivity.organization}
            </div>

            <p className="font-serif-vintage text-xs text-[#211F1B] leading-relaxed">
              {csiActivity.description}
            </p>

            <div className="p-1.5 bg-[#5b583f]/10 border-l-2 border-[#5b583f] font-mono-tech text-[10px] font-bold text-[#5b583f]">
              ★ Directed multi-platform digital marketing and technical event promotions.
            </div>
          </div>

          {/* Archival Citation */}
          <div className="mt-3 p-2 border border-dashed border-[#211F1B]/20 font-serif-vintage text-xs text-[#403c35] italic">
            "Proven administrative diplomacy, executive campus representation, and large-scale technical community leadership."
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={-2} arrow="up" color="#8C3833">
              Elected Student Body President representing collegiate student governance!
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-[#211F1B]/15 flex justify-between items-center text-[10px] font-mono-tech text-[#686158]">
            <span>THE ARCHIVE // LEADERSHIP</span>
            <span className="font-typewriter font-bold text-[#211F1B]">PAGE 15</span>
          </div>
        </div>
      </div>

      {/* RIGHT PAGE: SECTION X — ACTIVITIES, CADRE & CLASSICAL ARTS */}
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start border-b border-[#211F1B]/20 pb-2">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#686158] block">
                CADRE SECTION 10 // ARTS & FESTIVALS
              </span>
              <h2 className="font-typewriter text-lg sm:text-xl font-bold uppercase tracking-wider text-[#211F1B]">
                CULTURAL & EVENT CADRE
              </h2>
            </div>
            <ArchivalStamp text="CADRE CORPS" variant="olive" rotation={2} />
          </div>

          {/* Event Organizer Card */}
          <div className="mt-4 p-3 border border-[#211F1B]/20 bg-[#211F1B]/2 rounded-xs space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-typewriter text-xs font-bold text-[#211F1B] flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#5b583f]" />
                <span>{eventActivity.role}</span>
              </span>
              <span className="font-mono-tech text-[9px] text-[#8C3833] font-semibold">
                {eventActivity.organization}
              </span>
            </div>
            <p className="font-serif-vintage text-xs text-[#332f28] leading-relaxed">
              {eventActivity.description}
            </p>
          </div>

          {/* Carnatic Music Performer Card */}
          <div className="mt-3 p-3 border border-[#211F1B]/20 bg-[#211F1B]/2 rounded-xs space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-typewriter text-xs font-bold text-[#211F1B] flex items-center gap-1.5">
                <Music className="w-3.5 h-3.5 text-[#8C3833]" />
                <span>{carnaticActivity.role}</span>
              </span>
              <span className="font-mono-tech text-[9px] text-[#5b583f] font-semibold">
                Classical Vocal & Instrumental
              </span>
            </div>
            <p className="font-serif-vintage text-xs text-[#332f28] leading-relaxed">
              {carnaticActivity.description}
            </p>
          </div>

          {/* Leadership & Soft Skills Box */}
          <div className="mt-4 p-3 bg-[#e8deca]/40 border border-[#211F1B]/20">
            <span className="font-mono-tech text-[9px] uppercase tracking-wider text-[#686158] font-bold block mb-1">
              ORGANIZATIONAL & LEADERSHIP COMPETENCIES:
            </span>
            <div className="flex flex-wrap gap-1 font-mono-tech text-[9px]">
              {skills.softSkills.map((skill, idx) => (
                <span key={idx} className="px-1.5 py-0.5 border border-[#211F1B]/25 bg-[#f1e8d5] text-[#211F1B]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={1} arrow="left" color="#5b583f">
              Carnatic classical music vocalist & instrumentalist!
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-[#211F1B]/15 flex justify-between items-center text-[10px] font-mono-tech text-[#686158]">
            <span>THE ARCHIVE // SOCIETIES & CADRE</span>
            <span className="font-typewriter font-bold text-[#211F1B]">PAGE 16</span>
          </div>
        </div>
      </div>
    </div>
  );
};
