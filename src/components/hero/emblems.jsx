import { motion } from "framer-motion";

const idleFloat = {
  animate: { y: [0, -10, 0] },
  transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
};
const idleSpin = (duration) => ({
  animate: { rotate: [0, 360] },
  transition: { duration, repeat: Infinity, ease: "linear" },
});
const idlePulse = (duration = 5) => ({
  animate: { scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] },
  transition: { duration, repeat: Infinity, ease: "easeInOut" },
});

// ---------------------------------------------------------------------------
// Globe — International Business. Orbital rings around a glowing sphere.
// ---------------------------------------------------------------------------
export function GlobeEmblem({ theme, uid }) {
  const gid = `globe-${uid}`;
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full overflow-visible">
      <defs>
        <radialGradient id={`${gid}-sphere`} cx="38%" cy="34%" r="70%">
          <stop offset="0%" stopColor={theme.accent2} stopOpacity="0.95" />
          <stop offset="55%" stopColor={theme.accent} stopOpacity="0.85" />
          <stop offset="100%" stopColor={theme.bgTo} stopOpacity="0.9" />
        </radialGradient>
        <radialGradient id={`${gid}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={theme.accent} stopOpacity="0.55" />
          <stop offset="100%" stopColor={theme.accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${gid}-ring`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={theme.accent2} stopOpacity="0.75" />
          <stop offset="100%" stopColor={theme.accent} stopOpacity="0.15" />
        </linearGradient>
      </defs>

      <circle cx="200" cy="200" r="150" fill={`url(#${gid}-glow)`} />

      <motion.g {...idleSpin(38)} style={{ transformOrigin: "200px 200px" }}>
        <ellipse cx="200" cy="200" rx="150" ry="52" fill="none" stroke={`url(#${gid}-ring)`} strokeWidth="1.4" opacity="0.55" />
      </motion.g>
      <motion.g {...idleSpin(52)} style={{ transformOrigin: "200px 200px" }} initial={{ rotate: 40 }}>
        <ellipse cx="200" cy="200" rx="150" ry="90" fill="none" stroke={`url(#${gid}-ring)`} strokeWidth="1.2" opacity="0.4" />
      </motion.g>
      <motion.g {...idleSpin(64)} style={{ transformOrigin: "200px 200px" }} initial={{ rotate: -25 }}>
        <ellipse cx="200" cy="200" rx="118" ry="150" fill="none" stroke={`url(#${gid}-ring)`} strokeWidth="1" opacity="0.3" />
      </motion.g>

      <motion.g {...idleFloat}>
        <circle cx="200" cy="200" r="86" fill={`url(#${gid}-sphere)`} />
        <ellipse cx="200" cy="200" rx="86" ry="30" fill="none" stroke={theme.bgTo} strokeOpacity="0.4" strokeWidth="1" />
        <ellipse cx="200" cy="200" rx="86" ry="30" fill="none" stroke={theme.bgTo} strokeOpacity="0.3" strokeWidth="1" transform="rotate(55 200 200)" />
        <path d="M 118 200 A 82 82 0 0 1 282 200" fill="none" stroke={theme.bgTo} strokeOpacity="0.25" strokeWidth="1" />
      </motion.g>

      {[[95, 130], [305, 260], [270, 100], [130, 300]].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r="4.5"
          fill={theme.accent2}
          {...idlePulse(4 + i)}
        />
      ))}
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Trophy — Consulting Olympics. Layered podium + glowing laurel medal.
// ---------------------------------------------------------------------------
export function TrophyEmblem({ theme, uid }) {
  const gid = `trophy-${uid}`;
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full overflow-visible">
      <defs>
        <linearGradient id={`${gid}-step`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={theme.accent2} stopOpacity="0.45" />
          <stop offset="100%" stopColor={theme.accent} stopOpacity="0.12" />
        </linearGradient>
        <radialGradient id={`${gid}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={theme.accent} stopOpacity="0.6" />
          <stop offset="100%" stopColor={theme.accent} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${gid}-medal`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor={theme.accent2} stopOpacity="0.95" />
          <stop offset="100%" stopColor={theme.accent} stopOpacity="0.6" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="150" r="130" fill={`url(#${gid}-glow)`} />

      {/* stepped podium, isometric-flavoured rectangles */}
      <g opacity="0.9">
        <rect x="105" y="260" width="70" height="66" rx="6" fill={`url(#${gid}-step)`} stroke={theme.accent2} strokeOpacity="0.3" />
        <rect x="165" y="228" width="70" height="98" rx="6" fill={`url(#${gid}-step)`} stroke={theme.accent2} strokeOpacity="0.35" />
        <rect x="225" y="272" width="70" height="54" rx="6" fill={`url(#${gid}-step)`} stroke={theme.accent2} strokeOpacity="0.3" />
      </g>

      <motion.g {...idleFloat} style={{ transformOrigin: "200px 150px" }}>
        <circle cx="200" cy="150" r="52" fill={`url(#${gid}-medal)`} />
        <circle cx="200" cy="150" r="52" fill="none" stroke={theme.bgTo} strokeOpacity="0.5" strokeWidth="2" />
        {Array.from({ length: 10 }).map((_, i) => {
          const a = (i / 10) * Math.PI * 2;
          const x1 = 200 + Math.cos(a) * 40, y1 = 150 + Math.sin(a) * 40;
          const x2 = 200 + Math.cos(a) * 52, y2 = 150 + Math.sin(a) * 52;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={theme.bgTo} strokeOpacity="0.35" strokeWidth="1.5" />;
        })}
        <path d="M 178 226 L 168 268 L 200 250 L 232 268 L 222 226" fill={theme.accent} fillOpacity="0.5" stroke={theme.accent2} strokeOpacity="0.4" />
      </motion.g>

      {[[110, 120], [290, 130], [200, 70]].map(([cx, cy], i) => (
        <motion.circle key={i} cx={cx} cy={cy} r="3.5" fill={theme.accent2} {...idlePulse(3.5 + i)} />
      ))}
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Crystal — Consulting. Faceted gem with radiating compass lines.
// ---------------------------------------------------------------------------
export function CrystalEmblem({ theme, uid }) {
  const gid = `crystal-${uid}`;
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full overflow-visible">
      <defs>
        <linearGradient id={`${gid}-a`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={theme.accent2} stopOpacity="0.85" />
          <stop offset="100%" stopColor={theme.accent} stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id={`${gid}-b`} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={theme.accent} stopOpacity="0.7" />
          <stop offset="100%" stopColor={theme.bgTo} stopOpacity="0.5" />
        </linearGradient>
        <radialGradient id={`${gid}-glow`} cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor={theme.accent} stopOpacity="0.55" />
          <stop offset="100%" stopColor={theme.accent} stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="195" r="140" fill={`url(#${gid}-glow)`} />

      <motion.g {...idleSpin(90)} style={{ transformOrigin: "200px 195px" }} opacity="0.35">
        {[0, 45, 90, 135].map((deg) => (
          <line key={deg} x1="200" y1="60" x2="200" y2="330" stroke={theme.line} strokeWidth="1" transform={`rotate(${deg} 200 195)`} />
        ))}
      </motion.g>

      <motion.g {...idleFloat}>
        <polygon points="200,85 275,150 250,255 150,255 125,150" fill={`url(#${gid}-a)`} stroke={theme.accent2} strokeOpacity="0.5" strokeWidth="1.5" />
        <polygon points="200,85 200,255 150,255 125,150" fill={`url(#${gid}-b)`} opacity="0.7" />
        <polygon points="200,85 275,150 200,195" fill={theme.accent2} opacity="0.25" />
        <polygon points="200,195 250,255 150,255" fill={theme.bgTo} opacity="0.3" />
        <line x1="200" y1="85" x2="200" y2="255" stroke={theme.bgTo} strokeOpacity="0.4" strokeWidth="1" />
        <line x1="125" y1="150" x2="275" y2="150" stroke={theme.bgTo} strokeOpacity="0.3" strokeWidth="1" />
      </motion.g>

      {[[110, 260], [290, 240], [200, 60]].map(([cx, cy], i) => (
        <motion.circle key={i} cx={cx} cy={cy} r="3.5" fill={theme.accent2} {...idlePulse(4 + i)} />
      ))}
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Cube — Entrepreneurship. Floating isometric cube + expanding growth rings.
// ---------------------------------------------------------------------------
export function CubeEmblem({ theme, uid }) {
  const gid = `cube-${uid}`;
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full overflow-visible">
      <defs>
        <linearGradient id={`${gid}-top`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={theme.accent2} stopOpacity="0.9" />
          <stop offset="100%" stopColor={theme.accent} stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id={`${gid}-left`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={theme.accent} stopOpacity="0.6" />
          <stop offset="100%" stopColor={theme.bgTo} stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id={`${gid}-right`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={theme.accent} stopOpacity="0.4" />
          <stop offset="100%" stopColor={theme.bgTo} stopOpacity="0.75" />
        </linearGradient>
        <radialGradient id={`${gid}-glow`} cx="50%" cy="55%" r="55%">
          <stop offset="0%" stopColor={theme.accent2} stopOpacity="0.5" />
          <stop offset="100%" stopColor={theme.accent2} stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="210" r="150" fill={`url(#${gid}-glow)`} />

      {[62, 100, 140].map((r, i) => (
        <motion.circle
          key={r}
          cx="200"
          cy="210"
          r={r}
          fill="none"
          stroke={theme.accent}
          strokeOpacity="0.25"
          strokeWidth="1"
          animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.05, 0.35] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
          style={{ transformOrigin: "200px 210px" }}
        />
      ))}

      <motion.g {...idleFloat}>
        <polygon points="200,95 268,135 200,175 132,135" fill={`url(#${gid}-top)`} stroke={theme.accent2} strokeOpacity="0.5" strokeWidth="1.2" />
        <polygon points="132,135 200,175 200,258 132,218" fill={`url(#${gid}-left)`} stroke={theme.accent2} strokeOpacity="0.25" strokeWidth="1" />
        <polygon points="268,135 200,175 200,258 268,218" fill={`url(#${gid}-right)`} stroke={theme.accent2} strokeOpacity="0.25" strokeWidth="1" />
      </motion.g>

      {[[315, 110], [95, 260], [270, 290]].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r="4"
          fill={theme.accent2}
          animate={{ y: [0, -14, 0], opacity: [0.8, 0.3, 0.8] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        />
      ))}
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Network — HR. Connected nodes forming an abstract org / collaboration graph.
// ---------------------------------------------------------------------------
export function NetworkEmblem({ theme, uid }) {
  const gid = `net-${uid}`;
  const nodes = [
    { x: 200, y: 130, r: 30, core: true },
    { x: 110, y: 210, r: 20 },
    { x: 290, y: 210, r: 20 },
    { x: 150, y: 300, r: 16 },
    { x: 250, y: 300, r: 16 },
    { x: 200, y: 235, r: 13 },
  ];
  const links = [
    [0, 1], [0, 2], [1, 3], [2, 4], [0, 5], [1, 5], [2, 5],
  ];
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full overflow-visible">
      <defs>
        <radialGradient id={`${gid}-glow`} cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor={theme.accent} stopOpacity="0.5" />
          <stop offset="100%" stopColor={theme.accent} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${gid}-node`} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor={theme.accent2} stopOpacity="0.95" />
          <stop offset="100%" stopColor={theme.accent} stopOpacity="0.55" />
        </radialGradient>
      </defs>

      <circle cx="200" cy="215" r="150" fill={`url(#${gid}-glow)`} />

      <motion.g {...idleFloat}>
        {links.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
            stroke={theme.accent2}
            strokeWidth="1.3"
            animate={{ opacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}
          />
        ))}
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x} cy={n.y} r={n.r}
            fill={`url(#${gid}-node)`}
            stroke={theme.bgTo}
            strokeOpacity="0.4"
            {...idlePulse(4 + i * 0.4)}
          />
        ))}
      </motion.g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Strategy Grid — Consulting (alt). Stacked glass panels at a gentle stagger.
// ---------------------------------------------------------------------------
export function StrategyGridEmblem({ theme, uid }) {
  const gid = `grid-${uid}`;
  const panels = [
    { x: 120, y: 190, rot: -8, op: 0.18 },
    { x: 150, y: 160, rot: -3, op: 0.24 },
    { x: 180, y: 130, rot: 2, op: 0.32 },
    { x: 210, y: 100, rot: 7, op: 0.42 },
  ];
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full overflow-visible">
      <defs>
        <linearGradient id={`${gid}-panel`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={theme.accent} stopOpacity="0.9" />
          <stop offset="100%" stopColor={theme.accent2} stopOpacity="0.4" />
        </linearGradient>
        <radialGradient id={`${gid}-glow`} cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor={theme.accent} stopOpacity="0.5" />
          <stop offset="100%" stopColor={theme.accent} stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="210" cy="210" r="150" fill={`url(#${gid}-glow)`} />

      <motion.g {...idleFloat}>
        {panels.map((p, i) => (
          <rect
            key={i}
            x={p.x - 90} y={p.y - 60} width="180" height="120" rx="10"
            fill={`url(#${gid}-panel)`}
            fillOpacity={p.op}
            stroke={theme.accent2}
            strokeOpacity="0.3"
            transform={`rotate(${p.rot} ${p.x} ${p.y})`}
          />
        ))}
      </motion.g>

      <motion.circle cx="300" cy="290" r="7" fill={theme.accent2} {...idlePulse(3.2)} />
      {[0, 1, 2].map((i) => (
        <line key={i} x1="120" y1={330 - i * 14} x2="200" y2={330 - i * 14} stroke={theme.line} strokeWidth="1" opacity={0.35 - i * 0.08} />
      ))}
    </svg>
  );
}

export const EMBLEMS = {
  globe: GlobeEmblem,
  trophy: TrophyEmblem,
  crystal: CrystalEmblem,
  cube: CubeEmblem,
  network: NetworkEmblem,
  strategyGrid: StrategyGridEmblem,
};
