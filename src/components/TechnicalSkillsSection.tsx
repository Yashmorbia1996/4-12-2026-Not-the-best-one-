import { Box, ClipboardCheck, DraftingCompass, Factory, ShieldCheck, Users } from "lucide-react";
import { Section } from "@/components/layout/Section";

const capabilityCards = [
  {
    icon: DraftingCompass,
    title: "Mechanical Engineering",
    bullets: [
      "Concept-to-production mechanical ownership",
      "Durability, cost, and manufacturability-driven iteration",
      "Worst-Case (WCS) tolerance stack-up analysis",
      "ASME Y14.5 GD&T standards",
    ],
  },
  {
    icon: Box,
    title: "Design Control & CAD",
    bullets: [
      "SolidWorks (CSWP) assemblies, surfacing, and 2D drawings",
      "Controlled drawing release and design documentation",
      "DHF/DMR support across the product lifecycle",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing Operations",
    bullets: [
      "Plastics, elastomers, and textiles in regulated product builds",
      "Rapid prototyping, DFM/DFA, and process development",
      "Production scaling from 500 to 1,500 UPW",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Quality & Compliance",
    bullets: [
      "ISO 13485 and ISO 9001 design control support",
      "MDSAP and internal audit readiness",
      "CAPA, change control, and regulatory de-risking",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Systems Validation",
    bullets: [
      "Requirements-based verification and fit/function validation",
      "EVT/DVT/PVT planning and execution",
      "RCA/CAPA follow-through and effectiveness verification",
    ],
  },
  {
    icon: Users,
    title: "Technical Leadership",
    bullets: [
      "Strategic operations, labor planning, and scaling models",
      "Global supply chain coordination and inventory systems",
      "Led 10 production technicians and standardized SOPs",
      "Cross-functional execution across Engineering, Quality, and Supply Chain",
    ],
  },
] as const;

export function CapabilitiesPanel() {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:auto-rows-fr">
      {capabilityCards.map(({ icon: Icon, title, bullets }) => (
        <article
          key={title}
          className="flex h-full min-h-[15rem] flex-col rounded-xl border-[0.5px] border-gray-200 bg-white p-8 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 text-gray-700">
            <Icon className="h-8 w-8" strokeWidth={1.5} />
          </div>
          <h3 className="mb-5 text-xl font-semibold tracking-[-0.02em] text-gray-900">{title}</h3>
          <ul className="flex grow flex-col space-y-3 text-sm leading-relaxed text-gray-500">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2.5">
                <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" aria-hidden />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export function TechnicalSkillsSection() {
  return (
    <Section id="technical-skills">
      <div className="mb-12 max-w-4xl space-y-4">
        <p className="text-5xl font-semibold tracking-[-0.04em] text-blue-600 md:text-6xl">
          Capabilities
        </p>
        <p className="text-base leading-relaxed text-gray-700">
          The Engineering, Manufacturing, and Leadership Capabilities I Bring to the Team
        </p>
      </div>

      <CapabilitiesPanel />
    </Section>
  );
}
