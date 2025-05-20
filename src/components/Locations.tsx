"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

export function Locations() {
  const locations = [
    {
      country: "India",
      address:
        "H. 400, Bahadur Colony, Moti Nagar, Ward, Sagar, Madhya Pradesh 470001",
      phone: "+17042158218",
      flag: "🇮🇳",
    },
    {
      country: "USA",
      address: "10 Huron Ave Suite 115 Jersey City, NJ 07306",
      phone: "+1 (845) 802-0866",
      flag: "🇺🇸",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Locations
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.country}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{location.flag}</span>
                <h3 className="text-xl font-semibold text-gray-900">
                  {location.country}
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">{location.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-orange-500" />
                  <a
                    href={`tel:${location.phone}`}
                    className="text-gray-700 hover:text-orange-500"
                  >
                    {location.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
