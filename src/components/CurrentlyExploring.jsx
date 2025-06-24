import React from "react";
import { motion } from "framer-motion";

const topics = [
  "🖐️ Computer Vision with OpenCV",
  "🧠 TensorFlow for Hand Gesture Recognition",
  "🎯 Lenis.js & GSAP ScrollSync",
  "⚡ Next.js App Router & Server Actions",
];

const listItemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const CurrentlyExploring = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center mt-32 px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Clean themed heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-semibold tracking-wide text-black dark:text-white text-center mb-12 font-tech"
      >
        🚀 Currently Exploring
      </motion.h2>

      {/* Glowing glass card */}
      <div className="relative group rounded-2xl p-6 bg-black/40 backdrop-blur-lg shadow-[0_0_30px_#00FFFF22] hover:shadow-[0_0_50px_#00FFFF66] transition-all duration-500 overflow-visible w-full sm:max-w-3xl">
        <ul className="exploring-list relative z-10">
          {topics.map((topic, index) => (
            <motion.li
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={listItemVariants}
              className="text-white text-lg md:text-xl font-medium font-tech tracking-wide mb-6 last:mb-0 relative px-2 hover:scale-105 hover:text-cyan-300 transition duration-300"
            >
              <span className="relative z-20">{topic}</span>
              <span className="absolute inset-0 rounded-md bg-cyan-400 opacity-0 blur-md scale-105 group-hover:opacity-10 transition duration-300" />
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CurrentlyExploring;
