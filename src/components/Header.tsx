/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';

interface HeaderProps {
  onBookClick: () => void;
}

export default function Header({ onBookClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Hours', href: '#hours' },
  ];

  return (
    <>
      <header
        id="navbar-root"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-navy-900/90 backdrop-blur-md py-4 shadow-xl border-b border-gold-400/20'
            : 'bg-transparent py-6'
        }`}
      >
        <div id="navbar-container" className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo Brand / Initials Monogram */}
          <a
            id="brand-logo-id"
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div
              id="logo-monogram-circle"
              className="w-10 h-10 rounded-full bg-gold-400 border border-gold-400/10 flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-12"
            >
              <span id="logo-monogram-letters" className="font-serif text-lg font-bold text-navy-900 tracking-wider">
                GA
              </span>
            </div>
            <div id="brand-text-container" className="flex flex-col">
              <span
                id="brand-name-id"
                className="font-serif text-lg font-semibold text-cream-50 leading-none tracking-tight group-hover:text-gold-300 transition-colors"
              >
                Dr. Garvit Arora
              </span>
              <span id="brand-title-id" className="text-[10px] tracking-widest text-gold-400 font-mono mt-0.5 uppercase">
                General Physician & Consultant
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-navbar" className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                id={`nav-${link.href.slice(1)}`}
                href={link.href}
                className="text-[10px] font-bold text-cream-100 hover:text-gold-400 transition-all uppercase tracking-[0.2em] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div id="hdr-cta-wrapper" className="hidden lg:flex items-center gap-4">
            <a
              id="nav-phone-call"
              href="tel:+919039492591"
              className="text-[10px] uppercase font-mono tracking-widest text-gold-400 hover:text-cream-50 transition-colors flex items-center gap-1.5 py-2 px-3.5 border border-gold-400/20 rounded-md hover:bg-gold-400/5 font-bold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 9039492591</span>
            </a>
            
            <button
              id="cta-book-appointment-navbar"
              onClick={onBookClick}
              className="bg-gold-400 text-navy-900 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform cursor-pointer shadow-md inline-flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Hamburg Trigger */}
          <button
            id="mobile-hamburg-trigger"
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 text-cream-100 hover:text-gold-400 focus:outline-none cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay Slide-In */}
      <div
        id="mobile-nav-panel-root"
        className={`fixed inset-0 z-40 bg-navy-950/98 flex flex-col justify-center transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div id="mobile-nav-content" className="flex flex-col items-center gap-8 px-6 text-center">
          <div id="mobile-logo-wrap" className="mb-6">
            <p className="font-serif text-3xl font-bold text-gold-400">GA</p>
            <p className="font-serif text-xl font-semibold text-cream-50 mt-1">Dr. Garvit Arora</p>
            <p className="text-xs uppercase tracking-widest text-[#97aabd] font-mono mt-1">General Physician & Consultant</p>
            <div className="w-16 h-[1px] bg-gold-400/40 mx-auto mt-4" />
          </div>

          <div id="mobile-links-container" className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                id={`mobile-nav-${link.href.slice(1)}`}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-xl tracking-wide text-cream-100 hover:text-gold-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div id="mobile-ctas-container" className="flex flex-col gap-4 w-full max-w-xs mt-8">
            <button
              id="mobile-cta-book-appointment"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full relative overflow-hidden bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase shadow-lg shadow-gold-500/20 active:scale-95 transition-transform flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
            
            <a
              id="mobile-cta-call"
              href="tel:+919039492591"
              className="w-full flex items-center justify-center gap-2 border border-gold-400/30 text-gold-400 py-3 rounded-full text-xs font-mono tracking-wider hover:bg-gold-400/5 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 9039492591</span>
            </a>
          </div>
          
          <div className="absolute bottom-10 left-0 w-full text-center">
            <p className="text-[10px] text-navy-400 font-mono tracking-widest uppercase">Indore, Madhya Pradesh</p>
          </div>
        </div>
      </div>
    </>
  );
}
