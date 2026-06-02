/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';

function CountUpNumber({ endValue, duration = 1500, suffix = '' }: { endValue: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = endValue;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quadratic
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * (end - start) + start);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, endValue, duration]);

  return (
    <span ref={elementRef} className="tabular-nums font-serif text-3xl sm:text-4xl lg:text-5xl font-black">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section 
      id="stats-bar" 
      className="relative z-20 bg-gold-400 py-8 shadow-md"
    >
      <div id="stats-container" className="max-w-7xl mx-auto px-6">
        <div id="stats-grid" className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-navy-900/20 text-navy-900">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center text-center p-2">
            <div className="flex items-baseline gap-1">
              <CountUpNumber endValue={10} suffix="+" />
            </div>
            <p className="text-xs uppercase font-mono tracking-widest font-bold mt-2 text-navy-950/70">
              Years Clinical Experience
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center text-center p-2 pt-6 md:pt-2">
            <div className="flex items-baseline gap-1">
              <CountUpNumber endValue={5000} suffix="+" />
            </div>
            <p className="text-xs uppercase font-mono tracking-widest font-bold mt-2 text-navy-950/70">
              Patients Reclaimed
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center text-center p-2 pt-6 md:pt-2">
            <div className="flex items-baseline gap-1">
              <CountUpNumber endValue={4} suffix="" />
            </div>
            <p className="text-xs uppercase font-mono tracking-widest font-bold mt-2 text-navy-950/70">
              Core Specializations
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center justify-center text-center p-2 pt-6 md:pt-2">
            <span className="font-serif text-2xl sm:text-3xl lg:text-3.5xl font-bold tracking-tight italic">
              Phoenix Hosp
            </span>
            <p className="text-xs uppercase font-mono tracking-widest font-bold mt-2 text-navy-950/70">
              Indore OPD Partner
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
