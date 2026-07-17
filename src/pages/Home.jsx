import { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import AnimatedCounter from "../components/AnimatedCounter";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import LogoStrip from "../components/LogoStrip";
import BlurBlobs from "../components/BlurBlobs";
import { heroStats } from "../data/stats";
import { pillars } from "../data/approach";
import { caseStudies } from "../data/caseStudies";

const FEATURED_SLUGS = ["stem-startup-gtm", "consulting-community-marketing", "international-learning-experiences"];

function HeroPortrait() {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 150, damping: 20 });
  const shiftX = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });
  const shiftY = useSpring(useTransform(y, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ perspective: 1000 }}
      className="relative mx-auto w-full max-w-md"
    >
      <motion.div style={{ rotateX, rotateY }} className="relative">
        <motion.div style={{ x: shiftX, y: shiftY }}>
          <PhotoPlaceholder
            id="portrait-hero"
            label="Hanum Sukma Zahrani"
            tone="olive"
            eager
            className="aspect-[4/5] w-full rounded-sm shadow-[0_40px_80px_-30px_rgba(0,0,0,0.55)]"
          />
        </motion.div>
        <motion.div
          style={{ x: shiftX, y: shiftY }}
          className="pointer-events-none absolute -bottom-5 -left-5 hidden w-40 rounded-sm border border-cream/25 bg-ink-soft p-4 sm:block"
        >
          <p className="font-display text-sm italic text-spark">Rotman Commerce</p>
          <p className="mt-1 text-xs text-cream/70">Management Specialist, University of Toronto</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <HeroSection>
        <BlurBlobs variant="blue" opacity={0.55} />
        <AmbientLines />
        <div className="container-edit relative grid grid-cols-1 items-center gap-16 py-36 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div>
            <Reveal>
              <div className="mb-7 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cream/60">
                <span className="spark-mark text-spark" />
                Strategy &middot; Analytics &middot; Marketing &middot; Finance
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="max-w-2xl font-sans text-[2.75rem] font-semibold leading-[1.06] tracking-tight text-cream sm:text-6xl lg:text-[4.2rem]">
                Turning complexity into strategy.
                <br />
                <span className="italic-accent text-spark">Turning strategy into impact.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
                I believe curiosity sparks the best ideas, thoughtful analysis refines them, and action
                brings them to life. By combining strategy, analytics, marketing, and finance, I enjoy
                transforming complex business challenges into practical solutions that create lasting value.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="mt-10 flex flex-wrap items-center gap-4">
              <Button to="/work" variant="inverse">View My Work</Button>
              <Button href="/downloads/Hanum-Zahrani-Resume.pdf" download variant="outline-light">
                Download Resume (PDF)
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={40}>
            <HeroPortrait />
          </Reveal>
        </div>

        <div className="absolute inset-x-0 bottom-8 hidden justify-center sm:flex">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="h-9 w-5 rounded-full border border-cream/30 p-1"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-spark" />
          </motion.div>
        </div>
      </HeroSection>

      {/* LOGO STRIP */}
      <section className="bg-cream">
        <div className="container-edit py-14">
          <LogoStrip />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-ink-soft text-cream">
        <div className="container-edit py-24">
          <Reveal>
            <h2 className="font-display text-2xl italic text-cream/90 sm:text-3xl">
              What the numbers <span className="text-spark">say</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {heroStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.06} className="border-t border-cream/15 pt-6">
                <div className="font-display text-5xl font-medium text-spark sm:text-6xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-3 text-sm text-cream/85">{stat.label}</p>
                <p className="mt-1 text-xs text-cream/45">{stat.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I THINK TEASER */}
      <section className="bg-cream">
        <div className="container-edit py-24 sm:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] text-stone">Explore My Expertise</p>
              <h2 className="mt-5 font-display text-3xl italic leading-snug text-ink sm:text-4xl">
                Every experience tells a different story.
              </h2>
              <div className="mt-8">
                <Button to="/approach" variant="outline">Explore my expertise</Button>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {pillars.map((p, i) => (
                <Reveal
                  key={p.id}
                  delay={i * 0.08}
                  className="group rounded-sm border border-ink/10 bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_20px_40px_-24px_rgba(27,26,19,0.35)]"
                >
                  <h3 className="font-display text-xl italic text-ink">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{p.line}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="relative overflow-hidden bg-olive-deep text-cream">
        <BlurBlobs variant="orange" opacity={0.35} />
        <div className="container-edit relative py-24 sm:py-32">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cream/50">Selected Work</p>
              <h2 className="mt-4 max-w-lg font-display text-3xl italic leading-snug sm:text-4xl">
                Experiences that reflect how I think, solve problems, and create value.
              </h2>
            </div>
            <Button to="/work" variant="outline-light">See all work</Button>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {FEATURED_SLUGS.map((slug, i) => {
              const cs = caseStudies.find((c) => c.slug === slug);
              return (
                <Reveal key={slug} delay={i * 0.08}>
                  <Link to={`/work/${slug}`} className="group block">
                    <PhotoPlaceholder
                      id={cs.heroImage}
                      label={cs.tag}
                      tone="olive"
                      className="aspect-[4/5] w-full rounded-sm transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <p className="mt-5 text-xs uppercase tracking-[0.14em] text-spark">{cs.tag}</p>
                    <h3 className="mt-2 font-display text-xl italic leading-snug text-cream group-hover:text-spark">
                      {cs.title}
                    </h3>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-cream">
        <div className="container-edit flex flex-col items-start justify-between gap-8 py-24 sm:flex-row sm:items-center">
          <Reveal>
            <h2 className="font-display text-3xl italic text-ink sm:text-4xl">Ready to talk about what comes next.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button to="/contact" variant="outline">Get in touch</Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function HeroSection({ children }) {
  const spotX = useMotionValue(-400);
  const spotY = useMotionValue(-400);
  const background = useMotionTemplate`radial-gradient(560px circle at ${spotX}px ${spotY}px, rgba(94,150,214,0.32), transparent 72%)`;

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    spotX.set(e.clientX - rect.left);
    spotY.set(e.clientY - rect.top);
  };

  return (
    <section
      onMouseMove={handleMove}
      className="relative flex min-h-screen items-center overflow-hidden bg-ink text-cream"
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ background }} aria-hidden="true" />
      {children}
    </section>
  );
}

function AmbientLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {Array.from({ length: 9 }).map((_, i) => {
        const y = 40 + i * 90;
        return (
          <path
            key={i}
            d={`M -50 ${y} C 250 ${y - 60}, 550 ${y + 70}, 850 ${y - 30} S 1250 ${y + 40}, 1300 ${y}`}
            fill="none"
            stroke={i === 4 ? "#F0752F" : "#2C3B5C"}
            strokeWidth={i === 4 ? 2 : 1}
            opacity={i === 4 ? 0.7 : 0.4}
          />
        );
      })}
    </svg>
  );
}
