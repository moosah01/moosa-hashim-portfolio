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
  "scales.",
  "ships.",
  "moves money.",
  "thinks.",
  "just works.",
];

export const impactStats = [
  {
    value: 5,
    prefix: "$",
    suffix: "M+",
    label: "processed daily through Kafka pipelines I ran",
  },
  {
    value: 150,
    suffix: "%",
    label: "half-year revenue growth on a platform I engineer",
  },
  {
    value: 90,
    suffix: "%",
    label: "less daily database growth after a storage re-architecture",
  },
  {
    value: 700,
    suffix: "K+",
    label: "customer profiles migrated between legacy & modern systems",
  },
];

export const whyMe = [
  {
    icon: "layers",
    title: "Stack-agnostic by design",
    body: "Java & C++ at university, MERN for products, Kafka & Camel K for banking, C#/.NET & Temporal for SaaS. Four ecosystems — productive in each within weeks.",
  },
  {
    icon: "gauge",
    title: "Impact you can measure",
    body: "I track outcomes, not tickets: 70% fewer integration failures, 90% less database growth, 25% lower storage & execution costs.",
  },
  {
    icon: "sparkles",
    title: "AI as a force multiplier",
    body: "I ship LLM features with guardrails — Azure OpenAI ranking, AI voice follow-ups, and a migration agent gated by security, test & build checks.",
  },
  {
    icon: "rocket",
    title: "Owner's mindset",
    body: "Co-founded a company, led a product launch for 70K+ users and ran NGO operations. I take problems end to end.",
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
    kind: "Case study · Spursol",
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
    kind: "Case study · Spursol",
    title: "Repository-aware AI migration agent",
    description:
      "Migrated 65+ repositories from ADO.NET to Dapper, with an AI agent that proposes changes and only merges past automated security, test and build gates.",
    outcomes: ["65+ repositories", "IDOR/RBAC fixes"],
    stack: ["C#", "Dapper", "LLM agents", "CI gates"],
    visual: "migration",
    accent: "violet",
  },
  {
    id: "kafka-pipeline",
    kind: "Case study · Techlogix",
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
      "An LMS designed for 10K+ users: NoSQL schema, security controls and 100+ REST APIs over 50K+ records, with Cloudinary compression and Vercel deploys. Voted a top-3 FYP of 2023.",
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
      "Shipped a top-down space shooter and a 3-level platformer — hand-rolled physics, enemy AI and an MVC structure built for easy expansion.",
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
    body: "Vice President of the student body. First lesson in shipping: people and deadlines don't wait.",
    learned: ["Leadership", "Public speaking", "Event ops"],
  },
  {
    year: "2019",
    title: "Computer science at IBA",
    org: "Institute of Business Administration",
    body: "Fundamentals first — data structures, systems and a lot of C++ and Java. Graduated with a top-3 FYP.",
    learned: ["C++", "Java", "Python", "SQL", "OOP"],
  },
  {
    year: "2020",
    title: "Co-founded a company",
    org: "Commuovere Tours",
    body: "Built a student-run travel agency to PKR 8M+ in revenue. Learned sales, ops and how businesses actually make money.",
    learned: ["Sales", "Operations", "Growth"],
  },
  {
    year: "2022",
    title: "Product owner at a fintech",
    org: "Hilal Invest",
    body: "Launched Pakistan's first digital Islamic investment platform. Spoke at Google-endorsed Flutter Festival Karachi.",
    learned: ["Scrum", "Jira", "Flutter", "UX research"],
  },
  {
    year: "2023",
    title: "Full-stack & games",
    org: "FYP · side projects",
    body: "Led an LMS for 10K+ users, shipped an attendance platform to 10 warehouses, and built games in SDL2 and Flame.",
    learned: ["MongoDB", "Express", "React", "Node.js", "SDL2"],
  },
  {
    year: "2023",
    title: "Banking-grade integration",
    org: "Techlogix",
    body: "Picked up Kafka, Camel K, XSLT and Groovy on the job and ran pipelines moving $5M+ a day across 200+ banks.",
    learned: ["Kafka", "Camel K", "Karavan", "XSLT", "Groovy", "Azure"],
  },
  {
    year: "2025",
    title: "AI-native SaaS engineering",
    org: "Spursol | ValueLink",
    body: "Switched to C#/.NET and Temporal, and put LLMs into production workflows for a multi-tenant real-estate platform.",
    learned: ["C#", ".NET", "Temporal", "Dapper", "Azure OpenAI"],
  },
  {
    year: "Next",
    title: "Whatever you need",
    org: "Currently exploring",
    body: "Rust, agentic AI tooling and durable distributed workflows. Hand me an unfamiliar stack — I'll be shipping in it soon.",
    learned: ["Rust", "AI agents", "Distributed systems"],
    next: true,
  },
];

export const skillGroups = [
  {
    title: "Languages",
    blurb: "Typed or dynamic — whatever the problem needs.",
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
    blurb: "Services that are secure, observable and boring in production.",
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
    blurb: "Moving data and money reliably between systems.",
    items: ["Apache Kafka", "Temporal", "Apache Camel K", "Karavan", "XSLT", "Groovy", "YAML"],
  },
  {
    title: "Cloud & data",
    blurb: "Storage, databases and deploys that stay lean.",
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
    blurb: "LLMs in production — with guardrails.",
    items: ["Azure OpenAI", "LLM agents", "AI voice workflows", "Eval & CI gates"],
  },
  {
    title: "Frontend & mobile",
    blurb: "Clean, responsive interfaces — like this one.",
    items: ["React", "Angular", "Tailwind CSS", "Flutter", "Flame", "SDL2"],
  },
  {
    title: "Security & quality",
    blurb: "Fixing the bugs that make headlines.",
    items: ["IDOR / RBAC", "Tenant isolation", "Automated test & build gates", "Data integrity"],
  },
  {
    title: "Ways of working",
    blurb: "Engineer with a product owner's instincts.",
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
    highlight: "Top-3 final-year project of 2023",
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
      { value: "200%", label: "fundraising outreach" },
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
