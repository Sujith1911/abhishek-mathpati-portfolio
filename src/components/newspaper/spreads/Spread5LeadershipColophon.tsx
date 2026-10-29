import React, { useState } from 'react';
import { Mail, Phone, Download, Check, Copy, Send, FileText, Crown, Music, Users } from 'lucide-react';
import { RESUME_DATA } from '../../../data/resumeData';
import { NewspaperStamp } from '../elements/NewspaperStamp';
import { HandwrittenNote } from '../../HandwrittenNote';
import { GithubIcon, LinkedinIcon } from '../../SocialIcons';
import { soundManager } from '../../../utils/sound';

export const Spread5LeadershipColophon: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [dispatchName, setDispatchName] = useState('');
  const [dispatchMessage, setDispatchMessage] = useState('');
  const [dispatchSent, setDispatchSent] = useState(false);

  const { activitiesAndSocieties, skills } = RESUME_DATA;
  const president = activitiesAndSocieties.find((a) => a.role === 'Student Body President')!;
  const csi = activitiesAndSocieties.find((a) => a.role === 'Social Media Team')!;
  const carnatic = activitiesAndSocieties.find((a) => a.role === 'Carnatic Music Member & Performer')!;

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    soundManager.playStampSound();
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSendTelegram = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dispatchMessage) return;
    soundManager.playStampSound();
    const subject = encodeURIComponent(`Archival Dispatch from ${dispatchName || 'Broadsheet Reader'}`);
    const body = encodeURIComponent(dispatchMessage);
    window.open(`mailto:${RESUME_DATA.personal.email}?subject=${subject}&body=${body}`, '_blank');
    setDispatchSent(true);
    setTimeout(() => setDispatchSent(false), 3000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
      {/* LEFT PAGE: PAGE 09 — LEADERSHIP & CLASSICAL CADRE */}
      <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#141210]/20 relative">
        <div>
          {/* Header */}
          <div className="border-b-2 border-[#141210] pb-2 mb-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
                  GOVERNANCE & ARTS // SECTION 09
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-[#141210]">
                  CAMPUS PRESIDENCY & CADRE
                </h3>
              </div>
              <NewspaperStamp text="PRESIDENCY" variant="crimson" rotation={-2} />
            </div>
            <p className="font-newsreader text-xs italic text-[#4a423a] mt-0.5">
              "Collegiate student governance, technical society leadership, and classical South Indian musical discipline."
            </p>
          </div>

          {/* Student Body President Article */}
          <div className="p-3.5 bg-[#ece4cf]/60 border border-[#141210] space-y-1.5 shadow-xs">
            <div className="flex justify-between items-start">
              <h4 className="font-serif-vintage text-base font-bold text-[#141210] flex items-center gap-1.5">
                <Crown className="w-4 h-4 text-[#8C3833]" />
                <span>STUDENT BODY PRESIDENT</span>
              </h4>
              <span className="font-mono-tech text-[9px] bg-[#141210] text-[#f5f0e1] px-1.5 py-0.5 font-bold">
                KMEC
              </span>
            </div>

            <div className="font-mono-tech text-[10px] text-[#4b4e39] font-bold">
              {president.organization} • Collegiate Executive Governance
            </div>

            <p className="font-serif-vintage text-[11.5px] text-[#141210]/95 leading-relaxed">
              {president.description}
            </p>

            <div className="p-1.5 bg-[#8C3833]/10 border-l-2 border-[#8C3833] font-mono-tech text-[9.5px] font-bold text-[#8C3833]">
              ★ Directed campus welfare initiatives, university stakeholder mediation, and student advocacy.
            </div>
          </div>

          {/* CSI Social Media Team */}
          <div className="mt-2.5 p-3 bg-[#ece4cf]/60 border border-[#141210] space-y-1 shadow-xs">
            <div className="flex justify-between items-start">
              <h4 className="font-serif-vintage text-sm sm:text-base font-bold text-[#141210] flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#4b4e39]" />
                <span>COMPUTER SOCIETY OF INDIA (CSI)</span>
              </h4>
              <span className="font-mono-tech text-[9px] text-[#5a5047] font-bold">
                KMEC
              </span>
            </div>

            <div className="font-mono-tech text-[10px] text-[#8C3833] font-bold">
              {csi.role} • Technical Promotions & Hackathons
            </div>

            <p className="font-serif-vintage text-[11.5px] text-[#141210]/90 leading-snug">
              {csi.description}
            </p>
          </div>

          {/* Carnatic Classical Vocalist & Instrumentalist */}
          <div className="mt-2.5 p-3 bg-[#ece4cf]/60 border border-[#141210] space-y-1 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="font-typewriter text-xs font-bold text-[#141210] flex items-center gap-1.5">
                <Music className="w-3.5 h-3.5 text-[#8C3833]" />
                <span>CARNATIC CLASSICAL ARTS</span>
              </span>
              <span className="font-mono-tech text-[9px] text-[#4b4e39] font-bold">
                Vocal & Instrumental
              </span>
            </div>
            <p className="font-serif-vintage text-[11.5px] text-[#141210]/90 leading-snug">
              {carnatic.description}
            </p>
          </div>

          {/* Leadership Competencies */}
          <div className="mt-2.5 p-2 bg-[#ece4cf]/40 border border-[#141210]/30">
            <div className="font-mono-tech text-[9px] uppercase tracking-wider text-[#5a5047] font-bold mb-1">
              ORGANIZATIONAL & LEADERSHIP COMPETENCIES:
            </div>
            <div className="flex flex-wrap gap-1 font-mono-tech text-[9px]">
              {skills.softSkills.map((s, idx) => (
                <span key={idx} className="px-1.5 py-0.5 border border-[#141210]/30 bg-[#f5f0e1] text-[#141210]">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={-1.5} arrow="up" color="#8C3833">
              Elected Student Body President representing collegiate student governance!
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a5047]">
            <span>THE CHRONICLE // LEADERSHIP CADRE</span>
            <span className="font-typewriter font-bold text-[#141210]">PAGE 09</span>
          </div>
        </div>
      </div>

      {/* RIGHT PAGE: PAGE 10 — ARCHIVAL COLOPHON & DISPATCH */}
      <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-between relative">
        <div>
          {/* Header */}
          <div className="border-b-2 border-[#141210] pb-2 mb-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#8C3833] font-bold block">
                  EPILOGUE // SECTION 10
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-wider text-[#141210]">
                  DISPATCH & COLOPHON
                </h3>
              </div>
              <NewspaperStamp text="END OF ISSUE" variant="olive" rotation={2} />
            </div>
            <p className="font-newsreader text-xs italic text-[#4a423a] mt-0.5">
              "Telegraph correspondence, original document downloads, and official publication colophon."
            </p>
          </div>

          {/* Official Document Download Box */}
          <div className="p-3.5 border-2 border-[#141210] bg-[#ece4cf]/80 shadow-xs text-center">
            <span className="font-mono-tech text-[9px] uppercase tracking-widest text-[#5a5047] block mb-0.5">
              ORIGINAL SOURCE DOCUMENT
            </span>
            <h4 className="font-serif-vintage text-base font-bold text-[#141210]">
              Curriculum Vitae (Authorized PDF)
            </h4>
            <p className="font-serif-vintage text-[11px] text-[#4b4e39] mb-2.5">
              Verified original file: MYTHREIE_DUMPATI.pdf (October 2026)
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <a
                href="/MYTHREIE_DUMPATI.pdf"
                download="MYTHREIE_DUMPATI_RESUME.pdf"
                onClick={() => soundManager.playStampSound()}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#8C3833] hover:bg-[#6c2824] text-[#f5f0e1] font-mono-tech text-xs uppercase tracking-wider font-bold shadow-sm transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF Resume</span>
              </a>
              <a
                href="/MYTHREIE_DUMPATI.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 border border-[#141210] hover:bg-[#141210] hover:text-[#f5f0e1] font-mono-tech text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Inspect Raw PDF</span>
              </a>
            </div>
          </div>

          {/* Official Correspondence Ledger */}
          <div className="mt-3 space-y-1.5 font-mono-tech text-[9.5px]">
            {/* Email */}
            <div className="p-2 border border-[#141210] bg-[#ece4cf]/50 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 truncate">
                <Mail className="w-3 h-3 text-[#8C3833] flex-shrink-0" />
                <span className="text-[#5a5047] font-bold">EMAIL:</span>
                <a
                  href={`mailto:${RESUME_DATA.personal.email}`}
                  className="font-bold text-[#141210] hover:text-[#8C3833] underline truncate"
                >
                  {RESUME_DATA.personal.email}
                </a>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(RESUME_DATA.personal.email, 'email')}
                className="px-1.5 py-0.5 border border-[#141210]/40 hover:bg-[#141210] hover:text-[#f5f0e1] text-[8.5px] font-bold flex items-center gap-1 flex-shrink-0 cursor-pointer"
              >
                {copiedEmail ? <Check className="w-2.5 h-2.5 text-green-700" /> : <Copy className="w-2.5 h-2.5" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Phone */}
            <div className="p-2 border border-[#141210] bg-[#ece4cf]/50 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <Phone className="w-3 h-3 text-[#4b4e39] flex-shrink-0" />
                <span className="text-[#5a5047] font-bold">TELEPHONE:</span>
                <a
                  href={`tel:${RESUME_DATA.personal.phone}`}
                  className="font-bold text-[#141210] hover:text-[#4b4e39] underline"
                >
                  {RESUME_DATA.personal.phone}
                </a>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(RESUME_DATA.personal.phone, 'phone')}
                className="px-1.5 py-0.5 border border-[#141210]/40 hover:bg-[#141210] hover:text-[#f5f0e1] text-[8.5px] font-bold flex items-center gap-1 flex-shrink-0 cursor-pointer"
              >
                {copiedPhone ? <Check className="w-2.5 h-2.5 text-green-700" /> : <Copy className="w-2.5 h-2.5" />}
                <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Profiles */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href={RESUME_DATA.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 border border-[#141210] bg-[#ece4cf]/50 flex items-center gap-1 hover:border-[#8C3833] transition-colors font-bold"
              >
                <LinkedinIcon className="w-3 h-3 text-[#4b4e39]" />
                <span className="truncate">LinkedIn ↗</span>
              </a>
              <a
                href={RESUME_DATA.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 border border-[#141210] bg-[#ece4cf]/50 flex items-center gap-1 hover:border-[#8C3833] transition-colors font-bold"
              >
                <GithubIcon className="w-3 h-3 text-[#141210]" />
                <span className="truncate">GitHub ↗</span>
              </a>
            </div>
          </div>

          {/* Interactive Telegraph Dispatch Form */}
          <div className="mt-3 p-2.5 border-2 border-dashed border-[#141210]/40 bg-[#141210]/[0.02]">
            <span className="font-mono-tech text-[9px] uppercase tracking-wider text-[#8C3833] font-bold block mb-1">
              TRANSMIT TELEGRAPH DISPATCH:
            </span>
            <form onSubmit={handleSendTelegram} className="space-y-1.5">
              <input
                type="text"
                placeholder="Sender Name / Institution"
                value={dispatchName}
                onChange={(e) => setDispatchName(e.target.value)}
                className="w-full text-xs font-typewriter p-1.5 bg-[#f5f0e1] border border-[#141210]/40 focus:outline-none focus:border-[#8C3833] placeholder:text-[#5a5047]/60"
              />
              <textarea
                rows={2}
                placeholder="Inquiry or message to Mythreie Dumpati..."
                value={dispatchMessage}
                onChange={(e) => setDispatchMessage(e.target.value)}
                required
                className="w-full text-xs font-serif-vintage p-1.5 bg-[#f5f0e1] border border-[#141210]/40 focus:outline-none focus:border-[#8C3833] placeholder:text-[#5a5047]/60"
              />
              <button
                type="submit"
                className="w-full py-1.5 px-3 bg-[#141210] hover:bg-[#8C3833] text-[#f5f0e1] font-mono-tech text-[9.5px] uppercase tracking-wider font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Send className="w-3 h-3" />
                <span>{dispatchSent ? 'Telegram Dispatched!' : 'Transmit via Mail Client'}</span>
              </button>
            </form>
          </div>

          {/* Official Publication Colophon & Signature */}
          <div className="mt-3 flex items-center justify-between border-t border-[#141210]/20 pt-2">
            <div>
              <span className="font-mono-tech text-[8.5px] text-[#5a5047] block">INSPECTED & COMPILED BY:</span>
              <span className="font-handwriting text-xl text-[#141210] font-bold block leading-none">
                Mythreie Dumpati
              </span>
              <span className="font-mono-tech text-[8.5px] text-[#4b4e39]">HYDERABAD, INDIA</span>
            </div>

            <div className="w-14 h-14 rounded-full border-2 border-[#8C3833] border-double flex flex-col items-center justify-center text-[#8C3833] font-typewriter text-[7.5px] transform rotate-12 text-center p-1">
              <span>OFFICIAL</span>
              <span className="font-bold text-[9px]">GAZETTE</span>
              <span>2026</span>
            </div>
          </div>
        </div>

        {/* Running Footer */}
        <div className="pt-2">
          <div className="pt-2 border-t border-[#141210]/30 flex justify-between items-center text-[9.5px] font-mono-tech text-[#5a5047]">
            <span>THE CHRONICLE // EPILOGUE</span>
            <span className="font-typewriter font-bold text-[#141210]">PAGE 10 • FINIS</span>
          </div>
        </div>
      </div>
    </div>
  );
};
