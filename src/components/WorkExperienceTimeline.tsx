import { useMemo, useState } from "react";

export interface WorkTimelineEntry {
  id: string;
  data: {
    company: string;
    role: string;
    startDate: string;
    endDate?: string;
    current: boolean;
    description: string;
    achievements: string[];
    order: number;
    location?: string;
    coverImage?: string;
    brandInitial?: string;
    brandColor?: string;
    logoUrl?: string;
  };
}

interface WorkExperienceTimelineProps {
  entries: WorkTimelineEntry[];
  variant?: "default" | "home";
}

function periodLabel(data: WorkTimelineEntry["data"]) {
  return data.current ? `${data.startDate} — Present` : `${data.startDate} — ${data.endDate ?? ""}`.trim();
}

function chipLabel(data: WorkTimelineEntry["data"]) {
  const raw = (data.brandInitial ?? data.company).trim();
  return raw.length <= 2
    ? raw.toUpperCase()
    : raw.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase() || raw.slice(0, 2).toUpperCase();
}

function TimelineLogo({
  data,
  size,
}: {
  data: WorkTimelineEntry["data"];
  size: "md" | "sm";
}) {
  const dim = size === "md" ? "h-12 w-12" : "h-8 w-8";
  const textSize = size === "md" ? "text-xs" : "text-[10px]";
  const borderStyle =
    data.brandColor && !data.logoUrl
      ? ({
          borderColor: data.brandColor,
          color: data.brandColor,
        } as const)
      : undefined;

  return (
    <div
      className={[
        "flex shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-primary-accent bg-card shadow-sm",
        dim,
        data.logoUrl ? "p-1.5" : `${textSize} font-bold text-primary-accent`,
      ].join(" ")}
      style={borderStyle}
    >
      {data.logoUrl ? (
        <img
          src={data.logoUrl}
          alt={`${data.company} logo`}
          className="h-full w-full object-contain"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <span aria-hidden>{chipLabel(data)}</span>
      )}
    </div>
  );
}

function Node({ data, variant }: { data: WorkTimelineEntry["data"]; variant: "default" | "home" }) {
  return (
    <div className={["relative z-10 flex justify-center", variant === "home" ? "pt-4" : "pt-2"].join(" ")}>
      <TimelineLogo data={data} size="md" />
    </div>
  );
}

function MetaBlock({
  data,
  align,
  variant,
}: {
  data: WorkTimelineEntry["data"];
  align: "left" | "right";
  variant: "default" | "home";
}) {
  return (
    <div
      className={[
        "flex flex-col gap-2",
        variant === "home" ? "pt-4" : "pt-2",
        align === "right" ? "items-end text-right pr-4 md:pr-6" : "items-start text-left pl-4 md:pl-6",
      ].join(" ")}
    >
      <p
        className={[
          variant === "home" ? "text-base font-semibold text-primary-accent" : "text-sm font-semibold text-primary-accent",
          data.current ? "rounded-lg border border-primary-accent/35 bg-primary-accent/10 px-3 py-2" : "",
        ].join(" ")}
      >
        {periodLabel(data)}
      </p>
      {data.location ? (
        <p className={variant === "home" ? "text-sm text-muted-foreground" : "text-xs text-muted-foreground"}>
          {data.location}
        </p>
      ) : null}
    </div>
  );
}

