// Static SVG circuit board background for the technologies section.
// All traces, vias, and IC outlines are drawn in the site's accent colors
// at very low opacity so they don't compete with the icons.

const ORANGE = 'rgba(248,148,88,';
const BLUE = 'rgba(13,182,233,';

// via = [cx, cy]
const VIAS_ORANGE: [number, number][] = [
  [120, 100],
  [240, 200],
  [400, 60],
  [720, 200],
  [620, 280],
  [1100, 200],
  [900, 380],
  [1100, 480],
];

const VIAS_BLUE: [number, number][] = [
  [80, 320],
  [200, 420],
  [480, 320],
  [680, 240],
  [860, 340],
  [1040, 240],
];

function Vias({ points, base }: { points: [number, number][]; base: string }) {
  return (
    <>
      {points.map(([cx, cy], i) => (
        <g key={i}>
          <circle
            cx={cx}
            cy={cy}
            r={5}
            fill={`${base}0.22)`}
            stroke={`${base}0.35)`}
            strokeWidth={1.5}
          />
          <circle cx={cx} cy={cy} r={2} fill={`${base}0.5)`} />
        </g>
      ))}
    </>
  );
}

export default function CircuitBoard() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      viewBox="0 0 1400 560"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Repeating via-hole grid — gives the PCB substrate feel */}
        <pattern id="pcb-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1.2" fill={`${ORANGE}0.1)`} />
        </pattern>

        {/* Radial fade so edges blend into the section background */}
        <radialGradient id="pcb-fade" cx="50%" cy="50%" r="55%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="transparent" stopOpacity="0" />
          <stop offset="100%" stopColor="#0b0a14" stopOpacity="0.85" />
        </radialGradient>

        {/* Top/bottom fade strips */}
        <linearGradient id="fade-v" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b0a14" stopOpacity="0.7" />
          <stop offset="20%" stopColor="#0b0a14" stopOpacity="0" />
          <stop offset="80%" stopColor="#0b0a14" stopOpacity="0" />
          <stop offset="100%" stopColor="#0b0a14" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      {/* PCB substrate dot grid */}
      <rect width="100%" height="100%" fill="url(#pcb-grid)" />

      {/* ── ORANGE TRACES ─────────────────────────────────────────── */}
      <g
        stroke={`${ORANGE}0.2)`}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Left cluster */}
        <polyline points="0,100 120,100 120,200 240,200" />
        <polyline points="120,100 120,60 400,60" />
        <polyline points="240,200 240,280 180,280" />
        <polyline points="400,60 400,160 320,160 320,280" />

        {/* Center cluster */}
        <polyline points="500,60 500,120 620,120 620,60" />
        <polyline points="620,120 620,200 720,200 720,120" />
        <polyline points="720,200 840,200 840,60" />
        <polyline points="500,380 500,280 620,280" />
        <polyline points="620,280 720,280 720,380 620,380" />

        {/* Right cluster */}
        <polyline points="1000,100 1100,100 1100,200" />
        <polyline points="1100,200 1200,200 1200,100 1400,100" />
        <polyline points="1100,200 1100,380 900,380" />
        <polyline points="1200,380 1200,300 1400,300" />
        <polyline points="900,380 900,480 1100,480 1100,380" />
      </g>

      <Vias points={VIAS_ORANGE} base={ORANGE} />

      {/* ── BLUE TRACES ───────────────────────────────────────────── */}
      <g
        stroke={`${BLUE}0.16)`}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="0,320 80,320 80,420 200,420" />
        <polyline points="200,420 360,420 360,320 480,320" />
        <polyline points="480,320 480,240 560,240" />
        <polyline points="560,240 680,240 680,340 780,340" />
        <polyline points="780,340 860,340 860,440 1000,440" />
        <polyline points="1000,440 1200,440 1200,500 1400,500" />
        <polyline points="860,340 920,340 920,240 1040,240" />
        <polyline points="1040,240 1040,160 1160,160" />
      </g>

      <Vias points={VIAS_BLUE} base={BLUE} />

      {/* ── IC COMPONENTS (outlined rectangles with pin stubs) ──── */}
      <g strokeWidth="1.2" fill={`${ORANGE}0.05)`} stroke={`${ORANGE}0.18)`}>
        {/* IC-1 */}
        <rect x="140" y="230" width="80" height="50" rx="3" />
        <line x1="160" y1="230" x2="160" y2="210" />
        <line x1="180" y1="230" x2="180" y2="210" />
        <line x1="200" y1="230" x2="200" y2="210" />
        <line x1="160" y1="280" x2="160" y2="300" />
        <line x1="200" y1="280" x2="200" y2="300" />

        {/* IC-2 */}
        <rect x="520" y="78" width="80" height="42" rx="3" />
        <line x1="540" y1="78" x2="540" y2="60" />
        <line x1="560" y1="78" x2="560" y2="60" />
        <line x1="580" y1="78" x2="580" y2="60" />

        {/* IC-3 */}
        <rect x="800" y="58" width="80" height="50" rx="3" />
        <line x1="820" y1="58" x2="820" y2="40" />
        <line x1="840" y1="58" x2="840" y2="40" />
        <line x1="860" y1="58" x2="860" y2="40" />
        <line x1="820" y1="108" x2="820" y2="126" />
        <line x1="860" y1="108" x2="860" y2="126" />

        {/* IC-4 */}
        <rect x="940" y="390" width="100" height="50" rx="3" />
        <line x1="960" y1="390" x2="960" y2="375" />
        <line x1="980" y1="390" x2="980" y2="375" />
        <line x1="1000" y1="390" x2="1000" y2="375" />
        <line x1="1020" y1="390" x2="1020" y2="375" />
      </g>

      {/* ── PASSIVE COMPONENTS (resistors / capacitors) ────────── */}
      <g strokeWidth="1" fill="none" stroke={`${BLUE}0.22)`}>
        <rect x="288" y="152" width="32" height="14" rx="3" />
        <rect x="686" y="228" width="32" height="14" rx="3" />
        <rect x="1048" y="228" width="32" height="14" rx="3" />
        <rect x="152" y="388" width="32" height="14" rx="3" />
      </g>

      {/* Edge fades to blend into the section */}
      <rect width="100%" height="100%" fill="url(#pcb-fade)" />
      <rect width="100%" height="100%" fill="url(#fade-v)" />
    </svg>
  );
}
