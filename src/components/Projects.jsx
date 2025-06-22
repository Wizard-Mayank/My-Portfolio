// src/components/Projects.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "Vehicle Authentication and Authorization using ML",
    year: "2025",
    description:
      "Developed a machine learning-based system for vehicle authentication and authorization using number plate recognition. The system uses OpenCV to extract license plate information from real-time images and applies trained ML models to verify authenticity. It was built to enhance security in private and commercial parking systems, ensuring only authorized vehicles are granted access.",
    tech: ["Python", "Machine Learning", "OpenCV"],
    github: "#",
    live: "#",
  },
  {
    title: "Hand Gesture Image Recognition",
    year: "2024",
    description:
      "Built a hand gesture recognition model using deep learning frameworks like TensorFlow and Keras. The model was trained on a custom dataset of labeled hand gestures and can accurately detect and classify gestures in real-time. This system can be integrated into gesture-controlled applications such as virtual UI control, sign language interpretation, and smart devices.",
    tech: ["Python", "TensorFlow", "Keras"],
    github: "#",
    live: "#",
  },
  {
    title: "UMAS: A Weather Prediction Model",
    year: "2024",
    description:
      "Created UMAS, a machine learning-based weather forecasting model that predicts temperature, humidity, and rainfall using historical datasets. The system was trained and tested on Google Colab using Scikit-learn, delivering high accuracy and reliable forecasts. Designed to aid small farmers and rural users by providing accessible weather predictions without requiring third-party APIs or paid platforms.",
    tech: ["Python", "Scikit-learn", "Google Colab"],
    github: "#",
    live: "#",
  },
];

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);

  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      scale={1.01}
      transitionSpeed={1200}
      className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-5 h-full flex flex-col justify-between"
      >
        <div>
          <h3 className="text-xl font-bold mb-1 text-zinc-900 dark:text-white">
            {project.title}{" "}
            <span className="text-sm font-normal text-zinc-500">
              ({project.year})
            </span>
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
            {open
              ? project.description
              : `${project.description.slice(0, 100)}...`}
          </p>
        </div>

        <div className="mt-auto text-right pr-10">
          <button
            onClick={() => setOpen(!open)}
            className="px-3 py-1 text-xs font-semibold rounded-md border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition-colors bg-white dark:bg-zinc-900"
          >
            {open ? "Close" : "View Details"}
          </button>
        </div>
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
