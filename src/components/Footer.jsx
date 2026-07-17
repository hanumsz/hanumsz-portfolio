import { Link } from "react-router-dom";
import { Mail, ArrowUpRight } from "lucide-react";
import LinkedInIcon from "./LinkedInIcon";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-edit py-20">
        <p className="max-w-2xl font-display text-2xl italic leading-snug text-cream/90 sm:text-3xl">
          Creating value. Solving problems.
          <br />
          Leaving things better than I found them.
        </p>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-cream/60">
          Thank you for exploring my work. Every project featured here reflects my commitment to
          solving meaningful business challenges through curiosity, analytical thinking, and
          collaboration. My goal is to transform ideas into measurable impact.
        </p>

        <div className="mt-16 grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div>
            <h3 className="text-xs uppercase tracking-[0.16em] text-cream/50">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/approach" className="hover:text-spark">My Expertise</Link></li>
              <li><Link to="/work" className="hover:text-spark">My Work</Link></li>
              <li><Link to="/skills" className="hover:text-spark">Skills</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.16em] text-cream/50">Experience</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/experience/organizational" className="hover:text-spark">Organizational</Link></li>
              <li><Link to="/experience/professional" className="hover:text-spark">Professional</Link></li>
              <li><Link to="/competitions" className="hover:text-spark">Case Competitions</Link></li>
              <li><Link to="/projects" className="hover:text-spark">Projects</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.16em] text-cream/50">Connect</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="https://linkedin.com/in/hanumsz" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-spark">
                  <LinkedInIcon size={14} /> LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:hanumsz26@outlook.com" className="inline-flex items-center gap-1.5 hover:text-spark">
                  <Mail size={14} /> Email
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.16em] text-cream/50">Resume</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="/downloads/Hanum-Zahrani-Resume.pdf" download className="inline-flex items-center gap-1.5 hover:text-spark">
                  Download PDF <ArrowUpRight size={13} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-cream/15 pt-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Hanum Sukma Zahrani</p>
          <p>Toronto, ON &middot; hanumsz26@outlook.com</p>
        </div>
      </div>
    </footer>
  );
}
