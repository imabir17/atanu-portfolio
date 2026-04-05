"use client";

import { motion } from "framer-motion";

const packages = [
  {
    name: "Photography Only",
    price: "From ৳8,000",
    features: [
      "8 Hours Full Coverage",
      "Second Photographer",
      "500+ High-Res Images",
      "Cinematic Color Grading",
      "Online Delivery Gallery"
    ]
  },
  {
    name: "The Hybrid Story (Photo & Video)",
    price: "From ৳20,000",
    features: [
      "10 Hours Full Coverage",
      "Dedicated Videography Team",
      "600+ High-Res Images",
      "5-7 Minute Cinematic Highlight Film",
      "Drone Aerial Footage"
    ],
    featured: true
  }
];

export function Pricing() {
  return (
    <section id="services" className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-background">
      <motion.div 
        className="text-center mb-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-6">Investment</h2>
        <p className="font-inter text-foreground/60 max-w-xl mx-auto text-sm md:text-base font-light">
          Bespoke collections designed for those who value the artistry of preserving memories.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className={`flex flex-col p-10 border ${pkg.featured ? 'border-accent/50 bg-accent/5' : 'border-white/5'}`}
          >
            <h3 className="font-playfair text-2xl mb-2">{pkg.name}</h3>
            <div className="font-inter text-lg text-accent tracking-widest mb-10 pb-10 border-b border-white/10">
              {pkg.price}
            </div>
            <ul className="flex-grow space-y-6 font-inter text-sm text-foreground/70 font-light mb-12">
              {pkg.features.map(feature => (
                <li key={feature} className="flex items-center gap-4">
                  <div className="w-1 h-1 rounded-full bg-accent/50" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full py-4 tracking-[0.2em] text-xs uppercase transition-colors duration-300 ${pkg.featured ? 'bg-accent text-black hover:bg-white' : 'border border-white/20 hover:bg-white hover:text-black'}`}>
              Inquire
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
