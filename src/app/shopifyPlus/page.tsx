"use client"
import { HeroTwo } from "@/components/HeroTwo";
import { ShopifyServices } from "@/components/ShopifyServices";
import { IntegrationServices } from "@/components/IntegrationServices";
import { MarketingServices } from "@/components/MarketingServices";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { fetchSeoContent } from "@/components/api";
import Head from "next/head";

export default function Home() {
  const [seo, getSeo] = useState<any>({})
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getServices = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchSeoContent("chu2xnejtkbtso84h7x4z0m3");
        getSeo(data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getServices();
  }, []);
  return (
    <>
      <Head>
        <title>{seo?.title || 'Default Title'}</title>
        <meta name="description" content={seo?.description || 'Default description'} />
        <meta name="keywords" content={seo?.keywords || ''} />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={seo?.ogTitle || ''} />
        <meta property="og:description" content={seo?.ogDescription || ''} />
        <meta property="og:image" content={seo?.ogImage || ''} />
        <meta property="og:url" content={seo?.pageUrl || ''} />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo?.ogTitle || ''} />
        <meta name="twitter:description" content={seo?.ogDescription || ''} />
        <meta name="twitter:image" content={seo?.ogImage || ''} />
      </Head>
      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroTwo />
        <ShopifyServices />
        <IntegrationServices />
        <MarketingServices />
        <WhyChooseUs />
        <Footer />
      </main>
    </>
  );
}
