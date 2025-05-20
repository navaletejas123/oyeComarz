"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export function Contact() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-300 to-orange-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6 mt-6">
              Ready to Skyrocket Your Brand? Get in Touch Now!
            </h2>
            <p className="text-gray-600 mb-8">
              Feel free to reach out to us through your preferred method of
              contact. We are eager to connect with you and explore how our team
              can contribute to your success.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <a
                  href="tel:+17042158218"
                  className="text-gray-700 hover:text-orange-500"
                >
                  +1 704 215 8218
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <a
                  href="mailto:grow@oyecommerz.com"
                  className="text-gray-700 hover:text-orange-500"
                >
                  grow@oyecommerz.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className=" rounded-xl p-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Contact Us
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-800 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-full px-5 py-3 text-base shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-full px-5 py-3 text-base shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-800 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded-3xl px-5 py-3 text-base shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Message"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-black text-white py-3 text-sm tracking-widest font-semibold shadow-md hover:bg-gray-900"
                >
                  SEND
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
