"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AboutAkhilSection() {
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
    <section ref={containerRef} className="py-24 md:py-32 px-4 md:px-8 bg-theme-iron text-black font-nohemi relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-16 md:mb-24 max-w-4xl gsap-fade-up" style={{ opacity: 0, transform: 'translateY(50px)' }}>
          <span className="text-theme-dark-green font-nohemi text-xs leading-[120%] tracking-[0.03rem] uppercase mb-4 block">Our Heritage</span>
          <h2 className="text-[2rem] md:text-[3.5rem] uppercase leading-none mb-8">Redefining Real Estate <br/>Since 2001</h2>
          <p className="text-gray-600 font-inter text-base leading-relaxed">
            Akhil Promoters was founded on a singular premise: that the built environment profoundly impacts the human experience. For over two decades, we have remained steadfast in our commitment to architectural integrity, pushing the boundaries of what is possible in luxury development. From our humble beginnings as a boutique firm to our current position as an industry leader, our passion for creating exceptional spaces remains unchanged.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full gsap-fade-up" style={{ opacity: 0, transform: 'translateY(50px)' }}>
          <div className="h-[300px] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="Architecture detail 1" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
            />
          </div>
          <div className="h-[300px] overflow-hidden group md:-translate-y-8">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
              alt="Architecture detail 2" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
            />
          </div>
          <div className="h-[300px] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop" 
              alt="Architecture detail 3" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}
