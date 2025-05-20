import React, { useEffect, useState } from 'react';
import { Code, Palette, ArrowUpRight, Layers, TrendingUp, BarChart } from 'lucide-react';
import { fetchServices } from './api';

const Services: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [services, setServices] = useState<any[]>([]);
  const servicesIcon = [
    {
      icon: <Code className="h-8 w-8 text-orange-500" />,
    },
    {
      icon: <Palette className="h-8 w-8 text-orange-500" />,
    },
    {
      icon: <Layers className="h-8 w-8 text-orange-500" />,
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
    },
    {
      icon: <ArrowUpRight className="h-8 w-8 text-orange-500" />,
    },
    {
      icon: <BarChart className="h-8 w-8 text-orange-500" />,
    }
  ];

  useEffect(() => {
    const getServices = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchServices();
        setServices(data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getServices();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Shopify Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a complete range of services to help your Shopify store succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-orange-50 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:bg-orange-100 group"
            >
              <div className="mb-4">
                {servicesIcon[index].icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              {service.description.split(' ').slice(0, 10).join(' ')} <br />
              <a
                href="#"
                className="inline-flex items-center text-orange-600 font-medium group-hover:text-orange-700"
              >
                Learn more
                <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;