import { Metadata } from "next";
import Image from "next/image";
import { Shield, Award, Heart, Users, MapPin, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Zephyra Travels",
  description:
    "Learn about Zephyra Travels — Sri Lanka's trusted local travel experts. SLTDA registered, locally owned, passionate about sharing the beauty of Sri Lanka.",
};

const team = [
  { name: "Kamal Perera", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
  { name: "Nimal Silva", role: "Head of Operations", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" },
  { name: "Priya Fernando", role: "Travel Consultant", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80" },
  { name: "Suresh Jayawardena", role: "Head Guide", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#060d1a] to-[#0a0f1e] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-4 block">
            Our Story
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Zephyra Travels
            </span>
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            We are a locally-owned, SLTDA-registered travel company based in
            Colombo, dedicated to sharing the authentic magic of Sri Lanka with
            visitors from around the world.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Why We Started
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Zephyra Travels was founded with a simple mission: to help
                  travelers discover the real Sri Lanka, not the tourist traps.
                  Our founders, born and raised on this beautiful island, wanted
                  to share their deep love for Sri Lanka&apos;s culture, nature,
                  and people.
                </p>
                <p>
                  We are proud to be an SLTDA-registered operator — your
                  guarantee of quality and legitimacy. Every tour is designed
                  with care, every guide is trained to the highest standard, and
                  every experience is crafted to leave you with memories that
                  last a lifetime.
                </p>
                <p>
                  From the misty mountains of Ella to the ancient ruins of
                  Polonnaruwa, from whale watching off Mirissa to the tuk-tuk
                  streets of Colombo — we know every corner of this island and
                  are passionate about showing it to you.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80"
                alt="Galle Fort Sri Lanka"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#060d1a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Safety First", desc: "Every traveler is covered with $10,000 insurance and 24/7 support.", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
              { icon: Heart, title: "Authentic Experiences", desc: "We connect you with the real Sri Lanka — local food, local people, local stories.", color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20" },
              { icon: Award, title: "Quality Assured", desc: "SLTDA registered and TAASL certified — your guarantee of excellence.", color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
              { icon: Users, title: "Community First", desc: "We support local guides, businesses, and communities in every tour we run.", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
            ].map((v) => (
              <div key={v.title} className={`p-6 rounded-2xl ${v.bg} border ${v.border} text-center`}>
                <div className={`w-14 h-14 rounded-2xl ${v.bg} border ${v.border} flex items-center justify-center mx-auto mb-4`}>
                  <v.icon size={24} className={v.color} />
                </div>
                <h3 className="text-white font-bold mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0f1e] border-y border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { value: "5,000+", label: "Happy Travelers" },
            { value: "50+", label: "Tour Packages" },
            { value: "500+", label: "Hotel Partners" },
            { value: "4.9★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#060d1a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-blue-500/30 group-hover:border-blue-500 transition-colors">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-white font-semibold">{member.name}</h3>
                <p className="text-blue-400 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Address */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0f1e]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-blue-400 mb-4">
            <MapPin size={18} />
            <span className="font-medium">Our Office</span>
          </div>
          <p className="text-gray-300 mb-2">
            No 41, Robert Gunawardena Mawatha, Kirulapone, Colombo 06, Sri Lanka
          </p>
          <p className="text-gray-400 text-sm">
            Business Registration: PV 00339254 | SLTDA Registered
          </p>
        </div>
      </section>
    </div>
  );
}
