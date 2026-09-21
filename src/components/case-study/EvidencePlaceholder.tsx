interface EvidencePlaceholderProps {
  label: string;
  note?: string;
  aspect?: string;
}

export function EvidencePlaceholder({
  label,
  note,
  aspect = "aspect-[9/16]",
}: EvidencePlaceholderProps) {
  return (
    <div
      className={`flex ${aspect} flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border-strong bg-surface/40 p-6 text-center`}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
        Not yet captured
      </span>
      <span className="text-sm text-muted">{label}</span>
      {note && <span className="text-xs text-subtle">{note}</span>}
    </div>
  );
}
