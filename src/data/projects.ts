export interface AgentProfile {
  name: string;
  kind: string;
  status: "implemented" | "planned";
  description: string;
  examples: string[];
  flow: string[];
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  status: "building" | "experiment";
  tags: string[];
  stack: string[];
}

export const projects: Project[] = [
  {
    slug: "primeform",
    name: "primeform",
    tagline: "Adaptive strength training built around real-world constraints.",
    summary:
      "A real, working training app, and the proving ground for Flow Agent — an implemented Playwright testing framework that investigates the app rather than just scripting it.",
    status: "building",
    tags: ["Product", "AI-assisted development"],
    stack: [
      "TypeScript",
      "React Native (Expo Router)",
      "Supabase",
      "PostgreSQL",
      "Playwright",
      "Vitest",
    ],
  },
  {
    slug: "ai-test-agents",
    name: "AI Test Agents",
    tagline: "What happens when test automation can investigate software rather than simply execute a script?",
    summary:
      "Flow Agent is real and running against primeform today. Logic Agent is the planned next step, not yet built.",
    status: "experiment",
    tags: ["Testing", "Playwright", "Experiment"],
    stack: ["TypeScript", "Playwright", "Supabase (planned)"],
  },
  {
    slug: "mcp-agentic-testing",
    name: "MCP + Agentic Testing",
    tagline: "Exploring the next interface between AI and software quality.",
    summary:
      "Early-stage thinking, not implemented work — what it would take for an agent to hold real testing tools through MCP.",
    status: "experiment",
    tags: ["MCP", "Exploration", "Not yet built"],
    stack: ["MCP (not yet integrated)"],
  },
];

export const primeformAgents: AgentProfile[] = [
  {
    name: "Flow Agent",
    kind: "Browser-driven · Implemented",
    status: "implemented",
    description:
      "A Playwright-based framework that drives the real primeform app (via its Expo web build) through user journeys and structured security/boundary fuzzing, then writes up what it finds as a structured report — closer to exploratory testing than a fixed script.",
    examples: [
      "Session bootstrap (primeform has no login screen — every device gets an anonymous Supabase session)",
      "Programme setup and editing",
      "Logging a workout and its sets",
      "Workout history",
      "Exercise library search and creation",
      "Boundary and security-payload fuzzing on every free-text field",
    ],
    flow: ["Playwright", "Browser", "Application", "User journey", "Findings report"],
  },
  {
    name: "Logic Agent",
    kind: "Data-layer · Planned",
    status: "planned",
    description:
      "The next step, not yet built: test rules that the UI can't prove properly — most importantly, that one person's data is genuinely invisible to another. That needs two real, concurrent Supabase identities talking to Postgres directly, which the current UI-driven suite can't do with a single shared test user.",
    examples: [
      "Cross-user data isolation (Row Level Security)",
      "CHECK-constraint rules at the data layer",
      "State transitions independent of the UI",
    ],
    flow: ["Agent", "Supabase client", "Postgres", "Assertion", "Findings report"],
  },
];
