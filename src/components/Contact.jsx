import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageCircle } from "lucide-react";

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (e) => {
    e.preventDefault();
    const form = e.target;
    const newErrors = {};

    if (!form.name.value.trim()) newErrors.name = "Please enter your name.";
    if (!form.email.value.trim() || !form.email.value.includes("@"))
      newErrors.email = "Enter a valid email address.";
    if (!form.message.value.trim())
      newErrors.message = "Please enter a message.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      alert("✅ Message sent!");
      form.reset();
    }
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="bg-radial-glow" />
      </div>

      <motion.div
        className="relative z-10 glow-card max-w-4xl mx-auto p-8 md:p-14 rounded-2xl shadow-xl backdrop-blur-lg"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-mask">
            Let’s Work Together
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">
            Have a project, idea, or just want to say hello? Let’s connect and create something epic together.
          </p>
        </div>

        {/* Form */}
        <div className="w-full flex justify-center">
          <form onSubmit={validate} className="w-[90%] max-w-lg space-y-6 text-white" noValidate>

            {/* Name Field */}
            <div className="flex items-center gap-4">
              <div className="min-w-[60px] flex items-center gap-1 text-cyan-400">
                <User className="w-5 h-5" />
                <span>:</span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className={`neon-input flex-1 ${
                  errors.name ? "input-error" : submitted ? "input-success" : ""
                }`}
              />
            </div>
            {errors.name && <p className="input-feedback">{errors.name}</p>}

            {/* Email Field */}
            <div className="flex items-center gap-4">
              <div className="min-w-[60px] flex items-center gap-1 text-cyan-400">
                <Mail className="w-5 h-5" />
                <span>:</span>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className={`neon-input flex-1 ${
                  errors.email ? "input-error" : submitted ? "input-success" : ""
                }`}
              />
            </div>
            {errors.email && <p className="input-feedback">{errors.email}</p>}

            {/* Message Field */}
            <div className="flex items-start gap-4">
              <div className="min-w-[60px] flex items-center gap-1 mt-2 text-cyan-400">
                <MessageCircle className="w-5 h-5" />
                <span>:</span>
              </div>
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                className={`neon-input flex-1 resize-none ${
                  errors.message ? "input-error" : submitted ? "input-success" : ""
                }`}
              />
            </div>
            {errors.message && <p className="input-feedback">{errors.message}</p>}

            {/* Submit */}
            <div className="text-center mt-4">
              <button type="submit" className="cta-btn">
                ✉️ Send Message
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
