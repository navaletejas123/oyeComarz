"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button-link";
import { FeatureCard } from "@/components/ui/feature-card";
import { Award, Star, BarChart, Target, Clock, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchLandingPage } from "./api";
import Loading from "./Loading";

export function WhyChooseUs() {

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [choose, setChoose] = useState<any>({});
  useEffect(() => {
    const fetchWhyChooseUs = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchLandingPage("ek0ncncnrg8e9mghse7ec0qu");
        setChoose(data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWhyChooseUs();
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

  const features = [
    {
      icon: <Award className="h-10 w-10 text-orange-500" />,
    },
    {
      icon: <Clock className="h-10 w-10 text-orange-500" />,
    },
    {
      icon: <BarChart className="h-10 w-10 text-orange-500" />,
    },
    {
      icon: <Star className="h-10 w-10 text-orange-500" />,
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-orange-500" />,
    },
    {
      icon: <Target className="h-10 w-10 text-orange-500" />,
    },
  ];

  return (
    <>
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
            {choose.heroTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {choose?.features?.data?.map((feature: any, i: any) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
            >
              <FeatureCard
                icon={features[i]?.icon} // <-- Added icon from array based on index
                title={feature.title}
                description={feature.description}
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
    </>
  );
}
