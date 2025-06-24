import { useState, useEffect } from "react";
import AboutHighlights from "./components/AboutHighlights";
import TechStack from "./components/TechStack";
import Achievements from "./components/Achievements";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Stats from "./components/Stats";
import SmoothScroll from "./components/SmoothScroll";
import FloatingParticles from "./components/FloatingParticles";
import CustomCursor from "./components/CustomCursor";
import Reveal from "./components/Reveal";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./utils/lenis";
import Contact from "./components/Contact";
import CurrentlyExploring from "./components/CurrentlyExploring.jsx";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    console.clear();
    console.log(
      "%c🚀 Welcome, Dev!",
      "color: #00ffc3; font-size: 16px; font-weight: bold; background: #000; padding: 4px;"
    );
    console.log(
      "%cThis portfolio was built with ✨ vibe coding + ChatGPT fire 🔥",
      "color: #14b8a6; font-size: 12px;"
    );
    console.log("%cMade by Mayank · 2025", "color: #999; font-size: 10px;");
  }, []);

  return (
    <div className="relative overflow-x-hidden bg-white text-black dark:bg-black dark:text-white">
      {/* Smooth scroll & animations */}
      <SmoothScroll />
      <FloatingParticles />
      <CustomCursor />
      <Navbar theme={theme} setTheme={setTheme} />

      <div className="min-h-screen">
        {/* Hero Section */}
        <Hero />

        {/* Main Sections */}
        <Reveal>
          <AboutHighlights />
        </Reveal>
        <Reveal>
          <TechStack />
        </Reveal>
        <Reveal>
          <CurrentlyExploring />
        </Reveal>
        <Reveal>
          <Achievements />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Stats />
        </Reveal>
      </div>

      <Reveal>
        <Contact />
      </Reveal>

      <Reveal>
        <SocialLinks />
      </Reveal>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
