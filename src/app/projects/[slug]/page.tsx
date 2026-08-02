import React from 'react';
import { getProjectBySlug, getAllProjects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: any) {
  // Await the params object to ensure compatibility with Next.js 15
  const resolvedParams = await Promise.resolve(params);
  const { slug } = resolvedParams;
  
  const project = getProjectBySlug(slug);
  
  if (!project) {
    notFound();
  }
  
  return (
    <main className="min-h-screen bg-theme-iron">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] bg-charcoal">
        <div className="absolute inset-0">
          <img 
            src={project.heroImage} 
            alt={project.name} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-10 max-w-[1400px] mx-auto">
          <Link href="/#projects" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors font-inter text-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m15 18-6-6 6-6"/></svg>
            Back to Projects
          </Link>
          <h1 className="text-4xl md:text-[6rem] font-nohemi text-white uppercase leading-none tracking-tight mb-4">{project.name}</h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <p className="text-xl md:text-2xl text-white font-nohemi tracking-wide flex items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mr-2 text-primary-red"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              {project.address}
            </p>
            <div className="h-4 w-px bg-white/30 hidden md:block"></div>
            <p className="text-lg text-white/80 font-inter">{project.type} &bull; {project.size}</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <h2 className="text-3xl font-nohemi uppercase mb-6 text-charcoal">Project Overview</h2>
            <p className="text-lg text-gray-600 font-inter leading-relaxed mb-8">
              {project.description}
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-gray-300 pt-8 mt-8">
              <div>
                <span className="block text-sm text-gray-500 font-nohemi uppercase tracking-wider mb-2">Architects</span>
                <span className="block text-charcoal font-medium font-inter">{project.architects}</span>
              </div>
              <div>
                <span className="block text-sm text-gray-500 font-nohemi uppercase tracking-wider mb-2">Structural</span>
                <span className="block text-charcoal font-medium font-inter">{project.structural}</span>
              </div>
              {project.reraNo && (
                <div className="col-span-2">
                  <span className="block text-sm text-gray-500 font-nohemi uppercase tracking-wider mb-2">RERA Registration</span>
                  <span className="block text-charcoal font-medium font-inter">{project.reraNo}</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Amenities Box */}
          <div className="md:col-span-5">
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 h-full border border-gray-100">
              <h3 className="text-2xl font-nohemi uppercase mb-8 text-charcoal border-b border-gray-100 pb-4">Amenities & Features</h3>
              <ul className="flex flex-col gap-4">
                {project.amenities.map((amenity, idx) => (
                  <li key={idx} className="flex items-start text-gray-700 font-inter">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-theme-dark-green shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"/></svg>
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-red font-nohemi text-sm tracking-[0.2em] uppercase mb-4 block">Quality Without Compromise</span>
            <h2 className="text-4xl md:text-5xl font-nohemi uppercase">Specifications</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 md:gap-y-16">
            {project.specifications.map((spec, idx) => (
              <div key={idx} className="border-t border-white/20 pt-6">
                <h4 className="text-xl font-nohemi text-primary-red uppercase mb-4">{spec.category}</h4>
                <p className="text-white/70 font-inter text-sm leading-relaxed">{spec.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-nohemi uppercase text-charcoal">Floor Plans</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {project.floorPlans.map((plan, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg group">
              <div className="h-[300px] md:h-[400px] overflow-hidden bg-gray-100 flex items-center justify-center p-8">
                {/* Fallback styling for floor plan if images are just landscape placeholders */}
                <div className="relative w-full h-full border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-400 bg-[url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center">
                   <div className="absolute inset-0 bg-white/80"></div>
                   <div className="relative z-10 flex flex-col items-center">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                      <span className="font-nohemi text-xl text-charcoal">See Brochure for Full Schematic</span>
                   </div>
                </div>
              </div>
              <div className="p-6 border-t border-gray-100 flex justify-between items-center bg-gray-50">
                <h4 className="font-nohemi text-xl text-charcoal uppercase">{plan.title}</h4>
                <div className="text-right">
                  {plan.area && <span className="block font-inter text-theme-dark-green font-medium">{plan.area}</span>}
                  {plan.facing && <span className="block font-inter text-gray-500 text-sm">{plan.facing} Facing</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary-red font-nohemi text-sm tracking-[0.2em] uppercase mb-4 block">Connectivity</span>
              <h2 className="text-4xl md:text-5xl font-nohemi uppercase text-charcoal mb-8">Location & Landmarks</h2>
              
              <ul className="flex flex-col gap-6">
                {project.nearbyPlaces.map((place, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 font-inter text-lg">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4 shrink-0 text-charcoal">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    {place}
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 p-8 bg-theme-iron rounded-2xl">
                <h4 className="font-nohemi uppercase text-charcoal mb-4">Site Address</h4>
                <p className="font-inter text-gray-600">{project.address}</p>
              </div>
            </div>
            
            <div className="h-[600px] bg-gray-200 rounded-3xl overflow-hidden relative shadow-inner">
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1774&auto=format&fit=crop" alt="Map Placeholder" className="w-full h-full object-cover opacity-80 mix-blend-multiply" />
               <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary-red rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div className="mt-4 bg-white px-6 py-3 rounded-full shadow-xl font-nohemi text-charcoal uppercase tracking-wide font-bold">
                     {project.name}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
