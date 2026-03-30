'use client';
import { useState } from 'react';
import { FadeUp } from '@/components/ui/FadeUp';

export function GallerySection() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Facility', 'Products'];
  
  const images = [
    { src: '/images/hero.jpg', alt: 'Pharmaceutical Products', category: 'Products' },
    { src: '/images/_hero.jpg', alt: 'Medical Supplies', category: 'Products' },
  ];

  const filteredImages = activeTab === 'All' ? images : images.filter(img => img.category === activeTab);

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--color-accent)' }}>Experience</span>
              <h2 className="text-4xl lg:text-6xl font-bold" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-headline)' }}>Our Store</h2>
            </div>
            
            <div className="flex bg-gray-50 p-2 rounded-full border border-gray-100 backdrop-blur-sm self-start lg:self-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === tab ? 'shadow-lg text-white' : 'text-gray-400 hover:text-gray-600'}`}
                  style={{ backgroundColor: activeTab === tab ? 'var(--color-primary)' : 'transparent' }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 h-full">
          {filteredImages.map((img, i) => (
            <FadeUp key={i} delay={i * 100}>
              <div className="group relative rounded-[40px] overflow-hidden aspect-[4/3] shadow-2xl bg-gray-100">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundColor: 'transparent' }} />
                <div className="absolute bottom-0 left-0 p-10 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-xs font-bold text-accent uppercase tracking-widest mb-2 block" style={{ color: 'var(--color-accent)' }}>{img.category}</span>
                  <h4 className="text-2xl font-bold text-white">{img.alt}</h4>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
