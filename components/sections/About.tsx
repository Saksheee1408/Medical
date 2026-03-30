'use client';
import { FadeUp } from '@/components/ui/FadeUp';

export function AboutSection() {
  const checklist = ["Verified Pharmacists", "Wide Stock Availability", "Centrally Located", "Highly Rated Service", "Community Focused"];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeUp>
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-accent font-black text-6xl block mb-2" style={{ color: 'var(--color-accent)' }}>80+ Years</span>
                <span className="text-primary font-bold uppercase tracking-widest text-sm" style={{ color: 'var(--color-primary)' }}>Heritage in Dhad</span>
                <h2 className="text-4xl lg:text-6xl font-bold leading-tight" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-headline)' }}>
                  Serving the Dhad Community with Care
                </h2>
              </div>

              <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
                <p>
                  Joshi Medical Stores has been a cornerstone of the Dhad community for over 80 years, established with the mission to provide accessible healthcare to every resident.
                </p>
                <p>
                  We pride ourselves on our <span className="font-semibold text-primary" style={{ color: 'var(--color-primary)' }}>"Very good service"</span> as noted by local medical professionals. Our commitment is to ensure that no patient leaves without the medication they need.
                </p>
                <p>
                  Located conveniently on Bazar Line Rd, we serve as a vital link in the local healthcare chain, supporting both doctors and patients with reliable pharmaceutical care.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {checklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <a 
                  href="#contact" 
                  className="px-10 py-5 rounded-full font-bold text-lg inline-flex items-center gap-3 transition-all hover:gap-5"
                  style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}
                >
                  Visit Our Store
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={200}>
            <div className="relative group">
              <div className="absolute inset-0 -m-4 rounded-[60px] border-2 border-gray-100 group-hover:m-0 transition-all duration-700" />
              <div className="relative rounded-[50px] overflow-hidden shadow-2xl h-[600px]">
                <img 
                  src="/images/about.jpg" 
                  alt="About Joshi Medical Stores" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              
              {/* Floating Stat Component */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[40px] shadow-2xl border border-gray-50 flex items-center gap-6 animate-bounce-slow">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl font-bold italic" style={{ backgroundColor: 'var(--color-accent)' }}>
                  J
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Store Rating</p>
                  <p className="text-2xl font-black" style={{ color: 'var(--color-primary)' }}>4.7 / 5</p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
