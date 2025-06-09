import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const boyVariants = {
  sitting: { translateY: 0, transition: { duration: 1.5, ease: "easeInOut" } },
  standing: { translateY: -90, transition: { duration: 1.5, ease: "easeInOut" } },
};

const armVariants = {
  resting: { rotate: 0, transition: { duration: 1.5, ease: "easeInOut" } },
  pulling: { rotate: -45, transition: { duration: 1.5, ease: "easeInOut" } },
};

const LightBackground = ({ theme }) => {
  const boyControls = useAnimation();
  const armControls = useAnimation();

  useEffect(() => {
    const runAnimation = async () => {
      await Promise.all([
        boyControls.start("standing"),
        armControls.start("pulling"),
      ]);

      await new Promise((r) => setTimeout(r, 900));

      await Promise.all([
        boyControls.start("sitting"),
        armControls.start("resting"),
      ]);
    };

    runAnimation();
  }, [theme, boyControls, armControls]);

  return (
    <svg
      width="100vw"
      height="100vh"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid meet"
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
    >
      {/* Background Gradient */}
      <defs>
        <radialGradient id="roomGradient" cx="50%" cy="50%" r="75%">
          <stop offset="0%" stopColor={theme === "dark" ? "#111111" : "#fef9f0"} />
          <stop offset="100%" stopColor={theme === "dark" ? "#000000" : "#d8cbb7"} />
        </radialGradient>

        {/* Glow for bulb */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="20" floodColor="#ffff88" floodOpacity="0.8" />
        </filter>
      </defs>

      {/* Background Room */}
      <rect width="1920" height="1080" fill="url(#roomGradient)" />

      {/* Bulb */}
      <motion.circle
        cx="1750"
        cy="150"
        r="60"
        fill={theme === "dark" ? "#ffa500" : "#ffff88"}
        filter={theme === "dark" ? "none" : "url(#glow)"}
        animate={{
          opacity: theme === "dark" ? 0.3 : 1,
          scale: theme === "dark" ? 0.8 : 1,
        }}
        transition={{ duration: 1.2 }}
      />

      {/* Hanging Bulb Reflection (subtle) */}
      {theme !== "dark" && (
        <circle
          cx="1750"
          cy="160"
          r="120"
          fill="url(#glow)"
          opacity="0.15"
          filter="url(#glow)"
        />
      )}

      {/* Boy Group */}
      <motion.g
        variants={boyVariants}
        initial="sitting"
        animate={boyControls}
        style={{ originY: "100%", originX: "50%" }}
        transform="translate(500, 800)"
      >
        {/* Head */}
        <circle cx="0" cy="-70" r="45" fill="#b5651d" />
        {/* Body */}
        <rect x="-30" y="-70" width="60" height="100" fill="#4a90e2" rx="15" />
        {/* Arm */}
        <motion.rect
          x="40"
          y="-60"
          width="22"
          height="65"
          fill="#b5651d"
          rx="7"
          style={{ originX: 0, originY: 0 }}
          variants={armVariants}
          initial="resting"
          animate={armControls}
        />
      </motion.g>

      {/* Thread hanging from ceiling */}
      <line
        x1="570"
        y1="200"
        x2="570"
        y2="330"
        stroke="#8B4513"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <circle cx="570" cy="330" r="18" fill="#8B4513" />

      {/* Desk (simple) */}
      <rect x="350" y="830" width="400" height="80" fill="#654321" rx="15" />
      <rect x="380" y="850" width="70" height="40" fill="#333" rx="5" />
      {/* Laptop on desk */}
      <rect x="460" y="840" width="140" height="60" fill="#555" rx="8" />
      {/* Lamp */}
      <circle cx="700" cy="810" r="30" fill="#ffe066" />
      {/* Books */}
      <rect x="320" y="890" width="50" height="60" fill="#7b3e19" rx="5" />
      <rect x="370" y="890" width="50" height="60" fill="#c1440e" rx="5" />
    </svg>
  );
};

export default LightBackground;
