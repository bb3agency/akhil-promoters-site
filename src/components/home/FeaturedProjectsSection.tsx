"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { getAllProjects } from '@/data/projects';

export default function FeaturedProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const projects = getAllProjects();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('swiper').then(({ default: Swiper }) => {
        import('swiper/css').then(() => {
          const swipers = containerRef.current?.querySelectorAll('.swiper-carousel');
          swipers?.forEach(swiperEl => {
            new Swiper(swiperEl as HTMLElement, {
              slidesPerView: 1,
              spaceBetween: 0,
              loop: true,
              grabCursor: true,
            });
          });
          
          const mainSwiper = containerRef.current?.querySelector('.main-swiper');
          if (mainSwiper) {
            new Swiper(mainSwiper as HTMLElement, {
              slidesPerView: 1,
              spaceBetween: 30,
              loop: true,
              grabCursor: true,
            });
          }
        });
      });
      
      gsap.registerPlugin(ScrollTrigger);
      const fadeUpElements = containerRef.current?.querySelectorAll('.gsap-fade-up') || [];
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
    }
  }, []);

  return (
    <div ref={containerRef} className="bg-theme-iron py-28 w-full overflow-hidden">
      <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-8">
        
        <div className="mb-12 gsap-fade-up" style={{ opacity: 0, transform: 'translateY(40px)' }}>
          <h2 className="text-[2rem] md:text-[3rem] font-nohemi uppercase leading-none text-black">Featured Projects</h2>
        </div>
        
        <div className="swiper main-swiper overflow-visible gsap-fade-up" style={{ opacity: 0, transform: 'translateY(40px)' }}>
          <div className="swiper-wrapper">
            {projects.map((project, idx) => (
              <div key={idx} className="swiper-slide !w-full md:!w-[800px]">
                <div className="bg-theme-iron h-full flex flex-col gap-6 text-center md:text-left">
                  
                  <div className="relative group overflow-hidden">
                    <div className="swiper swiper-carousel h-[400px] md:h-[600px] w-full">
                      <div className="swiper-wrapper">
                        {[project.heroImage, project.thumbnailImage].map((img, i) => (
                          <div key={i} className="swiper-slide">
                            <img src={img} alt={`Slide ${i+1}`} className="w-full h-full object-cover" draggable="false"/>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-6 justify-between items-start mt-4">
                    <div className="md:w-1/2">
                      <h3 className="text-[24px] md:text-[28px] uppercase leading-9 font-nohemi text-black">{project.name}</h3>
                      <p className="text-sm uppercase mt-2 text-gray-500 font-nohemi">{project.location}</p>
                    </div>
                    <div className="md:w-1/2 flex flex-col items-start md:items-end gap-6 text-left md:text-right text-black">
                      <p className="text-base font-inter">{project.description}</p>
                      <Link className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium uppercase hover:text-gray-500 transition-colors cursor-pointer border-b border-black pb-1" href={`/projects/${project.slug}`}>
                        more about the project
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none" className="size-2.5">
                          <path d="M9.464 0C9.87962 0 10.214 0.334375 10.214 0.75V8.25C10.214 8.66562 9.87962 9 9.464 9C9.04837 9 8.714 8.66562 8.714 8.25V2.55937L1.27893 10.0594C0.985181 10.3531 0.510181 10.3531 0.219556 10.0594C-0.0710693 9.76562 -0.0741943 9.29375 0.216431 9L7.6515 1.5H1.96087C1.54525 1.5 1.21087 1.16562 1.21087 0.75C1.21087 0.334375 1.54525 0 1.96087 0H9.46087H9.464Z" fill="currentColor"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="w-full flex items-center justify-center mt-16 gsap-fade-up" style={{ opacity: 0, transform: 'translateY(40px)' }}>
          <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium uppercase text-black border border-black px-6 py-3 hover:bg-black hover:text-white transition-all cursor-pointer" href="#">
            VIEW ALL PROJECTS
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none" className="size-2.5">
              <path d="M9.464 0C9.87962 0 10.214 0.334375 10.214 0.75V8.25C10.214 8.66562 9.87962 9 9.464 9C9.04837 9 8.714 8.66562 8.714 8.25V2.55937L1.27893 10.0594C0.985181 10.3531 0.510181 10.3531 0.219556 10.0594C-0.0710693 9.76562 -0.0741943 9.29375 0.216431 9L7.6515 1.5H1.96087C1.54525 1.5 1.21087 1.16562 1.21087 0.75C1.21087 0.334375 1.54525 0 1.96087 0H9.46087H9.464Z" fill="currentColor"></path>
            </svg>
          </a>
        </div>
        
      </div>
    </div>
  );
}
