import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Mail } from "lucide-react";
import Reveal from "../components/Reveal";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import Lightbox from "../components/Lightbox";
import Button from "../components/Button";
import BlurBlobs from "../components/BlurBlobs";
import CompetitionHero from "../components/hero/CompetitionHero";
import { getCompetition } from "../data/competitions";

function SectionLabel({ n, children }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="font-display text-sm text-olive-dust">{n}</span>
      <span className="text-xs uppercase tracking-[0.18em] text-stone">{children}</span>
    </div>
  );
}

export default function CompetitionDetail() {
  const { slug } = useParams();
  const c = getCompetition(slug);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!c) return <Navigate to="/competitions" replace />;

  return (
    <div>
      <section className="relative overflow-hidden bg-ink pt-40 pb-16 text-cream sm:pt-48">
        <BlurBlobs variant="blue" opacity={0.4} />
        <div className="container-edit relative">
          <Reveal>
            <Link to="/competitions" className="text-xs uppercase tracking-[0.18em] text-cream/50 hover:text-spark">
              &larr; Case Competitions
            </Link>
          </Reveal>
          <Reveal delay={0.06} className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-spark px-3 py-1 text-[0.65rem] uppercase tracking-wide text-ink">{c.result}</span>
            <span className="text-xs uppercase tracking-[0.16em] text-cream/50">{c.competition} &middot; {c.host}</span>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="mt-5 max-w-3xl font-display text-3xl italic leading-tight sm:text-5xl">{c.title}</h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70">{c.hook}</p>
          </Reveal>
          {c.team.length > 0 && (
            <Reveal delay={0.24} className="mt-8 border-t border-cream/15 pt-6 text-sm text-cream/70">
              Team: {c.team.join(", ")}
            </Reveal>
          )}
        </div>
      </section>

      <Reveal as="section" className="bg-cream">
        <div className="container-edit py-4">
          <CompetitionHero slug={c.slug} variant="detail" className="aspect-[16/9] w-full" />
        </div>
      </Reveal>

      <section className="bg-cream">
        <div className="container-edit grid grid-cols-1 gap-14 py-20 sm:py-24 lg:grid-cols-2">
          <Reveal>
            <SectionLabel n="01">Challenge</SectionLabel>
            <p className="text-base leading-relaxed text-ink/85">{c.challenge}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionLabel n="02">Research</SectionLabel>
            <p className="text-base leading-relaxed text-ink/85">{c.research}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-olive-deep text-cream">
        <div className="container-edit grid grid-cols-1 gap-14 py-20 sm:py-24 lg:grid-cols-2">
          <Reveal>
            <SectionLabel n="03">Framework</SectionLabel>
            <p className="text-base leading-relaxed text-cream/85">{c.framework}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionLabel n="04">Final Solution</SectionLabel>
            <p className="text-base leading-relaxed text-cream/85">{c.solution}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-edit py-20 sm:py-24">
          <Reveal>
            <SectionLabel n="05">Impact</SectionLabel>
            <ul className="mt-2 space-y-3">
              {c.impact.map((line) => (
                <li key={line} className="flex items-start gap-3 text-base leading-relaxed text-ink/85">
                  <span className="spark-mark mt-1.5 text-spark-deep" />
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-dim">
        <div className="container-edit py-20 sm:py-24">
          <Reveal>
            <SectionLabel n="06">Final Presentation</SectionLabel>
          </Reveal>
          {c.gallery?.length > 0 && (
            <>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {c.gallery.map((img, i) => (
                  <Reveal key={img.key} delay={i * 0.06}>
                    <button onClick={() => setLightboxIndex(i)} className="group block w-full text-left" aria-label={`Open photo: ${img.caption}`}>
                      <PhotoPlaceholder id={img.key} label={img.caption} tone={i % 2 === 0 ? "olive" : "cream"} className="aspect-[4/3] w-full rounded-sm transition-transform duration-500 group-hover:scale-[1.04]" />
                    </button>
                  </Reveal>
                ))}
              </div>
              <Lightbox images={c.gallery} index={lightboxIndex} onClose={() => setLightboxIndex(null)} onNavigate={setLightboxIndex} />
            </>
          )}

          <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center gap-4">
            {c.downloads.map((d) =>
              d.href ? (
                <Button key={d.label} href={d.href} download variant="outline">
                  {d.label}
                </Button>
              ) : (
                <a key={d.label} href="mailto:hanumsz26@outlook.com" className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3.5 text-sm text-ink hover:border-ink">
                  <Mail size={15} /> {d.label} &mdash; {d.note}
                </a>
              )
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
