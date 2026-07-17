import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PILLARS, getItemsByCategory } from "../data/expertise";

const spring = { type: "spring", stiffness: 300, damping: 24 };

function ExpertiseCard({ pillar, index, isActive, onSelect }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onClick={() => onSelect(pillar.id)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...spring, delay: index * 0.06 }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative overflow-hidden rounded-sm border p-7 text-left transition-colors duration-300 sm:p-8 ${
        isActive ? "border-spark bg-ink text-cream" : "border-ink/10 bg-paper text-ink hover:border-spark/50"
      }`}
    >
      {/* Animated glow border */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-sm"
        style={{
          background:
            "radial-gradient(120px circle at var(--x,50%) var(--y,50%), rgba(240,117,47,0.16), transparent 70%)",
        }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
          e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
        }}
      />

      <div className="relative">
        <div className="flex items-start justify-between">
          <span className={`font-display text-sm ${isActive ? "text-spark" : "text-olive-dust"}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className={`spark-mark ${isActive ? "text-spark" : "text-spark"}`} />
        </div>
        <h3 className={`mt-6 font-display text-2xl italic sm:text-3xl ${isActive ? "text-cream" : "text-ink"}`}>
          {pillar.title}
        </h3>
        <p className={`mt-3 text-sm leading-relaxed ${isActive ? "text-cream/70" : "text-stone"}`}>{pillar.line}</p>

        <AnimatePresence initial={false}>
          {(hovered || isActive) && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className={`mt-5 space-y-1.5 border-t pt-5 ${isActive ? "border-cream/15" : "border-ink/10"}`}>
                {pillar.preview.map((line) => (
                  <li key={line} className={`text-xs ${isActive ? "text-cream/60" : "text-stone/80"}`}>
                    {line}
                  </li>
                ))}
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
}

export default function ExpertiseExplorer() {
  const [activeId, setActiveId] = useState(null);

  const items = useMemo(() => (activeId ? getItemsByCategory(activeId) : []), [activeId]);
  const activePillar = PILLARS.find((p) => p.id === activeId);

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((pillar, i) => (
          <ExpertiseCard
            key={pillar.id}
            pillar={pillar}
            index={i}
            isActive={activeId === pillar.id}
            onSelect={(id) => setActiveId((cur) => (cur === id ? null : id))}
          />
        ))}
      </div>

      {activeId && (
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-14"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 pb-5">
            <p className="text-sm text-stone">
              <span className="font-display italic text-ink">{items.length}</span>{" "}
              {items.length === 1 ? "result" : "results"} tagged{" "}
              <span className="text-ink">{activePillar?.title}</span>
            </p>
            <button
              onClick={() => setActiveId(null)}
              className="text-xs uppercase tracking-[0.16em] text-stone underline decoration-ink/20 underline-offset-4 hover:text-ink hover:decoration-spark-deep"
            >
              &larr; Back to All Work
            </button>
          </div>

          {items.length === 0 ? (
            <p className="mt-8 text-sm text-stone">Nothing tagged here yet — check back soon.</p>
          ) : (
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {items.map((item, i) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...spring, delay: i * 0.04 }}
                >
                  <Link
                    to={item.href}
                    className="group flex h-full flex-col justify-between rounded-sm border border-ink/10 bg-paper p-6 transition-colors duration-300 hover:border-spark/50"
                  >
                    <div>
                      <p className="text-[0.65rem] uppercase tracking-[0.16em] text-olive-deep">{item.type}</p>
                      <h4 className="mt-3 font-display text-lg italic leading-snug text-ink group-hover:text-olive-deep">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-stone">{item.description}</p>
                    </div>
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <p className="text-xs text-stone/70">{item.meta}</p>
                      <ArrowUpRight
                        size={15}
                        className="shrink-0 text-ink/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-spark-deep"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
