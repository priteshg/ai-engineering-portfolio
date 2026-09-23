import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudyHeader } from "@/components/case-study/CaseStudyHeader";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { FlowDiagram } from "@/components/case-study/FlowDiagram";
import { CaseStudyNav } from "@/components/case-study/CaseStudyNav";

export const metadata: Metadata = {
  title: "MCP + Agentic Testing | Pritesh Gandhi",
  description:
    "Early-stage thinking, not implemented work — what it would take for an AI agent to hold real testing tools through MCP.",
};

export default function McpAgenticTestingPage() {
  return (
    <>
      <CaseStudyHeader
        backHref="/#work"
        backLabel="Work"
        kicker="Early-stage thinking"
        title="MCP + Agentic Testing"
        thesis="Exploring the next interface between AI and software quality."
      />

      <CaseStudySection heading="What this actually is">
        <div className="max-w-2xl rounded-2xl border border-dashed border-border-strong bg-surface/40 p-6">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">
            Status
          </p>
          <p className="mt-2 leading-relaxed text-foreground/90">
            Nothing on this page is built. No MCP server exists for this
            work, no tools are exposed, and no agent has used one. This is
            written down because it&apos;s the direction{" "}
            <Link
              href="/work/ai-test-agents"
              className="text-foreground underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-accent"
            >
              AI Test Agents
            </Link>{" "}
            points next, not because any of it exists yet.
          </p>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="The question">
        <p className="max-w-2xl leading-relaxed text-muted">
          Flow Agent today is a fixed Playwright programme — it drives the
          browser through journeys and fuzzing that were defined in
          advance. MCP is a protocol for exposing tools to a model in a
          structured way. The open question is whether wrapping Flow
          Agent&apos;s capabilities — browser control, reading application
          state, recording evidence — as MCP tools would let an agent
          decide what to investigate next, rather than only executing a
          predetermined programme.
        </p>
      </CaseStudySection>

      <CaseStudySection heading="What would need to exist">
        <ul className="max-w-2xl space-y-3">
          {[
            "An MCP server exposing a small set of testing primitives — navigate, read state, assert, record evidence — as callable tools, not a general-purpose browser proxy.",
            "A way to constrain what an agent can do with those tools, so 'investigate' doesn't mean unrestricted access to a real application and its data.",
            "A definition of evidence and evaluation good enough to trust: today, Flow Agent's output is a structured findings report a person reads and judges. An agent making its own decisions raises the same question one level up — evidence of what, judged by what standard.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-subtle" />
              {item}
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection heading="Conceptual shape">
        <FlowDiagram
          steps={[
            "AI Agent",
            "MCP",
            "Testing tools",
            "Application",
            "Evidence",
            "Evaluation",
          ]}
        />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-subtle">
          A diagram of the direction being considered, not a system that
          runs. Every box here is unbuilt except &ldquo;Application&rdquo; —
          that part already exists, as primeform.
        </p>
      </CaseStudySection>

      <CaseStudySection heading="Why write this down before building it" className="pb-28 sm:pb-36">
        <p className="max-w-2xl leading-relaxed text-muted">
          Because the honest starting point for this kind of work is
          admitting how little of it exists yet. Flow Agent took real
          effort to get to &ldquo;implemented and producing findings&rdquo;;
          it would be dishonest to describe the MCP step as further along
          than that, just because the idea is further developed than the
          code.
        </p>
      </CaseStudySection>

      <CaseStudyNav currentHref="/work/mcp-agentic-testing" />
    </>
  );
}
