import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PhotoPlaceholder from "./PhotoPlaceholder";

export default function Lightbox({ images, index, onClose, onNavigate }) {
  const open = index !== null && index !== undefined;

  const handleKey = useCallback(
    (e) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    },
    [open, index, images, onClose, onNavigate]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 sm:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Photo gallery"
        >
          <button
            onClick={onClose}
            className="absolute right-5 top-5 rounded-full p-2 text-cream/80 transition hover:text-spark"
            aria-label="Close gallery"
          >
            <X size={28} />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((index - 1 + images.length) % images.length);
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-cream/80 transition hover:text-spark sm:left-6"
                aria-label="Previous image"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((index + 1) % images.length);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-cream/80 transition hover:text-spark sm:right-6"
                aria-label="Next image"
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}

          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <PhotoPlaceholder
              id={images[index].key}
              label={images[index].caption}
              tone="ink"
              eager
              className="aspect-[4/3] w-full rounded-sm"
            />
            {images[index].caption && (
              <p className="mt-4 text-center font-display text-lg italic text-cream/90">
                {images[index].caption}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
