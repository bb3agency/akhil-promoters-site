import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

interface UnderConstructionProps {
  title?: string;
  description?: string;
  backLink?: string;
  backText?: string;
}

export const UnderConstruction: React.FC<UnderConstructionProps> = ({
  title = "WEBSITE UNDER CONSTRUCTION",
  description = "This section is currently being prepared.\nMore information will be available soon.",
  backLink = "/",
  backText = "BACK TO HOME"
}) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-akhil-off-white pt-24 pb-16 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div initial="initial" animate="animate" variants={fadeInUp} className="flex flex-col items-center">
          <span className="text-akhil-red text-[11px] font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
            <span className="w-4 h-[1px] bg-akhil-red block"></span>
            COMING SOON
            <span className="w-4 h-[1px] bg-akhil-red block"></span>
          </span>
          
          <h1 className="text-3xl md:text-5xl font-light text-akhil-charcoal mb-6 tracking-tight">
            {title}
          </h1>
          
          <p className="text-akhil-gray text-[15px] font-light leading-relaxed mb-12 whitespace-pre-line">
            {description}
          </p>
          
          <div className="w-full max-w-md aspect-[16/9] bg-gray-200 mb-12 mx-auto relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#E8E8E5] flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
          
          <Link 
            to={backLink}
            className="inline-flex items-center text-[12px] font-bold tracking-widest uppercase text-akhil-charcoal hover:text-akhil-red transition-colors group"
          >
            {backText} 
            <span className="ml-3 text-akhil-red transform group-hover:-translate-x-1 transition-transform">←</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
