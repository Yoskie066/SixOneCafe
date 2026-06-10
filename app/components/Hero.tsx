
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-stone-900/20 to-black animate-pulse-slow" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="text-center lg:text-left flex-1 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Where Great Coffee{" "}
              <span className="block text-white/60">Meets Great Moments</span>
            </h1>

            <p className="mx-auto lg:mx-0 mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
              Enjoy premium coffee, signature drinks, and a comfortable space designed for relaxation, productivity, and connection.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
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

          <motion.div
            className="flex-shrink-0 order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-black rounded-2xl">
              {!imgError ? (
                <div
                  className="relative w-full h-full transition-all duration-500 hover:scale-105"
                  style={{ filter: "drop-shadow(0 0 25px rgba(255,255,255,0.4))" }}
                >
                  <Image
                    src="/Hero.png"
                    alt="SixOneCafe welcome"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 256px, 384px"
                    priority
                    onError={() => setImgError(true)}
                  />
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/40 text-sm bg-stone-900/50 rounded-2xl">
                  Image not found<br />Please add Home.png to /public
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
    </section>
  );
}