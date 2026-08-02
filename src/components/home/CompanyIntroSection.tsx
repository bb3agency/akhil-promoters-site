"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function CompanyIntroSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    const fadeUpElements = containerRef.current.querySelectorAll('.gsap-fade-up');
    fadeUpElements.forEach((el) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 40 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="px-4 md:px-8 py-20 md:py-28 flex gap-8 md:gap-12 flex-col md:flex-row h-auto md:h-dvh font-nohemi bg-transparent">
      <div className="md:flex-1 md:flex md:flex-col h-fit md:h-full md:justify-between gap-4">
        <div className="flex flex-col items-start gap-2 lg:gap-4 w-full md:max-w-150">
          <div>
            <div className="gsap-fade-up" style={{ opacity: 0, transform: 'translateY(40px)' }}>
              <span className="text-theme-dark-green font-nohemi text-xs leading-[120%] tracking-[0.03rem] uppercase">
                Design as memory — crafted, intelligent, alive
              </span>
            </div>
          </div>
          <div>
            <div className="gsap-fade-up" style={{ opacity: 0, transform: 'translateY(40px)' }}>
              <div className="text-black font-nohemi text-[1.75rem] leading-[100%] md:text-[2.2rem] lg:text-[2.625rem] md:leading-[110%] uppercase -indent-0 ml-0 md:-indent-20 lg:-indent-24 md:ml-20 lg:ml-24">
                <p>We design<br/>architecture<br/>that tells stories.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="gsap-fade-up" style={{ opacity: 0, transform: 'translateY(40px)' }}>
            <div className="flex-col gap-8 md:ml-20 lg:ml-24 flex">
              <div className="text-sm font-nohemi uppercase inline-block">
                <a className="mr-10 text-theme-dark-green inline-block" href="#">About</a>
                <div className="inline-block">
                  <p className="inline">Founded at the crossroads of design AND technology, Akhil Promoters redefines architectural excellence in India. Our journey is driven by curiosity, innovation, and a commitment to creating sustainable and intelligent spaces.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 relative mt-10 md:mt-0">
        <div className="w-full h-full overflow-hidden">
          <div className="relative w-full h-full">
            <img 
              alt="Architecture that tells stories" 
              title="Architecture that tells stories" 
              className="object-cover h-full w-full min-h-[400px]" 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
