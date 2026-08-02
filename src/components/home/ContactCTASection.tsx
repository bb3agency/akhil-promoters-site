"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ContactCTASection() {
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
          delay: i * 0.1,
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
    <section ref={containerRef} className="py-24 md:py-32 px-4 md:px-8 bg-black text-white font-nohemi relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-16 md:mb-24 gsap-fade-up" style={{ opacity: 0, transform: 'translateY(50px)' }}>
          <span className="text-theme-dark-green font-nohemi text-xs leading-[120%] tracking-[0.03rem] uppercase mb-4 block">Let's Build the Future</span>
          <h2 className="text-[3rem] md:text-[6rem] uppercase leading-none font-bold">Ready to Start?</h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 gsap-fade-up" style={{ opacity: 0, transform: 'translateY(50px)' }}>
          <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium text-white bg-theme-dark-green px-10 py-5 uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-pointer" href="/contact">
            Contact Us
          </a>
          <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium text-white border border-white px-10 py-5 uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-pointer" href="/projects">
            View Projects
          </a>
        </div>
        
      </div>
    </section>
  );
}
