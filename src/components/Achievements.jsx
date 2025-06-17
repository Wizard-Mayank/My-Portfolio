// src/components/Achievements.jsx
import React from "react";
import { FaTrophy, FaNewspaper } from "react-icons/fa";
import { SiLeetcode, SiCoursera } from "react-icons/si";

const achievements = [
  {
    title: "LeetCode Top 5%",
    icon: <SiLeetcode size={32} />,
  },
  {
    title: "Coursera ML Specialization",
    icon: <SiCoursera size={32} />,
  },
  {
    title: "3× Hackathon Winner",
    icon: <FaTrophy size={32} />,
  },
  {
    title: "Published on Hacker News",
    icon: <FaNewspaper size={32} />,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-white dark:bg-black text-center">
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-10">
        Achievements & Certifications
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {achievements.map((a) => (
          <div key={a.title} className="glow-card p-6 flex flex-col items-center">
            <div className="text-accent mb-3">{a.icon}</div>
            <span className="mt-2 text-sm font-medium text-zinc-900 dark:text-white">
              {a.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
