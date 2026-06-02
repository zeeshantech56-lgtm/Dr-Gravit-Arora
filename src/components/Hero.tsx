/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Calendar, Phone, Award, ShieldCheck, HeartPulse } from 'lucide-react';
import { doctorBase64 as doctorImg } from '../doctorBase64';

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start animation trigger on mount
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-navy-900 flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Editorial aesthetic background glow and pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 70% 50%, rgba(201, 168, 76, 0.15) 0%, #0a1628 70%)'
        }}
      />

      {/* Subtle floating particles in the background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => {
          const size = Math.random() * 4 + 2;
          const delay = Math.random() * 8;
          const left = Math.random() * 100;
          return (
            <div
              key={i}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${12 + Math.random() * 8}s`,
              }}
              className="absolute bottom-[-10px] rounded-full bg-gold-300/20 shadow-[0_0_8px_rgba(201,168,76,0.5)] animate-bounce animate-[fade-up_10s_infinite_linear]"
            />
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Block: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tiny Luxury Tag */}
            <div 
              id="hero-tag-wrap"
              style={{ transitionDelay: '100ms' }}
              className={`mb-6 px-4 py-1 border-l-2 border-gold-400 transition-all duration-1000 ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="text-[#C9A84C] text-xs font-bold tracking-[0.3em] uppercase">
                General Physician & Consultant
              </span>
            </div>

            {/* Main Headline - Staggered lines */}
            <h1 className="font-serif text-5xl sm:text-6.5xl lg:text-7xl text-[#F5F0E8] leading-[0.95] mb-6 tracking-tight">
              <span 
                style={{ transitionDelay: '250ms' }}
                className={`block transition-all duration-1000 transform ${
                  animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Expert Care.
              </span>
              <span 
                style={{ transitionDelay: '400ms' }}
                className={`block italic text-gold-400 relative mt-2 transition-all duration-1000 transform ${
                  animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Trusted Healing.
              </span>
            </h1>

            {/* Editorial Subline */}
            <p 
              id="hero-subtitle"
              style={{ transitionDelay: '550ms' }}
              className={`text-lg text-cream-100/70 max-w-sm mb-10 font-light leading-relaxed transition-all duration-1000 transform ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Dedicated medical consultation at Phoenix Hospital, Indore. Combining clinical excellence with a patient-first philosophy.
            </p>

            {/* Call to Actions */}
            <div 
              style={{ transitionDelay: '700ms' }}
              className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full sm:w-auto transition-all duration-1000 transform ${
                animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <button
                id="hero-cta-appointment"
                onClick={onBookClick}
                className="px-8 py-4 bg-gold-400 text-navy-900 font-bold rounded-sm text-sm uppercase tracking-widest hover:scale-105 transition-transform duration-350 cursor-pointer shadow-lg"
              >
                Book Appointment
              </button>

              <a
                id="hero-cta-call"
                href="tel:+919039492591"
                className="px-8 py-4 border border-[#e7e773] text-[#d3cc7b] font-bold rounded-sm text-sm uppercase tracking-widest hover:scale-105 hover:bg-gold-400/5 transition-transform text-center"
              >
                Call: +91 9039492591
              </a>
            </div>

            {/* Quick credentials badge strip */}
            <div 
              style={{ transitionDelay: '850ms' }}
              className={`flex items-center gap-6 mt-12 pt-8 border-t border-cream-100/10 w-full max-w-xl transition-all duration-1000 ${
                animate ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex items-center gap-2 text-xs text-cream-100/50">
                <Award className="w-5 h-5 text-gold-400/60" />
                <span>Indore Top consultant</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-gold-400/30" />
              <div className="flex items-center gap-2 text-xs text-cream-100/50">
                <ShieldCheck className="w-5 h-5 text-gold-400/60" />
                <span>100% HIPAA Private</span>
              </div>
            </div>

          </div>

          {/* Right Block: Portrait Visuals */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div 
              style={{ transitionDelay: '400ms' }}
              className={`relative transition-all duration-1200 transform scale-95 opacity-0 ${
                animate ? 'scale-100 opacity-100' : ''
              }`}
            >
              {/* Concentric Gold Background Circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 border border-gold-400/30 rounded-full pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] border border-gold-400/10 rounded-full pointer-events-none" />

              {/* Major Circle Container */}
              <div 
                className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-gold-400 z-10 relative"
                style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))' }}
              >
                {/* Real Doctor Stock Image loaded securely */}
                <img
                  src={doctorImg}
                  alt="Dr. Garvit Arora Portrait"
                  referrerPolicy="no-referrer"
                  style={{ objectPosition: 'center top' }}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Badge rotating 12 degrees */}
              <div 
                style={{ transitionDelay: '1000ms' }}
                className="absolute bottom-10 right-10 bg-gold-400 text-navy-900 px-4 py-3 rounded-sm font-bold text-xs uppercase tracking-widest z-20 shadow-lg rotate-12"
              >
                Phoenix Hospital • Indore
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
