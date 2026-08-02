"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const partners = [
  "Foster & Partners", "Zaha Hadid Architects", "Arup", "SOM", "Buro Happold",
  "Foster & Partners", "Zaha Hadid Architects", "Arup", "SOM", "Buro Happold"
];

export default function PartnersSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    const marquee = containerRef.current.querySelector('.marquee-content');
    if (marquee) {
      gsap.to(marquee, {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1
      });
    }

  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-black text-white font-nohemi relative overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mb-12">
        <span className="text-gray-400 font-inter text-xs uppercase tracking-[0.2em]">Trusted by Global Partners</span>
      </div>
      
      <div className="w-full overflow-hidden flex whitespace-nowrap">
        <div className="marquee-content flex gap-16 md:gap-32 px-8">
          {partners.map((partner, idx) => (
            <div key={idx} className="flex-shrink-0 text-2xl md:text-4xl text-gray-500 font-bold uppercase tracking-wider hover:text-white transition-colors cursor-pointer">
              {partner}
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
