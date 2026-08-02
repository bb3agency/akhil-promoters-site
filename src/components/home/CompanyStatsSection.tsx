"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const stats = [
  { label: 'Years Experience', value: 25, suffix: '+' },
  { label: 'Projects Completed', value: 150, suffix: '+' },
  { label: 'Happy Clients', value: 300, suffix: '+' },
  { label: 'Awards Won', value: 45, suffix: '' },
];

export default function CompanyStatsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;
    
    gsap.registerPlugin(ScrollTrigger);

    countersRef.current.forEach((counter, index) => {
      if (!counter) return;
      
      const targetValue = stats[index].value;
      
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(counter, {
            innerHTML: targetValue,
            duration: 2,
            ease: "power2.out",
            snap: { innerHTML: 1 },
            onUpdate: function() {
              if (counter.innerHTML) {
                counter.innerHTML = Math.ceil(Number(counter.innerHTML)).toString();
              }
            }
          });
        },
        once: true
      });
    });
    
    const fadeUpElements = containerRef.current.querySelectorAll('.gsap-fade-up');
    fadeUpElements.forEach((el) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 40 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-32 px-4 md:px-8 bg-theme-iron font-nohemi relative overflow-hidden text-black">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-gray-300">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center gsap-fade-up" style={{ opacity: 0, transform: 'translateY(40px)' }}>
              <div className="text-4xl md:text-5xl lg:text-7xl font-bold mb-2 flex items-end">
                <span ref={el => { countersRef.current[index] = el; }}>0</span>
                <span>{stat.suffix}</span>
              </div>
              <p className="text-sm md:text-base uppercase tracking-widest text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
