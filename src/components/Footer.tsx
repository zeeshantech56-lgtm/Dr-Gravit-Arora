/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Youtube, Facebook, Instagram, Phone, Mail, Clock, ShieldCheck, HeartPulse, SearchCode } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About Doctor', href: '#about' },
    { label: 'Clinical Services', href: '#services' },
    { label: 'OPD Schedule', href: '#hours' },
    { label: 'Map & Location', href: '#contact' },
  ];

  return (
    <footer id="footer-root" className="bg-navy-900 text-cream-100 border-t border-gold-400/10 relative overflow-hidden">
      
      {/* Editorial aesthetic background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gold-400/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
        
        {/* Core footer columns */}
        <div id="footer-grid-wrapper" className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-cream-100/10 items-start text-left">
          
          {/* Column 1: Logo & Tagline */}
          <div className="md:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-navy-850 to-navy-900 border border-gold-400/30 flex items-center justify-center font-serif text-xs font-bold text-gold-400">
                GA
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-base font-bold text-cream-50 leading-none">Dr. Garvit Arora</span>
                <span className="text-[9px] tracking-widest text-gold-400 font-mono mt-1 leading-none uppercase">General Physician & Consultant</span>
              </div>
            </div>
            <p className="text-xs text-cream-100/50 leading-relaxed mb-6 max-w-sm">
              Providing modern systemic metabolic controls, specialized thyroid profiling, and cardiovascular evaluations. Consulting at Phoenix Hospital, Indore.
            </p>
            
            {/* Social icons line */}
            <div id="socials-wrap" className="flex items-center gap-3">
              <a
                id="social-youtube"
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-navy-900 border border-gold-400/15 flex items-center justify-center text-cream-100 hover:text-gold-400 hover:border-gold-400/40 transition-colors"
                aria-label="YouTube channel link"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                id="social-facebook"
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-navy-900 border border-gold-400/15 flex items-center justify-center text-cream-100 hover:text-gold-400 hover:border-gold-400/40 transition-colors"
                aria-label="Facebook page link"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                id="social-instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-navy-900 border border-gold-400/15 flex items-center justify-center text-cream-100 hover:text-gold-400 hover:border-gold-400/40 transition-colors"
                aria-label="Instagram handle link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                id="social-google-search"
                href="https://google.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-navy-900 border border-gold-400/15 flex items-center justify-center text-cream-100 hover:text-gold-400 hover:border-gold-400/40 transition-colors"
                aria-label="Google Clinic Profile link"
              >
                <SearchCode className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation shortcuts */}
          <div className="md:col-span-4 justify-start">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#dabf6a] font-bold mb-6">
              Navigation Menu
            </h4>
            <div id="footer-links-grid" className="grid grid-cols-2 gap-x-4 gap-y-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  id={`footer-link-${link.href.slice(1)}`}
                  href={link.href}
                  className="text-xs text-cream-100/60 hover:text-gold-450 transition-colors tracking-wide leading-none"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Diagnostic quick numbers */}
          <div className="md:col-span-4 flex flex-col items-start">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#dabf6a] font-bold mb-6">
              Phoenix Helpdesk
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-navy-900 flex items-center justify-center shrink-0 border border-gold-400/10">
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                </div>
                <a href="tel:+919039492591" className="text-xs font-mono text-cream-100 hover:text-gold-400 transition-colors">
                  +91 9039492591
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-navy-900 flex items-center justify-center shrink-0 border border-gold-400/10">
                  <Mail className="w-3.5 h-3.5 text-gold-400" />
                </div>
                <a href="mailto:drgarvit.arora@gmail.com" className="text-xs font-mono text-cream-100 hover:text-gold-400 transition-colors">
                  drgarvit.arora@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-navy-900 flex items-center justify-center shrink-0 border border-gold-400/10">
                  <Clock className="w-3.5 h-3.5 text-gold-400" />
                </div>
                <span className="text-xs text-cream-100/60 font-medium">
                  OPD Open Mon–Sat • 11 AM – 7 PM
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright strip */}
        <div id="footer-bottom" className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-cream-100/40 font-medium font-mono uppercase tracking-wider">
            © {currentYear} Dr. Garvit Arora. Phoenix Hospital, Indore. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-[10px] text-cream-100/40 font-mono uppercase">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400/50 shrink-0" />
              <span>Patient Privacy Guaranteed</span>
            </span>
            <div className="w-1 h-1 rounded-full bg-cream-100/20" />
            <span>Digital Registry MVP</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
