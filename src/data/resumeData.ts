export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  dateRange: string;
  objective: string;
  problem: string;
  approach: string;
  technologies: string[];
  keyImplementations: string[];
  verifiedOutcomes: string;
  badge?: string;
  specimenNo: string;
  handwrittenNote?: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  venue: string;
  status: string;
  date: string;
  scope: string;
  methodology: string;
  contributions: string[];
  metrics?: string;
  handwrittenNote?: string;
  type: 'conference' | 'journal';
}

export interface ExperienceItem {
  id: string;
  organization: string;
  division?: string;
  role: string;
  dates: string;
  location: string;
  badge: string;
  responsibilities: string[];
  technicalContributions: string[];
  toolsUsed: string[];
  verifiedOutcomes: string;
  stampText: string;
  handwrittenNote?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  score?: string;
  badge?: string;
}

export interface AchievementItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
  highlightMetric: string;
  stamp: string;
}

export const RESUME_DATA = {
  personal: {
    name: 'Abhishek Mathpati',
    title: 'Bachelors in Computer Science & Engineering',
    tagline: 'Aspiring Cybersecurity Researcher, Digital Forensics & Decentralized Systems Specialist',
    email: 'abhishekmathpati29@gmail.com',
    phone: '+91 8106344345',
    linkedin: 'linkedin.com/in/abhishek-m-b654b2296',
    linkedinUrl: 'https://linkedin.com/in/abhishek-m-b654b2296',
    github: 'github.com/abhishek-mathpati',
    githubUrl: 'https://github.com/abhishek-mathpati',
    location: 'Hyderabad, Telangana, India',
    institution: 'Keshav Memorial Engineering College',
    gradYear: '2026',
    languagesSpoken: [
      { name: 'English', level: 'Fluent / Professional' },
      { name: 'Hindi', level: 'Fluent' },
      { name: 'Telugu', level: 'Native / Fluent' },
      { name: 'Kannada', level: 'Conversational' },
      { name: 'Marathi', level: 'Conversational' },
      { name: 'German', level: 'Beginner (A1)' },
    ],
  },

  academicRecord: [
    {
      degree: 'B.E. Computer Science & Engineering',
      institution: 'Keshav Memorial Engineering College',
      period: '2022 – 2026',
      grade: '8.41 / 10 CGPA',
      status: 'Final Year Candidate',
      notes: 'Active leadership in CSI KMEC, technical research on distributed systems & LLM adversarial benchmarks.',
    },
    {
      degree: '12th TSBIE (Higher Secondary)',
      institution: 'Narayana Junior College',
      period: '2020 – 2022',
      grade: '96.9%',
      specialization: 'Mathematics, Physics & Chemistry',
      notes: 'State board distinction with top percentile standing in analytical sciences.',
    },
    {
      degree: '10th SSC (Secondary School Certificate)',
      institution: "St. Mark's Boys Town High School",
      period: '2019 – 2020',
      grade: '10.0 / 10 GPA',
      specialization: 'General Sciences & Mathematics',
      notes: 'Perfect 10/10 cumulative grade point average with NCC foundational training.',
    },
  ],

  experience: [
    {
      id: 'teleparadigm',
      organization: 'Teleparadigm Networks Ltd.',
      role: 'Software Engineering Intern',
      dates: 'Sept – Nov 2025',
      location: 'Hyderabad, India',
      badge: 'Distributed Systems Dossier',
      stampText: 'VERIFIED FIELDWORK',
      responsibilities: [
        'Developed a secure, decentralized file-sharing platform engineered with role-based access controls (RBAC) to safeguard sensitive user data against unauthorized access.',
        'Implemented distributed storage methods and dynamic permission controls across network nodes, maintaining high data privacy while completely eliminating single points of failure.',
        'Audited access logs and node communication integrity under zero-trust operational paradigms.',
      ],
      technicalContributions: [
        'Decentralized node consensus & peer-to-peer data distribution',
        'Dynamic cryptographic permission enforcement',
        'Fault-tolerant storage node failover handling',
      ],
      toolsUsed: ['Python', 'FastAPI', 'Distributed Storage', 'RBAC', 'P2P Protocols', 'Linux'],
      verifiedOutcomes: 'Eliminated centralized vulnerability vectors and ensured deterministic file availability across distributed nodes.',
      handwrittenNote: 'Maintained strict data privacy without single points of compromise.',
    },
    {
      id: 'telangana-police',
      organization: 'Women Safety Wing, Telangana Police',
      role: 'Cybersecurity Intern',
      dates: 'Dec 2024 – Jan 2025',
      location: 'Hyderabad, India',
      badge: 'Law Enforcement Dossier',
      stampText: 'OFFICIAL POLICE COLLABORATION',
      responsibilities: [
        'Assisted law enforcement officers in active cybercrime investigations by analysing digital evidence and performing comprehensive digital forensic evaluations.',
        'Conducted specialized research on open-source intelligence (OSINT) tools and methodologies, leveraging intelligence gathering and digital traces.',
        'Traced sophisticated threat actors, identified high-priority suspects, and contributed directly to formal, court-admissible investigative documentation.',
      ],
      technicalContributions: [
        'Digital artifact recovery and forensic timeline reconstruction',
        'OSINT target reconnaissance and social graph correlation',
        'Chain-of-custody documentation and formal evidentiary reports',
      ],
      toolsUsed: ['OSINT Frameworks', 'Maltego', 'Wireshark', 'Burp Suite', 'Digital Forensics', 'Kali Linux'],
      verifiedOutcomes: 'Directly supported active cybercrime case closures with verified evidentiary trails and suspect identification.',
      handwrittenNote: 'Court-admissible evidentiary standards followed strictly.',
    },
  ] as ExperienceItem[],

  publications: [
    {
      id: 'ieee-isddc-2026',
      title: 'Quantifying the Security-Utility-Latency Frontier: An Empirical Benchmark of Small and Medium Language Models Under Adversarial Injection',
      venue: 'IEEE ISDDC (International Conference on Smart Systems for Digital Decarbonization), Puducherry',
      status: 'Accepted (Sep 2026)',
      date: 'Sep 2026',
      type: 'conference',
      scope: 'Adversarial Machine Learning & LLM Security Benchmarking',
      methodology:
        'Evaluated 5 open-weight language models (Llama-3.2, Qwen-2.5) across 2,500 test queries against direct jailbreaks, indirect prompt injection, and obfuscation attacks on an isolated testbed.',
      contributions: [
        'Characterized the multi-objective Pareto frontier across attack robustness, over-refusal rates, and tail latency.',
        'Formulated empirical safety degradation curves for resource-constrained edge deployments.',
        'Demonstrated trade-offs between safety filtering overhead and critical response latency.',
      ],
      metrics: '2,500 Queries Tested • 5 Open-Weight Models • Isolated Adversarial Testbed',
      handwrittenNote: 'Pareto frontier reveals steep over-refusal penalties in smaller models!',
    },
    {
      id: 'ieee-icsec2-2026',
      title: 'An Intelligent Decentralized Secure File Sharing System with Privacy-Preserving Access Control',
      venue: 'IEEE IC(SEC)², Coimbatore (Accepted and Presented; To appear in IEEE Xplore)',
      status: 'Accepted & Presented (Aug 2026)',
      date: 'Aug 2026',
      type: 'conference',
      scope: 'Decentralized Cryptography & Anomaly Detection',
      methodology:
        'Presented at the 2nd IEEE International Conference on Smart Systems for Electrical, Electronics, Communication and Computer Engineering; designed a decentralized file-sharing architecture integrating Blockchain, IPFS, Shamir’s Secret Sharing, and an Isolation Forest anomaly detection model.',
      contributions: [
        'Integrated Shamir’s Secret Sharing to split and distribute cryptographic keys across independent nodes.',
        'Engineered an Isolation Forest model to intercept anomalous exfiltration requests before data decryption.',
        'Coupled IPFS content addressing with immutable blockchain smart contract access logs.',
      ],
      metrics: 'Presented in Coimbatore • Archival IEEE Xplore Indexing • Multi-layered Cryptographic Proof',
      handwrittenNote: 'Shamir Secret Sharing + Isolation Forest prevents rogue node exfiltration.',
    },
    {
      id: 'ijrdet-2025',
      title: 'A Web-Based Automation Framework for Instagram Profile Forensics',
      venue: 'International Journal of Recent Development in Engineering and Technology (IJRDET)',
      status: 'Published (Dec 2025)',
      date: 'Dec 2025',
      type: 'journal',
      scope: 'Digital Forensics & Law Enforcement Automation',
      methodology:
        'Developed an automated, non-invasive digital forensic tool using FastAPI and Flutter to streamline evidence acquisition for investigations.',
      contributions: [
        'Integrated Playwright to perform automated SHA-256 evidence hashing with timestamp validation.',
        'Built dynamic PDF generation with ReportLab to produce court-admissible, tamper-evident forensic reports.',
        'Enforced strict compliance with privacy regulations without automated API scraping violations.',
      ],
      metrics: 'Automated SHA-256 Cryptographic Hashing • Court-Admissible Dynamic ReportLab PDFs',
      handwrittenNote: 'Deterministic hashing guarantees tamper-evident chain of custody.',
    },
  ] as PublicationItem[],

  projects: [
    {
      id: 'secureshare',
      title: 'SecureShare',
      subtitle: 'Decentralized Secure File Sharing and Communication Platform',
      dateRange: 'Sep 2025 – Mar 2026',
      specimenNo: 'SPECIMEN // 001-P',
      objective: 'Eliminate centralized data leakage vectors while providing verifiable, tamper-evident communication and storage.',
      problem: 'Conventional cloud storage providers represent centralized points of failure susceptible to subpoena, insider breach, and unencrypted surveillance.',
      approach: 'Built a decentralized architecture combining blockchain transaction anchoring, IPFS content-addressed storage, and a hardened Flutter client.',
      technologies: ['FastAPI', 'Flutter', 'Blockchain', 'IPFS', 'WebSockets', 'JWT', 'RBAC', 'Cryptography'],
      keyImplementations: [
        'Engineered real-time WebSocket communication enforced by JWT authentication, strict RBAC, and granular admin audit visibility.',
        'Integrated ephemeral file-sharing controls with anti-screenshot and screen-recording protections on mobile clients.',
        'Anchored file integrity hashes onto a blockchain ledger, eliminating centralized tampering risks.',
      ],
      verifiedOutcomes: 'Zero centralized points of compromise achieved with end-to-end encrypted ephemeral data lifecycle.',
      handwrittenNote: 'Anti-screen recording + blockchain anchoring prevents forensic leakage.',
      badge: 'Flagship System',
    },
    {
      id: 'qpat',
      title: 'Question Paper Automation Tool (QPAT)',
      subtitle: 'Automated Academic Assessment Generation System',
      dateRange: 'April – Aug 2025',
      specimenNo: 'SPECIMEN // 002-P',
      objective: 'Automate blueprint-compliant examination generation aligned with strict regulatory university taxonomies.',
      problem: 'Manual academic assessment creation is prone to cognitive bias, uneven difficulty distribution, and failure to meet Course Outcome (CO) accreditations.',
      approach: 'Engineered a blueprint-driven generation platform using FastAPI and Flutter, incorporating natural language processing algorithms.',
      technologies: ['FastAPI', 'Flutter', 'NLP', 'Semantic Analysis', 'Bloom’s Taxonomy', 'Python', 'ReportLab'],
      keyImplementations: [
        'Integrated NLP-powered semantic analysis for automated question classification into Bloom’s Taxonomy cognitive levels.',
        'Built automated Course Outcome (CO) mapping and syntax validation pipelines.',
        'Generated password-protected PDFs alongside comprehensive BT-level summary analytics for quality assurance.',
      ],
      verifiedOutcomes: 'Reduced assessment drafting cycle by over 75% while achieving 100% adherence to institutional accreditation blueprints.',
      handwrittenNote: 'Automatic Bloom\'s Taxonomy mapping ensures regulatory compliance.',
      badge: 'Academic Innovation',
    },
    {
      id: 'smia',
      title: 'Social Media Investigative Assistant (SMIA)',
      subtitle: 'Digital Forensic Evidence Documentation Tool',
      dateRange: 'Jan – May 2025',
      specimenNo: 'SPECIMEN // 003-P',
      objective: 'Empower law enforcement officers with structured, legally defensible social media forensic gathering capabilities.',
      problem: 'Forensic investigators frequently struggle with ad-hoc screenshot capturing that lacks timestamp verification and court admissibility proof.',
      approach: 'Designed a Flutter-based mobile application enabling structured, case-oriented digital evidence gathering under zero-unauthorized-scraping compliance.',
      technologies: ['Flutter', 'Dart', 'Forensic Encryption', 'SQLite / Local Storage', 'Cloud Sync', 'PDF Generation'],
      keyImplementations: [
        'Engineered timestamp-validated screenshot evidence capture with automated forensic PDF report generation.',
        'Backed by secure encrypted local storage with cloud-synced metadata for investigative accountability.',
        'Architected with modular multi-platform extensibility preserving evidentiary chain of custody.',
      ],
      verifiedOutcomes: 'Produces immediate, tamper-evident case reports compliant with judicial evidence requirements.',
      handwrittenNote: 'Zero-scraping architecture preserves platform compliance and legal validity.',
      badge: 'Law Enforcement',
    },
    {
      id: 'techtonic',
      title: 'College Website Portal',
      subtitle: 'TECHTONIC \'24 Hackathon Winner Platform',
      dateRange: 'Feb – May 2024',
      specimenNo: 'SPECIMEN // 004-P',
      objective: 'Deliver an ultra-responsive, high-throughput college web portal under stringent hackathon deadlines.',
      problem: 'Academic institution web portals often suffer from legacy bloat, poor mobile accessibility, and slow load times during peak traffic.',
      approach: 'Designed a performant web portal focusing on raw web performance, accessible UI patterns, and modular semantic architecture.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Web Accessibility'],
      keyImplementations: [
        'Engineered optimized asset delivery and lightweight JavaScript modules for rapid sub-second load speeds.',
        'Built intuitive cross-platform navigation for students, faculty, and administrative staff.',
        'Outperformed 30+ competing teams in national-level competition by delivering a scalable, user-centric solution.',
      ],
      verifiedOutcomes: 'Secured 1st Place Winner title at TECHTONIC \'24 Hackathon among 30+ competing collegiate engineering teams.',
      handwrittenNote: 'Won 1st Place out of 30+ engineering squads!',
      badge: '1st Place Hackathon',
    },
    {
      id: 'parkhub',
      title: 'Park Hub',
      subtitle: 'Smart Urban Parking Management System',
      dateRange: 'April – Sep 2023',
      specimenNo: 'SPECIMEN // 005-P',
      objective: 'Streamline urban driver navigation and optimize dynamic parking lot allocation.',
      problem: 'Urban congestion is heavily exacerbated by vehicles circling dense zones searching for vacant parking spaces.',
      approach: 'Developed a mobile parking app leveraging Flutter and Firebase for real-time spatial coordination.',
      technologies: ['Flutter', 'Firebase Realtime DB', 'Google Maps API', 'Payment Gateways', 'Dart'],
      keyImplementations: [
        'Integrated interactive real-time mapping displaying live spot occupancy and automated routing.',
        'Engineered dynamic pricing models based on parking duration and zone congestion.',
        'Implemented secure mobile payment processing for seamless entry-to-exit transits.',
      ],
      verifiedOutcomes: 'Demonstrated significant reduction in parking search times and improved space utilization metrics.',
      handwrittenNote: 'Real-time Firebase spot synchronization reduced urban search time.',
      badge: 'Urban Mobility',
    },
  ] as ProjectItem[],

  skills: {
    cybersecurityAndForensics: [
      'Vulnerability Assessment',
      'Mobile & Digital Forensics',
      'Network Scanning & Analysis',
      'OSINT Investigations',
      'Chain-of-Custody Documentation',
      'Threat Actor Tracing',
    ],
    securityTools: [
      'Burp Suite',
      'Wireshark',
      'Nmap',
      'Kali Linux',
      'Metasploit',
      'Recon-ng',
      'Maltego',
    ],
    programmingLanguages: [
      'Python',
      'C',
      'C++',
      'Java',
      'Dart',
      'Go',
      'Rust',
      'SQL',
      'JavaScript',
      'HTML',
      'CSS',
      'Bash / Shell Scripting',
    ],
    backendAndWeb: [
      'FastAPI',
      'WebSockets',
      'JWT Authentication',
      'Role-Based Access Control (RBAC)',
      'RESTful Architecture',
    ],
    mobileAndApp: [
      'Flutter',
      'Firebase',
      'Android Studio',
      'State Management',
    ],
    distributedSystems: [
      'Blockchain',
      'IPFS (InterPlanetary File System)',
      'P2P Protocols',
      'Shamir’s Secret Sharing',
    ],
    aiAndAppliedData: [
      'NLP (Natural Language Processing)',
      'Semantic Similarity',
      'Text Classification',
      'Scikit-learn',
      'spaCy',
      'Isolation Forest',
      'LLM Adversarial Benchmarking',
    ],
    environmentsAndTools: [
      'Docker',
      'Git & GitHub',
      'Linux (Parrot, Kali, Fedora, Ubuntu)',
      'Android Studio',
      'VS Code',
      'Jupyter Notebook',
      'LaTeX',
      'Playwright',
      'ReportLab',
    ],
    softSkills: [
      'Team Leadership',
      'Problem Solving',
      'Technical Writing & Presentation',
      'Project Management',
      'Investigative Research',
    ],
  },

  certifications: [
    {
      title: 'Cyber Crime and Cyber Forensics Course',
      issuer: 'National Law University Odisha',
      date: 'Aug 2026',
      score: 'Scored 90%',
      badge: '90% Distinction',
    },
    {
      title: 'Ethical Hacking Course',
      issuer: 'NPTEL, India',
      date: 'Oct 2024',
      score: 'Scored 71%',
      badge: 'Elite Certified',
    },
    {
      title: 'Ethical Hacking Awareness Workshop',
      issuer: 'XploitForge',
      date: 'July 2025',
    },
    {
      title: 'Machine and Deep Learning Techniques Webinar',
      issuer: 'Computer Society of India (CSI)',
      date: 'Mar 2025',
    },
    {
      title: 'Cybersecurity with Ethical Hacking Workshop',
      issuer: 'IIT Hyderabad',
      date: 'Jan 2025',
      badge: 'IIT Hyderabad',
    },
    {
      title: 'Cybersecurity Analyst Job Simulation (IAM)',
      issuer: 'Tata Group & Forage',
      date: 'Dec 2024',
    },
    {
      title: 'Project School Certification',
      issuer: 'Keshav Memorial Engineering College',
      date: 'Feb 2024',
    },
    {
      title: 'NCC "A" Certificate',
      issuer: 'National Cadet Corps (NCC), India',
      date: 'June 2019',
      badge: 'Military Discipline',
    },
  ] as CertificationItem[],

  achievements: [
    {
      title: '1st Place Winner — National Level Coding Contest',
      issuer: 'Aurora Technical and Research Institute',
      date: 'Jun 2023',
      description: 'Demonstrated exceptional algorithmic problem-solving accuracy by solving complex multi-stage competitive challenges under strict time bounds.',
      highlightMetric: '95% Accuracy Rate • Outperformed 200+ Participants',
      stamp: 'NATIONAL 1ST PLACE',
    },
    {
      title: 'Winner — TECHTONIC \'24 Hackathon',
      issuer: 'Keshav Memorial Engineering College',
      date: 'May 2024',
      description: 'Led an engineering team to architect and deliver an ultra-responsive web platform that drastically enhanced load performance and navigational accessibility.',
      highlightMetric: '1st Place Champion • Competed Against 30+ Engineering Squads',
      stamp: 'HACKATHON CHAMPION',
    },
  ] as AchievementItem[],

  activitiesAndSocieties: [
    {
      role: 'Social Media Team Head',
      organization: 'Computer Society of India (CSI) KMEC',
      description: 'Spearheaded technical digital outreach and content strategy, driving student engagement and organizing workshops on emerging computational paradigms.',
    },
    {
      role: 'NCC Candidate',
      organization: 'National Cadet Corps (NCC), India',
      description: 'Underwent rigorous training cultivating leadership, teamwork, strategic resilience, and civic discipline.',
    },
    {
      role: 'National Service Scheme (NSS) Volunteer',
      organization: 'NSS India',
      description: 'Contributed directly to impactful community outreach, social welfare, and literacy initiatives.',
    },
    {
      role: 'Event Organizer',
      organization: 'College Technical & Cultural Symposia',
      description: 'Orchestrated large-scale collegiate technical hackathons and cultural festivals, managing multi-team logistics and attendee operations.',
    },
    {
      role: 'Martial Arts Practitioner',
      organization: 'Discipline & Self-Defense Academy',
      description: 'Practiced martial arts cultivating physical focus, sharp mental alertness, and tactical self-defense agility.',
    },
  ],
};

