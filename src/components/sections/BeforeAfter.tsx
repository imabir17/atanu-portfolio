"use client";

import { motion } from "framer-motion";

export function BeforeAfter() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-6">The Process</h2>
          <p className="font-inter text-foreground/60 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
            Every image undergoes meticulous color grading to achieve my signature cinematic look. Here is a glimpse into the raw-to-final transformation.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-2">
          {/* Before */}
          <motion.div 
            className="flex-1 relative overflow-hidden group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80" 
              alt="Raw Image"
              className="w-full h-[60vh] object-cover grayscale opacity-60 contrast-75"
            />
            <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-md px-4 py-2 border border-white/5">
              <span className="font-inter text-xs uppercase tracking-[0.2em] text-white/70">RAW Unedited</span>
            </div>
          </motion.div>

          {/* After */}
          <motion.div 
            className="flex-1 relative overflow-hidden group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80" 
              alt="Graded Image"
              className="w-full h-[60vh] object-cover contrast-125 saturate-150 sepia-[.15]"
            />
            <div className="absolute top-6 right-6 bg-accent px-4 py-2">
              <span className="font-inter text-xs uppercase tracking-[0.2em] text-black font-semibold">Cinematic Grade</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
