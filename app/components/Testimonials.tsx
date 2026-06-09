
"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria R.",
      role: "Freelance Writer",
      text: "SixOneCafe has become my second office. The coffee is consistently excellent, the WiFi is fast, and the staff always greets me with a smile. Their Spanish Latte is a must-try!",
      rating: 5,
    },
    {
      name: "James L.",
      role: "Coffee Enthusiast",
      text: "Finally, a cafe that takes coffee seriously without being pretentious. The beans are fresh, the roast is perfect, and you can taste the care in every cup. Highly recommended!",
      rating: 5,
    },
    {
      name: "Tina C.",
      role: "Architect",
      text: "I love the cozy ambiance and the natural light near the window. Their Ube Sea Salt latte is unique and delicious. A great place to unwind after a long day.",
      rating: 4,
    },
    {
      name: "Paolo M.",
      role: "Student",
      text: "Affordable drinks, friendly baristas, and they have outlets at every table. Perfect for studying or group projects. The Oreo Frappe is my favorite.",
      rating: 5,
    },
    {
      name: "Leah S.",
      role: "Food Blogger",
      text: "Visited for the first time and was blown away by the presentation and taste. The Dirty Matcha and the Strawberry Milk are standout drinks. Will definitely come back!",
      rating: 5,
    },
    {
      name: "Ramon D.",
      role: "Regular Customer",
      text: "I've been coming here since they opened. The quality never drops, and they always remember my order. It's rare to find such consistency. Keep it up, SixOne!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="bg-white text-stone-900 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Testimonials
          </h2>
          <div className="w-20 h-0.5 bg-stone-900 mx-auto mt-4" />
          <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
            Real experiences from our beloved customers
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className="border border-stone-200 rounded-2xl p-6 bg-stone-50 hover:shadow-lg hover:border-stone-300 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < t.rating ? "fill-stone-900 text-stone-900" : "text-stone-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-stone-700 leading-relaxed mb-4 italic">“{t.text}”</p>
              <div>
                <p className="font-bold text-stone-900">{t.name}</p>
                <p className="text-sm text-stone-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}