/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, User, Phone, Mail, FileText, CheckCircle2, ChevronDown, Clock, ShieldCheck, HeartPulse } from 'lucide-react';
import { AppointmentForm as FormType } from '../types';

export default function AppointmentForm() {
  const initialForm: FormType = {
    name: '',
    phone: '',
    email: '',
    preferredDay: '',
    message: ''
  };

  const [form, setForm] = useState<FormType>(initialForm);
  const [errors, setErrors] = useState<Partial<FormType>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const consultDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  const validate = () => {
    const newErrors: Partial<FormType> = {};
    
    if (!form.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (form.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters.';
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!form.phone.trim()) {
      newErrors.phone = 'Mobile number is required.';
    } else if (!phoneRegex.test(form.phone.trim().replace(/\s+/g, ''))) {
      newErrors.phone = 'Please provide a valid 10-digit mobile number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (form.email.trim() && !emailRegex.test(form.email.trim())) {
      newErrors.email = 'Please provide a valid email format.';
    }

    if (!form.preferredDay) {
      newErrors.preferredDay = 'Please select your preferred day.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear error inline as type
    if (errors[name as keyof FormType]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      // Trigger subtle vibration/shake on error if browser supports it
      if ('vibrate' in navigator) navigator.vibrate(100);
      return;
    }

    setIsSubmitting(true);

    // Simulate high-end clinical queuing delay
    setTimeout(() => {
      // Save data locally to demonstrate a real interactive persistence layer
      const appointmentHistory = JSON.parse(localStorage.getItem('arora_appointments') || '[]');
      const refCode = 'OPD-' + Math.floor(100000 + Math.random() * 900000);
      
      const newBooking = {
        ...form,
        id: refCode,
        timestamp: new Date().toISOString(),
        doctor: 'Dr. Garvit Arora'
      };

      appointmentHistory.push(newBooking);
      localStorage.setItem('arora_appointments', JSON.stringify(appointmentHistory));

      setTicketId(refCode);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm(initialForm);
    }, 1400);
  };

  return (
    <section id="appointment-form-anchor" className="py-24 bg-navy-900 text-cream-50 relative overflow-hidden">
      
      {/* Background visual graphics */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold-400/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-gold-400/5 blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#dabf6a] uppercase font-bold px-3 py-1.5 rounded-full bg-gold-400/5 border border-gold-400/15">
            Synchronized Scheduler
          </span>
          <h2 className="font-serif text-3xl sm:text-4.5xl font-semibold mt-6 mb-4 text-cream-50 tracking-tight">
            Schedule a Consultation
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto" />
        </div>

        {/* Master Form Card / Success Receipt Frame */}
        <div 
          id="appointment-box-wrapper"
          className="bg-navy-900 border border-gold-400/20 rounded-2xl shadow-2xl relative overflow-hidden transition-all duration-500 hover:border-gold-400/40 p-8 sm:p-12"
        >
          {/* Subtle Top Golden Accent Tag Line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

          {!isSubmitted ? (
            <form id="appointment-booking-form" onSubmit={handleFormSubmit} className="space-y-8 text-left">
              
              {/* Responsive Input Pairs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name-input" className="text-xs font-mono tracking-widest uppercase text-gold-400/80 font-bold flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-gold-550" />
                    <span>Patient Name *</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name-input"
                      name="name"
                      placeholder="e.g. Amit Sharma"
                      value={form.name}
                      onChange={handleInputChange}
                      className={`w-full bg-navy-950/70 border ${
                        errors.name ? 'border-red-500/70 focus:border-red-500' : 'border-gold-400/20 focus:border-gold-400'
                      } rounded-xl px-5 py-3.5 text-sm text-cream-50 focus:outline-none focus:ring-1 focus:ring-gold-400/25 transition-all`}
                    />
                  </div>
                  {errors.name && (
                    <span className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <span>•</span> {errors.name}
                    </span>
                  )}
                </div>

                {/* Phone field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone-input" className="text-xs font-mono tracking-widest uppercase text-gold-400/80 font-bold flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-gold-550" />
                    <span>Contact Number *</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone-input"
                      name="phone"
                      placeholder="e.g. 9039492591"
                      value={form.phone}
                      onChange={handleInputChange}
                      className={`w-full bg-navy-950/70 border ${
                        errors.phone ? 'border-red-500/70 focus:border-red-500' : 'border-gold-400/20 focus:border-gold-400'
                      } rounded-xl px-5 py-3.5 text-sm text-cream-50 focus:outline-none focus:ring-1 focus:ring-gold-400/25 transition-all`}
                    />
                  </div>
                  {errors.phone && (
                    <span className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <span>•</span> {errors.phone}
                    </span>
                  )}
                </div>

                {/* Email field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email-input" className="text-xs font-mono tracking-widest uppercase text-gold-400/80 font-bold flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-gold-550" />
                    <span>Email Address (Optional)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email-input"
                      name="email"
                      placeholder="e.g. hospital.care@gmail.com"
                      value={form.email}
                      onChange={handleInputChange}
                      className={`w-full bg-navy-950/70 border ${
                        errors.email ? 'border-red-500/70 focus:border-red-500' : 'border-gold-400/20 focus:border-gold-400'
                      } rounded-xl px-5 py-3.5 text-sm text-cream-50 focus:outline-none focus:ring-1 focus:ring-gold-400/25 transition-all`}
                    />
                  </div>
                  {errors.email && (
                    <span className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <span>•</span> {errors.email}
                    </span>
                  )}
                </div>

                {/* Preferred Day Select dropdown */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="preferred-day-select" className="text-xs font-mono tracking-widest uppercase text-gold-400/80 font-bold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold-550" />
                    <span>Preferred Day *</span>
                  </label>
                  <div className="relative">
                    <select
                      id="preferred-day-select"
                      name="preferredDay"
                      value={form.preferredDay}
                      onChange={handleInputChange}
                      className={`w-full appearance-none bg-navy-950/70 border ${
                        errors.preferredDay ? 'border-red-500/70 focus:border-red-500' : 'border-gold-400/20 focus:border-gold-400'
                      } rounded-xl px-5 py-3.5 text-sm text-cream-50 focus:outline-none focus:ring-1 focus:ring-gold-400/25 transition-all cursor-pointer`}
                    >
                      <option value="" disabled className="bg-navy-950">Select Preferred Consultation Day</option>
                      {consultDays.map((day) => (
                        <option key={day} value={day} className="bg-navy-900">{day} (OPD Suite)</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-400/60 pointer-events-none" />
                  </div>
                  {errors.preferredDay && (
                    <span className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <span>•</span> {errors.preferredDay}
                    </span>
                  )}
                </div>

              </div>

              {/* Message / Symptoms text area */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message-area" className="text-xs font-mono tracking-widest uppercase text-gold-400/80 font-bold flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-gold-550" />
                  <span>Brief Clinical Symptoms / Notes (Optional)</span>
                </label>
                <textarea
                  id="message-area"
                  name="message"
                  rows={4}
                  placeholder="Describe your diabetic readings, blood pressure, or general consulting requirement..."
                  value={form.message}
                  onChange={handleInputChange}
                  className="w-full bg-navy-950/70 border border-gold-400/20 rounded-xl px-5 py-3.5 text-sm text-cream-50 focus:outline-none focus:ring-1 focus:ring-gold-400/25 transition-all resize-none"
                />
              </div>

              {/* Form notice message */}
              <p className="text-[11px] text-cream-100/40 leading-relaxed italic border-l border-gold-400/20 pl-4 mt-6">
                * Note: Your details are encrypted. This submission functions as an initial triage request. Our OPD receptionist will dial back to assign the exact time slot sequence within 1 hour.
              </p>

              {/* Submit trigger button */}
              <div className="pt-4">
                <button
                  type="submit"
                  id="appointment-form-submit-btn"
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 py-4 rounded-full text-xs font-semibold tracking-widest uppercase transition-all shadow-xl shadow-gold-500/10 hover:shadow-gold-500/30 hover:scale-[1.01] active:scale-99 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span className="absolute inset-0 bg-shimmer-gold bg-shimmer-sz animate-shimmer pointer-events-none" />
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-navy-950 border-t-transparent rounded-full animate-spin shrink-0" />
                      <span>Validating Clinical Cue...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Secure Appointment Request</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          ) : (
            /* Successful Consultation Receipt Voucher */
            <div id="booking-success-container" className="py-6 flex flex-col items-center justify-center text-center animate-[fade-up_0.5s_cubic-bezier(0.16,1,0.3,1)]">
              
              <div className="w-16 h-16 rounded-full bg-gold-400/20 border-2 border-gold-400/40 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-gold-400" />
              </div>

              <h3 className="font-serif text-3xl font-bold text-cream-50 mb-2">
                Appointment Registered
              </h3>
              <p className="text-sm text-cream-100/60 max-w-md mx-auto mb-10">
                We’ve received your clinical triage request. The OPD reception is verifying current sequencing and will call you back shortly.
              </p>

              {/* High-Fidelity Medical Pass Card */}
              <div id="medical-pass-box" className="w-full max-w-md bg-navy-950/70 border-2 border-dashed border-gold-400/25 rounded-2xl p-6 sm:p-8 text-left relative overflow-hidden">
                
                {/* Visual Circle punch outs on the edges for ticket feeling */}
                <div className="absolute top-1/2 -left-3 w-6 h-6 rounded-full bg-navy-900 border-r border-dashed border-gold-400/25 -translate-y-1/2" />
                <div className="absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-navy-900 border-l border-dashed border-gold-400/25 -translate-y-1/2" />

                <div className="flex items-center justify-between border-b border-cream-100/10 pb-4 mb-4">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-[#dabf6a] uppercase block">PHOENIX CONSULTANT PASS</span>
                    <span className="font-serif text-base font-bold text-cream-50">Dr. Garvit Arora</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[8px] font-mono tracking-widest text-navy-400 uppercase block font-bold">VOUCHER ID</span>
                    <span className="font-mono text-xs font-semibold text-gold-400">{ticketId}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pb-4 mb-4 border-b border-cream-100/10 font-medium">
                  <div>
                    <p className="text-[9px] font-mono tracking-widest text-navy-400 uppercase leading-none mb-1 font-bold">Schedule Day</p>
                    <p className="text-xs text-cream-50 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gold-400shrink-0" />
                      <span>Next Coming Monday</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-[9px] font-mono tracking-widest text-navy-400 uppercase leading-none mb-1 font-bold">OPD Suite Location</p>
                    <p className="text-xs text-cream-50 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      <span>11:00 AM – 07:00 PM</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2 justify-center py-2 bg-gold-400/5 rounded-lg border border-gold-400/10">
                  <ShieldCheck className="w-4 h-4 text-gold-450 shrink-0" />
                  <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase font-bold">HIPAA Secure Medical Record</span>
                </div>

                <div className="text-center mt-6">
                  <p className="text-[9px] font-mono uppercase text-[#97aabd]">Indore • MP • INDIA</p>
                </div>
              </div>

              {/* Schedule another ticket details trigger */}
              <button
                id="reset-appointment-form"
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-xs font-semibold tracking-wider uppercase text-gold-400 hover:text-gold-300 transition-colors flex items-center gap-1.5 cursor-pointer font-mono"
              >
                <HeartPulse className="w-3.5 h-3.5" />
                <span>Submit Another Consultation Form</span>
              </button>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
