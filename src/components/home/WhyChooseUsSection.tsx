"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const reasons = [
  {
    title: "Uncompromising Quality",
    description: "Every material sourced, every corner finished—we accept nothing less than absolute perfection in our builds."
  },
  {
    title: "Prime Locations",
    description: "Our properties are strategically situated in the most sought-after neighborhoods, ensuring lifestyle convenience and high ROI."
  },
  {
    title: "Sustainable Innovation",
    description: "Integrating smart home technologies and eco-friendly materials to create future-proof living spaces."
  },
  {
    title: "Client-Centric Approach",
    description: "A seamless, transparent journey from initial inquiry to final handover, tailored entirely around your needs."
  }
];

export default function WhyChooseUsSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    const fadeUpElements = containerRef.current.querySelectorAll('.gsap-fade-up');
    fadeUpElements.forEach((el, i) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 50 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power3.out",
          delay: i * 0.1, // staggered effect
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-4 md:px-8 bg-transparent text-black font-nohemi relative">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        <div className="text-center mb-16 md:mb-24 gsap-fade-up" style={{ opacity: 0, transform: 'translateY(50px)' }}>
          <span className="text-theme-dark-green font-nohemi text-xs leading-[120%] tracking-[0.03rem] uppercase mb-4 block">The Akhil Advantage</span>
          <h2 className="text-[2rem] md:text-[3.5rem] uppercase leading-none">Why Choose Us</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex flex-col gap-6 group cursor-pointer gsap-fade-up" style={{ opacity: 0, transform: 'translateY(50px)' }}>
              <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center transition-colors duration-500 group-hover:bg-black group-hover:text-white">
                <span className="text-sm font-bold">0{idx + 1}</span>
              </div>
              <div className="h-[1px] w-full bg-gray-200 transition-all duration-500 group-hover:bg-black"></div>
              <h3 className="text-xl md:text-2xl uppercase transition-transform duration-500 group-hover:translate-x-2">{reason.title}</h3>
              <p className="text-gray-500 font-inter text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
