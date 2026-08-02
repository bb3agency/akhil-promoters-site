import Image from "next/image";
import Link from "next/link";

const PROJECTS = [
  {
    id: 1,
    title: "Akhil Heights",
    location: "City Center",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    desc: "A towering symbol of luxury living with panoramic city views and world-class amenities."
  },
  {
    id: 2,
    title: "The Residency",
    location: "North Avenue",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    desc: "Exclusive villas designed for those who appreciate the finer things in life."
  },
  {
    id: 3,
    title: "Eco Retreat",
    location: "Green Valley",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    desc: "Sustainable and eco-friendly homes blending nature with modern architecture."
  },
  {
    id: 4,
    title: "Marina Bay Towers",
    location: "Waterfront",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    desc: "Premium waterfront apartments offering a resort-style living experience."
  }
];

export default function Projects() {
  return (
    <main className="flex flex-col w-full bg-pure-white min-h-screen pt-24">
      {/* Page Header */}
      <section className="px-6 md:px-12 py-16 md:py-24 border-b border-border-gray">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-outfit uppercase text-charcoal">
          Our Projects
        </h1>
        <p className="mt-6 text-soft-gray font-inter max-w-2xl text-sm md:text-base leading-relaxed">
          Discover our portfolio of premium residential developments, where every detail is meticulously crafted to redefine luxury living.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-light-stone">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group cursor-pointer flex flex-col gap-6">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-pure-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-charcoal shadow-sm">
                  {project.status}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-baseline">
                  <h2 className="text-2xl md:text-3xl font-outfit uppercase text-charcoal group-hover:text-primary-red transition-colors">
                    {project.title}
                  </h2>
                  <span className="text-xs font-inter uppercase tracking-widest text-soft-gray">
                    {project.location}
                  </span>
                </div>
                <p className="text-sm font-inter text-soft-gray leading-relaxed">
                  {project.desc}
                </p>
              </div>
              <Link 
                href={`/projects/${project.id}`} 
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal border-b border-charcoal pb-1 w-fit group-hover:text-primary-red group-hover:border-primary-red transition-colors"
              >
                View Details
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform">
                  <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
