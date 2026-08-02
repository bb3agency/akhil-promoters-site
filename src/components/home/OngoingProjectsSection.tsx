"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

const ongoing = [
  {
    name: "Cherry",
    slug: "cherry",
    location: "Varalakshmi Puram, Kanuru",
    completion: "Q4 2026",
    progress: 75,
    image: "https://images.unsplash.com/photo-1541888087525-4b51a9415c10?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Daffodils",
    slug: "daffodils",
    location: "Tadigadapa 100 Feet Road, Poranki",
    completion: "Q2 2027",
    progress: 40,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
  }
];

export default function OngoingProjectsSection() {
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
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

    const progressBars = containerRef.current.querySelectorAll('.progress-bar-fill');
    progressBars.forEach((el) => {
      const targetWidth = el.getAttribute('data-width') || '0%';
      gsap.fromTo(el, 
        { width: '0%' }, 
        { 
          width: targetWidth, 
          duration: 1.5, 
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
    <section ref={containerRef} className="py-24 md:py-32 px-4 md:px-8 bg-transparent text-black font-nohemi relative">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        <div className="mb-16 md:mb-24 gsap-fade-up" style={{ opacity: 0, transform: 'translateY(50px)' }}>
          <h2 className="text-[2rem] md:text-[3.5rem] uppercase leading-none">Ongoing <br/>Developments</h2>
        </div>
        
        <div className="flex flex-col gap-16 md:gap-24">
          {ongoing.map((project, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-8 md:gap-16 items-center gsap-fade-up" style={{ opacity: 0, transform: 'translateY(50px)' }}>
              <div className="w-full md:w-1/2 h-[300px] md:h-[450px] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-8">
                <div>
                  <h3 className="text-2xl md:text-4xl uppercase mb-2">{project.name}</h3>
                  <p className="text-gray-500 font-inter">{project.location}</p>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm uppercase font-bold tracking-wider">
                    <span>Construction Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full h-[2px] bg-gray-200 relative">
                    <div 
                      className="progress-bar-fill absolute top-0 left-0 h-full bg-black" 
                      data-width={`${project.progress}%`}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 uppercase tracking-widest mb-1">Expected Completion</span>
                    <span className="text-lg md:text-xl font-bold uppercase">{project.completion}</span>
                  </div>
                  <Link className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium uppercase hover:text-gray-500 transition-colors cursor-pointer border-b border-black pb-1" href={`/projects/${project.slug}`}>
                    Project Details
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none" className="size-2.5">
                      <path d="M9.464 0C9.87962 0 10.214 0.334375 10.214 0.75V8.25C10.214 8.66562 9.87962 9 9.464 9C9.04837 9 8.714 8.66562 8.714 8.25V2.55937L1.27893 10.0594C0.985181 10.3531 0.510181 10.3531 0.219556 10.0594C-0.0710693 9.76562 -0.0741943 9.29375 0.216431 9L7.6515 1.5H1.96087C1.54525 1.5 1.21087 1.16562 1.21087 0.75C1.21087 0.334375 1.54525 0 1.96087 0H9.46087H9.464Z" fill="currentColor"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
