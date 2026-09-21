import type { Metadata } from "next";
import { CaseStudyHeader } from "@/components/case-study/CaseStudyHeader";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { FlowDiagram } from "@/components/case-study/FlowDiagram";
import { CaseStudyNav } from "@/components/case-study/CaseStudyNav";
import { EvidencePlaceholder } from "@/components/case-study/EvidencePlaceholder";
import { flowAgentReport, flowAgentFindings } from "@/data/flow-agent-report";

export const metadata: Metadata = {
  title: "AI Test Agents | Pritesh Gandhi",
  description:
    "What happens when test automation can investigate software rather than simply execute a script? Flow Agent is implemented and running; Logic Agent is the planned next step.",
};

export default function AiTestAgentsPage() {
  return (
    <>
      <CaseStudyHeader
        backHref="/#work"
        backLabel="Work"
        kicker="Software testing"
        status="experiment"
        title="AI Test Agents"
        thesis="What happens when test automation can investigate software rather than simply execute a script?"
      />

      <CaseStudySection heading="What this is">
        <p className="max-w-2xl leading-relaxed text-muted">
          This is real work tested against a real application —{" "}
          <a
            href="/work/silverfox"
            className="text-foreground underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-accent"
          >
            Silverfox
          </a>
          , not a demo app built to make the agents look good. One half of
          it is built and produces real findings today. The other half is
          planned, not yet written. Both are described here as they
          actually stand.
        </p>
      </CaseStudySection>

      <CaseStudySection heading="Flow Agent — implemented">
        <p className="max-w-2xl leading-relaxed text-muted">
          A Playwright framework that drives Silverfox&apos;s real UI
          through its user journeys and a structured programme of boundary
          and security-payload fuzzing, then writes up what it finds as a
          structured report — closer to exploratory testing than a fixed
          script.
        </p>
        <div className="mt-6">
          <FlowDiagram
            steps={["Agent", "Browser", "Application", "User journey", "Evidence"]}
          />
        </div>

        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
          <div className="bg-background p-6">
            <p className="font-mono text-2xl font-semibold text-foreground">
              {flowAgentReport.casesRun}
            </p>
            <p className="mt-1 text-xs text-muted">Cases in latest run</p>
          </div>
          <div className="bg-background p-6">
            <p className="font-mono text-2xl font-semibold text-signal">
              {flowAgentReport.passed}
            </p>
            <p className="mt-1 text-xs text-muted">Passed</p>
          </div>
          <div className="bg-background p-6">
            <p className="font-mono text-2xl font-semibold text-accent">
              {flowAgentReport.findings.critical}
            </p>
            <p className="mt-1 text-xs text-muted">Critical findings</p>
          </div>
          <div className="bg-background p-6">
            <p className="font-mono text-2xl font-semibold text-foreground">
              {flowAgentReport.findings.high}
            </p>
            <p className="mt-1 text-xs text-muted">High findings</p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {flowAgentFindings.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <div className="flex items-center gap-2">
                <span
                  className={
                    f.severity === "Critical"
                      ? "rounded-full border border-accent px-2 py-0.5 font-mono text-[10px] uppercase text-accent"
                      : "rounded-full border border-border-strong px-2 py-0.5 font-mono text-[10px] uppercase text-muted"
                  }
                >
                  {f.severity}
                </span>
                <span className="font-mono text-xs text-subtle">
                  {f.title}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {f.detail}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 font-mono text-xs text-subtle">
          From the {flowAgentReport.generated} run — real findings against
          real code, not illustrative examples.
        </p>
      </CaseStudySection>

      <CaseStudySection heading="Logic Agent — planned, not built">
        <p className="max-w-2xl leading-relaxed text-muted">
          Tests business rules and application behaviour directly against
          Supabase/Postgres, without going through the UI at all. The
          motivating case: proving that one person&apos;s data is genuinely
          invisible to another requires two real, concurrent, authenticated
          sessions acting at once — something a single-shared-test-user
          Playwright suite structurally cannot do. This needs writing; it
          does not exist yet.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_auto]">
          <FlowDiagram
            steps={["Agent", "Application logic", "Rules", "Edge cases", "Evidence"]}
            accent
          />
          <div className="sm:w-56">
            <EvidencePlaceholder
              label="Logic Agent findings report"
              note="Same format as Flow Agent's, once built"
              aspect="aspect-[4/3]"
            />
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection heading="Why separate the agents?">
        <p className="max-w-2xl leading-relaxed text-muted">
          Browser automation and business-logic verification fail in
          different ways and produce different kinds of evidence — a
          screenshot and a DOM state on one side, an assertion against a
          rule on the other. Treating both as one problem for a single
          general-purpose agent to solve seemed like the wrong starting
          point.
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Splitting them is a decision made up front, not a conclusion
          reached afterwards — it keeps each agent&apos;s job narrow enough
          to reason about, and makes it possible to trust the findings of
          one without having to trust the internals of the other. Flow
          Agent proves the UI behaves; Logic Agent, once built, will prove
          the data layer enforces what it claims to, independent of
          whatever the UI happens to show.
        </p>
      </CaseStudySection>

      <CaseStudySection heading="Current state">
        <ul className="max-w-2xl space-y-3">
          {[
            "Flow Agent is implemented and has produced a real findings report against the running app (above).",
            "66 procedural Playwright journey tests already cover the app's core flows end to end, independent of Flow Agent's exploratory runs.",
            "Logic Agent does not exist yet — no code has been written for it.",
            "Neither agent is autonomous beyond what's described here: Flow Agent executes a defined fuzzing and journey programme and reports structured findings; it doesn't decide what to test from scratch.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
              {item}
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection heading="Next experiments" className="pb-28 sm:pb-36">
        <ul className="max-w-2xl space-y-3">
          {[
            "Build Logic Agent against Supabase directly, starting with cross-user data isolation.",
            "Grow the Gherkin/BDD specification already written for Silverfox into automated step definitions, alongside — not replacing — the existing Playwright suite.",
            "Investigate whether MCP is a sensible way to expose these same tools to an agent — see MCP + Agentic Testing for that early-stage thinking.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudyNav currentHref="/work/ai-test-agents" />
    </>
  );
}
