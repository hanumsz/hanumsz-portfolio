import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const base =
  "inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-10px_rgba(240,117,47,0.45)] active:translate-y-0 active:scale-[0.97] active:duration-75";

const variants = {
  primary: "bg-ink text-cream hover:bg-spark hover:text-ink",
  inverse: "bg-cream text-ink hover:bg-spark hover:text-ink",
  outline: "border border-ink/25 text-ink hover:border-spark hover:bg-spark hover:text-ink",
  "outline-light": "border border-cream/40 text-cream hover:border-cream hover:bg-cream hover:text-ink",
};

export default function Button({ to, href, download, variant = "primary", icon = true, className = "", children, onClick }) {
  const cls = `${base} ${variants[variant] ?? variants.primary} ${className}`;
  const content = (
    <>
      {children}
      {icon && <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${cls}`} onClick={onClick}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} download={download} className={`group ${cls}`} target={download ? undefined : "_blank"} rel={download ? undefined : "noreferrer"} onClick={onClick}>
      {content}
    </a>
  );
}
