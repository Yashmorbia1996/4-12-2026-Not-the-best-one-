import { aboutMetrics } from "@/data/aboutContent";

export function AboutMetrics() {
  return (
    <div className="grid w-full max-w-3xl grid-cols-2 gap-2 lg:grid-cols-4">
      {aboutMetrics.map((m) => (
        <div
          key={m.label}
          className="rounded-xl border border-solid border-border bg-card/40 p-4 shadow-sm transition-shadow duration-300 hover:border-primary-accent/30 hover:shadow-md"
        >
          <p className="mb-2 text-sm font-semibold tracking-tight text-foreground">{m.label}</p>
          <p className="text-xs leading-relaxed text-body-text/90">{m.description}</p>
        </div>
      ))}
    </div>
  );
}
