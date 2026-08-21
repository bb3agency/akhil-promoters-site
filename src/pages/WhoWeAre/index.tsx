import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Users, Building, ArrowRight } from 'lucide-react';

export const WhoWeAre = () => {
  return (
    <div className="bg-akhil-off-white min-h-screen pt-24 pb-20">
      {/* Hero Header */}
      <section className="bg-akhil-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <img src="/images/projects/blueberry.jpg" alt="bg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-akhil-dark to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-akhil-red text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            WHO WE ARE
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
            Akhil Promoters<br />Private Limited
          </h1>
          <p className="text-gray-400 max-w-2xl text-sm md:text-base font-light leading-relaxed">
            A premier CREDAI-accredited real estate development firm committed to crafting landmark residential developments across Vijayawada, Andhra Pradesh.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-akhil-red text-xs font-bold tracking-[0.2em] uppercase mb-3 block flex items-center gap-3">
              <span className="w-8 h-[2px] bg-akhil-red block" />
              OUR STORY
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-akhil-charcoal mb-6 leading-tight">
              Building Lives, Not Just Buildings
            </h2>
            <p className="text-akhil-gray text-sm leading-relaxed mb-6 font-light">
              Akhil Promoters Private Limited was founded with a singular vision: to bring world-class residential standards to Vijayawada's discerning homebuyers. As proud members of CREDAI, we have delivered landmark developments including Blueberry, Apple, and Cherry — each a testimony to our commitment to quality, Vaastu compliance, and transparent practices.
            </p>
            <p className="text-akhil-gray text-sm leading-relaxed mb-8 font-light">
              Our projects are designed in collaboration with award-winning architects (Clark Lloyd International, D+D Architecture) and structural engineering firms (VAP Engineers), ensuring every home is built to withstand the test of time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/who-we-are/story"
                className="px-6 py-3.5 bg-akhil-charcoal hover:bg-akhil-red text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all flex items-center gap-2"
              >
                Our Full Story <ArrowRight size={14} />
              </Link>
              <Link
                to="/who-we-are/leadership"
                className="px-6 py-3.5 bg-akhil-off-white hover:bg-akhil-border text-akhil-charcoal text-xs font-bold tracking-widest uppercase rounded-xl transition-all border border-akhil-border flex items-center gap-2"
              >
                Leadership Team <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/images/projects/apple.jpg"
              alt="Akhil Promoters Construction"
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-xl border border-akhil-border"
            />
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 bg-akhil-dark text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-akhil-red text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
              OUR CORE PRINCIPLES
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-white">What Sets Us Apart</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-akhil-red/50 transition-colors">
              <ShieldCheck size={28} className="text-akhil-red mb-4" />
              <h4 className="text-base font-serif font-bold text-white mb-2">CREDAI Accredited</h4>
              <p className="text-xs text-gray-400 font-light">Full compliance with CREDAI Vijayawada builder standards and ethical practices.</p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-akhil-red/50 transition-colors">
              <Award size={28} className="text-akhil-red mb-4" />
              <h4 className="text-base font-serif font-bold text-white mb-2">Award-Winning Architects</h4>
              <p className="text-xs text-gray-400 font-light">Collaborating with Clark Lloyd International and D+D Architecture for unmatched design excellence.</p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-akhil-red/50 transition-colors">
              <Building size={28} className="text-akhil-red mb-4" />
              <h4 className="text-base font-serif font-bold text-white mb-2">100% Vaastu Compliance</h4>
              <p className="text-xs text-gray-400 font-light">Every unit is Vaastu-certified for optimal orientation, ventilation, and positive energy flow.</p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-akhil-red/50 transition-colors">
              <Users size={28} className="text-akhil-red mb-4" />
              <h4 className="text-base font-serif font-bold text-white mb-2">Transparent Transactions</h4>
              <p className="text-xs text-gray-400 font-light">Clear title properties, RERA-registered developments, and fully documented legal process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-page Links */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to="/who-we-are/story"
            className="p-8 bg-white border border-akhil-border rounded-2xl hover:shadow-lg hover:border-akhil-red/30 transition-all group"
          >
            <h3 className="text-xl font-serif font-bold text-akhil-charcoal mb-2 group-hover:text-akhil-red transition-colors">
              Our Story & Legacy →
            </h3>
            <p className="text-xs text-akhil-gray font-light">The founding vision and journey of Akhil Promoters in Vijayawada real estate.</p>
          </Link>

          <Link
            to="/who-we-are/leadership"
            className="p-8 bg-white border border-akhil-border rounded-2xl hover:shadow-lg hover:border-akhil-red/30 transition-all group"
          >
            <h3 className="text-xl font-serif font-bold text-akhil-charcoal mb-2 group-hover:text-akhil-red transition-colors">
              Leadership Team →
            </h3>
            <p className="text-xs text-akhil-gray font-light">Meet the experienced leadership and advisory board driving Akhil Promoters forward.</p>
          </Link>

          <Link
            to="/who-we-are/values"
            className="p-8 bg-white border border-akhil-border rounded-2xl hover:shadow-lg hover:border-akhil-red/30 transition-all group"
          >
            <h3 className="text-xl font-serif font-bold text-akhil-charcoal mb-2 group-hover:text-akhil-red transition-colors">
              Quality & Values →
            </h3>
            <p className="text-xs text-akhil-gray font-light">Our unwavering commitment to quality construction, Vaastu science, and ethical real estate.</p>
          </Link>
        </div>
      </section>
    </div>
  );
};
