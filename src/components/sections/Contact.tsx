"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-6">Commission a Project</h2>
          <p className="font-inter text-foreground/60 text-sm md:text-base font-light">
            Available for worldwide travel. Please provide details about your vision.
          </p>
        </motion.div>

        <motion.form 
          className="space-y-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative group">
              <input 
                type="text" 
                id="name"
                required
                className="w-full bg-transparent border-b border-white/20 py-3 text-foreground font-light font-inter focus:outline-none focus:border-accent transition-colors peer"
                placeholder=" "
              />
              <label 
                htmlFor="name" 
                className="absolute left-0 top-3 text-foreground/40 text-sm font-inter tracking-widest uppercase transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-accent peer-valid:-top-4 peer-valid:text-[10px]"
              >
                Your Name
              </label>
            </div>
            <div className="relative group">
              <input 
                type="email" 
                id="email"
                required
                className="w-full bg-transparent border-b border-white/20 py-3 text-foreground font-light font-inter focus:outline-none focus:border-accent transition-colors peer"
                placeholder=" "
              />
              <label 
                htmlFor="email" 
                className="absolute left-0 top-3 text-foreground/40 text-sm font-inter tracking-widest uppercase transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-accent peer-valid:-top-4 peer-valid:text-[10px]"
              >
                Email Address
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative group">
              <input 
                type="text" 
                id="date"
                required
                className="w-full bg-transparent border-b border-white/20 py-3 text-foreground font-light font-inter focus:outline-none focus:border-accent transition-colors peer"
                placeholder=" "
              />
              <label 
                htmlFor="date" 
                className="absolute left-0 top-3 text-foreground/40 text-sm font-inter tracking-widest uppercase transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-accent peer-valid:-top-4 peer-valid:text-[10px]"
              >
                Project Date
              </label>
            </div>
            <div className="relative group">
              <input 
                type="text" 
                id="location"
                required
                className="w-full bg-transparent border-b border-white/20 py-3 text-foreground font-light font-inter focus:outline-none focus:border-accent transition-colors peer"
                placeholder=" "
              />
              <label 
                htmlFor="location" 
                className="absolute left-0 top-3 text-foreground/40 text-sm font-inter tracking-widest uppercase transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-accent peer-valid:-top-4 peer-valid:text-[10px]"
              >
                Location
              </label>
            </div>
          </div>

          <div className="relative group pt-4">
            <textarea 
              id="details"
              required
              rows={4}
              className="w-full bg-transparent border-b border-white/20 py-3 text-foreground font-light font-inter focus:outline-none focus:border-accent transition-colors peer resize-none"
              placeholder=" "
            />
            <label 
              htmlFor="details" 
              className="absolute left-0 top-7 text-foreground/40 text-sm font-inter tracking-widest uppercase transition-all duration-300 peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-accent peer-valid:top-0 peer-valid:text-[10px]"
            >
              Project Details
            </label>
          </div>

          <div className="flex justify-center pt-8">
            <button 
              type="submit"
              className="px-12 py-4 bg-white text-black font-inter text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors duration-500"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
