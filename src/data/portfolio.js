// All site content lives here. Text wrapped in **double asterisks** is
// rendered as a highlighted phrase (see components/RichText.jsx).

export const profile = {
  name: "Muhammad Moosa Hashim",
  shortName: "Moosa Hashim",
  role: "Software Engineer",
  company: "Spursol | ValueLink",
  location: "Karachi, Pakistan",
  timeZone: "Asia/Karachi",
  email: "moosah01@gmail.com",
  linkedin: "https://www.linkedin.com/in/moosahashim/",
  github: "https://github.com/moosah01",
  resume: "/SWE-Muhammad_Moosa_Hashim_Resume_August%2726.pdf",
  resumeFileName: "Muhammad_Moosa_Hashim_Resume.pdf",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "beyond", label: "Beyond" },
  { id: "contact", label: "Contact" },
];

export const heroWords = [
  "backend services.",
  "banking integrations.",
  "AI workflows.",
];

export const impactStats = [
  {
    value: 5,
    prefix: "$",
    suffix: "M+",
    label: "in daily transactions through a Kafka pipeline I managed",
  },
  {
    value: 70,
    suffix: "%",
    label: "reduction in integration failure rates at Techlogix",
  },
  {
    value: 90,
    suffix: "%",
    label: "reduction in daily database growth at Spursol",
  },
  {
    value: 700,
    suffix: "K+",
    label: "customer profiles migrated between legacy and modern systems",
  },
];

export const whyMe = [
  {
    icon: "layers",
    title: "Integration experience",
    body: "I've connected banking systems with Kafka and Camel K, migrated customer data and built .NET client integrations. The work starts with understanding both sides of the connection.",
  },
  {
    icon: "gauge",
    title: "Measurable improvements",
    body: "My work reduced integration failures by 70% at Techlogix. At Spursol, I cut daily database growth by 90% and storage and execution costs by 25%.",
  },
  {
    icon: "sparkles",
    title: "Applied AI",
    body: "I've built appointment workflows using Azure OpenAI and an AI migration agent with automated security, test and build checks. Useful automation, with checks built in.",
  },
  {
    icon: "rocket",
    title: "Business context",
    body: "I've led a fintech launch for 70K+ users and co-founded a business serving 1,200+ clients. That experience helps me connect technical decisions to customer and operational needs.",
  },
];

export const experience = [
  {
    company: "Spursol | ValueLink",
    short: "SV",
    role: "Software Engineer",
    period: "Sep 2025 — Present",
    current: true,
    metric: "$0.8M → $2M revenue platform",
    gradient: "from-sky-400 to-indigo-500",
    bullets: [
      "Built a **Temporal-orchestrated inspection workflow** that automates follow-ups across email, SMS and AI voice calls, using **Azure OpenAI** to rank validated appointments while enforcing tenant-scoped booking and escalation.",
      "Engineered order and client-integration services on **C#/.NET** for a multi-tenant real-estate platform, supporting **150% half-year revenue growth ($0.8M → $2M)** while cutting storage and execution costs by **25%**.",
      "Modernized and secured the data layer by migrating **65+ repositories from ADO.NET to Dapper**, fixing **IDOR/RBAC** vulnerabilities, and building a repository-aware **AI migration agent** with automated security, test and build gates.",
      "Re-architected Azure Blob-backed document storage and sync to eliminate stale, missing and duplicate data — cutting database growth **90% (1 GB/day → 100 MB/day)** and removing **45 GB+** of accumulated data.",
    ],
    stack: [
      "C#",
      ".NET",
      "Temporal",
      "Azure OpenAI",
      "Dapper",
      "Azure Blob Storage",
      "SQL Server",
    ],
  },
  {
    company: "Techlogix",
    short: "TL",
    role: "Software Engineer",
    period: "Sep 2023 — Aug 2025",
    metric: "$5M+ in transactions daily",
    gradient: "from-violet-400 to-fuchsia-500",
    bullets: [
      "Managed a **Kafka** messaging pipeline linking client systems with **200+ global banks** for transfers, payments and prepaid services — handling **$5M+ in transactions daily** and tuning brokers for efficient communication.",
      "Integrated diverse systems over **SOAP** and **REST** using Karavan, **Apache Camel K**, XSLT and Groovy on a generic processing model, **reducing failure rates by 70%**.",
      "Orchestrated a bidirectional migration of **700K+ customer profiles** with related card and transaction records between legacy and modern systems, using event-driven triggers, SQL stored procedures and YAML integration pipelines.",
      "Streamlined the **Azure** development environment by reconfiguring integrations, **cutting core and memory usage by 50%**.",
    ],
    stack: [
      "Apache Kafka",
      "Apache Camel K",
      "Karavan",
      "XSLT",
      "Groovy",
      "SOAP & REST",
      "Azure",
      "SQL",
    ],
  },
  {
    company: "Hilal Invest",
    short: "HI",
    role: "Product Owner",
    period: "May 2022 — Nov 2022",
    metric: "70K+ users at launch",
    gradient: "from-emerald-400 to-teal-500",
    bullets: [
      "Led the launch of **Pakistan's first digital Islamic investment platform** for **70K+ users**, managing deliverables as Scrum Master in Jira and driving integration with **7 third-party AMCs** through Mural-based process mapping.",
      "Ran competitor benchmarking and impression-based analyses to guide UX decisions, optimizing the user journey and **boosting engagement efficiency by 30%**.",
    ],
    stack: ["Product ownership", "Scrum", "Jira", "Mural", "UX research"],
  },
  {
    company: "Commuovere Tours",
    short: "CT",
    role: "Co-founder & Head of Sales",
    period: "Oct 2020 — Feb 2022",
    metric: "PKR 8M+ revenue",
    gradient: "from-amber-400 to-pink-500",
    bullets: [
      "Co-founded and led a student-run travel agency, generating **PKR 8M+ in revenue** across **1,200+ clients** — owning sales, operations and growth.",
    ],
    stack: ["Entrepreneurship", "Sales", "Operations"],
  },
];

