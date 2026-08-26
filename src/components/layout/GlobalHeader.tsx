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

  /* Close on route change & lock body scroll on mobile open */
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  /* Dropdown handlers with delay to prevent flicker */
  const openDropdown = (name: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setActiveDropdown(name);
  };
  const closeDropdown = () => {
    dropdownTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const isHomePage = location.pathname === '/';
  const isTransparentDarkHeader = isHomePage && !isScrolled;
  const logoSrc = isTransparentDarkHeader ? '/images/logo-light.png' : '/images/logo.png';

  const isItemActive = (item: { name: string; href?: string; dropdown?: any[] }) => {
    if (item.href === '/') return location.pathname === '/';
    if (item.href) return location.pathname === item.href || location.pathname.startsWith(item.href + '/');
    if (item.dropdown) {
      return item.dropdown.some(sub => sub.href && (location.pathname === sub.href || location.pathname.startsWith(sub.href + '/')));
    }
    return false;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isTransparentDarkHeader
            ? 'bg-transparent'
            : 'header-glass border-b border-[#DDD9D1]/70 shadow-[0_1px_12px_rgba(0,0,0,0.06)]'
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-[64px] sm:h-[68px]' : 'h-[72px] sm:h-[80px]'}`}>

            {/* ── Logo ── */}
            {/* Side columns share a min-width so the centred nav lands on the true page centre */}
            <Link to="/" className="flex-shrink-0 mr-4 xl:min-w-[170px]">
              <img
                src={logoSrc}
                alt="Akhil Promoters"
                className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-all duration-200"
              />
            </Link>

            {/* ── Desktop Navigation ── */}
            <nav className="hidden lg:flex flex-1 items-center justify-center gap-1 xl:gap-2">
              {navigation.map((item) => {
                const active = isItemActive(item);
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => item.dropdown && openDropdown(item.name)}
                    onMouseLeave={() => item.dropdown && closeDropdown()}
                  >
                    <Link
                      to={item.href || '#'}
                      className={`type-nav flex items-center gap-1 px-3 py-2 rounded transition-colors ${
                        active
                          ? 'text-[#C8102E] font-semibold'
                          : isTransparentDarkHeader
                          ? 'text-white/90 hover:text-white'
                          : 'text-[#181714] hover:text-[#C8102E]'
                      }`}
                    >
                      {item.name}
                      {item.dropdown && (
                        <ChevronDown
                          size={11}
                          className={`transition-transform duration-200 opacity-60 ${
                            activeDropdown === item.name ? 'rotate-180 text-[#C8102E]' : ''
                          }`}
                        />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {item.dropdown && activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.16 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white border border-[#DDD9D1] shadow-xl py-2 z-50 rounded-sm"
                          onMouseEnter={() => openDropdown(item.name)}
                          onMouseLeave={closeDropdown}
                        >
                          {item.dropdown.map((sub, idx) =>
                            'divider' in sub && sub.divider ? (
                              <div key={`div-${idx}`} className="mx-4 my-1 h-px bg-[#E8E4DC]" />
                            ) : (
                              <Link
                                key={sub.name}
                                to={sub.href || '#'}
                                className={`group flex items-center justify-between px-5 py-3 text-[11px] font-[500] tracking-wide transition-colors relative ${
                                  location.pathname === sub.href
                                    ? 'text-[#C8102E] bg-[#F7F5F0]'
                                    : 'text-[#2C2926] hover:text-[#C8102E] hover:bg-[#F7F5F0]'
                                }`}
                              >
                                <span>{sub.name}</span>
                                <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-0.5 transition-all duration-200 ${
                                  location.pathname === sub.href ? 'h-full bg-[#C8102E]' : 'h-0 bg-[#C8102E] group-hover:h-full'
                                }`} />
                              </Link>
                            )
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center justify-end ml-4 xl:min-w-[170px]">
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
              className={`lg:hidden p-2.5 rounded-lg transition-colors ${
                isTransparentDarkHeader ? 'text-white hover:bg-white/10' : 'text-[#181714] hover:bg-black/5'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
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
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <img src="/images/logo-light.png" alt="Akhil Promoters" className="h-9 w-auto object-contain" />
              <button onClick={() => setMobileOpen(false)} className="p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/10" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>

            {/* Mobile nav links */}
            <div className="flex-1 px-6 py-6 space-y-1 overflow-y-auto">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href || '#'}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-lg font-serif font-medium text-white/90 hover:text-[#C8102E] transition-colors border-b border-white/5 active:bg-white/5"
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4 mb-2 space-y-1 border-l border-[#C8102E]/30 mt-2">
                      {item.dropdown.map((sub, idx) =>
                        'divider' in sub && sub.divider ? null : (
                          <Link
                            key={sub.name}
                            to={sub.href || '#'}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-xs font-medium text-white/60 hover:text-white active:text-[#C8102E] transition-colors"
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
            <div className="p-6 space-y-3 border-t border-white/10 bg-[#181714]/95">
              <button
                onClick={() => { setMobileOpen(false); setIsInquiryOpen(true); }}
                className="w-full py-3.5 bg-[#C8102E] hover:bg-[#A50D24] text-white type-label transition-colors flex items-center justify-center font-bold tracking-wider uppercase text-xs rounded-none shadow-md"
              >
                Schedule Site Visit
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 border border-white/20 text-white/90 type-label flex items-center justify-center gap-2 hover:border-white/40 hover:text-white transition-colors text-xs font-bold tracking-wider uppercase"
              >
                <MessageSquare size={15} /> WhatsApp Advisory
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
