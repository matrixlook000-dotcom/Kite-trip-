import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog Post | Zephyra Travels",
};

const blogContent = {
  "best-time-to-visit-sri-lanka": {
    title: "Best Time to Visit Sri Lanka in 2026",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    category: "Travel Guide",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    content: `
Sri Lanka is a year-round destination thanks to its dual monsoon system — but timing your visit right can make a huge difference to your experience.

## Understanding Sri Lanka's Climate Zones

Sri Lanka has two distinct monsoon seasons that affect different parts of the island at different times:

**Southwest Monsoon (May–September):** Brings rain to the western, southern, and central areas. This is actually the best time to visit the east coast!

**Northeast Monsoon (October–February):** Affects the north and east coast. The west and south coasts are beautiful during this period.

## Best Times by Region

### West & South Coast (Colombo, Galle, Mirissa)
Best: **November to April** — Calm seas, ideal for swimming and whale watching.

### East Coast (Trincomalee, Arugam Bay)
Best: **May to September** — The east shines while the west is wetter. Perfect for surfing at Arugam Bay.

### Hill Country (Kandy, Ella, Nuwara Eliya)
Year-round, but **January to March** offers the clearest mountain views and tea picking season.

### Cultural Triangle (Sigiriya, Polonnaruwa, Anuradhapura)
**January to April and July to September** — Avoid the heaviest rains.

## Our Top Recommendation

If you can only visit once, **December to March** offers the best overall experience — dry weather across most of the island, great whale watching off Mirissa, and perfect conditions for both beach and culture.

For budget travelers, **April–May and September–October** are shoulder seasons with lower prices and fewer crowds, while still offering good weather in many areas.
    `,
  },
};

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogContent[params.slug as keyof typeof blogContent] || {
    title: "Travel Tips for Sri Lanka",
    image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1200&q=80",
    category: "Travel Guide",
    date: "Jan 2026",
    readTime: "5 min read",
    content: "This article is coming soon. Check back for our latest travel tips and insights about Sri Lanka.",
  };

  return (
    <div className="pt-20">
      {/* Hero Image */}
      <div className="relative h-80 sm:h-[500px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/40 to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-32 relative z-10 pb-20">
        {/* Back link */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 text-sm"
        >
          <ArrowLeft size={16} />
          Back to Blogs
        </Link>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full flex items-center gap-1">
            <Tag size={10} />
            {post.category}
          </span>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <Calendar size={10} />
            {post.date}
          </span>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <Clock size={10} />
            {post.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
          {post.title}
        </h1>

        {/* Content */}
        <article className="prose prose-invert prose-blue max-w-none">
          {post.content.split("\n").map((line, i) => {
            if (line.startsWith("## ")) {
              return (
                <h2 key={i} className="text-2xl font-bold text-white mt-10 mb-4">
                  {line.replace("## ", "")}
                </h2>
              );
            }
            if (line.startsWith("### ")) {
              return (
                <h3 key={i} className="text-xl font-bold text-white mt-6 mb-3">
                  {line.replace("### ", "")}
                </h3>
              );
            }
            if (line.startsWith("**") && line.endsWith("**")) {
              return (
                <p key={i} className="font-bold text-white">
                  {line.replace(/\*\*/g, "")}
                </p>
              );
            }
            if (line.trim() === "") return <br key={i} />;
            return (
              <p key={i} className="text-gray-300 leading-relaxed mb-4">
                {line}
              </p>
            );
          })}
        </article>

        {/* CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-600/20 to-teal-600/20 border border-blue-500/20">
          <h3 className="text-white font-bold text-xl mb-2">
            Ready to visit Sri Lanka?
          </h3>
          <p className="text-gray-400 mb-4">
            Let our local experts plan the perfect trip for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/packages"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold text-center hover:from-blue-500 hover:to-teal-500 transition-all"
            >
              Browse Packages
            </Link>
            <a
              href="https://wa.me/message/APC6K67QK43IF1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-green-600/20 border border-green-500/30 text-green-400 font-semibold text-center flex items-center justify-center gap-2 hover:bg-green-600/30 transition-all"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
