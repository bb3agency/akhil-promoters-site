import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, CheckCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.72, ease: 'easeOut' },
};

export const Home = () => {
  return (
    <div className="bg-[#F7F5F0] text-[#181714]">

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#181714]">

        {/* Background — video placeholder with fallback image */}
        <div className="absolute inset-0">
          <img
            src="/images/projects/blueberry.jpg"
            alt=""
            aria-hidden
            className="w-full h-full object-cover opacity-35"
          />
          {/* Cinematic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#181714]/60 via-[#181714]/30 to-[#181714]/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#181714]/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 w-full pt-28 sm:pt-36 pb-16 sm:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
            className="max-w-[680px]"
          >
            {/* Eyebrow */}
            <p className="type-label text-[#C8102E] flex items-center gap-3 mb-6 sm:mb-8 text-[10px] sm:text-xs">
              <span className="section-rule" />
              Vijayawada · CREDAI Member
            </p>

            {/* Headline */}
            <h1
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
            </h1>

            {/* Sub-copy */}
            <p className="text-white/75 text-sm sm:text-base md:text-lg font-[300] leading-[1.7] mb-8 sm:mb-12 max-w-[480px]"
               style={{ fontFamily: 'var(--font-sans)' }}>
              Thoughtfully designed 3 BHK residences in Kanuru, Ayodhya Nagar & Poranki — where architecture meets everyday life.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                to="/projects"
                className="type-label inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C8102E] hover:bg-[#A50D24] text-white transition-colors duration-200 group text-center"
              >
                View Residences
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1.5 opacity-50">
          <div className="w-px h-8 bg-white/50" />
          <p className="type-label text-white/60 text-[9px]">Scroll</p>
        </div>
      </section>

      {/* ─── BRIEF INTRODUCTION ──────────────────────────── */}
      <section className="py-16 md:py-28 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          <motion.div {...fadeUp} className="lg:col-span-5">
            <p className="type-label text-[#C8102E] brand-rule mb-4 sm:mb-6">
              Akhil Promoters
            </p>
            <h2
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
            </h2>
            <p className="type-body mb-8">
              We design homes around how people actually live — light, space, material, and proportion taken seriously. Every Akhil Promoters project is CREDAI certified, fully documented, and built by the same architectural team throughout.
            </p>
            <Link
              to="/who-we-are/story"
              className="type-label inline-flex items-center gap-2 text-[#181714] hover:text-[#C8102E] transition-colors group"
            >
              About the company
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div {...fadeUp} className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4">
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src="/images/projects/apple.jpg"
                alt="Apple residences, Kanuru"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden mt-6 sm:mt-10 rounded-sm">
              <img
                src="/images/projects/cherry.jpg"
                alt="Cherry residences, Kanuru"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── QUALITY COMMITMENT ─────────────────────────── */}
      <section className="py-16 md:py-28 bg-[#181714] text-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            <motion.div {...fadeUp} className="lg:col-span-6 order-2 lg:order-1">
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src="/images/projects/blueberry-elevation.jpg"
                  alt="Blueberry, Ayodhya Nagar"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="lg:col-span-6 order-1 lg:order-2">
              <p className="type-label text-[#C8102E] brand-rule mb-6 sm:mb-8">Construction Standard</p>
              <h2
                className="text-white mb-6 sm:mb-8"
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                  fontWeight: 500,
                  lineHeight: 1.1,
                }}
              >
                No shortcuts.<br />No substitutions.
              </h2>
              <p className="text-white/60 text-sm leading-[1.8] mb-8 sm:mb-10" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                Seismic-resistant RCC frames, teak wood main doors, Finolex copper wiring, Jaquar fittings, and vitrified flooring — specified once and delivered without compromise.
              </p>

              <div className="space-y-3.5 sm:space-y-4">
                {[
                  'Melamine-polished teak main doors & frames',
                  'Vitrified tiles · Granite corridors · Anti-skid baths',
                  'Johnson 6-passenger automatic elevator',
                  'Generator backup — lift, motors & flat points',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-xs sm:text-sm text-white/70" style={{ fontFamily: 'var(--font-sans)' }}>
                    <CheckCircle size={16} className="text-[#C8102E] flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10">
                <Link
                  to="/who-we-are/story"
                  className="type-label inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
                >
                  Our quality standards <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SITE VISIT CTA ─────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#F0EDE6] border-t border-[#E8E4DC]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <motion.div {...fadeUp}>
            <p className="type-label text-[#C8102E] justify-center flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 text-[10px] sm:text-xs">
              <span className="section-rule" />
              Vijayawada — Kanuru, Ayodhya Nagar & Poranki
              <span className="section-rule" />
            </p>
            <h2
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
            </h2>
            <p className="text-[#8A8580] text-xs sm:text-sm leading-relaxed max-w-md mx-auto mb-8 sm:mb-10" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
              Our Vijayawada team is on hand to answer questions about any development.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="type-label inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#DDD9D1] text-[#181714] hover:border-[#181714] transition-colors text-center"
              >
                <MessageSquare size={13} /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
