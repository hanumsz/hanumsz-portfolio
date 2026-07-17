import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { getHeroTheme } from "../../data/heroThemes";
import { MeshGradient, DotMatrix, GlassPanels, ContourLines, GridLines, SpotlightSweep, Halo, Particles, Grain } from "./layers";

export default function CompetitionHero({ slug, variant = "card", className = "" }) {
  const theme = getHeroTheme(slug);
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [5, -5]), { stiffness: 180, damping: 22 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-5, 5]), { stiffness: 180, damping: 22 });
  const spotlightX = useTransform(mx, (v) => `${v * 100}%`);
  const spotlightY = useTransform(my, (v) => `${v * 100}%`);

  if (!theme) return <div className={`bg-ink ${className}`} />;

  const uid = slug;
  const isDetail = variant === "detail";
  const particleCount = isDetail ? 12 : 7;
  const lineCount = isDetail ? 5 : 4;
  const [c1, c2, c3] = theme.mesh;

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };
  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
    setHovered(false);
  };

  const has = (name) => theme.layers?.includes(name);
  const logoScale = isDetail ? 1.15 : 1;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      whileHover={{ y: -4, scale: 1.007 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      style={{ perspective: 1000 }}
      className={`group relative overflow-hidden rounded-sm ${className}`}
    >
      <motion.div
        style={{
          rotateX: isDetail ? 0 : rotateX,
          rotateY: isDetail ? 0 : rotateY,
          background: `linear-gradient(150deg, ${theme.bgFrom}, ${theme.bgTo})`,
        }}
        className="absolute inset-0"
      >
        {has("mesh") && <MeshGradient c1={c1} c2={c2} c3={c3} />}
        {has("dotMatrix") && <DotMatrix color={theme.dot} uid={uid} density={theme.dotDensity ?? 18} cornerX="75%" cornerY="25%" />}
        {has("grid") && <GridLines color={theme.line} uid={uid} />}
        {has("contours") && <ContourLines color={theme.line} uid={uid} count={lineCount} />}
        {has("glass") && <GlassPanels color={theme.dot} uid={uid} />}
        {has("sweep") && <SpotlightSweep color={theme.halo} uid={uid} />}
        {has("halo") && <Halo color={theme.halo} uid={uid} size={isDetail ? 46 : 62} />}
        {has("particles") && <Particles color={theme.particle} color2={theme.particle2} uid={uid} count={particleCount} />}
        {has("grain") && <Grain />}

        {/* cursor-tracked spotlight */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(240px circle at ${spotlightX} ${spotlightY}, ${theme.halo}30, transparent 70%)`,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />

        {/* the logo — hero of the composition */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center px-[12%] pb-[10%]"
          animate={hovered ? { scale: logoScale * 1.03 } : { scale: logoScale }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            style={{ filter: `drop-shadow(0 0 ${isDetail ? 34 : 22}px ${theme.halo}55)` }}
          >
            {theme.logos?.map((logo) => (
              <img
                key={logo.src}
                src={logo.src}
                alt=""
                className={logo.rounded ? "rounded-full" : ""}
                style={{ width: logo.w * (isDetail ? 1.35 : 1.1), height: "auto", maxWidth: "78%" }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* minimal caption */}
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <p className="text-[0.62rem] uppercase tracking-[0.16em] text-cream/75">{theme.caption}</p>
          {theme.year && <p className="mt-0.5 text-[0.6rem] text-cream/40">{theme.year}</p>}
        </div>
      </motion.div>
    </motion.div>
  );
}
