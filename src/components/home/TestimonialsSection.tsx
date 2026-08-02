"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const testimonials = [
  {
    quote: "Working with Akhil Promoters was a revelation. They didn't just build a home; they curated an experience. The attention to detail in the Aura Mansions is simply unmatched in Vijayawada.",
    author: "Rahul Desai",
    role: "Private Investor"
  },
  {
    quote: "The Zenith Tower is a masterpiece of modern engineering. The delivery was flawless, and the architectural integrity exceeded our highest expectations.",
    author: "Priya Sharma",
    role: "CEO, Global Ventures"
  },
  {
    quote: "Sustainability without compromising on luxury is a rare find. Lumina Villas achieves this perfectly. Akhil Promoters has set a new benchmark for eco-conscious opulence.",
    author: "Dr. Arjun Reddy",
    role: "Philanthropist"
  }
];

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
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

  useEffect(() => {
    const textEl = document.getElementById('testimonial-text');
    if (textEl) {
      gsap.fromTo(textEl, 
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [activeIndex]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-4 md:px-8 bg-theme-iron text-black font-nohemi relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        <div className="text-center mb-16 md:mb-24 gsap-fade-up" style={{ opacity: 0, transform: 'translateY(50px)' }}>
          <h2 className="text-[2rem] md:text-[3.5rem] uppercase leading-none">Client Perspectives</h2>
        </div>
        
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          <div className="text-6xl text-theme-dark-green opacity-20 mb-8 font-serif gsap-fade-up" style={{ opacity: 0, transform: 'translateY(50px)' }}>"</div>
          
          <div className="min-h-[200px] md:min-h-[150px] flex items-center justify-center">
            <h3 id="testimonial-text" className="text-2xl md:text-4xl font-light font-inter leading-relaxed text-gray-800">
              {testimonials[activeIndex].quote}
            </h3>
          </div>
          
          <div className="mt-12 flex flex-col items-center gap-2 gsap-fade-up" style={{ opacity: 0, transform: 'translateY(50px)' }}>
            <div className="uppercase font-bold tracking-widest text-sm">{testimonials[activeIndex].author}</div>
            <div className="text-gray-500 text-xs uppercase tracking-widest">{testimonials[activeIndex].role}</div>
          </div>
          
          <div className="flex gap-4 mt-16 gsap-fade-up" style={{ opacity: 0, transform: 'translateY(50px)' }}>
            {testimonials.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 transition-all duration-300 ${activeIndex === idx ? 'w-12 bg-black' : 'w-4 bg-gray-300'}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
