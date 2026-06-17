"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative bg-black text-amber-50 overflow-hidden py-20 sm:py-28 lg:py-32">
      <style jsx>{`
        @keyframes borderGlow {
          0% {
            border-color: rgba(180, 83, 9, 0.4);
            box-shadow: 0 0 0px rgba(245, 158, 11, 0);
          }
          50% {
            border-color: rgba(245, 158, 11, 0.8);
            box-shadow: 0 0 20px rgba(245, 158, 11, 0.5);
          }
          100% {
            border-color: rgba(180, 83, 9, 0.4);
            box-shadow: 0 0 0px rgba(245, 158, 11, 0);
          }
        }
        .glowing-border {
          animation: borderGlow 2s ease-in-out infinite;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            About <span className="text-amber-600">Us</span>
          </h2>

          <div className="w-20 h-0.5 bg-amber-600 mx-auto mt-4 mb-8" />

          <div className="bg-black/80 backdrop-blur-sm border rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl glowing-border">
            <div className="space-y-6 text-amber-100/80 leading-relaxed text-base sm:text-lg">
              <p>
                SixOne Cafe began as a dream shared by friends who wanted to bring
                genuine, handcrafted coffee to the heart of our community. Our space is
                more than just a cafe — it's a gathering place for those who
                appreciate quiet mornings, good conversations, and excellent
                brews.
              </p>
              <p>
                Every cup we serve is made with carefully selected beans, locally
                roasted and brewed with precision. We believe that coffee should
                be both comforting and inspiring — whether you need a bold
                espresso to start your day or a smooth latte to unwind in the
                afternoon.
              </p>
              <p>
                At SixOne, we value community, quality, and simplicity. Come as
                you are — work, chat, or simply sit back. We look forward to
                sharing a cup with you.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}