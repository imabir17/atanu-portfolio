"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface Project {
  id: string | number;
  category: string;
  coverImage: string;
  title: string;
  aspect: string;
  isVideo: boolean;
  galleryImages?: string[];
}

export function Portfolio({ externalProjects = [] }: { externalProjects?: Project[] }) {
  const imagesToDisplay = externalProjects;
  
  // Create unique categories based on images
  const rawCategories = Array.from(new Set(imagesToDisplay.map(img => img.category)));
  const categories = ["All", ...rawCategories];

  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<Project | null>(null);

  const filteredImages = imagesToDisplay.filter((img) => filter === "All" || img.category === filter);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedImage]);

  return (
    <section id="work" className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto bg-background">
      <motion.div 
        className="flex flex-col items-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-12">Selected Works</h2>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "font-inter text-xs uppercase tracking-[0.2em] pb-2 border-b transition-all duration-300",
                filter === cat 
                  ? "border-accent text-accent" 
                  : "border-transparent text-foreground/50 hover:text-foreground hover:border-foreground/30"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div 
        layout
        className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
      >
        {filteredImages.map((img) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            key={img.id}
            className="relative group overflow-hidden bg-white/5 break-inside-avoid cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <div className={cn("relative w-full", img.aspect)}>
              <img 
                src={img.coverImage} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="font-inter text-[10px] text-accent uppercase tracking-[0.2em] mb-2">{img.category}</span>
                <h3 className="font-playfair text-2xl text-white flex items-center gap-3">
                  {img.title}
                  {img.isVideo && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                  )}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 md:p-12 cursor-zoom-out backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center bg-[#050505] rounded-sm pointer-events-auto cursor-default overflow-y-auto shadow-2xl border border-white/5 no-scrollbar"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="sticky top-0 right-0 self-end text-white/50 hover:text-white transition-colors p-6 z-10 mix-blend-difference"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              
              <div className="w-full px-6 md:px-16 pb-16 flex flex-col gap-10">
                <div className="text-center mb-4">
                  <span className="font-inter text-[10px] text-accent uppercase tracking-[0.2em] mb-2 block">{selectedImage.category}</span>
                  <h3 className="font-playfair text-3xl md:text-5xl text-white">{selectedImage.title}</h3>
                </div>

                <div className="flex flex-col gap-6">
                  {selectedImage.galleryImages && selectedImage.galleryImages.length > 0 ? (
                    selectedImage.galleryImages.map((imgUrl, idx) => (
                      <img
                        key={idx}
                        src={imgUrl}
                        alt={`${selectedImage.title} Image ${idx + 1}`}
                        className="w-full h-auto object-contain bg-[#111] rounded-sm"
                      />
                    ))
                  ) : (
                    <img
                      src={selectedImage.coverImage}
                      alt={selectedImage.title}
                      className="w-full h-auto object-contain bg-[#111] rounded-sm"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
