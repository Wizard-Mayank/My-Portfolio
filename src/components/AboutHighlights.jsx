import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const highlights = [
  "Full‑Stack Developer 🚀",
  "4+ Years of Web Experience 💻",
  "Performance‑Obsessed ⚡️",
  "High‑Aesthetic UIs 🎨",
  "Let’s build something epic! 🔥",
];

export default function AboutHighlights() {
  const [idx, setIdx] = useState(0);

  // cycle every 2.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((i) => (i + 1) % highlights.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="about-highlights"
      className="relative py-20 bg-gray-50 dark:bg-zinc-950 text-center overflow-hidden"
    >
      {/* Glow halo behind */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(0,255,195,0.1),_transparent_70%)]"></div>

      <h2 className="relative text-3xl font-bold text-zinc-900 dark:text-white mb-6 z-10">
        10‑Second About Me
      </h2>

      <div className="relative h-16 flex items-center justify-center z-10">
        <AnimatePresence mode="wait">
          <motion.span
            key={highlights[idx]}
            className="text-xl md:text-2xl font-medium text-zinc-700 dark:text-zinc-300 underline-glow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
          >
            {highlights[idx]}
          </motion.span>
        </AnimatePresence>
      </div>
    </section>
  );
}
