import { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { GoGreenSection } from "@/components/home/GoGreenSection";
import { RentACarSection } from "@/components/home/RentACarSection";
import { AttractionsSection } from "@/components/home/AttractionsSection";
import { InclusionsSection } from "@/components/home/InclusionsSection";
import { TrustSection } from "@/components/home/TrustSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { FaqSection } from "@/components/home/FaqSection";
import { PackageCard } from "@/components/ui/PackageCard";
import { TOUR_PACKAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Zephyra Travels | Sri Lanka Tour Packages from Colombo | Local Travel Experts 2026",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GoGreenSection />
      <RentACarSection />
      <AttractionsSection />

      {/* Featured Packages */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-3 block">
              Our Best
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Popular{" "}
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Tour Packages
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Handcrafted itineraries for every type of traveler — from adventurers to
              honeymooners, families to solo explorers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOUR_PACKAGES.slice(0, 6).map((pkg, i) => (
              <PackageCard key={pkg.id} {...pkg} index={i} />
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/packages"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-blue-500/30 text-blue-400 font-semibold hover:bg-blue-500/10 transition-all"
            >
              View All Packages →
            </a>
          </div>
        </div>
      </section>

      <InclusionsSection />
      <TrustSection />
      <PartnersSection />
      <FaqSection />
    </>
  );
}
