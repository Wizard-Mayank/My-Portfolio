import { useEffect, useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      console.log("dark theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("light theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-white/60 dark:bg-black/60 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-zinc-800 dark:text-white">
          Mayank
        </h1>

        <ul className="flex gap-6 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          <li>
            <a href="#home" className="hover:text-sky-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-sky-500">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-sky-500">
              Projects
            </a>
          </li>
        </ul>

        <button
  onClick={() => setDarkMode(!darkMode)}
  className="bg-zinc-200 dark:bg-zinc-700 px-2 py-1 rounded-md text-xs transition-colors duration-200"
  style={{ color: darkMode ? '#f3f4f6' : '#1f2937' }}
>
  {darkMode ? "☀️ Light" : "🌙 Dark"}
</button>

      </div>
    </nav>
  );
};

export default Navbar;
