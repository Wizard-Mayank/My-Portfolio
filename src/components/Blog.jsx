// src/components/Blog.jsx
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const posts = [
  {
    title: "Optimizing React Performance in 2025",
    link: "https://yourblog.com/react-performance-2025",
    date: "June 10, 2025",
    summary:
      "A deep dive into the latest React techniques, from concurrent rendering to advanced memoization.",
  },
  {
    title: "Why Glassmorphism Works in Modern UIs",
    link: "https://yourblog.com/glassmorphism-modern-uis",
    date: "May 22, 2025",
    summary:
      "Exploring the rise of glassmorphic design trends and how to implement them for high-end interfaces.",
  },
  {
    title: "Mastering Tailwind CSS: Tips & Tricks",
    link: "https://yourblog.com/mastering-tailwind-tips",
    date: "April 30, 2025",
    summary:
      "50+ Tailwind CSS utilities you didn’t know existed, to speed up your workflow and polish your designs.",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-zinc-950 text-center">
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-10">
        Latest Articles
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {posts.map((post) => (
          <div key={post.link} className="glow-card p-6 text-left">
            <h3 className="text-xl font-semibold text-accent mb-2">{post.title}</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">{post.date}</p>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">
              {post.summary}
            </p>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent hover:underline"
            >
              Read More&nbsp;<FaExternalLinkAlt size={12} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
