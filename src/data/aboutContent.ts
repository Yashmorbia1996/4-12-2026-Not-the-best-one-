/** Shared About copy + metrics (homepage About block & /about intro). */
export const aboutTitle = "About me";

/** Short line next to your name — same typography as About me body copy. */
export const aboutNameNote =
  "Thanks for checking out my portfolio! Whether you're a recruiter, fellow engineer, friend, or lost stranger, I hope you enjoy the ride.";

export const aboutBioParagraphs = [
  "Hi—I'm glad you're here! I'm Yash Morbia, a Lead Mechanical Engineer specializing in NPI for high-stakes medical devices. Currently, I lead manufacturing and design operations at NIRA, where I've scaled production throughput by 3x and helped grow annual revenue from $4M to $15M.",
  "I thrive at the intersection of precision CAD (SolidWorks/NX) and floor-ready scalability. From engineering thermal redesigns that slashed return rates from 23% to 3%, to navigating complex ISO 13485 audits, I build products that don't just work in theory—they excel in high-volume production.",
] as const;

export const aboutMetrics = [
  {
    label: "300% Scale",
    description: "Increased weekly throughput 3x.",
  },
  {
    label: "$15M Growth",
    description: "Scaled revenue from $4M to $15M.",
  },
  {
    label: "95% Yield",
    description: "Improved production yield from 85%.",
  },
  {
    label: "FDA Cleared",
    description: "Ownership of ISO 13485 & DHF/DMR.",
  },
] as const;
