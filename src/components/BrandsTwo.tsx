"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchTags } from "./api";

export function BrandsTwo() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tags, setTags] = useState<any[]>([]);

  useEffect(() => {
    const getTags = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchTags();
        setTags(data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getTags();
  }, [])

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
          {tags.map((tag, index) => (
            <motion.div
              key={tag.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="flex items-center justify-center text-center p-4 bg-white rounded-lg shadow-md"
            >
              <span className="text-lg font-semibold">{tag.name}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
