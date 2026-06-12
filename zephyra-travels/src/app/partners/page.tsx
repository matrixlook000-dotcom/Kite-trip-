import { Metadata } from "next";
import { Handshake, TrendingUp, DollarSign, Globe, Check, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "B2B Travel Partners | Zephyra Travels",
  description:
    "Partner with Zephyra Travels for inbound Sri Lanka tourism. DMC services, competitive rates, reliable support for travel agencies and corporates.",
};

const benefits = [
  { icon: Handshake, title: "Long-term Partnerships", desc: "We build lasting relationships based on trust, transparency, and mutual success with all our partners." },
  { icon: TrendingUp, title: "Reliable Service Quality", desc: "Count on consistent excellence — from first inquiry to post-trip follow-up, we maintain the highest standards." },
  { icon: DollarSign, title: "Competitive Net Rates", desc: "Access exclusive pricing that gives your business a competitive edge in the marketplace." },
  { icon: Globe, title: "Full DMC Services", desc: "End-to-end destination management including transport, hotels, guides, and activities across Sri Lanka." },
];

export default function PartnersPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#060d1a] to-[#0a0f1e]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-4 block">
            B2B & Corporate
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Partner{" "}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              with Us
            </span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            ZephyraTravels is your trusted inbound tourism partner. We collaborate
            with travel agencies, corporates, and global partners to deliver
            authentic Sri Lankan experiences with competitive rates.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <b.icon size={20} className="text-blue-400" />
                </div>
                <h3 className="text-white font-bold mb-2">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#060d1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What We Offer Partners</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Competitive net rates & commission structure",
              "Dedicated account manager",
              "24/7 support & emergency assistance",
              "Custom branding options available",
              "500+ hotel partnerships across Sri Lanka",
              "Real-time availability & instant quotes",
              "Multi-currency invoicing",
              "Flexible payment terms",
              "SLTDA registered & fully insured",
              "Group & FIT tour handling",
              "Airport transfers & logistics",
              "MICE & corporate event planning",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <Check size={16} className="text-green-400 shrink-0" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0f1e]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-400">Fill out the form and our partnerships team will contact you within 24 hours.</p>
          </div>
          <div className="bg-[#111827] rounded-3xl p-8 border border-white/10">
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              {[
                { label: "Company Name*", placeholder: "Your company" },
                { label: "Contact Person*", placeholder: "Your name" },
                { label: "Email*", placeholder: "business@company.com" },
                { label: "Phone*", placeholder: "+1 234 567 8900" },
                { label: "Country*", placeholder: "United States" },
                { label: "Annual Pax Volume", placeholder: "e.g. 500 pax/year" },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{f.label}</label>
                  <input
                    type="text"
                    placeholder={f.placeholder}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              ))}
            </div>
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your business and partnership goals..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>
            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 text-white font-bold text-lg hover:from-blue-500 hover:to-teal-500 transition-all shadow-lg flex items-center justify-center gap-2">
              <Mail size={18} />
              Send Partnership Request
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
