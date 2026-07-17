import { useState } from "react";
import Reveal from "./Reveal";

const LOGOS = [
  { src: "/images/logos/uoft.png", alt: "University of Toronto", href: "https://www.utoronto.ca" },
  { src: "/images/logos/rotman-commerce.png", alt: "Rotman Commerce", href: "https://rotmancommerce.utoronto.ca/" },
  {
    src: "/images/logos/180dc.png",
    alt: "180 Degrees Consulting",
    href: "https://www.linkedin.com/company/180-degrees-consulting-university-of-toronto/",
  },
  { src: "/images/logos/aiesec.jpg", alt: "AIESEC", href: "https://ca.linkedin.com/company/aiesec-in-toronto" },
  {
    src: "/images/logos/rotman-npn.webp",
    alt: "Rotman Commerce Non-Profit Network",
    href: "https://rc-npn.wixsite.com/rcnpn",
  },
  {
    src: "/images/logos/new-college.png",
    alt: "New College, University of Toronto",
    href: "https://www.newcollege.utoronto.ca/",
  },
  { src: "/images/logos/hawkbridge.png", alt: "Hawkbridge Capital Partners", href: "https://www.hawkbridgepartners.com/" },
  { src: "/images/logos/otw-cafe.webp", alt: "Out of This World Cafe & Catering", href: "https://www.otwcafe.com/" },
  { src: "/images/logos/woodsworth-tax-clinic.png", alt: "Woodsworth Cooperative Tax Clinic", href: "https://woodsworthtax.ca/" },
];

function LogoImg({ logo }) {
  const [errored, setErrored] = useState(false);
  if (errored) return null;

  return (
    <a
      href={logo.href}
      target="_blank"
      rel="noreferrer"
      title={`Visit ${logo.alt}`}
      className="flex shrink-0 items-center"
    >
      <img
        src={logo.src}
        alt={logo.alt}
        onError={() => setErrored(true)}
        className="h-8 w-auto max-w-[9rem] object-contain opacity-55 grayscale transition-all duration-300 ease-out hover:scale-105 hover:opacity-100 hover:grayscale-0 hover:drop-shadow-[0_6px_14px_rgba(62,118,176,0.35)] sm:h-10"
      />
    </a>
  );
}

export default function LogoStrip({ className = "" }) {
  return (
    <Reveal className={className}>
      <p className="text-center text-xs uppercase tracking-[0.2em] text-stone sm:text-left">
        Where I have worked and led
      </p>
      <div className="marquee-group marquee-fade relative mt-6 overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-x-14 sm:gap-x-20">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <LogoImg key={`${logo.alt}-${i}`} logo={logo} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
