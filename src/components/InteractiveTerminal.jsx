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
    description: "Tell me about yourself",
    fn() {
      return "I’m Mayank Pandey—a full‑stack dev who loves high‑perf, high‑aesthetic web apps.";
    },
  },
  email: {
    description: "Show my email",
    fn() {
      return "30517csaiml@gmail.com";
    },
  },
  clear: {
    description: "Clear the terminal",
    fn() {
      if (this && typeof this.clearStdout === "function") {
        this.clearStdout();
      } else {
        return "Unable to clear output.";
      }
    },
  },
};

export default function InteractiveTerminal() {
  return (
    <div className="p-6 bg-black/80 text-green-400 font-mono rounded-lg backdrop-blur-sm max-w-3xl mx-auto">
      <ReactConsole
        promptLabel="guest@mayank-portfolio:~$"
        welcomeMessage="Welcome! Type ‘help’ to get started."
        commands={commands}
        noDefaults={true}
        contentStyle={{
          fontSize: "0.875rem",
          lineHeight: "1.2rem",
          minHeight: "200px",
        }}
        inputStyle={{ fontSize: "0.875rem" }}
        style={{ padding: 0, background: "transparent" }}
      />
    </div>
  );
}
