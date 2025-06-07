import { motion } from "framer-motion";
import Reveal from "./Reveal";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Git", "GitHub"
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="text-4xl font-bold text-center mb-10"
        >
          About Me
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4 }} 
          className="text-center max-w-3xl mx-auto text-lg text-zinc-600 dark:text-zinc-300"
        >
          I’m a passionate front-end developer crafting visually appealing, performance-driven web experiences. My toolkit includes modern JavaScript frameworks, CSS systems, and a love for seamless UX.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.6 }} 
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={index}
              className="bg-zinc-100 dark:bg-zinc-800 text-center py-4 rounded-xl shadow-md transition duration-300"
            >
              <span className="text-base font-semibold text-zinc-800 dark:text-white">
                {skill}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
