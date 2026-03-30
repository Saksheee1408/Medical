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
      name: "Prescription Medicines",
      description: "Full range of allopathic medicines for all chronic and acute conditions. We ensure authenticity in every dose.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      name: "Healthcare Consultation",
      description: "Professional guidance on medicine usage, dosage instructions, and general health queries from expert staff.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      name: "OTC Products",
      description: "Wide selection of over-the-counter health and wellness products, including personal care and hygiene essentials.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      name: "Emergency Supplies",
      description: "Essential first-aid kits and emergency medical supplies available in-store for immediate care and preparedness.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--color-accent)' }}>Essential Care</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-headline)' }}>Our Comprehensive Services</h2>
            <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }} />
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
