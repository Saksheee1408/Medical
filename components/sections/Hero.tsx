'use client';
import { FadeUp } from '@/components/ui/FadeUp';

interface HeroProps {
  businessName: string;
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  rating: string;
  reviewCount: number;
}

export function HeroSection({
  businessName,
  headline,
  subheadline,
  ctaPrimary,
  rating,
  reviewCount
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.jpg" 
          alt={businessName} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'var(--color-primary)', opacity: 0.8 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <div className="text-white max-w-2xl">
              <div className="inline-flex items-center gap-2 text-sm mb-6 px-4 py-2 rounded-full border border-white/30 backdrop-blur-sm">
                <span className="text-yellow-400">★</span>
                <span>{rating} Google Rating · {reviewCount}+ Reviews</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8" style={{ fontFamily: 'var(--font-headline)', color: 'white' }}>
                {headline}
              </h1>
              <p className="text-xl mb-10 leading-relaxed max-w-lg" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                {subheadline}
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="px-10 py-5 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl inline-block"
                  style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}
                >
                  {ctaPrimary}
                </a>
                <a 
                  href="#contact" 
                  className="px-10 py-5 rounded-full font-bold text-lg border-2 border-white/50 hover:bg-white/10 transition-all text-white backdrop-blur-sm"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Floating Card Design */}
          <FadeUp delay={200}>
            <div className="hidden lg:block">
              <div className="bg-white rounded-[40px] p-10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700" style={{ backgroundColor: 'var(--color-primary)' }} />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-inner" style={{ backgroundColor: 'rgba(200, 132, 26, 0.1)' }}>
                    <svg className="w-8 h-8" style={{ color: 'var(--color-accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>In-Store Availability</h3>
                  <p className="text-gray-600 mb-8">Serving the Dhad area since 1944. We stock all major chronic and acute medications.</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm font-semibold text-gray-700">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }} />
                      <span>Verified Local Pharmacists</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm font-semibold text-gray-700">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }} />
                      <span>Bazar Line Road Location</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm font-semibold text-gray-700">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }} />
                      <span>Certified Medical Care</span>
                    </div>
                  </div>
                  
                  <div className="mt-12 p-6 rounded-2xl bg-gray-50 flex items-center justify-between border border-gray-100">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Emergency Ph.</p>
                      <p className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>094213 06535</p>
                    </div>
                    <a href="tel:+919421306535" className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg shadow-accent/30 hover:scale-110 transition-transform" style={{ backgroundColor: 'var(--color-accent)' }}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
