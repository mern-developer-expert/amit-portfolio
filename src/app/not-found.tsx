"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Frown } from "lucide-react";
import PrimaryButtons from "@/components/buttons/primaryButtons";

export default function NotFound() {
  return (
    <div className="min-h-screen relative flex items-center justify-center text-center px-4 bg-gradient-to-br from-[#07162b]/80 via-[#061025]/70 to-[#071826]/95">

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl"
      >
        <div className="flex justify-center mb-6">
          <Frown className="w-20 h-20 text-white/85" strokeWidth={1.5} />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#8ef3c1] via-[#3ed6ac] to-[#06b6d4]">
          404 - Page Not Found
        </h1>
        <p className="mt-4 text-lg text-slate-300 leading-relaxed">
          Oops! The page you're looking for seems to have taken a detour. It
          might have been moved, or maybe it never existed in the first place.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/">
            <PrimaryButtons
              title="Go Back Home"
              containerStyles={`px-4 py-2 rounded-2xl`}
            />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
