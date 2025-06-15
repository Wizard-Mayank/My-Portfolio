// src/components/InteractiveTerminal.jsx
import React from "react";
import ReactConsole from "react-console-emulator";

const commands = {
  help: {
    description: "List available commands",
    fn() {
      return Object.keys(commands).join("  ");
    },
  },
  about: {
    description: "Who are you?",
    fn() {
      return "I’m Mayank Pandey—a full‑stack dev crafting high‑perf, high‑aesthetic web experiences.";
    },
  },
  email: {
    description: "Show my email",
    fn() {
      return "30517csaiml@gmail.com";
    },
  },
  linkedin: {
    description: "Get my LinkedIn",
    fn() {
      return "https://linkedin.com/in/pandeymayank369";
    },
  },
  github: {
    description: "Get my GitHub",
    fn() {
      return "https://github.com/Wizard-Mayank";
    },
  },
  clear: {
    description: "Clear the terminal screen",
    fn() {
      this.clearStdout();
    },
  },
};

export default function InteractiveTerminal() {
  return (
    <section className="mt-16 pb-32 px-4">
      <div className="glass-terminal-wrapper rounded-2xl p-8">
        <h2 className="text-center text-3xl font-bold text-accent mb-4">
          Contact Terminal
        </h2>
        <div className="w-full max-w-4xl mx-auto px-4 overflow-hidden">
          <div className="super-glass-terminal">
            <ReactConsole
              promptLabel={
                <span>
                  <span className="terminal-yellow">guest</span>
                  <span className="text-white">@</span>
                  <span className="terminal-green">mayank</span>
                  <span className="text-white">:~$</span>
                </span>
              }
              welcomeMessage={
                <span>
                  <span className="terminal-green">
                    Welcome to Mayank&apos;s Terminal
                  </span>
                  <span className="text-white"> — type </span>
                  <span className="terminal-yellow">'help'</span>
                  <span className="text-white"> to begin.</span>
                </span>
              }
              commands={commands}
              noDefaults={true}
              contentStyle={{
                fontSize: "0.875rem",
                lineHeight: "1.5rem",
                minHeight: "200px",
                fontFamily: "Orbitron, monospace",
                color: "inherit",
              }}
              inputStyle={{
                fontSize: "0.875rem",
                fontFamily: "Orbitron, monospace",
                color: "inherit",
              }}
              style={{
                background: "transparent",
                padding: 0,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
