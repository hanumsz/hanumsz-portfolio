import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const LINKS = [
  { to: "/approach", label: "Explore My Expertise" },
  { to: "/work", label: "My Work" },
  { to: "/experience/organizational", label: "Organizational" },
  { to: "/experience/professional", label: "Professional" },
  { to: "/competitions", label: "Case Competitions" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const solid = scrolled || !isHome || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(27,26,19,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="container-edit flex h-20 items-center justify-between">
        <NavLink
          to="/"
          className={`font-display text-lg font-semibold tracking-tight transition-colors ${
            solid ? "text-ink" : "text-cream"
          }`}
        >
          Hanum Zahrani
        </NavLink>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${
                  solid ? "text-ink/70 hover:text-ink" : "text-cream/80 hover:text-cream"
                } ${isActive ? (solid ? "text-ink" : "text-cream") : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="/downloads/Hanum-Zahrani-Resume.pdf"
            download
            className={`inline-flex items-center gap-1 rounded-full border px-4 py-2 text-sm transition-colors ${
              solid
                ? "border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-cream"
                : "border-cream/40 text-cream hover:border-cream hover:bg-cream hover:text-ink"
            }`}
          >
            Resume <ArrowUpRight size={14} />
          </a>
        </nav>

        <button
          className={`inline-flex items-center justify-center rounded-full p-2 lg:hidden ${
            solid ? "text-ink" : "text-cream"
          }`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-cream lg:hidden"
          >
            <div className="container-edit flex flex-col gap-1 pb-8 pt-2">
              {LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="border-b border-ink/10 py-4 text-lg text-ink"
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href="/downloads/Hanum-Zahrani-Resume.pdf"
                download
                className="mt-6 inline-flex w-fit items-center gap-1 rounded-full border border-ink/20 px-5 py-3 text-sm text-ink"
              >
                Download Resume <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
