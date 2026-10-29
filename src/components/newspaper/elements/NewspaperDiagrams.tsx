import React from 'react';

// Figure 1: P2P IPFS / Blockchain Distributed Nodes Diagram
export const DistributedNodesDiagram: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`p-2.5 border border-[#141210]/30 bg-[#141210]/[0.02] ${className}`}>
    <div className="text-[9px] font-mono-tech tracking-wider text-[#5a5047] uppercase mb-1.5 flex justify-between items-center border-b border-[#141210]/20 pb-1">
      <span className="font-bold text-[#141210]">FIG. 1.2 — P2P IPFS / BLOCKCHAIN ANCHOR</span>
      <span className="text-[#8C3833] font-bold">[VERIFIED SHA-256]</span>
    </div>
    <svg className="w-full h-22 text-[#141210]" viewBox="0 0 280 80" fill="none" stroke="currentColor" strokeWidth="1.3">
      {/* Node A */}
      <circle cx="35" cy="40" r="14" strokeDasharray="3 2" />
      <text x="35" y="43" fontSize="8" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fill="currentColor" fontWeight="bold">NODE A</text>
      
      {/* Connectors */}
      <line x1="49" y1="40" x2="95" y2="25" strokeDasharray="2 2" />
      <line x1="49" y1="40" x2="95" y2="55" strokeDasharray="2 2" />
      
      {/* Central IPFS Cluster */}
      <polygon points="120,15 150,15 165,40 150,65 120,65 105,40" strokeWidth="1.8" fill="rgba(20,18,16,0.04)" />
      <text x="135" y="38" fontSize="8.5" fontFamily="'Special Elite', monospace" textAnchor="middle" fill="currentColor" fontWeight="bold">IPFS DAG</text>
      <text x="135" y="50" fontSize="7" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fill="#8C3833" fontWeight="bold">SHA-256</text>
      
      {/* Connectors */}
      <line x1="165" y1="40" x2="215" y2="40" strokeWidth="1.5" />
      
      {/* Blockchain Ledger */}
      <rect x="215" y="22" width="52" height="38" rx="1" strokeWidth="1.6" fill="rgba(20,18,16,0.03)" />
      <line x1="215" y1="35" x2="267" y2="35" strokeWidth="1" />
      <text x="241" y="31" fontSize="7" fontFamily="'Special Elite', monospace" textAnchor="middle" fill="currentColor" fontWeight="bold">LEDGER</text>
      <text x="241" y="46" fontSize="6.5" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fill="#4b4e39" fontWeight="bold">SMART-TX</text>
      <text x="241" y="54" fontSize="6" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fill="#5a5047">IMMUTABLE</text>
    </svg>
    <div className="text-[8.5px] font-handwriting text-[#4b4e39] mt-1 text-center font-bold">
      * Zero single point of failure; access keys split via Shamir's Secret Sharing.
    </div>
  </div>
);

// Figure 2: Adversarial Benchmark Pareto Frontier Diagram
export const ParetoFrontierDiagram: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`p-2.5 border border-[#141210]/30 bg-[#141210]/[0.02] ${className}`}>
    <div className="text-[9px] font-mono-tech tracking-wider text-[#5a5047] uppercase mb-1.5 flex justify-between items-center border-b border-[#141210]/20 pb-1">
      <span className="font-bold text-[#141210]">FIG. 2.1 — ADVERSARIAL BENCHMARK FRONTIER</span>
      <span className="text-[#8C3833] font-bold">[2,500 QUERIES]</span>
    </div>
    <svg className="w-full h-24 text-[#141210]" viewBox="0 0 280 88" fill="none" stroke="currentColor" strokeWidth="1.2">
      {/* Axes */}
      <line x1="30" y1="12" x2="30" y2="72" strokeWidth="1.8" />
      <line x1="30" y1="72" x2="265" y2="72" strokeWidth="1.8" />
      
      {/* Labels */}
      <text x="22" y="15" fontSize="7" fontFamily="'IBM Plex Mono', monospace" textAnchor="end" fill="currentColor" fontWeight="bold">ROBUST</text>
      <text x="265" y="83" fontSize="7" fontFamily="'IBM Plex Mono', monospace" textAnchor="end" fill="currentColor" fontWeight="bold">LATENCY (ms)</text>
      
      {/* Pareto Curve */}
      <path d="M 40 22 Q 100 28 160 52 T 250 68" stroke="#8C3833" strokeWidth="2.2" />
      
      {/* Sample Dots */}
      <circle cx="60" cy="24" r="3.5" fill="#8C3833" />
      <text x="66" y="23" fontSize="7" fontFamily="'IBM Plex Mono', monospace" fill="currentColor" fontWeight="bold">Llama-3.2 (3B)</text>
      
      <circle cx="140" cy="46" r="3.5" fill="#4b4e39" />
      <text x="146" y="45" fontSize="7" fontFamily="'IBM Plex Mono', monospace" fill="currentColor" fontWeight="bold">Qwen-2.5 (7B)</text>
      
      <circle cx="210" cy="62" r="3.5" fill="#141210" />
      <text x="216" y="61" fontSize="7" fontFamily="'IBM Plex Mono', monospace" fill="currentColor">Edge Model</text>
      
      {/* Grid subtle markings */}
      <line x1="30" y1="42" x2="265" y2="42" strokeDasharray="2 3" stroke="#888888" />
      <line x1="140" y1="12" x2="140" y2="72" strokeDasharray="2 3" stroke="#888888" />
    </svg>
    <div className="text-[8.5px] font-handwriting text-[#8C3833] mt-1 text-center font-bold">
      * Trade-off: High adversarial defense introduces noticeable over-refusal penalty on edge models.
    </div>
  </div>
);

