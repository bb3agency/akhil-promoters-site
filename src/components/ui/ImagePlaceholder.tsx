import React from 'react';

interface ImagePlaceholderProps {
  text?: string;
  className?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ 
  text = "IMAGE COMING SOON",
  className = "w-full h-full"
}) => {
  return (
    <div className={`bg-[#E8E8E5] flex flex-col items-center justify-center relative overflow-hidden ${className}`}>
      <svg className="w-10 h-10 text-gray-400 opacity-40 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase z-10 text-center px-4">
        {text}
      </span>
      {/* Subtle architectural texture/pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
    </div>
  );
};
