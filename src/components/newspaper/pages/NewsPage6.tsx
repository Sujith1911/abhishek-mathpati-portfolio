import React, { useState } from 'react';
import { NewspaperHeader } from '../NewspaperHeader';
import { NewspaperFooter } from '../NewspaperFooter';
import { RESUME_DATA } from '../../../data/resumeData';
import { ArchivalStamp } from '../../ArchivalStamp';
import { HandwrittenNote } from '../../HandwrittenNote';
import { GithubIcon, LinkedinIcon } from '../../SocialIcons';
import { soundManager } from '../../../utils/sound';
import { Mail, Phone, Download, Check, Copy, Send, FileText } from 'lucide-react';

interface NewsPageProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

export const NewsPage6: React.FC<NewsPageProps> = ({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
}) => {
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
    const subject = encodeURIComponent(`Inquiry for Abhishek Mathpati from ${dispatchName || 'Inquirer'}`);
    const body = encodeURIComponent(dispatchMessage);
    window.open(`mailto:${RESUME_DATA.personal.email}?subject=${subject}&body=${body}`, '_blank');
    setDispatchSent(true);
    setTimeout(() => setDispatchSent(false), 3000);
  };

  return (
    <article className="w-full flex flex-col justify-between">
      <NewspaperHeader
        pageNumber={currentPage}
        totalPages={totalPages}
        subTitle="TELEGRAPH DISPATCH & OFFICIAL CURRICULUM VITAE"
        category="CORRESPONDENCE & EPILOGUE"
        date="OCTOBER 28, 2026"
      />

      <div className="space-y-4">
        {/* UPPER SECTION: Direct Contact Coordinates & Telegraph Dispatch Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-3 border-b border-[#1f1d19]/25">
          {/* Official Contact Directory */}
          <div className="p-3 bg-[#e8deca]/50 border-2 border-[#1f1d19] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start border-b border-[#1f1d19]/20 pb-1 mb-2">
                <span className="font-mono-tech text-[9.5px] uppercase font-bold text-[#8C3833]">
                  DIRECT WIRE SERVICE // CONTACT DIRECTORY
                </span>
                <ArchivalStamp text="OFFICIAL WIRE" variant="red" rotation={-2} />
              </div>

              <div className="space-y-2 font-mono-tech text-[10.5px]">
                {/* Email */}
                <div className="p-2 border border-[#1f1d19]/25 bg-[#f4eedd] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 truncate">
                    <Mail className="w-3.5 h-3.5 text-[#8C3833] flex-shrink-0" />
                    <span className="text-[#686158]">EMAIL:</span>
                    <a
                      href={`mailto:${RESUME_DATA.personal.email}`}
                      className="font-bold text-[#1f1d19] hover:text-[#8C3833] underline truncate"
                    >
                      {RESUME_DATA.personal.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(RESUME_DATA.personal.email, 'email')}
                    className="px-1.5 py-0.5 border border-[#1f1d19]/30 hover:bg-[#1f1d19]/10 text-[9px] flex items-center gap-1 flex-shrink-0 cursor-pointer"
                  >
                    {copiedEmail ? <Check className="w-2.5 h-2.5 text-green-700" /> : <Copy className="w-2.5 h-2.5" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Telephone */}
                <div className="p-2 border border-[#1f1d19]/25 bg-[#f4eedd] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#5b583f] flex-shrink-0" />
                    <span className="text-[#686158]">TELEPHONE:</span>
                    <a
                      href={`tel:${RESUME_DATA.personal.phone}`}
                      className="font-bold text-[#1f1d19] hover:text-[#5b583f] underline"
                    >
                      {RESUME_DATA.personal.phone}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(RESUME_DATA.personal.phone, 'phone')}
                    className="px-1.5 py-0.5 border border-[#1f1d19]/30 hover:bg-[#1f1d19]/10 text-[9px] flex items-center gap-1 flex-shrink-0 cursor-pointer"
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
                    className="p-2 border border-[#1f1d19]/25 bg-[#f4eedd] flex items-center gap-1.5 hover:border-[#8C3833] transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-[#5b583f]" />
                    <span className="truncate font-semibold text-[10px]">LinkedIn ↗</span>
                  </a>
                  <a
                    href={RESUME_DATA.personal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-[#1f1d19]/25 bg-[#f4eedd] flex items-center gap-1.5 hover:border-[#8C3833] transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-[#1f1d19]" />
                    <span className="truncate font-semibold text-[10px]">GitHub ↗</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-2 text-right">
              <HandwrittenNote rotation={-2} arrow="down" color="#8C3833">
                Correspondence welcomed regarding research & engineering roles.
              </HandwrittenNote>
            </div>
          </div>

          {/* Interactive Telegraph Terminal */}
          <div className="p-3 bg-[#e8deca]/50 border-2 border-[#1f1d19] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start border-b border-[#1f1d19]/20 pb-1 mb-2">
                <span className="font-mono-tech text-[9.5px] uppercase font-bold text-[#5b583f]">
                  TRANSMISSION TERMINAL // INSTANT DISPATCH
                </span>
                <ArchivalStamp text="TELEGRAPH" variant="olive" rotation={1} />
              </div>

              <form onSubmit={handleSendTelegram} className="space-y-2">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name / Organization"
                    value={dispatchName}
                    onChange={(e) => setDispatchName(e.target.value)}
                    className="w-full text-xs font-typewriter p-1.5 bg-[#f4eedd] border border-[#1f1d19]/30 focus:outline-none focus:border-[#8C3833] placeholder:text-[#686158]/70"
                  />
                </div>
                <div>
                  <textarea
                    rows={3}
                    placeholder="Type your inquiry or telegraph dispatch here..."
                    value={dispatchMessage}
                    onChange={(e) => setDispatchMessage(e.target.value)}
                    required
                    className="w-full text-xs font-serif-vintage p-1.5 bg-[#f4eedd] border border-[#1f1d19]/30 focus:outline-none focus:border-[#8C3833] placeholder:text-[#686158]/70"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-3 bg-[#1f1d19] hover:bg-[#8C3833] text-[#f4eedd] font-mono-tech text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                >
                  <Send className="w-3 h-3" />
                  <span>{dispatchSent ? 'Dispatch Transmitted!' : 'Transmit via Mail Client'}</span>
                </button>
              </form>
            </div>

            <div className="mt-2 font-mono-tech text-[9px] text-[#686158] text-center">
              Direct connection dispatched to abhishekmathpati29@gmail.com
            </div>
          </div>
        </div>

        {/* LOWER SECTION: Official Document Download & Colophon */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Download Official PDF Box (6 cols) */}
          <div className="lg:col-span-6 p-4 border-2 border-dashed border-[#1f1d19] bg-[#e8deca]/60 text-center flex flex-col justify-between">
            <div>
              <span className="font-mono-tech text-[9px] uppercase tracking-widest text-[#686158] block mb-1">
                VERIFIED ARCHIVAL MONOGRAPH
              </span>
              <h4 className="font-serif-vintage text-base sm:text-lg font-bold text-[#1f1d19] mb-1">
                Curriculum Vitae (PDF)
              </h4>
              <p className="font-serif-vintage text-xs text-[#5b583f] mb-3">
                Source Document: ABHISHEK_MATHPATI.pdf (Oct 2026 Edition)
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <a
                href="/ABHISHEK_MATHPATI.pdf"
                download="ABHISHEK_MATHPATI_RESUME.pdf"
                onClick={() => soundManager.playStampSound()}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#8C3833] hover:bg-[#6b2622] text-[#f4eedd] font-mono-tech text-xs uppercase tracking-wider shadow-md transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF Resume</span>
              </a>
              <a
                href="/ABHISHEK_MATHPATI.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 border border-[#1f1d19]/40 hover:bg-[#1f1d19]/10 font-mono-tech text-xs uppercase tracking-wider text-[#1f1d19] transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Inspect Raw PDF</span>
              </a>
            </div>
          </div>

          {/* Colophon & Inspector Seal (6 cols) */}
          <div className="lg:col-span-6 p-3 border border-[#1f1d19]/30 bg-[#1f1d19]/2 flex flex-col justify-between">
            <div className="font-serif-vintage text-xs leading-relaxed text-[#26231e] space-y-1">
              <span className="font-mono-tech text-[9px] uppercase tracking-wider font-bold text-[#686158] block">
                GAZETTE COLOPHON:
              </span>
              <p>
                Typeset in <em>Special Elite</em>, <em>Cinzel</em>, <em>IM Fell English</em>, <em>IBM Plex Mono</em>, and <em>Caveat</em>. All content strictly derived from the curriculum vitae of Abhishek Mathpati.
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-[#1f1d19]/20 pt-2 mt-2">
              <div>
                <span className="font-mono-tech text-[8.5px] text-[#686158] block">COMPILED & VERIFIED BY:</span>
                <span className="font-handwriting text-xl text-[#1f1d19] font-bold block">
                  Abhishek Mathpati
                </span>
                <span className="font-mono-tech text-[8.5px] text-[#5b583f]">HYDERABAD, INDIA</span>
              </div>

              <div className="w-14 h-14 rounded-full border-2 border-[#8C3833] border-double flex flex-col items-center justify-center text-[#8C3833] font-typewriter text-[7px] transform rotate-6 text-center">
                <span>OFFICIAL</span>
                <span className="font-bold text-[9px]">SEAL</span>
                <span>2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewspaperFooter
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
        bannerText="END OF GAZETTE • THE HYDERABAD RESEARCH CHRONICLE • 2026"
      />
    </article>
  );
};
