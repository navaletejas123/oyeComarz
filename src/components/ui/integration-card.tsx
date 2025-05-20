"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface IntegrationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function IntegrationCard({ icon, title, description, className }: IntegrationCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group bg-gray-50 rounded-2xl shadow-sm hover:shadow-md p-6 transition-all duration-200 border border-gray-100",
        className
      )}
    >
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-white shadow-sm">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">{title}</h3>
      <p className="text-sm text-gray-600 text-center">{description}</p>
    </motion.div>
  );
}