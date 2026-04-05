"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        <motion.div 
          className="relative aspect-[4/5] overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img 
            src="/portfolio/Atanu.jpg" 
            alt="Atanu Sengupta"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-8">The Artist</h2>
          <div className="font-inter text-foreground/70 space-y-6 text-sm md:text-base leading-relaxed font-light">
            <p>
              Currently a student and an avid photographer based in Dhaka, Atanu Sengupta possesses a profound passion for visual storytelling. Over the past 3+ years behind the lens, he has developed a distinct cinematic visual language spanning both still photography and breathtaking videography.
            </p>
            <p>
              Specializing in hybrid coverage, Atanu captures authentic, fleeting moments across portraiture, events, and short films. His approach is rooted in the belief that every frame and sequence should convey true emotion, utilizing natural light to sculpt depth rather than relying on staged perfection.
            </p>
          </div>

          <div className="mt-12 pt-12 border-t border-white/10">
            <h3 className="font-inter text-xs uppercase tracking-[0.2em] mb-4 text-accent">My Gear</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 font-inter text-sm text-foreground/60 tracking-wider">
              <li>Sony a7cii</li>
              <li>Sigma 35 mm 1.4 DG DN</li>
              <li>Sigma 85 mm 1.4 DG DN</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
