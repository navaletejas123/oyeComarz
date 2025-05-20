"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";
import { MarketingCard } from "@/components/ui/marketing-card";
import { Search, Mail, Share2, TrendingUp, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchLandingPage } from "./api";

export function MarketingServices() {
  const [services, setServices] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);


  useEffect(() => {
    const fetchMarketingServices = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchLandingPage("uqjrrbv2r3np7pr86vigdbc4");
        setServices(data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMarketingServices();
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

 const marketingServices = [
  {
    icon: <Search className="h-10 w-10 text-orange-500" />,
    title: "SEO Optimization",
  },
  {
    icon: <Mail className="h-10 w-10 text-orange-500" />,
    title: "Email Marketing Campaigns",
  },
  {
    icon: <Share2 className="h-10 w-10 text-orange-500" />,
    title: "Social Media Advertising",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-orange-500" />,
    title: "Conversion Rate Optimization (CRO)",
  },
];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {services.heroTitle}
          </h2>
        </motion.div>

       <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
  {services?.features?.map((feature:any, i:any) => {
    const matchedService = marketingServices.find(
      (s) => s.title === feature.title
    );

    return (
      <motion.div
        key={i}
        custom={i}
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
      >
        <MarketingCard
          icon={matchedService?.icon || null}
          title={feature.title}
          description={feature.description}
        />
      </motion.div>
    );
  })}
</div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="mt-16 text-center"
        >
          <ButtonLink
            href="#talk"
            className="bg-black text-white hover:bg-black/80 rounded-full inline-flex items-center gap-2"
          >
            TALK TO SHOPIFY PLUS DEVELOPMENT <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </motion.div>
      </Container>
    </section>
  );
}
