import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import Button from "../components/Button";
import LinkedInIcon from "../components/LinkedInIcon";
import InstagramIcon from "../components/InstagramIcon";
import Logo from "../components/Logo";
import BlurBlobs from "../components/BlurBlobs";
import { orgExperience } from "../data/orgExperience";

const SOCIAL_ICONS = { Instagram: InstagramIcon, LinkedIn: LinkedInIcon };

export default function OrgExperience() {
  const [openId, setOpenId] = useState("consult-for-impact");

  return (
    <div>
      <section className="relative overflow-hidden bg-ink pt-40 pb-20 text-cream sm:pt-48">
        <BlurBlobs variant="blue" opacity={0.4} />
        <div className="container-edit relative">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-cream/50">Organizational Experience</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl font-display text-3xl italic leading-tight sm:text-5xl">
              Building communities and creating <span className="text-spark">lasting impact</span> through leadership, strategy, and execution.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-edit py-20 sm:py-24">
          <div className="relative border-l border-ink/15 pl-8 sm:pl-12">
            {orgExperience.map((org, i) => (
              <TimelineCard key={org.id} org={org} isOpen={openId === org.id} onToggle={() => setOpenId((cur) => (cur === org.id ? null : org.id))} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function TimelineCard({ org, isOpen, onToggle, delay }) {
  return (
    <Reveal delay={delay} className="relative pb-14 last:pb-0">
      <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-olive-deep sm:-left-[calc(3rem+5px)]" />

      <button onClick={onToggle} className="group flex w-full items-start justify-between gap-4 text-left">
        <div className="flex min-w-0 items-start gap-4">
          <Logo src={org.logo} alt={`${org.org} logo`} className="mt-1 h-12 w-12 shrink-0" />
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.16em] text-stone">{org.timeframe}</p>
            <h2 className="mt-2 font-display text-2xl italic text-ink group-hover:text-olive-deep sm:text-3xl">{org.role}</h2>
            <p className="mt-1 text-sm text-stone">{org.org} &middot; {org.location}</p>
          </div>
        </div>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="mt-2 shrink-0 rounded-full border border-ink/15 p-2 text-ink/60">
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone">{org.summary}</p>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-8 grid grid-cols-1 gap-10 rounded-sm border border-ink/10 bg-paper p-6 sm:p-8 lg:grid-cols-2">
              <div>
                {org.linkedCaseStudies.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {org.linkedCaseStudies.map((slug) => (
                      <Button key={slug} to={`/work/${slug}`} variant="outline" className="!py-2 !px-4 text-xs">
                        Read the case study
                      </Button>
                    ))}
                  </div>
                )}
                {org.socials?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-4">
                    {org.socials.map((s) => {
                      const Icon = SOCIAL_ICONS[s.label];
                      return (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-stone hover:text-ink"
                        >
                          {Icon && <Icon size={14} />}
                          {s.label}
                          <ArrowUpRight size={11} />
                        </a>
                      );
                    })}
                  </div>
                )}
                {org.downloads?.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {org.downloads.map((d) => (
                      <Button key={d.label} href={d.href} download variant="outline" icon={false} className="!py-2 !px-4 text-xs">
                        {d.label}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
              {org.gallery.length > 0 && (
                <div className="grid grid-cols-2 gap-3 self-start">
                  {org.gallery.map((img) => (
                    <PhotoPlaceholder key={img.key} id={img.key} label={img.caption} tone="olive" className="aspect-square w-full rounded-sm" />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Reveal>
  );
}
