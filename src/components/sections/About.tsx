import { Reveal } from "@/components/motion/Reveal";
import { Portrait } from "./Portrait";
import { experience } from "@/data/experience";
import { basePath } from "@/lib/basePath";

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-content px-6 sm:px-8 lg:px-12">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
            About
          </p>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Quality Engineering leader, exploring AI.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <Portrait />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              <p>
                I&apos;ve spent about 20 years in software testing and
                automation, most recently leading Quality Engineering teams
                and building the systems that keep releases honest.
              </p>
              <p>
                My background is in Java and Spring Boot, TypeScript and
                Playwright, API and service testing, Kafka, CI/CD and
                performance testing — the practical toolkit of getting
                reliable software out the door.
              </p>
              <p>
                Right now I&apos;m applying that same discipline to AI
                agents: what it takes for them to do useful, trustworthy
                testing work, and where that genuinely helps versus where
                it&apos;s noise.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <p className="mt-20 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
            Selected experience
          </p>
          <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {experience.map((entry) => (
              <div key={entry.company} className="group bg-background p-6">
                <div className="flex h-9 items-start">
                  <div
                    role="img"
                    aria-label={`${entry.company} logo`}
                    className="h-full w-full max-w-[120px] text-muted transition-colors duration-300 group-hover:text-foreground"
                    style={{
                      backgroundColor: "currentColor",
                      WebkitMaskImage: `url(${basePath}${entry.logo})`,
                      maskImage: `url(${basePath}${entry.logo})`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "left center",
                      maskPosition: "left center",
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                    }}
                  />
                </div>
                <p className="mt-4 font-display text-base font-semibold text-foreground">
                  {entry.company}
                </p>
                <p className="mt-1.5 text-sm text-muted">{entry.role}</p>
                <p className="mt-3 font-mono text-[11px] text-subtle">
                  {entry.years}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
