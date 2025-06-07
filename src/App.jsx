import About from "./components/About";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import Projects from "./components/Projects";
import Stats from "./components/Stats";
import TimelineResume from "./components/TimelineResume";
import SmoothScroll from "./components/SmoothScroll";
import "./utils/lenis"; // 💡 Only import, no need to use directly
import Reveal from "./components/Reveal";

function App() {
  return (
    <div className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white min-h-screen transition-colors duration-300">
      <Navbar />

      <SmoothScroll />

      <section id="home" className="h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            Hey, I'm <span className="text-sky-400">Mayank Pandey</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto">
            I craft high-aesthetic, performance-driven web experiences — scroll
            to explore my world.
          </p>
        </motion.div>
      </section>
      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <Stats />
      </Reveal>

      <Reveal>
        <TimelineResume />
      </Reveal>
    </div>
  );
}

export default App;
