import { useState, useEffect } from "react";

import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Stats from "./components/Stats";
import TimelineResume from "./components/TimelineResume";
import SmoothScroll from "./components/SmoothScroll";
import FloatingParticles from "./components/FloatingParticles";
import Reveal from "./components/Reveal";
import "./utils/lenis";
import { motion } from "framer-motion";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-white text-black dark:bg-black dark:text-white">
      <FloatingParticles />
      <Navbar theme={theme} setTheme={setTheme} />
      <SmoothScroll />

      <section id="home" className="h-screen flex items-center justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-4 text-sky-400"
            animate={{
              textShadow: [
                "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff",
                "0 0 10px #06f, 0 0 20px #06f, 0 0 30px #06f",
                "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff",
              ],
            }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
          >
            Hey, I'm Mayank Pandey
          </motion.h1>
          <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            I craft high-aesthetic, performance-driven web experiences — scroll to explore my world.
          </p>
        </motion.div>
      </section>

      <Reveal><About /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><Stats /></Reveal>
      <Reveal><TimelineResume /></Reveal>
    </div>
  );
}

export default App;
