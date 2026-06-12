import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Blogs & News | Zephyra Travels",
  description:
    "Read our latest travel guides, tips, and news about Sri Lanka. Expert advice for your 2026 Sri Lanka holiday.",
};

const posts = [
  {
    id: "best-time-to-visit-sri-lanka",
    title: "Best Time to Visit Sri Lanka in 2026",
    excerpt:
      "Discover the ideal months to explore Sri Lanka's beaches, wildlife, and cultural sites. A complete seasonal guide for every type of traveler.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    category: "Travel Guide",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: "ella-train-ride-guide",
    title: "The Complete Guide to the Ella Train Ride",
    excerpt:
      "Everything you need to know about booking the scenic Kandy to Ella train journey — one of the most beautiful rail routes in the world.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    category: "Destinations",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: "yala-safari-tips",
    title: "10 Tips for Your Yala National Park Safari",
    excerpt:
      "Make the most of your Yala safari experience with our expert tips — from the best time to spot leopards to what to pack.",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80",
    category: "Wildlife",
    date: "Jan 5, 2026",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: "colombo-food-guide",
    title: "The Ultimate Colombo Food Guide",
    excerpt:
      "From street-side kottu roti to fine dining seafood, explore the vibrant and diverse food scene of Sri Lanka's capital city.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    category: "Food & Culture",
    date: "Dec 28, 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: "sigiriya-rock-guide",
    title: "Climbing Sigiriya: What to Expect",
    excerpt:
      "A practical guide to climbing Sigiriya Lion Rock — including tips for beating the crowds, what to bring, and the best photography spots.",
    image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&q=80",
    category: "Destinations",
    date: "Dec 20, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: "sri-lanka-budget-tips",
    title: "How to Travel Sri Lanka on a Budget in 2026",
    excerpt:
      "Sri Lanka doesn't have to be expensive. Here's our insider guide to getting the most out of your trip without breaking the bank.",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80",
    category: "Budget Travel",
    date: "Dec 12, 2025",
    readTime: "9 min read",
    featured: false,
  },
];

const categories = ["All", "Travel Guide", "Destinations", "Wildlife", "Food & Culture", "Budget Travel"];

export default function BlogsPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#060d1a] to-[#0a0f1e]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-4 block">
            Travel Insights
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Blogs &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Travel Tips
            </span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Expert guides, destination spotlights, and insider tips to help you
            plan the perfect Sri Lanka adventure.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="sticky top-16 z-30 bg-[#0a0f1e]/95 backdrop-blur-md border-b border-white/5 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all bg-white/5 border border-white/10 text-gray-400 hover:border-blue-500/30 hover:text-white first:bg-blue-600 first:text-white first:border-transparent"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto">
          {/* Featured */}
          {featured && (
            <div className="mb-16">
              <Link href={`/blogs/${featured.id}`} className="group grid lg:grid-cols-2 gap-8 bg-[#111827] rounded-3xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all">
                <div className="relative h-72 lg:h-auto overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 rounded-full text-xs font-bold text-white">
                    Featured
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full flex items-center gap-1">
                      <Tag size={10} />
                      {featured.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Calendar size={10} />
                      {featured.date}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock size={10} />
                      {featured.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors mb-4">
                    {featured.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 transition-all">
                    Read More <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.id}
                href={`/blogs/${post.id}`}
                className="group bg-[#111827] rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-1 duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent" />
                  <div className="absolute top-3 left-3 px-2 py-1 bg-blue-600/80 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                    {post.category}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={10} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={10} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-blue-400 text-sm font-medium">
                    Read More <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
