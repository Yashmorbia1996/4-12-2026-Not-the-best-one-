import { useState } from "react";
import { Mail, ArrowRight, Phone, LinkedinIcon, Plus, Minus } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

const journeyStops = [
  {
    title: "Coming to US",
    className: "border-[#8fc9b7] bg-[#A8D8C8] text-slate-900",
  },
  {
    title: "Pursuing my masters",
    className: "border-[#9cc7dc] bg-[#B8D8E8] text-slate-900",
  },
  {
    title: "My first internship",
    className: "border-[#1E2A4A] bg-[#1E2A4A] text-white font-bold",
  },
  {
    title: "Finishing my master",
    className: "border-[#dccf9a] bg-[#F5E6B8] text-slate-900",
  },
  {
    title: "Medical device start up",
    className: "border-[#dc8f52] bg-[#F4A86A] text-slate-900",
    current: true,
  },
  {
    title: "What's next?",
    className: "border-[#c6abd8] bg-[#D4B8E8]/70 text-slate-900",
    future: true,
  },
] as const;

const futurePlan = [
  "Keep growing from product execution into broader business leadership.",
  "Build stronger depth in strategy, go-to-market thinking, and team leadership.",
  "Move into executive roles where engineering judgment shapes company direction.",
  "Eventually build and lead a company of my own.",
] as const;

const stats = [
  { value: "$4M -> $15M", label: "Revenue supported" },
  { value: "500 -> 1,500", label: "Units per week" },
  { value: "23% -> 3%", label: "Field return rate" },
  { value: "8 audits", label: "0 major findings" },
];

export function Hero() {
  const { social, phone } = siteConfig;
  const [showFuturePlan, setShowFuturePlan] = useState(false);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="site-container">
        <div className="hero-animate hero-animate-1 mb-8 rounded-[2rem] border border-border/80 bg-[#F8F8F8] px-4 py-5 shadow-sm md:px-6">
          <div className="mx-auto w-full max-w-6xl">
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-accent">
              How I Got Here
            </p>
            <p className="mt-2 text-center text-sm text-slate-600">
              Not exactly a straight line, but it ended where I belong.
            </p>

            <div className="mt-7 overflow-x-auto pb-2">
              <div className="relative mx-auto min-w-[58rem] md:min-w-0 md:max-w-5xl">
                <div className="absolute left-6 right-6 top-10 h-px bg-[#6366F1]/35" aria-hidden />
                <div className="grid grid-cols-6 gap-5 text-center md:gap-6">
                  {journeyStops.map((stop, index) => {
                    const isFuture = Boolean(stop.future);

                    return (
                      <div key={stop.title} className="relative flex min-w-0 flex-col items-center">
                        {stop.current && (
                          <div className="absolute -top-1 left-1/2 z-20 flex -translate-x-[22%] items-start gap-2 animate-[pulse_3s_ease-in-out_infinite]">
                            <span className="pt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6366F1]">
                              I am here
                            </span>
                            <div className="flex flex-col items-center">
                              <div className="h-8 w-px bg-[#6366F1]" />
                              <div className="h-0 w-0 border-l-[5px] border-r-[5px] border-t-[7px] border-l-transparent border-r-transparent border-t-[#6366F1]" />
                            </div>
                          </div>
                        )}
                        <div
                          className={[
                            "relative z-10 mb-3 mt-5 h-4 w-4 rounded-full bg-[#6366F1]",
                            stop.current ? "ring-4 ring-[#6366F1]/20" : "",
                          ].join(" ")}
                        />
                        <div className="mb-3 h-4 w-px bg-[#6366F1]/35" aria-hidden />
                        {isFuture ? (
                          <button
                            type="button"
                            aria-expanded={showFuturePlan}
                            onClick={() => setShowFuturePlan((value) => !value)}
                            className={`flex min-h-[6.25rem] w-full items-center justify-center rounded-[1.25rem] border px-3 py-4 text-[11px] shadow-sm transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md ${stop.className}`}
                          >
                            <div className="flex flex-col items-center gap-2">
                              <p className="font-medium leading-tight opacity-75">{stop.title}</p>
                              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-500/30 bg-white/40 text-slate-700">
                                {showFuturePlan ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                              </span>
                            </div>
                          </button>
                        ) : (
                          <div
                            className={`flex min-h-[6.25rem] w-full items-center justify-center rounded-[1.25rem] border px-3 py-4 text-[11px] shadow-sm transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md ${stop.className}`}
                          >
                            <p className={["leading-tight", stop.current ? "font-semibold" : "font-medium"].join(" ")}>
                              {stop.title}
                            </p>
                          </div>
                        )}
                        <p className="mt-2 text-[10px] font-medium text-[#9CA3AF]">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {showFuturePlan && (
              <div className="mx-auto mt-5 max-w-3xl rounded-[1.5rem] border border-[#6366F1]/15 bg-white/70 p-5 text-left shadow-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6366F1]">
                  Rest of the plan
                </p>
                <div className="mt-3 grid gap-2 text-sm leading-relaxed text-slate-600 md:grid-cols-2">
                  {futurePlan.map((item) => (
                    <p key={item} className="rounded-xl bg-slate-50/80 px-3 py-2">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-end">
          <div className="max-w-3xl">
            <p className="hero-animate hero-animate-2 mb-3 font-mono text-xs uppercase tracking-[0.16em] text-primary-accent">
              Hi! Nice to meet you. My name is
            </p>

            <h1 className="hero-animate hero-animate-3 font-heading text-4xl font-normal leading-tight tracking-[-0.04em] text-foreground md:text-5xl lg:text-6xl">
              YASH MORBIA
            </h1>

            <div className="hero-animate hero-animate-4 mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-body-text">
              <p>
                Senior Mechanical/Manufacturing Engineer and technical operations lead with 4+ years owning NPI execution for FDA-cleared electromechanical consumer devices from prototype builds through production ramp.
              </p>
              <p>
                Experienced in tolerance-driven design, DFX (DFM/DFA), fixture/equipment development, and requirements-based verification (EVT/DVT/PVT) in fast-paced, cross-functional environments.
              </p>
            </div>

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
              <Button variant="ghost" size="lg" asChild>
                <a href="/about">Go Deeper</a>
              </Button>
            </div>

            <div className="hero-animate hero-animate-4 mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
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

          <div className="hero-animate hero-animate-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-primary-accent/25 bg-card/60 p-5 shadow-sm sm:col-span-2">
              <p className="text-sm leading-relaxed text-body-text">
                I am experienced in &quot;full-stack&quot; hardware ownership. From designing high-precision laser optics to auditing international suppliers, I build the technical infrastructure required to scale complex electromechanical products without compromising on quality or regulatory compliance.
              </p>
            </div>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-card/50 p-5 shadow-sm transition-all duration-300 hover:border-primary-accent/30 hover:shadow-md"
              >
                <p className="text-xl font-semibold leading-tight text-foreground md:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
