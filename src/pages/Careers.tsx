import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, MessageSquare } from 'lucide-react';
import { WHATSAPP_NUMBER, OFFICE_EMAIL } from '../data';

const openings = [
  { role: 'Real Estate Sales Executive', location: 'Vijayawada', type: 'Full-time', desc: 'Drive residential flat sales for our Blueberry and Apple projects. Build client relationships and close deals with premium 3 BHK buyers.' },
  { role: 'Site Supervisor / Project Manager', location: 'Vijayawada', type: 'Full-time', desc: 'Oversee day-to-day construction quality, materials procurement, and contractor coordination at Akhil Promoters site offices.' },
  { role: 'Customer Relationship Manager', location: 'Vijayawada', type: 'Full-time', desc: 'Handle post-booking buyer communications, documentation follow-ups, and handover coordination.' }
];

export const Careers = () => {
  return (
    <div className="bg-akhil-off-white min-h-screen pt-24 pb-20">
      <section className="bg-akhil-dark text-white py-20 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-akhil-red text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            JOIN OUR TEAM
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Careers at Akhil Promoters</h1>
          <p className="text-gray-400 max-w-2xl text-sm font-light leading-relaxed">
            Build your career with one of Vijayawada's most trusted CREDAI-accredited real estate developers.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-serif text-akhil-charcoal mb-8">Current Openings</h2>

        <div className="space-y-6">
          {openings.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-akhil-border p-8 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-akhil-red/10 text-akhil-red flex items-center justify-center flex-shrink-0 group-hover:bg-akhil-red group-hover:text-white transition-colors">
                    <Briefcase size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-akhil-charcoal mb-1 group-hover:text-akhil-red transition-colors">{job.role}</h3>
                    <div className="flex items-center gap-4 text-xs text-akhil-gray mb-3">
                      <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {job.type}</span>
                    </div>
                    <p className="text-xs text-akhil-gray font-light">{job.desc}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Akhil%20Promoters,%20I%20am%20interested%20in%20the%20${encodeURIComponent(job.role)}%20position.`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all flex items-center gap-2"
                  >
                    <MessageSquare size={14} /> Apply via WA
                  </a>
                  <a
                    href={`mailto:${OFFICE_EMAIL}?subject=Application for ${job.role}&body=Dear Akhil Promoters, I am interested in the ${job.role} position.`}
                    className="px-5 py-3 bg-akhil-off-white hover:bg-akhil-border text-akhil-charcoal text-xs font-bold tracking-widest uppercase rounded-xl border border-akhil-border transition-all"
                  >
                    Email Resume
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-akhil-dark text-white rounded-2xl text-center border border-white/10">
          <h3 className="text-2xl font-serif mb-3">Don't See Your Role?</h3>
          <p className="text-gray-400 text-sm font-light mb-6">Send us your resume and we'll reach out when a suitable position opens.</p>
          <a
            href={`mailto:${OFFICE_EMAIL}?subject=General Resume Submission - Akhil Promoters`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-akhil-red hover:bg-akhil-red-hover text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all"
          >
            Send Your Resume →
          </a>
        </div>
      </section>
    </div>
  );
};
