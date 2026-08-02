"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { getAllProjects } from '@/data/projects';

export default function ResidentialProjectsSection() {
  const containerRef = useRef<HTMLElement>(null);
  // Get Apple, Blueberry, Cherry for the residential grid
  const projectsData = getAllProjects();
  const apple = projectsData.find(p => p.slug === 'apple')!;
  const blueberry = projectsData.find(p => p.slug === 'blueberry')!;
  const cherry = projectsData.find(p => p.slug === 'cherry')!;
  
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
          duration: 1.2, 
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
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-4 md:px-8 bg-theme-iron text-black font-nohemi relative">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div className="gsap-fade-up" style={{ opacity: 0, transform: 'translateY(50px)' }}>
            <h2 className="text-[2rem] md:text-[3.5rem] uppercase leading-none">Residential <br className="hidden md:block"/>Portfolio</h2>
          </div>
          <div className="gsap-fade-up" style={{ opacity: 0, transform: 'translateY(50px)' }}>
            <p className="text-gray-500 font-inter text-sm max-w-md">
              Discover our collection of bespoke residential properties, each designed to offer an unparalleled standard of luxury living, seamlessly integrating nature and architecture.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 h-auto md:h-[600px]">
          
          <Link href={`/projects/${apple.slug}`} className="md:col-span-7 group relative overflow-hidden gsap-fade-up cursor-pointer h-[400px] md:h-full block" style={{ opacity: 0, transform: 'translateY(50px)' }}>
            <img 
              src={apple.heroImage} 
              alt={apple.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
              <h3 className="text-2xl uppercase mb-1">{apple.name}</h3>
              <p className="text-sm font-inter opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{apple.location} - {apple.type}</p>
            </div>
          </Link>
          
          <div className="md:col-span-5 grid grid-rows-2 gap-8 md:gap-4 h-[800px] md:h-full">
            
            <Link href={`/projects/${blueberry.slug}`} className="group relative overflow-hidden gsap-fade-up cursor-pointer h-full block" style={{ opacity: 0, transform: 'translateY(50px)' }}>
              <img 
                src={blueberry.heroImage} 
                alt={blueberry.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                <h3 className="text-xl uppercase mb-1">{blueberry.name}</h3>
                <p className="text-xs font-inter opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{blueberry.location}</p>
              </div>
            </Link>
            
            <Link href={`/projects/${cherry.slug}`} className="group relative overflow-hidden gsap-fade-up cursor-pointer h-full block" style={{ opacity: 0, transform: 'translateY(50px)' }}>
              <img 
                src={cherry.heroImage} 
                alt={cherry.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                <h3 className="text-xl uppercase mb-1">{cherry.name}</h3>
                <p className="text-xs font-inter opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{cherry.location}</p>
              </div>
            </Link>
            
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
