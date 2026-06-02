/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Award, Heart, Microscope, Stethoscope, ShieldAlert } from 'lucide-react';

export default function WhyChoose() {
  const pillars = [
    {
      id: 1,
      icon: <Award className="w-10 h-10 text-gold-500" />,
      title: 'Experienced & Certified',
      desc: 'With over a decade of continuous clinical practice and consultancy at Phoenix Hospital, Dr. Arora combines extensive therapeutic background with rigorous medical guidelines.'
    },
    {
      id: 2,
      icon: <Heart className="w-10 h-10 text-gold-500" />,
      title: 'Patient-First Approach',
      desc: 'No hurried routines. We prioritize active listening, parsing full psychological stress maps, diet logs, and lifestyle bottlenecks before advising medication.'
    },
    {
      id: 3,
      icon: <Microscope className="w-10 h-10 text-gold-500" />,
      title: 'Modern Diagnostic Approach',
      desc: 'Integrating continuous glucose monitors, blood pressure profiles, and sensitive hormone panels, we manage systemic biochemical indices rather than just dulling symptoms.'
    }
  ];

  return (
    <section id="why-choose" className="py-24 bg-cream-100 relative overflow-hidden">
      {/* Visual background lines making a faint geometric grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="10" y1="0" x2="10" y2="100" stroke="#c9a84c" strokeWidth="0.5" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="#c9a84c" strokeWidth="0.5" />
          <line x1="90" y1="0" x2="90" y2="100" stroke="#c9a84c" strokeWidth="0.5" />
          <line x1="0" y1="30" x2="100" y2="30" stroke="#c9a84c" strokeWidth="0.5" />
          <line x1="0" y1="70" x2="100" y2="70" stroke="#c9a84c" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-gold-600 uppercase font-bold">
            Clinical Values
          </span>
          <h2 className="font-serif text-3xl sm:text-4.5xl font-semibold text-navy-900 mt-4 mb-4 tracking-tight">
            Why Choose Dr. Arora
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto" />
        </div>

        {/* 3-Column Pillars Layout */}
        <div id="pillars-columns" className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              id={`why-choose-pillar-${pillar.id}`}
              className="bg-white border border-gold-400/10 p-8 sm:p-10 rounded-2xl shadow-xl hover:shadow-2xl hover:border-gold-400/30 transition-all duration-300 text-left flex flex-col items-start hover:-translate-y-1.5 cursor-default"
            >
              {/* Pillar Icon Boundary */}
              <div id="pillar-icon-outer" className="w-16 h-16 rounded-2xl bg-cream-50 flex items-center justify-center mb-8 border border-gold-400/20 shadow-md">
                {pillar.icon}
              </div>

              <h3 className="font-serif text-xl font-bold text-navy-900 mb-4 tracking-tight">
                {pillar.title}
              </h3>

              <div className="w-10 h-[1.5px] bg-gold-400 mb-4" />

              <p className="text-sm text-navy-800/80 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Minimalist summary note banner */}
        <div className="mt-16 bg-navy-900 text-cream-100/90 rounded-2xl p-6 sm:p-8 border border-gold-400/20 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center shrink-0">
              <Stethoscope className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <p className="font-serif text-lg font-semibold text-cream-50">Need direct emergency guidelines or OPD references?</p>
              <p className="text-xs text-cream-100/60 mt-0.5">Call our dedicated outpatient helpdesk directly for assistance.</p>
            </div>
          </div>
          <a
            id="emergency-hours-phone"
            href="tel:+919039492591"
            className="bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 font-semibold px-6 py-3 rounded-full text-xs text-navy-950 tracking-wider uppercase transition-all whitespace-nowrap inline-flex items-center gap-2"
          >
            Call Helpdesk
          </a>
        </div>

      </div>
    </section>
  );
}
