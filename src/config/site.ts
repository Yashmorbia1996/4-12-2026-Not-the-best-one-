export const siteConfig = {
  name: "Yash Morbia",
  /** Short label for hero eyebrow / tight UI */
  roleShort: "Lead Mechanical Engineer",
  role: "Lead Mechanical Engineer — Product Development & Manufacturing",
  bio: "Senior Mechanical Engineer specializing in FDA-cleared electromechanical systems, precision packaging, and thermal management.",
  avatar: "/images/avatar.svg",
  location: "Greater Boston",

  url: "https://your-portfolio.example.com",
  description: "Yash Morbia — Lead Mechanical Engineer focused on NPI, regulated medical devices, and scalable manufacturing.",
  ogImage: "/images/og.jpg",

  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "you@example.com",
  },

  nav: [
    { label: "Home", href: "/", icon: "Home" },
    { label: "Projects", href: "/projects", icon: "Briefcase" },
    { label: "About", href: "/about", icon: "User" },
  ],

  skills: [
    "SolidWorks",
    "Siemens NX",
    "DFM/DFA",
    "ISO 13485",
    "FEA",
    "Thermal Management",
    "GD&T",
    "NPI Leadership",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
