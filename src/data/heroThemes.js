// Each "system" is a background identity (colors + which atmospheric layers to
// use). The host logo is the hero; the system is the world it floats in.
export const SYSTEMS = {
  // Rotman Commerce International Business Association — globe/world motif.
  // Navy base + warm orange corner glow; the spotlight behind the logo is kept
  // neutral (pale cool white) rather than teal so the navy RCIBA/RCAG marks pop.
  international: {
    bgFrom: "#050B14",
    bgTo: "#0A1826",
    mesh: ["#1F3A5F", "#F0752F", "#5E7A9E"],
    dot: "#3E76B0",
    line: "#2A4A70",
    halo: "#EAF0F8",
    particle: "#93ACCE",
    particle2: "#F0752F",
    layers: ["mesh", "dotMatrix", "contours", "halo", "particles", "grain"],
    dotDensity: 22,
  },
  // Rotman Commerce Entrepreneurship Organization — electric blue + pink streak.
  entrepreneurship: {
    bgFrom: "#0A1230",
    bgTo: "#101B45",
    mesh: ["#3E76B0", "#F0752F", "#C86FD9"],
    dot: "#5E96D6",
    line: "#3E76B0",
    halo: "#F0752F",
    particle: "#5E96D6",
    particle2: "#F0752F",
    layers: ["mesh", "sweep", "contours", "halo", "particles", "grain"],
  },
  // RCHRA — people-focused, indigo/blue-purple, flowing network.
  hr: {
    bgFrom: "#100F2E",
    bgTo: "#1B1F4D",
    mesh: ["#5B6FE0", "#2FB8C6", "#7C8CF0"],
    dot: "#7C8CF0",
    line: "#4A55A8",
    halo: "#5B6FE0",
    particle: "#7C8CF0",
    particle2: "#2FD9E8",
    layers: ["mesh", "contours", "glass", "halo", "particles", "grain"],
  },
  // UWMCC — dark, digital, cyan dot matrix, tech depth.
  digital: {
    bgFrom: "#050708",
    bgTo: "#0C1416",
    mesh: ["#2FD9E8", "#1B3A3E", "#2FD9E8"],
    dot: "#2FD9E8",
    line: "#1F5257",
    halo: "#2FD9E8",
    particle: "#2FD9E8",
    particle2: "#F1F4F8",
    layers: ["mesh", "dotMatrix", "sweep", "particles", "grain"],
    dotDensity: 14,
  },
  // Bain & Company × RCCA — warm charcoal, bronze/gold, consulting luxury.
  luxury: {
    bgFrom: "#161314",
    bgTo: "#241A12",
    mesh: ["#C79A4B", "#5A4530", "#8A2E2E"],
    dot: "#C79A4B",
    line: "#8A6C3F",
    halo: "#D9AE63",
    particle: "#D9AE63",
    particle2: "#E05B4E",
    layers: ["mesh", "grid", "sweep", "halo", "particles", "grain"],
  },
  // Consulting Olympics (no host logo) — dark navy/charcoal so the teal GRC
  // mark doesn't blend into a mid-blue wash; gold stays the accent.
  classic: {
    bgFrom: "#0A0F1A",
    bgTo: "#141C2E",
    mesh: ["#24344A", "#D9AE63", "#5B6270"],
    dot: "#6B7A94",
    line: "#3A4A64",
    halo: "#D9AE63",
    particle: "#8FA0BC",
    particle2: "#D9AE63",
    layers: ["mesh", "grid", "contours", "halo", "particles", "grain"],
  },
};

export const HERO_THEMES = {
  "expanding-horizons-climateverse": {
    system: "international",
    caption: "Expanding Horizons Case Challenge",
    year: "2025",
    logos: [
      { src: "/images/logos/rciba.png", w: 128 },
      { src: "/images/logos/rcag.png", w: 62 },
    ],
  },
  "consulting-olympics-wateraid": {
    system: "classic",
    caption: "Consulting Olympics",
    year: "2025",
    logos: [{ src: "/images/logos/grc.png", w: 190 }],
  },
  "saudi-aramco-esg": {
    system: "digital",
    caption: "17th Annual Case Competition",
    year: "2026",
    logos: [{ src: "/images/logos/uwmcc.png", w: 160 }],
  },
  "boundless-brightline-marketing": {
    system: "entrepreneurship",
    caption: "Boundless Case Competition",
    year: "2026",
    logos: [{ src: "/images/logos/rceo.png", w: 210 }],
  },
  "rchra-hra-yes-prep-talentlink": {
    system: "hr",
    caption: "RCHRA × HRA Case Competition",
    year: "2025",
    logos: [{ src: "/images/logos/rchra.png", w: 150 }],
  },
  "rcca-bain-prime100-ask100": {
    system: "luxury",
    caption: "RCCA × Bain & Company",
    year: "2026",
    logos: [
      { src: "/images/logos/rcca.png", w: 108, rounded: true },
      { src: "/images/logos/bain.png", w: 118 },
    ],
  },
};

export const getHeroTheme = (slug) => {
  const wiring = HERO_THEMES[slug];
  if (!wiring) return null;
  return { ...SYSTEMS[wiring.system], ...wiring };
};
