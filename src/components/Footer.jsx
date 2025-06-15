// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="relative w-full mt-24 px-6 py-12 text-center overflow-hidden neon-footer">
      {/* Glow grid overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/grid.svg')] bg-repeat"></div>

      <div className="relative z-10">
        <h2 className="text-[13px] font-orbitron tracking-widest text-green-400 neon-pulse">
          Designed & Developed by Mayank Pandey
        </h2>

        <p className="text-xs text-neutral-500 mt-2">
          © {new Date().getFullYear()} — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
