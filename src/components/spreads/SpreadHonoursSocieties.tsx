import React from 'react';
import { RESUME_DATA } from '../../data/resumeData';
import { ArchivalStamp } from '../ArchivalStamp';
import { HandwrittenNote } from '../HandwrittenNote';
import { Trophy } from 'lucide-react';

export const SpreadHonoursSocieties: React.FC = () => {
  const { achievements, activitiesAndSocieties, skills } = RESUME_DATA;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
      {/* LEFT PAGE: SECTION IX — COMPETITIVE HONOURS & DISTINCTIONS */}
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#211F1B]/15 relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start border-b border-[#211F1B]/20 pb-2">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
                DISTINCTIONS SECTION 09 // LAURELS
              </span>
              <h2 className="font-typewriter text-lg sm:text-xl font-bold uppercase tracking-wider text-[#211F1B]">
                COMPETITIVE HONOURS
              </h2>
            </div>
            <ArchivalStamp text="1ST PLACE CHAMPION" variant="red" rotation={-3} />
          </div>

          {/* Achievement 1: Aurora National Contest */}
          <div className="mt-4 p-3 bg-[#e8deca]/60 border border-[#211F1B]/30 rounded-xs space-y-2 relative">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-1.5 font-typewriter text-xs font-bold text-[#8C3833]">
                <Trophy className="w-4 h-4 text-[#8C3833]" />
                <span>1ST PLACE — NATIONAL CODING CONTEST</span>
              </div>
              <span className="font-mono-tech text-[9px] text-[#686158]">
                {achievements[0].date}
              </span>
            </div>

            <div className="font-mono-tech text-[10px] text-[#5b583f] font-semibold">
              {achievements[0].issuer}
            </div>

            <p className="font-serif-vintage text-xs text-[#211F1B] leading-relaxed">
              {achievements[0].description}
            </p>

            <div className="p-1.5 bg-[#8C3833]/10 border-l-2 border-[#8C3833] font-mono-tech text-[10px] font-bold text-[#8C3833]">
              ★ {achievements[0].highlightMetric}
            </div>
          </div>

          {/* Achievement 2: Techtonic '24 Hackathon Winner */}
          <div className="mt-3 p-3 bg-[#e8deca]/60 border border-[#211F1B]/30 rounded-xs space-y-2 relative">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-1.5 font-typewriter text-xs font-bold text-[#5b583f]">
                <Trophy className="w-4 h-4 text-[#5b583f]" />
                <span>1ST PLACE — TECHTONIC '24 HACKATHON</span>
              </div>
              <span className="font-mono-tech text-[9px] text-[#686158]">
                {achievements[1].date}
              </span>
            </div>

            <div className="font-mono-tech text-[10px] text-[#8C3833] font-semibold">
              {achievements[1].issuer}
            </div>

            <p className="font-serif-vintage text-xs text-[#211F1B] leading-relaxed">
              {achievements[1].description}
            </p>

            <div className="p-1.5 bg-[#5b583f]/10 border-l-2 border-[#5b583f] font-mono-tech text-[10px] font-bold text-[#5b583f]">
              ★ {achievements[1].highlightMetric}
            </div>
          </div>

          {/* Archival Citation */}
          <div className="mt-3 p-2 border border-dashed border-[#211F1B]/20 font-serif-vintage text-xs text-[#403c35] italic">
            "Both honours testify to exceptional computational velocity, algorithmic accuracy under pressure, and proven technical squad leadership."
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={-2} arrow="up" color="#8C3833">
              Outperformed 200 participants with 95% accuracy rate!
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-[#211F1B]/15 flex justify-between items-center text-[10px] font-mono-tech text-[#686158]">
            <span>THE ARCHIVE // COMPETITIVE HONOURS</span>
            <span className="font-typewriter font-bold text-[#211F1B]">PAGE 15</span>
          </div>
        </div>
      </div>

      {/* RIGHT PAGE: SECTION X — ACTIVITIES, CADRE & LEADERSHIP */}
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start border-b border-[#211F1B]/20 pb-2">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#686158] block">
                CADRE SECTION 10 // LEADERSHIP
              </span>
              <h2 className="font-typewriter text-lg sm:text-xl font-bold uppercase tracking-wider text-[#211F1B]">
                ACTIVITIES & SOCIETIES
              </h2>
            </div>
            <ArchivalStamp text="CADRE CORPS" variant="olive" rotation={2} />
          </div>

          {/* Activities List */}
          <div className="mt-3 space-y-2">
            {activitiesAndSocieties.map((act, idx) => (
              <div
                key={idx}
                className="p-2 border border-[#211F1B]/20 bg-[#211F1B]/2 rounded-xs space-y-0.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-typewriter text-xs font-bold text-[#211F1B]">
                    {act.role}
                  </span>
                  <span className="font-mono-tech text-[9px] text-[#8C3833] font-semibold">
                    {act.organization}
                  </span>
                </div>
                <p className="font-serif-vintage text-[11px] text-[#332f28] leading-snug">
                  {act.description}
                </p>
              </div>
            ))}
          </div>

          {/* Leadership & Soft Skills Box */}
          <div className="mt-3 p-2.5 bg-[#e8deca]/40 border border-[#211F1B]/20">
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
              National Cadet Corps (NCC) & Martial Arts cultivate discipline.
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
