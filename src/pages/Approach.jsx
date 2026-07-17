import Reveal from "../components/Reveal";
import BlurBlobs from "../components/BlurBlobs";
import ExpertiseExplorer from "../components/ExpertiseExplorer";
import { approachExplanation } from "../data/approach";

export default function Approach() {
  return (
    <div>
      <section className="relative overflow-hidden bg-ink pt-40 pb-24 text-cream sm:pt-48 sm:pb-32">
        <BlurBlobs variant="blue" opacity={0.4} />
        <div className="container-edit relative">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-cream/50">Explore My Expertise</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-3xl font-display text-3xl italic leading-tight text-cream sm:text-5xl">
              Every experience tells <span className="text-spark">a different story</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream/70 sm:text-lg">
              {approachExplanation}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-edit py-24 sm:py-28">
          <ExpertiseExplorer />
        </div>
      </section>
    </div>
  );
}
