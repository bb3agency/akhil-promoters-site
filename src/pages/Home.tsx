import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  MessageSquare,
  BedDouble,
  Maximize2,
  Download,
} from 'lucide-react';
import { WHATSAPP_NUMBER, projectData, Project } from '../data';
import { InquiryModal } from '../components/ui/InquiryModal';
import {
  staggerContainer,
  fadeInUp,
  itemFadeUp,
  viewportConfig,
  sectionScrollProps,
  mobileTap,
  mobileCardTap,
} from '../utils/motion';

const ProjectCard: React.FC<{
  project: Project;
  onOpenBrochure: (name: string) => void;
}> = ({ project, onOpenBrochure }) => {
  const displayStatus =
    project.status.charAt(0).toUpperCase() + project.status.slice(1).toLowerCase();

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      whileTap={mobileCardTap}
      className="w-[300px] xs:w-[340px] sm:w-[380px] md:w-[410px] lg:w-[420px] shrink-0 bg-white rounded-3xl p-4 sm:p-5 border border-[#E5E5E5] hover:border-gray-300 hover:shadow-xl transition-all duration-300 flex flex-col group"
    >
      {/* Top Image with Status Pill */}
      <Link
        to={`/projects/${project.slug}`}
        className="block relative aspect-[16/10] bg-[#F0EDE6] rounded-2xl overflow-hidden mb-4 sm:mb-5"
      >
        <img
          src={project.heroImage}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
        />
        <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4">
          <span className="px-4 py-1.5 bg-[#7CA5C2]/85 backdrop-blur-md text-white text-[11px] sm:text-xs font-medium rounded-full shadow-xs border border-white/20">
            {displayStatus}
          </span>
        </div>
      </Link>

      {/* Card Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Title & Circular Arrow Action Row */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <Link to={`/projects/${project.slug}`} className="block">
                <h3
                  className="text-2xl sm:text-[26px] font-serif font-normal text-[#C8102E] leading-tight tracking-tight hover:opacity-90 transition-opacity"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                >
                  {project.name}
                </h3>
              </Link>
              <p className="text-xs sm:text-[13px] text-[#8A8580] font-sans mt-1 font-normal">
                {project.location}
              </p>
            </div>

            <Link
              to={`/projects/${project.slug}`}
              className="w-10 h-10 rounded-full border border-red-300 text-[#C8102E] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8102E] group-hover:text-white group-hover:border-[#C8102E] transition-all duration-300 shadow-xs active:scale-95"
              aria-label={`View ${project.name} details`}
            >
              <ArrowUpRight size={18} strokeWidth={1.8} />
            </Link>
          </div>

          {/* Overview Description */}
          <p className="text-xs sm:text-[13px] text-gray-600 font-sans leading-relaxed line-clamp-2 mt-2.5 mb-4 sm:mb-5">
            {project.overview}
          </p>
        </div>

        {/* Bottom Chips: Configuration & Area & Brochure */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1 mt-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F4F3EF] text-gray-700 text-[11px] sm:text-xs font-medium">
            <BedDouble size={14} className="text-gray-500 stroke-[1.6]" />
            <span>{project.configurations[0] || '3 BHK'}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F4F3EF] text-gray-700 text-[11px] sm:text-xs font-medium">
            <Maximize2 size={13} className="text-gray-500 stroke-[1.6]" />
            <span>{project.area}</span>
          </div>

          {project.brochureUrl ? (
            <motion.a
              whileTap={mobileTap}
              href={project.brochureUrl}
              download={`Akhil-Promoters-${project.name}-Brochure.pdf`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F4F3EF] hover:bg-[#E8E6E0] text-gray-700 text-[11px] sm:text-xs font-medium transition-colors ml-auto"
              title={`Download ${project.name} brochure`}
            >
              <Download size={13} className="text-gray-500 stroke-[1.6]" />
              <span>Brochure</span>
            </motion.a>
          ) : (
            <motion.button
              whileTap={mobileTap}
              type="button"
              onClick={() => onOpenBrochure(project.name)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F4F3EF] hover:bg-[#E8E6E0] text-gray-700 text-[11px] sm:text-xs font-medium transition-colors ml-auto cursor-pointer"
              title={`Request ${project.name} brochure`}
            >
              <Download size={13} className="text-gray-500 stroke-[1.6]" />
              <span>Brochure</span>
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState('Blueberry');

  const handleOpenBrochureModal = (projName: string) => {
    setSelectedProject(projName);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-[#F7F5F0] text-[#181714]">

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[100dvh] sm:min-h-screen flex flex-col justify-center overflow-hidden bg-[#181714]">

        {/* Background — video with fallback poster */}
        <div className="absolute inset-0">
          {/* Mobile Viewport Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="block sm:hidden w-full h-full object-cover opacity-60"
          >
            <source src="/hero-bg-mobile.mp4" type="video/mp4" />
          </video>

          {/* Desktop Viewport Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="hidden sm:block w-full h-full object-cover opacity-60"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>

          {/* Cinematic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#181714]/40 via-[#181714]/20 to-[#181714]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#181714]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-10 w-full pt-20 sm:pt-36 pb-8 sm:pb-24">
          <motion.div
            variants={staggerContainer(0.14, 0.1)}
            initial="hidden"
            animate="visible"
            className="max-w-[680px]"
          >
            {/* Eyebrow */}
            <motion.p
              variants={itemFadeUp}
              className="type-label text-[#C8102E] flex items-center mb-3 sm:mb-8 text-[11px] sm:text-xs font-semibold tracking-wider uppercase"
            >
              Vijayawada · CREDAI Member
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={itemFadeUp}
              className="text-overlay mb-3.5 sm:mb-8 text-white break-words drop-shadow-sm"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.95rem, 7vw, 5.5rem)',
                fontWeight: 400,
                lineHeight: 1.1,
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
              className="text-white/80 text-xs sm:text-base md:text-lg font-light leading-relaxed mb-6 sm:mb-12 max-w-[480px]"
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
                className="type-label min-h-[46px] sm:min-h-[48px] inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#C8102E] hover:bg-[#A50D24] text-white transition-all duration-200 group text-center active:bg-[#900B20] active:scale-[0.96] rounded-sm text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-lg shadow-black/20"
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
            <motion.p variants={itemFadeUp} className="type-label text-[#C8102E] mb-4 sm:mb-6">
              Akhil Promoters
            </motion.p>
            <motion.h2
              variants={itemFadeUp}
              className="mb-6 text-[#181714]"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 400,
                lineHeight: 1.12,
                letterSpacing: '-0.015em',
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
        className="py-0 bg-white text-[#181714] overflow-hidden"
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 pt-4 sm:pt-6 pb-6 sm:pb-8">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center max-w-3xl mx-auto mb-4 sm:mb-6"
          >
            <motion.p
              variants={itemFadeUp}
              className="type-label text-[#C8102E] flex items-center justify-center mb-2 sm:mb-3 text-[10px] sm:text-xs"
            >
              3D Spatial Perspective &amp; Flow
            </motion.p>
            <motion.h2
              variants={itemFadeUp}
              className="text-[#181714] text-3xl sm:text-4xl md:text-5xl font-serif mb-3 sm:mb-4"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: '-0.015em',
              }}
            >
              Every square foot planned with purpose.
            </motion.h2>
            <motion.p
              variants={itemFadeUp}
              className="text-[#8A8580] text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Watch our architectural floor plans transition from paper precision into three-dimensional living spaces — engineered with cross ventilation, optimal natural light, and generous room proportions.
            </motion.p>
          </motion.div>

          {/* Cinematic Video Player Showcase */}
          <motion.div
            variants={fadeInUp(0.7, 0.15, 30)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-black aspect-video max-w-5xl mx-auto group"
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
            <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 flex flex-wrap items-center justify-between gap-2 sm:gap-3 pointer-events-none">
              <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full border border-white/15 text-white text-[10px] sm:text-xs tracking-wider uppercase font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                3D Perspective
              </div>
              <div className="hidden sm:flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/15 text-white/80 text-[10px] sm:text-xs font-light">
                3 BHK Architectural Layout Visualization
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ─── 4. FEATURED DEVELOPMENTS (CONTINUOUS MARQUEE) ─── */}
      <motion.section
        {...sectionScrollProps}
        className="py-14 sm:py-18 md:py-24 bg-[#F7F5F0] border-t border-[#E8E4DC] overflow-hidden"
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 mb-8 sm:mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <motion.p
                variants={itemFadeUp}
                className="type-label text-[#C8102E] flex items-center mb-2 sm:mb-3 text-[10px] sm:text-xs font-semibold tracking-wider uppercase"
              >
                Featured Residences
              </motion.p>
              <motion.h2
                variants={itemFadeUp}
                className="text-[#181714] text-3xl sm:text-4xl md:text-5xl"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  lineHeight: 1.12,
                  letterSpacing: '-0.015em',
                }}
              >
                Developments shaped with care.
              </motion.h2>
              <motion.p
                variants={itemFadeUp}
                className="text-[#8A8580] text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-xl mt-3"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Explore our signature residential communities across Vijayawada’s most connected corridors.
              </motion.p>
            </div>

            {/* Header Action & Pause Hint */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-[#DDD9D1] text-[#8A8580] text-[11px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] animate-pulse" />
                <span>Hover to pause</span>
              </div>

              <Link
                to="/projects"
                className="type-label min-h-[42px] inline-flex items-center gap-2 px-5 py-2.5 border border-[#DDD9D1] bg-white text-[#181714] hover:border-[#181714] hover:bg-[#181714] hover:text-white transition-all text-xs font-medium rounded-full shadow-xs"
              >
                <span>All Projects</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        {/* Side-to-side Continuous Marquee Track (Right to Left, Pauses on Hover) */}
        <div className="relative w-full overflow-hidden">
          {/* Subtle edge fade overlays for smooth entry and exit */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-r from-[#F7F5F0] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-l from-[#F7F5F0] to-transparent z-10" />

          <div className="animate-marquee-left py-4">
            {/* First track set */}
            <div className="flex items-stretch gap-5 sm:gap-6 lg:gap-7 pr-5 sm:pr-6 lg:pr-7 shrink-0">
              {[...Object.values(projectData), ...Object.values(projectData)].map((project, idx) => (
                <ProjectCard
                  key={`track1-${project.id}-${idx}`}
                  project={project}
                  onOpenBrochure={handleOpenBrochureModal}
                />
              ))}
            </div>

            {/* Second duplicate set for seamless infinite loop */}
            <div className="flex items-stretch gap-5 sm:gap-6 lg:gap-7 pr-5 sm:pr-6 lg:pr-7 shrink-0" aria-hidden="true">
              {[...Object.values(projectData), ...Object.values(projectData)].map((project, idx) => (
                <ProjectCard
                  key={`track2-${project.id}-${idx}`}
                  project={project}
                  onOpenBrochure={handleOpenBrochureModal}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ─── SITE VISIT CTA ─────────────────────────────── */}
      <motion.section
        {...sectionScrollProps}
        className="py-0 bg-[#F0EDE6] border-t border-[#E8E4DC] overflow-hidden"
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 text-center py-6 sm:py-8">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.p
              variants={itemFadeUp}
              className="type-label text-[#C8102E] justify-center flex items-center mb-2 sm:mb-3 text-[10px] sm:text-xs"
            >
              Vijayawada — Kanuru, Ayodhya Nagar & Poranki
            </motion.p>
            <motion.h2
              variants={itemFadeUp}
              className="text-[#181714] mb-3 sm:mb-4 mx-auto"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.85rem, 3.5vw, 3rem)',
                fontWeight: 400,
                lineHeight: 1.12,
                letterSpacing: '-0.015em',
                maxWidth: '560px',
              }}
            >
              Talk to our advisory team.
            </motion.h2>
            <motion.p
              variants={itemFadeUp}
              className="text-[#8A8580] text-xs sm:text-sm leading-relaxed max-w-md mx-auto mb-5 sm:mb-6"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 300 }}
            >
              Our Vijayawada team is on hand to answer questions about any development.
            </motion.p>
            <motion.div
              variants={itemFadeUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none"
            >
              <motion.a
                whileTap={mobileTap}
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="type-label min-h-[46px] w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-[#DDD9D1] text-[#181714] hover:border-[#181714] active:bg-black/5 transition-colors text-center"
              >
                <MessageSquare size={14} /> WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultProject={selectedProject}
        modalType="brochure"
      />
    </div>
  );
};

