import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Layers, Wrench, Zap } from 'lucide-react';

const partners = [
  {
    icon: Award,
    category: 'Architecture',
    name: 'Clark Lloyd International',
    description: 'An internationally acclaimed architectural practice bringing world-class design standards to every Akhil Promoters development.',
  },
  {
    icon: Layers,
    category: 'Architecture',
    name: 'D+D Architecture',
    description: 'Specialists in contemporary residential design, ensuring functional elegance and spatial efficiency across all our projects.',
  },
  {
    icon: Wrench,
    category: 'Structural Engineering',
    name: 'VAP Engineers',
    description: 'Expert structural engineers ensuring IS-code compliant, seismic-resistant RCC-framed construction on every Akhil Promoters building.',
  },
  {
    icon: Zap,
    category: 'Structural Engineering',
    name: 'Anne Raghu Ram',
    description: 'Experienced structural consultant overseeing load calculations, foundation design, and quality assurance across our flagship projects.',
  },
];

const brands = [
  { label: 'Electrical Wiring', name: 'Finolex / Havells', note: 'ISI-marked copper wiring' },
  { label: 'CP Fittings', name: 'Jaquar', note: 'Premium bathroom fittings' },
  { label: 'Switches & Sockets', name: 'Legrand / GM', note: 'Modular electrical accessories' },
  { label: 'Elevators', name: 'Johnson Lifts', note: '6-passenger automatic lifts' },
  { label: 'Joinery', name: 'Teak Wood', note: 'Solid teak main doors & frames' },
  { label: 'Industry Body', name: 'CREDAI Vijayawada', note: 'Member — ethical builder accreditation' },
];

export const Partners = () => {
  return (
    <div className="bg-akhil-off-white min-h-screen pt-24 pb-20">
      <section className="bg-akhil-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Link
            to="/who-we-are"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white uppercase tracking-widest mb-6 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Who We Are
          </Link>
          <span className="text-akhil-red text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            OUR COLLABORATORS
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Partners &amp; Associates
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed max-w-2xl">
            The architects, engineers, and material brands we partner with to deliver homes of uncompromising quality.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
        <span className="text-akhil-red text-xs font-bold tracking-[0.2em] uppercase mb-8 block">
          PROFESSIONAL PARTNERS
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-akhil-border p-8 shadow-sm hover:shadow-lg hover:border-akhil-red/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-akhil-red/10 text-akhil-red flex items-center justify-center mb-5 group-hover:bg-akhil-red group-hover:text-white transition-colors">
                <partner.icon size={22} />
              </div>
              <span className="text-akhil-red text-[10px] font-bold tracking-widest uppercase mb-1 block">
                {partner.category}
              </span>
              <h3 className="text-lg font-serif font-bold text-akhil-charcoal mb-3 group-hover:text-akhil-red transition-colors">
                {partner.name}
              </h3>
              <p className="text-xs text-akhil-gray font-light leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-akhil-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-akhil-red text-xs font-bold tracking-[0.2em] uppercase mb-8 block">
            BRANDED MATERIALS &amp; INDUSTRY AFFILIATIONS
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="p-5 bg-white/5 border border-white/10 rounded-xl hover:border-akhil-red/40 transition-colors"
              >
                <span className="text-[10px] text-akhil-red font-bold tracking-widest uppercase block mb-1">
                  {brand.label}
                </span>
                <span className="text-white font-serif text-base block mb-1">{brand.name}</span>
                <span className="text-gray-400 text-xs font-light">{brand.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
