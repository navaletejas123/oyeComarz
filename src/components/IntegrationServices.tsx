"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";
import { IntegrationCard } from "@/components/ui/integration-card";
import { CreditCard, Database, BarChart3, LineChart } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchLandingPage } from "./api";

export function IntegrationServices() {
  const [intServices, setIintServices] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getServices = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchLandingPage("a7afrbtr7pw12ufatm0xrc3r");
        setIintServices(data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getServices();
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

 const iconMap:any = {
  "Payment Gateway Integration": <CreditCard className="h-10 w-10 text-orange-500" />,
  "CRM Integration": <Database className="h-10 w-10 text-orange-500" />,
  "ERP Integration": <BarChart3 className="h-10 w-10 text-orange-500" />,
  "PIM Integration": <LineChart className="h-10 w-10 text-orange-500" />,
};


  return (
    <section className="py-16 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {intServices.heroTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {intServices?.features?.integrations?.map((service:any, i:any) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
            >
              <IntegrationCard
               icon={iconMap[service.title] ?? <CreditCard className="h-10 w-10 text-orange-500" />} // Optional: only if your data has icons
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="mt-16 text-center"
        >
          <ButtonLink
            href="#schedule"
            className="bg-black text-white hover:bg-black/80 rounded-full"
          >
            SCHEDULE A CALL
          </ButtonLink>
        </motion.div>
      </Container>
    </section>
  );
}
