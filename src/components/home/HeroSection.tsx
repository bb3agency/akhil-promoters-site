"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // We recreate the GSAP fade up effect here manually since it's an isolated component
    const fadeUpElements = containerRef.current.querySelectorAll('.gsap-fade-up');
    fadeUpElements.forEach((el) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 40 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: "power3.out",
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="h-dvh w-full relative">
      <img 
        className="absolute inset-0 w-full h-screen object-cover z-0" 
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" 
        alt="Hero Background"
      />
      <div className="absolute z-10 inset-0 size-full bg-gradient-to-b from-black/50 to-transparent"></div>
      <div className="z-20 relative h-full w-full flex flex-col md:flex-row justify-end items-end gap-8 md:gap-20 pb-8 md:pb-10 px-4 md:px-8">
        <div>
          <div className="gsap-fade-up" style={{ opacity: 0, transform: 'translateY(40px)' }}>
            <div className="text-[40px] leading-10 md:leading-none uppercase md:text-6xl font-medium text-white">
              <h1>where vision meets structure where ideas become built realities</h1>
            </div>
          </div>
        </div>
        <div>
          <div className="gsap-fade-up" style={{ opacity: 0, transform: 'translateY(40px)' }}>
            <div className="text-sm text-white flex items-end justify-end">
              <h2>At Akhil Promoters, we blend innovation and intelligence to design the spaces of tomorrow</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
