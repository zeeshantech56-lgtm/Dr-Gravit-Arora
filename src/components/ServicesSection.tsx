/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { services } from '../data';
import { Service } from '../types';
import { ChevronRight, ArrowUpRight, CheckCircle2, ShieldAlert, X, HeartPulse } from 'lucide-react';

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleOpenInfo = (service: Service) => {
    setSelectedService(service);
  };

  const handleCloseInfo = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-24 bg-navy-900 text-cream-50 relative overflow-hidden">
      {/* Editorial Decorative Backgrounds */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-gold-400/5 blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-gold-400/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#dabf6a] uppercase font-bold px-3 py-1.5 rounded-full bg-gold-400/5 border border-gold-400/15">
            Key Practice Areas
          </span>
          <h2 className="font-serif text-3xl sm:text-4.5xl font-semibold mt-6 mb-4 text-cream-50 tracking-tight">
            Conditions I Treat
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mb-6" />
          <p className="text-sm sm:text-base text-cream-100/60 font-medium">
            Providing tailored treatment regimens backed by active medical literature, targeting biochemical pathways directly for long-term health restoration.
          </p>
        </div>

        {/* 2x2 Services Grid */}
        <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              onClick={() => handleOpenInfo(service)}
              className="relative group bg-navy-950/40 border border-gold-400/10 p-8 sm:p-10 rounded-2xl shadow-xl hover:border-gold-400/40 hover:scale-[1.01] hover:bg-navy-950/60 transition-all duration-400 flex flex-col justify-between items-start text-left cursor-pointer overflow-hidden interactive-card"
            >
              {/* Top Highlight border line overlay */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold-400 group-hover:w-full transition-all duration-500" />
              
              <div className="w-full">
                {/* Header Icon + Title */}
                <div className="flex items-center justify-between w-full mb-6">
                  <div className="w-14 h-14 rounded-xl bg-navy-900 border border-gold-400/20 flex items-center justify-center text-3xl shadow-md group-hover:bg-gold-400 group-hover:text-navy-950 transition-colors duration-500">
                    {service.icon}
                  </div>
                  <div className="w-8 h-8 rounded-full border border-gold-400/20 flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:border-gold-400 text-gold-400 transition-all duration-500">
                    <ArrowUpRight className="w-4 h-4 transform group-hover:scale-110" />
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream-50 group-hover:text-gold-300 transition-colors mb-3">
                  {service.title}
                </h3>
                
                <p className="text-sm text-cream-100/70 leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              {/* Bottom Quick Symptom Badges */}
              <div className="w-full">
                <div className="flex flex-wrap gap-2 pt-4 border-t border-cream-100/10 w-full mb-6">
                  {service.symptoms.slice(0, 2).map((sym, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-mono tracking-wider text-gold-400/70 bg-gold-400/5 border border-gold-400/10 px-2 py-1 rounded-md"
                    >
                      {sym}
                    </span>
                  ))}
                  {service.symptoms.length > 2 && (
                    <span className="text-[9px] font-mono tracking-wider text-cream-100/40 px-1 py-1">
                      +{service.symptoms.length - 2} more
                    </span>
                  )}
                </div>

                <span className="text-xs font-semibold tracking-wider uppercase text-gold-400 inline-flex items-center gap-1 group-hover:translate-x-1.5 transition-all">
                  <span>Explore Diagnostic Approach</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Detail modal (Side/Center Drawer Modal) */}
      {selectedService && (
        <div id="service-modal-overlay" className="fixed inset-0 z-55 bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            id="service-modal-box"
            className="w-full max-w-2xl bg-navy-900 border border-gold-400/30 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col max-h-[85vh] animate-[fade-up_0.4s_cubic-bezier(0.16,1,0.3,1)]"
          >
            {/* Elegant Header Accent */}
            <div className="h-1.5 bg-gradient-to-r from-gold-500 to-gold-400" />
            
            <button
              id="close-service-modal"
              onClick={handleCloseInfo}
              className="absolute top-5 right-5 text-cream-100/60 hover:text-gold-400 cursor-pointer p-2 rounded-full hover:bg-navy-800 transition-colors z-20"
              aria-label="Close detailed service info"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Inner scrollable area */}
            <div className="p-8 sm:p-10 overflow-y-auto">
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-navy-950 border border-gold-400/30 flex items-center justify-center text-4xl shadow-md">
                  {selectedService.icon}
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3.5xl font-bold text-cream-50">
                    {selectedService.title}
                  </h3>
                  <p className="text-xs font-mono tracking-widest text-[#dabf6a] uppercase mt-1">
                    Care Protocol By Dr. Garvit Arora
                  </p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-cream-100/10 my-6" />

              <div className="space-y-6 text-left">
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-gold-400 font-bold mb-3 flex items-center gap-1.5">
                    <HeartPulse className="w-3.5 h-3.5" />
                    <span>Clinical Overview</span>
                  </h4>
                  <p className="text-sm text-cream-100/80 leading-relaxed">
                    {selectedService.longDesc}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-gold-400 font-bold mb-3 flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Key Indicators & Indications</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.symptoms.map((sym, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-cream-100/70 p-2 border border-gold-400/5 bg-navy-950/20 rounded-lg">
                        <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                        <span>{sym}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Patient advice message */}
                <div className="p-4 rounded-xl bg-gold-400/5 border border-gold-400/15 text-xs text-cream-100/60 leading-relaxed italic mt-4">
                  Note: The clinical indications listed above are for preventive orientation only. An in-person consultation with laboratory evaluations is required to correctly configure therapeutic dosing and medications.
                </div>
              </div>

            </div>

            {/* Modal Bottom Call to Action */}
            <div className="bg-navy-950 px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-cream-100/10">
              <span className="text-xs font-mono text-cream-100/50">Need a comprehensive analysis?</span>
              <button
                id="modal-quick-schedule-btn"
                onClick={() => {
                  handleCloseInfo();
                  // Trigger smooth scroll to appointment section
                  const formSec = document.getElementById('appointment-form-anchor');
                  if (formSec) {
                    formSec.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gold-400 text-navy-950 hover:bg-gold-300 font-semibold px-6 py-2.5 rounded-full text-xs tracking-wider uppercase transition-colors shrink-0 cursor-pointer"
              >
                Schedule Diagnostic Visit
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
