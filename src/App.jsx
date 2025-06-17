import { useState, useEffect } from "react";
import AboutHighlights from "./components/AboutHighlights";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Achievements from "./components/Achievements";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Stats from "./components/Stats";
import TimelineResume from "./components/TimelineResume";
import SmoothScroll from "./components/SmoothScroll";
import FloatingParticles from "./components/FloatingParticles";
import CustomCursor from "./components/CustomCursor";
import Reveal from "./components/Reveal";
import Hero from "./components/Hero";
import InteractiveTerminal from "./components/InteractiveTerminal";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import "./utils/lenis";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);

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
          <Services />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <Blog />
        </Reveal>
        <Reveal>
          <Achievements />
        </Reveal>
        <Reveal>
          <SocialLinks />
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
        <Reveal>
          <TimelineResume />
        </Reveal>
      </div>

      {/* Interactive Terminal Contact Section */}
      <InteractiveTerminal />

      {/* Footer */}
      <Footer />

      {/* Back To Top Button */}
      <BackToTop />
    </div>
  );
}

export default App;
