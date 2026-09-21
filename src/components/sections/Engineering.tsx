"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { stackGroups, experienceStats } from "@/data/stack";
import { engineeringCaseStudies } from "@/data/engineering-case-studies";

const progression = [
  "20 years of Quality Engineering",
  "Automation and engineering systems",
  "AI-assisted engineering",
  "Agentic Quality Engineering experimentation",
];

export function Engineering() {
  return (
    <section id="engineering" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-content px-6 sm:px-8 lg:px-12">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
            Engineering in production
          </p>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            20 years solving quality and automation problems in complex
            software environments.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {experienceStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="h-full bg-background p-8">
                <div className="flex items-baseline gap-1 font-mono text-4xl font-semibold text-foreground">
                  {stat.value}
                  <span className="text-lg text-accent">{stat.suffix}</span>
                </div>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {engineeringCaseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/engineering/${study.slug}`}
                className="group flex h-full flex-col justify-between bg-background p-7 transition-colors hover:bg-surface"
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
                    {study.employer}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                    {study.title}
                  </h3>
                  {study.metric && (
                    <div className="mt-4 flex items-baseline gap-2 font-mono">
                      <span className="text-2xl text-muted">
                        {study.metric.from}
                      </span>
                      <span aria-hidden className="text-subtle">
                        →
                      </span>
                      <span className="text-2xl font-semibold text-accent">
                        {study.metric.to}
                      </span>
                      <span className="text-xs text-subtle">
                        {study.metric.label}
                      </span>
                    </div>
                  )}
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  View case study
                  <span
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Reveal>

        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stackGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.06}>
              <div className="h-full bg-background p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-subtle">
                  {group.label}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-foreground/90">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
              Career context
            </p>

            <div>
              <blockquote className="max-w-2xl text-balance font-display text-xl font-semibold leading-snug text-foreground sm:text-2xl">
                &ldquo;After two decades of building automated quality
                systems, the interesting question is no longer how to
                automate another test. It&apos;s what happens when the
                system doing the testing can reason, investigate and
                learn.&rdquo;
              </blockquote>

              <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-0">
                {progression.map((step, i) => (
                  <div key={step} className="flex items-center">
                    <span className="rounded-full border border-border-strong px-3 py-1.5 font-mono text-xs text-muted">
                      {step}
                    </span>
                    {i < progression.length - 1 && (
                      <span aria-hidden className="mx-2 hidden text-subtle sm:inline">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
