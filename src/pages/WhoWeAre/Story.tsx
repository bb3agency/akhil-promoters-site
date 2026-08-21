import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Star, ShieldCheck } from 'lucide-react';

export const Story = () => {
  return (
    <div className="bg-akhil-off-white min-h-screen pt-24 pb-20">
      <section className="bg-akhil-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Link to="/who-we-are" className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white uppercase tracking-widest mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to Who We Are
          </Link>
          <span className="text-akhil-red text-xs font-bold tracking-[0.2em] uppercase mb-3 block">OUR STORY</span>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">The Akhil Promoters Legacy</h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            A chronicle of vision, craft, and architectural excellence in Vijayawada.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 space-y-12">
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-akhil-border shadow-sm">
          <h2 className="text-2xl md:text-3xl font-serif text-akhil-charcoal mb-6">Our Founding Commitment</h2>
          <p className="text-akhil-gray text-sm leading-relaxed mb-4 font-light">
            Akhil Promoters Private Limited was established with a foundational belief: that every family in Vijayawada deserves a home that is not only structurally sound but architecturally inspiring. From our earliest developments to our current flagship projects — Blueberry, Apple, and Cherry — we have held to this promise.
          </p>
          <p className="text-akhil-gray text-sm leading-relaxed font-light">
            As proud members of CREDAI Vijayawada, we operate with full transparency, clear legal titles, and uncompromising construction quality. Our projects are designed in collaboration with award-winning architects Clark Lloyd International and D+D Architecture, with structural supervision by VAP Engineers and Anne Raghu Ram.
          </p>
        </div>

        {/* Timeline */}
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-akhil-border shadow-sm">
          <h2 className="text-2xl font-serif text-akhil-charcoal mb-8">Our Milestones</h2>
          <div className="space-y-6 relative border-l-2 border-akhil-red/30 pl-8">
            <div className="relative">
              <span className="absolute -left-10 w-4 h-4 rounded-full bg-akhil-red mt-1" />
              <h4 className="text-sm font-bold text-akhil-charcoal">Cherry — 3 BHK Luxury Residences</h4>
              <p className="text-xs text-akhil-gray">Varalakshmi Puram, Kanuru. 1625 SFT units delivered with 800x800mm vitrified flooring and premium finishes. <span className="text-emerald-600 font-bold">COMPLETED.</span></p>
            </div>
            <div className="relative">
              <span className="absolute -left-10 w-4 h-4 rounded-full bg-akhil-red mt-1" />
              <h4 className="text-sm font-bold text-akhil-charcoal">Apple — 3 BHK Premium Flats</h4>
              <p className="text-xs text-akhil-gray">Mahadevpuram Colony, Kanuru. Featuring 3D isometric layouts, teak wood joinery, and Jaquar CP fittings. <span className="text-blue-600 font-bold">ONGOING.</span></p>
            </div>
            <div className="relative">
              <span className="absolute -left-10 w-4 h-4 rounded-full bg-akhil-red mt-1" />
              <h4 className="text-sm font-bold text-akhil-charcoal">Blueberry — 3 BHK Flagship Development</h4>
              <p className="text-xs text-akhil-gray">Lotus Land Mark, Sector-3, Ayodhya Nagar. 1930–2020 SFT premium 3 BHK flats with 6-passenger Johnson lifts. <span className="text-blue-600 font-bold">ONGOING.</span></p>
            </div>
            <div className="relative">
              <span className="absolute -left-10 w-4 h-4 rounded-full bg-gray-300 mt-1" />
              <h4 className="text-sm font-bold text-akhil-charcoal">Akhil Signature & Akhil Heights</h4>
              <p className="text-xs text-akhil-gray">Next generation signature villa and high-rise apartment communities. <span className="text-orange-500 font-bold">UPCOMING.</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
