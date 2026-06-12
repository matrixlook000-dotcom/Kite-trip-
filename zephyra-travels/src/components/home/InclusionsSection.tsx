"use client";

import { motion } from "framer-motion";
import { Shield, Wifi, Coffee, Droplets, Camera } from "lucide-react";

const inclusions = [
  {
    icon: Shield,
    title: "Travel Insurance (Up to USD 10,000)",
    description:
      "Coverage for medical needs, trip interruptions, and emergencies, giving you peace of mind throughout your journey.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    featured: true,
  },
  {
    icon: Wifi,
    title: "Free eSIM With Data",
    description: "Instant connectivity with a pre-activated eSIM for all travelers.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: Coffee,
    title: "Daily Breakfast Included",
    description: "Fresh breakfasts served daily to delight every guest.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  {
    icon: Droplets,
    title: "Unlimited Bottled Water",
    description: "Daily purified bottled water supplied to keep all refreshed.",
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
  },
  {
    icon: Camera,
    title: "Photography Support (On Request)",
    description: "Your chauffeur-guide helps capture memorable moments.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
  },
];

export function InclusionsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-3 block">
            What&apos;s Included
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Premium Free Inclusions{" "}
            <span className="text-gradient-blue">for Every Traveler</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every traveler receives our premium complimentary services designed
            for safety, comfort, and a truly seamless Sri Lankan journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {inclusions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`p-6 rounded-2xl ${item.bg} border ${item.border} group transition-all ${
                item.featured ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div
                className={`w-14 h-14 rounded-2xl ${item.bg} border ${item.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                <item.icon size={24} className={item.color} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
              {item.featured && (
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 bg-blue-500/20 px-3 py-1.5 rounded-full">
                  <Shield size={10} />
                  SLTDA Registered & Verified
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
