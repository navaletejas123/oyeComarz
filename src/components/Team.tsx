"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin } from "lucide-react";

export function Team() {
  const team = [
    {
      name: "Anurag Jain",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      linkedin: "#",
    },
    {
      name: "Tanishree Jain",
      image:
        "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg",
      linkedin: "#",
    },
  ];

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
            Meet the Oyecommerz Visionaries
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              className="text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <a
                href={member.linkedin}
                className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
