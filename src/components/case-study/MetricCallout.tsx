interface MetricCalloutProps {
  from: string;
  to: string;
  label: string;
}

export function MetricCallout({ from, to, label }: MetricCalloutProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-surface/60 px-8 py-10 sm:gap-6 sm:px-10">
      <span className="font-display text-5xl font-bold text-muted sm:text-6xl">
        {from}
      </span>
      <span aria-hidden className="font-display text-3xl text-subtle sm:text-4xl">
        →
      </span>
      <span className="font-display text-5xl font-bold text-accent sm:text-6xl">
        {to}
      </span>
      <span className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">
        {label}
      </span>
    </div>
  );
}
