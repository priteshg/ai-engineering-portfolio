import Link from "next/link";
import { getCaseStudyNeighbours } from "@/data/case-study-sequence";

export function CaseStudyNav({ currentHref }: { currentHref: string }) {
  const { prev, next } = getCaseStudyNeighbours(currentHref);
  if (!prev || !next) return null;

  return (
    <div className="border-t border-border">
      <div className="mx-auto grid max-w-content grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        <Link
          href={prev.href}
          className="group flex items-center gap-4 px-6 py-8 sm:px-8 lg:px-12"
        >
          <span
            aria-hidden
            className="text-subtle transition-transform duration-200 group-hover:-translate-x-1"
          >
            ←
          </span>
          <span>
            <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
              Previous
            </span>
            <span className="mt-1 block font-display text-lg font-semibold text-foreground">
              {prev.title}
            </span>
          </span>
        </Link>

        <Link
          href={next.href}
          className="group flex items-center justify-between gap-4 px-6 py-8 sm:justify-end sm:px-8 lg:px-12"
        >
          <span className="text-right">
            <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
              Next
            </span>
            <span className="mt-1 block font-display text-lg font-semibold text-foreground">
              {next.title}
            </span>
          </span>
          <span
            aria-hidden
            className="text-subtle transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
