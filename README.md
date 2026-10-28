# Mythreie Dumpati — The Archive of a Cybersecurity Researcher
### *Field Notes of an Aspiring Researcher*

An interactive, production-grade vintage academic journal and portfolio website designed for **Mythreie Dumpati** (B.E. Computer Science & Engineering, 2026), built directly from her authorized resume (`MYTHREIE_DUMPATI.pdf`).

---

## 🌟 Visual & Editorial Concept

The site is designed to feel like discovering a rare, classified academic monograph in a 1930s–1950s university library archive:
- **Vintage Leather Book Cover:** Features an embossed gold title, volume number, brass corner plates, archival wax seal monogram (`MD`), and hanging crimson bookmark ribbon.
- **Physical 3D Page Turn Interaction:** Click anywhere on the left or right pages, use brass arrows, touch swipe on mobile, or use keyboard arrow keys (`←` / `→`) to turn pages with authentic Web Audio synthesized paper rustling.
- **Tactile Paper Texture & Deckled Edges:** Hand-cut irregular page edges, center spine crease shadows, subtle ink bleeding, and library stamps (`ARCHIVE COPY`, `IEEE ACCEPTED`, `VERIFIED FIELDWORK`).
- **Curated Typography Hierarchy:**
  - *Special Elite* — Distressed vintage typewriter.
  - *IM Fell English* — Scholarly letterpress serif.
  - *IBM Plex Mono* — Technical and cryptographic registers.
  - *Caveat* — Natural researcher annotations, marginalia, and sketched arrows.
  - *Cinzel* — Classic engraved display lettering on the cover.
- **Hand-Sketched Technical Diagrams:**
  - IPFS DAG & Blockchain Transaction Anchoring (FIG. 1.2).
  - LLM Adversarial Benchmark Pareto Frontier Curve (FIG. 2.1).
  - Digital Forensics SHA-256 Chain of Custody (FIG. 3.4).
  - Bloom's Taxonomy Cognitive Classification Pyramid (FIG. 4.2).

---

## 📖 Archival Structure & Chapters

| Spread | Pages | Section | Contents |
| :---: | :---: | :--- | :--- |
| **Cover** | — | **Monograph Cover** | Leather tome, gilded title plate, `MD` wax seal, interactive open trigger |
| **01** | 01–02 | **Frontispiece & Master Index** | Library accession card (`MS-2026-MD`), researcher plate, and master catalogue with dotted leader lines |
| **02** | 03–04 | **Profile & Academic Ledger** | Research pillars, spoken languages, and B.E. CSE (**8.36 CGPA**), Automobile Engg. Diploma (**8.8 CGPA**), and ICSE (**81.4%**) |
| **03** | 05–06 | **Field Experience Dossier** | Women Safety Wing, Telangana Police (Bharosa Module, T-Safe reaching 500,000+ citizens, 26 crisis centres, Operation Smile 11) & Teleparadigm Networks |
| **04** | 07–08 | **Scholarly Publications** | IEEE ISDDC 2026 (LLM benchmark), IEEE IC(SEC)² 2026 (Decentralized storage), IJRDET 2025 (Instagram forensics) |
| **05** | 09–10 | **Engineering Specimens I** | SecureShare (Blockchain + IPFS, anti-screenshot) & QPAT (Bloom's Taxonomy NLP question generator) |
| **06** | 11–12 | **Engineering Specimens II** | SMIA (Police forensic app) & Alcohol Detector with Vehicle Controlling System (Arduino UNO + MQ-3 sensor, real-time ignition interlock) |
| **07** | 13–14 | **Specimens & Certifications** | Classified technical skills inventory & Certifications (**NLU Odisha 87%**, XploitForge, CSI, IIT Hyderabad) |
| **08** | 15–16 | **Leadership & Cultural Cadre** | Student Body President at KMEC, CSI KMEC Social Media Team, Event Organizer, Carnatic Classical Music Vocalist/Instrumentalist |
| **09** | 17–18 | **Dispatch & Colophon** | Interactive telegram dispatch, direct contact coordinates, and verified resume PDF download (`MYTHREIE_DUMPATI.pdf`) |

---

## 🎮 Interactive Features & Shortcuts

- **Keyboard Navigation:**
  - `→` (Right Arrow): Next page / spread
  - `←` (Left Arrow): Previous page / spread
  - `Escape`: Close journal to return to the book cover or dismiss modal
  - `Home`: Jump directly to Page 01 (Catalogue)
  - `End`: Jump directly to Page 18 (Colophon)
  - `Enter` / `Space`: Open the closed journal
- **Audio Feedback:** Synthesizes realistic paper rustles via the Web Audio API on page turns; includes a mute/unmute toggle in the top control bar.
- **Rapid Navigation Modal:** Click the red bookmark ribbon or "Index" button anytime to jump immediately to any chapter.
- **Direct PDF Download:** Direct 1-click access to download `MYTHREIE_DUMPATI.pdf`.

---

## 🛠️ Technology Stack

- **Framework:** React 19 + TypeScript
- **Bundler & Dev Server:** Vite 8
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React + custom inline archival SVGs
- **Audio:** Web Audio API procedural brown noise & bandpass synthesis
- **Fonts:** Google Fonts (*Special Elite*, *IM Fell English*, *IBM Plex Mono*, *Caveat*, *Cinzel*)

---

## 🚀 Running the Project Locally

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```
