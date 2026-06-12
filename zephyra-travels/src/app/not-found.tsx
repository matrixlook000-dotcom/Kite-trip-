import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-4">
          404
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Looks like this page took an unexpected detour. Let&apos;s get you
          back on the right track to your Sri Lanka adventure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold hover:from-blue-500 hover:to-teal-500 transition-all"
          >
            <Home size={16} />
            Go Home
          </Link>
          <Link
            href="/packages"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all"
          >
            <ArrowLeft size={16} />
            Browse Packages
          </Link>
        </div>
      </div>
    </div>
  );
}
