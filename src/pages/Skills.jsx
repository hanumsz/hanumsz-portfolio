import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import BlurBlobs from "../components/BlurBlobs";
import { centerNode, skillNodes } from "../data/skills";
import { caseStudies } from "../data/caseStudies";
import { competitions } from "../data/competitions";
import { projects } from "../data/projects";
import { orgExperience } from "../data/orgExperience";
import { proExperience } from "../data/proExperience";

function polar(cx, cy, r, angleDeg) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

const ring1 = skillNodes.filter((n) => n.ring === 1);
const ring2 = skillNodes.filter((n) => n.ring === 2);

const positioned = [
  ...ring1.map((n, i) => ({ ...n, ...polar(50, 50, 24, (360 / ring1.length) * i - 90) })),
  ...ring2.map((n, i) => ({ ...n, ...polar(50, 50, 43, (360 / ring2.length) * i - 90 + 15) })),
];

function projectLookup(slug) {
  const cs = caseStudies.find((c) => c.slug === slug);
  if (cs) return { title: cs.title, to: `/work/${cs.slug}`, kind: "Case study" };
  const comp = competitions.find((c) => c.slug === slug);
  if (comp) return { title: comp.title, to: `/competitions/${comp.slug}`, kind: "Case competition" };
  const project = projects.find((p) => p.slug === slug);
  if (project) return { title: project.title, to: `/projects/${project.slug}`, kind: "Project" };
  const org = orgExperience.find((o) => o.id === slug);
  if (org) return { title: `${org.role} — ${org.org}`, to: "/experience/organizational", kind: "Organizational role" };
  const pro = proExperience.find((p) => p.id === slug);
  if (pro) return { title: `${pro.role} — ${pro.org}`, to: "/experience/professional", kind: "Professional role" };
  return null;
}

export default function Skills() {
  const [activeId, setActiveId] = useState(null);
  const active = positioned.find((n) => n.id === activeId);
  const relatedProjects = useMemo(() => {
    if (!active) return [];
    return active.related.map(projectLookup).filter(Boolean);
  }, [active]);

  return (
    <div>
      <section className="relative overflow-hidden bg-ink pt-40 pb-20 text-cream sm:pt-48">
        <BlurBlobs variant="blue" opacity={0.4} />
        <div className="container-edit relative">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-cream/50">Skills</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl font-display text-3xl italic leading-tight sm:text-5xl">
              Every skill exists to solve <span className="text-spark">one problem</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70">
              Hover or tap a skill to see the actual work it came from — not a self-rating, a receipt.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-edit grid grid-cols-1 gap-16 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal className="relative mx-auto aspect-square w-full max-w-xl">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
              {positioned.map((n) => (
                <line
                  key={n.id}
                  x1="50"
                  y1="50"
                  x2={n.x}
                  y2={n.y}
                  stroke={activeId === n.id ? "#F0752F" : "#D3D6DE"}
                  strokeWidth={activeId === n.id ? 0.6 : 0.3}
                  opacity={activeId && activeId !== n.id ? 0.25 : 1}
                  style={{ transition: "all 300ms ease" }}
                />
              ))}
            </svg>

            <div
              className="absolute flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-ink px-3 text-center shadow-[0_20px_50px_-20px_rgba(27,26,19,0.5)] sm:h-32 sm:w-32"
              style={{ left: "50%", top: "50%" }}
            >
              <span className="font-display text-[0.8rem] italic leading-tight text-cream sm:text-sm">
                {centerNode.label}
              </span>
            </div>

            {positioned.map((n) => (
              <button
                key={n.id}
                onMouseEnter={() => setActiveId(n.id)}
                onMouseLeave={() => setActiveId(null)}
                onFocus={() => setActiveId(n.id)}
                onBlur={() => setActiveId(null)}
                onClick={() => setActiveId((cur) => (cur === n.id ? null : n.id))}
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border px-3 py-2 text-xs font-medium transition-all duration-300 sm:px-4 sm:text-sm ${
                  activeId === n.id
                    ? "scale-110 border-spark-deep bg-spark text-ink"
                    : "border-ink/15 bg-paper text-ink/80 hover:border-ink/40"
                }`}
              >
                {n.label}
              </button>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="min-h-[16rem] rounded-sm border border-ink/10 bg-paper p-8 sm:p-10">
            {!active && (
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-stone">Explore</p>
                <p className="mt-4 text-sm leading-relaxed text-stone">
                  Hover or tap a node on the left. Each skill is linked to the case studies and
                  competitions where I actually used it — strategy work, marketing campaigns,
                  financial models, and research.
                </p>
              </div>
            )}
            {active && (
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-spark-deep">{active.label}</p>
                <h3 className="mt-3 font-display text-xl italic text-ink">Where this shows up</h3>
                <ul className="mt-6 space-y-4">
                  {relatedProjects.map((p) => (
                    <li key={p.to}>
                      <Link to={p.to} className="group flex items-baseline justify-between gap-4 border-b border-ink/10 pb-3 hover:border-ink/30">
                        <span className="text-sm text-ink group-hover:text-olive-deep">{p.title}</span>
                        <span className="shrink-0 text-[0.65rem] uppercase tracking-wide text-stone">{p.kind}</span>
                      </Link>
                    </li>
                  ))}
                  {relatedProjects.length === 0 && (
                    <li className="text-sm text-stone">Applied across day-to-day project work.</li>
                  )}
                </ul>
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
