"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Shield, Star, Users } from "lucide-react";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1920&q=80",
    alt: "Sigiriya Rock Fortress, Sri Lanka",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
    alt: "Nine Arch Bridge, Ella",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
    alt: "Beautiful beach in Sri Lanka",
  },
];

export function HeroSection() {
  const [currentImg, setCurrentImg] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentImg((p) => (p + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Images */}
      {heroImages.map((img, i) => (
        <motion.div
          key={img.src}
          animate={{ opacity: i === currentImg ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/70 via-[#0a0f1e]/40 to-[#0a0f1e]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/60 via-transparent to-[#0a0f1e]/30" />

      {/* Content */}
      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-teal-400 uppercase mb-6 px-4 py-2 rounded-full border border-teal-400/30 bg-teal-400/10">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Explore Sri Lanka!
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight mb-6"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          Fall In{" "}
          <span className="italic text-gradient-blue">Love</span>
          <br />
          With Sri Lanka.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Book Tours, Day Trips, Cars & Add-Ons — free $10,000 travel insurance
          with every package. Secure payments. 24/7 support.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            href="/day-tour"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 text-white font-bold text-base hover:from-blue-500 hover:to-teal-500 transition-all shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5"
          >
            Day Tours
          </Link>
          <Link
            href="/packages"
            className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-bold text-base border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all hover:-translate-y-0.5"
          >
            Curated Itineraries
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {[
            { icon: Star, value: "4.9★", label: "Average Rating" },
            { icon: Users, value: "5,000+", label: "Happy Travelers" },
            { icon: Shield, value: "$10K", label: "Free Insurance" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <Icon size={18} className="text-blue-400" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-base">{value}</div>
                <div className="text-gray-400 text-xs">{label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-gray-400"
      >
        <span className="text-xs tracking-widest uppercase">Scroll to Explore</span>
        <ChevronDown size={20} />
      </motion.div>

      {/* Image dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImg(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentImg ? "bg-blue-400 w-6" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
