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
      <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-black/20 relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start border-b border-black/20 pb-3">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-neutral-600 block">
                CORRESPONDENCE SECTION 11 // TELEGRAPH
              </span>
              <h2 className="font-typewriter text-lg sm:text-xl font-bold uppercase tracking-wider text-black">
                DISPATCH & INQUIRIES
              </h2>
            </div>
            <ArchivalStamp text="OFFICIAL DISPATCH" variant="dark" rotation={-2} />
          </div>

          {/* Official Contact Ledger */}
          <div className="mt-4 space-y-2.5 font-mono-tech text-[10px]">
            {/* Email */}
            <div className="p-2.5 border-2 border-black bg-white flex items-center justify-between gap-2 shadow-xs">
              <div className="flex items-center gap-2 truncate">
                <Mail className="w-3.5 h-3.5 text-black flex-shrink-0" />
                <span className="text-neutral-600 font-bold">EMAIL:</span>
                <a
                  href={`mailto:${RESUME_DATA.personal.email}`}
                  className="font-bold text-black hover:underline truncate"
                >
                  {RESUME_DATA.personal.email}
                </a>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(RESUME_DATA.personal.email, 'email')}
                className="px-2 py-0.5 border border-black hover:bg-black hover:text-white text-[9px] font-bold flex items-center gap-1 flex-shrink-0 cursor-pointer transition-colors"
              >
                {copiedEmail ? <Check className="w-2.5 h-2.5" /> : <Copy className="w-2.5 h-2.5" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Phone */}
            <div className="p-2.5 border-2 border-black bg-white flex items-center justify-between gap-2 shadow-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-black flex-shrink-0" />
                <span className="text-neutral-600 font-bold">TELEPHONE:</span>
                <a
                  href={`tel:${RESUME_DATA.personal.phone}`}
                  className="font-bold text-black hover:underline"
                >
                  {RESUME_DATA.personal.phone}
                </a>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(RESUME_DATA.personal.phone, 'phone')}
                className="px-2 py-0.5 border border-black hover:bg-black hover:text-white text-[9px] font-bold flex items-center gap-1 flex-shrink-0 cursor-pointer transition-colors"
              >
                {copiedPhone ? <Check className="w-2.5 h-2.5" /> : <Copy className="w-2.5 h-2.5" />}
                <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* LinkedIn & GitHub */}
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={RESUME_DATA.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border-2 border-black bg-white flex items-center gap-2 hover:bg-black hover:text-white transition-colors font-bold shadow-xs"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-current" />
                <span className="truncate">LinkedIn Profile ↗</span>
              </a>
              <a
                href={RESUME_DATA.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border-2 border-black bg-white flex items-center gap-2 hover:bg-black hover:text-white transition-colors font-bold shadow-xs"
              >
                <GithubIcon className="w-3.5 h-3.5 text-current" />
                <span className="truncate">GitHub Archives ↗</span>
              </a>
            </div>
          </div>

          {/* Interactive Vintage Dispatch Form */}
          <div className="mt-4 p-3.5 border-2 border-dashed border-black bg-black/[0.02]">
            <span className="font-mono-tech text-[9px] uppercase tracking-wider text-black font-bold block mb-1.5">
              TELEGRAPH DISPATCH TERMINAL:
            </span>
            <form onSubmit={handleSendTelegram} className="space-y-2.5">
              <div>
                <input
                  type="text"
                  placeholder="Your Name / Institution"
                  value={dispatchName}
                  onChange={(e) => setDispatchName(e.target.value)}
                  className="w-full text-xs font-typewriter p-2 bg-white border border-black focus:outline-none focus:ring-1 focus:ring-black placeholder:text-neutral-500"
                />
              </div>
              <div>
                <textarea
                  rows={2}
                  placeholder="Draft your dispatch message or inquiry here..."
                  value={dispatchMessage}
                  onChange={(e) => setDispatchMessage(e.target.value)}
                  required
                  className="w-full text-xs font-serif-vintage p-2 bg-white border border-black focus:outline-none focus:ring-1 focus:ring-black placeholder:text-neutral-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-3 bg-black hover:bg-neutral-800 text-white font-mono-tech text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
              >
                <Send className="w-3 h-3 text-white" />
                <span>{dispatchSent ? 'Telegram Dispatched!' : 'Transmit via Mail Client'}</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2">
          <div className="mb-2">
            <HandwrittenNote rotation={-1.5} arrow="down" color="#000000">
              Correspondence welcomed regarding research & engineering opportunities.
            </HandwrittenNote>
          </div>
          <div className="pt-2 border-t border-black/20 flex justify-between items-center text-[10px] font-mono-tech text-neutral-600">
            <span>THE ARCHIVE // DISPATCH</span>
            <span className="font-typewriter font-bold text-black">PAGE 17</span>
          </div>
        </div>
      </div>

      {/* RIGHT PAGE: SECTION XII — ARCHIVAL COLOPHON & END OF VOLUME */}
      <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between relative">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start border-b border-black/20 pb-3">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-neutral-600 block">
                COLOPHON SECTION 12 // CONCLUSION
              </span>
              <h2 className="font-typewriter text-lg sm:text-xl font-bold uppercase tracking-wider text-black">
                ARCHIVAL COLOPHON
              </h2>
            </div>
            <ArchivalStamp text="END OF VOLUME" variant="olive" rotation={2} />
          </div>

          {/* Official Document Download Box */}
          <div className="mt-4 p-5 border-2 border-black bg-white shadow-md text-center">
            <span className="font-mono-tech text-[9px] uppercase tracking-[0.2em] text-neutral-600 block mb-1">
              ORIGINAL SOURCE DOCUMENT
            </span>
            <h3 className="font-serif-vintage text-base font-bold text-black mb-1">
              Curriculum Vitae (PDF)
            </h3>
            <p className="font-serif-vintage text-xs text-neutral-700 mb-3.5">
              Verified original copy: MYTHREIE_DUMPATI.pdf (Oct 2026)
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
              <a
                href="/MYTHREIE_DUMPATI.pdf"
                download="MYTHREIE_DUMPATI_RESUME.pdf"
                onClick={() => soundManager.playStampSound()}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-black hover:bg-neutral-800 text-white font-mono-tech text-xs font-bold uppercase tracking-wider shadow-md transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-white" />
                <span>Download PDF Resume</span>
              </a>
              <a
                href="/MYTHREIE_DUMPATI.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 border-2 border-black hover:bg-black hover:text-white font-mono-tech text-xs font-bold uppercase tracking-wider text-black transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-current" />
                <span>Inspect Raw PDF</span>
              </a>
            </div>
          </div>

          {/* Typographic Colophon Notes */}
          <div className="mt-4 p-3.5 border border-black/30 bg-black/[0.02] font-serif-vintage text-xs leading-relaxed text-neutral-900 space-y-1.5">
            <span className="font-mono-tech text-[9px] uppercase tracking-wider font-bold text-neutral-700 block">
              COLOPHON & ARCHIVAL NOTES:
            </span>
            <p>
              This digital monograph was typeset in <em>Special Elite</em> (vintage typewriter), <em>IM Fell English</em> (scholarly letterpress), <em>IBM Plex Mono</em> (cryptographic registers), and <em>Caveat</em> (researcher annotations).
            </p>
            <p className="text-[11px] text-neutral-600">
              All achievements, citations, and credentials represent factual extracts from the authorized curriculum vitae of Mythreie Dumpati.
            </p>
          </div>

          {/* Inspector's Signature Mark */}
          <div className="mt-4 flex items-center justify-between border-t border-black/20 pt-3">
            <div>
              <span className="font-mono-tech text-[9px] text-neutral-600 block">INSPECTED & COMPILED BY:</span>
              <span className="font-handwriting text-2xl text-black font-bold block">
                Mythreie Dumpati
              </span>
              <span className="font-mono-tech text-[9px] text-neutral-600 font-bold">HYDERABAD, INDIA</span>
            </div>

            <div className="w-16 h-16 rounded-full border-2 border-black border-double flex flex-col items-center justify-center text-black font-typewriter text-[8px] transform rotate-12 p-1 text-center bg-black/[0.02]">
              <span>OFFICIAL</span>
              <span className="font-bold text-[10px]">SEAL</span>
              <span>2026</span>
            </div>
          </div>
        </div>

        {/* Running Footer */}
        <div className="pt-2">
          <div className="pt-2 border-t border-black/20 flex justify-between items-center text-[10px] font-mono-tech text-neutral-600">
            <span>THE ARCHIVE // EPILOGUE</span>
            <span className="font-typewriter font-bold text-black">PAGE 18 • FINIS</span>
          </div>
        </div>
      </div>
    </div>
  );
};
