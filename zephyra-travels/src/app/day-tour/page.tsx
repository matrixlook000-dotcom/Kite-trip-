import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Star, MapPin, ArrowRight } from "lucide-react";
import { DAY_TOURS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Day Tours in Sri Lanka | Zephyra Travels",
  description:
    "Book single-day tours from Colombo. Sigiriya, Kandy, Ella train ride, Galle Fort and more. Expert guides, air-conditioned transport.",
};

const highlights = [
  "Sigiriya & Dambulla from Colombo",
  "Kandy Temple of the Tooth",
  "Ella Scenic Train Ride",
  "Galle Fort Heritage Walk",
  "Whale Watching Mirissa",
  "Pinnawala Elephant Orphanage",
  "Nuwara Eliya Tea Country",
  "Colombo City Tour",
];

export default function DayTourPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#060d1a] to-[#0a0f1e] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1920&q=60"
            alt="Day Tours Sri Lanka"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060d1a]/80 to-[#060d1a]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-4 block">
            Single Day Adventures
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Sri Lanka{" "}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Day Tours
            </span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-8">
            Explore Sri Lanka&apos;s iconic destinations on perfectly crafted
            single-day excursions from Colombo.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Expert Local Guides", "AC Transport", "Door-to-Door Pickup", "Small Groups"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-gray-300"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10">
            Popular Day Tours
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DAY_TOURS.map((tour, i) => (
              <div
                key={tour.id}
                className="group bg-[#111827] rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-1 duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent" />
                  <div className="absolute top-3 left-3 px-2 py-1 bg-blue-600 rounded-full text-xs font-bold text-white">
                    {tour.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {tour.title}
                  </h3>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-1">
                      <Star size={12} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-sm text-gray-300">{tour.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                      <MapPin size={11} />
                      <span>From {tour.from}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-500">From </span>
                      <span className="text-white font-bold text-xl">${tour.price}</span>
                    </div>
                    <Link
                      href={`/day-tour/${tour.id}`}
                      className="flex items-center gap-1 text-blue-400 text-sm font-medium hover:gap-2 transition-all"
                    >
                      Book <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights marquee */}
      <section className="py-10 bg-blue-600/10 border-y border-blue-500/20 overflow-hidden">
        <div className="flex gap-8 animate-scroll-x w-max">
          {[...highlights, ...highlights].map((h, i) => (
            <div key={i} className="flex items-center gap-3 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="text-gray-300 font-medium">{h}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Custom tour CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#060d1a]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            We can build any custom day tour around your interests and schedule.
            Talk to our local experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/packages"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 text-white font-bold hover:from-blue-500 hover:to-teal-500 transition-all"
            >
              Browse Multi-Day Packages
            </Link>
            <a
              href="https://wa.me/message/APC6K67QK43IF1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-green-600/20 border border-green-500/30 text-green-400 font-bold hover:bg-green-600/30 transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
