"use client";

import { motion } from "framer-motion";
import { MapPin, Link as LinkIcon } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-amber-50 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Get in <span className="text-amber-600">Touch</span>
          </h2>
          <div className="w-20 h-0.5 bg-amber-600 mx-auto mt-4" />
          <p className="mt-4 text-amber-100/80 max-w-2xl mx-auto">
            Visit us, send a message, or follow us online
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-amber-800/40 shadow-xl w-auto max-w-sm hover:border-amber-600/60 hover:shadow-lg hover:shadow-amber-900/20 transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-900/30 rounded-full shrink-0">
                  <MapPin className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-amber-100">Visit Us</h3>
                  <a
                    href="https://www.google.com/maps/place/Six.One+Cafe/@14.4814359,120.9046749,17z/data=!3m1!4b1!4m6!3m5!1s0x3397cd0028b58367:0x4fc82416fb49569b!8m2!3d14.4814359!4d120.9046749!16s%2Fg%2F11yyfrf6rr?hl=en&entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-100/80 hover:text-amber-300 underline transition inline-block"
                  >
                    121 Zulueta Rd., Brgy 61-A, San Roque<br />
                    Cavite, Philippines, 4100
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-900/30 rounded-full shrink-0">
                  <LinkIcon className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-amber-100">Social Media</h3>
                  <div className="space-y-1">
                    <a
                      href="https://www.facebook.com/six.one.cafe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-amber-100/80 hover:text-amber-300 underline transition"
                    >
                      Facebook: Six.One Cafe
                    </a>
                    <a
                      href="https://www.instagram.com/six.onecafe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-amber-100/80 hover:text-amber-300 underline transition"
                    >
                      Instagram: six.onecafe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}