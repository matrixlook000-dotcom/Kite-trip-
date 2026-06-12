import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, Clock, Check, ArrowLeft, Shield, MessageCircle, Users, MapPin } from "lucide-react";
import { TOUR_PACKAGES } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const pkg = TOUR_PACKAGES.find((p) => p.id === params.id);
  return {
    title: pkg ? `${pkg.title} | Zephyra Travels` : "Tour Package | Zephyra Travels",
    description: pkg
      ? `${pkg.duration} ${pkg.category} tour in Sri Lanka. From $${pkg.price}/person. ${pkg.highlights.join(", ")}.`
      : "Tour packages in Sri Lanka by Zephyra Travels.",
  };
}

const detailedItineraries: Record<string, { day: number; title: string; desc: string }[]> = {
  "island-romance": [
    { day: 1, title: "Arrival in Colombo", desc: "Airport pickup, check-in at your Colombo hotel, welcome dinner." },
    { day: 2, title: "Galle & Southern Coast", desc: "Visit Galle Fort, Blue Whale watching off Mirissa, sunset beach walk." },
    { day: 3, title: "Ella & Tea Country", desc: "Scenic drive to Ella, Little Adam's Peak hike, Nine Arch Bridge." },
    { day: 4, title: "Iconic Train Ride", desc: "The world-famous Ella to Kandy scenic train journey through misty mountains." },
    { day: 5, title: "Kandy Cultural Day", desc: "Temple of the Tooth, Royal Botanical Gardens, Kandyan dance show." },
    { day: 6, title: "Sigiriya & Cultural Triangle", desc: "Climb Sigiriya Rock Fortress, explore Dambulla Cave Temple." },
    { day: 7, title: "Yala Safari & Departure", desc: "Morning game drive in Yala National Park, afternoon transfer to airport." },
  ],
};

export default function PackageDetailPage({ params }: { params: { id: string } }) {
  const pkg = TOUR_PACKAGES.find((p) => p.id === params.id) || TOUR_PACKAGES[0];
  const itinerary = detailedItineraries[params.id] || detailedItineraries["island-romance"];

  const inclusions = [
    "Accommodation in 3–4 star hotels",
    "Daily breakfast",
    "Private air-conditioned vehicle",
    "English-speaking chauffeur-guide",
    "All entrance fees as per itinerary",
    "$10,000 complimentary travel insurance",
    "Free eSIM with data",
    "Unlimited bottled water daily",
    "24/7 support throughout",
    "Airport transfers (arrival & departure)",
  ];

  const exclusions = [
    "International flights",
    "Visa fees",
    "Personal expenses & tips",
    "Meals not mentioned",
    "Optional activities",
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/30 to-transparent" />
        <div className="absolute bottom-8 left-4 sm:left-8 lg:left-16 right-4 sm:right-8">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-4 text-sm"
          >
            <ArrowLeft size={16} /> Back to Packages
          </Link>
          <div className="flex flex-wrap gap-3 mb-3">
            {pkg.badge && (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white">
                {pkg.badge}
              </span>
            )}
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white border border-white/20">
              {pkg.category}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">{pkg.title}</h1>
          <div className="flex flex-wrap items-center gap-5 text-white">
            <div className="flex items-center gap-1.5">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <span className="font-semibold">{pkg.rating}</span>
              <span className="text-gray-300 text-sm">({pkg.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={16} />
              <span>{pkg.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={16} />
              <span>Sri Lanka</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Highlights */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-5">Tour Highlights</h2>
              <div className="flex flex-wrap gap-3">
                {pkg.highlights.map((h) => (
                  <span
                    key={h}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium"
                  >
                    <Check size={14} />
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Day-by-Day Itinerary</h2>
              <div className="space-y-4">
                {itinerary.map((day, i) => (
                  <div key={day.day} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                        {day.day}
                      </div>
                      {i < itinerary.length - 1 && (
                        <div className="w-0.5 h-full bg-blue-500/20 mt-2" />
                      )}
                    </div>
                    <div className="pb-6">
                      <h3 className="text-white font-semibold text-lg mb-1">{day.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{day.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions / Exclusions */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-bold text-white mb-4">What&apos;s Included</h2>
                <div className="space-y-2">
                  {inclusions.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check size={14} className="text-green-400 mt-0.5 shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-4">Not Included</h2>
                <div className="space-y-2">
                  {exclusions.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="w-3.5 h-0.5 bg-red-400 mt-2.5 shrink-0" />
                      <span className="text-gray-400 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-[#111827] rounded-2xl border border-white/10 p-6 space-y-5">
              <div>
                <span className="text-gray-400 text-sm">From</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">${pkg.price}</span>
                  <span className="text-gray-400 text-sm">/ person</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                <span className="text-white font-semibold">{pkg.rating}</span>
                <span className="text-gray-400">({pkg.reviews} reviews)</span>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Travel Date</label>
                  <input
                    type="date"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Number of Travelers</label>
                  <select className="w-full bg-[#1a2332] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors">
                    {[1, 2, 3, 4, 5, "6+"].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "Person" : "People"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 text-white font-bold hover:from-blue-500 hover:to-teal-500 transition-all shadow-lg hover:shadow-blue-500/30">
                Book This Tour
              </button>

              <a
                href="https://wa.me/message/APC6K67QK43IF1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-green-600/20 border border-green-500/30 text-green-400 font-semibold hover:bg-green-600/30 transition-all flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle size={16} />
                Ask a Question
              </a>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Shield size={12} className="text-blue-400" />
                  Free $10,000 travel insurance included
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Users size={12} className="text-blue-400" />
                  Small groups — personalized experience
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Check size={12} className="text-green-400" />
                  Free cancellation up to 60 days before
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
