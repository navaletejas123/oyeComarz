"use client"
import { AboutHero } from "@/components/AboutHero";
import { fetchSeoContent } from "@/components/api";
import { Awardss } from "@/components/Awardss";
import { BrandsTwo } from "@/components/BrandsTwo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { OurApproach } from "@/components/OurApproach";
import { Team } from "@/components/Team";
import { Testimonialss } from "@/components/Testimonialss";
import { WhyChooseOyeCommerz } from "@/components/WhyChooseOyeCommerz";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function WhoWeArePage() {
  const [seo, getSeo] = useState<any>({})
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getServices = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchSeoContent("rg206pxz6qdtpnj1ehsi5872");
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
        <AboutHero />
        <OurApproach />
        <WhyChooseOyeCommerz />
        <BrandsTwo />
        <Team />
        <Awardss />
        <Testimonialss />
        <Footer />
      </main>
    </>
  );
}
