"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchLandingPage } from "./api";

export function WhyChooseOyeCommerz() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [why, setWhy] = useState<any>({})
  useEffect(() => {
    const fetchWhy = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchLandingPage("suazi10m49e78i9g5fpihm5c");
        setWhy(data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchWhy();
  }, []);
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-12 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
              alt="Team meeting"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            {why.heroTitle}
            </h2>
            <p className="text-gray-700 mb-4">
            {why?.features?.[0]?.paragraph}
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
