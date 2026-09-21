export interface EngineeringCaseStudy {
  slug: string;
  title: string;
  employer: string;
  kicker: string;
  problem: string;
  approach: string;
  outcome: string;
  principle?: string;
  metric?: {
    from: string;
    to: string;
    label: string;
  };
}

export const engineeringCaseStudies: EngineeringCaseStudy[] = [
  {
    slug: "flake-detection",
    title: "Flake Detection",
    employer: "Global Relay",
    kicker: "Test reliability",
    problem:
      "Automated test suites contained unreliable tests that created noise and reduced confidence in CI.",
    approach:
      "Built a shared flake-detection library designed to identify unreliable tests and isolate them, rather than relying on repeated retries.",
    outcome: "The library was subsequently adopted beyond the original team.",
    principle:
      "Remove unreliable signal from the feedback loop rather than hiding it with retries.",
  },
  {
    slug: "e2e-pipeline",
    title: "E2E Pipeline",
    employer: "Global Relay",
    kicker: "Pipeline performance",
    problem:
      "A Jenkins end-to-end pipeline was taking approximately 20 minutes and was affected by intermittent failures.",
    approach:
      "Investigated the application state between test runs and the underlying causes of the intermittent failures — this was a test and application-state problem, not a Jenkins configuration problem.",
    outcome:
      "Reduced pipeline execution time from approximately 20 minutes to approximately 3 minutes.",
    metric: { from: "20", to: "3", label: "minutes" },
  },
  {
    slug: "browser-soak-testing",
    title: "Browser Memory Soak Testing",
    employer: "Global Relay",
    kicker: "Performance & reliability",
    problem:
      "Long-running browser sessions could expose memory behaviour that short functional tests would not detect.",
    approach:
      "Built a Chrome DevTools-based soak testing framework to monitor browser memory during sustained usage.",
    outcome:
      "The testing exposed a compounding memory issue before it reached production.",
  },
];
