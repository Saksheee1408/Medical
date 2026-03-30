'use client';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#brand' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Store', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-xl py-4' : 'bg-transparent py-8'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4 group cursor-pointer" id="brand">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center font-black text-xl transition-transform duration-500 group-hover:rotate-[360deg]" 
            style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}
          >
            JM
          </div>
          <span 
            className={`font-black uppercase tracking-tighter text-2xl hidden md:block ${scrolled ? 'text-primary' : 'text-white'}`} 
            style={{ color: scrolled ? 'var(--color-primary)' : '#fff', fontFamily: 'var(--font-headline)' }}
          >
            JOSHI <span className="font-light opacity-80">MEDICAL</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-accent relative group overflow-hidden ${scrolled ? 'text-primary' : 'text-white'}`}
              style={{ color: scrolled ? 'var(--color-primary)' : '#FFFFFF', textShadow: scrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.3)' }}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent translate-y-full transition-transform duration-300 group-hover:translate-y-0" style={{ backgroundColor: 'var(--color-accent)' }} />
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase transition-all hover:scale-105 shadow-xl shadow-primary/20"
            style={{ backgroundColor: scrolled ? 'var(--color-primary)' : 'var(--color-accent)', color: '#fff' }}
          >
            Contact Us →
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-12 h-12 flex items-center justify-center p-2 rounded-2xl bg-white/10 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 transition-transform duration-300 ${scrolled ? 'bg-primary' : 'bg-white'} ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 transition-opacity duration-300 ${scrolled ? 'bg-primary' : 'bg-white'} ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 transition-transform duration-300 ${scrolled ? 'bg-primary' : 'bg-white'} ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-primary/95 backdrop-blur-2xl z-40 lg:hidden flex flex-col items-center justify-center transition-all duration-700 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        <div className="flex flex-col items-center gap-8 py-20 text-white">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-2xl font-bold uppercase tracking-[0.2em] hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="mt-8 px-12 py-5 rounded-full font-bold text-xl uppercase"
            style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us →
          </a>
        </div>
      </div>
    </nav>
  );
}
