import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import BlurBlobs from "../components/BlurBlobs";
import { caseStudies } from "../data/caseStudies";

export default function Work() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink pt-40 pb-20 text-cream sm:pt-48">
        <BlurBlobs variant="blue" opacity={0.4} />
        <div className="container-edit relative">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-cream/50">My Work</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl font-display text-3xl italic leading-tight sm:text-5xl">
              A closer look at <span className="text-spark">what I do</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70">
              Each story captures a different experience—from solving business problems to supporting
              students and leading teams.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-edit divide-y divide-ink/10 py-8">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} className="py-16 first:pt-16 sm:py-20">
              <Link
                to={`/work/${cs.slug}`}
                className={`group grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <PhotoPlaceholder
                  id={cs.heroImage}
                  label={cs.org}
                  tone={i % 2 === 0 ? "cream" : "olive"}
                  className="aspect-[4/3] w-full rounded-sm transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-stone">{cs.tag}</p>
                  <h2 className="mt-4 font-display text-2xl italic leading-snug text-ink group-hover:text-olive-deep sm:text-3xl">
                    {cs.title}
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-stone">{cs.hook}</p>
                  <div className="mt-6 flex flex-wrap gap-6">
                    {cs.quickStats.slice(0, 2).map((s) => (
                      <div key={s.label}>
                        <p className="font-display text-2xl text-olive-deep">{s.value}</p>
                        <p className="text-xs text-stone">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <span className="mt-8 inline-flex items-center gap-1 text-sm text-ink underline decoration-ink/20 underline-offset-4 group-hover:decoration-spark-deep">
                    Read the case study
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
