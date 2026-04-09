import { Mail, ArrowRight, Phone, LinkedinIcon } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

const impactMetrics = [
  {
    value: "$4M -> $15M",
    label: "Revenue Supported",
    detail: "Production architecture and yield stabilization",
  },
  {
    value: "500 -> 1,500",
    label: "Units Per Hour",
    detail: "Throughput optimization and workflow restructuring",
  },
  {
    value: "85% -> 95%",
    label: "Yield Stability",
    detail: "Tolerance stack control and process discipline",
  },
  {
    value: "23% -> 3%",
    label: "Field Return Rate",
    detail: "Reliability validation and thermal correction",
  },
  {
    value: "8 Audits",
    label: "0 Major Findings",
    detail: "Quality evidence readiness and CAPA discipline",
  },
  {
    value: "20+",
    label: "Fixtures Released",
    detail: "Production and test tooling for repeatable assembly",
  },
  {
    value: "15+",
    label: "Suppliers Qualified",
    detail: "Strategic vendor onboarding and dual-source resilience",
  },
];

export function Hero() {
  const { social, phone } = siteConfig;

  return (
    <section className="pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="hero-animate hero-animate-2 lg:col-span-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-blue-600">
              Hi! My name is,
            </p>

            <h1 className="hero-animate hero-animate-3 text-5xl font-semibold tracking-[-0.04em] text-gray-900 md:text-6xl">
              Yash Morbia
            </h1>

            <p className="hero-animate hero-animate-3 mt-4 text-lg font-medium leading-relaxed text-gray-700 md:text-xl">
              Lead Mechanical Engineer | NPI &amp; Manufacturing Operations
            </p>

            <ul className="hero-animate hero-animate-4 mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-gray-800">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" aria-hidden />
                <span>4+ years leading NPI execution for FDA-cleared electromechanical devices.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" aria-hidden />
                <span>Experience in tolerance-driven design, DFX (DFM/DFA), and EVT/DVT/PVT verification.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" aria-hidden />
                <span>Managed global supply chains and production ramps supporting $15M+ revenue.</span>
              </li>
            </ul>

            <div className="hero-animate hero-animate-4 mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href="/projects">
                  View Case Studies
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={`mailto:${social.email}`}>
                  Get in Touch
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild className="text-blue-600">
                <a href="/about">Go Deeper</a>
              </Button>
            </div>

            <div className="hero-animate hero-animate-4 mt-8 flex flex-wrap items-center gap-4 text-sm text-gray-600">
              {social.email && (
                <a
                  href={`mailto:${social.email}`}
                  className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  {social.email}
                </a>
              )}
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {phone}
              </span>
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-foreground"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              )}
            </div>
          </div>

          <div className="hero-animate hero-animate-4 lg:col-span-4">
            <div className="rounded-2xl border border-white/20 bg-white/70 p-6 shadow-sm backdrop-blur-lg">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600">
                Systems View
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-gray-900">
                Engineering impact scales when product, process, and quality all move together.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">
                I operate across design execution, validation rigor, supplier coordination, and manufacturing readiness so hardware programs can scale without losing technical control.
              </p>
            </div>
          </div>
        </div>

        <div className="hero-animate hero-animate-4 mt-16 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="mb-5">
            <h2 className="text-xl font-semibold tracking-[-0.02em] text-gray-900">
              Performance Analytics
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {impactMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-gray-200 bg-gray-50/80 p-4"
              >
                <p className="font-mono text-[1.25rem] font-semibold leading-tight tracking-[-0.03em] text-gray-900 md:text-[1.5rem]">
                  {metric.value}
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-gray-500">
                  {metric.label}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-gray-600">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
