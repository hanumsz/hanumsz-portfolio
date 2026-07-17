import { useParams, Link, Navigate } from "react-router-dom";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import BlurBlobs from "../components/BlurBlobs";
import { getProject } from "../data/projects";

function SectionLabel({ n, children }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="font-display text-sm text-olive-dust">{n}</span>
      <span className="text-xs uppercase tracking-[0.18em] text-stone">{children}</span>
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const p = getProject(slug);

  if (!p) return <Navigate to="/projects" replace />;

  return (
    <div>
      <section className="relative overflow-hidden bg-ink pt-40 pb-20 text-cream sm:pt-48">
        <BlurBlobs variant="blue" opacity={0.4} />
        <div className="container-edit relative">
          <Reveal>
            <Link to="/projects" className="text-xs uppercase tracking-[0.18em] text-cream/50 hover:text-spark">
              &larr; Projects
            </Link>
          </Reveal>
          <Reveal delay={0.06} className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-spark px-3 py-1 text-[0.65rem] uppercase tracking-wide text-ink">{p.recommendation}</span>
            <span className="text-xs uppercase tracking-[0.16em] text-cream/50">{p.category} &middot; {p.context}</span>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="mt-5 max-w-3xl font-display text-3xl italic leading-tight sm:text-5xl">{p.title}</h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70">{p.hook}</p>
          </Reveal>
          {p.team.length > 0 && (
            <Reveal delay={0.24} className="mt-8 border-t border-cream/15 pt-6 text-sm text-cream/70">
              Team: {p.team.join(", ")}
            </Reveal>
          )}
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-edit grid grid-cols-1 gap-14 py-20 sm:py-24 lg:grid-cols-2">
          <Reveal>
            <SectionLabel n="01">Challenge</SectionLabel>
            <p className="text-base leading-relaxed text-ink/85">{p.challenge}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionLabel n="02">Research</SectionLabel>
            <p className="text-base leading-relaxed text-ink/85">{p.research}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-olive-deep text-cream">
        <div className="container-edit grid grid-cols-1 gap-14 py-20 sm:py-24 lg:grid-cols-2">
          <Reveal>
            <SectionLabel n="03">Framework</SectionLabel>
            <p className="text-base leading-relaxed text-cream/85">{p.framework}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionLabel n="04">Approach</SectionLabel>
            <p className="text-base leading-relaxed text-cream/85">{p.solution}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-edit py-20 sm:py-24">
          <Reveal>
            <SectionLabel n="05">Impact</SectionLabel>
            <ul className="mt-2 space-y-3">
              {p.impact.map((line) => (
                <li key={line} className="flex items-start gap-3 text-base leading-relaxed text-ink/85">
                  <span className="spark-mark mt-1.5 text-spark-deep" />
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {p.downloads?.length > 0 && (
        <section className="bg-cream-dim">
          <div className="container-edit py-20 sm:py-24">
            <SectionLabel n="06">Downloads</SectionLabel>
            <Reveal delay={0.1} className="mt-6 flex flex-wrap items-center gap-4">
              {p.downloads.map((d) => (
                <Button key={d.label} href={d.href} download variant="outline">
                  {d.label}
                </Button>
              ))}
            </Reveal>
          </div>
        </section>
      )}
    </div>
  );
}
