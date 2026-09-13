import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  Eye,
  Target,
  Compass,
  Building,
  CheckCircle,
  Zap,
  Star,
  ArrowRight,
  Layers,
  Wrench,
} from 'lucide-react';
import { OFFICE_ADDRESS, WHATSAPP_NUMBER } from '../../data';
import {
  staggerContainer,
  fadeInUp,
  itemFadeUp,
  viewportConfig,
  sectionScrollProps,
  mobileTap,
} from '../../utils/motion';

export const WhoWeAre = () => {
  return (
    <div className="bg-[#F7F5F0] min-h-screen pt-20 pb-20">
      {/* ── 1. HERO HEADER ───────────────────────────────── */}
      <section className="bg-[#181714] text-white py-14 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/images/who-we-are-hero.jpg"
            alt="Akhil Promoters Architectural Excellence"
            className="w-full h-full object-cover object-right sm:object-center opacity-40 sm:opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#181714] via-[#181714]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181714] via-transparent to-[#181714]/60" />
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemFadeUp} className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="type-label text-[#C8102E] tracking-[0.25em] uppercase text-[10px] sm:text-xs">
                WHO WE ARE
              </span>
              <span className="text-white/30 text-[10px] sm:text-xs">·</span>
              <span className="type-label text-white/50 text-[10px] sm:text-xs uppercase">
                CREDAI MEMBER BUILDER
              </span>
            </motion.div>

            <motion.h1
              variants={itemFadeUp}
              className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl mb-4 sm:mb-6 break-words"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                lineHeight: 1.1,
              }}
            >
              Building Legacies of Trust &amp; Architectural Distinction
            </motion.h1>

            <motion.p
              variants={itemFadeUp}
              className="text-white/70 text-xs sm:text-sm md:text-base max-w-2xl font-light leading-relaxed mb-6 sm:mb-8"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Premier residential developer in Vijayawada crafting enduring 3 BHK residences with architectural clarity, verified titles, and uncompromised construction.
            </motion.p>

            <motion.div variants={itemFadeUp} className="flex flex-wrap items-center gap-3 sm:gap-4">
              <motion.a
                whileTap={mobileTap}
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="type-label min-h-[44px] w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 active:bg-white/15 text-white transition-colors text-xs border border-white/20 inline-flex items-center justify-center"
              >
                Direct Advisory Chat
              </motion.a>
              <Link
                to="/projects"
                className="type-label min-h-[44px] w-full sm:w-auto px-6 py-3.5 bg-[#C8102E] hover:bg-[#A50D24] text-white transition-colors text-xs inline-flex items-center justify-center gap-2"
              >
                View Developments <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. COMPANY PROFILE & STATS ───────────────────── */}
      <motion.section
        {...sectionScrollProps}
        className="py-14 sm:py-20 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Main Story Text */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-7 space-y-5"
          >
            <motion.div variants={itemFadeUp} className="flex items-center gap-2">
              <span className="type-label text-[#C8102E] text-[10px] uppercase tracking-widest">
                01. ABOUT US
              </span>
            </motion.div>

            <motion.h2
              variants={itemFadeUp}
              className="text-2xl sm:text-3xl md:text-4xl text-[#181714]"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
            >
              Homes Built with Purpose, Not Compromise
            </motion.h2>

            <motion.p variants={itemFadeUp} className="type-body text-[#4A4640] leading-relaxed text-sm sm:text-base font-light">
              Since 2011, Akhil Promoters has developed signature residential communities across Vijayawada’s most connected corridors — Kanuru, Ayodhya Nagar, and Poranki. Every home is delivered with certified branded materials, seismic-resistant engineering, and 100% legal title clearance.
            </motion.p>

            <motion.div variants={itemFadeUp} className="grid grid-cols-2 gap-4 pt-2">
              {[
                { label: 'Founded', value: '2011' },
                { label: 'Affiliation', value: 'CREDAI Member' },
                { label: 'Title Clarity', value: '100% Approved' },
                { label: 'Specialization', value: 'Luxury 3 BHK' },
              ].map((stat, i) => (
                <div key={i} className="p-3.5 bg-white border border-[#E8E4DC] rounded-sm">
                  <span className="text-[10px] text-[#8A8580] uppercase tracking-wider block font-medium mb-0.5">{stat.label}</span>
                  <span className="text-base sm:text-lg font-serif text-[#181714] font-medium">{stat.value}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Compact Entity Card */}
          <motion.div
            variants={fadeInUp(0.6, 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-5"
          >
            <div className="bg-[#181714] text-white p-6 sm:p-7 rounded-sm shadow-md">
              <p className="type-label text-[#C8102E] text-[10px] uppercase mb-4 tracking-widest">
                Entity Details
              </p>
              <div className="space-y-3.5 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>
                <div className="border-b border-white/10 pb-2.5">
                  <span className="text-white/40 block text-[10px] type-label mb-0.5">Corporate Name</span>
                  <span className="text-white font-medium">Akhil Promoters Private Limited</span>
                </div>
                <div className="border-b border-white/10 pb-2.5">
                  <span className="text-white/40 block text-[10px] type-label mb-0.5">Apex Association</span>
                  <span className="text-white font-medium flex items-center gap-1.5">
                    <ShieldCheck size={13} className="text-[#C8102E]" /> CREDAI Vijayawada Chapter
                  </span>
                </div>
                <div className="border-b border-white/10 pb-2.5">
                  <span className="text-white/40 block text-[10px] type-label mb-0.5">Registered Office</span>
                  <span className="text-white/80 leading-relaxed block">{OFFICE_ADDRESS}</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] type-label mb-0.5">Design &amp; Structural Panel</span>
                  <span className="text-white/80">Clark Lloyd International · D+D Architecture · VAP Engineers</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ── 3. VISION & MISSION ──────────────────────────── */}
      <motion.section
        {...sectionScrollProps}
        className="py-14 sm:py-20 bg-white border-y border-[#E8E4DC] overflow-hidden"
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center max-w-xl mx-auto mb-8 sm:mb-12"
          >
            <motion.span variants={itemFadeUp} className="type-label text-[#C8102E] text-[10px] uppercase tracking-widest block mb-1.5">
              02. GUIDING PHILOSOPHY
            </motion.span>
            <motion.h2
              variants={itemFadeUp}
              className="text-2xl sm:text-3xl text-[#181714]"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
            >
              Vision &amp; Mission
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {/* Vision */}
            <motion.div
              variants={itemFadeUp}
              className="p-6 sm:p-8 bg-[#F7F5F0] border border-[#E8E4DC] rounded-sm"
            >
              <div className="w-10 h-10 rounded-full bg-[#C8102E]/10 text-[#C8102E] flex items-center justify-center mb-4">
                <Eye size={20} />
              </div>
              <h3
                className="text-xl text-[#181714] mb-2"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
              >
                Our Vision
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4640] leading-relaxed font-light">
                To set Vijayawada’s benchmark for enduring residential quality, aesthetic refinement, and transparent homeownership.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              variants={itemFadeUp}
              className="p-6 sm:p-8 bg-[#F7F5F0] border border-[#E8E4DC] rounded-sm"
            >
              <div className="w-10 h-10 rounded-full bg-[#C8102E]/10 text-[#C8102E] flex items-center justify-center mb-4">
                <Target size={20} />
              </div>
              <h3
                className="text-xl text-[#181714] mb-2"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
              >
                Our Mission
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4640] leading-relaxed font-light">
                Deliver homes built with certified branded materials, verified legal documentation, and timeless spatial design.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ── 4. QUALITY PILLARS ───────────────────────────── */}
      <motion.section
        {...sectionScrollProps}
        className="py-14 sm:py-20 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 overflow-hidden"
      >
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-xl mx-auto mb-8 sm:mb-12"
        >
          <motion.span variants={itemFadeUp} className="type-label text-[#C8102E] text-[10px] uppercase tracking-widest block mb-1.5">
            03. CONSTRUCTION STANDARDS
          </motion.span>
          <motion.h2
            variants={itemFadeUp}
            className="text-2xl sm:text-3xl text-[#181714]"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
          >
            Our Core Quality Pillars
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {[
            { icon: ShieldCheck, title: 'CREDAI Member Builder', desc: 'Strict ethical codes, consumer rights, and transparent documentation.' },
            { icon: Compass, title: 'Spatial Planning', desc: 'Optimized natural light, generous cross-ventilation, and functional layouts.' },
            { icon: Star, title: 'Branded Materials', desc: 'Finolex/Havells wiring, Jaquar CP fittings, and solid teak joinery.' },
            { icon: Building, title: 'Seismic-Resistant RCC', desc: 'Engineered structural frames strictly conforming to IS design codes.' },
            { icon: CheckCircle, title: '100% Clear Title', desc: 'Municipal building permissions, clean title deeds, and zero ambiguity.' },
            { icon: Zap, title: 'Lifts & Full Backup', desc: 'Johnson 6-passenger automatic elevators and soundproof power generators.' },
          ].map((val, idx) => (
            <motion.div
              key={idx}
              variants={itemFadeUp}
              className="p-5 sm:p-6 bg-white border border-[#E8E4DC] rounded-sm hover:border-[#C8102E]/40 transition-colors"
            >
              <div className="w-9 h-9 rounded-md bg-[#C8102E]/10 text-[#C8102E] flex items-center justify-center mb-3">
                <val.icon size={18} />
              </div>
              <h3 className="font-serif text-base text-[#181714] font-medium mb-1.5">{val.title}</h3>
              <p className="text-xs text-[#8A8580] leading-relaxed font-light">{val.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── 5. ARCHITECTURAL & ENGINEERING PARTNERS ──────── */}
      <motion.section
        {...sectionScrollProps}
        className="py-14 sm:py-20 bg-[#181714] text-white overflow-hidden"
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center max-w-xl mx-auto mb-8 sm:mb-12"
          >
            <motion.span variants={itemFadeUp} className="type-label text-[#C8102E] text-[10px] uppercase tracking-widest block mb-1.5">
              04. EXPERT COLLABORATION
            </motion.span>
            <motion.h2
              variants={itemFadeUp}
              className="text-2xl sm:text-3xl text-white"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
            >
              Architectural &amp; Engineering Partners
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { icon: Award, name: 'Clark Lloyd International', role: 'Principal Architecture', note: 'Signature elevations & layouts' },
              { icon: Layers, name: 'D+D Architecture', role: 'Elevation Design', note: 'Contemporary facade aesthetics' },
              { icon: Wrench, name: 'VAP Engineers (I) Pvt. Ltd.', role: 'Structural Engineering', note: 'RCC load & seismic analysis' },
              { icon: ShieldCheck, name: 'Anne Raghu Ram', role: 'Structural Consultant', note: 'Foundation & quality audits' },
            ].map((lead, idx) => (
              <motion.div
                key={idx}
                variants={itemFadeUp}
                className="p-5 bg-white/5 border border-white/10 rounded-sm hover:border-[#C8102E]/40 transition-colors"
              >
                <div className="w-8 h-8 rounded bg-[#C8102E]/15 text-[#C8102E] flex items-center justify-center mb-3">
                  <lead.icon size={16} />
                </div>
                <h3 className="font-serif text-sm sm:text-base text-white font-medium mb-0.5">{lead.name}</h3>
                <span className="type-label text-[10px] text-[#C8102E] uppercase tracking-wider block mb-1.5">
                  {lead.role}
                </span>
                <p className="text-[11px] text-white/50 font-light">{lead.note}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── 6. BRANDED MATERIALS ─────────────────────────── */}
      <motion.section
        {...sectionScrollProps}
        className="py-14 sm:py-20 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 overflow-hidden"
      >
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-xl mx-auto mb-8 sm:mb-12"
        >
          <motion.span variants={itemFadeUp} className="type-label text-[#C8102E] text-[10px] uppercase tracking-widest block mb-1.5">
            05. TRUSTED BRANDS
          </motion.span>
          <motion.h2
            variants={itemFadeUp}
            className="text-2xl sm:text-3xl text-[#181714]"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
          >
            Branded Material Specifications
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
        >
          {[
            { label: 'Wiring', brand: 'Finolex / Havells', note: 'Copper Wiring' },
            { label: 'CP Fittings', brand: 'Jaquar', note: 'Premium Fixtures' },
            { label: 'Switches', brand: 'Legrand / GM', note: 'Modular Safety' },
            { label: 'Elevators', brand: 'Johnson Lifts', note: '6-Passenger Auto' },
            { label: 'Joinery', brand: 'Teak Wood', note: 'Solid Teak Doors' },
            { label: 'Association', brand: 'CREDAI', note: 'Vijayawada Member' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemFadeUp}
              className="p-3.5 sm:p-4 bg-white border border-[#E8E4DC] rounded-sm text-center flex flex-col justify-between hover:border-[#C8102E]/40 transition-colors"
            >
              <span className="type-label text-[9px] text-[#C8102E] uppercase tracking-wider block mb-1">
                {item.label}
              </span>
              <h4 className="font-serif text-sm sm:text-base text-[#181714] font-medium my-0.5">{item.brand}</h4>
              <p className="text-[10px] sm:text-[11px] text-[#8A8580] font-light">{item.note}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── 7. BOTTOM CTA ───────────────────────────────── */}
      <motion.section
        {...sectionScrollProps}
        className="bg-[#181714] text-white py-14 overflow-hidden"
      >
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 text-center"
        >
          <motion.p variants={itemFadeUp} className="type-label text-[#C8102E] text-xs uppercase tracking-widest mb-2">
            YOUR NEXT HOME IN VIJAYAWADA
          </motion.p>
          <motion.h2
            variants={itemFadeUp}
            className="text-2xl sm:text-3xl md:text-4xl text-white max-w-xl mx-auto mb-4"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
          >
            Experience the Akhil Promoters Difference
          </motion.h2>
          <motion.p variants={itemFadeUp} className="text-xs sm:text-sm text-white/60 max-w-md mx-auto font-light leading-relaxed mb-6">
            Explore our signature 3 BHK communities across Kanuru, Ayodhya Nagar, and Poranki.
          </motion.p>
          <motion.div variants={itemFadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.div whileTap={mobileTap}>
              <Link
                to="/projects"
                className="w-full sm:w-auto px-8 py-3.5 min-h-[44px] flex items-center justify-center bg-[#C8102E] hover:bg-[#A50D24] text-white text-xs font-semibold uppercase tracking-widest transition-colors gap-2"
              >
                Explore Developments <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};
