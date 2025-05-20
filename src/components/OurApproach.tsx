"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Users, Siren as Fire, Lightbulb, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchLandingPage } from "./api";

export function OurApproach() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [approch, getApproch] = useState<any>({})
  console.log(approch, "approch")

  useEffect(() => {
    const getApproh = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchLandingPage("v6ps8e4xf149dn060ov1xzm0");
        getApproch(data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getApproh();
  }, []);

  const approaches = [
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
    },
    {
      icon: <Fire className="h-8 w-8 text-orange-500" />,
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-orange-500" />,
    },
    {
      icon: <Heart className="h-8 w-8 text-orange-500" />,
    },
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
            {approch.heroTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approch.features?.map((approach:any, index:any) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="bg-gray-50 rounded-lg p-6 text-center"
            >
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-orange-100 rounded-full mb-4">
                   {approaches[index]?.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {approach.title}
              </h3>
              <p className="text-gray-600">{approach.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
