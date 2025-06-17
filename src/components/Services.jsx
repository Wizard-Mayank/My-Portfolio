// src/components/Services.jsx
import React from "react";
import { FaLaptopCode, FaHandshake, FaChalkboardTeacher } from "react-icons/fa";

const services = [
  {
    title: "Freelance Development",
    icon: <FaLaptopCode size={32} />,
    description:
      "Custom web applications, SPA, and PWA solutions tailored to your business needs.",
  },
  {
    title: "Consulting",
    icon: <FaHandshake size={32} />,
    description:
      "Architecture reviews, performance audits, and best-practice guidance to optimize your projects.",
  },
  {
    title: "Mentoring",
    icon: <FaChalkboardTeacher size={32} />,
    description:
      "One-on-one coaching sessions on JavaScript, React, Tailwind, and modern web development.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-zinc-950 text-center">
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-10">
        Services Offered
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {services.map((s) => (
          <div key={s.title} className="glow-card p-6 flex flex-col items-center">
            <div className="text-accent mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
              {s.title}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
