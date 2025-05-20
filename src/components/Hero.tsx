import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fetchHeroData } from "./api";
import BentoGrid from "./BentoGrid";

const Hero: React.FC = () => {
  const [heroData, setHeroData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getHeroData = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchHeroData();
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
    <section className="relative pt-20 pb-20 bg-gradient-to-b from-orange-200 to-orange-100 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {isLoading ? (
              <span className="block h-12 w-3/4 md:w-1/2 mx-auto bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></span>
            ) : (
              heroData?.heroTitle
            )}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {isLoading ? (
              <span className="block h-8 w-full md:w-3/4 mx-auto bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse"></span>
            ) : (
              heroData?.heroSubtitle
            )}
          </motion.p>

          <motion.button
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium inline-flex items-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            LET'S TALK
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Feature Grid Section */}
      <div className="px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Features
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Designed with care, built with precision
          </p>
        </motion.div>

        <BentoGrid features={heroData?.features} isLoading={isLoading} />
      </div>

      {/* Background Elements */}
      <div className="absolute top-40 -left-64 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-40 -right-64 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    </section>
  );
};

export default Hero;