export function WorkExperienceTimeline({ entries, variant = "default" }: WorkExperienceTimelineProps) {
  const sorted = useMemo(
    () => [...entries].sort((a, b) => a.data.order - b.data.order),
    [entries],
  );

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (!sorted.length) return null;

  return (
    <div className="work-experience-chain">
      {/* Desktop: continuous rail + alternating rows */}
      <div className="relative hidden md:block">
        <div
          className="pointer-events-none absolute top-0 bottom-0 left-1/2 z-0 w-px -translate-x-1/2 bg-border"
          aria-hidden
        />
        <div className={["relative z-10 flex flex-col", variant === "home" ? "gap-16 lg:gap-20" : "gap-12 lg:gap-16"].join(" ")}>
          {sorted.map((entry, i) => {
            const cardOnRight = i % 2 === 0;
            const { data } = entry;
            const isOpen = !!expanded[entry.id];

            return (
              <div
                key={entry.id}
                className={[
                  "grid grid-cols-1 md:items-start md:gap-0",
                  variant === "home"
                    ? "md:grid-cols-[minmax(0,1.05fr)_3.5rem_minmax(0,1.35fr)]"
                    : "md:grid-cols-[minmax(0,1fr)_2.75rem_minmax(0,1fr)]",
                ].join(" ")}
              >
                {cardOnRight ? (
                  <>
                    <MetaBlock data={data} align="right" variant={variant} />
                    <Node data={data} variant={variant} />
                    <div className={variant === "home" ? "pl-5 md:pl-8" : "pl-4 md:pl-6"}>
                      <TimelineCard
                        data={data}
                        expanded={isOpen}
                        onToggleReadMore={() => toggle(entry.id)}
                        pointer="start"
                        variant={variant}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className={variant === "home" ? "pr-5 md:pr-8" : "pr-4 md:pr-6"}>
                      <TimelineCard
                        data={data}
                        expanded={isOpen}
                        onToggleReadMore={() => toggle(entry.id)}
                        pointer="end"
                        variant={variant}
                      />
                    </div>
                    <Node data={data} variant={variant} />
                    <MetaBlock data={data} align="left" variant={variant} />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile: left spine + stacked cards */}
      <div className="relative space-y-10 pl-6 md:hidden">
        <div className="absolute top-2 bottom-2 left-[0.6rem] w-px bg-border" aria-hidden />
        <div className="flex flex-col gap-10">
          {sorted.map((entry) => {
            const { data } = entry;
            const isOpen = !!expanded[entry.id];
            return (
              <div key={entry.id} className="relative">
                <div className="absolute -left-6 top-6 z-10 -translate-x-1/2">
                  <TimelineLogo data={data} size="sm" />
                </div>
                <TimelineCard
                  data={data}
                  expanded={isOpen}
                  onToggleReadMore={() => toggle(entry.id)}
                  pointer="none"
                  variant={variant}
                />
                <div className="mt-3 flex flex-col gap-1 border-t border-border pt-3">
                  <p
                    className={[
                      "text-sm font-semibold text-primary-accent",
                      data.current ? "w-fit rounded-md border border-primary-accent/35 bg-primary-accent/10 px-2 py-1" : "",
                    ].join(" ")}
                  >
                    {periodLabel(data)}
                  </p>
                  {data.location ? (
                    <p className="text-xs text-muted-foreground">{data.location}</p>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function TimelineCard({
  data,
  expanded,
  onToggleReadMore,
  pointer,
  variant,
}: {
  data: WorkTimelineEntry["data"];
  expanded: boolean;
  onToggleReadMore: () => void;
  pointer: "start" | "end" | "none";
  variant: "default" | "home";
}) {
  return (
    <article
      className={[
        "relative overflow-visible border border-solid border-primary-accent/25 bg-card shadow-sm transition-shadow duration-300 hover:shadow-md",
        variant === "home" ? "rounded-[1.75rem] p-6" : "rounded-2xl p-4",
      ].join(" ")}
    >
      {pointer === "start" ? (
        <span className="experience-card-pointer hidden md:block" aria-hidden />
      ) : null}
      {pointer === "end" ? (
        <span className="experience-card-pointer-end hidden md:block" aria-hidden />
      ) : null}

      <h3 className={variant === "home" ? "text-xl font-semibold text-primary-accent md:text-[1.75rem]" : "text-base font-semibold text-primary-accent md:text-lg"}>
        {data.company} — {data.role}
      </h3>

      {data.coverImage ? (
        <div className={["mt-4 overflow-hidden border border-border bg-muted/30", variant === "home" ? "rounded-2xl" : "rounded-xl"].join(" ")}>
          <img
            src={data.coverImage}
            alt=""
            className={variant === "home" ? "h-56 w-full object-cover object-center md:h-64" : "h-40 w-full object-cover object-center md:h-48"}
            loading="lazy"
          />
        </div>
      ) : null}

      <p className={variant === "home" ? "mt-5 text-base leading-relaxed text-body-text" : "mt-4 text-sm leading-relaxed text-body-text"}>
        {data.description}
      </p>

      {data.achievements.length ? (
        <div className="mt-4">
          {expanded ? (
            <ul className={variant === "home" ? "space-y-3 border-t border-border pt-5" : "space-y-2 border-t border-border pt-4"}>
              {data.achievements.map((line, i) => (
                <li key={i} className={variant === "home" ? "flex gap-3 text-base text-body-text" : "flex gap-2 text-sm text-body-text"}>
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          ) : null}
          <button
            type="button"
            onClick={onToggleReadMore}
            className={variant === "home"
              ? "mt-4 text-base font-semibold text-primary-accent transition-opacity duration-300 hover:opacity-80"
              : "mt-3 text-sm font-semibold text-primary-accent transition-opacity duration-300 hover:opacity-80"}
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        </div>
      ) : null}
    </article>
  );
}
