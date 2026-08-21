import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Building, ShieldCheck, CheckCircle, Download, Calendar, Phone, MessageSquare, ArrowLeft, Layers, Compass, UserCheck } from 'lucide-react';
import { projectData, WHATSAPP_NUMBER, OFFICE_PHONE_1 } from '../data';
import { InquiryModal } from '../components/ui/InquiryModal';

export const ProjectDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'floorplans' | 'specs' | 'location'>('overview');
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
      {/* 1. HERO BANNER */}
      <section className="relative bg-akhil-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <img src={project.heroImage} alt={project.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-akhil-dark via-akhil-dark/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold text-akhil-gray hover:text-white uppercase tracking-widest mb-6 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-akhil-red text-white text-[10px] font-bold uppercase tracking-widest rounded-md">
                  {project.status}
                </span>
                <span className="px-3 py-1 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-md border border-white/20">
                  {project.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-2">{project.name}</h1>
              <p className="text-akhil-red text-sm font-semibold flex items-center gap-2 mb-4">
                <MapPin size={16} /> {project.locationDetails}
              </p>
              <p className="text-gray-300 text-base max-w-2xl font-light">{project.tagline}</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
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
      <section className="bg-white border-b border-akhil-border py-6 shadow-sm sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-between gap-6 text-xs text-akhil-charcoal">
            <div>
              <span className="text-[10px] text-akhil-gray block uppercase font-bold">Configurations</span>
              <strong className="text-sm font-serif">{project.configurations.join(', ')}</strong>
            </div>

            <div>
              <span className="text-[10px] text-akhil-gray block uppercase font-bold">Compliance</span>
              <strong className="text-sm font-serif text-emerald-700 flex items-center gap-1">
                <Compass size={14} /> 100% Vaastu Compliant
              </strong>
            </div>

            <div>
              <span className="text-[10px] text-akhil-gray block uppercase font-bold">Location</span>
              <strong className="text-sm font-serif">{project.area}, Vijayawada</strong>
            </div>

            <div>
              <span className="text-[10px] text-akhil-gray block uppercase font-bold">Builder</span>
              <strong className="text-sm font-serif text-akhil-red">Akhil Promoters (CREDAI)</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN NAVIGATION TABS & CONTENT */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-4 border-b border-akhil-border mb-10 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-4 text-xs font-bold tracking-wider uppercase transition-colors whitespace-nowrap border-b-2 ${
              activeTab === 'overview'
                ? 'border-akhil-red text-akhil-red'
                : 'border-transparent text-akhil-gray hover:text-akhil-charcoal'
            }`}
          >
            Project Overview
          </button>
          {project.floorPlans.length > 0 && (
            <button
              onClick={() => setActiveTab('floorplans')}
              className={`pb-4 text-xs font-bold tracking-wider uppercase transition-colors whitespace-nowrap border-b-2 ${
                activeTab === 'floorplans'
                  ? 'border-akhil-red text-akhil-red'
                  : 'border-transparent text-akhil-gray hover:text-akhil-charcoal'
              }`}
            >
              Floor Plans ({project.floorPlans.length})
            </button>
          )}
          <button
            onClick={() => setActiveTab('specs')}
            className={`pb-4 text-xs font-bold tracking-wider uppercase transition-colors whitespace-nowrap border-b-2 ${
              activeTab === 'specs'
                ? 'border-akhil-red text-akhil-red'
                : 'border-transparent text-akhil-gray hover:text-akhil-charcoal'
            }`}
          >
            Construction Specifications
          </button>
          <button
            onClick={() => setActiveTab('location')}
            className={`pb-4 text-xs font-bold tracking-wider uppercase transition-colors whitespace-nowrap border-b-2 ${
              activeTab === 'location'
                ? 'border-akhil-red text-akhil-red'
                : 'border-transparent text-akhil-gray hover:text-akhil-charcoal'
            }`}
          >
            Location Map & Highlights
          </button>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-10">
              {/* Project Description */}
              <div className="bg-white p-8 rounded-2xl border border-akhil-border">
                <h3 className="text-2xl font-serif text-akhil-charcoal mb-4">About {project.name}</h3>
                <p className="text-akhil-gray text-sm md:text-base leading-relaxed font-light mb-6">
                  {project.overview}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-akhil-off-white rounded-xl border border-gray-100">
                      <CheckCircle size={18} className="text-akhil-red flex-shrink-0" />
                      <span className="text-xs font-bold text-akhil-charcoal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Elevation Render */}
              <div className="bg-white p-4 rounded-2xl border border-akhil-border overflow-hidden">
                <h4 className="text-sm font-bold text-akhil-charcoal mb-3">Elevation & Render View</h4>
                <img
                  src={project.heroImage}
                  alt={project.name}
                  className="w-full rounded-xl object-cover aspect-[16/9]"
                />
              </div>

              {/* Architects & Engineers */}
              {project.architects && (
                <div className="bg-white p-8 rounded-2xl border border-akhil-border">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-akhil-red mb-6">
                    Architectural & Engineering Panel
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {project.architects.design && (
                      <div className="p-4 bg-akhil-off-white rounded-xl border border-gray-100">
                        <span className="text-[10px] font-bold uppercase text-akhil-gray block mb-1">
                          Design Architects
                        </span>
                        <strong className="text-xs font-serif text-akhil-charcoal block">
                          {project.architects.design}
                        </strong>
                      </div>
                    )}
                    {project.architects.structural && (
                      <div className="p-4 bg-akhil-off-white rounded-xl border border-gray-100">
                        <span className="text-[10px] font-bold uppercase text-akhil-gray block mb-1">
                          Structural Engineers
                        </span>
                        <strong className="text-xs font-serif text-akhil-charcoal block">
                          {project.architects.structural}
                        </strong>
                      </div>
                    )}
                    {project.architects.interiors && (
                      <div className="p-4 bg-akhil-off-white rounded-xl border border-gray-100">
                        <span className="text-[10px] font-bold uppercase text-akhil-gray block mb-1">
                          Elevations & Interiors
                        </span>
                        <strong className="text-xs font-serif text-akhil-charcoal block">
                          {project.architects.interiors}
                        </strong>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar CTA Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-akhil-dark text-white p-8 rounded-2xl border border-white/10 shadow-xl">
                <span className="text-akhil-red text-[11px] font-bold tracking-[0.2em] uppercase block mb-2">
                  DIRECT BUILDER ENQUIRY
                </span>
                <h4 className="text-2xl font-serif mb-4">Interested in {project.name}?</h4>
                <p className="text-xs text-gray-400 font-light mb-6">
                  Schedule a private walk-through or request complete floor plan dimensions and pricing details.
                </p>

                <div className="space-y-3">
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
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: FLOOR PLANS */}
        {activeTab === 'floorplans' && project.floorPlans.length > 0 && (
          <div className="bg-white p-8 rounded-2xl border border-akhil-border">
            <div className="flex flex-wrap items-center gap-3 mb-8">
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

            {/* Selected Plan Details */}
            {project.floorPlans[selectedFloorPlanIndex] && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 bg-akhil-off-white p-6 rounded-2xl border border-akhil-border text-center">
                  <span className="text-xs font-bold text-akhil-red uppercase block mb-2">
                    Floor Plan Layout & Room Dimensions
                  </span>
                  <div className="p-8 bg-white rounded-xl shadow-inner border border-gray-200">
                    <Layers size={48} className="mx-auto text-akhil-red opacity-80 mb-4" />
                    <h4 className="text-xl font-serif text-akhil-charcoal font-bold mb-2">
                      {project.floorPlans[selectedFloorPlanIndex].title}
                    </h4>
                    <p className="text-xs text-akhil-gray mb-6">
                      Total Area: <strong>{project.floorPlans[selectedFloorPlanIndex].size}</strong>
                    </p>
                    <button
                      onClick={openBrochureModal}
                      className="px-6 py-3 bg-akhil-charcoal hover:bg-akhil-red text-white text-xs font-bold uppercase rounded-xl transition-colors inline-flex items-center gap-2"
                    >
                      <Download size={14} /> Request HD 2D/3D Floor Plan PDF
                    </button>
                  </div>
                </div>

                {/* Room Dimensions Table */}
                <div className="lg:col-span-5 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-akhil-charcoal mb-4">
                    Exact Room Dimensions ({project.floorPlans[selectedFloorPlanIndex].size})
                  </h4>

                  <div className="p-3 bg-akhil-off-white rounded-xl flex justify-between text-xs">
                    <span className="text-akhil-gray font-medium">Master Bedroom:</span>
                    <strong className="text-akhil-charcoal">{project.floorPlans[selectedFloorPlanIndex].dimensions.masterBedroom}</strong>
                  </div>

                  <div className="p-3 bg-akhil-off-white rounded-xl flex justify-between text-xs">
                    <span className="text-akhil-gray font-medium">Guest Bedroom:</span>
                    <strong className="text-akhil-charcoal">{project.floorPlans[selectedFloorPlanIndex].dimensions.guestBedroom}</strong>
                  </div>

                  <div className="p-3 bg-akhil-off-white rounded-xl flex justify-between text-xs">
                    <span className="text-akhil-gray font-medium">Children's Bedroom:</span>
                    <strong className="text-akhil-charcoal">{project.floorPlans[selectedFloorPlanIndex].dimensions.childrenBedroom}</strong>
                  </div>

                  <div className="p-3 bg-akhil-off-white rounded-xl flex justify-between text-xs">
                    <span className="text-akhil-gray font-medium">Drawing Hall:</span>
                    <strong className="text-akhil-charcoal">{project.floorPlans[selectedFloorPlanIndex].dimensions.drawingHall}</strong>
                  </div>

                  <div className="p-3 bg-akhil-off-white rounded-xl flex justify-between text-xs">
                    <span className="text-akhil-gray font-medium">Dining Hall:</span>
                    <strong className="text-akhil-charcoal">{project.floorPlans[selectedFloorPlanIndex].dimensions.dining}</strong>
                  </div>

                  <div className="p-3 bg-akhil-off-white rounded-xl flex justify-between text-xs">
                    <span className="text-akhil-gray font-medium">Kitchen & Utility:</span>
                    <strong className="text-akhil-charcoal">{project.floorPlans[selectedFloorPlanIndex].dimensions.kitchen}</strong>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: SPECIFICATIONS */}
        {activeTab === 'specs' && (
          <div className="bg-white p-8 rounded-2xl border border-akhil-border space-y-6">
            <h3 className="text-2xl font-serif text-akhil-charcoal mb-4">Construction Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(project.specifications).map(([key, val]) => (
                <div key={key} className="p-5 bg-akhil-off-white rounded-xl border border-akhil-border">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-akhil-red mb-2">{key}</h4>
                  <p className="text-xs text-akhil-charcoal font-light leading-relaxed">{val}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: LOCATION MAP */}
        {activeTab === 'location' && (
          <div className="bg-white p-8 rounded-2xl border border-akhil-border space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-akhil-charcoal mb-2">Location Map & Surroundings</h3>
              <p className="text-xs text-akhil-gray mb-6">{project.siteAddress}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.locationHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-akhil-off-white rounded-xl border border-gray-100">
                  <MapPin size={18} className="text-akhil-red flex-shrink-0" />
                  <span className="text-xs font-bold text-akhil-charcoal">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}
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