// Figure 3: Forensic Chain of Custody Diagram
export const ForensicWorkflowDiagram: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`p-2.5 border border-[#141210]/30 bg-[#141210]/[0.02] ${className}`}>
    <div className="text-[9px] font-mono-tech tracking-wider text-[#5a5047] uppercase mb-1.5 flex justify-between items-center border-b border-[#141210]/20 pb-1">
      <span className="font-bold text-[#141210]">FIG. 3.4 — FORENSIC CHAIN OF CUSTODY</span>
      <span className="text-[#8C3833] font-bold">[COURT-ADMISSIBLE]</span>
    </div>
    <svg className="w-full h-20 text-[#141210]" viewBox="0 0 280 72" fill="none" stroke="currentColor" strokeWidth="1.3">
      {/* Step 1: Capture */}
      <rect x="10" y="18" width="55" height="36" rx="1" strokeDasharray="2 2" strokeWidth="1.2" />
      <text x="37" y="32" fontSize="7" fontFamily="'Special Elite', monospace" textAnchor="middle" fill="currentColor" fontWeight="bold">SCREENSHOT</text>
      <text x="37" y="44" fontSize="6" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fill="#5a5047">EVIDENCE</text>
      
      {/* Arrow 1 */}
      <path d="M 68 36 L 88 36 M 83 31 L 88 36 L 83 41" strokeWidth="1.5" />
      
      {/* Step 2: Timestamp & Hash */}
      <rect x="94" y="16" width="70" height="40" rx="1" strokeWidth="1.8" fill="rgba(20,18,16,0.03)" />
      <text x="129" y="30" fontSize="7" fontFamily="'Special Elite', monospace" textAnchor="middle" fill="#8C3833" fontWeight="bold">SHA-256 HASH</text>
      <text x="129" y="42" fontSize="6" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fill="currentColor">+ TIMESTAMP</text>
      <text x="129" y="50" fontSize="5.5" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fill="#4b4e39">RFC-3161</text>
      
      {/* Arrow 2 */}
      <path d="M 168 36 L 188 36 M 183 31 L 188 36 L 183 41" strokeWidth="1.5" />
      
      {/* Step 3: PDF Dossier */}
      <rect x="194" y="18" width="76" height="36" rx="1" strokeWidth="1.4" />
      <text x="232" y="32" fontSize="7" fontFamily="'Special Elite', monospace" textAnchor="middle" fill="currentColor" fontWeight="bold">REPORTLAB PDF</text>
      <text x="232" y="44" fontSize="6" fontFamily="'IBM Plex Mono', monospace" textAnchor="middle" fill="#8C3833" fontWeight="bold">VERIFIED AUDIT</text>
    </svg>
    <div className="text-[8.5px] font-handwriting text-[#4b4e39] mt-1 text-center font-bold">
      * Cryptographic integrity: Any single altered bit completely invalidates the hash digest.
    </div>
  </div>
);
