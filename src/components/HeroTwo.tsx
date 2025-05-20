"use client";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchLandingPage } from "./api";

export function HeroTwo() {
  const [HeroData, setHeroData] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

   useEffect(() => {
      const getHeroData = async () => {
        try {
          setIsLoading(true);
          const { data } = await fetchLandingPage("jmopf3walmead7nx9l42ex1j");
          setHeroData(data);
        } catch (error) {
          console.error("Error fetching hero data:", error);
        } finally {
          setIsLoading(false);
        }
      };
  
      getHeroData();
    }, []);

  return (
    <section className="relative pt-20 pb-20 bg-gradient-to-r from-orange-300 to-orange-100 min-h-screen overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-12 lg:items-center mt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-lg mx-auto lg:mx-0"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {HeroData.heroTitle}
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-700">
              {HeroData.heroSubtitle}
            </p>
            <p className="mt-4 text-sm leading-6 text-gray-600">
                {HeroData?.features?.[0]?.paragraph}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <ButtonLink
                href="#contact"
                size="lg"
                className="bg-black text-white hover:bg-black/80 rounded-full"
              >
                CONTACT OUR SHOPIFY PLUS DEVELOPERS
              </ButtonLink>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <Image
              src="https://oyecommerz.com/wp-content/uploads/2024/08/Shopify-Plus-Development-Agency.png"
              alt="Shopify Plus Development"
              width={600}
              height={500}
              priority
              className="mx-auto"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
