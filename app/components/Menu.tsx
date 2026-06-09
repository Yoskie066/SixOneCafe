
"use client";

import { motion } from "framer-motion";
import { Coffee, Sparkles, Milk, Flame, Cherry, Plus, Beer } from "lucide-react";

export default function Menu() {
  const categories = [
    {
      title: "Espresso Base",
      icon: <Coffee className="w-5 h-5" />,
      type: "table",
      headers: ["Drink", "12oz Hot", "16oz Iced"],
      items: [
        { name: "Americano", hot: "P100", iced: "P110" },
        { name: "Latte", hot: "P110", iced: "P120" },
        { name: "Cappuccino", hot: "P110", iced: "P120" },
        { name: "French Vanilla", hot: "P130", iced: "P130" },
        { name: "Dirty Hazelnut", hot: "P130", iced: "P140" },
        { name: "Spanish Latte", hot: "P130", iced: "P130" },
        { name: "Caramel Macchiato", hot: "P140", iced: "P140" },
        { name: "Salted Caramel", hot: "P140", iced: "P140" },
        { name: "Dark Mocha", hot: "P140", iced: "P140" },
        { name: "White Mocha", hot: "P140", iced: "P140" },
        { name: "SeaSalt Latte", hot: "P140", iced: "P140" },
        { name: "Dirty Matcha", hot: "P140", iced: "P150" },
      ],
    },
    {
      title: "Signature Drinks",
      icon: <Sparkles className="w-5 h-5" />,
      type: "table",
      headers: ["Drink", "12oz Hot", "16oz Iced"],
      items: [
        { name: "six.one Blend", hot: "P170", iced: "P180" },
        { name: "Roasted Almond Latte", hot: "P150", iced: "P160" },
        { name: "Mocha Strawberry Latte", hot: "P150", iced: "P160" },
        { name: "SeaSalt Matcha Latte", hot: "P155", iced: "P165" },
        { name: "Ube SeaSalt", hot: "P150", iced: "P160" },
        { name: "Caramel Seasalt", hot: "P150", iced: "P160" },
      ],
    },
    {
      title: "Non-Coffee Based Iced (22oz)",
      icon: <Milk className="w-5 h-5" />,
      type: "grid",
      items: [
        "Chocolate Milk P130",
        "White Choco P130",
        "Strawberry Milk P130",
        "Oreo Milk P130",
        "Choco Hazelnut P140",
        "Choco Berry P140",
        "Matcha Latte P140",
      ],
    },
    {
      title: "Frappe Coffee Based (22oz)",
      icon: <Flame className="w-5 h-5" />,
      type: "grid",
      items: [
        "French Vanilla P170",
        "Salted Caramel P170",
        "Coffee Jelly P180",
        "Dark Mocha P180",
        "Java Chips P200",
      ],
    },
    {
      title: "Frappe Non-Coffee Based (22oz)",
      icon: <Beer className="w-5 h-5" />,
      type: "grid",
      items: [
        "Choco Almond Milk P160",
        "Matcha Strawberry P160",
        "Milo Dinosaur P185",
        "Oreo Cream P185",
        "Strawberry Oreo P185",
        "Vanilla Cream P150",
        "Strawberry Cream P180",
      ],
    },
    {
      title: "Fruity Soda",
      icon: <Cherry className="w-5 h-5" />,
      type: "grid",
      items: [
        "Matcha P185",
        "Stickers P200",
        "Lychee P120",
        "Hershey's Chocolate P200",
        "Strawberry P120",
        "Green Apple P120",
        "Blueberry P120",
        "Lemon P120",
        "Mixed Berries P120",
        "Apple Berries P120",
      ],
    },
    {
      title: "Add-ons",
      icon: <Plus className="w-5 h-5" />,
      type: "grid",
      items: [
        "Nata P25",
        "Coffee Jelly P30",
        "Oreo P30",
        "SeaSalt Cream P30",
        "Cream P30",
        "Sub Oat P30",
        "Extra Syrup P40",
        "Extra Shot P40",
      ],
    },
  ];

  return (
    <section id="menu" className="bg-black text-white py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Our Menu
          </h2>
          <div className="w-20 h-0.5 bg-white mx-auto mt-4" />
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Handcrafted coffee, signature drinks, and delightful refreshments
          </p>
        </motion.div>

        <motion.div
          className="space-y-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              className="border border-white/10 rounded-2xl p-5 md:p-6 bg-white/5 backdrop-blur-sm hover:border-white/30 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-5 pb-2 border-b border-white/20">
                <div className="p-2 bg-white/10 rounded-full text-white/80 transition">
                  {cat.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold">{cat.title}</h3>
              </div>

              {cat.type === "table" ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm sm:text-base">
                    <thead>
                      <tr className="border-b border-white/20 text-white/60">
                        {cat.headers?.map((h, i) => (
                          <th key={i} className="text-left py-2 font-semibold first:pl-0">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {(cat.items as { name: string; hot: string; iced: string }[]).map(
                        (item, i) => (
                          <tr
                            key={i}
                            className="border-b border-white/10 hover:bg-white/5 transition-colors"
                          >
                            <td className="py-2 font-medium">{item.name}</td>
                            <td className="py-2">{item.hot}</td>
                            <td className="py-2">{item.iced}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {(cat.items as string[]).map((item, i) => {
                    const lastSpace = item.lastIndexOf(" ");
                    const name = item.slice(0, lastSpace);
                    const price = item.slice(lastSpace + 1);
                    return (
                      <div
                        key={i}
                        className="flex justify-between items-center border-b border-white/10 py-2 text-white/80 hover:text-white hover:border-white/30 transition-all duration-200"
                      >
                        <span className="text-sm">{name}</span>
                        <span className="text-sm font-semibold text-white/90 ml-2">
                          {price}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}