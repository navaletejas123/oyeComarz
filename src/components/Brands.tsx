"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import Image from "next/image";

export function Brands() {
  const brands = [
    { name: "Brand 1", logo: "https://via.placeholder.com/150x50" },
    { name: "Brand 2", logo: "https://via.placeholder.com/150x50" },
    { name: "Brand 3", logo: "https://via.placeholder.com/150x50" },
    { name: "Brand 4", logo: "https://via.placeholder.com/150x50" },
    { name: "Brand 5", logo: "https://via.placeholder.com/150x50" },
    { name: "Brand 6", logo: "https://via.placeholder.com/150x50" },
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The Best Brands Choose OyeCommerz
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="flex items-center justify-center"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={150}
                height={50}
                className="grayscale hover:grayscale-0 transition-all"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
