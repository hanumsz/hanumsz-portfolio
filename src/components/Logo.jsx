import { useState } from "react";

const TONES = {
  light: "border-ink/10 bg-paper",
  dark: "border-cream/15 bg-cream",
};

// Renders an organization/client logo badge, or nothing at all if the file
// isn't there yet -- never a broken-image icon.
export default function Logo({ src, alt, tone = "light", className = "h-12 w-12" }) {
  const [errored, setErrored] = useState(false);
  if (!src || errored) return null;

  return (
    <span className={`flex shrink-0 items-center justify-center rounded-sm border p-2 ${TONES[tone]} ${className}`}>
      <img src={src} alt={alt} onError={() => setErrored(true)} className="h-full w-full object-contain" />
    </span>
  );
}
