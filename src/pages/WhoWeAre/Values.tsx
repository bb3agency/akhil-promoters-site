import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Compass, ShieldCheck, Star, Building, Zap } from 'lucide-react';

const values = [
  {
    icon: ShieldCheck,
    title: 'CREDAI Accreditation',
    description: 'We are proud members of CREDAI Vijayawada, upholding the highest ethical and quality standards in real estate.'
  },
  {
    icon: Compass,
    title: '100% Vaastu Compliance',
    description: 'Every flat — from Blueberry to Apple to Cherry — is scientifically designed for optimal Vaastu orientation, natural light, and energy flow.'
  },
  {
    icon: Star,
    title: 'Premium Materials Only',
    description: 'We use only branded materials: Finolex/Havells copper wiring, Jaquar CP fittings, Legrand/GM switches, and teak wood joinery throughout.'
  },
  {
    icon: Building,
    title: 'Seismic-Resistant RCC',
    description: 'All structures are RCC framed, designed to withstand both wind and seismic loads per IS codes — your family\'s safety is paramount.'
  },
  {
    icon: CheckCircle,
    title: 'Clear Legal Title',
    description: 'Every project is sold with complete legal title, approved municipal plan, RERA registration, and encumbrance-free documentation.'
  },
  {
    icon: Zap,
    title: 'Power Backup & Lift',
    description: 'Generator backup for lifts, water motors, corridor lights and 6 essential points inside each flat. Johnson 6-passenger automatic elevators standard.'
  }
];

export const Values = () => {
  return (
    <div className="bg-akhil-off-white min-h-screen pt-24 pb-20">
      <section className="bg-akhil-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Link to="/who-we-are" className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white uppercase tracking-widest mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to Who We Are
          </Link>
          <span className="text-akhil-red text-xs font-bold tracking-[0.2em] uppercase mb-3 block">OUR PRINCIPLES</span>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Quality Standards & Core Values</h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed max-w-2xl">
            The six pillars that define every Akhil Promoters development — from foundation to finishing.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-akhil-border p-8 shadow-sm hover:shadow-lg hover:border-akhil-red/30 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-akhil-red/10 text-akhil-red flex items-center justify-center mb-5 group-hover:bg-akhil-red group-hover:text-white transition-colors">
                <value.icon size={22} />
              </div>
              <h3 className="text-lg font-serif font-bold text-akhil-charcoal mb-3 group-hover:text-akhil-red transition-colors">
                {value.title}
              </h3>
              <p className="text-xs text-akhil-gray font-light leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
