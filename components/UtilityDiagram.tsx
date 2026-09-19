import { systems } from "@/lib/systems";

/**
 * Labelled ground cross-section: road build-up over the four wet-utility
 * systems we install, each in its colour code, with a manhole shaft down
 * to the sewer. Illustrative, not to scale.
 */
export function UtilityDiagram({ className = "" }: { className?: string }) {
  const rows = [
    { system: systems[0], y: 70, h: 24 },
    { system: systems[1], y: 110, h: 20 },
    { system: systems[2], y: 146, h: 38 },
    { system: systems[3], y: 202, h: 44 },
  ];

  return (
    <div className={`diagram-in rounded-sm border border-white/15 bg-ink-soft p-5 ${className}`}>
      <svg viewBox="0 0 440 260" aria-hidden="true" focusable="false" className="w-full">
        <defs>
          <pattern id="soil" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="4" r="1.1" fill="#35505f" />
            <circle cx="11" cy="11" r="1.1" fill="#35505f" />
            <circle cx="13" cy="3" r="0.7" fill="#2a4351" />
          </pattern>
          <pattern id="joints" width="140" height="10" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="10" fill="#0b141a" opacity="0.3" />
          </pattern>
        </defs>

        {/* Ground */}
        <rect y="0" width="440" height="260" fill="#182a35" />
        <rect y="46" width="440" height="214" fill="url(#soil)" />

        {/* Road build-up */}
        <rect y="0" width="440" height="10" fill="#4b5f70" />
        <rect y="10" width="440" height="16" fill="#364a5b" />
        <rect y="26" width="440" height="20" fill="#2a3d4b" />

        {/* Depth reference line */}
        <line x1="20" y1="46" x2="20" y2="248" stroke="#4b5f70" strokeWidth="1" strokeDasharray="2 4" />
        <text x="20" y="40" textAnchor="middle" fontSize="9" fill="#8fa0ab" fontWeight="600">
          GL
        </text>

        {/* Pipe runs */}
        {rows.map((row) => (
          <g key={row.system.name}>
            <rect x="20" y={row.y} width="400" height={row.h} fill={row.system.color} />
            <rect x="20" y={row.y} width="400" height={row.h} fill="url(#joints)" />
            <rect x="20" y={row.y + 3} width="400" height={Math.max(3, row.h * 0.14)} fill="#fff" opacity="0.28" />
          </g>
        ))}

        {/* Manhole shaft down to the foul sewer */}
        <g>
          <rect x="330" y="0" width="50" height={rows[2].y + rows[2].h} fill="#0c171e" />
          <rect x="330" y="0" width="4" height={rows[2].y + rows[2].h} fill="#4b5f70" />
          <rect x="376" y="0" width="4" height={rows[2].y + rows[2].h} fill="#4b5f70" />
          {Array.from({ length: 5 }, (_, i) => 20 + i * 26).map((y) => (
            <rect key={y} x="344" y={y} width="22" height="3" fill="#7d8c96" />
          ))}
          <rect x="322" y="0" width="66" height="6" fill="#8fa0ab" />
        </g>
      </svg>

      <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
        {systems.map((s) => (
          <li key={s.name} className="flex items-center gap-2 text-sm text-white/85">
            <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: s.color }} />
            {s.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
