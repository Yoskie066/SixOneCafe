"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-stone-900/20 to-black animate-pulse-slow" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Where Great Coffee{" "}
            <span className="block text-white/60">Meets Great Moments</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
            Enjoy premium coffee, signature drinks, and a comfortable space designed for relaxation, productivity, and connection.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#menu"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-md transition-all duration-300 hover:scale-105 hover:bg-white/90 active:scale-95 w-full sm:w-auto inline-block text-center"
            >
              Order Now
            </Link>
            <Link
              href="#about"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white hover:text-black active:scale-95 w-full sm:w-auto inline-block text-center"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
    </section>
  );
}