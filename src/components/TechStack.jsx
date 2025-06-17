// src/components/TechStack.jsx
import React from "react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiFramer } from "react-icons/si";

const techs = [
  { name: "React", icon: <FaReact size={40} /> },
  { name: "Node.js", icon: <FaNodeJs size={40} /> },
  { name: "JavaScript", icon: <SiJavascript size={40} /> },
  { name: "TypeScript", icon: <SiTypescript size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
  { name: "Framer Motion", icon: <SiFramer size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-white dark:bg-black text-center">
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-10">
        Tech Stack
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {techs.map((tech) => (
          <div key={tech.name} className="glow-card p-6 flex flex-col items-center justify-center">
            <div className="text-accent mb-4">{tech.icon}</div>
            <span className="mt-2 text-sm font-medium text-zinc-900 dark:text-white">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
