import React from 'react';
import { Link } from 'react-router-dom';
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

export const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* ─── Transition divider — prevents footer from merging with section above */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8102E]/30 to-transparent" />

      <footer className="bg-[#181714] text-white pt-20 pb-10">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

          {/* ── Top section ─────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">

            {/* Brand column */}
            <div className="lg:col-span-4">
              <img
                src="/images/logo-light.svg"
                alt="Akhil Promoters"
                className="h-11 w-auto mb-6"
              />
              <p
                className="text-white/50 text-sm leading-[1.8] mb-8 max-w-xs"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
              >
                Premium residences in Vijayawada. CREDAI member. Every home built with full legal title and uncompromised material quality.
              </p>

              {/* Contact actions */}
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="type-label text-[10px] inline-flex items-center gap-2.5 px-5 py-3 border border-white/20 text-white/70 hover:border-white/50 hover:text-white transition-colors"
                >
                  <MessageSquare size={13} /> WhatsApp Us
                </a>
              </div>
            </div>

            {/* Navigation columns */}
            <div className="lg:col-span-2">
              <p className="type-label text-[9px] text-[#C8102E] mb-5">Navigate</p>
              <ul className="space-y-3">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'Projects', href: '/projects' },
                  { name: 'Buyers Guide', href: '/buyers-guide' },
                  { name: 'Support & Tools', href: '/support-services' },
                  { name: 'Branches', href: '/branches' },
                  { name: 'Contact', href: '/contact' },
                ].map((l) => (
                  <li key={l.name}>
                    <Link
                      to={l.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <p className="type-label text-[9px] text-[#C8102E] mb-5">Projects</p>
              <ul className="space-y-3">
                {Object.values(projectData).map((p) => (
                  <li key={p.id}>
                    <Link
                      to={`/projects/${p.slug}`}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <p className="type-label text-[9px] text-[#C8102E] mb-5">Company</p>
              <ul className="space-y-3">
                {[
                  { name: 'Company Profile', href: '/who-we-are/company-profile' },
                  { name: 'Vision & Mission', href: '/who-we-are/vision-mission' },
                  { name: 'Values', href: '/who-we-are/values' },
                  { name: 'Partners', href: '/who-we-are/partners' },
                  { name: 'Careers', href: '/careers' },
                ].map((l) => (
                  <li key={l.name}>
                    <Link
                      to={l.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office address */}
            <div className="lg:col-span-2">
              <p className="type-label text-[9px] text-[#C8102E] mb-5">Office</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="text-[#C8102E] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-white/50 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                    {OFFICE_ADDRESS}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={14} className="text-[#C8102E] flex-shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <a href={`tel:${OFFICE_PHONE_1}`} className="block text-sm text-white/50 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>{OFFICE_PHONE_1}</a>
                    <a href={`tel:${OFFICE_PHONE_2}`} className="block text-sm text-white/50 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>{OFFICE_PHONE_2}</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={14} className="text-[#C8102E] flex-shrink-0" />
                  <a href={`mailto:${OFFICE_EMAIL}`} className="text-sm text-white/50 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {OFFICE_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Bottom bar ──────────────────────────────── */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-white/30" style={{ fontFamily: 'Inter, sans-serif' }}>
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
      </footer>
    </>
  );
};
