import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WHATSAPP_NUMBER } from '../../data';
import { mobileTap, mobileButtonTap, fadeInRight, staggerContainer } from '../../utils/motion';

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
      { name: 'Daffodils — Poranki', href: '/projects/daffodils' },
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

            {/* ── Spacer: mirrors the logo column so the centred nav stays on the true page centre ── */}
            <div aria-hidden="true" className="hidden lg:block ml-4 xl:min-w-[170px]" />

            {/* ── Mobile Hamburger ── */}
            <motion.button
              whileTap={mobileButtonTap}
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg transition-colors ${
                isTransparentDarkHeader ? 'text-white hover:bg-white/10' : 'text-[#181714] hover:bg-black/5'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
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
            transition={{ type: 'tween', duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#181714] text-white flex flex-col overflow-y-auto pt-safe"
          >
            {/* Mobile header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0">
              <img src="/images/logo-light.png" alt="Akhil Promoters" className="h-8 sm:h-9 w-auto object-contain" />
              <motion.button
                whileTap={mobileButtonTap}
                onClick={() => setMobileOpen(false)}
                className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </motion.button>
            </div>

            {/* Mobile nav links with Staggered Entrance */}
            <motion.div
              variants={staggerContainer(0.04, 0.05)}
              initial="hidden"
              animate="visible"
              className="flex-1 px-5 sm:px-6 py-6 space-y-1 overflow-y-auto -webkit-overflow-scrolling-touch"
            >
              {navigation.map((item, idx) => (
                <motion.div
                  key={item.name}
                  variants={fadeInRight(0.28, idx * 0.035, 16)}
                >
                  <Link
                    to={item.href || '#'}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center min-h-[48px] py-3 text-lg font-serif font-medium text-white/90 hover:text-[#C8102E] transition-colors border-b border-white/5 active:bg-white/5 active:scale-[0.98]"
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + idx * 0.03, duration: 0.25 }}
                      className="pl-3.5 mb-2 space-y-1 border-l-2 border-[#C8102E]/40 mt-2"
                    >
                      {item.dropdown.map((sub) =>
                        'divider' in sub && sub.divider ? null : (
                          <Link
                            key={sub.name}
                            to={sub.href || '#'}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center min-h-[44px] py-2 px-2 text-xs font-medium text-white/70 hover:text-white active:text-[#C8102E] active:bg-white/5 rounded transition-colors active:scale-[0.97]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]/60 mr-2 flex-shrink-0" />
                            <span>{sub.name}</span>
                          </Link>
                        )
                      )}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile CTAs with tactile tap & entry animation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              className="p-5 sm:p-6 space-y-3 border-t border-white/10 bg-[#181714]/95 shrink-0 pb-safe"
            >
              <motion.a
                whileTap={mobileTap}
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="w-full min-h-[48px] py-3.5 px-4 border border-white/20 text-white/90 type-label flex items-center justify-center gap-2 hover:border-white/40 hover:text-white transition-colors text-xs font-bold tracking-wider uppercase rounded-sm active:bg-white/10"
              >
                <MessageSquare size={16} /> WhatsApp Advisory
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};
