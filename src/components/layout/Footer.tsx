import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, ArrowUp, MessageSquare } from 'lucide-react';
import {
  OFFICE_ADDRESS,
  OFFICE_EMAIL,
  OFFICE_PHONE_1,
  OFFICE_PHONE_2,
  WHATSAPP_NUMBER,
} from '../../data';
import { staggerContainer, itemFadeUp, viewportConfig, sectionScrollProps, mobileTap, mobileButtonTap } from '../../utils/motion';

export const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* ─── Transition divider — prevents footer from merging with section above */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8102E]/30 to-transparent" />

      <motion.footer
        {...sectionScrollProps}
        className="relative bg-[#2A2828] text-white pt-8 sm:pt-20 pb-6 sm:pb-10 overflow-hidden"
      >
        {/* ─── Architectural Background ───────── */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-end justify-center overflow-hidden">
          {/* Architectural Skyline Background (Desktop & Mobile Synced) */}
          <img
            src="/images/footer-skyline.png"
            alt=""
            aria-hidden="true"
            className="w-full max-w-[1800px] h-auto object-contain object-bottom opacity-20 select-none"
          />
          {/* Subtle gradient blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2A2828]/60 via-transparent to-[#2A2828]/90" />
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">

          {/* ── Top section ─────────────────────────────── */}
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-x-4 sm:gap-x-10 gap-y-6 sm:gap-y-10 lg:gap-12 pb-6 sm:pb-16 border-b border-white/10"
          >

            {/* Brand column */}
            <motion.div variants={itemFadeUp} className="col-span-2 lg:col-span-5">
              <img
                src="/images/logo-light.png"
                alt="Akhil Promoters"
                className="h-8 sm:h-11 w-auto object-contain mb-3 sm:mb-6"
              />
              <p
                className="text-white/55 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-8 max-w-sm"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
              >
                Premium residences in Vijayawada. CREDAI member. Every home built with full legal title and uncompromised material quality.
              </p>

              {/* Contact actions */}
              <div>
                <motion.a
                  whileTap={mobileTap}
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="type-label text-[10px] min-h-[40px] sm:min-h-[44px] inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 border border-white/20 text-white/80 hover:border-white/50 hover:text-white transition-colors active:bg-white/10"
                >
                  <MessageSquare size={13} /> WhatsApp Us
                </motion.a>
              </div>
            </motion.div>

            {/* Navigation column */}
            <motion.div variants={itemFadeUp} className="col-span-2 sm:col-span-1 lg:col-span-3">
              <p className="type-label text-[9px] text-[#C8102E] mb-2 sm:mb-5">Navigate</p>
              <ul className="grid grid-cols-2 sm:grid-cols-1 gap-y-0.5 sm:gap-y-0 sm:space-y-3">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'Who We Are', href: '/who-we-are' },
                  { name: 'Projects', href: '/projects' },
                  { name: 'Buyers Guide', href: '/buyers-guide' },
                  { name: 'Support & Tools', href: '/support-services' },
                  { name: 'Contact', href: '/contact' },
                ].map((l) => (
                  <li key={l.name}>
                    <Link
                      to={l.href}
                      className="text-xs sm:text-sm text-white/55 hover:text-white transition-colors block py-1 sm:py-1.5 active:text-[#C8102E] active:scale-[0.98]"
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Office address */}
            <motion.div variants={itemFadeUp} className="col-span-2 sm:col-span-1 lg:col-span-4">
              <p className="type-label text-[9px] text-[#C8102E] mb-2 sm:mb-5">Office</p>
              <div className="space-y-2.5 sm:space-y-3.5">
                <div className="flex items-start gap-2 sm:gap-2.5">
                  <MapPin size={13} className="text-[#C8102E] flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-white/55 leading-relaxed" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                    {OFFICE_ADDRESS}
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:gap-2.5">
                  <Phone size={13} className="text-[#C8102E] flex-shrink-0 mt-0.5" />
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 sm:block sm:space-y-1">
                    <a href={`tel:${OFFICE_PHONE_1}`} className="text-xs sm:text-sm text-white/55 hover:text-white transition-colors py-0.5" style={{ fontFamily: 'var(--font-sans)' }}>{OFFICE_PHONE_1}</a>
                    <span className="text-white/20 sm:hidden">/</span>
                    <a href={`tel:${OFFICE_PHONE_2}`} className="text-xs sm:text-sm text-white/55 hover:text-white transition-colors py-0.5" style={{ fontFamily: 'var(--font-sans)' }}>{OFFICE_PHONE_2}</a>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <Mail size={13} className="text-[#C8102E] flex-shrink-0" />
                  <a href={`mailto:${OFFICE_EMAIL}`} className="text-xs sm:text-sm text-white/55 hover:text-white transition-colors py-0.5" style={{ fontFamily: 'var(--font-sans)' }}>
                    {OFFICE_EMAIL}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Bottom bar ──────────────────────────────── */}
          <div className="pt-4 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
            <p className="text-[11px] text-white/30" style={{ fontFamily: 'var(--font-sans)' }}>
              © {new Date().getFullYear()} Akhil Promoters Private Limited. CREDAI Member.
            </p>
            <motion.button
              whileTap={mobileButtonTap}
              onClick={scrollTop}
              className="p-2.5 sm:p-3 min-w-[38px] min-h-[38px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center border border-white/20 text-white/40 hover:text-white hover:border-white/50 active:bg-white/10 transition-colors"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp size={15} />
            </motion.button>
          </div>
        </div>
      </motion.footer>
    </>
  );
};
