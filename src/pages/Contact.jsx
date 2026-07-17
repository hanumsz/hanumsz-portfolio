import { Mail } from "lucide-react";
import Reveal from "../components/Reveal";
import PhotoPlaceholder from "../components/PhotoPlaceholder";
import Button from "../components/Button";
import LinkedInIcon from "../components/LinkedInIcon";
import BlurBlobs from "../components/BlurBlobs";

export default function Contact() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink pt-40 pb-24 text-cream sm:pt-48 sm:pb-32">
        <BlurBlobs variant="blue" opacity={0.4} />
        <div className="container-edit relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.2em] text-cream/50">Contact</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 max-w-lg font-display text-3xl italic leading-tight sm:text-5xl">
                Ready to build something with <span className="text-spark">lasting value</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-md text-base leading-relaxed text-cream/70">
                I'm always glad to connect, exchange ideas, or discuss opportunities across strategy,
                analytics, finance, marketing, and education. The fastest way to reach me is email.
              </p>
            </Reveal>

            <Reveal delay={0.24} className="mt-10 space-y-4">
              <a href="mailto:hanumsz26@outlook.com" className="group flex items-center gap-4 rounded-sm border border-cream/15 p-5 transition-colors hover:border-spark">
                <span className="rounded-full bg-cream/10 p-3 text-spark"><Mail size={18} /></span>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-cream/45">Email</p>
                  <p className="mt-0.5 text-sm text-cream group-hover:text-spark">hanumsz26@outlook.com</p>
                </div>
              </a>
              <a href="https://linkedin.com/in/hanumsz" target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-sm border border-cream/15 p-5 transition-colors hover:border-spark">
                <span className="rounded-full bg-cream/10 p-3 text-spark"><LinkedInIcon size={18} /></span>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-cream/45">LinkedIn</p>
                  <p className="mt-0.5 text-sm text-cream group-hover:text-spark">linkedin.com/in/hanumsz</p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.3} className="mt-8">
              <Button href="/downloads/Hanum-Zahrani-Resume.pdf" download variant="outline-light">
                Download Resume (PDF)
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={30}>
            <PhotoPlaceholder
              id="portrait-contact"
              label="Hanum Sukma Zahrani &middot; Toronto, ON"
              tone="olive"
              className="aspect-[4/5] w-full max-w-md rounded-sm shadow-[0_40px_80px_-30px_rgba(0,0,0,0.55)] lg:ml-auto"
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
