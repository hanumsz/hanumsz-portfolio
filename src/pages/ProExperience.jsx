import Reveal from "../components/Reveal";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import Button from "../components/Button";
import Logo from "../components/Logo";
import BlurBlobs from "../components/BlurBlobs";
import { proExperience } from "../data/proExperience";

export default function ProExperience() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink pt-40 pb-20 text-cream sm:pt-48">
        <BlurBlobs variant="blue" opacity={0.4} />
        <div className="container-edit relative">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-cream/50">Professional Experience</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl font-display text-3xl italic leading-tight sm:text-5xl">
              Applying knowledge <span className="text-spark">beyond the classroom</span>.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-edit py-20 sm:py-24">
          <div className="space-y-24">
            {proExperience.map((job, i) => (
              <Reveal
                key={job.id}
                delay={i * 0.06}
                className={
                  job.image
                    ? `grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`
                    : "mx-auto max-w-2xl"
                }
              >
                {job.image && (
                  <PhotoPlaceholder id={job.image} label={job.org} tone={i % 2 === 0 ? "cream" : "olive"} className="aspect-[4/3] w-full rounded-sm" />
                )}
                <div>
                  <div className="flex items-center gap-4">
                    <Logo src={job.logo} alt={`${job.org} logo`} />
                    <p className="text-xs uppercase tracking-[0.16em] text-stone">{job.timeframe}</p>
                  </div>
                  <h2 className="mt-3 font-display text-2xl italic text-ink sm:text-3xl">{job.role}</h2>
                  <p className="mt-1 text-sm text-stone">{job.org} &middot; {job.location}</p>
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-stone">{job.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.focus.map((f) => (
                      <span key={f} className="rounded-full border border-ink/15 px-3 py-1.5 text-xs text-ink/70">
                        {f}
                      </span>
                    ))}
                  </div>
                  {job.linkedCaseStudy && (
                    <div className="mt-7">
                      <Button to={`/work/${job.linkedCaseStudy}`} variant="outline" className="!py-2.5 !px-5 text-xs">
                        Read the case study
                      </Button>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
