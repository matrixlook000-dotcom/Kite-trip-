import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Users, Shield, Wifi, MapPin, Check } from "lucide-react";
import { CARS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Rent a Car in Sri Lanka | Zephyra Travels",
  description:
    "Hire a car with driver in Sri Lanka. Economy to luxury vehicles, fully insured, trained chauffeur-guides. Airport pickup available.",
};

export default function RentACarPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#060d1a] to-[#0a0f1e] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-4 block">
            NEED A CAR?
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Explore Sri Lanka with the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              perfect vehicle
            </span>
          </h1>
          <p className="text-gray-300 text-xl mb-10">
            Fully insured, air-conditioned vehicles with trained chauffeur-guides.
            Economy to luxury — we have the right car for every journey.
          </p>
        </div>
      </section>

      {/* Cars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10">Our Fleet</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {CARS.map((car) => (
              <div
                key={car.id}
                className="group bg-[#111827] rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-1 duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-blue-600 rounded-full text-xs font-bold text-white">
                    {car.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-bold text-xl mb-2">{car.name}</h3>
                  <div className="flex items-center gap-3 text-gray-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      <span>{car.seats} seats</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield size={14} />
                      <span>Insured</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {car.features.map((f) => (
                      <span
                        key={f}
                        className="flex items-center gap-1 text-xs text-teal-400 bg-teal-500/10 border border-teal-500/20 px-2 py-1 rounded-full"
                      >
                        <Check size={10} />
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-500">From </span>
                      <span className="text-2xl font-bold text-white">${car.price}</span>
                      <span className="text-xs text-gray-500">/day</span>
                    </div>
                    <Link
                      href="/packages"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 text-white text-sm font-semibold hover:from-blue-500 hover:to-teal-500 transition-all"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why hire with driver */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#060d1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Hire a Chauffeur-Guide?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Local Knowledge",
                    desc: "Our drivers are expert guides who know every hidden gem in Sri Lanka.",
                  },
                  {
                    title: "Language Support",
                    desc: "All drivers speak fluent English and can assist with translation.",
                  },
                  {
                    title: "Photo Assistance",
                    desc: "Your guide will help capture the perfect photos at every stop.",
                  },
                  {
                    title: "Flexible Itinerary",
                    desc: "Change plans on the fly — your driver adapts to your schedule.",
                  },
                  {
                    title: "24/7 Support",
                    desc: "We're always available if you need assistance at any time.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} className="text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80"
                alt="Chauffeur guide Sri Lanka"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060d1a]/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
