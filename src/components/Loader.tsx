"use client";

import { motion } from "framer-motion";

export function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background pointer-events-none"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1.5 }}
    >
      <motion.h1
        className="font-playfair text-4xl md:text-6xl text-foreground tracking-widest uppercase text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Atanu Sengupta
      </motion.h1>
      <motion.p
        className="mt-4 font-inter text-sm md:text-base text-accent tracking-[0.2em] uppercase text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        Cinematic Photography & Film
      </motion.p>
    </motion.div>
  );
}
