"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PackageCard } from "@/components/ui/PackageCard";
import { TOUR_PACKAGES } from "@/lib/data";
import { Filter } from "lucide-react";

const categories = ["All Packages", "Cultural", "Adventure", "Beach", "Luxury", "Honeymoon"];

const travelThemes = [
  {
    title: "Cultural Exploration",
    desc: "Immerse yourself in Sri Lanka's rich heritage, ancient temples, and traditional villages.",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
  },
  {
    title: "Wildlife Adventures",
    desc: "Discover exotic wildlife in national parks and experience thrilling safari adventures.",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80",
  },
  {
    title: "Beach Getaways",
    desc: "Relax on pristine beaches and enjoy water sports along Sri Lanka's stunning coastline.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  },
  {
    title: "Luxury Retreats",
    desc: "Experience bespoke tours and exclusive stays for an unforgettable luxury getaway.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  },
];

export default function PackagesPage() {
  const [active, setActive] = useState("All Packages");
  const [formData, setFormData] = useState({
    name: "", email: "", mobile: "", travelType: "", category: "", days: "", activities: "", notes: "",
  });

  const filtered =
    active === "All Packages"
      ? TOUR_PACKAGES
      : TOUR_PACKAGES.filter((p) => p.category === active);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#060d1a] to-[#0a0f1e] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-teal-900/20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-4 block"
          >
            Sri Lanka 2026
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold text-white mb-6"
          >
            Discover{" "}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Sri Lanka
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl max-w-2xl mx-auto"
          >
            Explore our curated collection of unforgettable experiences in the
            heart of the Indian Ocean
          </motion.p>
        </div>
      </section>

      {/* Travel Themes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Travel Themes
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelThemes.map((theme, i) => (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group cursor-pointer rounded-2xl overflow-hidden h-72"
              >
                <Image
                  src={theme.image}
                  alt={theme.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-lg mb-2">
                    {theme.title}
                  </h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {theme.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#060d1a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <h2 className="text-3xl font-bold text-white">Our Tour Packages</h2>
            <div className="flex items-center gap-2">
              <Filter size={16} className="text-gray-400" />
              <span className="text-gray-400 text-sm">Filter:</span>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat
                    ? "bg-blue-600 text-white"
                    : "bg-white/5 border border-white/10 text-gray-400 hover:border-blue-500/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((pkg, i) => (
              <PackageCard key={pkg.id} {...pkg} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Itinerary Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0f1e]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Plan Your{" "}
              <span className="text-gradient-blue">Perfect Sri Lanka Journey</span>
            </h2>
            <p className="text-gray-400">
              Tell us your preferences, and we&apos;ll craft a fully customized
              itinerary just for you.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#111827] rounded-3xl p-8 border border-white/10"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { label: "Full Name*", key: "name", type: "text", placeholder: "Your full name" },
                { label: "Email Address*", key: "email", type: "email", placeholder: "you@email.com" },
                { label: "Mobile Number*", key: "mobile", type: "tel", placeholder: "+1 234 567 8900" },
                { label: "Number of Days", key: "days", type: "number", placeholder: "7" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.key as keyof typeof formData]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field.key]: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              ))}

              {[
                {
                  label: "Travel Type*",
                  key: "travelType",
                  options: ["Solo", "Couple", "Family", "Group", "Corporate"],
                },
                {
                  label: "Travel Category*",
                  key: "category",
                  options: ["Cultural", "Adventure", "Beach", "Wildlife", "Luxury", "Honeymoon"],
                },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {field.label}
                  </label>
                  <select
                    value={formData[field.key as keyof typeof formData]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field.key]: e.target.value })
                    }
                    className="w-full bg-[#1a2332] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select...</option>
                    {field.options.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
              ))}

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Notes
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your dream Sri Lanka experience..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 text-white font-bold text-lg hover:from-blue-500 hover:to-teal-500 transition-all shadow-lg hover:shadow-blue-500/30">
                Request Your Custom Itinerary
              </button>
              <p className="text-center text-gray-500 text-sm mt-3">
                Our travel experts will review your request and get back to you
                within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
