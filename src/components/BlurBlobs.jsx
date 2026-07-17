import { motion } from "framer-motion";

const PRESETS = {
  blue: ["#5E96D6", "#1F4A80"],
  orange: ["#FBA05C", "#F0752F"],
};

// The soft, blurred gradient-blob motif that anchors the site's visual identity.
// Purely decorative and pointer-events-none -- never blocks the interactive layer above it.
export default function BlurBlobs({ variant = "blue", opacity = 0.5, className = "" }) {
  const [c1, c2] = PRESETS[variant] ?? PRESETS.blue;

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} style={{ opacity }} aria-hidden="true">
      <motion.div
        className="absolute h-[30rem] w-[30rem] rounded-full blur-[110px]"
        style={{ background: c1, top: "-12%", left: "-8%" }}
        animate={{ x: [0, 36, 0], y: [0, 24, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute h-[24rem] w-[24rem] rounded-full blur-[100px]"
        style={{ background: c2, bottom: "-14%", right: "-6%" }}
        animate={{ x: [0, -28, 0], y: [0, -18, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
