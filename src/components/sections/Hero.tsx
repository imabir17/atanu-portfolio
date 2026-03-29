"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ y: yBg }}
      >
        <img 
          src="/portfolio/hero.jpg"
          alt="Cinematic Photography"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/50" />
      </motion.div>

      <motion.div 
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl"
        style={{ opacity }}
      >
        <motion.h1 
          className="font-playfair text-5xl md:text-7xl lg:text-8xl text-foreground font-medium leading-tight mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.8, ease: "easeOut" }}
        >
          Capturing Raw Emotion & <br className="hidden md:block"/> <span className="text-accent italic">Cinematic</span> Light.
        </motion.h1>
      </motion.div>

      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
      >
        <span className="font-inter text-[9px] uppercase tracking-[0.4em] text-foreground/50">Scroll</span>
        <div className="w-[1px] h-16 bg-foreground/20 overflow-hidden relative">
          <motion.div
            className="w-full h-1/2 bg-accent absolute top-0"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
