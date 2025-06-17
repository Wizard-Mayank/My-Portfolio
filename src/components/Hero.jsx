// src/components/Hero.jsx
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
  );
};

export default Hero;
