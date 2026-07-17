import { motion } from "framer-motion";

const tags = {
  div: motion.div,
  section: motion.section,
  li: motion.li,
  article: motion.article,
  h1: motion.h1,
  h2: motion.h2,
  p: motion.p,
};

export default function Reveal({ children, delay = 0, y = 24, className = "", as = "div", ...props }) {
  const MotionTag = tags[as] ?? motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
