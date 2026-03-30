'use client';
import { FadeUp } from '@/components/ui/FadeUp';

export function TrustBar({ items }: { items: string[] }) {
  return (
    <section className="py-12 border-y overflow-hidden" style={{ backgroundColor: 'var(--color-primary)', borderColor: 'rgba(255,255,255,0.1)' }}>
      <FadeUp>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10">
                  <svg className="w-5 h-5" style={{ color: 'var(--color-accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white font-semibold tracking-wide uppercase text-xs" style={{ fontFamily: 'var(--font-body)' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
