import { siteConfig } from "@/config/site";

export function SkillsGrid() {
  const { skills } = siteConfig;

  return (
    <div className="space-y-2">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Skills &amp; Tools</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-solid border-border bg-card/50 px-3 py-2 text-sm text-body-text shadow-sm transition-all duration-300 hover:border-primary-accent/40 hover:bg-primary-accent/5"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
