import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Search, Filter, ArrowRight, Download, Building } from 'lucide-react';
import { projectData } from '../data';
import { InquiryModal } from '../components/ui/InquiryModal';
import {
  staggerContainer,
  fadeInUp,
  itemFadeUp,
  viewportConfig,
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
              className="text-3xl sm:text-5xl md:text-6xl font-serif mb-3 sm:mb-4"
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
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-akhil-border shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center gap-3 sm:gap-4 justify-between">
          {/* Search Input */}
          <div className="relative w-full lg:w-96">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search project, location, flat size..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-akhil-off-white border border-akhil-border rounded-xl text-xs sm:text-sm focus:outline-none focus:border-akhil-red"
            />
          </div>

          {/* Category & Status Filters */}
          <div className="flex items-center gap-2 sm:gap-3 w-full lg:w-auto overflow-x-auto no-scrollbar">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="flex-1 lg:flex-none px-3.5 py-2.5 bg-akhil-off-white border border-akhil-border rounded-xl text-xs font-bold text-akhil-charcoal focus:outline-none"
            >
              <option value="ALL">All Categories</option>
              <option value="Apartments">Apartments</option>
              <option value="Villas">Villas</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="flex-1 lg:flex-none px-3.5 py-2.5 bg-akhil-off-white border border-akhil-border rounded-xl text-xs font-bold text-akhil-charcoal focus:outline-none"
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemFadeUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white rounded-2xl overflow-hidden border border-akhil-border hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img
                    src={project.heroImage}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-akhil-dark/80 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase rounded-md">
                      {project.status}
                    </span>
                    <span className="px-3 py-1 bg-akhil-red text-white text-[10px] font-bold tracking-widest uppercase rounded-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-akhil-red text-xs font-semibold mb-2">
                      <MapPin size={14} /> {project.location}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-akhil-charcoal mb-2 group-hover:text-akhil-red transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-akhil-gray text-xs leading-relaxed line-clamp-2 mb-6">
                      {project.overview}
                    </p>

                    <div className="grid grid-cols-2 gap-3 py-3 border-y border-gray-100 mb-6 text-xs text-akhil-charcoal">
                      <div>
                        <span className="text-[10px] text-akhil-gray block uppercase">Sizes</span>
                        <strong className="font-semibold">{project.configurations.join(', ')}</strong>
                      </div>
                      <div>
                        <span className="text-[10px] text-akhil-gray block uppercase">Compliance</span>
                        <strong className="font-semibold">100% Vaastu</strong>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="flex-1 py-3 bg-akhil-charcoal hover:bg-akhil-red text-white text-xs font-bold tracking-wider uppercase rounded-xl text-center transition-colors flex items-center justify-center gap-2"
                    >
                      View Specs <ArrowRight size={14} />
                    </Link>
                    {project.brochureUrl ? (
                      <a
                        href={project.brochureUrl}
                        download={`Akhil-Promoters-${project.name}-Brochure.pdf`}
                        className="py-3 px-3 bg-akhil-off-white hover:bg-akhil-border text-akhil-charcoal rounded-xl transition-colors"
                        title={`Download ${project.name} brochure`}
                      >
                        <Download size={16} />
                      </a>
                    ) : (
                      <button
                        onClick={() => handleOpenBrochureModal(project.name)}
                        className="py-3 px-3 bg-akhil-off-white hover:bg-akhil-border text-akhil-charcoal rounded-xl transition-colors"
                        title="Request Brochure"
                      >
                        <Download size={16} />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </main>

      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultProject={selectedProject}
        modalType="brochure"
      />
    </div>
  );
};
