import { useEffect, useState } from "react";

const Navbar = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-white/60 dark:bg-black/60 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-zinc-800 dark:text-white">Mayank</h1>
        <div className="flex items-center gap-6">
          <ul className="flex gap-6 text-sm font-medium text-zinc-700 dark:text-zinc-300 list-none">
            <li>
              <a href="#home" className="hover:text-sky-500 transition-colors px-1">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-sky-500 transition-colors px-1">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-sky-500 transition-colors px-1">Projects</a>
            </li>
          </ul>
          <button
            onClick={toggleTheme}
            className="bg-zinc-200 dark:bg-zinc-700 px-2 py-1 rounded-md text-xs transition-colors duration-200"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
