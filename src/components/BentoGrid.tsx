import React from "react";
import { motion } from "framer-motion";

export interface FeatureItem {
  title: string;
  description: string;
  image: string;
  size?: "small" | "medium" | "large";
}

interface BentoGridProps {
  features: FeatureItem[] | undefined;
  isLoading: boolean;
}

const ShimmerItem = ({
  size = "medium",
}: {
  size?: "small" | "medium" | "large";
}) => {
  const getSpanClass = () => {
    switch (size) {
      case "small":
        return "col-span-1 row-span-1";
      case "large":
        return "col-span-2 row-span-2 md:col-span-2 md:row-span-2";
      default:
        return "col-span-1 row-span-1 md:col-span-2 md:row-span-1";
    }
  };

  return (
    <div
      className={`relative ${getSpanClass()} bg-white/80 rounded-3xl overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full animate-shimmer" />
      <div className="h-full w-full bg-gray-200/60 backdrop-blur-sm" />
    </div>
  );
};

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const BentoGrid: React.FC<BentoGridProps> = ({ features, isLoading }) => {
  // Define default sizes for each position
  const defaultSizes: ("small" | "medium" | "large")[] = [
    "large",
    "medium",
    "medium",
    "large",
    "large",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
      {isLoading ? (
        // Loading state
        <>
          <ShimmerItem size="medium" />
          <ShimmerItem size="medium" />
          <ShimmerItem size="small" />
          <ShimmerItem size="medium" />
          <ShimmerItem size="small" />
          <ShimmerItem size="medium" />
        </>
      ) : (
        // Render actual features
        features?.map((feature, index) => {
          const size =
            feature.size || defaultSizes[index % defaultSizes.length];

          // Determine grid span based on size
          const getSpanClass = () => {
            switch (size) {
              case "small":
                return "col-span-1 row-span-1";
              case "large":
                return "col-span-2 row-span-2 md:col-span-2 md:row-span-2";
              default:
                return "col-span-1 row-span-1 md:col-span-2 md:row-span-1";
            }
          };

          return (
            <motion.div
              key={index}
              className={`${getSpanClass()} group`}
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              <div className="h-full w-full p-1 md:p-2">
                <div className="relative h-full w-full overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:shadow-orange-100/50 ring-1 ring-black/[0.02]">
                  {/* Content wrapper */}
                  <div className="flex h-full flex-col p-6 md:p-8">
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4">
                      {feature.description}
                    </p>

                    {/* Image */}
                    <div
                      className={`mt-auto flex items-center justify-center ${
                        size === "large" ? "h-48 md:h-64" : "h-32 md:h-40"
                      }`}
                    >
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="max-h-full max-w-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })
      )}
    </div>
  );
};

export default BentoGrid;
