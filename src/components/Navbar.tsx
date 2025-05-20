"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link className="flex-shrink-0" href="/">
            <Logo />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-gray-800 hover:text-orange-500 transition-colors">
                SERVICES <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 hidden group-hover:block transition-all duration-300">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100"
                >
                  App Development
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100"
                >
                  Store Design
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100"
                >
                  Migrations
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100"
                >
                  Optimization
                </a>
              </div>
            </div>
            <Link
              href="/shopifyPlus"
              className="text-gray-800 hover:text-orange-500 transition-colors"
            >
              SHOPIFY PLUS
            </Link>
            <Link
              href="/who-we-are"
              className="text-gray-800 hover:text-orange-500 transition-colors"
            >
              WHO WE ARE
            </Link>
            <a
              href="#"
              className="text-gray-800 hover:text-orange-500 transition-colors"
            >
              PORTFOLIO
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-orange-500 transition-colors"
            >
              BLOG
            </a>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-orange-500 transition-colors"
            >
              CONTACT
            </Link>
          </div>

          <div className="hidden md:block">
            <button className="bg-black text-white px-5 py-2 rounded-full shadow-md shadow-gray-400 hover:bg-gray-800 transition-colors font-medium">
              FREE AUDIT
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-orange-500 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
          <a
            href="#"
            className="block px-3 py-2 text-gray-800 hover:bg-orange-100 rounded-md"
          >
            SERVICES
          </a>
          <Link
            href="/shopifyPlus"
            className="block px-3 py-2 text-gray-800 hover:bg-orange-100 rounded-md"
          >
            SHOPIFY PLUS
          </Link>
          <a
            href="#"
            className="block px-3 py-2 text-gray-800 hover:bg-orange-100 rounded-md"
          >
            WHO WE ARE
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-gray-800 hover:bg-orange-100 rounded-md"
          >
            PORTFOLIO
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-gray-800 hover:bg-orange-100 rounded-md"
          >
            BLOG
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-gray-800 hover:bg-orange-100 rounded-md"
          >
            CONTACT
          </a>
          <div className="mt-4 px-3">
            <button className="w-full bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-colors font-medium">
              FREE AUDIT
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
