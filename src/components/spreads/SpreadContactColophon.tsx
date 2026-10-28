import React, { useState } from 'react';
import { Mail, Phone, Download, Check, Copy, Send, FileText } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';
import { ArchivalStamp } from '../ArchivalStamp';
import { HandwrittenNote } from '../HandwrittenNote';
import { GithubIcon, LinkedinIcon } from '../SocialIcons';
import { soundManager } from '../../utils/sound';

export const SpreadContactColophon: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [dispatchName, setDispatchName] = useState('');
  const [dispatchMessage, setDispatchMessage] = useState('');
  const [dispatchSent, setDispatchSent] = useState(false);

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
    const subject = encodeURIComponent(`Archival Dispatch from ${dispatchName || 'Inquirer'}`);
    const body = encodeURIComponent(dispatchMessage);
    window.open(`mailto:${RESUME_DATA.personal.email}?subject=${subject}&body=${body}`, '_blank');
    setDispatchSent(true);
    setTimeout(() => setDispatchSent(false), 3000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
      {/* LEFT PAGE: SECTION XI — DISPATCH & CORRESPONDENCE */}
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#211F1B]/15 relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start border-b border-[#211F1B]/20 pb-2">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#686158] block">
                CORRESPONDENCE SECTION 11 // TELEGRAPH
              </span>
              <h2 className="font-typewriter text-lg sm:text-xl font-bold uppercase tracking-wider text-[#211F1B]">
                DISPATCH & INQUIRIES
              </h2>
            </div>
            <ArchivalStamp text="OFFICIAL DISPATCH" variant="red" rotation={-2} />
          </div>

          {/* Official Contact Ledger */}
          <div className="mt-3 space-y-2 font-mono-tech text-[10px]">
            {/* Email */}
            <div className="p-2 border border-[#211F1B]/20 bg-[#e8deca]/40 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 truncate">
                <Mail className="w-3.5 h-3.5 text-[#8C3833] flex-shrink-0" />
                <span className="text-[#686158]">EMAIL:</span>
                <a
                  href={`mailto:${RESUME_DATA.personal.email}`}
                  className="font-bold text-[#211F1B] hover:text-[#8C3833] truncate underline"
                >
                  {RESUME_DATA.personal.email}
                </a>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(RESUME_DATA.personal.email, 'email')}
                className="px-1.5 py-0.5 border border-[#211F1B]/30 hover:bg-[#211F1B]/10 text-[9px] flex items-center gap-1 flex-shrink-0 cursor-pointer"
              >
                {copiedEmail ? <Check className="w-2.5 h-2.5 text-green-700" /> : <Copy className="w-2.5 h-2.5" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Phone */}
            <div className="p-2 border border-[#211F1B]/20 bg-[#e8deca]/40 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#5b583f] flex-shrink-0" />
                <span className="text-[#686158]">TELEPHONE:</span>
                <a
                  href={`tel:${RESUME_DATA.personal.phone}`}
                  className="font-bold text-[#211F1B] hover:text-[#5b583f] underline"
                >
                  {RESUME_DATA.personal.phone}
                </a>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(RESUME_DATA.personal.phone, 'phone')}
                className="px-1.5 py-0.5 border border-[#211F1B]/30 hover:bg-[#211F1B]/10 text-[9px] flex items-center gap-1 flex-shrink-0 cursor-pointer"
              >
                {copiedPhone ? <Check className="w-2.5 h-2.5 text-green-700" /> : <Copy className="w-2.5 h-2.5" />}
                <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* LinkedIn & GitHub */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href={RESUME_DATA.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#211F1B]/20 bg-[#e8deca]/40 flex items-center gap-1.5 hover:border-[#8C3833] transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#5b583f]" />
                <span className="truncate font-semibold">LinkedIn Profile ↗</span>
              </a>
              <a
                href={RESUME_DATA.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#211F1B]/20 bg-[#e8deca]/40 flex items-center gap-1.5 hover:border-[#8C3833] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#211F1B]" />
                <span className="truncate font-semibold">GitHub Archives ↗</span>
              </a>
            </div>
          </div>

          {/* Interactive Vintage Dispatch Form */}
          <div className="mt-4 p-3 border-2 border-dashed border-[#211F1B]/30 bg-[#211F1B]/3">
            <span className="font-mono-tech text-[9px] uppercase tracking-wider text-[#8C3833] font-bold block mb-1">
              TELEGRAPH DISPATCH TERMINAL:
            </span>
            <form onSubmit={handleSendTelegram} className="space-y-2">
              <div>
                <input
                  type="text"
                  placeholder="Your Name / Institution"
                  value={dispatchName}
                  onChange={(e) => setDispatchName(e.target.value)}
                  className="w-full text-xs font-typewriter p-1.5 bg-[#f1e8d5] border border-[#211F1B]/30 focus:outline-none focus:border-[#8C3833] placeholder:text-[#686158]/60"
                />
              </div>
              <div>
                <textarea
                  rows={2}
                  placeholder="Draft your dispatch message or inquiry here..."
                  value={dispatchMessage}
                  onChange={(e) => setDispatchMessage(e.target.value)}
                  required
                  className="w-full text-xs font-serif-vintage p-1.5 bg-[#f1e8d5] border border-[#211F1B]/30 focus:outline-none focus:border-[#8C3833] placeholder:text-[#686158]/60"
                />
              </div>
              <button
                type="submit"
                className="w-full py-1.5 px-3 bg-[#211F1B] hover:bg-[#8C3833] text-[#f1e8d5] font-mono-tech text-[10px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
              >
                <Send className="w-3 h-3" />
                <span>{dispatchSent ? 'Telegram Dispatched!' : 'Transmit via Mail Client'}</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={-1.5} arrow="down" color="#8C3833">
              Correspondence welcomed regarding research & engineering opportunities.
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-[#211F1B]/15 flex justify-between items-center text-[10px] font-mono-tech text-[#686158]">
            <span>THE ARCHIVE // DISPATCH</span>
            <span className="font-typewriter font-bold text-[#211F1B]">PAGE 17</span>
          </div>
        </div>
      </div>

      {/* RIGHT PAGE: SECTION XII — ARCHIVAL COLOPHON & END OF VOLUME */}
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start border-b border-[#211F1B]/20 pb-2">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#686158] block">
                COLOPHON SECTION 12 // CONCLUSION
              </span>
              <h2 className="font-typewriter text-lg sm:text-xl font-bold uppercase tracking-wider text-[#211F1B]">
                ARCHIVAL COLOPHON
              </h2>
            </div>
            <ArchivalStamp text="END OF VOLUME" variant="olive" rotation={2} />
          </div>

          {/* Official Document Download Box */}
          <div className="mt-4 p-4 border-2 border-[#211F1B]/40 bg-[#e8deca]/70 shadow-sm text-center">
            <span className="font-mono-tech text-[9px] uppercase tracking-[0.2em] text-[#686158] block mb-1">
              ORIGINAL SOURCE DOCUMENT
            </span>
            <h3 className="font-serif-vintage text-base font-bold text-[#211F1B] mb-1">
              Curriculum Vitae (PDF)
            </h3>
            <p className="font-serif-vintage text-xs text-[#5b583f] mb-3">
              Verified original copy: MYTHREIE_DUMPATI.pdf (Oct 2026)
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <a
                href="/MYTHREIE_DUMPATI.pdf"
                download="MYTHREIE_DUMPATI_RESUME.pdf"
                onClick={() => soundManager.playStampSound()}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#8C3833] hover:bg-[#6b2622] text-[#f1e8d5] font-mono-tech text-xs uppercase tracking-wider shadow-md transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF Resume</span>
              </a>
              <a
                href="/MYTHREIE_DUMPATI.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 border border-[#211F1B]/30 hover:bg-[#211F1B]/10 font-mono-tech text-xs uppercase tracking-wider text-[#211F1B] transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Inspect Raw PDF</span>
              </a>
            </div>
          </div>

          {/* Typographic Colophon Notes */}
          <div className="mt-4 p-3 border border-[#211F1B]/20 bg-[#211F1B]/2 font-serif-vintage text-xs leading-relaxed text-[#3d3831] space-y-1.5">
            <span className="font-mono-tech text-[9px] uppercase tracking-wider font-bold text-[#686158] block">
              COLOPHON & ARCHIVAL NOTES:
            </span>
            <p>
              This digital monograph was typeset in <em>Special Elite</em> (vintage typewriter), <em>IM Fell English</em> (scholarly letterpress), <em>IBM Plex Mono</em> (cryptographic registers), and <em>Caveat</em> (researcher annotations).
            </p>
            <p className="text-[11px] text-[#686158]">
              All achievements, citations, and credentials represent factual extracts from the authorized curriculum vitae of Mythreie Dumpati.
            </p>
          </div>

          {/* Inspector's Signature Mark */}
          <div className="mt-4 flex items-center justify-between border-t border-[#211F1B]/20 pt-3">
            <div>
              <span className="font-mono-tech text-[9px] text-[#686158] block">INSPECTED & COMPILED BY:</span>
              <span className="font-handwriting text-2xl text-[#211F1B] font-bold block">
                Mythreie Dumpati
              </span>
              <span className="font-mono-tech text-[9px] text-[#5b583f]">HYDERABAD, INDIA</span>
            </div>

            <div className="w-16 h-16 rounded-full border-2 border-[#8C3833] border-double flex flex-col items-center justify-center text-[#8C3833] font-typewriter text-[8px] transform rotate-12 p-1 text-center">
              <span>OFFICIAL</span>
              <span className="font-bold text-[10px]">SEAL</span>
              <span>2026</span>
            </div>
          </div>
        </div>

        {/* Running Footer */}
        <div className="pt-2">
          <div className="pt-2 border-t border-[#211F1B]/15 flex justify-between items-center text-[10px] font-mono-tech text-[#686158]">
            <span>THE ARCHIVE // EPILOGUE</span>
            <span className="font-typewriter font-bold text-[#211F1B]">PAGE 18 • FINIS</span>
          </div>
        </div>
      </div>
    </div>
  );
};
