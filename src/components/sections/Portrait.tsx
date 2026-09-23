import { basePath } from "@/lib/basePath";

export function Portrait() {
  return (
    <div className="relative w-full max-w-[280px]">
      <div className="overflow-hidden rounded-2xl border border-border bg-surface-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${basePath}/pritesh.jpeg`}
          alt="Portrait of Pritesh Gandhi, duotone illustration treatment"
          className="aspect-[4/5] w-full object-cover"
          loading="lazy"
        />
      </div>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">
        Pritesh Gandhi &middot; Portrait
      </p>
    </div>
  );
}
