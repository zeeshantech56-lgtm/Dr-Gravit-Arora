/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Testimonial {
  id: string;
  author: string;
  initials: string;
  rating: number;
  review: string;
  role: string;
  clinic: string;
}

export interface Service {
  id: string;
  icon: string; // Emoji character
  title: string;
  desc: string;
  longDesc: string;
  symptoms: string[];
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
}

export interface AppointmentForm {
  name: string;
  phone: string;
  email: string;
  preferredDay: string;
  message: string;
}

export interface ScheduleDay {
  day: string;
  hours: string;
  status: 'available' | 'closed';
}
