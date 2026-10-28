import React from 'react';

// Cryptographic Key & IPFS Distributed Node Diagram
export const DistributedNodesDiagram: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`p-2 border border-[#211F1B]/20 bg-[#211F1B]/3 rounded-sm ${className}`}>
    <div className="text-[9px] font-mono-tech tracking-wider text-[#686158] uppercase mb-1 flex justify-between items-center border-b border-[#211F1B]/15 pb-0.5">
      <span>FIG. 1.2 — P2P IPFS / BLOCKCHAIN ANCHOR</span>
      <span>[VERIFIED HASH]</span>
    </div>
    <svg className="w-full h-20 text-[#211F1B]" viewBox="0 0 280 80" fill="none" stroke="currentColor" strokeWidth="1.2">
      {/* Node 1 */}
      <circle cx="35" cy="40" r="14" strokeDasharray="3 2" />
      <text x="35" y="43" fontSize="8" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fill="currentColor">NODE A</text>
      
      {/* Connectors */}
      <line x1="49" y1="40" x2="95" y2="25" strokeDasharray="2 2" />
      <line x1="49" y1="40" x2="95" y2="55" strokeDasharray="2 2" />
      
      {/* Central IPFS Cluster */}
      <polygon points="120,15 150,15 165,40 150,65 120,65 105,40" strokeWidth="1.5" />
      <text x="135" y="38" fontSize="8" fontFamily="'Special Elite', monospace" textAnchor="middle" fill="currentColor">IPFS DAG</text>
      <text x="135" y="48" fontSize="7" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fill="#8C3833">SHA-256</text>
      
      {/* Connectors */}
      <line x1="165" y1="40" x2="215" y2="40" />
      
      {/* Blockchain Ledger */}
      <rect x="215" y="22" width="50" height="36" rx="2" strokeWidth="1.4" />
      <line x1="215" y1="34" x2="265" y2="34" />
      <text x="240" y="31" fontSize="7" fontFamily="'Special Elite', monospace" textAnchor="middle" fill="currentColor">LEDGER</text>
      <text x="240" y="45" fontSize="7" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fill="#77745A">SMART-TX</text>
      <text x="240" y="53" fontSize="6" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fill="currentColor">IMMUTABLE</text>
    </svg>
    <div className="text-[8px] font-handwriting text-[#5b583f] mt-0.5 text-center">
      * Zero single point of failure; access keys split via Shamir's Secret Sharing.
    </div>
  </div>
);

// LLM Security-Utility-Latency Pareto Curve Diagram
export const ParetoFrontierDiagram: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`p-2 border border-[#211F1B]/20 bg-[#211F1B]/3 rounded-sm ${className}`}>
    <div className="text-[9px] font-mono-tech tracking-wider text-[#686158] uppercase mb-1 flex justify-between items-center border-b border-[#211F1B]/15 pb-0.5">
      <span>FIG. 2.1 — ADVERSARIAL BENCHMARK FRONTIER</span>
      <span>[2,500 QUERIES]</span>
    </div>
    <svg className="w-full h-22 text-[#211F1B]" viewBox="0 0 280 88" fill="none" stroke="currentColor" strokeWidth="1.2">
      {/* Axes */}
      <line x1="30" y1="12" x2="30" y2="72" strokeWidth="1.5" />
      <line x1="30" y1="72" x2="265" y2="72" strokeWidth="1.5" />
      
      {/* Labels */}
      <text x="20" y="15" fontSize="7" fontFamily="'IBM Plex Mono', monospace" textAnchor="end" fill="currentColor">ROBUST</text>
      <text x="260" y="82" fontSize="7" fontFamily="'IBM Plex Mono', monospace" textAnchor="end" fill="currentColor">LATENCY (ms)</text>
      
      {/* Pareto Curve */}
      <path d="M 40 22 Q 100 28 160 52 T 250 68" stroke="#8C3833" strokeWidth="1.8" />
      
      {/* Sample Dots */}
      <circle cx="60" cy="24" r="3" fill="#8C3833" />
      <text x="65" y="22" fontSize="7" fontFamily="'IBM Plex Mono', monospace" fill="currentColor">Llama-3.2 (3B)</text>
      
      <circle cx="140" cy="46" r="3" fill="#77745A" />
      <text x="145" y="44" fontSize="7" fontFamily="'IBM Plex Mono', monospace" fill="currentColor">Qwen-2.5 (7B)</text>
      
      <circle cx="210" cy="62" r="3" fill="#211F1B" />
      <text x="215" y="60" fontSize="7" fontFamily="'IBM Plex Mono', monospace" fill="currentColor">Edge Model</text>
      
      {/* Grid subtle markings */}
      <line x1="30" y1="42" x2="265" y2="42" strokeDasharray="2 3" opacity="0.3" />
      <line x1="140" y1="12" x2="140" y2="72" strokeDasharray="2 3" opacity="0.3" />
    </svg>
    <div className="text-[8px] font-handwriting text-[#8C3833] mt-0.5 text-center">
      * Trade-off: High adversarial defense introduces noticeable over-refusal penalty on edge models.
    </div>
  </div>
);

// Forensic Evidence Chain of Custody Diagram
export const ForensicWorkflowDiagram: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`p-2 border border-[#211F1B]/20 bg-[#211F1B]/3 rounded-sm ${className}`}>
    <div className="text-[9px] font-mono-tech tracking-wider text-[#686158] uppercase mb-1 flex justify-between items-center border-b border-[#211F1B]/15 pb-0.5">
      <span>FIG. 3.4 — FORENSIC CHAIN OF CUSTODY</span>
      <span>[COURT-ADMISSIBLE]</span>
    </div>
    <svg className="w-full h-18 text-[#211F1B]" viewBox="0 0 280 72" fill="none" stroke="currentColor" strokeWidth="1.2">
      {/* Step 1: Capture */}
      <rect x="10" y="18" width="55" height="36" rx="2" strokeDasharray="2 2" />
      <text x="37" y="32" fontSize="7" fontFamily="'Special Elite', monospace" textAnchor="middle" fill="currentColor">SCREENSHOT</text>
      <text x="37" y="44" fontSize="6" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fill="#686158">EVIDENCE</text>
      
      {/* Arrow 1 */}
      <path d="M 68 36 L 88 36 M 83 31 L 88 36 L 83 41" />
      
      {/* Step 2: Timestamp & Hash */}
      <rect x="94" y="16" width="70" height="40" rx="2" strokeWidth="1.5" />
      <text x="129" y="30" fontSize="7" fontFamily="'Special Elite', monospace" textAnchor="middle" fill="#8C3833">SHA-256 HASH</text>
      <text x="129" y="42" fontSize="6" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fill="currentColor">+ TIMESTAMP</text>
      <text x="129" y="50" fontSize="5.5" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fill="#77745A">RFC-3161</text>
      
      {/* Arrow 2 */}
      <path d="M 168 36 L 188 36 M 183 31 L 188 36 L 183 41" />
      
      {/* Step 3: PDF Dossier */}
      <rect x="194" y="18" width="75" height="36" rx="2" />
      <text x="231" y="32" fontSize="7" fontFamily="'Special Elite', monospace" textAnchor="middle" fill="currentColor">REPORTLAB PDF</text>
      <text x="231" y="44" fontSize="6" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fill="#8C3833">VERIFIED AUDIT</text>
    </svg>
    <div className="text-[8px] font-handwriting text-[#5b583f] mt-0.5 text-center">
      * Cryptographic integrity: Any single altered bit completely invalidates the hash digest.
    </div>
  </div>
);
