import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";

import {
  catProgrammer,
  moosaImage,
  ibaLogo,
  nixorLogo,
} from "../assets/images";

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#qualifications", label: "Qualifications" },
  { href: "#projects", label: "Projects" },
  { href: "#connect", label: "Connect" },
  { href: "#portfolio", label: "Portfolio" },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const services2 = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];

export const services = [
  "Build secure and scalable REST APIs for high-performance web apps",
  "Develop real-time event-driven systems and pipelines",
  "Deploy cloud-native applications and integrating 3rd-party services",
  "Design cross-platform UIs focusing on clean architecture and responsive design",
];

export const education = [
  {
    university: "Institute of Business Administration",
    degree: "Bachelor of Science in Computer Science",
    duration: "Graduated May 2023",
    session: "August 2019 - May 2023",
    website: "https://www.iba.edu.pk/",
    linkedin:
      "https://www.linkedin.com/school/ibakhiofficial/?originalSubdomain=pk",
    src: ibaLogo,
    mainHighlight: "Voted Top 3 FYP of year 2023",
    description:
      "A public-sector university established in 1955, IBA Karachi is Pakistan’s oldest business school and consistently ranks among the top in the region. Originally founded with support from Wharton and USC, it now offers a wide portfolio from undergraduate to doctoral programs in business, computer science, economics, and social sciences, alongside executive education and research centers. ",
    highlights: [
      "Global Futures Fellowship Scholarship Award",
      "Featured on Dean’s Wall",
      "Academic Excellence Award",
    ],
  },
  {
    university: "Nixor College",
    degree: "A Levels",
    duration: "Graduated August 2019",
    session: "August 2017 - August 2019",
    website: "https://www.nixorcollege.org/",
    linkedin:
      "https://www.linkedin.com/company/nixor-college/?originalSubdomain=pk",
    src: nixorLogo,
    mainHighlight: "Vice President of a student body of strength 1700+",
    description:
      "Founded in 2008 in the upscale DHA area of Karachi, Nixor is an independent, coeducational A-Level college affiliated with Cambridge International Examinations. Known for its rigorous academics, strong leadership and community culture, it serves students aged 16–19 and offers merit- and need-based scholarships.",
    highlights: [
      "Featured on Dean’s Wall",
      "Academic Excellence Award",
      "Leadership Award",
    ],
  },
];

export const workExperience = [
  {
    company: "Techlogix",
    role: "Software Engineer",
    duration: "Sep 2023 – Present",
    logo: ibaLogo,
    color: "#1D4ED8", // Blue gradient
    description:
      "Managed Kafka messaging pipeline handling $5M+ in daily transactions. Integrated diverse systems using SOAP, REST, Apache Camel K, XSLT & Groovy. Migrated 700K+ customer profiles & streamlined Azure environments, reducing failure rates by 70% and cutting resource usage by 50%.",
    highlights: [
      "Kafka pipeline linking 200+ global banks",
      "Reduced failure rates by 70% with robust integrations",
      "Optimized Azure integrations cutting core & memory by 50%",
    ],
    gradient: {
      from: "#1D4ED8",
      to: "#3B82F6",
    },
  },
  {
    company: "Hilal Invest",
    role: "Product Owner",
    duration: "May 2022 – Nov 2022",
    logo: ibaLogo,
    color: "#DC2626", // Red gradient
    description:
      "Led the launch of Pakistan's first digital Islamic investment platform serving 70K+ users. Managed deliverables as Scrum Master and integrated 7 third-party AMCs while improving engagement by 30%.",
    highlights: [
      "Led launch of a first-of-its-kind investment platform",
      "Integrated 7 third-party AMCs using Mural-based mapping",
      "Boosted user engagement efficiency by 30%",
    ],
    gradient: {
      from: "#2FBE9F", // teal from logo
      to: "#153B59", // navy from logo
    },
  },
  {
    company: "Commuovere Tours",
    role: "Cofounder & Head of Sales",
    duration: "Oct 2020 – Feb 2022",
    logo: ibaLogo,
    color: "#EC4899", // Pink gradient
    description:
      "Co-founded and scaled a student-run travel agency generating PKR 8M+ in revenue, serving 1200+ clients. Oversaw operations, sales, and growth strategy.",
    highlights: [
      "Generated PKR 8M+ revenue with 1200+ clients",
      "Led operations & sales for a student-run agency",
      "Built brand presence in competitive travel industry",
    ],
    gradient: {
      from: "#38BDF8", // sky blue
      to: "#0EA5E9",
    },
  },
];
