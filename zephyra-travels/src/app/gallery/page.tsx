"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const photos = [
  { src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&q=80", alt: "Sigiriya Rock Fortress", category: "Cultural" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", alt: "Nine Arch Bridge Ella", category: "Landscapes" },
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80", alt: "Sri Lanka Beach", category: "Beaches" },
  { src: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80", alt: "Yala Safari Elephant", category: "Wildlife" },
  { src: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80", alt: "Temple of the Tooth Kandy", category: "Cultural" },
  { src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80", alt: "Galle Fort", category: "Cultural" },
  { src: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80", alt: "Misty Mountains Sri Lanka", category: "Landscapes" },
  { src: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80", alt: "Elephant Orphanage Pinnawala", category: "Wildlife" },
  { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", alt: "Luxury Hotel Pool Sri Lanka", category: "Hotels" },
  { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80", alt: "Sri Lankan Food", category: "Food" },
  { src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80", alt: "Train Journey Sri Lanka", category: "Transport" },
  { src: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&q=80", alt: "Tea Plantation Sri Lanka", category: "Landscapes" },
];

const categories = ["All", "Cultural", "Landscapes", "Beaches", "Wildlife", "Hotels", "Food", "Transport"];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? photos : photos.filter((p) => p.category === active);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#060d1a] to-[#0a0f1e]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-4 block">
            Visual Journey
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Sri Lanka{" "}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            A visual feast of Sri Lanka&apos;s most breathtaking destinations,
            wildlife, culture, and experiences.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-16 z-30 bg-[#0a0f1e]/95 backdrop-blur-md border-b border-white/5 px-4 py-4">
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                active === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            <AnimatePresence>
              {filtered.map((photo, i) => (
                <motion.div
                  key={photo.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid relative group cursor-pointer rounded-2xl overflow-hidden"
                  onClick={() => setLightbox(i)}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={400}
                    height={300}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="text-white text-sm font-medium">{photo.alt}</p>
                    <p className="text-blue-400 text-xs">{photo.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox]?.src || ""}
                alt={filtered[lightbox]?.alt || ""}
                width={1200}
                height={800}
                className="rounded-2xl object-contain max-h-[85vh] mx-auto"
              />
              <p className="text-center text-gray-300 mt-4 font-medium">
                {filtered[lightbox]?.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
