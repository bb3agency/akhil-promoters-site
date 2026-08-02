"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const processes = [
  {
    step: "01",
    title: "Discovery & Blueprint",
    description: "We begin with a deep dive into the site context, environmental factors, and client aspirations, shaping the foundational blueprint."
  },
  {
    step: "02",
    title: "Architectural Design",
    description: "Our award-winning architects conceptualize spatial flows, exterior facades, and structural integrity to create iconic forms."
  },
  {
    step: "03",
    title: "Precision Engineering",
    description: "Integrating advanced materials and smart technologies to ensure the build meets the highest global standards."
  },
  {
    step: "04",
    title: "Execution & Handover",
    description: "Flawless construction management leading to a meticulously detailed handover of the final masterpiece."
  }
];

export default function OurProcessSection() {
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
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-4 md:px-8 bg-theme-iron text-black font-nohemi relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div className="gsap-fade-up" style={{ opacity: 0, transform: 'translateY(50px)' }}>
            <span className="text-theme-dark-green font-nohemi text-xs leading-[120%] tracking-[0.03rem] uppercase mb-4 block">Methodology</span>
            <h2 className="text-[2rem] md:text-[3.5rem] uppercase leading-none">Our Process</h2>
          </div>
          <div className="gsap-fade-up md:w-1/3" style={{ opacity: 0, transform: 'translateY(50px)' }}>
            <p className="text-gray-500 font-inter text-sm">
              A systematic, transparent approach to real estate development that guarantees precision from the first sketch to the final key handover.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 relative">
          
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gray-300"></div>
          
          {processes.map((process, idx) => (
            <div key={idx} className="flex flex-col gap-6 relative pr-8 gsap-fade-up" style={{ opacity: 0, transform: 'translateY(50px)' }}>
              <div className="text-4xl md:text-6xl font-bold text-black/10 z-10 bg-theme-iron w-fit pr-4">
                {process.step}
              </div>
              
              <div className="flex flex-col gap-4 mt-4">
                <h3 className="text-xl md:text-2xl uppercase">{process.title}</h3>
                <p className="text-gray-500 font-inter text-sm leading-relaxed">
                  {process.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
