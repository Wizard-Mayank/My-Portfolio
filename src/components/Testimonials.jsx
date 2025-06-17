// src/components/Testimonials.jsx
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Product Manager at TechCorp",
    quote:
      "Mayank delivered exceptional web applications under tight deadlines. His attention to detail is unmatched!",
  },
  {
    name: "Bob Smith",
    role: "CTO at DevSolutions",
    quote:
      "A true professional—Mayank’s code is clean, performant, and beautifully designed. Highly recommended.",
  },
  {
    name: "Carol Lee",
    role: "Founder at Startify",
    quote:
      "Working with Mayank was a game-changer for our startup. He brought our vision to life with his expertise and creativity.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-black text-center">
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-10">
        Testimonials
      </h2>
      <div className="max-w-4xl mx-auto space-y-8 px-4">
        {testimonials.map((t, idx) => (
          <div key={idx} className="glow-card p-6 relative">
            <FaQuoteLeft className="text-accent text-2xl absolute top-4 left-4" />
            <p className="text-zinc-700 dark:text-zinc-300 mb-4 italic">
              “{t.quote}”
            </p>
            <FaQuoteRight className="text-accent text-2xl absolute bottom-4 right-4" />
            <div className="mt-4 font-semibold text-zinc-900 dark:text-white">
              {t.name}
            </div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400">
              {t.role}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
