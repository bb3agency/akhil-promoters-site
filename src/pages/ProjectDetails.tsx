import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronRight,
  ChevronDown,
  Download,
  Phone,
  MessageSquare,
  Maximize2,
  X,
  CheckCircle2
} from 'lucide-react';
import { projectData, WHATSAPP_NUMBER, OFFICE_PHONE_1 } from '../data';
import { InquiryModal } from '../components/ui/InquiryModal';

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview' },
  { id: 'location', label: 'Location' },
  { id: 'plans', label: 'Plans' },
  { id: 'specification', label: 'Specifications' },
];

export const ProjectDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectData[slug] : null;

  // Navigation state
  const [activeSection, setActiveSection] = useState<string>('overview');

  // Location accordion state
  const [openConnectivityIndex, setOpenConnectivityIndex] = useState<number>(0);

  // Plans & Layouts state
  const [activePlanTab, setActivePlanTab] = useState<'floor' | 'master' | 'isometric'>('floor');
  const [selectedFloorPlanIndex, setSelectedFloorPlanIndex] = useState<number>(0);

  // Specifications state
  const [selectedSpecKey, setSelectedSpecKey] = useState<string>('Structure');

  // Lightbox modal state
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string } | null>(null);

  // Inquiry modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    countryCode: '+91',
    phone: '',
    email: '',
    configuration: '',
    message: '',
  });

  const isScrollingRef = useRef(false);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;
      const scrollPos = window.scrollY + 160;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      isScrollingRef.current = true;
      const topOffset = 126; // Header (68px) + subnav (~58px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 700);
    }
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setInquiryForm({
        name: '',
        countryCode: '+91',
        phone: '',
        email: '',
        configuration: '',
        message: '',
      });
    }, 3500);
  };

  // Specs keys
  const specKeys = Object.keys(project.specifications);

  return (
    <div className="relative w-full bg-white text-[#333] selection:bg-[#ef493d] selection:text-white">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO BANNER SECTION (#project-detail-banner)
      ───────────────────────────────────────────────────────────── */}
      <section
        id="project-detail-banner"
        data-section="project-detail-banner"
        className="relative w-full bg-[#2a2828] h-[100svh] min-h-[560px] lg:h-[56.25vw] lg:min-h-0 overflow-hidden"
      >
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={project.heroImage}
            alt={project.name}
            className="w-full h-full object-cover object-center select-none brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent from-[20%] via-[55%] to-black to-[100%]" />
        </div>

        {/* Hero Content Container */}
        <div className="absolute inset-x-0 bottom-0 z-[5] px-5 md:px-12 lg:px-[9.323vw] pb-[40px] sm:pb-[56px] lg:pb-[2.5vw]">
          <div className="flex flex-col items-start gap-[18px] sm:gap-[22px] lg:gap-[1.562vw] w-full">
            <div className="flex flex-col gap-[8px] sm:gap-[10px] lg:gap-[0.521vw]">
              <h1
                className="capitalize text-white leading-[1.08] tracking-[0.03em] text-[38px] xs:text-[44px] sm:text-[54px] md:text-[64px] lg:text-[4.167vw]"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
              >
                {project.name}
              </h1>
              <p
                className="capitalize text-white/90 leading-[1.2] tracking-[0.03em] text-[16px] sm:text-[20px] md:text-[24px] lg:text-[1.562vw] font-sans font-normal"
              >
                {project.location}
              </p>
            </div>

            {/* Divider Rule */}
            <div className="h-px w-full bg-white/55 lg:w-[81.30vw]" aria-hidden="true" />

            {/* Breadcrumb Navigation & Hero Actions */}
            <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <nav className="flex items-center gap-[10px] sm:gap-[14px] lg:gap-[0.938vw] text-white" aria-label="Breadcrumb">
                <Link
                  to="/"
                  className="font-medium text-[13px] sm:text-[15px] lg:text-[1.042vw] hover:text-[#ef493d] transition-colors"
                >
                  Home
                </Link>
                <ChevronRight className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] lg:w-[0.781vw] lg:h-[0.781vw] opacity-80" />
                <Link
                  to="/projects"
                  className="font-medium text-[13px] sm:text-[15px] lg:text-[1.042vw] hover:text-[#ef493d] transition-colors"
                >
                  Projects
                </Link>
                <ChevronRight className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] lg:w-[0.781vw] lg:h-[0.781vw] opacity-80" />
                <span className="font-medium text-[13px] sm:text-[15px] lg:text-[1.042vw] text-white">
                  {project.name}
                </span>
              </nav>

              {/* Hero Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => scrollToSection('inquire')}
                  className="px-5 py-2.5 sm:px-6 sm:py-3 bg-[#ef493d] hover:bg-[#d83a2f] text-white text-[13px] sm:text-[14px] lg:text-[0.938vw] font-medium transition-colors"
                >
                  Enquire Now
                </button>
                {project.brochureUrl ? (
                  <a
                    href={project.brochureUrl}
                    download={`Akhil-Promoters-${project.name}-Brochure.pdf`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-[13px] sm:text-[14px] lg:text-[0.938vw] font-medium transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Brochure</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-[13px] sm:text-[14px] lg:text-[0.938vw] font-medium transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Brochure</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. STICKY SUB-NAV (Flush against Header with 0px gap!)
      ───────────────────────────────────────────────────────────── */}
      <nav
        aria-label="Project sections"
        className="sticky top-[64px] sm:top-[68px] z-30 w-full bg-[#f5f1eb] border-b border-black/10 transition-[opacity,transform] duration-300 shadow-sm"
      >
        <div className="flex items-stretch gap-[22px] md:gap-[34px] lg:gap-[2.4vw] overflow-x-auto px-5 md:px-10 lg:px-[8.333vw] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                aria-current={isActive ? 'true' : 'false'}
                className={`relative shrink-0 whitespace-nowrap font-bold uppercase tracking-[0.12em] transition-colors duration-300 text-[11px] md:text-[12px] lg:text-[0.833vw] py-[18px] md:py-[20px] lg:py-[1.25vw] cursor-pointer ${
                  isActive ? 'text-[#ef493d]' : 'text-[#6d6d6d] hover:text-[#2a2828]'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 bottom-0 h-[2px] bg-[#ef493d] transition-transform duration-300 ease-out ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </nav>

      {/* ─────────────────────────────────────────────────────────────
          3. OVERVIEW SECTION (#overview) [Light]
      ───────────────────────────────────────────────────────────── */}
      <section
        id="overview"
        data-section="project-overview"
        className="relative w-full bg-white pt-[30px] pb-[70px] lg:pt-[4.688vw] lg:pb-[4.688vw]"
      >
        {/* Left vertical accent */}
        <div
          className="flex lg:absolute left-[12px] top-[30px] lg:left-[4.167vw] lg:top-[4.688vw] flex-col items-center gap-[8px] md:gap-[12px] lg:gap-[1.094vw] w-auto lg:w-[2.813vw] z-[5] max-lg:static max-lg:!w-full max-lg:flex-row max-lg:!justify-center max-lg:items-center max-lg:!gap-[8px] max-lg:mt-[15px] max-lg:mb-[18px]"
          aria-hidden="true"
        >
          <span className="block w-px h-[28px] md:h-[36px] lg:h-[3.125vw] bg-[#ef493d] max-lg:!w-[28px] max-lg:!h-px" />
          <span
            className="font-medium capitalize whitespace-nowrap text-[#ef493d] text-[12px] md:text-[14px] lg:text-[1.25vw] max-lg:[writing-mode:horizontal-tb] lg:[writing-mode:vertical-rl] lg:rotate-180"
          >
            A Legacy of Joy
          </span>
        </div>

        <div className="px-5 md:px-12 lg:px-[9.375vw]">
          <h2
            className="capitalize text-[#333] leading-[1.08] tracking-[0.022em] text-center text-[34px] xs:text-[38px] sm:text-[48px] md:text-[64px] lg:text-[5vw]"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
          >
            A Legacy Built on Living
          </h2>

          <div className="mt-[40px] lg:mt-[3.646vw] grid grid-cols-1 lg:grid-cols-[38.229vw_1fr] gap-[36px] lg:gap-[6.771vw] items-start">
            {/* Left architectural photo */}
            <div className="relative w-full aspect-[734/701] lg:h-[36.510vw] lg:w-[38.229vw] overflow-hidden rounded-[12px] shadow-sm bg-[#f5f1eb]">
              <img
                src={project.exteriorImage}
                alt={`${project.name} overview`}
                className="w-full h-full object-cover object-center select-none"
              />
            </div>

            {/* Right text & metrics */}
            <div className="flex flex-col gap-[40px] lg:gap-[5.521vw] lg:pt-[2.5vw]">
              <p
                className="text-[#6d6d6d] text-justify text-[15px] leading-[26px] sm:text-[16px] sm:leading-[28px] lg:text-[1.042vw] lg:leading-[1.7vw] lg:max-w-[36vw]"
              >
                {project.overview}
              </p>

              {/* 6-metric stat grid with subtle dividers */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-[36px] sm:gap-y-[40px] lg:gap-y-[2.865vw]">
                {project.metrics.map((stat, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col gap-[6px] lg:gap-[0.365vw] px-[14px] sm:px-[18px] lg:px-[1.25vw] ${
                      idx % 3 !== 2 ? 'border-r border-[#555]/25' : ''
                    } ${idx % 2 !== 1 ? 'max-sm:border-r max-sm:border-[#555]/25' : 'max-sm:border-r-0'}`}
                  >
                    <span
                      className="text-[#555] tracking-[0.03em] text-[32px] sm:text-[40px] md:text-[46px] lg:text-[2.865vw] leading-[1.05]"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-[#555] text-[14px] leading-[20px] sm:text-[16px] sm:leading-[24px] lg:text-[1.042vw] lg:leading-[1.458vw] font-normal">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. LOCATION & CONNECTIVITY SECTION (#location) [Dark #2a2828]
      ───────────────────────────────────────────────────────────── */}
      <section
        id="location"
        data-section="project-connectivity"
        className="relative w-full bg-[#2a2828] pt-[30px] pb-[80px] lg:pt-[4.688vw] lg:pb-[4.688vw] text-white"
      >
        {/* Left vertical accent */}
        <div
          className="flex lg:absolute left-[12px] top-[30px] lg:left-[4.167vw] lg:top-[4.688vw] flex-col items-center gap-[8px] md:gap-[12px] lg:gap-[1.094vw] w-auto lg:w-[2.813vw] z-[5] max-lg:static max-lg:!w-full max-lg:flex-row max-lg:!justify-center max-lg:items-center max-lg:!gap-[8px] max-lg:mt-[15px] max-lg:mb-[18px]"
          aria-hidden="true"
        >
          <span className="block w-px h-[28px] md:h-[36px] lg:h-[3.125vw] bg-white/70 max-lg:!w-[28px] max-lg:!h-px" />
          <span
            className="font-medium capitalize whitespace-nowrap text-white text-[12px] md:text-[14px] lg:text-[1.25vw] max-lg:[writing-mode:horizontal-tb] lg:[writing-mode:vertical-rl] lg:rotate-180"
          >
            The Pulse Of Connectivity
          </span>
        </div>

        <div className="px-5 md:px-12 lg:px-[9.531vw]">
          <h2
            className="capitalize text-white leading-[1.08] tracking-[0.022em] text-center text-[34px] xs:text-[38px] sm:text-[48px] md:text-[64px] lg:text-[5vw]"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
          >
            Seamlessly Connected
          </h2>

          <div className="mt-[40px] lg:mt-[3.385vw] grid grid-cols-1 lg:grid-cols-[35.696vw_44.219vw] gap-[24px] lg:gap-[3.438vw] items-start">
            {/* Accordion List */}
            <div className="relative w-full rounded-[12px] border border-white/15 px-[24px] py-[28px] sm:px-[32px] sm:py-[36px] lg:px-[2.5vw] lg:py-[2.292vw] bg-[#222121]">
              <ul className="flex flex-col">
                {project.connectivity.map((categoryGroup, catIdx) => {
                  const isOpen = openConnectivityIndex === catIdx;
                  return (
                    <li key={catIdx} className={catIdx < project.connectivity.length - 1 ? 'border-b border-white/15' : ''}>
                      <button
                        type="button"
                        onClick={() => setOpenConnectivityIndex(isOpen ? -1 : catIdx)}
                        aria-expanded={isOpen}
                        className="w-full flex items-start justify-between gap-[16px] py-[18px] sm:py-[22px] lg:py-[1.354vw] text-left cursor-pointer group"
                      >
                        <span
                          className="capitalize text-white text-[20px] sm:text-[22px] lg:text-[1.354vw] leading-[1.2] transition-colors group-hover:text-[#ef493d]"
                          style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                        >
                          {categoryGroup.category}
                        </span>
                        <ChevronDown
                          className={`shrink-0 mt-[6px] lg:mt-[0.365vw] w-[16px] h-[16px] lg:w-[0.938vw] lg:h-[0.938vw] text-white transition-transform duration-300 ${
                            isOpen ? 'rotate-180 text-[#ef493d]' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="overflow-hidden"
                          >
                            <ul className="list-disc pl-[26px] lg:pl-[1.667vw] pb-[18px] lg:pb-[1.094vw] text-white/85 space-y-1">
                              {categoryGroup.items.map((item, itemIdx) => (
                                <li
                                  key={itemIdx}
                                  className="capitalize text-[14px] sm:text-[16px] lg:text-[0.938vw] leading-[1.78] lg:leading-[1.667vw]"
                                >
                                  <span className="text-white font-medium">{item.name}</span>
                                  <span className="text-[#ef493d] ml-2 font-semibold">({item.time})</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right Location Map card */}
            <div className="relative w-full aspect-[849/635] lg:h-[33.073vw] lg:w-[44.219vw] rounded-[12px] overflow-hidden bg-white border border-[#3333331a] shadow-lg">
              {project.locationMapImage ? (
                <div
                  onClick={() => setLightboxImage({ src: project.locationMapImage!, caption: `${project.name} Location Map` })}
                  className="w-full h-full cursor-zoom-in relative group"
                >
                  <img
                    src={project.locationMapImage}
                    alt={`${project.name} location map`}
                    className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors flex items-end p-4">
                    <span className="px-3 py-1.5 bg-white/90 text-black text-xs font-semibold rounded-md shadow flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5" /> Click to enlarge map
                    </span>
                  </div>
                </div>
              ) : (
                <iframe
                  title={`${project.name} location map`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    `${project.name}, ${project.locationDetails}`
                  )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full border-0"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. PLANS & LAYOUTS SECTION (#plans) [Light]
      ───────────────────────────────────────────────────────────── */}
      <section
        id="plans"
        data-section="project-floor-plans"
        className="relative w-full bg-[#faf9f7] pt-[30px] pb-[80px] lg:pt-[4.688vw] lg:pb-[4.688vw] overflow-hidden"
      >
        {/* Left vertical accent */}
        <div
          className="flex lg:absolute left-[12px] top-[30px] lg:left-[4.167vw] lg:top-[4.688vw] flex-col items-center gap-[8px] md:gap-[12px] lg:gap-[1.094vw] w-auto lg:w-[2.813vw] z-[5] max-lg:static max-lg:!w-full max-lg:flex-row max-lg:!justify-center max-lg:items-center max-lg:!gap-[8px] max-lg:mt-[15px] max-lg:mb-[18px]"
          aria-hidden="true"
        >
          <span className="block w-px h-[28px] md:h-[36px] lg:h-[3.125vw] bg-[#ef493d] max-lg:!w-[28px] max-lg:!h-px" />
          <span
            className="font-medium capitalize whitespace-nowrap text-[#ef493d] text-[12px] md:text-[14px] lg:text-[1.25vw] max-lg:[writing-mode:horizontal-tb] lg:[writing-mode:vertical-rl] lg:rotate-180"
          >
            Spaces Designed Around You
          </span>
        </div>

        <div className="px-5 md:px-12 lg:px-[9.375vw]">
          <h2
            className="capitalize text-[#333] leading-[1.08] tracking-[0.022em] text-center text-[34px] xs:text-[38px] sm:text-[48px] md:text-[64px] lg:text-[5vw]"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
          >
            Plans &amp; Layouts
          </h2>
          <p
            className="mx-auto mt-[14px] lg:mt-[0.729vw] max-w-[760px] lg:max-w-[55.469vw] text-center text-[#555] text-[14px] leading-[24px] sm:text-[16px] sm:leading-[28px] lg:text-[0.938vw] lg:leading-[1.563vw]"
          >
            Explore the architectural floor plans, residential unit measurements, and layout designs of {project.name}.
          </p>

          {/* Plan Type Tabs */}
          <div className="mt-[28px] lg:mt-[2.865vw] flex flex-wrap items-center justify-center gap-[12px] sm:gap-[16px] lg:gap-[1.094vw]" role="tablist">
            <button
              type="button"
              role="tab"
              onClick={() => setActivePlanTab('floor')}
              className={`inline-flex items-center justify-center transition-colors duration-300 h-[44px] sm:h-[50px] lg:h-[2.76vw] px-[18px] sm:px-[22px] lg:px-[1.354vw] min-w-[120px] sm:min-w-[140px] lg:min-w-[8.594vw] text-[14px] sm:text-[16px] lg:text-[0.938vw] cursor-pointer ${
                activePlanTab === 'floor'
                  ? 'bg-[#333] text-white font-semibold'
                  : 'bg-transparent text-[#333] border-[0.7px] border-[#333] hover:bg-[#333]/5 font-normal'
              }`}
            >
              Floor Plans
            </button>
            <button
              type="button"
              role="tab"
              onClick={() => setActivePlanTab('master')}
              className={`inline-flex items-center justify-center transition-colors duration-300 h-[44px] sm:h-[50px] lg:h-[2.76vw] px-[18px] sm:px-[22px] lg:px-[1.354vw] min-w-[120px] sm:min-w-[140px] lg:min-w-[8.594vw] text-[14px] sm:text-[16px] lg:text-[0.938vw] cursor-pointer ${
                activePlanTab === 'master'
                  ? 'bg-[#333] text-white font-semibold'
                  : 'bg-transparent text-[#333] border-[0.7px] border-[#333] hover:bg-[#333]/5 font-normal'
              }`}
            >
              Site &amp; Elevation
            </button>
            {project.isometricImage && (
              <button
                type="button"
                role="tab"
                onClick={() => setActivePlanTab('isometric')}
                className={`inline-flex items-center justify-center transition-colors duration-300 h-[44px] sm:h-[50px] lg:h-[2.76vw] px-[18px] sm:px-[22px] lg:px-[1.354vw] min-w-[120px] sm:min-w-[140px] lg:min-w-[8.594vw] text-[14px] sm:text-[16px] lg:text-[0.938vw] cursor-pointer ${
                  activePlanTab === 'isometric'
                    ? 'bg-[#333] text-white font-semibold'
                    : 'bg-transparent text-[#333] border-[0.7px] border-[#333] hover:bg-[#333]/5 font-normal'
                }`}
              >
                3D Isometric View
              </button>
            )}
          </div>
        </div>

        {/* Plan Display View */}
        <div className="relative mt-[36px] lg:mt-[2.969vw] w-full px-5 md:px-12 lg:px-[9.375vw]">
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">
            {/* Left Plan Preview Card */}
            <div className="w-full lg:w-[46vw] max-w-[785px] mx-auto">
              <div className="relative w-full aspect-[785/620] rounded-[12px] bg-[#f2f2f2] border border-[rgba(51,51,51,0.1)] overflow-hidden p-[16px] sm:p-[24px] lg:p-[1.927vw] flex flex-col justify-between shadow-sm">
                {/* Plan Variation Buttons */}
                {activePlanTab === 'floor' && project.floorPlans.length > 1 && (
                  <div className="flex flex-wrap items-center gap-[10px] sm:gap-[14px] lg:gap-[0.833vw] mb-3">
                    {project.floorPlans.map((fp, fpIdx) => (
                      <button
                        key={fpIdx}
                        type="button"
                        onClick={() => setSelectedFloorPlanIndex(fpIdx)}
                        className={`inline-flex items-center justify-center rounded-full h-[34px] sm:h-[42px] lg:h-[2.656vw] px-[16px] sm:px-[20px] lg:px-[1.302vw] text-[13px] sm:text-[15px] lg:text-[1.001vw] transition-colors cursor-pointer ${
                          selectedFloorPlanIndex === fpIdx
                            ? 'bg-[#ef493d] text-white font-medium shadow-sm'
                            : 'bg-white border border-[#333] text-[#333] hover:bg-[#ef493d]/10'
                        }`}
                      >
                        {fp.title}
                      </button>
                    ))}
                  </div>
                )}

                {/* Plan Image */}
                <div
                  className="relative w-full flex-1 min-h-[300px] cursor-zoom-in group flex items-center justify-center"
                  onClick={() => {
                    const src =
                      activePlanTab === 'floor'
                        ? project.floorPlans[selectedFloorPlanIndex]?.image || project.floorPlanImage || project.exteriorImage
                        : activePlanTab === 'isometric'
                        ? project.isometricImage || project.exteriorImage
                        : project.exteriorImage;
                    setLightboxImage({ src, caption: `${project.name} Plan` });
                  }}
                >
                  <img
                    src={
                      activePlanTab === 'floor'
                        ? project.floorPlans[selectedFloorPlanIndex]?.image || project.floorPlanImage || project.exteriorImage
                        : activePlanTab === 'isometric'
                        ? project.isometricImage || project.exteriorImage
                        : project.exteriorImage
                    }
                    alt={`${project.name} layout plan`}
                    className="w-full h-full object-contain select-none transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <span className="absolute bottom-3 right-3 px-3 py-1.5 bg-black/60 hover:bg-black/80 text-white text-xs rounded-full flex items-center gap-1.5 opacity-90 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" /> Enlarge
                  </span>
                </div>
              </div>
            </div>

            {/* Right Room Dimensions breakdown (for floor plans) */}
            {activePlanTab === 'floor' && project.floorPlans[selectedFloorPlanIndex] && (
              <div className="w-full lg:w-[32vw] bg-white rounded-[12px] border border-[rgba(51,51,51,0.12)] p-6 sm:p-8 shadow-sm">
                <div className="border-b border-[#eee] pb-4 mb-5">
                  <span className="text-xs uppercase tracking-widest text-[#ef493d] font-bold">Dimension Specifications</span>
                  <h3
                    className="text-2xl sm:text-3xl text-[#333] mt-1"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                  >
                    {project.floorPlans[selectedFloorPlanIndex].title}
                  </h3>
                  <p className="text-sm text-[#777] mt-0.5">
                    Super Built-Up Area: <span className="text-[#333] font-semibold">{project.floorPlans[selectedFloorPlanIndex].size}</span>
                  </p>
                </div>

                <div className="divide-y divide-[#f0ede6]">
                  {Object.entries(project.floorPlans[selectedFloorPlanIndex].dimensions).map(([room, dim], dimIdx) => (
                    <div key={dimIdx} className="py-3 flex items-center justify-between text-sm sm:text-base">
                      <span className="capitalize text-[#555] font-normal">
                        {room.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="font-semibold text-[#2a2828]">{dim}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-[#eee] flex items-center justify-between">
                  <span className="text-sm text-[#777]">Configurations</span>
                  <span className="text-sm font-semibold text-[#ef493d]">
                    {project.floorPlans[selectedFloorPlanIndex].type} ({project.floorPlans[selectedFloorPlanIndex].bathrooms} Baths, {project.floorPlans[selectedFloorPlanIndex].balconies} Balconies)
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. SPECIFICATIONS SECTION (#specification) [Light]
      ───────────────────────────────────────────────────────────── */}
      <section
        id="specification"
        data-section="project-specifications"
        className="relative w-full bg-white pt-[30px] pb-[60px] lg:pt-[4.688vw] lg:pb-[4.688vw] overflow-hidden"
      >
        {/* Left vertical accent */}
        <div
          className="flex lg:absolute left-[12px] top-[30px] lg:left-[4.167vw] lg:top-[4.688vw] flex-col items-center gap-[8px] md:gap-[12px] lg:gap-[1.094vw] w-auto lg:w-[2.813vw] z-[5] max-lg:static max-lg:!w-full max-lg:flex-row max-lg:!justify-center max-lg:items-center max-lg:!gap-[8px] max-lg:mt-[15px] max-lg:mb-[18px]"
          aria-hidden="true"
        >
          <span className="block w-px h-[28px] md:h-[36px] lg:h-[3.125vw] bg-[#ef493d] max-lg:!w-[28px] max-lg:!h-px" />
          <span
            className="font-medium capitalize whitespace-nowrap text-[#ef493d] text-[12px] md:text-[14px] lg:text-[1.25vw] max-lg:[writing-mode:horizontal-tb] lg:[writing-mode:vertical-rl] lg:rotate-180"
          >
            The Standard of Excellence
          </span>
        </div>

        <div className="px-5 md:px-12 lg:px-[9.375vw]">
          <h2
            className="capitalize text-[#333] leading-[1.08] tracking-[0.022em] text-center text-[34px] xs:text-[38px] sm:text-[48px] md:text-[64px] lg:text-[5vw]"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
          >
            Luxury by Design
          </h2>
          <p
            className="mx-auto mt-[14px] lg:mt-[0.729vw] max-w-[760px] lg:max-w-[46.615vw] text-center text-[#555] text-[14px] leading-[24px] sm:text-[16px] sm:leading-[28px] lg:text-[0.938vw] lg:leading-[1.563vw]"
          >
            Every home is constructed with certified structural engineering standards, premium teak woodwork, and top-tier fittings.
          </p>

          <div className="mt-[40px] lg:mt-[3.385vw] grid grid-cols-1 lg:grid-cols-[43.021vw_1fr] gap-[24px] lg:gap-[3.802vw] items-start">
            {/* Left showcase photo */}
            <div className="relative w-full aspect-[826/656] lg:h-[34.167vw] lg:w-[43.021vw] overflow-hidden rounded-[12px] bg-[#eee] shadow-sm">
              <img
                src={project.exteriorImage}
                alt="Specifications craftsmanship"
                className="w-full h-full object-cover object-center select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white">
                  <span className="text-xs uppercase tracking-widest text-[#ef493d] font-bold">Quality Benchmark</span>
                  <h4
                    className="text-2xl mt-1 capitalize"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                  >
                    {selectedSpecKey}
                  </h4>
                  <p className="text-sm text-white/80 mt-1 max-w-md">
                    {project.specifications[selectedSpecKey]}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Interactive Specifications Grid */}
            <div className="flex flex-col gap-[24px] lg:gap-[2.083vw] lg:pt-[1vw]">
              <div className="grid grid-cols-2 sm:grid-cols-3 border-t border-l border-[#333]/12 rounded-[8px] overflow-hidden">
                {specKeys.map((key) => {
                  const isSelected = selectedSpecKey === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedSpecKey(key)}
                      className={`relative flex items-center justify-center min-h-[90px] sm:min-h-[110px] lg:min-h-[7.5vw] border-r border-b border-[#333]/12 p-3 transition-colors cursor-pointer text-center ${
                        isSelected
                          ? 'bg-[rgba(239,73,61,0.08)] text-[#ef493d]'
                          : 'bg-transparent text-[#333] hover:bg-[rgba(239,73,61,0.04)] hover:text-[#ef493d]'
                      }`}
                    >
                      <span className="text-[13px] sm:text-[15px] lg:text-[0.938vw] font-medium leading-[1.3] capitalize">
                        {key}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Spec Full Details Box */}
              <div className="p-5 sm:p-6 rounded-[8px] border border-[#ef493d]/25 bg-[#faf9f7] shadow-sm">
                <h5 className="text-sm font-bold uppercase tracking-wider text-[#ef493d] mb-2">
                  {selectedSpecKey} Specifications
                </h5>
                <p className="text-[#555] text-sm sm:text-base leading-relaxed">
                  {project.specifications[selectedSpecKey]}
                </p>
              </div>

              {/* Download Specs Button */}
              {project.brochureUrl && (
                <a
                  href={project.brochureUrl}
                  download={`Akhil-Promoters-${project.name}-Specifications.pdf`}
                  className="inline-flex items-center justify-center gap-2 border border-[#ef493d] text-[#ef493d] hover:bg-[#ef493d] hover:text-white transition-colors h-[46px] sm:h-[50px] px-6 text-sm font-medium rounded-[2px]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full Specifications</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. THE HANDBOOK SECTION (#brochure) [Dark #2a2828]
      ───────────────────────────────────────────────────────────── */}
      <section
        id="brochure"
        data-section="project-brochure"
        className="relative w-full bg-[#2a2828] pt-[30px] pb-[60px] lg:pt-[4.167vw] lg:pb-[4.167vw] overflow-hidden text-white"
      >
        {/* Left vertical accent */}
        <div
          className="flex lg:absolute left-[12px] top-[30px] lg:left-[4.167vw] lg:top-[4.688vw] flex-col items-center gap-[8px] md:gap-[12px] lg:gap-[1.094vw] w-auto lg:w-[2.813vw] z-[5] max-lg:static max-lg:!w-full max-lg:flex-row max-lg:!justify-center max-lg:items-center max-lg:!gap-[8px] max-lg:mt-[15px] max-lg:mb-[18px]"
          aria-hidden="true"
        >
          <span className="block w-px h-[28px] md:h-[36px] lg:h-[3.125vw] bg-white/70 max-lg:!w-[28px] max-lg:!h-px" />
          <span
            className="font-medium capitalize whitespace-nowrap text-white text-[12px] md:text-[14px] lg:text-[1.25vw] max-lg:[writing-mode:horizontal-tb] lg:[writing-mode:vertical-rl] lg:rotate-180"
          >
            Your Journey Starts Here
          </span>
        </div>

        <div className="px-5 md:px-12 lg:pl-[9.375vw] lg:pr-[9.531vw]">
          <div className="grid grid-cols-1 lg:grid-cols-[32.5vw_1fr] gap-[36px] lg:gap-[5.573vw] items-center">
            {/* Left Photo card */}
            <div className="relative w-full aspect-[624/599] lg:h-[31.198vw] lg:w-[32.5vw] rounded-[12px] overflow-hidden bg-black/40 shadow-xl">
              <img
                src={project.exteriorImage}
                alt={`${project.name} Handbook`}
                className="w-full h-full object-cover object-center select-none"
              />
            </div>

            {/* Right Download CTA */}
            <div className="flex flex-col items-start gap-[24px] lg:gap-[2.135vw] max-w-full lg:max-w-[43.021vw]">
              <h2
                className="capitalize text-white leading-[1.08] tracking-[0.022em] text-[34px] xs:text-[38px] sm:text-[48px] md:text-[64px] lg:text-[5vw]"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
              >
                The {project.name} Handbook
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Download the official architectural brochure and unit plan catalogue for comprehensive specifications, floor plans, and project approvals.
              </p>

              <div className="flex flex-wrap items-center gap-[12px] lg:gap-[1.042vw]">
                {project.brochureUrl ? (
                  <a
                    href={project.brochureUrl}
                    download={`Akhil-Promoters-${project.name}-Brochure.pdf`}
                    className="inline-flex items-center justify-between gap-[16px] border border-white text-white capitalize h-[48px] sm:h-[54px] lg:h-[3.021vw] w-[260px] sm:w-[290px] lg:w-[15.833vw] px-[20px] lg:px-[1.354vw] text-[14px] sm:text-[16px] lg:text-[0.938vw] transition-colors duration-300 hover:bg-white hover:text-[#2a2828]"
                  >
                    <span>Download Brochure</span>
                    <Download className="w-[18px] h-[18px] lg:w-[1.094vw] lg:h-[1.094vw]" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-between gap-[16px] border border-white text-white capitalize h-[48px] sm:h-[54px] lg:h-[3.021vw] w-[260px] sm:w-[290px] lg:w-[15.833vw] px-[20px] lg:px-[1.354vw] text-[14px] sm:text-[16px] lg:text-[0.938vw] transition-colors duration-300 hover:bg-white hover:text-[#2a2828]"
                  >
                    <span>Download Brochure</span>
                    <Download className="w-[18px] h-[18px] lg:w-[1.094vw] lg:h-[1.094vw]" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. SECURE YOUR FUTURE / INQUIRY SECTION (#inquire) [Light]
      ───────────────────────────────────────────────────────────── */}
      <section
        id="inquire"
        data-section="project-inquiry"
        className="relative w-full bg-white pt-[30px] pb-[70px] lg:pt-[4.688vw] lg:pb-[3.5vw] overflow-hidden"
      >
        {/* Left vertical accent */}
        <div
          className="flex lg:absolute left-[12px] top-[30px] lg:left-[4.167vw] lg:top-[4.688vw] flex-col items-center gap-[8px] md:gap-[12px] lg:gap-[1.094vw] w-auto lg:w-[2.813vw] z-[5] max-lg:static max-lg:!w-full max-lg:flex-row max-lg:!justify-center max-lg:items-center max-lg:!gap-[8px] max-lg:mt-[15px] max-lg:mb-[18px]"
          aria-hidden="true"
        >
          <span className="block w-px h-[28px] md:h-[36px] lg:h-[3.125vw] bg-[#ef493d] max-lg:!w-[28px] max-lg:!h-px" />
          <span
            className="font-medium capitalize whitespace-nowrap text-[#ef493d] text-[12px] md:text-[14px] lg:text-[1.25vw] max-lg:[writing-mode:horizontal-tb] lg:[writing-mode:vertical-rl] lg:rotate-180"
          >
            Transparency &amp; Trust
          </span>
        </div>

        <div className="px-5 md:px-12 lg:px-[9.74vw]">
          <h2
            className="capitalize text-[#333] leading-[1.08] tracking-[0.022em] text-center text-[34px] xs:text-[38px] sm:text-[48px] md:text-[64px] lg:text-[5vw]"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
          >
            Secure Your Future At {project.name}
          </h2>
          <p
            className="mx-auto mt-[14px] lg:mt-[0.729vw] max-w-[760px] lg:max-w-[53.49vw] text-center text-[#555] text-[14px] leading-[24px] sm:text-[16px] sm:leading-[28px] lg:text-[0.938vw] lg:leading-[1.563vw]"
          >
            We believe in complete regulatory compliance and open communication. Review our official registration details or reach out to our dedicated consultants to take the next step toward your new home.
          </p>

          <div className="mt-[40px] lg:mt-[3.125vw] grid grid-cols-1 lg:grid-cols-[31.771vw_1fr] gap-[40px] lg:gap-[8.281vw] items-start lg:divide-x lg:divide-[#33333322]">
            {/* Left Inquiry Form */}
            <form onSubmit={handleInquirySubmit} className="flex flex-col gap-[28px] lg:gap-[2.344vw] w-full">
              {formSubmitted ? (
                <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center">
                  <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto mb-2" />
                  <h4 className="text-green-800 font-semibold text-lg">Inquiry Received!</h4>
                  <p className="text-green-700 text-sm mt-1">Our sales team will contact you shortly.</p>
                </div>
              ) : (
                <>
                  <label className="flex flex-col gap-[14px] lg:gap-[1.302vw] w-full">
                    <div className="flex items-center gap-[10px] lg:gap-[0.521vw] w-full">
                      <input
                        type="text"
                        required
                        placeholder="Full Name*"
                        value={inquiryForm.name}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                        className="flex-1 bg-transparent outline-none border-none text-[#333] placeholder:text-[#888] text-[15px] sm:text-[18px] lg:text-[1.094vw] leading-[26px] sm:leading-[30px]"
                      />
                    </div>
                    <div className="h-px w-full bg-[#33333322]" />
                  </label>

                  <label className="flex flex-col gap-[14px] lg:gap-[1.302vw] w-full">
                    <div className="flex items-center gap-[10px] lg:gap-[0.521vw] w-full">
                      <div className="relative inline-flex items-center shrink-0 w-[4.75rem] lg:w-[5vw] text-[#333] text-[15px] sm:text-[18px] lg:text-[1.094vw]">
                        <select
                          aria-label="Country code"
                          value={inquiryForm.countryCode}
                          onChange={(e) => setInquiryForm({ ...inquiryForm, countryCode: e.target.value })}
                          className="w-full appearance-none bg-transparent outline-none border-none cursor-pointer pr-[14px] font-medium"
                        >
                          <option value="+91">🇮🇳 +91</option>
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+971">🇦🇪 +971</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-0 w-[12px] h-[12px] opacity-60" />
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number*"
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                        className="flex-1 bg-transparent outline-none border-none text-[#333] placeholder:text-[#888] text-[15px] sm:text-[18px] lg:text-[1.094vw] leading-[26px] sm:leading-[30px]"
                      />
                    </div>
                    <div className="h-px w-full bg-[#33333322]" />
                  </label>

                  <label className="flex flex-col gap-[14px] lg:gap-[1.302vw] w-full">
                    <div className="flex items-center gap-[10px] lg:gap-[0.521vw] w-full">
                      <input
                        type="email"
                        required
                        placeholder="Email Address*"
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                        className="flex-1 bg-transparent outline-none border-none text-[#333] placeholder:text-[#888] text-[15px] sm:text-[18px] lg:text-[1.094vw] leading-[26px] sm:leading-[30px]"
                      />
                    </div>
                    <div className="h-px w-full bg-[#33333322]" />
                  </label>

                  <label className="flex flex-col gap-[14px] lg:gap-[1.302vw] w-full">
                    <div className="relative flex items-center">
                      <select
                        required
                        value={inquiryForm.configuration}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, configuration: e.target.value })}
                        className="appearance-none w-full bg-transparent outline-none border-none text-[#333] text-[15px] sm:text-[18px] lg:text-[1.094vw] leading-[26px] sm:leading-[30px] pr-[24px] cursor-pointer"
                      >
                        <option value="" disabled>Interested Configuration*</option>
                        {project.configurations.map((cfg, cIdx) => (
                          <option key={cIdx} value={cfg}>{cfg}</option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-0 text-[#5f5f5f] w-[16px] h-[16px] lg:w-[1.094vw] lg:h-[1.094vw]" />
                    </div>
                    <div className="h-px w-full bg-[#33333322]" />
                  </label>

                  <label className="flex flex-col gap-[14px] lg:gap-[1.302vw] w-full">
                    <div className="flex items-center gap-[10px] lg:gap-[0.521vw] w-full">
                      <input
                        type="text"
                        placeholder="Message"
                        value={inquiryForm.message}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                        className="flex-1 bg-transparent outline-none border-none text-[#333] placeholder:text-[#888] text-[15px] sm:text-[18px] lg:text-[1.094vw] leading-[26px] sm:leading-[30px]"
                      />
                    </div>
                    <div className="h-px w-full bg-[#33333322]" />
                  </label>

                  <div className="flex items-center gap-[16px] lg:gap-[1.354vw] flex-wrap pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-[2px] border border-[#ef493d] text-[#ef493d] capitalize h-[48px] sm:h-[54px] lg:h-[3.021vw] w-[180px] sm:w-[210px] lg:w-[11.667vw] text-[14px] sm:text-[16px] lg:text-[0.938vw] font-medium transition-colors duration-300 hover:bg-[#ef493d] hover:text-white cursor-pointer"
                    >
                      Submit Inquiry
                    </button>
                  </div>
                </>
              )}
            </form>

            {/* Right Regulatory & Official Project Information */}
            <div className="flex flex-col gap-[36px] lg:gap-[4.2vw] w-full lg:pl-[3.385vw]">
              <div className="flex flex-col gap-[20px] lg:gap-[2vw]">
                <p className="text-[#333] text-[15px] leading-[26px] sm:text-[17px] sm:leading-[30px] lg:text-[1.094vw] lg:leading-[1.823vw]">
                  <span className="font-semibold text-black">Site Address: </span>
                  <span className="text-[#555]">{project.siteAddress}</span>
                </p>
                <p className="text-[#333] text-[15px] leading-[26px] sm:text-[17px] sm:leading-[30px] lg:text-[1.094vw] lg:leading-[1.823vw]">
                  <span className="font-semibold text-black">Disclaimer: </span>
                  <span className="text-[#666]">
                    Architectural renders and illustrations are representative. All layouts, specifications, and amenities are subject to local municipal building sanctions.
                  </span>
                </p>
              </div>

              {/* RERA and Permission Info */}
              <div className="flex flex-col gap-[4px] min-w-0 bg-[#faf9f7] p-6 rounded-[8px] border border-[#eee]">
                <span className="text-xs uppercase tracking-widest text-[#ef493d] font-bold">RERA Registration</span>
                <p
                  className="text-[#333] text-[28px] sm:text-[36px] lg:text-[2.344vw] leading-[1.1]"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                >
                  {project.reraNumber || 'P04100002891'}
                </p>
                {project.buildingPermissionNo && (
                  <p className="text-[#333] break-words mt-[6px] sm:mt-[8px] lg:mt-[0.417vw] text-[13px] sm:text-[15px] lg:text-[1.094vw] leading-[1.4]">
                    Building Permission no.: <span className="font-semibold">{project.buildingPermissionNo}</span>
                  </p>
                )}
                <a
                  href="https://rera.ap.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ef493d] hover:underline break-all text-[13px] sm:text-[15px] lg:text-[1.094vw] leading-[1.4] mt-2 font-medium"
                >
                  https://rera.ap.gov.in
                </a>
              </div>

              {/* Direct WhatsApp and Phone Contact CTAs */}
              <div className="flex items-center gap-4 flex-wrap">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    `Hello Akhil Promoters, I am interested in ${project.name} (${project.location}). Please share details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-semibold rounded-[4px] shadow transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Consultant</span>
                </a>
                <a
                  href={`tel:${OFFICE_PHONE_1.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#2a2828] hover:bg-black text-white text-sm font-semibold rounded-[4px] shadow transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {OFFICE_PHONE_1}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          FLOATING BOTTOM DOWNLOAD BROCHURE BUTTON
      ───────────────────────────────────────────────────────────── */}
      {project.brochureUrl ? (
        <a
          href={project.brochureUrl}
          download={`Akhil-Promoters-${project.name}-Brochure.pdf`}
          aria-label="Download Brochure"
          className="fixed z-[70] right-[12px] sm:right-[16px] lg:right-[1.25vw] bottom-[20px] sm:bottom-[24px] lg:bottom-[1.25vw] inline-flex items-center justify-center gap-[8px] sm:gap-[10px] lg:gap-[0.521vw] rounded-full bg-[#ef493d] hover:bg-[#d83a2f] text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] h-[44px] sm:h-[48px] lg:h-[3.021vw] px-[18px] sm:px-[20px] lg:px-[1.25vw] max-w-[calc(100vw-24px)] capitalize text-[13px] sm:text-[14px] lg:text-[0.938vw] font-medium transition-all hover:scale-105"
        >
          <Download className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] shrink-0" />
          <span className="truncate">Download Brochure</span>
        </a>
      ) : (
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          aria-label="Download Brochure"
          className="fixed z-[70] right-[12px] sm:right-[16px] lg:right-[1.25vw] bottom-[20px] sm:bottom-[24px] lg:bottom-[1.25vw] inline-flex items-center justify-center gap-[8px] sm:gap-[10px] lg:gap-[0.521vw] rounded-full bg-[#ef493d] hover:bg-[#d83a2f] text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] h-[44px] sm:h-[48px] lg:h-[3.021vw] px-[18px] sm:px-[20px] lg:px-[1.25vw] max-w-[calc(100vw-24px)] capitalize text-[13px] sm:text-[14px] lg:text-[0.938vw] font-medium transition-all hover:scale-105 cursor-pointer"
        >
          <Download className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] shrink-0" />
          <span className="truncate">Download Brochure</span>
        </button>
      )}

      {/* ─────────────────────────────────────────────────────────────
          LIGHTBOX MODAL FOR HIGH-RES PREVIEWS
      ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white rounded-full bg-black/40 hover:bg-black/80 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-w-5xl max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <img
                src={lightboxImage.src}
                alt={lightboxImage.caption}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <p className="text-white text-center mt-3 text-sm font-medium">{lightboxImage.caption}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inquiry Modal Fallback */}
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultProject={project.name}
        modalType="brochure"
      />
    </div>
  );
};
