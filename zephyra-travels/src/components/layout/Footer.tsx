import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  MapPin,
  Mail,
  Phone,
  Star,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-[#060d1a] border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-xl">
                Zephyra<span className="text-blue-400">Travels</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Unlock the true magic of Sri Lanka with ZephyraTravels. As a
              registered and trusted local partner, we combine deep expertise
              with a passion for travel to design your perfect, stress-free
              island getaway.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-600/20 hover:text-blue-400 flex items-center justify-center text-gray-400 transition-all"
              >
                <Facebook size={16} />
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-pink-600/20 hover:text-pink-400 flex items-center justify-center text-gray-400 transition-all"
              >
                <Instagram size={16} />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-700/20 hover:text-blue-400 flex items-center justify-center text-gray-400 transition-all"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-green-600/20 hover:text-green-400 flex items-center justify-center text-gray-400 transition-all"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href={SITE_CONFIG.social.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-green-500/20 hover:text-green-400 flex items-center justify-center text-gray-400 transition-all"
              >
                <Star size={16} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-blue-400 mt-0.5 shrink-0" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex gap-3 text-gray-400 text-sm hover:text-blue-400 transition-colors"
                >
                  <Mail size={16} className="text-blue-400 mt-0.5 shrink-0" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex gap-3 text-gray-400 text-sm hover:text-blue-400 transition-colors"
                >
                  <Phone size={16} className="text-blue-400 mt-0.5 shrink-0" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5">Our Services</h3>
            <ul className="space-y-3">
              {[
                { label: "Tour Packages", href: "/packages" },
                { label: "Day Tours", href: "/day-tour" },
                { label: "Rent a Car", href: "/rent-a-car" },
                { label: "Group Travel", href: "/group-travel" },
                { label: "Partners", href: "/partners" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 text-sm hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Subscribe */}
          <div>
            <h3 className="text-white font-semibold mb-5">Company</h3>
            <ul className="space-y-3 mb-8">
              {[
                { label: "Blogs & News", href: "/blogs" },
                { label: "Gallery", href: "/gallery" },
                { label: "About Us", href: "/about" },
                { label: "Privacy Policy", href: "/policies#privacy-policy" },
                { label: "Terms of Service", href: "/policies#terms-and-conditions" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 text-sm hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold mb-3">Subscribe</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium text-white transition-colors">
                Go
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Zephyra Travels Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment Icons */}
            {["VISA", "MC", "AMEX", "APPLE PAY", "STRIPE"].map((brand) => (
              <div
                key={brand}
                className="px-2 py-1 bg-white/10 rounded text-[10px] font-bold text-gray-400"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
