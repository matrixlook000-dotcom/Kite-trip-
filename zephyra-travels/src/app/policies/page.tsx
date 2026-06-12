import { Metadata } from "next";
import Link from "next/link";
import { Shield, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms | Zephyra Travels",
  description: "Zephyra Travels privacy policy, terms and conditions, and cookie policy.",
};

export default function PoliciesPage() {
  return (
    <div className="pt-20">
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#060d1a] to-[#0a0f1e]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Legal &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Policies
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            Please read our policies carefully before using our services.
          </p>
        </div>
      </section>

      {/* Nav pills */}
      <div className="sticky top-16 z-30 bg-[#0a0f1e]/95 backdrop-blur-md border-b border-white/5 px-4 py-4">
        <div className="max-w-4xl mx-auto flex gap-3 overflow-x-auto">
          {["privacy-policy", "terms-and-conditions", "cookie-policy", "cancellation-policy"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-white/5 border border-white/10 text-gray-400 hover:border-blue-500/30 hover:text-white transition-all capitalize"
            >
              {id.replace(/-/g, " ")}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Privacy Policy */}
        <section id="privacy-policy">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
              <Shield size={18} className="text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">Privacy Policy</h2>
          </div>
          <div className="prose prose-invert max-w-none space-y-6 text-gray-400 leading-relaxed">
            <p><span className="text-white font-semibold">Last Updated:</span> January 1, 2026</p>
            <p>Zephyra Travels Pvt Ltd (&quot;Zephyra Travels&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal information and your right to privacy.</p>

            <h3 className="text-white font-bold text-xl">1. Information We Collect</h3>
            <p>We collect information you provide directly to us, such as when you:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Make a booking or inquiry through our website</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us via email, phone, or WhatsApp</li>
              <li>Submit a review or feedback</li>
            </ul>
            <p>This may include: name, email address, phone number, passport details (for booking purposes), payment information, and travel preferences.</p>

            <h3 className="text-white font-bold text-xl">2. How We Use Your Information</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>To process and manage your bookings</li>
              <li>To communicate with you about your trips</li>
              <li>To send marketing communications (with your consent)</li>
              <li>To improve our services and website</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h3 className="text-white font-bold text-xl">3. Data Security</h3>
            <p>We use SSL encryption and industry-standard security measures to protect your personal data. Payment processing is handled by trusted third-party providers (Stripe, PayPal) and we never store your full card details.</p>

            <h3 className="text-white font-bold text-xl">4. Data Sharing</h3>
            <p>We do not sell your personal data. We may share your information with trusted partners (hotels, transport providers) solely to fulfil your booking. All partners are bound by strict data protection agreements.</p>

            <h3 className="text-white font-bold text-xl">5. Your Rights</h3>
            <p>You have the right to access, correct, or delete your personal data at any time. Contact us at <a href="mailto:info@zephyratravels.com" className="text-blue-400 hover:underline">info@zephyratravels.com</a> for any privacy-related requests.</p>
          </div>
        </section>

        <hr className="border-white/10" />

        {/* Terms & Conditions */}
        <section id="terms-and-conditions">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center">
              <FileText size={18} className="text-teal-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">Terms & Conditions</h2>
          </div>
          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p><span className="text-white font-semibold">Last Updated:</span> January 1, 2026</p>
            <p>By booking with Zephyra Travels, you agree to the following terms and conditions. Please read them carefully.</p>

            <h3 className="text-white font-bold text-xl">1. Bookings & Payments</h3>
            <p>A booking is confirmed upon receipt of a deposit (typically 30% of total tour cost). The remaining balance is due 30 days before the tour departure date. Full payment is required for bookings made within 30 days of departure.</p>

            <h3 className="text-white font-bold text-xl">2. Prices</h3>
            <p>All prices are quoted in USD unless otherwise stated. Prices include applicable taxes and service charges as listed in your itinerary. Zephyra Travels reserves the right to adjust prices due to significant changes in fuel costs, exchange rates, or local taxes.</p>

            <h3 className="text-white font-bold text-xl">3. Travel Insurance</h3>
            <p>All packages include complimentary travel insurance up to USD 10,000. We strongly recommend purchasing additional personal travel insurance for coverage beyond this amount.</p>

            <h3 className="text-white font-bold text-xl">4. Passport & Visa</h3>
            <p>Travelers are responsible for ensuring they hold valid passports and necessary visas for Sri Lanka. Zephyra Travels can assist with Electronic Travel Authorization (ETA) applications but accepts no liability for denied entry.</p>

            <h3 className="text-white font-bold text-xl">5. Health & Safety</h3>
            <p>Travelers should consult their physician regarding recommended vaccinations before travel. We operate all tours in compliance with Sri Lanka Tourism Authority safety guidelines.</p>
          </div>
        </section>

        <hr className="border-white/10" />

        {/* Cancellation Policy */}
        <section id="cancellation-policy">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
              <FileText size={18} className="text-orange-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">Cancellation Policy</h2>
          </div>
          <div className="space-y-6 text-gray-400 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-white font-semibold">Notice Period</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Cancellation Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { period: "More than 60 days before departure", fee: "10% of total price" },
                    { period: "30–60 days before departure", fee: "25% of total price" },
                    { period: "15–29 days before departure", fee: "50% of total price" },
                    { period: "7–14 days before departure", fee: "75% of total price" },
                    { period: "Less than 7 days before departure", fee: "100% of total price" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 text-gray-300">{row.period}</td>
                      <td className="py-3 px-4 text-orange-400 font-semibold">{row.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>In case of force majeure (natural disasters, government travel bans, etc.), Zephyra Travels will offer a full credit note valid for 12 months.</p>
          </div>
        </section>

        <hr className="border-white/10" />

        {/* Cookie Policy */}
        <section id="cookie-policy">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
              <Shield size={18} className="text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">Cookie Policy</h2>
          </div>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>We use cookies to improve your browsing experience on our website. Cookies are small text files stored on your device that help us analyze traffic, personalize content, and improve our services.</p>
            <p>You can control or disable cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our website.</p>
            <p>For questions about our cookie usage, contact us at <a href="mailto:info@zephyratravels.com" className="text-blue-400 hover:underline">info@zephyratravels.com</a>.</p>
          </div>
        </section>

        {/* Contact */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
          <p className="text-gray-400 mb-2">Questions about our policies?</p>
          <a href="mailto:info@zephyratravels.com" className="text-blue-400 hover:underline font-semibold">
            info@zephyratravels.com
          </a>
        </div>
      </div>
    </div>
  );
}
