"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PackageCardProps {
  id: string;
  title: string;
  category: string;
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  highlights: string[];
  badge?: string;
  index?: number;
}

export function PackageCard({
  id,
  title,
  category,
  duration,
  price,
  rating,
  reviews,
  image,
  highlights,
  badge,
  index = 0,
}: PackageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative bg-[#111827] rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-300 shadow-xl hover:shadow-blue-500/10"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />

        {/* Badge */}
        {badge && (
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white shadow">
              {badge}
            </span>
          </div>
        )}

        {/* Category */}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/50 backdrop-blur-sm text-gray-300 border border-white/10">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="text-white font-semibold text-lg leading-tight group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
        </div>

        {/* Rating & Duration */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <Star size={13} className="text-yellow-400 fill-yellow-400" />
            <span className="text-sm text-gray-300 font-medium">{rating}</span>
            <span className="text-xs text-gray-500">({reviews})</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <Clock size={13} />
            <span>{duration}</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {highlights.slice(0, 3).map((h) => (
            <span
              key={h}
              className="text-xs px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20"
            >
              {h}
            </span>
          ))}
          {highlights.length > 3 && (
            <span className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-gray-500">
              +{highlights.length - 3} more
            </span>
          )}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-500">From</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-white">${price}</span>
              <span className="text-xs text-gray-500">/person</span>
            </div>
          </div>
          <Link
            href={`/packages/${id}`}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 text-white text-sm font-semibold hover:from-blue-500 hover:to-teal-500 transition-all group/btn"
          >
            View
            <ArrowRight
              size={14}
              className="group-hover/btn:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
