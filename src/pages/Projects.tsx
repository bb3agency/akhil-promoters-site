import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, ArrowUpRight, Download, BedDouble, Maximize2 } from 'lucide-react';
import { projectData } from '../data';
import { InquiryModal } from '../components/ui/InquiryModal';
import {
  staggerContainer,
  fadeInUp,
  itemFadeUp,
  viewportConfig,
  sectionScrollProps,
  mobileTap,
  mobileCardTap,
  mobileButtonTap,
} from '../utils/motion';

export const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [categoryFilter, setCategoryFilter] = useState<string>('ALL');
  const [selectedProject, setSelectedProject] = useState('Blueberry');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = Object.values(projectData);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.configurations.some((c) => c.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesStatus = statusFilter === 'ALL' || project.status === statusFilter;
    const matchesCategory = categoryFilter === 'ALL' || project.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  const handleOpenBrochureModal = (projName: string) => {
    setSelectedProject(projName);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-akhil-off-white min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-20">
      {/* Header Banner */}
      <section className="bg-akhil-dark text-white py-12 sm:py-16 mb-8 sm:mb-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={itemFadeUp}
              className="text-akhil-red text-xs font-bold tracking-[0.2em] uppercase mb-3 block"
            >
              AKHIL PROMOTERS PORTFOLIO
            </motion.span>
            <motion.h1
              variants={itemFadeUp}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-3 sm:mb-4"
            >
              Residential &amp; Landmark Developments
            </motion.h1>
            <motion.p
              variants={itemFadeUp}
              className="text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl font-light leading-relaxed"
            >
              Explore 3 BHK luxury flats and signature developments across Vijayawada’s premier locations including Ayodhya Nagar, Kanuru, and Poranki.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <motion.div
        variants={fadeInUp(0.6, 0.15)}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-8 sm:mb-12"
      >
        <div className="bg-white p-3.5 sm:p-6 rounded-xl sm:rounded-2xl border border-akhil-border shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center gap-3 sm:gap-4 justify-between">
          {/* Search Input */}
          <div className="relative w-full lg:w-96">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search project, location, flat size..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-akhil-off-white border border-akhil-border rounded-xl text-base sm:text-sm text-akhil-charcoal focus:outline-none focus:border-akhil-red"
            />
          </div>

          {/* Category & Status Filters */}
          <div className="flex items-center gap-2 sm:gap-3 w-full lg:w-auto">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="flex-1 lg:flex-none min-h-[44px] px-3.5 py-2.5 bg-akhil-off-white border border-akhil-border rounded-xl text-xs font-bold text-akhil-charcoal focus:outline-none cursor-pointer"
            >
              <option value="ALL">All Categories</option>
              <option value="Apartments">Apartments</option>
              <option value="Villas">Villas</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="flex-1 lg:flex-none min-h-[44px] px-3.5 py-2.5 bg-akhil-off-white border border-akhil-border rounded-xl text-xs font-bold text-akhil-charcoal focus:outline-none cursor-pointer"
            >
              <option value="ALL">All Statuses</option>
              <option value="ONGOING">Ongoing</option>
              <option value="COMPLETED">Completed</option>
              <option value="UPCOMING">Upcoming</option>
            </select>
          </div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.section
        {...sectionScrollProps}
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12"
      >
        {filteredProjects.length === 0 ? (
          <motion.div
            variants={fadeInUp(0.5)}
            initial="hidden"
            animate="visible"
            className="text-center py-20 bg-white rounded-2xl border border-akhil-border"
          >
            <h3 className="text-2xl font-serif text-akhil-charcoal mb-2">No developments match your criteria</h3>
            <p className="text-xs text-akhil-gray mb-6">Try clearing your search query or filters.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setStatusFilter('ALL');
                setCategoryFilter('ALL');
              }}
              className="px-6 py-3 bg-akhil-red text-white text-xs font-bold uppercase rounded-xl hover:bg-akhil-red-hover transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        ) : (
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto"
          >
            {filteredProjects.map((project) => {
              const displayStatus =
                project.status.charAt(0).toUpperCase() + project.status.slice(1).toLowerCase();

              return (
                <motion.div
                  key={project.id}
                  variants={itemFadeUp}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  whileTap={mobileCardTap}
                  className="bg-white rounded-3xl p-4 sm:p-5 border border-[#E5E5E5] hover:border-gray-300 hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {/* Top Image with Status Pill */}
                  <Link
                    to={`/projects/${project.slug}`}
                    className="block relative aspect-[16/10] bg-[#F0EDE6] rounded-2xl overflow-hidden mb-4 sm:mb-5"
                  >
                    <img
                      src={project.heroImage}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
                        <span>{project.configurations.join(', ')}</span>
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
                          onClick={() => handleOpenBrochureModal(project.name)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F4F3EF] hover:bg-[#E8E6E0] text-gray-700 text-[11px] sm:text-xs font-medium transition-colors ml-auto"
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
            })}
          </motion.div>
        )}
      </motion.section>

      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultProject={selectedProject}
        modalType="brochure"
      />
    </div>
  );
};
