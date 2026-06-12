"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Award,
  CreditCard,
  Building2,
  Star,
  CheckCircle,
  Clock,
  Lock,
} from "lucide-react";

export function TrustSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#060d1a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-3 block">
            Trust & Safety
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Travelers{" "}
            <span className="text-gradient-blue">Trust Us</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Company Legitimacy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <Building2 size={18} className="text-blue-400" />
              </div>
              <h3 className="text-white font-bold">Company Legitimacy</h3>
            </div>
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-xs text-gray-500 mb-1">Business Registration</div>
                <div className="text-white font-mono font-bold">PV 00339254</div>
                <div className="text-xs text-gray-400 mt-1">
                  Registered under the Companies Act, Sri Lanka
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-2 mb-1">
                  <Award size={14} className="text-blue-400" />
                  <span className="text-white font-semibold text-sm">SLTDA License</span>
                </div>
                <div className="text-xs text-gray-400">
                  Licensed & approved by Sri Lanka Tourism Development Authority
                </div>
              </div>
            </div>
          </motion.div>

          {/* Payment Security */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                <CreditCard size={18} className="text-green-400" />
              </div>
              <h3 className="text-white font-bold">Payment Security</h3>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Lock size={14} className="text-green-400" />
              <span className="text-sm text-gray-300">
                100% Secure Online Payments
              </span>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <Shield size={14} className="text-green-400" />
              <span className="text-sm text-gray-300">SSL Encrypted Transactions</span>
            </div>
            <p className="text-xs text-gray-500 mb-4">We Are Accepting:</p>
            <div className="flex flex-wrap gap-2">
              {["VISA", "MC", "AMEX", "STRIPE", "APPLE PAY", "G PAY", "PAYPAL"].map(
                (brand) => (
                  <span
                    key={brand}
                    className="px-2 py-1 bg-white/10 rounded text-[10px] font-bold text-gray-300"
                  >
                    {brand}
                  </span>
                )
              )}
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <span className="text-sm text-gray-300">
                Trusted Worldwide – 4.9★ Average Rating
              </span>
            </div>
          </motion.div>

          {/* Memberships & Guarantees */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                <Award size={18} className="text-purple-400" />
              </div>
              <h3 className="text-white font-bold">Memberships</h3>
            </div>
            <div className="space-y-3 mb-6">
              {[
                { label: "Local Expertise", desc: "Sri Lanka's largest network" },
                { label: "TAASL Certified", desc: "Travel Agents Association SL" },
                { label: "500+ Hotel Partners", desc: "Luxury hotels & resorts" },
                { label: "Premium Transport", desc: "Air-conditioned private vehicles" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-green-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-white text-sm font-medium">
                      {item.label}
                    </span>
                    <span className="text-gray-500 text-xs block">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: CheckCircle, label: "No hidden charges" },
                  { icon: Clock, label: "24/7 support" },
                  { icon: Shield, label: "Flexible cancellation" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 text-xs text-gray-400"
                  >
                    <Icon size={11} className="text-blue-400" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
