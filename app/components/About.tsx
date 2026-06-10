
"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      <img
        src="/Background.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            About SixOneCafe
          </h2>
          <div className="w-20 h-0.5 bg-white mx-auto mt-4" />
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto backdrop-blur-md bg-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/20 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="space-y-6 text-white/90 leading-relaxed">
            <p className="text-base sm:text-lg">
              SixOne Cafe began as a dream shared by friends who wanted to bring genuine, handcrafted coffee to the heart of Cavite. 
              Located at 121 Zulueta St., San Roque, our space is more than just a cafe — it's a gathering place for those who 
              appreciate quiet mornings, good conversations, and excellent brews.
            </p>
            <p className="text-base sm:text-lg">
              Every cup we serve is made with carefully selected beans, locally roasted and brewed with precision. We believe that 
              coffee should be both comforting and inspiring — whether you need a bold espresso to start your day or a smooth latte 
              to unwind in the afternoon.
            </p>
            <p className="text-base sm:text-lg">
              At SixOne, we value community, quality, and simplicity. Come as you are — work, chat, or simply sit back. We look 
              forward to sharing a cup with you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}