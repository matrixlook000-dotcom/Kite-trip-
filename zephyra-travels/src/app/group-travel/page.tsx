import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Users, Star, MapPin, Calendar, Check, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Group Travel to Sri Lanka | Zephyra Travels",
  description:
    "Organize unforgettable group tours to Sri Lanka. Corporate retreats, school trips, special interest groups. Expert coordination and competitive group rates.",
};

const groupTypes = [
  {
    title: "Corporate Retreats",
    desc: "Team-building experiences, incentive travel, and executive retreats tailored for your company.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    icon: "🏢",
  },
  {
    title: "School & University Trips",
    desc: "Safe, educational journeys for students with dedicated supervision and enriching cultural activities.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
    icon: "🎓",
  },
  {
    title: "Special Interest Groups",
    desc: "Photography tours, yoga retreats, culinary journeys, and more for like-minded travelers.",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=600&q=80",
    icon: "✨",
  },
  {
    title: "Religious & Pilgrimage Tours",
    desc: "Spiritually enriching journeys to Sri Lanka's most sacred Buddhist and Hindu temples.",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&q=80",
    icon: "🙏",
  },
];

const benefits = [
  "Dedicated group coordinator from day one",
  "Exclusive group pricing — the more, the merrier",
  "Custom itineraries designed for your group's interests",
  "Flexible vehicle options: buses, vans, private coaches",
  "Group check-in assistance at hotels & airports",
  "24/7 on-ground support throughout the tour",
  "Special dietary requirements catered for",
  "Group photography packages available",
];

export default function GroupTravelPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=1920&q=60"
            alt="Group Travel Sri Lanka"
            fill
            className="object-cover opacity-25"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060d1a]/80 via-[#060d1a]/60 to-[#060d1a]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-blue-400 uppercase mb-4 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-400/10">
              <Users size={12} />
              Group Experiences
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Travel Together,{" "}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Create Together
            </span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            From 10 to 500 travelers — we design, coordinate, and deliver
            flawless group experiences across Sri Lanka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#inquiry"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 text-white font-bold text-lg hover:from-blue-500 hover:to-teal-500 transition-all shadow-2xl shadow-blue-500/30"
            >
              Request Group Quote
            </a>
            <a
              href="https://wa.me/message/APC6K67QK43IF1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-green-600/20 border border-green-500/30 text-green-400 font-bold text-lg hover:bg-green-600/30 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Group Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-3 block">
              Who We Serve
            </span>
            <h2 className="text-4xl font-bold text-white">
              Group Travel for Every{" "}
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Occasion
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {groupTypes.map((type, i) => (
              <div
                key={type.title}
                className="group bg-[#111827] rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-1 duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent" />
                  <div className="absolute top-3 left-3 text-2xl">{type.icon}</div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{type.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#060d1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-3 block">
                Why Choose Us
              </span>
              <h2 className="text-4xl font-bold text-white mb-6">
                Expert Group Travel{" "}
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Management
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Managing a group trip is complex — we handle every detail so you
                can focus on enjoying the experience with your group.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-blue-400" />
                    </div>
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80"
                    alt="Corporate group"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
                <div className="relative h-36 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80"
                    alt="School trip"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-36 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=400&q=80"
                    alt="Special interest group"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400&q=80"
                    alt="Religious tour"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-teal-900/30 border-y border-blue-500/20">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { value: "500+", label: "Groups Organized" },
            { value: "10-500", label: "Group Size Range" },
            { value: "50+", label: "Destinations" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0f1e]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Request a Group Quote
            </h2>
            <p className="text-gray-400 text-lg">
              Tell us about your group and we&apos;ll craft a tailored proposal
              within 24 hours.
            </p>
          </div>

          <div className="bg-[#111827] rounded-3xl p-8 border border-white/10">
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              {[
                { label: "Your Name*", placeholder: "John Smith", type: "text" },
                { label: "Email Address*", placeholder: "john@example.com", type: "email" },
                { label: "Phone / WhatsApp*", placeholder: "+1 234 567 8900", type: "tel" },
                { label: "Organization Name", placeholder: "ABC Corp / School Name", type: "text" },
                { label: "Group Size*", placeholder: "e.g. 25", type: "number" },
                { label: "Preferred Dates", placeholder: "e.g. March 10-20, 2026", type: "text" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              ))}
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Group Type*
              </label>
              <select className="w-full bg-[#1a2332] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors">
                <option value="">Select group type...</option>
                {["Corporate / Business", "School / University", "Special Interest", "Religious / Pilgrimage", "Family Group", "Other"].map(o => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tell Us More
              </label>
              <textarea
                rows={4}
                placeholder="Describe your group's interests, special requirements, or anything else we should know..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>

            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 text-white font-bold text-lg hover:from-blue-500 hover:to-teal-500 transition-all shadow-lg hover:shadow-blue-500/30">
              Submit Group Inquiry
            </button>
            <p className="text-center text-gray-500 text-sm mt-3">
              Our group travel specialist will contact you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
