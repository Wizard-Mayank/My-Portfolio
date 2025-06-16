// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="relative w-full mt-4 px-4 py-10 flex justify-center">
      <div className="glass-footer max-w-4xl w-full">
        {/* Glow grid overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/grid.svg')] bg-repeat"></div>

        {/* Subtle top fade */}
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-t from-black/10 dark:from-white/5 to-transparent z-0" />

        <div className="relative z-10 flex flex-col items-center space-y-2">
          <h2 className="text-[13px] sm:text-sm font-orbitron tracking-widest hover:neon-pulse underline-glow">
            Designed & Developed by <span className="text-accent font-semibold">Mayank Pandey</span>
          </h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
