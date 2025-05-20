"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

export function Testimonialss() {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What our happy customers are saying
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <blockquote className="text-gray-700 italic mb-4">
                "OyeCommerz's Shopify theme designs are pure magic! They took
                our vision and turned it into a stunning reality. Their
                attention to detail and passion for perfection shines through in
                every pixel."
              </blockquote>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-current text-yellow-400"
                  />
                ))}
              </div>
              <p className="font-semibold text-gray-900">Edward Kennedy</p>
              <p className="text-sm text-gray-600">
                Marketing Director, Acme Inc
              </p>
            </div>
            <div>
              <Image
                src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg"
                alt="Customer testimonial"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