export const projects = [
  {
    id: "inspection-workflow",
    kind: "Work project · Spursol",
    title: "AI inspection follow-up workflow",
    description:
      "Temporal-orchestrated follow-ups over email, SMS and AI voice calls, with Azure OpenAI ranking validated appointments under tenant-scoped booking rules.",
    outcomes: ["3 channels automated", "Tenant-scoped escalation"],
    stack: ["Temporal", "Azure OpenAI", "C#/.NET"],
    visual: "workflow",
    accent: "sky",
  },
  {
    id: "migration-agent",
    kind: "Work project · Spursol",
    title: "Repository-aware AI migration agent",
    description:
      "Modernized 65+ data repositories from ADO.NET to Dapper, fixed IDOR/RBAC vulnerabilities and built an AI migration agent with automated security, test and build checks.",
    outcomes: ["65+ repositories", "IDOR/RBAC fixes"],
    stack: ["C#", "Dapper", "LLM agents", "CI gates"],
    visual: "migration",
    accent: "violet",
  },
  {
    id: "kafka-pipeline",
    kind: "Work project · Techlogix",
    title: "Cross-bank payments pipeline",
    description:
      "A Kafka messaging backbone linking client systems with 200+ global banks for transfers, payments and prepaid services.",
    outcomes: ["$5M+ / day", "70% fewer failures"],
    stack: ["Kafka", "Camel K", "XSLT", "Groovy"],
    visual: "pipeline",
    accent: "fuchsia",
  },
  {
    id: "lms",
    kind: "Final-year project · Team lead",
    title: "Learning Management System",
    description:
      "Led backend development for an LMS designed for 10K+ users, with a NoSQL schema, access controls and 100+ REST APIs supporting 50K+ records. Cloudinary compression reduced file sizes by 40%.",
    outcomes: ["100+ REST APIs", "40% smaller files"],
    stack: ["MongoDB", "Express", "React", "Node.js", "Cloudinary"],
    visual: "lms",
    accent: "emerald",
  },
  {
    id: "attendance",
    kind: "Product · In production",
    title: "Attendance & performance tracker",
    description:
      "An RBAC-driven platform now used in 10 warehouses, tracking attendance, overtime and performance of 300+ employees in real time with KPI dashboards.",
    outcomes: ["300+ employees", "40% fewer timesheet errors"],
    stack: ["MERN", "RBAC", "Heroku"],
    visual: "dashboard",
    accent: "amber",
  },
  {
    id: "indie-games",
    kind: "Side project · Solo dev",
    title: "Indie games in C++ & Flutter",
    description:
      "Built a top-down space shooter and a three-level platformer with custom physics, enemy AI and an MVC structure. Occasionally, the requirements include spaceships.",
    outcomes: ["2 games shipped", "Custom physics & AI"],
    stack: ["C++", "SDL2", "Flutter Flame"],
    visual: "game",
    accent: "pink",
  },
];

export const journey = [
  {
    year: "2017",
    title: "Leading 1,700+ students",
    org: "Nixor College · A Levels",
    body: "Served as student body Vice President, representing 1,700+ students.",
    learned: ["Leadership", "Public speaking", "Event ops"],
  },
  {
    year: "2019",
    title: "Computer science at IBA",
    org: "Institute of Business Administration",
    body: "Studied computer science and led backend development for a learning management system as my final-year project.",
    learned: ["C++", "Java", "Python", "SQL", "OOP"],
  },
  {
    year: "2020",
    title: "Co-founded a company",
    org: "Commuovere Tours",
    body: "Co-founded a student-run travel agency that generated PKR 8M+ in revenue across 1,200+ clients.",
    learned: ["Sales", "Operations", "Growth"],
  },
  {
    year: "2022",
    title: "Product owner at a fintech",
    org: "Hilal Invest",
    body: "Led the launch of a digital Islamic investment platform for 70K+ users and coordinated integrations with seven asset management companies.",
    learned: ["Scrum", "Jira", "Flutter", "UX research"],
  },
  {
    year: "2023",
    title: "Full-stack & games",
    org: "FYP · side projects",
    body: "Built an LMS designed for 10K+ users, an attendance system used across 10 warehouses and games in SDL2 and Flutter Flame.",
    learned: ["MongoDB", "Express", "React", "Node.js", "SDL2"],
  },
  {
    year: "2023",
    title: "Banking integrations",
    org: "Techlogix",
    body: "Managed a Kafka pipeline connecting client systems with 200+ banks and handling $5M+ in daily transactions. Migrated 700K+ customer profiles between systems.",
    learned: ["Kafka", "Camel K", "Karavan", "XSLT", "Groovy", "Azure"],
  },
  {
    year: "2025",
    title: "Backend services and AI workflows",
    org: "Spursol | ValueLink",
    body: "Built .NET services and Temporal inspection workflows for a multi-tenant real-estate platform, alongside data access and document storage improvements.",
    learned: ["C#", ".NET", "Temporal", "Dapper", "Azure OpenAI"],
  },
  {
    year: "Next",
    title: "The next engineering role",
    org: "Open to opportunities",
    body: "Looking for a team where I can contribute to backend systems, integrations and applied AI, with responsibility for the work from implementation through production.",
    learned: ["Backend engineering", "Integrations", "Applied AI"],
    next: true,
  },
];

