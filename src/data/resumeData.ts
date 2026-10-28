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

export const RESUME_DATA = {
  personal: {
    name: 'Mythreie Dumpati',
    title: 'Bachelors in Computer Science & Engineering',
    tagline: 'Cybersecurity Researcher, Digital Forensics & Decentralized Systems Specialist',
    email: 'mythreiedumpati23@gmail.com',
    phone: '+91 6305241870',
    linkedin: 'linkedin.com/in/mythreie-dumpati-6b93381ba',
    linkedinUrl: 'https://linkedin.com/in/mythreie-dumpati-6b93381ba',
    github: 'github.com/mythreie-dumpati',
    githubUrl: 'https://github.com/mythreie-dumpati',
    location: 'Hyderabad, Telangana, India',
    institution: 'Keshav Memorial Engineering College',
    gradYear: '2026',
    languagesSpoken: [
      { name: 'English', level: 'Fluent / Professional' },
      { name: 'Telugu', level: 'Native / Fluent' },
      { name: 'German', level: 'Beginner (A1)' },
    ],
  },

  academicRecord: [
    {
      degree: 'B.E. Computer Science & Engineering',
      institution: 'Keshav Memorial Engineering College',
      period: '2023 – 2026',
      grade: '8.36 / 10 CGPA',
      status: 'Final Year Candidate',
      specialization: 'Computer Science & Engineering',
      notes: 'Active leadership as Student Body President & CSI KMEC, technical research in decentralized security & LLM benchmarks.',
    },
    {
      degree: 'Diploma in Automobile Engineering',
      institution: 'Masab Tank Government Polytechnic College',
      period: '2020 – 2023',
      grade: '8.8 / 10 CGPA',
      specialization: 'Automobile Engineering & Embedded Systems',
      notes: 'Graduated with high distinction; engineered sensor-driven automated vehicle ignition control systems.',
    },
    {
      degree: '10th ICSE (Secondary Education)',
      institution: 'Living vikasa vidya vanam',
      period: '2019 – 2020',
      grade: '81.4%',
      specialization: 'General Sciences & Mathematics',
      notes: 'Comprehensive analytical and computational sciences foundation with strong extracurricular discipline.',
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
        'Implemented distributed storage methods and dynamic permission controls across network nodes, maintaining high data privacy while completely removing single points of failure.',
        'Audited access logs and node communication integrity under zero-trust operational paradigms.',
      ],
      technicalContributions: [
        'Decentralized node consensus & peer-to-peer data distribution',
        'Dynamic cryptographic permission enforcement',
        'Fault-tolerant storage node failover handling',
      ],
      toolsUsed: ['Python', 'FastAPI', 'Distributed Storage', 'RBAC', 'P2P Protocols', 'Linux'],
      verifiedOutcomes: 'Maintained high data privacy across distributed network nodes while eliminating centralized single points of compromise.',
      handwrittenNote: 'Zero single points of failure; access controls strictly audited.',
    },
    {
      id: 'telangana-police',
      organization: 'Women Safety Wing, Telangana Police',
      role: 'Internship – Bharosa Module',
      dates: 'Dec 2024 – Jan 2025',
      location: 'Hyderabad, India',
      badge: 'Public Safety & Analytics Dossier',
      stampText: 'OFFICIAL POLICE COLLABORATION',
      responsibilities: [
        'Supported key public safety initiatives at the Women Safety Wing’s Bharosa Module by designing high-impact visual campaigns—including T-Safe metro ads reaching 500,000+ citizens.',
        'Analysed operational data across 26 centres to boost reporting efficiency and optimize resource deployment.',
        'Managed critical government investigative workflows including Daily Situation Reports (DSR) and the statewide Operation Smile 11 initiative.',
      ],
      technicalContributions: [
        'Operational data analysis across 26 state crisis intervention centres',
        'T-Safe metro public safety communication reaching 500,000+ citizens',
        'Government administrative reporting pipelines for Operation Smile 11',
      ],
      toolsUsed: ['Data Analytics', 'Reporting Automation', 'OSINT Workflows', 'Case Management', 'Information Security'],
      verifiedOutcomes: 'Directly improved reporting efficiency across 26 centres and reached over half a million citizens via T-Safe initiatives.',
      handwrittenNote: 'Managed critical government workflows like Operation Smile 11 and Daily Situation Reports.',
    },
    {
      id: 'mithra-agencies',
      organization: 'Mithra Agencies',
      role: 'Industrial Trainee',
      dates: 'June – Nov 2022',
      location: 'Hyderabad, India',
      badge: 'Automotive Engineering Dossier',
      stampText: 'INDUSTRIAL FIELDWORK',
      responsibilities: [
        'Rotated across Service Technician, Service Advisor, Body Shop Technician, Body Shop Advisor, Spare Parts Executive, and Customer Care Executive functions.',
        'Acquired practical proficiency in vehicle diagnostics, servicing, and electromechanical maintenance.',
        'Coordinated service schedules, spare parts inventory management, and dealership customer support workflows.',
      ],
      technicalContributions: [
        'Electromechanical diagnostic evaluation & vehicle maintenance coordination',
        'Automated spare parts logistics and dealership inventory control',
        'Cross-functional operational workflow optimization across body shop departments',
      ],
      toolsUsed: ['Automotive Diagnostics', 'Electromechanical Tools', 'Inventory Systems', 'Workflow Management'],
      verifiedOutcomes: 'Comprehensive hands-on mastery of automotive operations, diagnostics, and multi-department service management.',
      handwrittenNote: 'Acquired cross-functional dealership expertise across technical and advisor roles.',
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
        'Evaluated five open-weight language models (Llama-3.2, Qwen-2.5) across 2,500 test queries against direct jailbreaks, indirect prompt injection, and obfuscation attacks on an isolated testbed.',
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
      problem: 'Conventional cloud storage providers represent centralized points of failure susceptible to surveillance, subpoena, and unencrypted data leakage.',
      approach: 'Developed a tamper-evident communication system combining a hardened Flutter client and a modular FastAPI backend with IPFS and blockchain-backed state integrity.',
      technologies: ['FastAPI', 'Flutter', 'IPFS', 'Blockchain', 'WebSockets', 'JWT', 'RBAC', 'Cryptography'],
      keyImplementations: [
        'Designed low-latency WebSocket messaging governed by strict JWT/RBAC policies and admin audit visibility.',
        'Integrated client-side capture prevention (anti-screenshot/screen recording protections) on mobile endpoints.',
        'Engineered self-destructing file transfers and blockchain hash anchoring to eliminate data exfiltration risks.',
      ],
      verifiedOutcomes: 'Zero centralized points of compromise achieved with tamper-evident state integrity.',
      handwrittenNote: 'Client-side anti-screenshot + self-destructing transfers prevent forensic leakage.',
      badge: 'Flagship System',
    },
    {
      id: 'qpat',
      title: 'Question Paper Automation Tool (QPAT)',
      subtitle: 'Automated Academic Assessment Generation System',
      dateRange: 'April – Aug 2025',
      specimenNo: 'SPECIMEN // 002-P',
      objective: 'Automate blueprint-compliant examination generation aligned with strict institutional regulatory taxonomies.',
      problem: 'Manual academic assessment creation is prone to cognitive bias, uneven difficulty distribution, and failure to meet Course Outcome (CO) accreditations.',
      approach: 'Engineered a full-stack assessment platform pairing a FastAPI backend with a cross-platform Flutter client incorporating natural language processing.',
      technologies: ['FastAPI', 'Flutter', 'NLP', 'Semantic Checks', 'Bloom’s Taxonomy', 'Python', 'ReportLab'],
      keyImplementations: [
        'Implemented NLP-driven semantic checks and automated syntax parsing for question analysis.',
        'Built automated Course Outcome (CO) alignment to dynamically balance questions against Bloom’s Taxonomy cognitive levels.',
        'Secured examination distribution via encrypted, password-protected PDF exports with embedded BT-level analytics.',
      ],
      verifiedOutcomes: 'Automates blueprint generation with 100% adherence to institutional accreditation taxonomies.',
      handwrittenNote: 'Automatic Bloom\'s Taxonomy mapping ensures regulatory compliance.',
      badge: 'Academic Innovation',
    },
    {
      id: 'smia',
      title: 'Social Media Investigative Assistant (SMIA)',
      subtitle: 'Digital Forensic Evidence Documentation Tool',
      dateRange: 'Jan – May 2025',
      specimenNo: 'SPECIMEN // 003-P',
      objective: 'Empower investigators with structured case management and legally defensible digital evidence gathering.',
      problem: 'Forensic investigators frequently struggle with ad-hoc screenshot capturing that lacks timestamp verification and court admissibility proof.',
      approach: 'Designed an extensible forensic analysis tool in Flutter, enabling structured case management and tamper-evident evidence collection.',
      technologies: ['Flutter', 'Dart', 'Forensic Encryption', 'SQLite / Local Storage', 'Cloud Sync', 'PDF Generation'],
      keyImplementations: [
        'Implemented cryptographically sound timestamped screenshot capture and automated investigative reporting.',
        'Engineered hybrid local/cloud storage under strict regulatory constraints to prevent non-compliant scraping.',
        'Preserved tamper-evident audit trails compliant with judicial evidence standards.',
      ],
      verifiedOutcomes: 'Generates court-admissible case reports under zero-scraping regulatory compliance.',
      handwrittenNote: 'Preserves cryptographic audit trails without non-compliant scraping.',
      badge: 'Forensic Analysis',
    },
    {
      id: 'alcohol-detector',
      title: 'Alcohol Detector with Vehicle Controlling System',
      subtitle: 'Automated Drunk-Driving Prevention & Vehicle Safety Platform',
      dateRange: 'Jan – June 2023',
      specimenNo: 'SPECIMEN // 004-P',
      objective: 'Prevent alcohol-related vehicular accidents through sensor-driven automated ignition interlocks.',
      problem: 'Drunk driving remains a primary cause of road transit fatalities due to delayed human reaction and lack of proactive vehicle-level prevention.',
      approach: 'Engineered and implemented an automated drunk-driving prevention system using an Arduino UNO and an MQ-3 gas sensor.',
      technologies: ['Arduino UNO', 'MQ-3 Sensor', 'Embedded C', 'Relay Modules', 'Hardware Interlocks', 'Real-Time Telemetry'],
      keyImplementations: [
        'Engineered continuous driver blood alcohol concentration (BAC) monitoring with high-sensitivity MQ-3 electrochemical sensing.',
        'Implemented real-time threshold detection to trigger an immediate audible buzzer alert upon intoxication detection.',
        'Integrated automated ignition disengagement circuitry, effectively locking the engine to prevent vehicle operation.',
      ],
      verifiedOutcomes: 'Reliable sensor-driven engine locking effectively mitigating drunk-driving vehicular risks.',
      handwrittenNote: 'Continuous MQ-3 sensing instantly disengages vehicle ignition on intoxication detection.',
      badge: 'Embedded Hardware',
    },
  ] as ProjectItem[],

  skills: {
    cybersecurityAndForensics: [
      'Vulnerability Assessment',
      'Mobile & Digital Forensics',
      'Network Scanning & Analysis',
      'Forensic Audit Trails',
      'Case Management Procedures',
    ],
    securityTools: [
      'Burp Suite',
      'Wireshark',
      'Nmap',
      'Kali Linux',
      'Metasploit',
    ],
    programmingLanguages: [
      'Python',
      'C',
      'Java',
      'Dart',
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
      'Cross-Platform UI',
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
      'Linux (Parrot, Kali, Fedora)',
      'Android Studio',
      'VS Code',
      'Jupyter Notebook',
      'ReportLab',
      'Playwright',
    ],
    softSkills: [
      'Team Leadership',
      'Problem Solving',
      'Communication',
      'Project Management',
      'Technical Writing & Presentation',
    ],
  },

  certifications: [
    {
      title: 'Cyber Crime and Cyber Forensics Course',
      issuer: 'National Law University Odisha',
      date: 'Aug 2026',
      score: 'Scored 87%',
      badge: '87% Distinction',
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
  ] as CertificationItem[],

  activitiesAndSocieties: [
    {
      role: 'Student Body President',
      organization: 'Keshav Memorial Engineering College',
      description: 'Represented the student body to institutional leadership, spearheading campus-wide initiatives, policy improvements, and major events.',
    },
    {
      role: 'Social Media Team',
      organization: 'Computer Society of India (CSI) KMEC',
      description: 'Led multi-platform digital marketing initiatives and content creation to actively promote tech symposiums, hackathons, and skill-building workshops to the student body.',
    },
    {
      role: 'Event Organizer',
      organization: 'College Technical & Cultural Festivals',
      description: 'Coordinated logistics, scheduling, and cross-functional teams for flagship technical and cultural college festivals, driving high student participation and ensuring seamless event execution.',
    },
    {
      role: 'Carnatic Music Member & Performer',
      organization: 'Classical Arts Guild',
      description: 'Performed as a core classical vocalist and instrumentalist in institutional showcases and cultural competitions, honing advanced improvisation and discipline.',
    },
  ],
};
