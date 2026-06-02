/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { doctorBase64 as doctorImg } from '../doctorBase64';

export default function AboutSection() {
  const credentials = [
    { title: 'MBBS Degree', value: 'High Honours', dept: 'Medical Sciences' },
    { title: 'Consultant', value: 'General Medicine', dept: 'Phoenix Hospital' },
    { title: 'Practice Lead', value: 'Indore Central', dept: '10+ Years Care' }
  ];

  return (
    <section id="about" className="py-24 bg-cream-100 relative overflow-hidden">
      {/* Editorial Decorative Grids */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <svg className="absolute top-10 right-10 text-gold-500 w-24 h-24" fill="currentColor" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" className="text-gold-400" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div id="about-columns" className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Layered Photo Collage */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Core Image container and border */}
            <div className="w-full max-w-sm sm:max-w-none relative z-10">
              {/* Layered offset gold bordered box slightly behind and offset bottom-right */}
              <div className="absolute -bottom-4 -right-4 top-4 left-4 border-2 border-gold-400/60 rounded-2xl z-0 pointer-events-none" />

              {/* Main portrait card */}
              <div className="rounded-2xl p-2 bg-white shadow-2xl border border-gold-400/15 relative z-10">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-navy-100">
                  <img
                    src={doctorImg}
                    alt="Dr. Garvit Arora Consultation Work"
                    referrerPolicy="no-referrer"
                    style={{ objectPosition: 'center top' }}
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-[1.04]"
                  />
                  
                  {/* Visual Accent badge */}
                  <div className="absolute bottom-4 right-4 bg-navy-900/90 backdrop-blur text-cream-50 px-4 py-2 border border-gold-400/30 rounded-lg text-left">
                    <span className="text-[9px] font-mono tracking-widest text-[#dabf6a] uppercase block">Regd. Practitioner</span>
                    <span className="font-serif text-xs font-bold text-cream-50">Indore MP Medical Council</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro-detail overlay */}
            <div className="absolute top-1/2 -left-10 bg-white border border-gold-400/20 p-4 rounded-xl shadow-xl z-20 max-w-[180px] hidden xl:flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gold-400/25 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-gold-600" />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase text-[#425e7b] tracking-wider">Metabolism</p>
                <p className="text-xs font-bold text-navy-900 leading-tight">Evidence Based Protocols</p>
              </div>
            </div>

          </div>

          {/* Right: Editorial Narrative Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Visual Overpass */}
            <span className="text-xs font-mono tracking-widest text-gold-600 uppercase font-bold mb-3 flex items-center gap-2">
              <span>Biography & Philosophy</span>
              <span className="w-12 h-[1px] bg-gold-400 inline-block" />
            </span>

            <h2 className="font-serif text-3xl sm:text-4.5xl font-semibold text-navy-900 mb-8 leading-tight tracking-tight">
              A Physician You Can <span className="italic font-normal text-gold-600">Trust</span>
            </h2>

            <div className="text-navy-800/85 text-base leading-relaxed space-y-6 max-w-xl">
              <p>
                Dr. Garvit Arora represents a new subclass of medical care. As a General Physician with comprehensive academic background and inpatient training, he is known for parsing intricate symptoms to form clear, systematic remedial treatments.
              </p>
              <p>
                Based at Indore’s state-of-the-art <span className="font-semibold text-navy-900">Phoenix Hospital</span>, his clinical portfolio specializes in reversing and treating modern endocrine struggles (Diabetes & Thyroid panels), managing hypertension loops, and resolving critical post-acute infectious states.
              </p>
            </div>

            {/* Premium Quote block */}
            <div className="my-8 pl-6 border-l-4 border-gold-400 max-w-lg relative">
              <Quote className="absolute -top-3 -left-3 w-8 h-8 text-gold-400/20 z-0 transform -rotate-12" />
              <p className="font-serif text-lg sm:text-xl font-medium tracking-wide italic text-navy-900 relative z-10 leading-relaxed">
                "Good medicine begins with listening. Every symptom is a syllable in a patient’s story, and our goal is to read that story accurately."
              </p>
              <p className="text-xs uppercase font-mono tracking-wider font-bold text-gold-600 mt-2">
                — Dr. Garvit Arora, Consultant General Medicine
              </p>
            </div>

            {/* Quick credentials strip with badges */}
            <div id="credentials-badges-wrap" className="w-full mt-6">
              <p className="text-xs uppercase font-mono tracking-wider font-bold text-navy-900/40 mb-4">Credentials & Affiliations</p>
              <div id="credentials-grid" className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                {credentials.map((cred, i) => (
                  <div
                    key={i}
                    id={`about-badge-${i}`}
                    className="p-4 bg-white border border-gold-400/10 rounded-xl shadow-lg shadow-navy-100/30 text-left hover:border-gold-400/30 transition-all cursor-default"
                  >
                    <p className="text-[10px] font-mono uppercase tracking-widest text-gold-600 leading-none mb-1 font-bold">
                      {cred.title}
                    </p>
                    <p className="font-serif text-sm font-semibold text-navy-900">
                      {cred.value}
                    </p>
                    <p className="text-[10px] text-navy-400 mt-1 leading-none font-medium">
                      {cred.dept}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
