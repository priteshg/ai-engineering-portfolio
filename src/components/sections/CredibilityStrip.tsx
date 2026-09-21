import { Reveal } from "@/components/motion/Reveal";

const markers = [
  "Lead SDET / QE leadership",
  "Java & Spring Boot",
  "TypeScript & Playwright",
  "Kafka · CI/CD · Performance testing",
];

export function CredibilityStrip() {
  return (
    <div className="border-y border-border">
      <Reveal y={10}>
        <div className="mx-auto max-w-content px-6 py-6 sm:px-8 sm:py-7 lg:px-12">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle sm:text-xs">
            <span className="text-foreground">
              <span className="text-accent">20 yrs</span> in software testing
              &amp; automation
            </span>
            <span aria-hidden className="hidden h-3 w-px bg-border-strong sm:block" />
            {markers.map((marker) => (
              <span key={marker}>{marker}</span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
