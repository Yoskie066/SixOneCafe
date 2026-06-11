"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="relative bg-black text-amber-50 overflow-hidden">
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
              <span className="block text-amber-600 drop-shadow-sm">Meets Great Moments</span>
            </h1>

            <p className="mx-auto lg:mx-0 mt-6 max-w-2xl text-base text-amber-100/80 sm:text-lg">
              Enjoy premium coffee, signature drinks, and a comfortable space designed for relaxation, productivity, and connection.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="#menu"
                className="rounded-full bg-amber-700 px-6 py-3 text-sm font-semibold text-amber-50 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-amber-600 active:scale-95 w-full sm:w-auto inline-block text-center"
              >
                Order Now
              </Link>
              <Link
                href="#about"
                className="rounded-full border border-amber-600/40 px-6 py-3 text-sm font-semibold text-amber-100 transition-all duration-300 hover:scale-105 hover:border-amber-400 hover:bg-amber-800/20 hover:text-amber-50 active:scale-95 w-full sm:w-auto inline-block text-center"
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
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {!imgError ? (
                <motion.div
                  className="relative w-full h-full rounded-full overflow-hidden shadow-xl transition-all duration-500 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src="/Home_Cafe.jpg"
                    alt="SixOneCafe welcome - A cozy cup of coffee"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 256px, 384px"
                    priority
                    onError={() => setImgError(true)}
                  />
                </motion.div>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-amber-400/60 text-sm bg-stone-800/80 rounded-full">
                  Image not found<br />Please add Home_Cafe.jpg to /public
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}