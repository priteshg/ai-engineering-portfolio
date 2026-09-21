interface ScreenshotFrameProps {
  src: string;
  alt: string;
  caption: string;
}

export function ScreenshotFrame({ src, alt, caption }: ScreenshotFrameProps) {
  return (
    <figure className="flex flex-col">
      <div className="overflow-hidden rounded-2xl border border-border bg-surface-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full" loading="lazy" />
      </div>
      <figcaption className="mt-3 font-mono text-[11px] text-subtle">
        {caption}
      </figcaption>
    </figure>
  );
}
