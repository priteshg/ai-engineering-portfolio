interface FlowDiagramProps {
  steps: string[];
  accent?: boolean;
  vertical?: boolean;
}

export function FlowDiagram({
  steps,
  accent = false,
  vertical = false,
}: FlowDiagramProps) {
  const rowClass = vertical ? "" : "lg:flex-row lg:flex-wrap lg:items-center";

  return (
    <div
      className={`flex flex-col items-stretch gap-0 rounded-2xl border border-border bg-surface/60 p-6 sm:p-8 ${rowClass}`}
    >
      {steps.map((step, i) => (
        <div
          key={step}
          className={`flex flex-col items-center ${vertical ? "" : "lg:flex-row"}`}
        >
          <div
            className={
              accent && i === steps.length - 1
                ? "rounded-lg border border-signal px-4 py-2.5 text-center font-mono text-xs text-signal sm:text-sm"
                : "rounded-lg border border-border-strong bg-background px-4 py-2.5 text-center font-mono text-xs text-foreground sm:text-sm"
            }
          >
            {step}
          </div>
          {i < steps.length - 1 && (
            <span
              aria-hidden
              className={vertical ? "my-2 text-subtle" : "my-2 text-subtle lg:mx-3 lg:my-0"}
            >
              <span className={vertical ? "" : "lg:hidden"}>↓</span>
              {!vertical && <span className="hidden lg:inline">→</span>}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
