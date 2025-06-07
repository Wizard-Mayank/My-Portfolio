import { useEffect, useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-white/60 dark:bg-black/60 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Left side: Logo / Name */}
        <h1 className="text-xl font-bold text-zinc-800 dark:text-white">Mayank</h1>

        {/* Right side: nav links + dark mode toggle */}
        <div className="flex items-center gap-6"
          style={{ marginRight: "2rem" }}  // <-- Here is the magic: add explicit right margin inline to push left
        >
          <ul className="flex flex-nowrap text-sm font-medium text-zinc-700 dark:text-zinc-300 list-none">
            <li className="mr-8 min-w-[60px]">
              <a href="#home" className="hover:text-sky-500 transition-colors px-1">
                Home
              </a>
            </li>
            <li className="mr-8 min-w-[60px]">
              <a href="#about" className="hover:text-sky-500 transition-colors px-1">
                About
              </a>
            </li>
            <li className="min-w-[60px]">
              <a href="#projects" className="hover:text-sky-500 transition-colors px-1">
                Projects
              </a>
            </li>
          </ul>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-zinc-200 dark:bg-zinc-700 px-2 py-1 rounded-md text-xs transition-colors duration-200"
            style={{ color: darkMode ? "#f3f4f6" : "#1f2937" }}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
