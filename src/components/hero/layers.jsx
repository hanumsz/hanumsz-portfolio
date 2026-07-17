import { motion } from "framer-motion";

function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function hashStr(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return h;
}

export const GRAIN_BG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

// Base slow-drifting radial mesh — the atmospheric wash every system starts from.
export function MeshGradient({ c1, c2, c3 }) {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(65% 55% at 18% 12%, ${c1}45, transparent 62%), radial-gradient(60% 50% at 88% 85%, ${c2}45, transparent 65%)${c3 ? `, radial-gradient(50% 40% at 60% 40%, ${c3}30, transparent 60%)` : ""}`,
        }}
      />
      <motion.div
        className="absolute h-[60%] w-[60%] rounded-full blur-[80px]"
        style={{ background: c1, top: "-14%", left: "-10%", opacity: 0.35 }}
        animate={{ x: [0, 18, 0], y: [0, 12, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute h-[50%] w-[50%] rounded-full blur-[70px]"
        style={{ background: c2, bottom: "-10%", right: "-8%", opacity: 0.32 }}
        animate={{ x: [0, -14, 0], y: [0, -10, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

// Halftone dot field with a soft fade mask; a handful of dots gently shimmer.
export function DotMatrix({ color, uid, density = 16, cornerX = "20%", cornerY = "20%" }) {
  const rng = mulberry32(hashStr(uid + "dots"));
  const brightDots = Array.from({ length: 7 }).map(() => ({
    x: rng() * 90 + 5,
    y: rng() * 90 + 5,
    dur: 2.5 + rng() * 3,
    delay: rng() * 3,
  }));
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(${color} 1px, transparent 1.4px)`,
          backgroundSize: `${density}px ${density}px`,
          maskImage: `radial-gradient(60% 55% at ${cornerX} ${cornerY}, black, transparent 75%)`,
          WebkitMaskImage: `radial-gradient(60% 55% at ${cornerX} ${cornerY}, black, transparent 75%)`,
          opacity: 0.5,
        }}
        animate={{ backgroundPosition: ["0px 0px", `${density}px ${density}px`] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      {brightDots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{ left: `${d.x}%`, top: `${d.y}%`, width: 3, height: 3, background: color, boxShadow: `0 0 8px ${color}` }}
          animate={{ opacity: [0.1, 0.9, 0.1] }}
          transition={{ duration: d.dur, repeat: Infinity, ease: "easeInOut", delay: d.delay }}
        />
      ))}
    </div>
  );
}

// Large soft translucent panels floating behind the logo — glassmorphism, not decoration up front.
export function GlassPanels({ color, uid }) {
  const rng = mulberry32(hashStr(uid + "glass"));
  const panels = [
    { w: 46, h: 30, x: 12, y: 18, rot: -6 },
    { w: 38, h: 26, x: 52, y: 55, rot: 5 },
  ];
  return (
    <div className="absolute inset-0" aria-hidden="true">
      {panels.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-2xl border"
          style={{
            width: `${p.w}%`,
            height: `${p.h}%`,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: `linear-gradient(135deg, ${color}22, ${color}05)`,
            borderColor: `${color}30`,
            backdropFilter: "blur(2px)",
          }}
          initial={{ rotate: p.rot }}
          animate={{ rotate: [p.rot, p.rot + (rng() > 0.5 ? 2 : -2), p.rot], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 12 + i * 3, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

// Faint sine-wave contour lines, breathing slowly.
export function ContourLines({ color, uid, count = 4 }) {
  const rng = mulberry32(hashStr(uid + "lines"));
  const lines = Array.from({ length: count }).map((_, i) => {
    const baseY = 15 + (i / count) * 70 + rng() * 6;
    const amp = 5 + rng() * 5;
    const phase = rng() * 60;
    let d = `M 0 ${baseY}`;
    for (let x = 0; x <= 100; x += 10) {
      const y = baseY + Math.sin((x + phase) / 15) * amp;
      d += ` L ${x} ${y.toFixed(2)}`;
    }
    return d;
  });
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
      {lines.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          fill="none"
          stroke={color}
          strokeWidth="0.12"
          vectorEffect="non-scaling-stroke"
          animate={{ opacity: [0.1, 0.28, 0.1], y: [0, i % 2 === 0 ? 1 : -1, 0] }}
          transition={{ duration: 11 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        />
      ))}
    </svg>
  );
}

// Subtle consulting-framework grid — a few hairline rules, not a full grid.
export function GridLines({ color, uid }) {
  const rng = mulberry32(hashStr(uid + "grid"));
  const vLines = [22, 50, 78];
  const hLines = [30, 68];
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
      {vLines.map((x, i) => (
        <line key={`v${i}`} x1={x} y1="0" x2={x} y2="100" stroke={color} strokeWidth="0.08" opacity={0.18} />
      ))}
      {hLines.map((y, i) => (
        <line key={`h${i}`} x1="0" y1={y} x2="100" y2={y} stroke={color} strokeWidth="0.08" opacity={0.15} />
      ))}
      <circle cx={22 + rng() * 56} cy={30 + rng() * 38} r="0.6" fill={color} opacity="0.5" />
    </svg>
  );
}

// A soft diagonal light beam that slowly sweeps across the composition.
export function SpotlightSweep({ color, uid }) {
  return (
    <motion.div
      className="absolute inset-[-20%]"
      style={{
        background: `linear-gradient(115deg, transparent 40%, ${color}22 50%, transparent 60%)`,
      }}
      animate={{ x: ["-15%", "15%", "-15%"] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    />
  );
}

// Focused glow anchored behind the logo — separate from the ambient mesh blobs.
export function Halo({ color, uid, size = 60 }) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 rounded-full blur-[70px]"
      style={{ width: `${size}%`, height: `${size}%`, background: color, translateX: "-50%", translateY: "-50%" }}
      animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.08, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    />
  );
}

export function Particles({ color, color2, uid, count = 8 }) {
  const rng = mulberry32(hashStr(uid + "particles"));
  const particles = Array.from({ length: count }).map((_, i) => ({
    x: 6 + rng() * 88,
    y: 6 + rng() * 88,
    size: 1.6 + rng() * 3,
    dur: 4 + rng() * 4,
    delay: rng() * 3,
    color: i % 3 === 0 ? color2 ?? color : color,
  }));
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
          animate={{ y: [0, -12, 0], opacity: [0.15, 0.85, 0.15] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        />
      ))}
    </div>
  );
}

export function Grain({ opacity = 0.05 }) {
  return <div className="absolute inset-0 mix-blend-overlay" style={{ backgroundImage: GRAIN_BG, opacity }} />;
}
