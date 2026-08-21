import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WHATSAPP_NUMBER } from '../../data';
import { InquiryModal } from '../ui/InquiryModal';

/* ─── Navigation Data ─────────────────────────── */
const navigation = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Projects',
    href: '/projects',
    dropdown: [
      { name: 'Blueberry — Ayodhya Nagar', href: '/projects/blueberry' },
      { name: 'Apple — Kanuru', href: '/projects/apple' },
      { name: 'Cherry — Kanuru', href: '/projects/cherry' },
      { name: 'Akhil Signature', href: '/projects/akhil-signature' },
      { name: 'Akhil Heights', href: '/projects/akhil-heights' },
      { divider: true },
      { name: 'All Developments', href: '/projects' },
    ],
  },
  {
    name: 'Buyers Guide',
    href: '/buyers-guide',
  },
  {
    name: 'Support & Tools',
    href: '/support-services',
    dropdown: [
      { name: 'EMI Calculator', href: '/support-services#emi' },
      { name: 'Area Unit Converter', href: '/support-services#area' },
      { name: 'NRI Currency Converter', href: '/support-services#currency' },
    ],
  },
  {
    name: 'Who We Are',
    href: '/who-we-are',
    dropdown: [
      { name: 'Company Profile', href: '/who-we-are/company-profile' },
      { name: 'Vision & Mission', href: '/who-we-are/vision-mission' },
      { name: 'Values', href: '/who-we-are/values' },
      { name: 'Partners', href: '/who-we-are/partners' },
    ],
  },
  {
    name: 'Branches',
    href: '/branches',
  },
  {
    name: 'Careers',
    href: '/careers',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

/* ─── Dropdown Item Type ─────────────────────── */
type NavItem = {
  name: string;
  href?: string;
  dropdown?: ({ name: string; href: string; divider?: undefined } | { divider: true; name?: undefined; href?: undefined })[];
};

/* ─── Component ──────────────────────────────── */
export const GlobalHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close on route change */
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  /* Dropdown handlers with delay to prevent flicker */
  const openDropdown = (name: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setActiveDropdown(name);
  };
  const closeDropdown = () => {
    dropdownTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const isLight = !isScrolled;
  const logoSrc = isScrolled ? '/images/logo.svg' : '/images/logo-light.svg';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'header-glass border-b border-[#DDD9D1]/70 shadow-[0_1px_12px_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-[68px]' : 'h-[80px]'}`}>

            {/* ── Logo ── */}
            <Link to="/" className="flex-shrink-0 mr-10 lg:mr-16">
              <img
                src={logoSrc}
                alt="Akhil Promoters"
                className="h-[42px] w-auto object-contain"
              />
            </Link>

            {/* ── Desktop Navigation ── */}
            <nav className="hidden lg:flex flex-1 items-center gap-1 xl:gap-2">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && openDropdown(item.name)}
                  onMouseLeave={() => item.dropdown && closeDropdown()}
                >
                  <Link
                    to={item.href || '#'}
                    className={`type-nav flex items-center gap-1 px-3 py-2 rounded transition-colors ${
                      location.pathname === item.href
                        ? 'text-[#C8102E]'
                        : isLight
                          ? 'text-white/90 hover:text-white'
                          : 'text-[#2C2926] hover:text-[#C8102E]'
                    }`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown
                        size={12}
                        className={`flex-shrink-0 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        className="absolute top-full left-0 mt-1 min-w-[220px] bg-white border border-[#E8E4DC] shadow-[0_8px_32px_rgba(0,0,0,0.10)] z-50 overflow-hidden"
                        onMouseEnter={() => {
                          if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
                          setActiveDropdown(item.name);
                        }}
                        onMouseLeave={closeDropdown}
                      >
                        {item.dropdown.map((sub, idx) =>
                          'divider' in sub && sub.divider ? (
                            <div key={`div-${idx}`} className="mx-4 my-1 h-px bg-[#E8E4DC]" />
                          ) : (
                            <Link
                              key={sub.name}
                              to={sub.href || '#'}
                              className="group flex items-center justify-between px-5 py-3 text-[11px] font-[500] tracking-wide text-[#2C2926] hover:text-[#C8102E] hover:bg-[#F7F5F0] transition-colors relative"
                            >
                              <span>{sub.name}</span>
                              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 bg-[#C8102E] group-hover:h-full transition-all duration-200" />
                            </Link>
                          )
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center ml-4">
              <button
                onClick={() => setIsInquiryOpen(true)}
                className="type-label px-5 py-[10px] bg-[#C8102E] hover:bg-[#A50D24] text-white transition-colors duration-200"
              >
                Schedule Visit
              </button>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 transition-colors ${isLight ? 'text-white' : 'text-[#181714]'}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ─────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.28 }}
            className="fixed inset-0 z-50 bg-[#181714] text-white flex flex-col overflow-y-auto"
          >
            {/* Mobile header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <img src="/images/logo-light.svg" alt="Akhil Promoters" className="h-10 w-auto" />
              <button onClick={() => setMobileOpen(false)} className="p-2 text-white/60 hover:text-white">
                <X size={22} />
              </button>
            </div>

            {/* Mobile nav links */}
            <div className="flex-1 px-6 py-8 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href || '#'}
                    className="block py-3 text-xl font-[Cormorant_Garamond,Georgia,serif] font-[500] text-white/90 hover:text-[#C8102E] transition-colors border-b border-white/5"
                    style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4 mb-2 space-y-1 border-l border-[#C8102E]/30 mt-1">
                      {item.dropdown.map((sub, idx) =>
                        'divider' in sub && sub.divider ? null : (
                          <Link
                            key={sub.name}
                            to={sub.href || '#'}
                            className="block py-1.5 text-sm text-white/50 hover:text-white/90 transition-colors"
                          >
                            {sub.name}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile CTAs */}
            <div className="px-6 pb-8 space-y-3 border-t border-white/10 pt-6">
              <button
                onClick={() => { setMobileOpen(false); setIsInquiryOpen(true); }}
                className="w-full py-4 bg-[#C8102E] hover:bg-[#A50D24] text-white type-label transition-colors"
              >
                Schedule Site Visit
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 border border-white/20 text-white/80 type-label flex items-center justify-center gap-2 hover:border-white/40 hover:text-white transition-colors"
              >
                <MessageSquare size={14} /> WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Inquiry Modal ── */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        modalType="visit"
      />
    </>
  );
};
