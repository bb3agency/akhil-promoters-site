"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function VisionMissionSection() {
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
    <section ref={containerRef} className="py-24 md:py-32 px-4 md:px-8 bg-black text-white font-nohemi relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/3">
            <h2 className="text-[2rem] md:text-[3rem] uppercase leading-none gsap-fade-up" style={{ opacity: 0, transform: 'translateY(40px)' }}>
              Purpose <br/>&amp; Vision
            </h2>
            <div className="h-[1px] w-full bg-white/20 mt-8 mb-8 gsap-fade-up" style={{ opacity: 0, transform: 'translateY(40px)' }}></div>
            <p className="text-sm md:text-base text-gray-400 font-inter leading-relaxed gsap-fade-up" style={{ opacity: 0, transform: 'translateY(40px)' }}>
              We don't just construct buildings; we curate lifestyles. Our foundation is built on the pursuit of architectural perfection, sustainable innovation, and enduring value for generations to come.
            </p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="flex flex-col gap-4 gsap-fade-up" style={{ opacity: 0, transform: 'translateY(40px)' }}>
              <div className="text-theme-dark-green text-sm uppercase tracking-widest font-bold">01 — Vision</div>
              <h3 className="text-2xl uppercase">Shaping the Skyline</h3>
              <p className="text-gray-400 font-inter text-sm leading-relaxed">
                To be the vanguard of luxury real estate in India, pioneering designs that challenge the status quo and redefining urban landscapes through visionary master-planning.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 gsap-fade-up" style={{ opacity: 0, transform: 'translateY(40px)' }}>
              <div className="text-theme-dark-green text-sm uppercase tracking-widest font-bold">02 — Mission</div>
              <h3 className="text-2xl uppercase">Engineering Excellence</h3>
              <p className="text-gray-400 font-inter text-sm leading-relaxed">
                Delivering uncompromising quality across every touchpoint. From conceptual blueprints to final handover, we integrate cutting-edge technology with artisanal craftsmanship.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 gsap-fade-up" style={{ opacity: 0, transform: 'translateY(40px)' }}>
              <div className="text-theme-dark-green text-sm uppercase tracking-widest font-bold">03 — Values</div>
              <h3 className="text-2xl uppercase">Integrity First</h3>
              <p className="text-gray-400 font-inter text-sm leading-relaxed">
                Transparency, sustainability, and client-centricity form our core pillars. We believe true luxury is rooted in ethical practices and environmental stewardship.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 gsap-fade-up" style={{ opacity: 0, transform: 'translateY(40px)' }}>
              <div className="text-theme-dark-green text-sm uppercase tracking-widest font-bold">04 — Promise</div>
              <h3 className="text-2xl uppercase">Enduring Legacy</h3>
              <p className="text-gray-400 font-inter text-sm leading-relaxed">
                Every Akhil Promoters property is a promise of enduring value. We build not just for today, but for the legacy you will leave tomorrow.
              </p>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}
