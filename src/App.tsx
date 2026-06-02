/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChoose from './components/WhyChoose';
import ScheduleSection from './components/ScheduleSection';
import AppointmentForm from './components/AppointmentForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  
  // Smoothly scroll to booking slot helper
  const handleScrollToBooking = () => {
    const bookingSection = document.getElementById('appointment-form-anchor');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll Trigger Animation Effects
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up-active');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const animationTargets = document.querySelectorAll('.animate-fade-up-trigger');
    animationTargets.forEach((target) => observer.observe(target));

    return () => {
      animationTargets.forEach((target) => observer.unobserve(target));
    };
  }, []);

  return (
    <div id="application-container-node" className="min-h-screen bg-navy-900 font-sans selection:bg-gold-400 selection:text-navy-950">
      
      {/* Luxury Lerp Center Dot + Lag Outer Cursor (On Desktop) */}
      <CustomCursor />

      {/* Floating Headers */}
      <Header onBookClick={handleScrollToBooking} />

      {/* Landing Visuals */}
      <main id="main-content-flow">
        
        {/* Full Viewport Editorial Hero Screen */}
        <Hero onBookClick={handleScrollToBooking} />

        {/* Highlight Stats count-up Strip */}
        <StatsStrip />

        {/* Clinical Biography Profile Column */}
        <div className="animate-fade-up-trigger">
          <AboutSection />
        </div>

        {/* 2x2 Services and Clinical Symptoms Grid & Diagnosis Drawers */}
        <div className="animate-fade-up-trigger">
          <ServicesSection />
        </div>

        {/* Core Principles & Helpdesk Hotlink */}
        <div className="animate-fade-up-trigger">
          <WhyChoose />
        </div>

        {/* OPD Availability Timelines */}
        <div className="animate-fade-up-trigger">
          <ScheduleSection />
        </div>

        {/* Patients Reviews Autoplay Carousel Monograms */}
        <div className="animate-fade-up-trigger">
          <Testimonials />
        </div>

        {/* Booking Form Receipt Generator */}
        <div className="animate-fade-up-trigger">
          <AppointmentForm />
        </div>

      </main>

      {/* Corporate Navy Sign-off Strip */}
      <Footer />

    </div>
  );
}
