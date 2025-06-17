// src/components/SocialLinks.jsx
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const links = [
  {
    icon: <FaGithub size={28} />,
    url: "https://github.com/Wizard-Mayank",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin size={28} />,
    url: "https://linkedin.com/in/pandeymayank369",
    label: "LinkedIn",
  },
  {
    icon: <FaTwitter size={28} />,
    url: "https://twitter.com/yourhandle",
    label: "Twitter",
  },
  {
    icon: <FaEnvelope size={28} />,
    url: "mailto:30517csaiml@gmail.com",
    label: "Email",
  },
];

export default function SocialLinks() {
  return (
    <section
      id="social"
      className="py-12 bg-gray-50 dark:bg-zinc-950 text-center"
    >
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
        Connect with Me
      </h2>
      <div className="flex justify-center space-x-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-card p-3 rounded-full transition-transform hover:scale-110"
          >
            <span className="text-zinc-900 dark:text-white">
              {link.icon}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
