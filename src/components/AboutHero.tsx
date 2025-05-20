"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { useEffect, useState } from "react";
import { fetchLandingPage } from "./api";

export function AboutHero() {
   const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hero, setHero] = useState<any>({})

  useEffect(() => {
      const getServices = async () => {
        try {
          setIsLoading(true);
          const { data } = await fetchLandingPage("f88xavcrtc7uatdituxrxf4p");
          setHero(data);
        } catch (error) {
          console.error("Error fetching hero data:", error);
        } finally {
          setIsLoading(false);
        }
      };
  
      getServices();
    }, []);

  return (
    <section className="relative pt-20 pb-10  bg-gradient-to-r from-orange-300 to-orange-100 min-h-screen overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-12 lg:items-center mt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-7xl">
             {hero.heroTitle}
            </h1>
            <ButtonLink
              href="#contact"
              className="mt-8 bg-black text-white hover:bg-black/80 rounded-full inline-block"
            >
              CONTACT NOW
            </ButtonLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <Image
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
              alt="Team collaboration"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg text-gray-700">
          {hero?.features?.[0]?.paragraph}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
