"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OPENINGS = [
  { id: 1, title: "Senior Architect", department: "Design", location: "Head Office", type: "Full-Time" },
  { id: 2, title: "Project Manager", department: "Construction", location: "On-Site", type: "Full-Time" },
  { id: 3, title: "Sales Executive", department: "Sales", location: "Head Office", type: "Full-Time" },
  { id: 4, title: "Interior Designer", department: "Design", location: "Head Office", type: "Contract" }
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  return (
    <main className="flex flex-col w-full bg-pure-white min-h-screen pt-24">
      {/* Header */}
      <section className="px-6 md:px-12 py-16 md:py-24 border-b border-border-gray">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-outfit uppercase text-charcoal max-w-4xl">
          Build Your Career With Us
        </h1>
        <p className="mt-6 text-soft-gray font-inter max-w-2xl text-sm md:text-base leading-relaxed">
          Join a team of visionaries, innovators, and creators who are shaping the future of luxury real estate.
        </p>
      </section>

      {/* Culture & Benefits */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-light-stone grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <span className="text-primary-red font-inter text-xs tracking-widest uppercase font-bold">Our Culture</span>
          <h2 className="text-3xl md:text-4xl font-outfit uppercase text-charcoal leading-tight">
            Excellence is not an act, but a habit
          </h2>
          <p className="text-sm font-inter text-soft-gray leading-relaxed">
            At Akhil Promoters, we foster a culture of collaboration, innovation, and continuous learning. We believe in empowering our employees to take ownership of their work and drive meaningful impact. We offer competitive benefits, career growth opportunities, and a supportive environment where your ideas matter.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {[
            { title: "Health & Wellness", desc: "Comprehensive medical insurance and wellness programs." },
            { title: "Career Growth", desc: "Continuous learning and clear pathways for advancement." },
            { title: "Work-Life Balance", desc: "Flexible working hours and generous paid time off." },
            { title: "Inspiring Workspace", desc: "State-of-the-art offices designed for creativity." }
          ].map((benefit, i) => (
            <div key={i} className="flex flex-col gap-4 p-6 bg-pure-white border border-border-gray hover:border-charcoal transition-colors">
              <h3 className="font-outfit uppercase text-charcoal text-lg">{benefit.title}</h3>
              <p className="font-inter text-xs text-soft-gray leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-pure-white">
        <div className="max-w-4xl mx-auto flex flex-col gap-16">
          <h2 className="text-3xl font-outfit uppercase text-charcoal text-center border-b border-border-gray pb-8">
            Current Openings
          </h2>
          
          <div className="flex flex-col gap-6">
            {OPENINGS.map((job) => (
              <div key={job.id} className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 bg-warm-white border border-border-gray hover:border-charcoal transition-all duration-300">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-outfit uppercase text-charcoal">{job.title}</h3>
                  <div className="flex gap-4 text-xs font-inter uppercase tracking-widest text-soft-gray font-bold">
                    <span>{job.department}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedJob(job.id)}
                  className="mt-6 md:mt-0 bg-charcoal text-pure-white px-8 py-3 font-outfit uppercase tracking-widest text-sm hover:bg-primary-red transition-colors shrink-0"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-deep-charcoal/80 flex items-center justify-center p-4 sm:p-8 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              exit={{ y: 50, opacity: 0 }}
              className="bg-pure-white w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-pure-white p-6 md:p-8 border-b border-border-gray flex justify-between items-center z-10">
                <h2 className="text-2xl font-outfit uppercase text-charcoal">Submit Application</h2>
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="text-soft-gray hover:text-primary-red transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              
              <form className="p-6 md:p-8 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold font-inter uppercase tracking-widest text-soft-gray">Applying for</span>
                  <span className="text-xl font-outfit uppercase text-charcoal">{OPENINGS.find(j => j.id === selectedJob)?.title}</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold font-inter uppercase tracking-widest text-charcoal">First Name *</label>
                    <input type="text" className="border-b border-border-gray bg-transparent py-2 outline-none focus:border-charcoal transition-colors text-charcoal font-inter" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold font-inter uppercase tracking-widest text-charcoal">Last Name *</label>
                    <input type="text" className="border-b border-border-gray bg-transparent py-2 outline-none focus:border-charcoal transition-colors text-charcoal font-inter" required />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold font-inter uppercase tracking-widest text-charcoal">Email Address *</label>
                  <input type="email" className="border-b border-border-gray bg-transparent py-2 outline-none focus:border-charcoal transition-colors text-charcoal font-inter" required />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold font-inter uppercase tracking-widest text-charcoal">Phone Number *</label>
                  <input type="tel" className="border-b border-border-gray bg-transparent py-2 outline-none focus:border-charcoal transition-colors text-charcoal font-inter" required />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold font-inter uppercase tracking-widest text-charcoal">Upload Resume (PDF) *</label>
                  <div className="border border-dashed border-border-gray p-8 text-center bg-warm-white hover:bg-light-stone cursor-pointer transition-colors">
                    <span className="font-outfit uppercase text-sm text-soft-gray">Click to browse or drag and drop</span>
                    <input type="file" className="hidden" accept=".pdf" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold font-inter uppercase tracking-widest text-charcoal">Cover Letter / Message</label>
                  <textarea rows={4} className="border-b border-border-gray bg-transparent py-2 outline-none focus:border-charcoal transition-colors text-charcoal font-inter resize-none"></textarea>
                </div>
                
                <button type="submit" className="bg-charcoal text-pure-white px-8 py-4 font-outfit uppercase tracking-widest text-sm hover:bg-primary-red transition-colors w-full mt-4">
                  Submit Application
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
