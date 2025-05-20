  import React, { useEffect, useState } from 'react';
  import { ArrowRight } from 'lucide-react';
  import { fetchPortFolio } from './api';
  import Image from 'next/image';

  const Portfolio: React.FC = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [Portfolio, setPortFolio] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

      useEffect(() => {
        const getPortFoio = async () => {
          try {
            setIsLoading(true);
            const { data } = await fetchPortFolio();
            setPortFolio(data);
          } catch (error) {
            console.error("Error fetching hero data:", error);
          } finally {
            setIsLoading(false);
          }
        };
    
        getPortFoio();
      }, []);
    
    const projects = [
      {
        title: "Luxury Fashion Brand",
        category: "store-design",
        description: "Complete redesign with custom checkout experience",
        image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        title: "Supplement Store",
        category: "app-development",
        description: "Custom subscription management app",
        image: "https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        title: "Home Goods Marketplace",
        category: "store-design",
        description: "Multi-vendor marketplace with custom frontend",
        image: "https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        title: "Beauty Brand",
        category: "app-development",
        description: "Product recommendation engine based on skin type",
        image: "https://images.pexels.com/photos/5625117/pexels-photo-5625117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        title: "Food Delivery",
        category: "shopify-plus",
        description: "Enterprise migration with custom delivery integration",
        image: "https://images.pexels.com/photos/5650024/pexels-photo-5650024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        title: "Jewelry Brand",
        category: "shopify-plus",
        description: "Shopify Plus implementation with 3D product viewer",
        image: "https://images.pexels.com/photos/5650030/pexels-photo-5650030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ];

    const filteredProjects = activeTab === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeTab);

    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our recent Shopify projects and success stories
            </p>
          </div>
          
          <div className="flex justify-center mb-12 space-x-4 overflow-x-auto pb-4">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 rounded-full transition-colors ${
                activeTab === 'all' 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setActiveTab('store-design')}
              className={`px-5 py-2 rounded-full transition-colors ${
                activeTab === 'store-design' 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Store Design
            </button>
            <button 
              onClick={() => setActiveTab('app-development')}
              className={`px-5 py-2 rounded-full transition-colors ${
                activeTab === 'app-development' 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              App Development
            </button>
            <button 
              onClick={() => setActiveTab('shopify-plus')}
              className={`px-5 py-2 rounded-full transition-colors ${
                activeTab === 'shopify-plus' 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Shopify Plus
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Portfolio.map((project, index) => (
              <div 
                key={index} 
                className="rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl group"
              >
                <div className="h-64 overflow-hidden">
                  <Image 
                    src={project.imageUrl} 
                    alt={"image"}
                    width={100}
                    height={100} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-orange-600 font-medium group-hover:text-orange-700"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="#" 
              className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 text-lg"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    );
  };

  export default Portfolio;