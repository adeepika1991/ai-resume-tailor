// src/components/Hero.tsx
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🧠 Resume Tailor AI
      </motion.h1>

      <motion.p
        className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Want to tailor your resume for your dream job?
        <br />
        Let AI help you craft the perfect version.
      </motion.p>
    </section>
  );
}
