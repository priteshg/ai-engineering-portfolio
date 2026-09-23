import { Reveal } from "@/components/motion/Reveal";

const links = [
  { label: "GitHub", href: "https://github.com/priteshg", handle: "@priteshg" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/priteshgandhi80/", handle: "in/priteshgandhi80" },
  { label: "Email", href: "mailto:pg4ndhi@gmail.com", handle: "pg4ndhi@gmail.com" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-content px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-8 py-16 sm:px-16 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(50% 60% at 50% 0%, var(--accent-soft), transparent 70%)",
              }}
            />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
                Contact
              </p>
              <h2 className="mt-4 max-w-xl text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Let&apos;s talk about quality engineering, or the agents
                replacing parts of it.
              </h2>

              <div className="mt-10 flex flex-wrap gap-4">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex min-w-[220px] flex-1 items-center justify-between rounded-xl border border-border-strong px-5 py-4 transition-colors hover:border-accent/60 hover:bg-accent-soft sm:flex-none"
                  >
                    <span>
                      <span className="block text-sm font-medium text-foreground">
                        {link.label}
                      </span>
                      <span className="block font-mono text-xs text-subtle">
                        {link.handle}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className="text-subtle transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground"
                    >
                      &#8599;
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
