export const flowAgentReport = {
  generated: "2026-09-19",
  casesRun: 17,
  passed: 16,
  failed: 1,
  findings: { critical: 2, high: 4, medium: 0, low: 0 },
};

export const flowAgentFindings = [
  {
    severity: "Critical",
    title: "Security payload — programme name",
    detail:
      "A programme name containing a null byte (\\u0000) triggered an uncaught page error instead of being stored or rejected cleanly.",
  },
  {
    severity: "High",
    title: "Silent boundary rejection",
    detail:
      "Programme names past the database's 80-character limit are correctly rejected, but the screen shows no error — the user is left with a re-enabled button and no explanation.",
  },
];

export const journeySuite = {
  count: 66,
  location: "apps/mobile/e2e/journeys/*.spec.ts",
  description:
    "Procedural Playwright specs covering the app's core journeys end to end — programme CRUD, workout logging, exercise library, navigation, session bootstrap — written before the BDD layer, and still the main regression net.",
};

export const unitSuite = {
  location: "packages/domain, packages/validation",
  description:
    "Vitest unit tests for the pure business logic — progression, one-rep-max estimation, volume, consistency, session-state transitions — and the Zod schemas that validate data at every boundary.",
};
