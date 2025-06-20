import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = ({ theme, setTheme }) => {
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-white/60 dark:bg-black/60 border-b border-zinc-200 dark:border-zinc-800">
      <div className="relative max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Glitchy Logo */}
        <motion.h1
          className="text-xl font-bold text-zinc-800 dark:text-white relative glitch-logo"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Mayank
        </motion.h1>

        {/* Navigation Links + Theme Toggle */}
        <div className="flex items-center">
          <ul className="flex nav-links text-sm font-medium text-zinc-700 dark:text-zinc-300 list-none">
            <li>
              <a href="#home" className="hover:text-sky-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-sky-500 transition-colors">
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-sky-500 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-sky-500 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>

          <button
            onClick={toggleTheme}
            title="Try dark mode!"
            className="ml-6 px-3 py-1 rounded-md text-xs transition-colors duration-200 bg-zinc-200 dark:bg-zinc-700 flex items-center"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>

          {/* Floating 👆 emoji for light mode */}
          {theme === "light" && (
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: [0, -6, 0], opacity: 1 }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
              className="absolute top-[44px] right-[46px] text-[28px] pointer-events-none z-50"
              title="Try dark mode!"
            >
              👆
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;