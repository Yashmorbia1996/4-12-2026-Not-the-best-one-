import { siteConfig } from "@/config/site";
import { Section } from "@/components/layout/Section";
import { aboutTitle, aboutBioParagraphs } from "@/data/aboutContent";
import { AboutMetrics } from "@/components/AboutMetrics";

export function AboutSection() {
  const { name, role, avatar, location } = siteConfig;

  return (
    <Section label="About">
      <div className="flex flex-col gap-8 md:flex-row md:items-start">
        <div className="flex shrink-0 flex-col gap-2">
          <img
            src={avatar}
            alt={name}
            width={160}
            height={160}
            className="h-32 w-32 rounded-full border border-solid border-border object-cover shadow-card md:h-40 md:w-40"
          />
          <p className="text-xs text-muted-foreground">{location}</p>
        </div>
        <div className="min-w-0 max-w-3xl flex-1 space-y-2">
          <p className="text-sm font-medium text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
          <h2 className="font-heading mb-2 text-2xl font-normal tracking-[-0.03em] text-primary-accent md:text-3xl">
            {aboutTitle}
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-body-text">
            {aboutBioParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="pt-4">
            <AboutMetrics />
          </div>
        </div>
      </div>
    </Section>
  );
}
