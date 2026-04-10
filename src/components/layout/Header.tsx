import { useEffect, useMemo, useRef, useState } from "react";
import { Briefcase, FileText, User, Home } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

const iconMap = { Briefcase, FileText, User, Home } as const;
type IconKey = keyof typeof iconMap;

interface HeaderProps {
  currentPath?: string;
}

export function Header({ currentPath = "/" }: HeaderProps) {
  const { nav } = siteConfig;
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastProgressRef = useRef(0);
  const monogram = useMemo(
    () =>
      siteConfig.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
    [],
  );

  useEffect(() => {
    let frameId = 0;

    const updateScrollProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollableHeight <= 0 ? 0 : Math.min(window.scrollY / scrollableHeight, 1);

      if (Math.abs(nextProgress - lastProgressRef.current) > 0.001) {
        lastProgressRef.current = nextProgress;
        setScrollProgress(nextProgress);
      }

      frameId = window.requestAnimationFrame(updateScrollProgress);
    };

    frameId = window.requestAnimationFrame(updateScrollProgress);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  const progressRadius = 22;
  const progressCircumference = 2 * Math.PI * progressRadius;
  const progressOffset = progressCircumference * (1 - scrollProgress);

  const renderMonogram = (sizeClassName: string, innerClassName: string) => (
    <div className={`group relative flex items-center justify-center ${sizeClassName}`}>
      <svg
        className="absolute inset-0 -rotate-90"
        viewBox="0 0 52 52"
        aria-hidden
      >
        <circle
          cx="26"
          cy="26"
          r={progressRadius}
          fill="none"
          stroke="color-mix(in srgb, var(--color-border) 86%, transparent)"
          strokeWidth="2"
        />
        <circle
          cx="26"
          cy="26"
          r={progressRadius}
          fill="none"
          stroke="var(--color-primary-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={progressCircumference}
          strokeDashoffset={progressOffset}
        />
      </svg>
      <div className={`flex items-center justify-center rounded-full border border-border bg-surface text-text-primary transition-transform duration-300 group-hover:-translate-y-0.5 ${innerClassName}`}>
        {monogram}
      </div>
    </div>
  );

  return (
    <ThemeProvider>
      <>
        <header className="site-container relative z-50 pt-4 xl:hidden">
          <div className="flex justify-end">
            <nav
              className="flex items-center gap-1 rounded-full border border-border bg-nav-background p-1.5 shadow-[var(--shadow-soft)] backdrop-blur-xl"
              aria-label="Main navigation"
            >
              <div className="flex items-center justify-center px-1">
                {renderMonogram("h-8 w-8", "h-6 w-6 text-[9px] font-semibold tracking-[0.14em]")}
              </div>
              <div className="h-7 w-px bg-border/80" aria-hidden />
              {nav.map((link) => {
                const isActive =
                  currentPath === link.href ||
                  (link.href !== "/" && currentPath.startsWith(link.href + "/"));
                const Icon = iconMap[link.icon as IconKey];
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-button-secondary text-primary-accent"
                        : "text-text-muted hover:bg-card-hover hover:text-text-primary"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {Icon && <Icon className="h-3.5 w-3.5 shrink-0" />}
                    <span>{link.label}</span>
                  </a>
                );
              })}
              <div className="h-7 w-px bg-border/80" aria-hidden />
              <ThemeToggle />
            </nav>
          </div>
        </header>

        <header className="fixed right-4 top-4 z-50 hidden xl:block">
          <nav
            className="flex w-12 flex-col items-center gap-1 rounded-[1.15rem] border border-border bg-nav-background p-1.5 shadow-[var(--shadow-soft)] backdrop-blur-xl"
            aria-label="Main navigation"
          >
            <div className="mb-0.5 flex items-center justify-center border-b border-border/80 pb-1.5">
              {renderMonogram("h-8 w-8", "h-6 w-6 text-[9px] font-semibold tracking-[0.14em]")}
            </div>

            {nav.map((link) => {
              const isActive =
                currentPath === link.href ||
                (link.href !== "/" && currentPath.startsWith(link.href + "/"));
              const Icon = iconMap[link.icon as IconKey];
              return (
                <a
                  key={link.href}
                  href={link.href}
                  title={link.label}
                  aria-label={link.label}
                  className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                    isActive
                      ? "bg-button-secondary text-primary-accent"
                      : "text-text-muted hover:bg-card-hover hover:text-text-primary"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {Icon && <Icon className="h-3.5 w-3.5 shrink-0" />}
                </a>
              );
            })}
            <div className="mt-0.5 flex justify-center border-t border-border/80 pt-1">
              <ThemeToggle />
            </div>
          </nav>
        </header>
      </>
    </ThemeProvider>
  );
}
