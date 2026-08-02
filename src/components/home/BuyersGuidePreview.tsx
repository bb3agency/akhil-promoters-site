"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function BuyersGuidePreview() {
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
    <section ref={containerRef} className="py-24 md:py-32 px-4 md:px-8 bg-transparent text-black font-nohemi relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
          
          <div className="w-full md:w-1/2 flex justify-center gsap-fade-up" style={{ opacity: 0, transform: 'translateY(50px)' }}>
            <div className="relative w-full max-w-[400px] aspect-[3/4] bg-theme-iron shadow-2xl p-8 flex flex-col justify-between border border-gray-200">
              <div className="text-theme-dark-green font-bold text-xs uppercase tracking-widest">Akhil Promoters</div>
              <div>
                <h3 className="text-4xl font-serif leading-tight mb-4">The Definitive Guide to Luxury Real Estate in Vijayawada</h3>
                <p className="text-xs uppercase tracking-widest text-gray-500">2026/2027 Edition</p>
              </div>
              <div className="w-full h-1 bg-theme-dark-green"></div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col items-start gap-8">
            <div className="gsap-fade-up" style={{ opacity: 0, transform: 'translateY(50px)' }}>
              <span className="text-theme-dark-green font-nohemi text-xs leading-[120%] tracking-[0.03rem] uppercase mb-4 block">Exclusive Insights</span>
              <h2 className="text-[2rem] md:text-[3.5rem] uppercase leading-none mb-6">Invest with <br/>Intelligence</h2>
              <p className="text-gray-600 font-inter text-base leading-relaxed max-w-lg">
                Navigate the high-end Vijayawada real estate market with confidence. Our comprehensive buyer's guide offers exclusive market analysis, legal frameworks, and insider knowledge on upcoming premium districts.
              </p>
            </div>
            
            <div className="gsap-fade-up" style={{ opacity: 0, transform: 'translateY(50px)' }}>
              <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium uppercase text-white bg-black px-8 py-4 hover:bg-gray-800 transition-all cursor-pointer" href="#">
                Download the Guide
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
