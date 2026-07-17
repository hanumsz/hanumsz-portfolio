import { useState } from "react";
import { hashStr, mulberry32 } from "../lib/random";

function wavePath(rng, baseY, amplitude, width, segments) {
  let d = `M 0 ${baseY.toFixed(1)}`;
  const segW = width / segments;
  let prevY = baseY;
  for (let i = 1; i <= segments; i++) {
    const x = i * segW;
    const y = baseY + (rng() * 2 - 1) * amplitude;
    const cx1 = x - segW * 0.6;
    const cx2 = x - segW * 0.4;
    d += ` C ${cx1.toFixed(1)} ${prevY.toFixed(1)}, ${cx2.toFixed(1)} ${y.toFixed(1)}, ${x.toFixed(1)} ${y.toFixed(1)}`;
    prevY = y;
  }
  return d;
}

const TONES = {
  cream: { bg: "bg-cream-dim", line: "#B9C8DE", spark: "#F0752F", text: "text-ink/70" },
  olive: { bg: "bg-olive", line: "#8FB1DA", spark: "#FBA05C", text: "text-cream/85" },
  ink: { bg: "bg-ink", line: "#2C3B5C", spark: "#F0752F", text: "text-cream/85" },
};

// Every image slot on the site resolves a real photo first (public/images/<id>.jpg).
// If it isn't there yet, this renders a generative "contour lines resolving into
// one clear path" pattern -- a deliberate stand-in, not a broken-image state.
export default function PhotoPlaceholder({
  id,
  label,
  className = "",
  tone = "cream",
  eager = false,
}) {
  const [errored, setErrored] = useState(false);
  const src = `/images/${id}.jpg`;
  const palette = TONES[tone] ?? TONES.cream;

  if (!errored) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <img
          src={src}
          alt={label || ""}
          onError={() => setErrored(true)}
          className="h-full w-full object-cover"
          loading={eager ? "eager" : "lazy"}
        />
      </div>
    );
  }

  const rng = mulberry32(hashStr(id));
  const lines = Array.from({ length: 6 }).map((_, i) => {
    const baseY = 40 + i * 62 + (rng() * 20 - 10);
    return wavePath(rng, baseY, 14 + rng() * 10, 400, 5);
  });
  const sparkY = 120 + rng() * 160;
  const sparkPath = wavePath(rng, sparkY, 30 + rng() * 20, 400, 3);

  return (
    <div className={`relative overflow-hidden ${palette.bg} ${className}`}>
      <svg
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {lines.map((d, i) => (
          <path key={i} d={d} fill="none" stroke={palette.line} strokeWidth="1" opacity="0.45" />
        ))}
        <path d={sparkPath} fill="none" stroke={palette.spark} strokeWidth="2" opacity="0.9" />
      </svg>
      {label && (
        <div className={`absolute inset-x-0 bottom-0 flex items-center gap-2 p-4 text-[0.7rem] uppercase tracking-[0.14em] ${palette.text}`}>
          <span className="spark-mark" style={{ color: palette.spark }} />
          <span>{label}</span>
        </div>
      )}
    </div>
  );
}
