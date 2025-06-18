// src/components/TechStack.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";

const techs = [
  { name: "React", icon: <FaReact size={38} />, border: "border-cyan-400" },
  { name: "Node.js", icon: <FaNodeJs size={38} />, border: "border-emerald-400" },
  { name: "JavaScript", icon: <SiJavascript size={38} />, border: "border-yellow-400" },
  { name: "TypeScript", icon: <SiTypescript size={38} />, border: "border-blue-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={38} />, border: "border-teal-400" },
  { name: "Framer Motion", icon: <SiFramer size={38} />, border: "border-pink-400" },
  { name: "Git", icon: <FaGitAlt size={38} />, border: "border-red-400" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-white dark:bg-black text-center">
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12 underline-glow">
        Tech Stack
      </h2>

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-items-center">
          {techs.map((tech, index) => {
            const isLast = index === techs.length - 1;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Tooltip */}
                <div
                  className={[
                    "absolute scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none z-20",
                    // If last (Git), position top-left; else top-right
                    isLast
                      ? "top-0 left-0 transform -translate-x-full -translate-y-full"
                      : "top-0 right-0 transform translate-x-1/2 -translate-y-full",
                  ].join(" ")}
                >
                  <div
                    className="
                      px-3 py-1 text-xs text-white
                      bg-black/80 dark:bg-white/10 backdrop-blur-md
                      border border-white/10 rounded-md shadow-lg
                      neon-glow-tooltip whitespace-nowrap
                    "
                  >
                    {tech.name}
                  </div>
                </div>

                {/* Icon Box */}
                <div
                  className={`
                    glow-card
                    w-20 h-20 sm:w-24 sm:h-24
                    flex items-center justify-center
                    border-2 ${tech.border}
                    transition-transform duration-300
                    hover:scale-110
                  `}
                >
                  {tech.icon}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
