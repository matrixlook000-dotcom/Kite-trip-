"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { ATTRACTIONS } from "@/lib/data";

export function AttractionsSection() {
  const doubled = [...ATTRACTIONS, ...ATTRACTIONS];

  return (
    <section className="py-20 bg-[#060d1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-3 block">
            Discover
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Top Attractions in{" "}
            <span className="text-gradient-blue">Sri Lanka</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative marquee-container">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#060d1a] to-transparent" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#060d1a] to-transparent" />

        <div className="flex gap-6 marquee-content animate-scroll-x w-max">
          {doubled.map((attraction, i) => (
            <div
              key={`${attraction.name}-${i}`}
              className="relative w-64 h-80 rounded-2xl overflow-hidden shrink-0 group cursor-pointer"
            >
              <Image
                src={attraction.image}
                alt={attraction.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="256px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-1.5 text-white font-semibold">
                  <MapPin size={14} className="text-blue-400" />
                  <span className="text-sm">{attraction.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
