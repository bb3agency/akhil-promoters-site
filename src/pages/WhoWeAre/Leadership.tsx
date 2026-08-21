import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User } from 'lucide-react';

const leaders = [
  {
    name: 'S. Rajeshwara Rao',
    role: 'Design Architect (Clark Lloyd International)',
    bio: 'Renowned architect specializing in modern residential elevation design and contemporary facades across Andhra Pradesh.'
  },
  {
    name: 'K. Ramesh',
    role: 'Architect & Elevation Designer (D+D Architecture)',
    bio: 'Visakhapatnam-based award-winning architect who designed the distinctive elevations for Apple and Cherry projects.'
  },
  {
    name: 'Anne Raghu Ram',
    role: 'Structural Engineer, Vijayawada',
    bio: 'Principal structural engineer overseeing RCC seismic-zone compliance for all Akhil Promoters developments.'
  },
  {
    name: 'VAP Engineers (I) Pvt. Ltd.',
    role: 'Structural Design Consultants',
    bio: 'Expert structural engineering firm responsible for Blueberry project RCC frame design and wind load analysis.'
  }
];

export const Leadership = () => {
  return (
    <div className="bg-akhil-off-white min-h-screen pt-24 pb-20">
      <section className="bg-akhil-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Link to="/who-we-are" className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white uppercase tracking-widest mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to Who We Are
          </Link>
          <span className="text-akhil-red text-xs font-bold tracking-[0.2em] uppercase mb-3 block">EXPERTISE & AUTHORITY</span>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Architects & Engineering Panel</h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed max-w-2xl">
            Each Akhil Promoters project is conceived and executed by Andhra Pradesh's most respected architects, structural engineers, and construction specialists.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map((leader, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-akhil-border p-8 shadow-sm hover:shadow-lg transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-akhil-red/10 text-akhil-red flex items-center justify-center flex-shrink-0 group-hover:bg-akhil-red group-hover:text-white transition-colors">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-akhil-charcoal group-hover:text-akhil-red transition-colors">{leader.name}</h3>
                  <span className="text-xs font-bold text-akhil-red uppercase tracking-wider">{leader.role}</span>
                </div>
              </div>
              <p className="text-xs text-akhil-gray font-light leading-relaxed">{leader.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
