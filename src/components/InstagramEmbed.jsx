import { useEffect, useRef, useState } from "react";

let scriptPromise = null;
function loadInstagramScript() {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.instgrm) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
  return scriptPromise;
}

// Renders a real Instagram post via Instagram's official embed widget.
export default function InstagramEmbed({ url, className = "" }) {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadInstagramScript().then(() => {
      if (cancelled) return;
      window.instgrm?.Embeds?.process();
      setLoaded(true);
    });
    return () => {
      cancelled = true;
    };
  }, [url]);

  return (
    <div ref={ref} className={`overflow-hidden rounded-sm border border-ink/10 bg-paper ${className}`}>
      {!loaded && (
        <div className="flex aspect-[4/5] items-center justify-center text-xs uppercase tracking-[0.14em] text-stone">
          Loading post…
        </div>
      )}
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ background: "#FFF", margin: 0, width: "100%", display: loaded ? undefined : "none" }}
      />
    </div>
  );
}
