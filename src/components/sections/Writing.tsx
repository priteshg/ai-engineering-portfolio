"use client";

import { Reveal } from "@/components/motion/Reveal";
import { articles } from "@/data/writing";

export function Writing() {
  return (
    <section id="writing" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-content px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
                Writing
              </p>
              <h2 className="mt-4 max-w-xl text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Notes on AI, agents and testing
              </h2>
            </div>
            <span className="font-mono text-xs text-subtle">Coming soon</span>
          </div>
        </Reveal>

        <div className="mt-16 border-t border-border">
          {articles.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.04} y={14}>
              <div className="group grid items-baseline gap-x-6 gap-y-2 border-b border-border py-7 sm:grid-cols-[3rem_1fr_auto] sm:py-8">
                <span className="font-mono text-xs text-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground/90 transition-colors group-hover:text-foreground sm:text-2xl">
                    {article.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                    {article.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 sm:hidden">
                    {article.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full bg-surface-2 px-2.5 py-1 font-mono text-[10px] text-subtle"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden flex-col items-end gap-2.5 sm:flex">
                  <span className="rounded-full border border-border-strong px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-subtle">
                    Planned
                  </span>
                  <div className="flex flex-wrap justify-end gap-2">
                    {article.topics.map((topic) => (
                      <span
                        key={topic}
                        className="font-mono text-[10px] text-subtle"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
