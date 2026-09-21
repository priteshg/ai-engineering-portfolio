// Shared SVG duotone filter (deep ink shadows → muted copper highlights)
// used to give photos the same art-directed treatment as the rest of the
// site's palette, without any external image generation.
export function DuotoneFilter() {
  return (
    <svg width="0" height="0" aria-hidden className="absolute">
      <filter id="portrait-duotone" colorInterpolationFilters="sRGB">
        <feColorMatrix
          type="matrix"
          values="0.33 0.33 0.33 0 0
                  0.33 0.33 0.33 0 0
                  0.33 0.33 0.33 0 0
                  0    0    0    1 0"
        />
        <feComponentTransfer>
          <feFuncR type="table" tableValues="0.090 0.718" />
          <feFuncG type="table" tableValues="0.098 0.396" />
          <feFuncB type="table" tableValues="0.110 0.271" />
        </feComponentTransfer>
      </filter>
    </svg>
  );
}
