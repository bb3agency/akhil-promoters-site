import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, Target, Lightbulb, TrendingUp } from 'lucide-react';

export const VisionMission = () => {
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
            OUR DIRECTION
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Vision &amp; Mission
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed max-w-2xl">
            The guiding philosophy and long-term purpose that drive every decision at Akhil Promoters Private Limited.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl border border-akhil-border p-10 shadow-sm hover:shadow-lg hover:border-akhil-red/30 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-akhil-red/10 text-akhil-red flex items-center justify-center mb-6 group-hover:bg-akhil-red group-hover:text-white transition-colors">
              <Eye size={26} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-akhil-charcoal mb-4 group-hover:text-akhil-red transition-colors">
              Our Vision
            </h2>
            <p className="text-sm text-akhil-gray font-light leading-relaxed">
              To be the most trusted residential real estate developer in Andhra Pradesh — renowned for delivering homes that set the benchmark for quality, design, and livability across every neighbourhood we enter.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-akhil-border p-10 shadow-sm hover:shadow-lg hover:border-akhil-red/30 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-akhil-red/10 text-akhil-red flex items-center justify-center mb-6 group-hover:bg-akhil-red group-hover:text-white transition-colors">
              <Target size={26} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-akhil-charcoal mb-4 group-hover:text-akhil-red transition-colors">
              Our Mission
            </h2>
            <p className="text-sm text-akhil-gray font-light leading-relaxed">
              To create premium, Vaastu-compliant, RERA-registered residences — built with branded materials, designed by award-winning architects, and delivered with full legal transparency — so every family we serve feels truly at home.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="bg-white rounded-2xl border border-akhil-border p-8 shadow-sm hover:shadow-lg hover:border-akhil-red/30 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-akhil-red/10 text-akhil-red flex items-center justify-center mb-5 group-hover:bg-akhil-red group-hover:text-white transition-colors">
              <Lightbulb size={22} />
            </div>
            <h3 className="text-lg font-serif font-bold text-akhil-charcoal mb-3 group-hover:text-akhil-red transition-colors">
              Innovation in Design
            </h3>
            <p className="text-xs text-akhil-gray font-light leading-relaxed">
              We partner with Clark Lloyd International and D+D Architecture to ensure each project reflects cutting-edge design sensibility, functional layouts, and enduring aesthetics.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-akhil-border p-8 shadow-sm hover:shadow-lg hover:border-akhil-red/30 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-akhil-red/10 text-akhil-red flex items-center justify-center mb-5 group-hover:bg-akhil-red group-hover:text-white transition-colors">
              <TrendingUp size={22} />
            </div>
            <h3 className="text-lg font-serif font-bold text-akhil-charcoal mb-3 group-hover:text-akhil-red transition-colors">
              Long-Term Value
            </h3>
            <p className="text-xs text-akhil-gray font-light leading-relaxed">
              Every Akhil Promoters home is engineered for longevity — using seismic-resistant RCC frames, branded fittings, and structured parking — delivering lasting asset value to our homeowners.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
