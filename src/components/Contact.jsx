// src/components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 glow-background-wrapper"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Left Panel */}
        <div className="flex-1 flex flex-col justify-center gap-6 text-center md:text-left">
          <h2 className="text-4xl font-bold gradient-mask">Let’s Work Together</h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-md mx-auto md:mx-0">
            Got an idea, a freelance project, or just want to connect? I'm always open to new collaborations and tech chats.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="mailto:30517csaiml@gmail.com" className="underline-glow">Email</a>
            <a href="https://github.com/Wizard-Mayank" target="_blank" rel="noopener noreferrer" className="underline-glow">GitHub</a>
            <a href="https://linkedin.com/in/pandeymayank369" target="_blank" rel="noopener noreferrer" className="underline-glow">LinkedIn</a>
          </div>
        </div>

        {/* Right Panel — Form */}
        <motion.form
          className="flex-1 bg-white/5 dark:bg-black/20 backdrop-blur-md p-8 rounded-2xl glow-card shadow-xl"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent! 🚀");
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-6">
            {/* Floating Label Field */}
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                required
                className="peer bg-transparent border border-zinc-500 w-full px-4 pt-6 pb-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-2 text-xs text-zinc-400 peer-focus:text-cyan-400 transition-all"
              >
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                required
                className="peer bg-transparent border border-zinc-500 w-full px-4 pt-6 pb-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-2 text-xs text-zinc-400 peer-focus:text-pink-400 transition-all"
              >
                Your Email
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                className="peer bg-transparent border border-zinc-500 w-full px-4 pt-6 pb-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-2 text-xs text-zinc-400 peer-focus:text-lime-400 transition-all"
              >
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="cta-btn self-start mt-2"
            >
              ✉️ Send Message
            </button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
