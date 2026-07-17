import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import BlurBlobs from "../components/BlurBlobs";
import CompetitionHero from "../components/hero/CompetitionHero";
import { competitions } from "../data/competitions";

export default function Competitions() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink pt-40 pb-20 text-cream sm:pt-48">
        <BlurBlobs variant="blue" opacity={0.4} />
        <div className="container-edit relative">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-cream/50">Case Competitions</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl font-display text-3xl italic leading-tight sm:text-5xl">
              From ambiguity to <span className="text-spark">actionable strategy</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70">
              Each competition presented a unique business challenge—from consulting and entrepreneurship
              to human resources and international business. Working under tight deadlines, I developed
              evidence-based recommendations by combining structured problem-solving, strategic thinking,
              and collaboration.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-edit grid grid-cols-1 gap-6 py-20 sm:py-24 lg:grid-cols-3">
          {competitions.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08}>
              <Link to={`/competitions/${c.slug}`} className="group block h-full">
                <CompetitionHero slug={c.slug} variant="card" className="aspect-[4/5] w-full" />
                <div className="mt-5">
                  <p className="inline-block rounded-full bg-olive-deep px-3 py-1 text-[0.65rem] uppercase tracking-wide text-cream">{c.result}</p>
                  <h2 className="mt-4 font-display text-xl italic leading-snug text-ink group-hover:text-olive-deep">{c.competition}</h2>
                  <p className="mt-2 text-sm text-stone">{c.host}</p>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{c.hook}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
