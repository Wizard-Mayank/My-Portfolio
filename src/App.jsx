// src/App.jsx
import { useState, useEffect, useRef } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Stats from "./components/Stats";
import TimelineResume from "./components/TimelineResume";
import SmoothScroll from "./components/SmoothScroll";
import FloatingParticles from "./components/FloatingParticles";
import CustomCursor from "./components/CustomCursor";
import Reveal from "./components/Reveal";
import "./utils/lenis";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import InteractiveTerminal from "./components/InteractiveTerminal";
import Footer from "./components/Footer";


function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);

  // Parallax setup for Hero
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="relative overflow-x-hidden bg-white text-black dark:bg-black dark:text-white">
      <SmoothScroll />
      <FloatingParticles />
      <CustomCursor />
      <Navbar theme={theme} setTheme={setTheme} />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section
          id="home"
          ref={heroRef}
          className="h-screen flex items-center justify-center relative z-10"
        >
          <motion.div className="text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold mb-6 text-sky-400"
              style={{ y: headingY }}
              animate={{
                textShadow: [
                  "0 0 6px #f00, 0 0 12px #f00",
                  "0 0 6px #0ff, 0 0 12px #0ff",
                  "0 0 6px #0f0, 0 0 12px #0f0",
                  "0 0 6px #f00, 0 0 12px #f00",
                ],
                scale: [1, 1.02, 1],
              }}
              transition={{
                textShadow: {
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                },
                scale: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
              }}
            >
              Hey, I'm Mayank Pandey
            </motion.h1>

            <motion.p
              style={{ y: subtitleY, opacity }}
              className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto"
            >
              <TypeAnimation
                sequence={[
                  "I craft high-aesthetic, performance-driven web experiences.",
                  1000,
                  "Scroll to explore my world, one pixel at a time.",
                ]}
                speed={40}
                wrapper="span"
                cursor={true}
                repeat={0}
              />
            </motion.p>
          </motion.div>
        </section>

        {/* Main Content */}
        <Reveal><About /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Stats /></Reveal>
        <Reveal><TimelineResume /></Reveal>
      </div>

      {/* Terminal‑Style Contact Section */}
      <InteractiveTerminal />

      <Footer className="mt-16" />

    </div>
  );
}

export default App;