export const skillGroups = [
  {
    title: "Languages",
    blurb: "Languages used across professional work and projects.",
    items: [
      "C#",
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "Rust",
      "SQL",
    ],
  },
  {
    title: "Backend & APIs",
    blurb: "Application services, data access and API development.",
    items: [
      ".NET",
      "Node.js",
      "Express",
      "Django",
      "Dapper",
      "REST",
      "SOAP",
    ],
  },
  {
    title: "Integration & workflows",
    blurb: "Messaging, system integration and workflow orchestration.",
    items: ["Apache Kafka", "Temporal", "Apache Camel K", "Karavan", "XSLT", "Groovy", "YAML"],
  },
  {
    title: "Cloud & data",
    blurb: "Database design, document storage and deployment.",
    items: [
      "Azure",
      "Azure Blob Storage",
      "SQL Server",
      "MongoDB",
      "Cloudinary",
      "Vercel",
      "Heroku",
    ],
  },
  {
    title: "AI engineering",
    blurb: "Appointment ranking, voice follow-ups and migration agents.",
    items: ["Azure OpenAI", "LLM agents", "AI voice workflows", "Automated validation"],
  },
  {
    title: "Frontend & mobile",
    blurb: "Web and mobile applications, plus game development.",
    items: ["React", "Angular", "Tailwind CSS", "Flutter", "Flame", "SDL2"],
  },
  {
    title: "Security & quality",
    blurb: "Access control, tenant boundaries and automated checks.",
    items: ["IDOR / RBAC", "Tenant isolation", "Automated test & build gates", "Data integrity"],
  },
  {
    title: "Ways of working",
    blurb: "Product planning, delivery coordination and technical communication.",
    items: ["Scrum", "Jira", "Product ownership", "Stakeholder management", "Tech talks"],
  },
];

export const education = [
  {
    school: "Institute of Business Administration",
    short: "IBA Karachi",
    degree: "BS Computer Science",
    period: "2019 — 2023",
    logo: "iba",
    highlight: "Final-year project: LMS team lead",
    awards: [
      "Global Futures Fellowship Scholarship",
      "Featured on the Dean's Wall",
      "Academic Excellence Award",
    ],
    url: "https://www.iba.edu.pk/",
  },
  {
    school: "Nixor College",
    short: "Nixor",
    degree: "A Levels",
    period: "2017 — 2019",
    logo: "nixor",
    highlight: "Vice President of a 1,700+ student body",
    awards: ["Leadership Award", "Academic Excellence Award"],
    url: "https://www.nixorcollege.org/",
  },
];

export const leadership = [
  {
    title: "Speaker · Flutter Festival Karachi",
    org: "Google-endorsed developer event",
    body: "Presented responsive design and advanced widgets to 100+ developers.",
    stats: [{ value: "100+", label: "attendees" }],
    icon: "mic",
  },
  {
    title: "Mask Banao",
    org: "Public relations & outreach",
    body: "Led welfare drives across 33 villages with partners including Careem, Engro and government bodies.",
    stats: [
      { value: "120K+", label: "masks distributed" },
      { value: "20M+", label: "campaign impressions" },
      { value: "200%", label: "increase in fundraising outreach" },
    ],
    icon: "heart",
  },
  {
    title: "Grand Citizens NGO",
    org: "Chief Operating Officer",
    body: "Mobilized volunteers for ration drives, meals and winter relief.",
    stats: [
      { value: "250+", label: "volunteers / year" },
      { value: "PKR 12M+", label: "raised" },
      { value: "10K+", label: "meals delivered" },
    ],
    icon: "users",
  },
];

export const hobbies = [
  { label: "Distance running", emoji: "🏃" },
  { label: "Calisthenics", emoji: "🤸" },
  { label: "Table tennis", emoji: "🏓" },
  { label: "Chess", emoji: "♟️" },
  { label: "Anime & manga", emoji: "📚" },
  { label: "Dota 2", emoji: "🎮" },
];
