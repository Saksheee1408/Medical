'use client';
import { FadeUp } from '@/components/ui/FadeUp';

interface Service {
  name: string;
  description: string;
  icon: React.ReactNode;
}

export function ServicesSection() {
  const services: Service[] = [
    {
      name: "Allopathy",
      description: "Full range of modern medicines and healthcare solutions for acute and chronic conditions, ensuring quality and authenticity.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      name: "Ayurvedic",
      description: "Traditional herbal remedies and natural wellness products rooted in ancient wisdom for holistic health and balance.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    },
    {
      name: "Homeopathy",
      description: "Gentle and effective alternative medicine focusing on treating the individual with natural substances and minimal side effects.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.638.319a4 4 0 01-3.533.03l-.308-.154a3 3 0 00-3.114.125l-2.023 1.348a2 2 0 00-.81 1.954l.582 3.492a2 2 0 001.99 1.668h11.238a2 2 0 001.99-1.668l.582-3.492a2 2 0 00-.765-1.948z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11V3m0 0a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      )
    },
    {
      name: "General",
      description: "Essential daily healthcare products, over-the-counter medicines, and first-aid supplies for your immediate medical needs.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
      )
    },
    {
      name: "Veterinary",
      description: "Specialized medical supplies and medicines dedicated to the health and well-being of your beloved pets and livestock.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14c-3.314 0-6 2.686-6 6v2h12v-2c0-3.314-2.686-6-6-6z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11v.01M16 8.5v.01M8 8.5v.01M12 6v.01M10 7.5v.01M14 7.5v.01" />
        </svg>
      )
    },
    {
      name: "Cosmetics",
      description: "Premium selection of personal care, dermatology solutions, skin health, and beauty products from trusted global brands.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--color-accent)' }}>Comprehensive Care</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-headline)' }}>Our Medical Services</h2>
            <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }} />
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <FadeUp key={i} delay={i * 100}>
              <div className="group h-full p-10 rounded-[40px] border border-gray-50 hover:border-accent/10 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 flex flex-col items-center text-center bg-white">
                <div className="w-16 h-16 rounded-3xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-accent/5" style={{ backgroundColor: 'rgba(200, 132, 26, 0.05)', color: 'var(--color-accent)' }}>
                  <div className="w-8 h-8">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-headline)' }}>{service.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
