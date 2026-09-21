import type { StackGroup } from "@/types";

export const stackGroups: StackGroup[] = [
  {
    label: "Core",
    items: ["Java", "Spring Boot", "TypeScript", "Playwright"],
  },
  {
    label: "Verification",
    items: ["API & service testing", "Kafka", "Performance testing"],
  },
  {
    label: "Delivery",
    items: ["CI/CD", "Pipeline architecture", "Release engineering"],
  },
  {
    label: "Emerging",
    items: ["AI-assisted engineering", "Agentic tooling", "MCP"],
  },
];

export const experienceStats = [
  { value: "20", suffix: "yrs", label: "Software testing & automation" },
  { value: "3", suffix: "", label: "Active AI engineering experiments" },
  { value: "1", suffix: "", label: "Discipline, applied continuously" },
];
