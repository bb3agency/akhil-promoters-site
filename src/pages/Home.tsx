import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, CheckCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data';
import {
  staggerContainer,
  fadeInUp,
  itemFadeUp,
  viewportConfig,
  sectionScrollProps,
} from '../utils/motion';

export const Home = () => {
  return (
    <div className="bg-[#F7F5F0] text-[#181714]">

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#181714]">

        {/* Background — video with fallback poster */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/projects/blueberry.jpg"
            className="w-full h-full object-cover opacity-60"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          {/* Cinematic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#181714]/40 via-[#181714]/20 to-[#181714]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#181714]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 w-full pt-28 sm:pt-36 pb-16 sm:pb-24">
          <motion.div
            variants={staggerContainer(0.14, 0.1)}
            initial="hidden"
            animate="visible"
            className="max-w-[680px]"
          >
            {/* Eyebrow */}
            <motion.p
              variants={itemFadeUp}
              className="type-label text-[#C8102E] flex items-center gap-3 mb-6 sm:mb-8 text-[10px] sm:text-xs"
            >
              <span className="section-rule" />
              Vijayawada · CREDAI Member
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={itemFadeUp}
              className="text-overlay mb-6 sm:mb-8 text-white"
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 'clamp(2.3rem, 7.5vw, 5.5rem)',
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              Homes built<br />
              with intent.<br />
              <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Made to last.</em>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              variants={itemFadeUp}
              className="text-white/75 text-sm sm:text-base md:text-lg font-[300] leading-[1.7] mb-8 sm:mb-12 max-w-[480px]"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Thoughtfully designed 3 BHK residences in Kanuru, Ayodhya Nagar & Poranki — where architecture meets everyday life.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemFadeUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <Link
                to="/projects"
                className="type-label inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C8102E] hover:bg-[#A50D24] text-white transition-colors duration-200 group text-center"
              >
                View Residences
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1.5"
        >
          <div className="w-px h-8 bg-white/50" />
          <p className="type-label text-white/60 text-[9px]">Scroll</p>
        </motion.div>
      </section>

      {/* ─── BRIEF INTRODUCTION ──────────────────────────── */}
      <motion.section
        {...sectionScrollProps}
        className="py-16 md:py-28 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-5"
          >
            <motion.p variants={itemFadeUp} className="type-label text-[#C8102E] brand-rule mb-4 sm:mb-6">
              Akhil Promoters
            </motion.p>
            <motion.h2
              variants={itemFadeUp}
              className="mb-6 text-[#181714]"
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
              }}
            >
              Two decades of<br />considered craft.
            </motion.h2>
            <motion.p variants={itemFadeUp} className="type-body mb-8">
              We design homes around how people actually live — light, space, material, and proportion taken seriously. Every Akhil Promoters project is CREDAI certified, fully documented, and built by the same architectural team throughout.
            </motion.p>
            <motion.div variants={itemFadeUp}>
              <Link
                to="/who-we-are/story"
                className="type-label inline-flex items-center gap-2 text-[#181714] hover:text-[#C8102E] transition-colors group"
              >
                About the company
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4"
          >
            <motion.div variants={itemFadeUp} className="aspect-[3/4] overflow-hidden rounded-sm group">
              <img
                src="/images/projects/apple.jpg"
                alt="Apple residences, Kanuru"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div variants={itemFadeUp} className="aspect-[3/4] overflow-hidden mt-6 sm:mt-10 rounded-sm group">
              <img
                src="/images/projects/cherry.jpg"
                alt="Cherry residences, Kanuru"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ─── 3D ARCHITECTURAL WALKTHROUGH SECTION ─────────── */}
      <motion.section
        {...sectionScrollProps}
        className="py-16 md:py-24 bg-[#100F0D] text-white overflow-hidden border-t border-white/5"
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
          >
            <motion.p
              variants={itemFadeUp}
              className="type-label text-[#C8102E] flex items-center justify-center gap-2 mb-3 sm:mb-4 text-[10px] sm:text-xs"
            >
              <span className="section-rule" />
              3D Spatial Perspective &amp; Flow
              <span className="section-rule" />
            </motion.p>
            <motion.h2
              variants={itemFadeUp}
              className="text-white text-3xl sm:text-4xl md:text-5xl font-serif mb-4"
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 500,
                lineHeight: 1.15,
              }}
            >
              Every square foot planned with purpose.
            </motion.h2>
            <motion.p
              variants={itemFadeUp}
              className="text-white/60 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Watch our architectural floor plans transition from paper precision into three-dimensional living spaces — engineered with 100% Vaastu orientation, cross ventilation, and generous room proportions.
            </motion.p>
          </motion.div>

          {/* Cinematic Video Player Showcase */}
          <motion.div
            variants={fadeInUp(0.7, 0.15, 30)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black aspect-video max-w-5xl mx-auto group"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/floorplan-3d-walkthrough.mp4" type="video/mp4" />
            </video>

            {/* Subtle cinematic gradient vignette along the edges */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/20" />

            {/* Floating details overlay */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/15 text-white text-[10px] sm:text-xs tracking-wider uppercase font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                3D Perspective · 100% Vaastu
              </div>
              <div className="hidden sm:flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/15 text-white/80 text-[10px] sm:text-xs font-light">
                3 BHK Architectural Layout Visualization
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ─── QUALITY COMMITMENT ─────────────────────────── */}
      <motion.section
        {...sectionScrollProps}
        className="py-16 md:py-28 bg-[#181714] text-white overflow-hidden"
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            <motion.div
              variants={fadeInUp(0.7, 0, 30)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="lg:col-span-6 order-2 lg:order-1"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm group">
                <img
                  src="/images/projects/blueberry-elevation.jpg"
                  alt="Blueberry, Ayodhya Nagar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="lg:col-span-6 order-1 lg:order-2"
            >
              <motion.p variants={itemFadeUp} className="type-label text-[#C8102E] brand-rule mb-6 sm:mb-8">
                Construction Standard
              </motion.p>
              <motion.h2
                variants={itemFadeUp}
                className="text-white mb-6 sm:mb-8"
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                  fontWeight: 500,
                  lineHeight: 1.1,
                }}
              >
                No shortcuts.<br />No substitutions.
              </motion.h2>
              <motion.p
                variants={itemFadeUp}
                className="text-white/60 text-sm leading-[1.8] mb-8 sm:mb-10"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
              >
                Seismic-resistant RCC frames, teak wood main doors, Finolex copper wiring, Jaquar fittings, and vitrified flooring — specified once and delivered without compromise.
              </motion.p>

              <motion.div variants={staggerContainer(0.08)} className="space-y-3.5 sm:space-y-4">
                {[
                  'Melamine-polished teak main doors & frames',
                  'Vitrified tiles · Granite corridors · Anti-skid baths',
                  'Johnson 6-passenger automatic elevator',
                  'Generator backup — lift, motors & flat points',
                ].map((item) => (
                  <motion.div
                    key={item}
                    variants={itemFadeUp}
                    className="flex items-start gap-3 text-xs sm:text-sm text-white/70"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <CheckCircle size={16} className="text-[#C8102E] flex-shrink-0 mt-0.5" />
                    {item}
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemFadeUp} className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10">
                <Link
                  to="/who-we-are/story"
                  className="type-label inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
                >
                  Our quality standards <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ─── SITE VISIT CTA ─────────────────────────────── */}
      <motion.section
        {...sectionScrollProps}
        className="py-16 md:py-24 bg-[#F0EDE6] border-t border-[#E8E4DC] overflow-hidden"
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.p
              variants={itemFadeUp}
              className="type-label text-[#C8102E] justify-center flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 text-[10px] sm:text-xs"
            >
              <span className="section-rule" />
              Vijayawada — Kanuru, Ayodhya Nagar & Poranki
              <span className="section-rule" />
            </motion.p>
            <motion.h2
              variants={itemFadeUp}
              className="text-[#181714] mb-4 sm:mb-6 mx-auto"
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                fontWeight: 500,
                lineHeight: 1.1,
                maxWidth: '560px',
              }}
            >
              Talk to our advisory team.
            </motion.h2>
            <motion.p
              variants={itemFadeUp}
              className="text-[#8A8580] text-xs sm:text-sm leading-relaxed max-w-md mx-auto mb-8 sm:mb-10"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
            >
              Our Vijayawada team is on hand to answer questions about any development.
            </motion.p>
            <motion.div
              variants={itemFadeUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none"
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="type-label inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#DDD9D1] text-[#181714] hover:border-[#181714] transition-colors text-center"
              >
                <MessageSquare size={13} /> WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

