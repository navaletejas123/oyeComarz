"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";
import { ServiceCard } from "@/components/ui/service-card";
import Image from "next/image";
import { Layout, Compass, Monitor, RotateCw, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchFeatures, fetchLandingPage } from "./api";

export function ShopifyServices() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [features, setFeatures] = useState<any[]>([]);
  const [Heros, setHeros] = useState<any>({});
  useEffect(() => {
    const getServices = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchFeatures();
        setFeatures(data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    const getHeros = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchLandingPage("go6k6el7yks7ktll5ayf4h67");
        setHeros(data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getServices();
    getHeros();
  }, []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * i,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-12 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-lg mx-auto lg:mx-0"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {Heros.heroTitle}
              </h2>
              <p className="mt-6 text-base leading-7 text-gray-700">
                {Heros?.features?.[0]?.paragraph}
              </p>
              <div className="mt-8">
                <ButtonLink
                  href="#explore"
                  size="lg"
                  className="bg-black text-white hover:bg-black/80 rounded-full"
                >
                  {Heros.slug}
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
                src="https://oyecommerz.com/wp-content/uploads/2024/08/Shopify-Plus-Development-Ecommerce-Agency.png"
                alt="Shopify Plus on multiple devices"
                width={600}
                height={500}
                className="mx-auto"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Shopify Plus Development Services OyeCommerz Offers
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <motion.div
                key={feature.id}
                custom={i}
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <ServiceCard
                  icon={
                    i % 3 === 0 ? (
                      <Compass className="h-10 w-10 text-orange-500" />
                    ) : i % 3 === 1 ? (
                      <Layout className="h-10 w-10 text-orange-500" />
                    ) : (
                      <Monitor className="h-10 w-10 text-orange-500" />
                    )
                  }
                  title={feature.title}
                  description={
                    feature.description?.[0]?.children?.[0]?.text || "No description"
                  }
                />
              </motion.div>
            ))}
          </div>


          <div className="mt-16 text-center">
            <ButtonLink
              href="#talk"
              className="bg-black text-white hover:bg-black/80 rounded-full inline-flex items-center gap-2"
            >
              TALK TO SHOPIFY PLUS DEVELOPMENT{" "}
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
