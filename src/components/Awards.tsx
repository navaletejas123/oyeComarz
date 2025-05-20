"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import Image from "next/image";

export function Awards() {
  const awards = [
    { name: "Award 1", logo: "https://via.placeholder.com/100" },
    { name: "Award 2", logo: "https://via.placeholder.com/100" },
    { name: "Award 3", logo: "https://via.placeholder.com/100" },
    { name: "Award 4", logo: "https://via.placeholder.com/100" },
    { name: "Award 5", logo: "https://via.placeholder.com/100" },
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
            Awards And Achievements
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <Image
                src={award.logo}
                alt={award.name}
                width={100}
                height={100}
                className="grayscale hover:grayscale-0 transition-all"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
