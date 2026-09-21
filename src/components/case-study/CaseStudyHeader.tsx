import { Reveal } from "@/components/motion/Reveal";
import { basePath } from "@/lib/basePath";

interface CaseStudyHeaderProps {
  backHref: string;
  backLabel: string;
  kicker: string;
  title: string;
  thesis?: string;
  status?: "building" | "experiment";
  stack?: string[];
}

export function CaseStudyHeader({
  backHref,
  backLabel,
  kicker,
  title,
  thesis,
  status,
  stack,
}: CaseStudyHeaderProps) {
  return (
    <div className="pt-32 pb-4 sm:pt-40">
      <div className="mx-auto max-w-content px-6 sm:px-8 lg:px-12">
        <Reveal>
          {/* Plain <a>, not next/link: this crosses into a homepage hash
              anchor, and native browser navigation scrolls to it reliably
              after the page loads — see Navbar.tsx for the same reasoning. */}
          <a
            href={`${basePath}${backHref}`}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-subtle transition-colors hover:text-foreground"
          >
            <span aria-hidden>←</span>
            {backLabel}
          </a>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
              {kicker}
            </p>
            {status && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border-strong px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-muted">
                <span
                  className={
                    status === "building"
                      ? "h-1.5 w-1.5 rounded-full bg-signal"
                      : "h-1.5 w-1.5 rounded-full bg-accent"
                  }
                />
                {status === "building" ? "In build" : "Experiment"}
              </span>
            )}
          </div>

          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {thesis && (
            <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted sm:text-xl">
              {thesis}
            </p>
          )}

          {stack && stack.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-surface-2 px-3 py-1 font-mono text-[11px] text-subtle"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </div>
  );
}
