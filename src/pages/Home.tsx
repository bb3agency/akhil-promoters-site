import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, MessageSquare, CheckCircle } from 'lucide-react';
import { projectData, WHATSAPP_NUMBER, OFFICE_PHONE_1 } from '../data';
import { InquiryModal } from '../components/ui/InquiryModal';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.72, ease: 'easeOut' },
};

export const Home = () => {
  const [activeTab, setActiveTab] = useState<'ALL' | 'KANURU' | 'AYODHYA_NAGAR'>('ALL');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState('Blueberry');

  const openModal = (project: string) => {
    setModalProject(project);
    setIsModalOpen(true);
  };

  const filteredProjects = Object.values(projectData).filter((p) => {
    if (activeTab === 'KANURU') return p.area.toLowerCase().includes('kanuru');
    if (activeTab === 'AYODHYA_NAGAR') return p.area.toLowerCase().includes('ayodhya');
    return true;
  });

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

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-10 w-full pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
            className="max-w-[680px]"
          >
            {/* Eyebrow */}
            <p className="type-label text-[#C8102E] flex items-center gap-3 mb-8">
              <span className="section-rule" />
              Vijayawada · CREDAI Member
            </p>

            {/* Headline */}
            <h1
              className="text-overlay mb-8 text-white"
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                fontWeight: 500,
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
              }}
            >
              Homes built<br />
              with intent.<br />
              <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Made to last.</em>
            </h1>

            {/* Sub-copy */}
            <p className="text-white/70 text-base md:text-lg font-[300] leading-[1.75] mb-12 max-w-[480px]"
               style={{ fontFamily: 'Inter, sans-serif' }}>
              Thoughtfully designed 3 BHK residences in Kanuru and Ayodhya Nagar — where architecture meets everyday life.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/projects"
                className="type-label inline-flex items-center gap-3 px-8 py-4 bg-[#C8102E] hover:bg-[#A50D24] text-white transition-colors duration-200 group"
              >
                View Residences
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <button
                onClick={() => openModal('Blueberry')}
                className="type-label inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white/90 hover:border-white/60 hover:text-white transition-colors duration-200"
              >
                Schedule a Visit
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-50">
          <div className="w-px h-8 bg-white/50" />
          <p className="type-label text-white/60 text-[9px]">Scroll</p>
        </div>
      </section>

      {/* ─── BRIEF INTRODUCTION ──────────────────────────── */}
      <section className="py-28 max-w-[1320px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div {...fadeUp} className="lg:col-span-5">
            <p className="type-label text-[#C8102E] brand-rule mb-6">
              Akhil Promoters
            </p>
            <h2
              className="mb-6 text-[#181714]"
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 'clamp(2rem, 3vw, 3rem)',
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
              to="/who-we-are/company-profile"
              className="type-label inline-flex items-center gap-2 text-[#181714] hover:text-[#C8102E] transition-colors group"
            >
              About the company
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div {...fadeUp} className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/images/projects/apple.jpg"
                alt="Apple residences, Kanuru"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden mt-10">
              <img
                src="/images/projects/cherry.jpg"
                alt="Cherry residences, Kanuru"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── PROJECTS SHOWCASE ──────────────────────────── */}
      <section className="py-24 border-t border-[#E8E4DC]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">

          {/* Section header */}
          <motion.div {...fadeUp} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <p className="type-label text-[#C8102E] brand-rule mb-4">Current Developments</p>
              <h2
                className="text-[#181714]"
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                  fontWeight: 500,
                  lineHeight: 1.1,
                }}
              >
                Ongoing & Completed Projects
              </h2>
            </div>

            {/* Filter tabs */}
            <div className="flex items-center border border-[#DDD9D1] divide-x divide-[#DDD9D1]">
              {(['ALL', 'AYODHYA_NAGAR', 'KANURU'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`type-label px-4 py-2.5 text-[10px] transition-colors ${
                    activeTab === tab
                      ? 'bg-[#C8102E] text-white'
                      : 'text-[#8A8580] hover:text-[#181714] bg-transparent'
                  }`}
                >
                  {tab === 'ALL' ? 'All' : tab === 'AYODHYA_NAGAR' ? 'Ayodhya Nagar' : 'Kanuru'}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#DDD9D1]">
            {filteredProjects.map((project, i) => (
              <motion.article
                key={project.id}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
                className="bg-[#F7F5F0] flex flex-col group"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#E8E4DC]">
                  <img
                    src={project.heroImage}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                    style={{ transform: 'scale(1)', transition: 'transform 0.7s ease' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  {/* Status badge */}
                  <span
                    className="absolute top-4 left-4 type-label text-[9px] px-2.5 py-1 bg-[#181714]/80 text-white backdrop-blur-sm"
                  >
                    {project.status}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-6 border-t border-[#DDD9D1]/60">
                  <p className="type-label text-[#C8102E] text-[9px] flex items-center gap-1.5 mb-2">
                    <MapPin size={10} />
                    {project.location}
                  </p>
                  <h3
                    className="text-[#181714] mb-3 group-hover:text-[#C8102E] transition-colors"
                    style={{
                      fontFamily: 'Cormorant Garamond, Georgia, serif',
                      fontSize: '1.5rem',
                      fontWeight: 500,
                      lineHeight: 1.2,
                    }}
                  >
                    {project.name}
                  </h3>
                  <p className="text-sm text-[#8A8580] leading-relaxed line-clamp-2 mb-4 flex-1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                    {project.configurations.join(' · ')}
                    {project.configurations.length > 0 && ' · Vijayawada'}
                  </p>

                  {/* Card actions */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[#E8E4DC]">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="type-label text-[10px] flex-1 py-2.5 text-center bg-[#181714] hover:bg-[#C8102E] text-white transition-colors duration-200"
                    >
                      View Project
                    </Link>
                    <button
                      onClick={() => openModal(project.name)}
                      className="type-label text-[10px] px-4 py-2.5 border border-[#DDD9D1] text-[#8A8580] hover:text-[#181714] hover:border-[#181714] transition-colors"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="type-label inline-flex items-center gap-3 px-8 py-4 border border-[#DDD9D1] text-[#181714] hover:border-[#181714] hover:text-[#C8102E] transition-colors"
            >
              All Developments <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── QUALITY COMMITMENT ─────────────────────────── */}
      <section className="py-28 bg-[#181714] text-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            <motion.div {...fadeUp} className="lg:col-span-6 order-2 lg:order-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/projects/blueberry.jpg"
                  alt="Blueberry, Ayodhya Nagar"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="lg:col-span-6 order-1 lg:order-2">
              <p className="type-label text-[#C8102E] brand-rule mb-8">Construction Standard</p>
              <h2
                className="text-white mb-8"
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                  fontWeight: 500,
                  lineHeight: 1.1,
                }}
              >
                No shortcuts.<br />No substitutions.
              </h2>
              <p className="text-white/60 text-sm leading-[1.8] mb-10" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                Seismic-resistant RCC frames, teak wood main doors, Finolex copper wiring, Jaquar fittings, and vitrified flooring — specified once and delivered without compromise.
              </p>

              <div className="space-y-4">
                {[
                  'Melamine-polished teak main doors & frames',
                  'Vitrified tiles · Granite corridors · Anti-skid baths',
                  'Johnson 6-passenger automatic elevator',
                  'Generator backup — lift, motors & flat points',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <CheckCircle size={16} className="text-[#C8102E] flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <Link
                  to="/who-we-are/values"
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
      <section className="py-24 bg-[#F0EDE6] border-t border-[#E8E4DC]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 text-center">
          <motion.div {...fadeUp}>
            <p className="type-label text-[#C8102E] justify-center flex items-center gap-3 mb-6">
              <span className="section-rule" />
              Vijayawada — Kanuru & Ayodhya Nagar
              <span className="section-rule" />
            </p>
            <h2
              className="text-[#181714] mb-6 mx-auto"
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                fontWeight: 500,
                lineHeight: 1.1,
                maxWidth: '560px',
              }}
            >
              Come see the difference in person.
            </h2>
            <p className="text-[#8A8580] text-sm leading-relaxed max-w-md mx-auto mb-10" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              Our team will arrange a private walk-through of the site at your convenience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openModal('Blueberry')}
                className="type-label px-8 py-4 bg-[#C8102E] hover:bg-[#A50D24] text-white transition-colors"
              >
                Request a Visit
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="type-label inline-flex items-center gap-2 px-8 py-4 border border-[#DDD9D1] text-[#181714] hover:border-[#181714] transition-colors"
              >
                <MessageSquare size={13} /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultProject={modalProject}
      />
    </div>
  );
};
