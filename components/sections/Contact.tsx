'use client';
import { FadeUp } from '@/components/ui/FadeUp';

export function ContactSection() {
  const businessName = "Joshi Medical Stores";
  const address = "Bazar Line Rd, Dhad, Maharashtra 443106, India";
  const phone = "094213 06535";
  const cid = "17249739557974179552";

  return (
    <section id="contact" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: 'var(--color-accent)' }}>Get in Touch</span>
                <h2 className="text-4xl lg:text-6xl font-bold" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-headline)' }}>Visit Us in Dhad</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12">
                <div className="bg-white p-10 rounded-[40px] shadow-2xl shadow-primary/5 hover:translate-x-2 transition-transform duration-500 group">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Our Location</h3>
                  <p className="text-gray-500 mb-6">{address}</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Landmark: Bazar Line Road</p>
                </div>

                <div className="bg-white p-10 rounded-[40px] shadow-2xl shadow-primary/5 hover:translate-x-2 transition-transform duration-500 group">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Contact Support</h3>
                  <p className="text-gray-500 mb-6 underline decoration-accent/30 decoration-2 underline-offset-4">{phone}</p>
                  <div className="flex gap-4">
                    <a href={`tel:${phone.replace(/\s/g, '')}`} className="px-6 py-2 rounded-full font-bold text-xs bg-primary text-white" style={{ backgroundColor: 'var(--color-primary)' }}>Call Now</a>
                    <a href={`https://wa.me/91${phone.replace(/\s/g, '')}`} target="_blank" className="px-6 py-2 rounded-full font-bold text-xs bg-[#25D366] text-white">WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="relative group">
              <div className="absolute inset-0 bg-accent/10 rounded-[60px] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" style={{ backgroundColor: 'var(--color-accent)', opacity: 0.1 }} />
              <div className="h-full min-h-[500px] rounded-[50px] overflow-hidden shadow-2xl border-8 border-white">
                <iframe
                  src={`https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${encodeURIComponent(businessName + ', ' + address)}&t=&z=16&ie=UTF8&iwloc=B&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${businessName} Location`}
                />
              </div>
              <a 
                href={`https://maps.google.com/?cid=${cid}`} 
                target="_blank"
                className="absolute top-10 right-10 px-8 py-4 bg-white rounded-full font-bold text-sm shadow-xl shadow-primary/20 hover:scale-105 transition-transform flex items-center gap-3"
                style={{ color: 'var(--color-primary)' }}
              >
                <svg className="w-5 h-5 text-accent" style={{ color: 'var(--color-accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Open in Maps →
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
