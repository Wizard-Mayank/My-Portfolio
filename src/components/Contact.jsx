// src/components/Contact.jsx
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const commands = [
  { text: "guest@mayank-portfolio:~$ ls", result: "contact.txt  resume.pdf" },
  { text: "guest@mayank-portfolio:~$ cat contact.txt", result: "" },
  {
    text: `Email: 30517csaiml@gmail.com
LinkedIn: linkedin.com/in/pandeymayank369
GitHub: github.com/Wizard-Mayank`,
    result: "",
  },
  { text: "guest@mayank-portfolio:~$ download resume.pdf", result: "" },
];

const TYPE_SPEED = 40;

const Contact = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const lineRef = useRef(commands[0].text);

  useEffect(() => {
    if (lineIndex >= commands.length) return;

    const current = commands[lineIndex].text;
    if (charIndex < current.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + current[charIndex]);
        setCharIndex(charIndex + 1);
      }, TYPE_SPEED);
      return () => clearTimeout(timeout);
    } else if (commands[lineIndex].result) {
      // handle result display (if any)
      setDisplayText((prev) => prev + "\n" + commands[lineIndex].result);
    }

    // move to next line after a small pause
    const next = setTimeout(() => {
      setLineIndex((li) => li + 1);
      setCharIndex(0);
      setDisplayText((prev) => prev + "\n");
    }, 600);
    return () => clearTimeout(next);
  }, [charIndex, lineIndex]);

  return (
    <section
      id="contact"
      className="py-20 bg-zinc-900 text-green-400 font-mono"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6 text-white">Terminal Contact</h2>
        <motion.pre
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="whitespace-pre-wrap bg-black/80 backdrop-blur-sm p-6 rounded-lg border border-green-600 shadow-lg"
        >
          {displayText}
          <span className="inline-block w-3 h-5 bg-green-400 animate-blink ml-1" />
        </motion.pre>
      </div>
    </section>
  );
};

export default Contact;
