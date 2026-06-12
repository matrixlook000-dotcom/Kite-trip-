"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, Recycle, Heart } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Tree Planting Eco Activities",
    description: "We plant 2 trees with every journey to help restore Sri Lanka's forests.",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
  },
  {
    icon: Recycle,
    title: "Low-Waste Travel Planning",
    description: "We reduce waste through responsible, eco-conscious travel practices.",
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    border: "border-teal-400/20",
  },
  {
    icon: Heart,
    title: "Support Local Communities",
    description: "Support local guides, artisans, and communities throughout Sri Lanka.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
];

export function GoGreenSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0f1e] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-green-400 uppercase mb-4 px-3 py-1.5 rounded-full border border-green-400/30 bg-green-400/10">
              <Leaf size={12} />
              Sustainable Travel
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Go Green{" "}
              <span className="text-gradient-blue">With Us</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Every journey plants 2 trees and supports responsible, sustainable
              travel across Sri Lanka. Our eco-friendly tours are designed to
              protect nature and uplift local communities.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className={`flex items-start gap-4 p-4 rounded-xl ${f.bg} border ${f.border}`}
                >
                  <div className={`w-10 h-10 rounded-xl ${f.bg} border ${f.border} flex items-center justify-center shrink-0`}>
                    <f.icon size={18} className={f.color} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{f.title}</h3>
                    <p className="text-gray-400 text-sm">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/packages"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold hover:from-green-500 hover:to-teal-500 transition-all shadow-lg"
              >
                Explore Eco-Friendly Tours
              </Link>
              <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                <Leaf size={14} />
                <span>2 Trees Planted For Every Booking</span>
              </div>
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&q=80"
                alt="Eco-friendly travel in Sri Lanka"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/60 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-4 -left-4 bg-[#111827] border border-green-500/30 rounded-2xl p-4 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                  <Leaf size={20} className="text-green-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">10,000+</div>
                  <div className="text-green-400 text-xs font-medium">Trees Planted</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
