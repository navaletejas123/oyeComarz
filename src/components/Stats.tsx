import React from 'react';
import { Users, ShoppingBag, Award, Clock } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      value: '200+',
      label: 'Shopify Stores',
      icon: <ShoppingBag className="h-8 w-8 text-orange-500" />,
    },
    {
      value: '50+',
      label: 'Custom Apps',
      icon: <Award className="h-8 w-8 text-orange-500" />,
    },
    {
      value: '95%',
      label: 'Client Retention',
      icon: <Users className="h-8 w-8 text-orange-500" />,
    },
    {
      value: '7 Years',
      label: 'Experience',
      icon: <Clock className="h-8 w-8 text-orange-500" />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Track Record</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Delivering exceptional results for Shopify merchants since 2017
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-xl p-8 text-center transition-transform hover:scale-105"
            >
              <div className="inline-flex items-center justify-center p-3 bg-gray-700 rounded-full mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">{stat.value}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Shopify Plus Partner</h3>
            <p className="text-white opacity-90 mb-6">
              As certified Shopify Plus partners, we bring enterprise-level expertise to your e-commerce business.
            </p>
            <a 
              href="#" 
              className="inline-block bg-white text-orange-600 px-6 py-2 rounded-md hover:bg-gray-100 transition-colors font-medium"
            >
              Learn More
            </a>
          </div>
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Free Shopify Audit</h3>
            <p className="text-white opacity-90 mb-6">
              Get a comprehensive review of your Shopify store with actionable recommendations.
            </p>
            <a 
              href="#" 
              className="inline-block bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors font-medium"
            >
              Request Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;