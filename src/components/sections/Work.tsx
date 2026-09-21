"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { FlowDiagram } from "@/components/case-study/FlowDiagram";
import { projects, silverfoxAgents } from "@/data/projects";

function StatusPill({ status }: { status: string }) {
  return (
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
  );
}

function CaseStudyLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="group/link mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground"
    >
      View case study
      <span
        aria-hidden
        className="transition-transform duration-200 group-hover/link:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}

function SilverfoxPanel() {
  const project = projects[0];
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
      <div>
        <StatusPill status={project.status} />
        <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {project.name}
        </h3>
        <p className="mt-2 text-muted">{project.tagline}</p>
        <p className="mt-5 max-w-lg leading-relaxed text-muted">
          {project.summary}
        </p>
        <CaseStudyLink href="/work/silverfox" />
      </div>

      <div>
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
          Application architecture
        </p>
        <FlowDiagram steps={["User", "Application", "Supabase / PostgreSQL"]} vertical />
      </div>
    </div>
  );
}

function AiTestAgentsPanel() {
  const project = projects[1];
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
      <div className="order-2 lg:order-1">
        <div className="grid gap-4 sm:grid-cols-2">
          {silverfoxAgents.map((agent) => (
            <div
              key={agent.name}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <div className="flex items-center gap-2">
                <span
                  className={
                    agent.status === "implemented"
                      ? "h-1.5 w-1.5 rounded-full bg-signal"
                      : "h-1.5 w-1.5 rounded-full bg-subtle"
                  }
                />
                <span className="font-mono text-xs uppercase tracking-wide text-muted">
                  {agent.name}
                </span>
                <span className="font-mono text-[10px] uppercase text-subtle">
                  {agent.status === "implemented" ? "· built" : "· planned"}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {agent.name === "Flow Agent"
                  ? "Drives the browser to investigate real user journeys and fuzzing — implemented and producing findings."
                  : "Tests business rules directly against the data layer — planned, not yet built."}
              </p>
            </div>
          ))}
          <div className="col-span-full rounded-xl border border-dashed border-border-strong p-5 text-sm leading-relaxed text-subtle">
            Tested against Silverfox, a real application — not a demo built
            to make the agents look good.
          </div>
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <StatusPill status={project.status} />
        <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {project.name}
        </h3>
        <p className="mt-2 text-muted">{project.tagline}</p>
        <p className="mt-5 max-w-lg leading-relaxed text-muted">
          {project.summary}
        </p>
        <CaseStudyLink href="/work/ai-test-agents" />
      </div>
    </div>
  );
}

function McpPanel() {
  const project = projects[2];
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
      <div>
        <StatusPill status={project.status} />
        <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {project.name}
        </h3>
        <p className="mt-2 text-muted">{project.tagline}</p>
        <p className="mt-5 max-w-lg leading-relaxed text-muted">
          {project.summary}
        </p>
        <CaseStudyLink href="/work/mcp-agentic-testing" />
      </div>

      <div>
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">
          Conceptual architecture
        </p>
        <FlowDiagram
          steps={["AI Agent", "MCP", "Testing tools", "Evidence"]}
          accent
          vertical
        />
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-content px-6 sm:px-8 lg:px-12">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
            Selected work
          </p>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            What I&apos;m building
          </h2>
        </Reveal>

        <div className="mt-20 space-y-28">
          <Reveal>
            <SilverfoxPanel />
          </Reveal>
          <Reveal>
            <div className="h-px w-full bg-border" />
          </Reveal>
          <Reveal>
            <AiTestAgentsPanel />
          </Reveal>
          <Reveal>
            <div className="h-px w-full bg-border" />
          </Reveal>
          <Reveal>
            <McpPanel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
