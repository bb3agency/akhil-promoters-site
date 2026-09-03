import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, ArrowUp, MessageSquare } from 'lucide-react';
import {
  OFFICE_ADDRESS,
  OFFICE_EMAIL,
  OFFICE_PHONE_1,
  OFFICE_PHONE_2,
  LANDLINE_PHONE,
  WHATSAPP_NUMBER,
  projectData,
} from '../../data';
import { staggerContainer, itemFadeUp, viewportConfig, sectionScrollProps } from '../../utils/motion';

export const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* ─── Transition divider — prevents footer from merging with section above */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8102E]/30 to-transparent" />

      <motion.footer
        {...sectionScrollProps}
        className="relative bg-[#181714] text-white pt-14 sm:pt-20 pb-8 sm:pb-10 overflow-hidden"
      >
        {/* ─── Architectural Skyline Background ───────── */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-end justify-center overflow-hidden">
          <img
            src="/images/footer-skyline.png"
            alt=""
            aria-hidden="true"
            className="w-full max-w-[1800px] h-auto object-cover sm:object-contain object-bottom opacity-20 select-none"
          />
          {/* Subtle gradient blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#181714]/60 via-transparent to-[#181714]/90" />
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">

          {/* ── Top section ─────────────────────────────── */}
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pb-12 sm:pb-16 border-b border-white/10"
          >

            {/* Brand column */}
            <motion.div variants={itemFadeUp} className="sm:col-span-2 lg:col-span-4">
              <img
                src="/images/logo-light.png"
                alt="Akhil Promoters"
                className="h-10 sm:h-11 w-auto object-contain mb-5 sm:mb-6"
              />
              <p
                className="text-white/55 text-xs sm:text-sm leading-[1.8] mb-6 sm:mb-8 max-w-sm"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
              >
                Premium residences in Vijayawada. CREDAI member. Every home built with full legal title and uncompromised material quality.
              </p>

              {/* Contact actions */}
              <div>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="type-label text-[10px] inline-flex items-center gap-2.5 px-5 py-3 border border-white/20 text-white/80 hover:border-white/50 hover:text-white transition-colors"
                >
                  <MessageSquare size={13} /> WhatsApp Us
                </a>
              </div>
            </motion.div>

            {/* Navigation columns */}
            <motion.div variants={itemFadeUp} className="lg:col-span-2">
              <p className="type-label text-[9px] text-[#C8102E] mb-4 sm:mb-5">Navigate</p>
              <ul className="space-y-2.5 sm:space-y-3">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'Projects', href: '/projects' },
                  { name: 'Buyers Guide', href: '/buyers-guide' },
                  { name: 'Support & Tools', href: '/support-services' },
                  { name: 'Contact', href: '/contact' },
                ].map((l) => (
                  <li key={l.name}>
                    <Link
                      to={l.href}
                      className="text-xs sm:text-sm text-white/55 hover:text-white transition-colors block py-0.5"
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemFadeUp} className="lg:col-span-2">
              <p className="type-label text-[9px] text-[#C8102E] mb-4 sm:mb-5">Projects</p>
              <ul className="space-y-2.5 sm:space-y-3">
                {Object.values(projectData).map((p) => (
                  <li key={p.id}>
                    <Link
                      to={`/projects/${p.slug}`}
                      className="text-xs sm:text-sm text-white/55 hover:text-white transition-colors block py-0.5"
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemFadeUp} className="lg:col-span-2">
              <p className="type-label text-[9px] text-[#C8102E] mb-4 sm:mb-5">Company</p>
              <ul className="space-y-2.5 sm:space-y-3">
                {[
                  { name: 'Who We Are', href: '/who-we-are' },
                  { name: 'Our Projects', href: '/projects' },
                  { name: 'Buyers Guide', href: '/buyers-guide' },
                  { name: 'Support & Tools', href: '/support-services' },
                  { name: 'Contact Us', href: '/contact' },
                ].map((l) => (
                  <li key={l.name}>
                    <Link
                      to={l.href}
                      className="text-xs sm:text-sm text-white/55 hover:text-white transition-colors block py-0.5"
                      style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Office address */}
            <motion.div variants={itemFadeUp} className="sm:col-span-2 lg:col-span-2">
              <p className="type-label text-[9px] text-[#C8102E] mb-4 sm:mb-5">Office</p>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <MapPin size={14} className="text-[#C8102E] flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-white/55 leading-relaxed" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}>
                    {OFFICE_ADDRESS}
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone size={14} className="text-[#C8102E] flex-shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <a href={`tel:${OFFICE_PHONE_1}`} className="block text-xs sm:text-sm text-white/55 hover:text-white transition-colors" style={{ fontFamily: 'var(--font-sans)' }}>{OFFICE_PHONE_1}</a>
                    <a href={`tel:${OFFICE_PHONE_2}`} className="block text-xs sm:text-sm text-white/55 hover:text-white transition-colors" style={{ fontFamily: 'var(--font-sans)' }}>{OFFICE_PHONE_2}</a>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail size={14} className="text-[#C8102E] flex-shrink-0" />
                  <a href={`mailto:${OFFICE_EMAIL}`} className="text-xs sm:text-sm text-white/55 hover:text-white transition-colors" style={{ fontFamily: 'var(--font-sans)' }}>
                    {OFFICE_EMAIL}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Bottom bar ──────────────────────────────── */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-white/30" style={{ fontFamily: 'var(--font-sans)' }}>
              © {new Date().getFullYear()} Akhil Promoters Private Limited. CREDAI Member.
            </p>
            <button
              onClick={scrollTop}
              className="p-2 border border-white/20 text-white/40 hover:text-white hover:border-white/50 transition-colors"
              title="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </motion.footer>
    </>
  );
};
