'use client';
import { useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingButtons } from '@/components/layout/FloatingButtons';
import { Chatbot } from '@/components/layout/Chatbot';
import { HeroSection } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { ServicesSection } from '@/components/sections/Services';
import { AboutSection } from '@/components/sections/About';
import { StorySection } from '@/components/sections/Story';
import { GallerySection } from '@/components/sections/Gallery';
import { CTABand } from '@/components/sections/CTABand';
import { ContactSection } from '@/components/sections/Contact';

const BUSINESS_ID = 'P1224';

export default function Home() {
  const [products, setProducts] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`/api/proxy/public-products?business_id=${BUSINESS_ID}`);
        const data = await res.json();
        if (data.success) {
          setProducts(data.products);
        }
      } catch (err) {
        console.error('Failed to fetch products:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Default flags if fetch fails or loading
  const flags = products || {
    calendar: { active: true },
    google_map: { active: true },
    ai_assistant: { active: true },
    product_catalog: { active: true }
  };

  return (
    <main className="relative min-h-screen bg-off-white" style={{ backgroundColor: 'var(--color-background)' }}>
      <Navbar />
      
      <HeroSection 
        businessName="Joshi Medical Stores"
        headline="Your Trusted Partner in Health at Dhad"
        subheadline="Providing a comprehensive range of medicines and expert healthcare guidance on Bazar Line Rd for over 80 years."
        ctaPrimary="Contact Us Today"
        rating="4.7/5"
        reviewCount={6}
      />

      <TrustBar items={["4.7 Star Rated", "80+ Years of Service", "All Medicines Available", "Expert Guidance"]} />

      <ServicesSection />

      <AboutSection />

      <StorySection />

      <GallerySection />

      <CTABand />

      {flags.google_map?.active !== false && <ContactSection />}

      <Footer />

      <FloatingButtons />
      
      {flags.ai_assistant?.active !== false && <Chatbot />}
    </main>
  );
}
