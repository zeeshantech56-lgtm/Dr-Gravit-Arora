/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { schedule } from '../data';
import { Calendar, Clock, AlertCircle, Phone } from 'lucide-react';

export default function ScheduleSection() {
  return (
    <section id="hours" className="py-24 bg-cream-100 relative overflow-hidden">
      {/* Editorial Decorative Overlays */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-400/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-gold-600 uppercase font-bold px-3 py-1.5 rounded-full bg-gold-400/5 border border-gold-400/15">
            Availability Matrix
          </span>
          <h2 className="font-serif text-3xl sm:text-4.5xl font-semibold text-navy-900 mt-6 mb-4 tracking-tight">
            Consultation Hours
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto" />
        </div>

        {/* Timeline-style Layout */}
        <div id="schedule-content" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Block: Narrative, quick guidance */}
          <div id="schedule-narrative" className="lg:col-span-5 flex flex-col items-start text-left bg-white border border-gold-400/10 p-8 sm:p-10 rounded-2xl shadow-xl">
            <span className="text-xs font-mono tracking-widest text-[#dabf6a] bg-navy-900 px-3 py-1 rounded-md uppercase font-bold mb-6">
              OPD Timings
            </span>
            <h3 className="font-serif text-2xl font-bold text-navy-900 mb-4">
              Flexible Appointments
            </h3>
            <p className="text-sm text-navy-800/80 leading-relaxed mb-6">
              To minimize patient wait-times and guarantee deep consultation periods (typically 20–30 minutes), Dr. Garvit Arora schedules visits in a structured interval grid at Phoenix Hospital.
            </p>

            {/* Same-day info banner key */}
            <div className="p-4 bg-gold-400/5 border-l-4 border-gold-400 rounded-r-xl w-full flex gap-3 text-left">
              <AlertCircle className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-navy-900 uppercase tracking-wide">Same-day Slots</p>
                <p className="text-xs text-navy-800/80 mt-1 leading-relaxed">
                  Same-day slots are strictly possible for active metabolic checks or follow-ups. Call the helpline directly to secure last-minute cancellations.
                </p>
              </div>
            </div>

            <a
              id="schedule-call-button"
              href="tel:+919039492591"
              className="mt-8 w-full bg-navy-900 hover:bg-navy-850 text-cream-50 font-semibold py-3.5 rounded-full text-xs tracking-wider uppercase text-center transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>Call to Confirm Slot</span>
            </a>
          </div>

          {/* Right Block: Vertical Timeline Table of Days */}
          <div id="schedule-timeline" className="lg:col-span-7 flex flex-col gap-4 relative">
            {/* Timeline connectors behind items */}
            <div className="absolute top-8 bottom-8 left-12 w-[1px] bg-gold-400/20 hidden sm:block" />

            {schedule.map((slot, index) => {
              const isClosed = slot.status === 'closed';
              
              return (
                <div
                  key={index}
                  id={`schedule-day-row-${slot.day.toLowerCase()}`}
                  className={`flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-5 sm:p-6 bg-white border rounded-2xl shadow-md transition-all duration-300 relative z-10 ${
                    isClosed
                      ? 'border-gray-200/50 opacity-60 bg-gray-50/50'
                      : 'border-gold-400/10 hover:border-gold-400/30 hover:shadow-lg hover:-translate-x-1'
                  }`}
                >
                  {/* Left Side: Indicator Dot + Day Label */}
                  <div className="flex items-center gap-4 text-left">
                    {/* Responsive Timeline Dot Indicator */}
                    <div className="relative shrink-0 hidden sm:block">
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center ${
                        isClosed 
                          ? 'bg-gray-100 border-gray-300' 
                          : 'bg-gold-50 border-gold-400/40 shadow-sm'
                      }`}>
                        <Clock className={`w-3.5 h-3.5 ${isClosed ? 'text-gray-400' : 'text-gold-600'}`} />
                      </div>
                      
                      {/* Active Status Pulse Dot */}
                      {!isClosed && (
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-white animate-pulse" />
                      )}
                    </div>

                    <div>
                      <p className="font-serif text-lg font-bold text-navy-900 leading-none">
                        {slot.day}
                      </p>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-navy-400 mt-1 leading-none">
                        {isClosed ? 'Specialist Rest Day' : 'Consultation Hours'}
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Hours and status pill */}
                  <div className="flex items-center justify-between sm:justify-end gap-4 text-right">
                    <span className={`font-mono text-xs sm:text-sm font-semibold tracking-wide ${
                      isClosed ? 'text-gray-400' : 'text-navy-900'
                    }`}>
                      {slot.hours}
                    </span>

                    {/* Status badge and checkbox block */}
                    <div>
                      {isClosed ? (
                        <span className="text-[9px] font-mono tracking-widest uppercase text-gray-500 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-md">
                          CLOSED
                        </span>
                      ) : (
                        <span className="text-[9px] font-mono tracking-widest uppercase text-emerald-700 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md font-bold">
                          OPD OPEN
                        </span>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
