import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, CheckCircle, Download, Calendar, Phone, MessageSquare, Layers, Compass } from 'lucide-react';
import { projectData, WHATSAPP_NUMBER, OFFICE_PHONE_1 } from '../data';
import { InquiryModal } from '../components/ui/InquiryModal';

/* Bento building blocks — every detail sits on one canvas, no hidden tabs. */
const TileLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[10px] font-bold text-akhil-red uppercase tracking-wider block mb-1">{children}</span>
);

const Tile = ({
  className = '',
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5, delay }}
    className={`bg-white p-6 sm:p-8 rounded-2xl border border-akhil-border ${className}`}
  >
    {children}
  </motion.div>
);

export const ProjectDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedFloorPlanIndex, setSelectedFloorPlanIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'visit' | 'brochure'>('visit');

  const project = slug ? projectData[slug] : null;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const openBrochureModal = () => {
    setModalType('brochure');
    setIsModalOpen(true);
  };

  const openVisitModal = () => {
    setModalType('visit');
    setIsModalOpen(true);
  };

  return (
    <div className="bg-akhil-off-white min-h-screen pt-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[420px] sm:min-h-[500px] flex items-end pb-12 sm:pb-16 pt-28 sm:pt-36 overflow-hidden bg-akhil-dark">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={project.heroImage}
            alt={project.name}
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-akhil-dark via-akhil-dark/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="px-2.5 sm:px-3 py-1 bg-akhil-red text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest rounded-md">
                  {project.status}
                </span>
                <span className="px-2.5 sm:px-3 py-1 bg-white/10 text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest rounded-md border border-white/20">
                  {project.category}
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-2">{project.name}</h1>
              <p className="text-akhil-red text-xs sm:text-sm font-semibold flex items-center gap-2 mb-3 sm:mb-4">
                <MapPin size={15} /> {project.locationDetails}
              </p>
              <p className="text-gray-300 text-sm sm:text-base max-w-2xl font-light leading-relaxed">{project.tagline}</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={openVisitModal}
                className="px-6 py-3.5 bg-akhil-red hover:bg-akhil-red-hover text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Calendar size={16} /> Book Site Visit
              </button>
              <button
                onClick={openBrochureModal}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all border border-white/20 flex items-center justify-center gap-2"
              >
                <Download size={16} /> Brochure PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATION QUICK BAR */}
      <section className="bg-white border-b border-akhil-border py-4 sm:py-5 shadow-sm sticky top-[64px] sm:top-[68px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-akhil-charcoal">
            <div className="border-r border-gray-100 pr-2 last:border-0 md:border-r">
              <span className="text-[9px] sm:text-[10px] text-akhil-gray block uppercase font-bold">Configurations</span>
              <strong className="text-xs sm:text-sm font-serif line-clamp-1">{project.configurations.join(', ')}</strong>
            </div>

            <div className="border-r-0 md:border-r border-gray-100 pr-2">
              <span className="text-[9px] sm:text-[10px] text-akhil-gray block uppercase font-bold">Compliance</span>
              <strong className="text-xs sm:text-sm font-serif text-emerald-700 flex items-center gap-1">
                <Compass size={13} /> 100% Vaastu
              </strong>
            </div>

            <div className="border-r border-gray-100 pr-2">
              <span className="text-[9px] sm:text-[10px] text-akhil-gray block uppercase font-bold">Location</span>
              <strong className="text-xs sm:text-sm font-serif line-clamp-1">{project.area}</strong>
            </div>

            <div>
              <span className="text-[9px] sm:text-[10px] text-akhil-gray block uppercase font-bold">Builder</span>
              <strong className="text-xs sm:text-sm font-serif text-akhil-red">CREDAI Member</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BENTO GRID — EVERY PROJECT DETAIL ON A SINGLE CANVAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          {/* About + Highlights */}
          <Tile className="lg:col-span-8" delay={0}>
            <TileLabel>The Development</TileLabel>
            <h3 className="text-2xl sm:text-3xl font-serif text-akhil-charcoal font-bold mb-4">About {project.name}</h3>
            <p className="text-akhil-gray text-sm md:text-base leading-relaxed font-light mb-6">{project.overview}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-akhil-off-white rounded-xl border border-gray-100">
                  <CheckCircle size={18} className="text-akhil-red flex-shrink-0" />
                  <span className="text-xs font-bold text-akhil-charcoal">{item}</span>
                </div>
              ))}
            </div>
          </Tile>

          {/* Direct Enquiry CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-4 bg-akhil-dark text-white p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl flex flex-col"
          >
            <span className="text-akhil-red text-[11px] font-bold tracking-[0.2em] uppercase block mb-2">
              Direct Builder Enquiry
            </span>
            <h4 className="text-2xl font-serif mb-4">Interested in {project.name}?</h4>
            <p className="text-xs text-gray-400 font-light mb-6">
              Schedule a private walk-through or request complete floor plan dimensions and pricing details.
            </p>
            <div className="space-y-3 mt-auto">
              <button
                onClick={openVisitModal}
                className="w-full py-3.5 bg-akhil-red hover:bg-akhil-red-hover text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Calendar size={16} /> Book Site Tour
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Akhil%20Promoters,%20I%20want%20details%20and%20pricing%20for%20${project.name}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare size={16} /> WhatsApp Inquiry
              </a>
              <a
                href={`tel:${OFFICE_PHONE_1}`}
                className="w-full py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all flex items-center justify-center gap-2 border border-white/20"
              >
                <Phone size={16} /> Call {OFFICE_PHONE_1}
              </a>
            </div>
          </motion.div>

          {/* Elevation Render */}
          <Tile className={project.isometricImage ? 'lg:col-span-6' : 'lg:col-span-12'} delay={0.1}>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <TileLabel>Architectural Render</TileLabel>
                <h4 className="text-lg font-serif text-akhil-charcoal font-bold">{project.name} Elevation</h4>
              </div>
              <button
                onClick={openBrochureModal}
                className="px-4 py-2 bg-akhil-off-white hover:bg-akhil-border text-akhil-charcoal text-xs font-bold uppercase rounded-lg transition-colors inline-flex items-center gap-1.5 shrink-0"
              >
                <Download size={13} /> Brochure
              </button>
            </div>
            <div className="rounded-xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center p-2">
              <img
                src={project.exteriorImage || project.heroImage}
                alt={project.name}
                className="max-h-[560px] w-auto object-contain rounded-lg shadow-sm"
              />
            </div>
          </Tile>

          {/* 3D Isometric Layout View */}
          {project.isometricImage && (
            <Tile className="lg:col-span-6" delay={0.15}>
              <div className="mb-4">
                <TileLabel>3D Interior Cutaway</TileLabel>
                <h4 className="text-lg font-serif text-akhil-charcoal font-bold">Isometric Layout Perspective</h4>
              </div>
              <div className="rounded-xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center p-2">
                <img
                  src={project.isometricImage}
                  alt={`${project.name} Isometric View`}
                  className="max-h-[560px] w-auto object-contain rounded-lg shadow-sm"
                />
              </div>
            </Tile>
          )}

          {/* Floor Plans */}
          {project.floorPlans.length > 0 && (
            <Tile className="lg:col-span-12" delay={0.1}>
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <TileLabel>Architectural Layout Diagrams</TileLabel>
                  <h3 className="text-2xl font-serif text-akhil-charcoal font-bold">
                    Floor Plans ({project.floorPlans.length})
                  </h3>
                </div>
                <button
                  onClick={openBrochureModal}
                  className="px-4 py-2 bg-akhil-charcoal hover:bg-akhil-red text-white text-xs font-bold uppercase rounded-xl transition-colors inline-flex items-center gap-1.5"
                >
                  <Download size={13} /> Request PDF
                </button>
              </div>

              {project.floorPlans.length > 1 && (
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  {project.floorPlans.map((plan, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedFloorPlanIndex(idx)}
                      className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all ${
                        selectedFloorPlanIndex === idx
                          ? 'bg-akhil-red text-white shadow-md'
                          : 'bg-akhil-off-white text-akhil-charcoal hover:bg-akhil-border'
                      }`}
                    >
                      {plan.title} ({plan.size})
                    </button>
                  ))}
                </div>
              )}

              {project.floorPlans[selectedFloorPlanIndex] && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-7 bg-akhil-off-white p-4 sm:p-6 rounded-2xl border border-akhil-border">
                    <h4 className="text-base font-serif text-akhil-charcoal font-bold mb-4">
                      {project.floorPlans[selectedFloorPlanIndex].title} ({project.floorPlans[selectedFloorPlanIndex].size})
                    </h4>
                    {(project.floorPlans[selectedFloorPlanIndex].image || project.floorPlanImage) ? (
                      <div className="p-3 bg-white rounded-xl shadow-inner border border-gray-200 flex items-center justify-center overflow-hidden">
                        <img
                          src={project.floorPlans[selectedFloorPlanIndex].image || project.floorPlanImage}
                          alt={`${project.name} ${project.floorPlans[selectedFloorPlanIndex].title}`}
                          className="max-h-[600px] w-auto object-contain rounded-lg"
                        />
                      </div>
                    ) : (
                      <div className="p-8 bg-white rounded-xl shadow-inner border border-gray-200 text-center">
                        <Layers size={48} className="mx-auto text-akhil-red opacity-80 mb-4" />
                        <p className="text-xs text-akhil-gray">
                          Total Area: <strong>{project.floorPlans[selectedFloorPlanIndex].size}</strong>
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-5 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-akhil-charcoal mb-4">
                      Exact Room Dimensions ({project.floorPlans[selectedFloorPlanIndex].size})
                    </h4>
                    {[
                      ['Master Bedroom', project.floorPlans[selectedFloorPlanIndex].dimensions.masterBedroom],
                      ['Guest Bedroom', project.floorPlans[selectedFloorPlanIndex].dimensions.guestBedroom],
                      ['Children Bedroom', project.floorPlans[selectedFloorPlanIndex].dimensions.childrenBedroom],
                      ['Drawing Hall', project.floorPlans[selectedFloorPlanIndex].dimensions.drawingHall],
                      ['Dining Hall', project.floorPlans[selectedFloorPlanIndex].dimensions.dining],
                      ['Kitchen & Utility', project.floorPlans[selectedFloorPlanIndex].dimensions.kitchen],
                    ].map(([label, value]) => (
                      <div key={label} className="p-3 bg-akhil-off-white rounded-xl flex justify-between gap-3 text-xs">
                        <span className="text-akhil-gray font-medium">{label}:</span>
                        <strong className="text-akhil-charcoal text-right">{value}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Tile>
          )}

          {/* Specifications */}
          <Tile className="lg:col-span-7" delay={0.1}>
            <TileLabel>Build Quality</TileLabel>
            <h3 className="text-2xl font-serif text-akhil-charcoal font-bold mb-6">Construction Specifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(project.specifications).map(([key, val]) => (
                <div key={key} className="p-5 bg-akhil-off-white rounded-xl border border-akhil-border">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-akhil-red mb-2">{key}</h4>
                  <p className="text-xs text-akhil-charcoal font-light leading-relaxed">{val}</p>
                </div>
              ))}
            </div>
          </Tile>

          {/* Location & Map */}
          <Tile className="lg:col-span-5" delay={0.15}>
            <TileLabel>Connectivity</TileLabel>
            <h3 className="text-2xl font-serif text-akhil-charcoal font-bold mb-2">Location &amp; Surroundings</h3>
            <p className="text-xs text-akhil-gray mb-6">{project.siteAddress}</p>

            {project.locationMapImage && (
              <div className="rounded-xl overflow-hidden bg-white p-3 border border-gray-100 flex items-center justify-center mb-6">
                <img
                  src={project.locationMapImage}
                  alt={`${project.name} Location Map`}
                  className="max-h-[420px] w-auto object-contain rounded-lg"
                />
              </div>
            )}

            <div className="grid grid-cols-1 gap-3">
              {project.locationHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-akhil-off-white rounded-xl border border-gray-100">
                  <MapPin size={18} className="text-akhil-red flex-shrink-0" />
                  <span className="text-xs font-bold text-akhil-charcoal">{highlight}</span>
                </div>
              ))}
            </div>
          </Tile>

          {/* Architects & Engineers */}
          {project.architects && (
            <Tile className="lg:col-span-12" delay={0.1}>
              <TileLabel>Architectural &amp; Engineering Panel</TileLabel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                {project.architects.design && (
                  <div className="p-4 bg-akhil-off-white rounded-xl border border-gray-100">
                    <span className="text-[10px] font-bold uppercase text-akhil-gray block mb-1">Design Architects</span>
                    <strong className="text-xs font-serif text-akhil-charcoal block">{project.architects.design}</strong>
                  </div>
                )}
                {project.architects.structural && (
                  <div className="p-4 bg-akhil-off-white rounded-xl border border-gray-100">
                    <span className="text-[10px] font-bold uppercase text-akhil-gray block mb-1">Structural Engineers</span>
                    <strong className="text-xs font-serif text-akhil-charcoal block">{project.architects.structural}</strong>
                  </div>
                )}
                {project.architects.interiors && (
                  <div className="p-4 bg-akhil-off-white rounded-xl border border-gray-100">
                    <span className="text-[10px] font-bold uppercase text-akhil-gray block mb-1">Elevations &amp; Interiors</span>
                    <strong className="text-xs font-serif text-akhil-charcoal block">{project.architects.interiors}</strong>
                  </div>
                )}
              </div>
            </Tile>
          )}
        </div>
      </section>

      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultProject={project.name}
        modalType={modalType}
      />
    </div>
  );
};
