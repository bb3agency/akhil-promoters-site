"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function InteractiveToolsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [propertyValue, setPropertyValue] = useState(50000000);
  const [downPayment, setDownPayment] = useState(20);
  const [years, setYears] = useState(25);
  const [interestRate, setInterestRate] = useState(8.5);
  
  const calculateMortgage = () => {
    const principal = propertyValue - (propertyValue * (downPayment / 100));
    const monthlyRate = (interestRate / 100) / 12;
    const numberOfPayments = years * 12;
    
    if (monthlyRate === 0) return principal / numberOfPayments;
    
    const mathPower = Math.pow(1 + monthlyRate, numberOfPayments);
    const monthlyPayment = (principal * monthlyRate * mathPower) / (mathPower - 1);
    
    return monthlyPayment;
  };

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
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        <div className="text-center mb-16 md:mb-24 gsap-fade-up" style={{ opacity: 0, transform: 'translateY(50px)' }}>
          <span className="text-gray-400 font-inter text-xs uppercase tracking-[0.2em] mb-4 block">Financial Planning</span>
          <h2 className="text-[2rem] md:text-[3.5rem] uppercase leading-none">Investment Calculator</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          
          <div className="w-full lg:w-3/5 flex flex-col gap-8 gsap-fade-up" style={{ opacity: 0, transform: 'translateY(50px)' }}>
            
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-end">
                <label className="uppercase text-sm tracking-widest text-gray-400">Property Value (INR)</label>
                <span className="text-xl font-bold"><span className="font-sans font-medium mr-0.5">₹</span>{propertyValue.toLocaleString('en-IN')}</span>
              </div>
              <input 
                type="range" min="10000000" max="200000000" step="1000000" 
                value={propertyValue} 
                onChange={(e) => setPropertyValue(Number(e.target.value))}
                className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-white"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-end">
                <label className="uppercase text-sm tracking-widest text-gray-400">Down Payment (%)</label>
                <span className="text-xl font-bold">{downPayment}%</span>
              </div>
              <input 
                type="range" min="10" max="80" step="5" 
                value={downPayment} 
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-white"
              />
            </div>
            
            <div className="flex gap-8">
              <div className="flex flex-col gap-2 w-1/2">
                <div className="flex justify-between items-end">
                  <label className="uppercase text-sm tracking-widest text-gray-400">Tenure (Years)</label>
                  <span className="text-xl font-bold">{years}</span>
                </div>
                <input 
                  type="range" min="5" max="30" step="1" 
                  value={years} 
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-white"
                />
              </div>
              
              <div className="flex flex-col gap-2 w-1/2">
                <div className="flex justify-between items-end">
                  <label className="uppercase text-sm tracking-widest text-gray-400">Interest Rate (%)</label>
                  <span className="text-xl font-bold">{interestRate}%</span>
                </div>
                <input 
                  type="range" min="6" max="12" step="0.1" 
                  value={interestRate} 
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-white"
                />
              </div>
            </div>
            
          </div>
          
          <div className="w-full lg:w-2/5 gsap-fade-up" style={{ opacity: 0, transform: 'translateY(50px)' }}>
            <div className="bg-[#111] border border-gray-800 p-8 h-full flex flex-col justify-center">
              <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-2">Estimated Monthly Payment</h3>
              <div className="text-4xl md:text-5xl text-theme-dark-green font-light mb-8">
                <span className="font-sans font-medium mr-1">₹</span>{Math.round(calculateMortgage()).toLocaleString('en-IN')}
              </div>
              
              <div className="space-y-4 text-sm font-inter text-gray-400 border-t border-gray-800 pt-8">
                <div className="flex justify-between">
                  <span>Principal Amount</span>
                  <span className="text-white"><span className="font-sans font-medium mr-0.5">₹</span>{(propertyValue - (propertyValue * (downPayment / 100))).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Down Payment Amount</span>
                  <span className="text-white"><span className="font-sans font-medium mr-0.5">₹</span>{(propertyValue * (downPayment / 100)).toLocaleString('en-IN')}</span>
                </div>
              </div>
              
              <button className="mt-8 w-full py-4 border border-white uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-colors">
                Get Pre-Approved
              </button>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
