/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Testimonial, ScheduleDay } from './types';

export const services: Service[] = [
  {
    id: 'diabetes',
    icon: '🩺',
    title: 'Diabetes Management',
    desc: 'Bespoke blood sugar profiling, lifestyle remodeling, and advanced pharmacotherapy for Type 1 & 2 Diabetes.',
    longDesc: 'Our metabolic program focuses on long-term glycemic control. We offer structured continuous glucose monitoring (CGM) analysis, deep insulin sensitivity mapping, personalized carbohydrate-to-insulin ratios, and rigorous target-guided medical nutrition therapy to prevent vascular or neurological complications.',
    symptoms: ['Elevated HbA1c', 'Fluctuating blood sugar', 'Chronic metabolic fatigue', 'Neuropathic numbness']
  },
  {
    id: 'thyroid',
    icon: '🔬',
    title: 'Thyroid Disorders',
    desc: 'Precision hormonal balancing, regular endocrine screening, and evidence-based Hypo/Hyperthyroidism care.',
    longDesc: 'Thyroid dysfunction requires highly personalized correction. We continuously monitor free T3, free T4, and ultra-sensitive TSH levels to craft micro-adjusted levothyroxine or anti-thyroid therapies, aiming not just for laboratory reference ranges but for full metabolic and mental vitality.',
    symptoms: ['Unexplained weight changes', 'Chronic throat tightness', 'Consistent cold/heat intolerance', 'Brain fog and hair depletion']
  },
  {
    id: 'blood-pressure',
    icon: '💉',
    title: 'Blood Pressure & Heart Care',
    desc: 'Cardiovascular risk evaluation, high-accuracy ambulatory BP monitoring, and heart-health mapping.',
    longDesc: 'Hypertension is the silent catalyst of cardiovascular risk. By running detailed arterial stiffening audits, renal profiling, lipid fraction dynamics, and customized medication pacing, we establish sustained pressure drops that protect vital target organs like the brain, kidneys, and retina.',
    symptoms: ['Chronic morning headaches', 'Occasional chest mild tightness', 'Frequent tinnitus or ear pulsing', 'Post-exertion breathlessness']
  },
  {
    id: 'infectious-diseases',
    icon: '🦠',
    title: 'Infectious Diseases',
    desc: 'Evidence-backed diagnostics, targeted antiviral/antibacterial therapy, and full systemic recovery care.',
    longDesc: 'Navigating acute infective threats, prolonged tropical pyrexias, and post-viral recovery syndromes. We follow global antibacterial stewardship programs, optimizing empirical prescription regimens to eliminate pathogens while carefully protecting gut microbiome and hepatic-renal clearance.',
    symptoms: ['Prolonged undiagnosed fever', 'Post-viral fatigue syndrome', 'Recurrent respiratory infections', 'Gastrointestinal systemic distress']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    author: 'Amit Sharma',
    initials: 'AS',
    rating: 5,
    review: 'Dr. Garvit Arora is exceptional in his clinical approach. His detailed diagnosis and patient listening style helped me control my fluctuating blood sugars within three months. He doesn’t over-prescribe and gives life-saving clarity.',
    role: 'Diabetes Care Patient',
    clinic: 'Phoenix Hospital, Indore'
  },
  {
    id: '2',
    author: 'Priya Kadam',
    initials: 'PK',
    rating: 5,
    review: 'The sheer level of calm professionalism Dr. Arora maintains is incredibly reassuring. He thoroughly explained my thyroid panel reports, fine-tuned my morning dosage, and helped me resolve years of chronic fatigue and head fog.',
    role: 'Consulted for Hypothyroidism',
    clinic: 'Indore Resident'
  },
  {
    id: '3',
    author: 'Rajesh Dewas',
    initials: 'RD',
    rating: 5,
    review: 'Most doctors rush you, but Dr. Garvit listens. He spent 30 minutes evaluating my full stress levels, sleep maps, and arterial indicators, then engineered a custom lifestyle-medication routine that safely controlled my high BP.',
    role: 'Hypertension & Lifestyle Patient',
    clinic: 'Consultation Suite Patient'
  }
];

export const schedule: ScheduleDay[] = [
  { day: 'Monday', hours: '11:00 AM – 07:00 PM', status: 'available' },
  { day: 'Tuesday', hours: '11:00 AM – 07:00 PM', status: 'available' },
  { day: 'Wednesday', hours: '11:00 AM – 07:00 PM', status: 'available' },
  { day: 'Thursday', hours: '11:00 AM – 07:00 PM', status: 'available' },
  { day: 'Friday', hours: '11:00 AM – 07:00 PM', status: 'available' },
  { day: 'Saturday', hours: '11:00 AM – 07:00 PM', status: 'available' },
  { day: 'Sunday', hours: 'Closed for Emergencies', status: 'closed' }
];

export const trustStats = [
  { value: 10, label: 'Years Experience', suffix: '+' },
  { value: 5000, label: 'Patients Treated', suffix: '+' },
  { value: 4, label: 'Core Specializations', suffix: '' },
  { value: 'Phoenix', label: 'Hospital Partner', suffix: ' Indore' }
];
