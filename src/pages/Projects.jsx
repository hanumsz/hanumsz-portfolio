import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import BlurBlobs from "../components/BlurBlobs";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink pt-40 pb-20 text-cream sm:pt-48">
        <BlurBlobs variant="blue" opacity={0.4} />
        <div className="container-edit relative">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-cream/50">Projects</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl font-display text-3xl italic leading-tight sm:text-5xl">
              Where coursework became <span className="text-spark">practical experience</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70">
              Academic and independent projects that allowed me to apply business, strategy, and
              analytics beyond lectures and assignments.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-edit divide-y divide-ink/10 py-8">
          {projects.map((p) => (
            <Reveal key={p.slug} className="py-16 first:pt-16 sm:py-20">
              <Link to={`/projects/${p.slug}`} className="group block">
                <p className="inline-block rounded-full bg-olive-deep px-3 py-1 text-[0.65rem] uppercase tracking-wide text-cream">
                  {p.recommendation}
                </p>
                <h2 className="mt-4 max-w-2xl font-display text-2xl italic leading-snug text-ink group-hover:text-olive-deep sm:text-3xl">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm text-stone">{p.category} &middot; {p.context}</p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone">{p.hook}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm text-ink underline decoration-ink/20 underline-offset-4 group-hover:decoration-spark-deep">
                  Read the project
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
