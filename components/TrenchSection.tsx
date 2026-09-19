/**
 * Decorative hero graphic: a ground cross-section with pipes in the utility colour code.
 * Road build-up on top, then potable water (blue), TSE (purple), foul sewer (green)
 * with a manhole shaft, and a storm drain (grey).
 */
export function TrenchSection({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1600 340"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <defs>
        <pattern id="soil" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="4" r="1.1" fill="#35505f" />
          <circle cx="11" cy="11" r="1.1" fill="#35505f" />
          <circle cx="13" cy="3" r="0.7" fill="#2a4351" />
        </pattern>
        <pattern id="joints" width="150" height="10" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="10" fill="#0b141a" opacity="0.28" />
        </pattern>
      </defs>

      {/* Ground */}
      <rect y="0" width="1600" height="340" fill="#182a35" />
      <rect y="62" width="1600" height="278" fill="url(#soil)" />

      {/* Road build-up: asphalt, base course, sub-base */}
      <rect y="0" width="1600" height="14" fill="#4b5f70" />
      <rect y="14" width="1600" height="20" fill="#364a5b" />
      <rect y="34" width="1600" height="28" fill="#2a3d4b" />

      {/* Potable water */}
      <g className="lay" style={{ ["--d" as string]: "0.3s" }}>
        <rect y="86" width="1600" height="24" fill="#2f7fe0" />
        <rect y="86" width="1600" height="24" fill="url(#joints)" />
        <rect y="89" width="1600" height="4" fill="#fff" opacity="0.28" />
      </g>

      {/* TSE */}
      <g className="lay" style={{ ["--d" as string]: "0.7s" }}>
        <rect y="132" width="1600" height="20" fill="#8e5bd1" />
        <rect y="132" width="1600" height="20" fill="url(#joints)" />
        <rect y="135" width="1600" height="3" fill="#fff" opacity="0.28" />
      </g>

      {/* Foul sewer, laid to a slight fall */}
      <g className="lay" style={{ ["--d" as string]: "1.1s" }}>
        <g transform="rotate(0.7 800 226)">
          <rect x="-30" y="200" width="1660" height="52" fill="#2fa36b" />
          <rect x="-30" y="200" width="1660" height="52" fill="url(#joints)" />
          <rect x="-30" y="205" width="1660" height="6" fill="#fff" opacity="0.25" />
        </g>
      </g>

      {/* Storm drain */}
      <g className="lay" style={{ ["--d" as string]: "1.5s" }}>
        <rect y="268" width="1600" height="72" fill="#7d8c96" />
        <rect y="268" width="1600" height="72" fill="url(#joints)" />
        <rect y="272" width="1600" height="6" fill="#fff" opacity="0.22" />
      </g>

      {/* Manhole shaft down to the sewer */}
      <g>
        <rect x="1140" y="0" width="70" height="222" fill="#0c171e" />
        <rect x="1140" y="0" width="5" height="222" fill="#4b5f70" />
        <rect x="1205" y="0" width="5" height="222" fill="#4b5f70" />
        {[36, 58, 80, 102, 124, 146, 168, 190].map((y) => (
          <rect key={y} x="1160" y={y} width="30" height="3" fill="#7d8c96" />
        ))}
        <rect x="1130" y="0" width="90" height="8" fill="#8fa0ab" />
      </g>
    </svg>
  );
}
