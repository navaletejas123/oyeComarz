import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import AnimatedSection from './components/AnimatedSection';

function App() {
  useEffect(() => {
    document.title = 'OyeCommerz | Shopify App Development and Design Agency';
  }, []);

  return (
    <div className="font-sans">
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
    </div>
  );
}

export default App;