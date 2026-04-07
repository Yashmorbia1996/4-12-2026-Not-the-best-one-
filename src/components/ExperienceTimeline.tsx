interface WorkEntry {
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
  };
}

interface ExperienceTimelineProps {
  entries: WorkEntry[];
}

export function ExperienceTimeline({ entries }: ExperienceTimelineProps) {
  const sorted = [...entries].sort((a, b) => a.data.order - b.data.order);

  return (
    <div className="space-y-10">
      {sorted.map((entry) => {
        const { company, role, startDate, endDate, current, description, achievements } = entry.data;
        const period = current ? `${startDate} — Present` : `${startDate} — ${endDate}`;

        return (
          <div key={entry.id} className="scroll-reveal">
            <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-semibold text-foreground">{role}</h3>
                <p className="text-sm text-muted-foreground">{company}</p>
              </div>
              <time className="mt-0.5 shrink-0 text-xs text-muted-foreground sm:text-right">{period}</time>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-body-text">{description}</p>
            <ul className="space-y-2">
              {achievements.map((achievement, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-body-text">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current" aria-hidden />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
