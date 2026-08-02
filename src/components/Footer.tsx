import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="mt-20">
      <footer className="bg-gradient-to-b from-[#464C54] to-[#2a2d32] overflow-hidden relative pt-16 md:pt-24 px-8 md:px-16 flex flex-col text-white shadow-2xl">
        
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 relative z-10 w-full max-w-[1400px] mx-auto">
          
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-[0.75rem] flex items-center justify-center p-2 shadow-lg">
                <img src="/akhil-promoters-logo.png" alt="Logo Icon" className="w-full h-auto object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
              </div>
              <span className="text-2xl md:text-3xl font-nohemi font-semibold tracking-wide">Akhil Promoters</span>
            </div>
            <p className="text-gray-300 font-nohemi text-sm md:text-base leading-relaxed max-w-sm mt-4 tracking-wide">
              Pioneering luxury real estate development with a commitment to excellence, transparency, and sustainable innovation in Vijayawada.
            </p>
            <p className="text-gray-400 text-xs font-nohemi tracking-wide mt-auto pt-8">
              © 2026 Akhil Promoters. All rights reserved.
            </p>
          </div>

          {/* Links Grid */}
          <div className="col-span-1 md:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-6">
              <h4 className="font-nohemi tracking-wide font-medium text-white text-base">Quick Links</h4>
              <ul className="flex flex-col gap-4 text-gray-300 text-sm font-nohemi tracking-wide">
                <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#projects" className="hover:text-white transition-colors">Our Projects</Link></li>
                <li><Link href="#process" className="hover:text-white transition-colors">Our Process</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-6">
              <h4 className="font-nohemi tracking-wide font-medium text-white text-base">Resources</h4>
              <ul className="flex flex-col gap-4 text-gray-300 text-sm font-nohemi tracking-wide">
                <li><Link href="#buyers-guide" className="hover:text-white transition-colors">Buyer's Guide</Link></li>
                <li><Link href="#tools" className="hover:text-white transition-colors">Interactive Tools</Link></li>
                <li><Link href="#testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Brochures</Link></li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-6">
              <h4 className="font-nohemi tracking-wide font-medium text-white text-base">Socials</h4>
              <ul className="flex flex-col gap-4 text-gray-300 text-sm font-nohemi tracking-wide">
                <li><Link href="#" className="hover:text-white transition-colors">LinkedIn</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Instagram</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Facebook</Link></li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-6">
              <h4 className="font-nohemi tracking-wide font-medium text-white text-base">Legal</h4>
              <ul className="flex flex-col gap-4 text-gray-300 text-sm font-nohemi tracking-wide">
                <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
        </div>

        {/* Large Watermark Text */}
        <div className="w-full relative mt-20 md:mt-32 flex justify-center overflow-hidden h-[120px] md:h-[280px]">
          <h1 className="text-[120px] md:text-[350px] font-nohemi leading-none text-white/10 absolute bottom-[-10px] md:bottom-[-60px] whitespace-nowrap select-none tracking-tight">
            akhil.promoters
          </h1>
        </div>
        
      </footer>
    </div>
  );
}
