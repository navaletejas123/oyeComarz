'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import Stats from '@/components/Stats'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import AnimatedSection from '@/components/AnimatedSection'
import Head from 'next/head';
import { useEffect, useState } from 'react'
import { fetchSeoContent } from '@/components/api'

export default function Home() {
  const[seo, getSeo] = useState<any>({})
 const [isLoading, setIsLoading] = useState<boolean>(true);

 useEffect(() => {
     const getServices = async () => {
       try {
         setIsLoading(true);
         const { data } = await fetchSeoContent("qqqqm7tdhbopkqpi0bs8xt4s");
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
      <main className="font-sans">
        <Navbar />
        <Hero />
        <AnimatedSection>
          <Services />
        </AnimatedSection>
        <AnimatedSection>
          <Stats />
        </AnimatedSection>
        <AnimatedSection>
          <Portfolio />
        </AnimatedSection>
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>
        <Footer />
        <ChatWidget />
      </main>
    </>
  )
}