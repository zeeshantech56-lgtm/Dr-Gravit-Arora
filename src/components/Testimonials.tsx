/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { testimonials } from '../data';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section 
      id="reviews" 
      className="py-24 bg-cream-100 relative overflow-hidden"
    >
      {/* Editorial Decorative Overlays resembling medical journals */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold-400/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gold-400/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/20 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-gold-700 uppercase font-bold">
              Patient Trust & Care Quality
            </span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-navy-900 tracking-tight mt-2">
            Clinical Outcomes & <span className="italic font-light text-gold-600">Patient Experiences</span>
          </h2>
          
          <p className="text-navy-900/70 text-sm max-w-md mx-auto font-light leading-relaxed mt-4">
            First-hand clinical accounts from patients experiencing optimized metabolic health, managed diabetes, and attentive primary care under Dr. Arora.
          </p>
          <div className="w-12 h-[1px] bg-gold-400/60 mx-auto mt-6" />
        </div>

        {/* Testimonials Static Grid for Premium Scannable Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-2">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              id={`testimonial-card-${test.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="bg-white border border-gold-400/15 hover:border-gold-400/40 hover:shadow-2xl hover:shadow-gold-400/5 transition-all duration-500 p-8 sm:p-10 rounded-lg flex flex-col justify-between text-left relative group cursor-pointer"
            >
              {/* Corner decorative bracket lines for an elite clinical aesthetic */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold-400/10 group-hover:border-gold-400/30 transition-colors" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold-400/10 group-hover:border-gold-400/30 transition-colors" />

              <div>
                {/* Card top row: Quote icon and stars */}
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-lg bg-gold-400/5 border border-gold-400/10 flex items-center justify-center group-hover:bg-gold-400/10 transition-colors">
                    <Quote className="w-5 h-5 text-gold-600 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  {/* Verified Rating Pill */}
                  <div className="flex items-center gap-1.5 bg-gold-400/5 px-3 py-1 border border-gold-400/10 rounded-full">
                    <div className="flex gap-0.5">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-gold-500 text-gold-500 shrink-0" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono tracking-wider text-gold-600 font-bold">5.0</span>
                  </div>
                </div>

                {/* Review Text */}
                <blockquote className="font-serif text-base text-navy-900/85 leading-relaxed italic mb-8 relative z-10 pl-2 border-l border-gold-400/20">
                  "{test.review}"
                </blockquote>
              </div>

              {/* Patient Profile signature */}
              <div className="mt-auto">
                <div className="w-full h-[1px] bg-gradient-to-r from-gold-400/15 via-gold-400/5 to-transparent mb-6" />
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-gold-400/25 bg-navy-900 text-gold-400 flex items-center justify-center font-bold text-sm tracking-wider font-mono shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-500">
                    {test.initials}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-sm text-navy-900 leading-none">
                        {test.author}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    </div>
                    <p className="text-[10px] font-mono tracking-widest uppercase text-gold-600 font-bold mt-1.5 leading-none">
                      {test.role}
                    </p>
                    <p className="text-[9px] font-mono tracking-widest uppercase text-navy-900/40 mt-1 leading-none">
                      {test.clinic}
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Professional Trust Summary Footer Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 bg-white border border-gold-400/15 rounded-xl px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-sm"
        >
          <div className="flex items-center gap-3.5">
            <span className="text-xl shrink-0">🤝</span>
            <span className="text-xs font-serif italic text-navy-900/80 text-left">
              "We prioritize absolute transparency, deep clinical conversations, and personalized pathways toward lifelong metabolic wellness."
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0 bg-gold-400/10 px-4 py-1.5 border border-gold-400/20 rounded-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[9px] font-mono uppercase tracking-widest text-gold-800 font-bold">
              100% Patient Verified
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
