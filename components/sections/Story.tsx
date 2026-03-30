'use client';
import { FadeUp } from '@/components/ui/FadeUp';

export function StorySection() {
  return (
    <section id="story" className="py-24 bg-[#F9F9F7] overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeUp delay={100} className="order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute inset-0 -m-6 rounded-[60px] border-2 border-primary/5 group-hover:m-0 transition-all duration-1000" />
              <div className="relative rounded-[50px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] h-[550px] bg-gray-200">
                <img 
                  src="/images/story.jpg" 
                  alt="Late Digambar Vasudev Joshi - The Legacy" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-12 left-12">
                  <p className="text-white/60 text-sm font-bold uppercase tracking-[0.3em] mb-2">Our Founder</p>
                  <h4 className="text-3xl font-bold text-white italic">Late. Digambar Vasudev Joshi</h4>
                </div>
              </div>
              
              {/* Badge */}
              <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-white shadow-2xl flex flex-col items-center justify-center border border-primary/5 p-6 text-center animate-pulse-slow">
                <span className="text-xs font-black uppercase tracking-widest text-accent mb-1" style={{ color: 'var(--color-accent)' }}>Since</span>
                <span className="text-5xl font-black text-primary" style={{ color: 'var(--color-primary)' }}>1950<span className="text-sm opacity-50 font-normal">s</span></span>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={300} className="order-1 lg:order-2 space-y-12">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.4em]" style={{ color: 'var(--color-accent)' }}>The Legacy</span>
              <h2 className="text-4xl lg:text-7xl font-bold leading-tight" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-headline)' }}>
                A Journey of <span className="text-accent italic font-light" style={{ color: 'var(--color-accent)' }}>Trust</span> & Service
              </h2>
            </div>

            <div className="space-y-8 text-xl font-light text-gray-600 leading-relaxed italic">
              <p className="relative">
                <span className="absolute -left-8 -top-4 text-7xl text-primary/10 font-serif overflow-hidden h-12">"</span>
                The story of Joshi Medical Stores is one of perseverance and vision. Our father, <span className="font-bold text-primary not-italic" style={{ color: 'var(--color-primary)' }}>Late. Digambar Vasudev Joshi</span>, was the pioneer who recognized the need for professional healthcare in the Dhad circle.
              </p>
              <p className="not-italic">
                He established the first-ever medical store in the region in the <span className="font-bold">1950s</span>, laying a foundation of integrity that has lasted for generations.
              </p>
              <p className="not-italic">
                Today, his legacy continues to guide us as we serve our community with the same dedication and care that he instilled over 80 years ago. It's more than a business; it's a heritage of health.
              </p>
            </div>

            <div className="flex items-center gap-10 pt-4">
              <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
              <div className="shrink-0 text-primary font-black uppercase tracking-[0.4em] text-xs opacity-40">
                Pioneer of Dhad
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
