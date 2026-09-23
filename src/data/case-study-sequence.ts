export interface CaseStudyStop {
  href: string;
  title: string;
}

export const caseStudySequence: CaseStudyStop[] = [
  { href: "/work/primeform", title: "primeform" },
  { href: "/work/ai-test-agents", title: "AI Test Agents" },
  { href: "/work/mcp-agentic-testing", title: "MCP + Agentic Testing" },
  { href: "/engineering/flake-detection", title: "Flake Detection" },
  { href: "/engineering/e2e-pipeline", title: "E2E Pipeline" },
  { href: "/engineering/browser-soak-testing", title: "Browser Memory Soak Testing" },
];

export function getCaseStudyNeighbours(currentHref: string) {
  const i = caseStudySequence.findIndex((s) => s.href === currentHref);
  if (i === -1) return { prev: null, next: null };
  const prev = caseStudySequence[(i - 1 + caseStudySequence.length) % caseStudySequence.length];
  const next = caseStudySequence[(i + 1) % caseStudySequence.length];
  return { prev, next };
}
