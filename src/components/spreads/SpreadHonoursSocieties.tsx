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
      <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-black/20 relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start border-b border-black/20 pb-3">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-black font-bold block">
                LEADERSHIP SECTION 09 // GOVERNANCE
              </span>
              <h2 className="font-typewriter text-lg sm:text-xl font-bold uppercase tracking-wider text-black">
                INSTITUTIONAL LEADERSHIP
              </h2>
            </div>
            <ArchivalStamp text="PRESIDENCY" variant="dark" rotation={-3} />
          </div>

          {/* Student Body President Card */}
          <div className="mt-4 p-4 bg-white border-2 border-black rounded-xs space-y-2 relative shadow-xs">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2 font-typewriter text-sm font-bold text-black">
                <Crown className="w-4 h-4 text-black" />
                <span>STUDENT BODY PRESIDENT</span>
              </div>
              <span className="font-mono-tech text-[9.5px] bg-black text-white px-2 py-0.5 font-bold">
                KMEC
              </span>
            </div>

            <div className="font-mono-tech text-xs text-neutral-800 font-bold">
              {presidentActivity.organization}
            </div>

            <p className="font-serif-vintage text-xs text-neutral-900 leading-relaxed">
              {presidentActivity.description}
            </p>

            <div className="p-2.5 bg-black/[0.04] border-l-2 border-black font-mono-tech text-[10px] font-bold text-black">
              ★ Spearheaded institutional policy improvements, campus initiatives, and student body advocacy.
            </div>
          </div>

          {/* CSI Social Media Team */}
          <div className="mt-3.5 p-4 bg-white border-2 border-black rounded-xs space-y-2 relative shadow-xs">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2 font-typewriter text-xs font-bold text-black">
                <Users className="w-4 h-4 text-black" />
                <span>COMPUTER SOCIETY OF INDIA (CSI)</span>
              </div>
              <span className="font-mono-tech text-[9.5px] border border-black px-1.5 py-0.5 font-bold text-black">
                KMEC
              </span>
            </div>

            <div className="font-mono-tech text-xs text-neutral-800 font-bold">
              {csiActivity.role} • {csiActivity.organization}
            </div>

            <p className="font-serif-vintage text-xs text-neutral-900 leading-relaxed">
              {csiActivity.description}
            </p>

            <div className="p-2 bg-black/[0.04] border-l-2 border-black font-mono-tech text-[10px] font-bold text-black">
              ★ Directed multi-platform digital marketing and technical event promotions.
            </div>
          </div>

          {/* Archival Citation */}
          <div className="mt-3.5 p-2.5 border border-dashed border-black/30 font-serif-vintage text-xs text-neutral-800 italic">
            "Proven administrative diplomacy, executive campus representation, and large-scale technical community leadership."
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={-2} arrow="up" color="#000000">
              Elected Student Body President representing collegiate student governance!
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-black/20 flex justify-between items-center text-[10px] font-mono-tech text-neutral-600">
            <span>THE ARCHIVE // LEADERSHIP</span>
            <span className="font-typewriter font-bold text-black">PAGE 15</span>
          </div>
        </div>
      </div>

      {/* RIGHT PAGE: SECTION X — ACTIVITIES, CADRE & CLASSICAL ARTS */}
      <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start border-b border-black/20 pb-3">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-neutral-600 block">
                CADRE SECTION 10 // ARTS & FESTIVALS
              </span>
              <h2 className="font-typewriter text-lg sm:text-xl font-bold uppercase tracking-wider text-black">
                CULTURAL & EVENT CADRE
              </h2>
            </div>
            <ArchivalStamp text="CADRE CORPS" variant="olive" rotation={2} />
          </div>

          {/* Event Organizer Card */}
          <div className="mt-4 p-3.5 border-2 border-black bg-white rounded-xs space-y-1 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="font-typewriter text-xs font-bold text-black flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-black" />
                <span>{eventActivity.role}</span>
              </span>
              <span className="font-mono-tech text-[9.5px] font-bold text-black bg-neutral-100 px-2 py-0.5 border border-black">
                {eventActivity.organization}
              </span>
            </div>
            <p className="font-serif-vintage text-xs text-neutral-900 leading-relaxed">
              {eventActivity.description}
            </p>
          </div>

          {/* Carnatic Music Performer Card */}
          <div className="mt-3.5 p-3.5 border-2 border-black bg-white rounded-xs space-y-1 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="font-typewriter text-xs font-bold text-black flex items-center gap-1.5">
                <Music className="w-3.5 h-3.5 text-black" />
                <span>{carnaticActivity.role}</span>
              </span>
              <span className="font-mono-tech text-[9.5px] font-bold text-neutral-700">
                Classical Vocal & Instrumental
              </span>
            </div>
            <p className="font-serif-vintage text-xs text-neutral-900 leading-relaxed">
              {carnaticActivity.description}
            </p>
          </div>

          {/* Leadership & Soft Skills Box */}
          <div className="mt-4 p-3.5 bg-neutral-100 border border-black/40">
            <span className="font-mono-tech text-[9px] uppercase tracking-wider text-black font-bold block mb-1.5">
              ORGANIZATIONAL & LEADERSHIP COMPETENCIES:
            </span>
            <div className="flex flex-wrap gap-1.5 font-mono-tech text-[9px]">
              {skills.softSkills.map((skill, idx) => (
                <span key={idx} className="px-2 py-0.5 border border-black bg-white text-black font-semibold">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={1} arrow="left" color="#000000">
              Carnatic classical music vocalist & instrumentalist!
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-black/20 flex justify-between items-center text-[10px] font-mono-tech text-neutral-600">
            <span>THE ARCHIVE // SOCIETIES & CADRE</span>
            <span className="font-typewriter font-bold text-black">PAGE 16</span>
          </div>
        </div>
      </div>
    </div>
  );
};
