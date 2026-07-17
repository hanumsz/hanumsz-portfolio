import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Mail } from "lucide-react";
import Reveal from "../components/Reveal";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import Lightbox from "../components/Lightbox";
import Button from "../components/Button";
import InstagramEmbed from "../components/InstagramEmbed";
import Logo from "../components/Logo";
import BlurBlobs from "../components/BlurBlobs";
import { caseStudies, getCaseStudy } from "../data/caseStudies";

function SectionLabel({ n, children }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="font-display text-sm text-olive-dust">{n}</span>
      <span className="text-xs uppercase tracking-[0.18em] text-stone">{children}</span>
    </div>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const cs = getCaseStudy(slug);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!cs) return <Navigate to="/work" replace />;

  const currentIdx = caseStudies.findIndex((c) => c.slug === slug);
  const next = caseStudies[(currentIdx + 1) % caseStudies.length];

  return (
    <div>
      <section className="relative overflow-hidden bg-ink pt-40 pb-16 text-cream sm:pt-48">
        <BlurBlobs variant="blue" opacity={0.4} />
        <div className="container-edit relative">
          <Reveal>
            <Link to="/work" className="text-xs uppercase tracking-[0.18em] text-cream/50 hover:text-spark">
              &larr; My Work
            </Link>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-8 text-xs uppercase tracking-[0.18em] text-spark">{cs.tag}</p>
          </Reveal>
          <Reveal delay={0.12} className="mt-4 flex flex-wrap items-center gap-4">
            <Logo src={cs.clientLogo} alt="" tone="dark" />
            <h1 className="max-w-3xl font-display text-3xl italic leading-tight sm:text-5xl">{cs.title}</h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70">{cs.hook}</p>
          </Reveal>
          <Reveal delay={0.24} className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-cream/15 pt-8 text-sm">
            <div>
              <p className="text-cream/45">Organization</p>
              <p className="mt-1 text-cream/90">{cs.org}</p>
            </div>
            <div>
              <p className="text-cream/45">Role</p>
              <p className="mt-1 text-cream/90">{cs.role}</p>
            </div>
            <div>
              <p className="text-cream/45">Timeframe</p>
              <p className="mt-1 text-cream/90">{cs.timeframe}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal as="section" className="bg-cream">
        <div className="container-edit -mt-1 py-4">
          <PhotoPlaceholder id={cs.heroImage} label={cs.title} tone="olive" eager className="aspect-[16/9] w-full rounded-sm" />
        </div>
      </Reveal>

      <section className="bg-cream">
        <div className="container-edit grid grid-cols-1 gap-16 py-20 sm:py-24 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <SectionLabel n="01">Project Overview</SectionLabel>
            <p className="text-base leading-relaxed text-ink/85">{cs.overview}</p>
          </Reveal>
          <Reveal delay={0.08} className="grid grid-cols-3 gap-4 self-start lg:grid-cols-1 lg:gap-6">
            {cs.quickStats.map((s) => (
              <div key={s.label} className="rounded-sm border border-ink/10 bg-paper p-5">
                <p className="font-display text-3xl text-olive-deep">{s.value}</p>
                <p className="mt-1 text-xs text-stone">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-dim">
        <div className="container-edit grid grid-cols-1 gap-14 py-20 sm:py-24 lg:grid-cols-2">
          <Reveal>
            <SectionLabel n="02">The Challenge</SectionLabel>
            <p className="text-base leading-relaxed text-ink/85">{cs.challenge}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionLabel n="03">My Role</SectionLabel>
            <p className="text-base leading-relaxed text-ink/85">{cs.role_detail}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-edit py-20 sm:py-24">
          <Reveal className="max-w-2xl">
            <SectionLabel n="04">Research</SectionLabel>
            <p className="text-base leading-relaxed text-ink/85">{cs.research}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="container-edit py-20 sm:py-24">
          <Reveal>
            <SectionLabel n="05">Process</SectionLabel>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-cream/10 sm:grid-cols-2">
            {cs.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06} className="bg-ink p-8">
                <p className="font-display text-sm text-olive-dust">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-display text-lg italic text-cream">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-edit grid grid-cols-1 gap-14 py-20 sm:py-24 lg:grid-cols-2">
          <Reveal>
            <SectionLabel n="06">Deliverables</SectionLabel>
            <ul className="space-y-3">
              {cs.deliverables.length > 0 ? (
                cs.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm leading-relaxed text-ink/85">
                    <span className="spark-mark mt-1 text-spark-deep" />
                    {d}
                  </li>
                ))
              ) : (
                <li className="text-sm text-stone">Delivered as ongoing, iterative support rather than a fixed set of artifacts.</li>
              )}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionLabel n="07">Impact</SectionLabel>
            <p className="text-base leading-relaxed text-ink/85">{cs.impact}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-edit py-20 sm:py-24">
          {cs.gallery?.length > 0 && (
            <>
              <Reveal>
                <SectionLabel n="08">Gallery</SectionLabel>
              </Reveal>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {cs.gallery.map((img, i) => (
                  <Reveal key={img.key} delay={i * 0.06}>
                    <button onClick={() => setLightboxIndex(i)} className="group block w-full text-left" aria-label={`Open photo: ${img.caption}`}>
                      <PhotoPlaceholder
                        id={img.key}
                        label={img.caption}
                        tone={i % 2 === 0 ? "olive" : "cream"}
                        className="aspect-[4/3] w-full rounded-sm transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </button>
                  </Reveal>
                ))}
              </div>
              <Lightbox images={cs.gallery} index={lightboxIndex} onClose={() => setLightboxIndex(null)} onNavigate={setLightboxIndex} />
            </>
          )}

          {cs.media?.length > 0 && (
            <div className="mt-16">
              <p className="text-xs uppercase tracking-[0.18em] text-stone">Campaign Content</p>
              <div className="mt-6 grid grid-cols-1 items-start gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {cs.media.map((item, i) => (
                  <Reveal key={item.src} delay={i * 0.05} className="max-w-xs">
                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        controls
                        playsInline
                        className="aspect-[9/16] w-full rounded-sm border border-ink/10 bg-ink object-contain"
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={item.caption}
                        className="aspect-[4/5] w-full rounded-sm border border-ink/10 bg-ink object-cover"
                      />
                    )}
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                      <p className="text-sm text-stone">{item.caption}</p>
                      {item.instagramUrl && (
                        <a
                          href={item.instagramUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="shrink-0 text-xs uppercase tracking-[0.14em] text-olive-deep underline decoration-olive-deep/30 underline-offset-4 hover:text-spark-deep"
                        >
                          View on Instagram &rarr;
                        </a>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {cs.socialPosts?.length > 0 && (
            <div className="mt-16">
              <p className="text-xs uppercase tracking-[0.18em] text-stone">Live from Instagram</p>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cs.socialPosts.map((url, i) => (
                  <Reveal key={url} delay={i * 0.05}>
                    <InstagramEmbed url={url} />
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-cream-dim">
        <div className="container-edit py-20 sm:py-24">
          <Reveal>
            <SectionLabel n="09">Downloads & Links</SectionLabel>
            {cs.downloads.length > 0 ? (
              <ul className="space-y-4">
                {cs.downloads.map((d) => (
                  <li key={d.label} className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 pb-4">
                    <span className="text-sm text-ink">{d.label}</span>
                    {d.href && d.href.startsWith("http") ? (
                      <Button href={d.href} variant="outline" className="!py-2 !px-4 text-xs">
                        View
                      </Button>
                    ) : d.href ? (
                      <Button href={d.href} download variant="outline" icon={false} className="!py-2 !px-4 text-xs">
                        Download
                      </Button>
                    ) : (
                      <a href="mailto:hanumsz26@outlook.com" className="inline-flex items-center gap-1.5 text-xs text-stone hover:text-ink">
                        <Mail size={13} /> {d.note}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-stone">No downloadable assets for this project — reach out for more detail.</p>
            )}
          </Reveal>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="container-edit flex flex-col items-start justify-between gap-6 py-16 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-cream/50">Next</p>
            <p className="mt-2 font-display text-xl italic text-cream">{next.title}</p>
          </div>
          <Button to={`/work/${next.slug}`} variant="outline-light">Next case study</Button>
        </div>
      </section>
    </div>
  );
}
