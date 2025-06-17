// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-black text-zinc-800 dark:text-white text-center px-4">
      <motion.h1
        className="text-6xl font-extrabold mb-4 text-accent"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        404
      </motion.h1>

      <motion.p
        className="text-xl text-zinc-600 dark:text-zinc-400 mb-6 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Oops! The page you were looking for doesn't exist or was moved.
      </motion.p>

      <Link
        to="/"
        className="inline-block px-5 py-2 text-sm font-semibold rounded-md border border-accent text-accent hover:bg-accent hover:text-white transition-colors"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
}
