import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Canvas background (FloatingParticles mounts behind) */}
      <div className="absolute inset-0 -z-10" />

      <motion.div className="text-center px-4">
        {/* Masked gradient headline */}
        <motion.h1
          style={{ y: headingY }}
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            scale: { duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
          }}
          className="gradient-mask text-5xl md:text-7xl font-extrabold mb-6"
        >
          Hey, I’m Mayank Pandey
        </motion.h1>

        {/* Subheading with type animation */}
        <motion.p
          style={{ y: subtitleY, opacity }}
          className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 mb-8 max-w-2xl mx-auto"
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

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="cta-btn"
          >
            View Projects
          </button>
          <a
            href="/Mayank_Resume.pdf"
            download
            className="cta-btn"
          >
            Download Resume
          </a>
        </div>

        {/* Scroll‑Down Cue */}
        <div className="scroll-cue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
