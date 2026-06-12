"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Handshake, TrendingUp, DollarSign, ArrowRight } from "lucide-react";

export function PartnersSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-500/20 p-8 md:p-12">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-4 block">
                B2B & Corporate
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Partner with Us
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                ZephyraTravels is your trusted inbound tourism partner. We
                collaborate with travel agencies, corporates, and global partners
                to deliver authentic Sri Lankan travel experiences with
                competitive rates and reliable support.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  {
                    icon: Handshake,
                    title: "Partnerships",
                    desc: "Long-term relationships based on trust",
                  },
                  {
                    icon: TrendingUp,
                    title: "Reliability",
                    desc: "Consistent service quality",
                  },
                  {
                    icon: DollarSign,
                    title: "Competitive Rates",
                    desc: "Exclusive pricing for partners",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 rounded-2xl bg-white/10 border border-white/10"
                  >
                    <item.icon size={20} className="text-blue-400 mb-2" />
                    <h3 className="text-white font-semibold text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/partners"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold hover:from-blue-500 hover:to-teal-500 transition-all shadow-lg group"
              >
                Partner with Us
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "500+", label: "Hotel Partners" },
                { value: "50+", label: "Tour Packages" },
                { value: "5,000+", label: "Happy Travelers" },
                { value: "4.9★", label: "Rating" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-white/10 border border-white/10 text-center"
                >
                  <div className="text-3xl font-bold text-gradient-blue mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
