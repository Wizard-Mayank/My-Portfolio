// src/components/Projects.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";


const projects = [
  {
    title: "Vehicle Authentication and Authorization using ML",
    year: "2025",
    description:
      "Developed a vehicle recognition system using number plate recognition and ML for unique identification.",
    tech: ["Python", "Machine Learning", "OpenCV"],
    github: "#",
    live: "#",
  },
  {
    title: "Hand Gesture Image Recognition",
    year: "2024",
    description:
      "Implemented a hand gesture recognition system using deep learning techniques in Python.",
    tech: ["Python", "TensorFlow", "Keras"],
    github: "#",
    live: "#",
  },
  {
    title: "UMAS: A Weather Prediction Model",
    year: "2024",
    description:
      "Created a machine learning model for weather prediction using Python and Google Colab.",
    tech: ["Python", "Scikit-learn", "Google Colab"],
    github: "#",
    live: "#",
  },
];

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);

  return (
    <Tilt glareEnable={true} glareMaxOpacity={0.45} scale={1.02} className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-5 h-full flex flex-col justify-between"
      >
        <h3 className="text-xl font-bold mb-1 text-zinc-900 dark:text-white">
          {project.title} <span className="text-sm font-normal text-zinc-500">({project.year})</span>
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
          {project.description.slice(0, 100)}...
        </p>
        <button
          className="text-xs text-sky-500 hover:underline mt-auto"
          onClick={() => setOpen(true)}
        >
          View Details
        </button>

        {open && (
          <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-2xl w-[90%] max-w-md">
              <h4 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-white">
                {project.title} ({project.year})
              </h4>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="px-2 py-1 bg-sky-100 text-sky-600 text-xs rounded-full dark:bg-sky-800 dark:text-sky-200">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                <a href={project.github} className="text-sky-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={project.live} className="text-sky-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  Live Site
                </a>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="mt-4 px-4 py-1 bg-zinc-200 dark:bg-zinc-700 rounded text-xs"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </Tilt>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-zinc-900 dark:text-white mb-10"
        >
          Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <ProjectCard key={index} project={proj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
