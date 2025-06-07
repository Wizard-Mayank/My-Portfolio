import { motion } from "framer-motion";

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-zinc-800 dark:text-white">
        My Journey
      </h2>

      <div className="relative border-l border-zinc-300 dark:border-zinc-600 ml-4">
        {[
          {
            year: "2021 – 2026",
            title: "B.Tech CSE (AI & ML)",
            desc: "Pranveer Singh Institute of Technology, Kanpur – CGPA: 7.04",
          },
          {
            year: "2021",
            title: "Intermediate (12th)",
            desc: "K.R. Education Centre",
          },
          {
            year: "2019",
            title: "High School (10th)",
            desc: "K.R. Education Centre",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-10 ml-4"
          >
            <div className="absolute w-3 h-3 bg-sky-500 rounded-full -left-1.5 top-1.5"></div>
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
              {item.year}
            </h3>
            <p className="text-sm font-medium text-sky-600 mb-1">{item.title}</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="/Mayank_Resume.pdf"
          download
          className="inline-block bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-lg shadow hover:scale-105 transition-transform duration-300"
        >
          📄 Download Resume
        </a>
      </div>
    </section>
  );
};

export default Timeline;
