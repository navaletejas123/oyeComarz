"use client"
import React, { useEffect, useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import Logo from './Logo';
import { fetchFooter } from './api';
import axios from 'axios';

const Footer: React.FC = () => {
  const [footer, setFooter] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true);


  useEffect(() => {
    const getFooter = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchFooter();
        setFooter(data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getFooter();
  }, []);

  const postEmail = () =>{
    try {
      const response = axios.post(``)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="mb-6 text-white">
              <Logo />
            </div>
            <p className="text-gray-400 mb-6">
              We are a Shopify App Development and Design Agency dedicated to empowering growing brands.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            {/* <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">App Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Store Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Theme Customization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shopify Plus Migration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Store Optimization</a></li>
            </ul> */}
            <ul className="space-y-4">
              {footer.map((item) => (
                <li key={item.id}>
                  <a
                    href='#'
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest insights on Shopify development
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow p-3 bg-gray-800 rounded-l-md border-0 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  className="bg-orange-500 p-3 rounded-r-md hover:bg-orange-600 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </form>
            <p className="text-sm text-gray-500">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} OyeCommerz. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;