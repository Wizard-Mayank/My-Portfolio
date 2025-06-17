// src/components/AboutHighlights.jsx
import React from "react";
import { TypeAnimation } from "react-type-animation";

const highlights = [
  "Full‑Stack Developer 🚀",
  "5+ Years of Web Experience 💻",
  "Performance‑Obsessed ⚡️",
  "High‑Aesthetic UIs 🎨",
  "Let’s build something epic! 🔥",
];

export default function AboutHighlights() {
  return (
    <section
      id="about-highlights"
      className="py-20 bg-gray-50 dark:bg-zinc-950 text-center"
    >
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
        10‑Second About Me
      </h2>
      <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
        <TypeAnimation
          sequence={[
            highlights[0], 2000,
            highlights[1], 2000,
            highlights[2], 2000,
            highlights[3], 2000,
            highlights[4], 2000,
          ]}
          speed={40}
          wrapper="span"
          cursor={false}
          repeat={0}
        />
      </p>
    </section>
  );
}
