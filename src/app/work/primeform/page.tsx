import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudyHeader } from "@/components/case-study/CaseStudyHeader";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { FlowDiagram } from "@/components/case-study/FlowDiagram";
import { ScreenshotFrame } from "@/components/case-study/ScreenshotFrame";
import { CaseStudyNav } from "@/components/case-study/CaseStudyNav";
import { primeformAgents } from "@/data/projects";
import { flowAgentReport, journeySuite, unitSuite } from "@/data/flow-agent-report";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "primeform | Pritesh Gandhi",
  description:
    "A real, working training app, and the proving ground for Flow Agent — an implemented Playwright testing framework that investigates the app rather than just scripting it.",
};

const features = [
  "Build a training programme (or start from a seeded Push/Pull/Legs split)",
  "Browse, filter and extend a built-in exercise library",
  "Start a workout from a saved programme",
  "Log sets — weight, reps, RIR — with a session that survives backgrounding the app",
  "Review workout history and per-exercise progression",
  "Try the whole thing via a built-in demo, before creating any account",
];

export default function primeformPage() {
  return (
    <>
      <CaseStudyHeader
        backHref="/#work"
        backLabel="Work"
        kicker="Product · Actively developed"
        status="building"
        title="primeform"
        thesis="Adaptive strength training built around real-world constraints."
        stack={[
          "TypeScript",
          "React Native (Expo Router)",
          "Supabase",
          "PostgreSQL",
          "Playwright",
          "Vitest",
        ]}
      />

      <CaseStudySection heading="The idea">
        <blockquote className="max-w-2xl border-l-2 border-accent pl-6 font-display text-2xl font-semibold italic leading-snug text-foreground sm:text-3xl">
          &ldquo;What should I train today, given how I feel and how much
          time I have?&rdquo;
        </blockquote>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted">
          primeform is a training app built around that question, rather
          than a fixed programme that ignores the day you&apos;re actually
          having. It&apos;s a real, working product — built and maintained
          solo — not a mockup.
        </p>
      </CaseStudySection>

      <CaseStudySection heading="The product">
        <p className="max-w-2xl leading-relaxed text-muted">
          The mobile app is the product: it runs the full programme →
          workout → logging → history loop today. These are real screens
          from the running app, captured via its Expo web build — including
          the built-in demo, which shows the app with example data before
          you create an account.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <ScreenshotFrame
            src="/screenshots/primeform/landing.png"
            alt="primeform landing screen with See a demo, Create account and Sign in"
            caption="Entry screen — no forced signup to look around"
          />
          <ScreenshotFrame
            src="/screenshots/primeform/demo-overview.png"
            alt="primeform demo overview showing a Foundation 40+ programme, recent workouts and progression"
            caption="Demo overview — example programme, history and suggested progression"
          />
          <ScreenshotFrame
            src="/screenshots/primeform/sign-in.png"
            alt="primeform sign-in screen"
            caption="Optional sign-in — the app works via an anonymous session first"
          />
        </div>
        <ul className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3 text-sm text-foreground/90"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
              {f}
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection heading="The architecture">
        <p className="max-w-2xl leading-relaxed text-muted">
          Postgres, via Supabase, is the source of truth for everything
          except two deliberately device-local exceptions — the in-progress
          workout session and the selected-programme preference, both of
          which would be meaningless to sync across devices. There&apos;s no
          login screen: every device gets a real anonymous Supabase Auth
          identity on first launch, which is what gives Row Level Security a
          genuine <code className="font-mono text-foreground/90">auth.uid()</code>{" "}
          to key every policy on.
        </p>
        <div className="mt-6">
          <FlowDiagram
            steps={["User", "Screens", "Hooks", "Repositories", "Postgres (RLS)"]}
          />
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-subtle">
          Screens call hooks, hooks call repositories — a screen never knows
          whether data lives in Postgres or on-device storage. The domain
          logic (progression, one-rep-max estimation, volume) is a
          framework-free package with no dependency on React or Supabase, so
          it&apos;s trivially unit-testable in isolation.
        </p>
      </CaseStudySection>

      <CaseStudySection heading="AI-assisted development">
        <p className="max-w-2xl leading-relaxed text-muted">
          AI is part of the day-to-day process, in specific, scoped ways —
          not as a claim that it built the product. Before extending
          existing behaviour, it&apos;s used to audit the current
          implementation against what&apos;s actually intended, surfacing
          gaps before new code gets written on top of them. Discovery work
          gets turned into a structured specification before any code is
          written, rather than skipping straight from an idea to an
          implementation. And exploratory test runs get written up as
          structured findings reports rather than a pass/fail line — see
          Quality Engineering below. Every change is still reviewed and
          decided by me.
        </p>
      </CaseStudySection>

      <CaseStudySection heading="Quality Engineering">
        <p className="max-w-2xl leading-relaxed text-muted">
          Testing primeform is also where the AI test-agent work below
          happens for real, not as a demo. Two agents, with a deliberate
          split between them.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {primeformAgents.map((agent, i) => (
            <Reveal key={agent.name} delay={i * 0.08} y={14}>
              <div className="h-full rounded-2xl border border-border bg-surface p-7">
                <div className="flex items-center gap-2">
                  <span
                    className={
                      agent.status === "implemented"
                        ? "h-1.5 w-1.5 rounded-full bg-signal"
                        : "h-1.5 w-1.5 rounded-full bg-subtle"
                    }
                  />
                  <span className="font-mono text-xs uppercase tracking-wide text-muted">
                    {agent.kind}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                  {agent.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {agent.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {agent.examples.map((ex) => (
                    <li
                      key={ex}
                      className="flex items-start gap-2.5 font-mono text-xs text-subtle"
                    >
                      <span aria-hidden>·</span>
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
          <div className="bg-background p-6">
            <p className="font-mono text-3xl font-semibold text-foreground">
              {journeySuite.count}
            </p>
            <p className="mt-1 text-xs text-muted">Playwright journey tests, passing</p>
          </div>
          <div className="bg-background p-6">
            <p className="font-mono text-3xl font-semibold text-foreground">
              {flowAgentReport.casesRun}
            </p>
            <p className="mt-1 text-xs text-muted">
              Flow Agent cases in its latest run ({flowAgentReport.passed} passed)
            </p>
          </div>
          <div className="bg-background p-6">
            <p className="font-mono text-3xl font-semibold text-accent">
              {flowAgentReport.findings.critical}
            </p>
            <p className="mt-1 text-xs text-muted">Critical findings surfaced</p>
          </div>
          <div className="bg-background p-6">
            <p className="font-mono text-3xl font-semibold text-foreground">
              {flowAgentReport.findings.high}
            </p>
            <p className="mt-1 text-xs text-muted">High-severity findings surfaced</p>
          </div>
        </div>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-subtle">
          Underneath both agents sits {unitSuite.location.replace(", ", " and ")}
          : {unitSuite.description} Full findings, examples and the reasoning
          behind splitting the two agents are on the{" "}
          <Link
            href="/work/ai-test-agents"
            className="text-foreground underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-accent"
          >
            AI Test Agents
          </Link>{" "}
          page.
        </p>
      </CaseStudySection>

      <CaseStudySection heading="What I'm experimenting with" className="pb-28 sm:pb-36">
        <ul className="max-w-2xl space-y-3">
          {[
            "Automating the BDD specification already written in Gherkin for primeform's core journeys — the feature files exist; the step-definition layer that runs them doesn't yet.",
            "Building the Logic Agent itself: real API/database-level tests against Supabase, proving data isolation directly rather than inferring it from reading RLS policies.",
            "Database-level tests (pgTAP) that exercise RLS policies and constraints against Postgres independently of the app.",
            "Whether MCP is a sensible way to hand an agent these same testing tools — see MCP + Agentic Testing, which is exploratory thinking, not implemented work.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudyNav currentHref="/work/primeform" />
    </>
  );
}
