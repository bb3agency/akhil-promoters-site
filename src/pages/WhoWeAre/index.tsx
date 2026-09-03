import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  Eye,
  Target,
  Compass,
  Building,
  CheckCircle,
  Zap,
  Star,
  User,
  ArrowRight,
  MapPin,
  Calendar,
  Phone,
  Layers,
  Wrench,
  Lightbulb,
  TrendingUp
} from 'lucide-react';
import { OFFICE_ADDRESS, OFFICE_PHONE_1, WHATSAPP_NUMBER } from '../../data';
import {
  staggerContainer,
  fadeInUp,
  itemFadeUp,
  viewportConfig,
  sectionScrollProps,
} from '../../utils/motion';

export const WhoWeAre = () => {
  return (
    <div className="bg-[#F7F5F0] min-h-screen pt-20 pb-20">
      {/* ── 1. HERO HEADER ───────────────────────────────── */}
      <section className="bg-[#181714] text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <img
            src="/images/projects/blueberry-1.jpg"
            alt="Akhil Promoters Developments"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181714] via-[#181714]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemFadeUp} className="flex items-center gap-2 mb-4">
              <span className="type-label text-[#C8102E] tracking-[0.25em] uppercase text-[10px] sm:text-xs">
                WHO WE ARE
              </span>
              <span className="w-8 h-px bg-[#C8102E]/60" />
              <span className="type-label text-white/50 text-[10px] sm:text-xs uppercase">
                CREDAI MEMBER BUILDER
              </span>
            </motion.div>

            <motion.h1
              variants={itemFadeUp}
              className="text-white text-3xl sm:text-5xl lg:text-6xl max-w-3xl mb-6"
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontWeight: 500,
                lineHeight: 1.1,
              }}
            >
              Building Legacies of Trust &amp; Architectural Distinction
            </motion.h1>

            <motion.p
              variants={itemFadeUp}
              className="text-white/60 text-sm sm:text-base max-w-2xl font-light leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Akhil Promoters Private Limited is one of Vijayawada's premier residential real estate developers — dedicated to creating enduring 3 BHK residences and signature communities with 100% Vaastu compliance, legal clarity, and world-class craftsmanship.
            </motion.p>

            <motion.div variants={itemFadeUp} className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="type-label px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white transition-colors text-xs border border-white/20"
              >
                Direct Advisory Chat
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. COMPANY PROFILE & FOUNDING STORY ──────────── */}
      <motion.section
        {...sectionScrollProps}
        className="py-16 sm:py-24 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Story Text */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-7 space-y-6"
          >
            <motion.div variants={itemFadeUp} className="flex items-center gap-2">
              <span className="type-label text-[#C8102E] text-[10px] uppercase tracking-widest">
                01. COMPANY PROFILE
              </span>
            </motion.div>

            <motion.h2
              variants={itemFadeUp}
              className="text-3xl sm:text-4xl text-[#181714]"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500 }}
            >
              Crafting Exceptional Homes Across Vijayawada
            </motion.h2>

            <motion.p variants={itemFadeUp} className="type-body text-[#4A4640] leading-relaxed text-sm sm:text-base font-light">
              Akhil Promoters Private Limited was established with a foundational commitment: that every homeowner in Vijayawada deserves a residence built with uncompromised material integrity, precise engineering, and architectural elegance.
            </motion.p>

            <motion.p variants={itemFadeUp} className="type-body text-[#4A4640] leading-relaxed text-sm sm:text-base font-light">
              As an accredited member of <strong>CREDAI (Confederation of Real Estate Developers' Associations of India)</strong>, we uphold the highest standard of corporate ethics. We collaborate exclusively with acclaimed architectural firms — including <strong>Clark Lloyd International</strong> and <strong>D+D Architecture</strong> — and premier structural consultants to ensure each structure is seismically resilient and functionally timeless.
            </motion.p>

            {/* Development Portfolio Highlights */}
            <motion.div variants={itemFadeUp} className="pt-4 space-y-3">
              <h3 className="type-label text-xs text-[#181714] uppercase tracking-wider mb-2">
                Featured Developments
              </h3>
              <motion.div variants={staggerContainer(0.08)} className="space-y-3">
                {[
                  { name: 'Blueberry', location: 'Ayodhya Nagar, Vijayawada', type: '3 BHK Luxury Residences (1930–2020 SFT)', status: 'Ongoing', href: '/projects/blueberry' },
                  { name: 'Apple', location: 'Mahadevpuram Colony, Kanuru', type: '3 BHK Premium Flats (1445 SFT)', status: 'Ongoing', href: '/projects/apple' },
                  { name: 'Cherry', location: 'Varalakshmi Puram, Kanuru', type: '3 BHK Residences (1625 SFT)', status: 'Completed', href: '/projects/cherry' },
                  { name: 'Daffodils', location: 'Poranki / Tadigadapa', type: '3 BHK Modern Apartments', status: 'Ongoing', href: '/projects/daffodils' },
                ].map((proj) => (
                  <motion.div
                    key={proj.name}
                    variants={itemFadeUp}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="p-4 bg-white border border-[#E8E4DC] flex items-center justify-between gap-4 hover:border-[#C8102E]/40 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-lg font-medium text-[#181714]">{proj.name}</span>
                        <span className={`type-label text-[9px] px-2 py-0.5 rounded-sm ${proj.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-[#C8102E]/10 text-[#C8102E]'}`}>
                          {proj.status}
                        </span>
                      </div>
                      <p className="text-xs text-[#8A8580] mt-0.5">{proj.location} · {proj.type}</p>
                    </div>
                    <Link to={proj.href} className="text-[#C8102E] hover:text-[#A50D24] p-1">
                      <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Company Registration Card */}
          <motion.div
            variants={fadeInUp(0.65, 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#181714] text-white p-7 sm:p-8 rounded-sm shadow-lg">
              <p className="type-label text-[#C8102E] text-[10px] uppercase mb-5 tracking-widest">
                Official Entity Details
              </p>
              <div className="space-y-4 text-xs sm:text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                <div className="border-b border-white/10 pb-3">
                  <span className="text-white/40 block text-[10px] type-label mb-1">Corporate Name</span>
                  <span className="text-white font-medium">Akhil Promoters Private Limited</span>
                </div>
                <div className="border-b border-white/10 pb-3">
                  <span className="text-white/40 block text-[10px] type-label mb-1">Apex Association</span>
                  <span className="text-white font-medium flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-[#C8102E]" /> CREDAI Vijayawada Chapter
                  </span>
                </div>
                <div className="border-b border-white/10 pb-3">
                  <span className="text-white/40 block text-[10px] type-label mb-1">Registered Office</span>
                  <span className="text-white/80 leading-relaxed block">{OFFICE_ADDRESS}</span>
                </div>
                <div className="border-b border-white/10 pb-3">
                  <span className="text-white/40 block text-[10px] type-label mb-1">Architectural Panel</span>
                  <span className="text-white/80">Clark Lloyd International · D+D Architecture</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] type-label mb-1">Structural Engineering</span>
                  <span className="text-white/80">VAP Engineers (I) Pvt. Ltd. · Anne Raghu Ram</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white border border-[#E8E4DC] flex items-start gap-4">
              <ShieldCheck size={24} className="text-[#C8102E] flex-shrink-0 mt-0.5" />
              <div>
                <p className="type-label text-[10px] text-[#C8102E] uppercase mb-1">CREDAI Assurance</p>
                <p className="text-xs sm:text-sm text-[#8A8580] leading-relaxed font-light">
                  Every property delivered by Akhil Promoters carries 100% legal title clearance, approved municipal plans, and strict RERA ethical compliance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ── 3. VISION & MISSION ──────────────────────────── */}
      <motion.section
        {...sectionScrollProps}
        className="py-16 sm:py-24 bg-white border-y border-[#E8E4DC] overflow-hidden"
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
          >
            <motion.span variants={itemFadeUp} className="type-label text-[#C8102E] text-[10px] uppercase tracking-widest block mb-2">
              02. GUIDING PHILOSOPHY
            </motion.span>
            <motion.h2
              variants={itemFadeUp}
              className="text-3xl sm:text-4xl text-[#181714]"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500 }}
            >
              Our Vision &amp; Mission
            </motion.h2>
            <motion.p variants={itemFadeUp} className="text-xs sm:text-sm text-[#8A8580] font-light mt-2">
              The enduring principles that steer our architectural design, construction quality, and customer relationships.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          >
            {/* Vision */}
            <motion.div
              variants={itemFadeUp}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="p-8 sm:p-10 bg-[#F7F5F0] border border-[#E8E4DC] rounded-sm hover:border-[#C8102E]/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-[#C8102E]/10 text-[#C8102E] flex items-center justify-center mb-6 group-hover:bg-[#C8102E] group-hover:text-white transition-colors">
                <Eye size={24} />
              </div>
              <h3
                className="text-2xl text-[#181714] mb-3 group-hover:text-[#C8102E] transition-colors"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 600 }}
              >
                Our Vision
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4640] leading-relaxed font-light">
                To be the most trusted and admired residential developer in Andhra Pradesh — renowned for delivering homes that set new benchmarks for construction excellence, aesthetic refinement, and enduring family value.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              variants={itemFadeUp}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="p-8 sm:p-10 bg-[#F7F5F0] border border-[#E8E4DC] rounded-sm hover:border-[#C8102E]/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-[#C8102E]/10 text-[#C8102E] flex items-center justify-center mb-6 group-hover:bg-[#C8102E] group-hover:text-white transition-colors">
                <Target size={24} />
              </div>
              <h3
                className="text-2xl text-[#181714] mb-3 group-hover:text-[#C8102E] transition-colors"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 600 }}
              >
                Our Mission
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4640] leading-relaxed font-light">
                To build high-quality, 100% Vaastu-compliant homes using certified branded materials, designed by leading architectural experts, and supported by complete legal transparency from initial booking to final possession.
              </p>
            </motion.div>
          </motion.div>

          {/* Pillars of Innovation */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
          >
            <motion.div variants={itemFadeUp} className="p-6 bg-[#F7F5F0] border border-[#E8E4DC] flex items-start gap-4">
              <Lightbulb size={22} className="text-[#C8102E] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-lg text-[#181714] font-medium mb-1">Architectural Innovation</h4>
                <p className="text-xs text-[#8A8580] leading-relaxed font-light">
                  Partnering with international elevation designers to create distinctive modern facades with natural light and ventilation.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemFadeUp} className="p-6 bg-[#F7F5F0] border border-[#E8E4DC] flex items-start gap-4">
              <TrendingUp size={22} className="text-[#C8102E] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-lg text-[#181714] font-medium mb-1">Appreciating Asset Value</h4>
                <p className="text-xs text-[#8A8580] leading-relaxed font-light">
                  Strategic locations in Vijayawada growth corridors (Kanuru, Ayodhya Nagar) that deliver superior capital appreciation.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ── 4. VALUES & 6 QUALITY STANDARDS ──────────────── */}
      <motion.section
        {...sectionScrollProps}
        className="py-16 sm:py-24 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 overflow-hidden"
      >
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <motion.span variants={itemFadeUp} className="type-label text-[#C8102E] text-[10px] uppercase tracking-widest block mb-2">
            03. CONSTRUCTION STANDARDS
          </motion.span>
          <motion.h2
            variants={itemFadeUp}
            className="text-3xl sm:text-4xl text-[#181714]"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500 }}
          >
            Our Core Quality Pillars
          </motion.h2>
          <motion.p variants={itemFadeUp} className="text-xs sm:text-sm text-[#8A8580] font-light mt-2">
            The six non-negotiable benchmarks engineered into every foundation, beam, and finish.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            {
              icon: ShieldCheck,
              title: 'CREDAI Member Builder',
              desc: 'Member of CREDAI Vijayawada, maintaining strict compliance with ethical codes, consumer rights, and transparent documentation.'
            },
            {
              icon: Compass,
              title: '100% Vaastu Compliance',
              desc: 'Every flat is designed with scientific Vaastu orientation for entrance, kitchen, master bedroom, and positive cross-ventilation.'
            },
            {
              icon: Star,
              title: 'Premium Branded Materials',
              desc: 'Finolex/Havells copper wiring, Jaquar CP fittings, Legrand/GM switches, and genuine teak wood joinery in all homes.'
            },
            {
              icon: Building,
              title: 'Seismic-Resistant RCC',
              desc: 'Engineered with high-grade RCC frames designed to resist seismic and wind load forces in strict conformance with IS codes.'
            },
            {
              icon: CheckCircle,
              title: 'Clear Title & Legal Clarity',
              desc: 'Zero legal ambiguity — approved municipal building permissions, clean title deeds, and full RERA compliance.'
            },
            {
              icon: Zap,
              title: 'Automatic Lifts & Backup',
              desc: 'Johnson 6-passenger automatic elevators, plus sound-proof generator power backup for lifts, motors, and interior essential points.'
            }
          ].map((val, idx) => (
            <motion.div
              key={idx}
              variants={itemFadeUp}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="p-7 bg-white border border-[#E8E4DC] rounded-sm hover:shadow-md hover:border-[#C8102E]/30 transition-all group"
            >
              <div className="w-11 h-11 rounded-lg bg-[#C8102E]/10 text-[#C8102E] flex items-center justify-center mb-5 group-hover:bg-[#C8102E] group-hover:text-white transition-colors">
                <val.icon size={20} />
              </div>
              <h3
                className="text-lg text-[#181714] mb-2 font-serif font-medium group-hover:text-[#C8102E] transition-colors"
              >
                {val.title}
              </h3>
              <p className="text-xs text-[#8A8580] leading-relaxed font-light">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── 5. ARCHITECTURAL & ENGINEERING PANEL ─────────── */}
      <motion.section
        {...sectionScrollProps}
        className="py-16 sm:py-24 bg-[#181714] text-white overflow-hidden"
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
          >
            <motion.span variants={itemFadeUp} className="type-label text-[#C8102E] text-[10px] uppercase tracking-widest block mb-2">
              04. TECHNICAL EXPERTISE
            </motion.span>
            <motion.h2
              variants={itemFadeUp}
              className="text-3xl sm:text-4xl text-white"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500 }}
            >
              Architects &amp; Structural Consultants
            </motion.h2>
            <motion.p variants={itemFadeUp} className="text-xs sm:text-sm text-white/50 font-light mt-2">
              Collaborating with Andhra Pradesh's most respected architectural practices and structural design engineers.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {[
              {
                icon: Award,
                name: 'Clark Lloyd International',
                lead: 'S. Rajeshwara Rao (Principal Architect)',
                category: 'Design & Elevation Architecture',
                desc: 'Acclaimed architectural practice providing signature elevations, functional layouts, and modern aesthetics across flagship developments.'
              },
              {
                icon: Layers,
                name: 'D+D Architecture',
                lead: 'K. Ramesh (Elevation Designer)',
                category: 'Contemporary Residential Design',
                desc: 'Visakhapatnam-based design studio crafting distinctive contemporary facades, optimized interior lighting, and ventilation planning.'
              },
              {
                icon: Wrench,
                name: 'VAP Engineers (I) Pvt. Ltd.',
                lead: 'Structural Design Panel',
                category: 'Structural Engineering',
                desc: 'Leading engineering consultancy responsible for RCC structural load calculations, wind analysis, and seismic compliance.'
              },
              {
                icon: ShieldCheck,
                name: 'Anne Raghu Ram',
                lead: 'Principal Structural Consultant',
                category: 'Structural Safety & Quality',
                desc: 'Veteran Vijayawada structural engineer overseeing foundation engineering, concrete mix validation, and structural integrity audits.'
              }
            ].map((lead, idx) => (
              <motion.div
                key={idx}
                variants={itemFadeUp}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="p-7 bg-white/5 border border-white/10 rounded-sm hover:border-[#C8102E]/50 transition-colors group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#C8102E]/15 text-[#C8102E] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8102E] group-hover:text-white transition-colors">
                    <lead.icon size={22} />
                  </div>
                  <div>
                    <span className="type-label text-[9px] text-[#C8102E] uppercase tracking-wider block mb-1">
                      {lead.category}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl text-white font-medium">{lead.name}</h3>
                    <p className="text-xs text-white/60 font-light mt-0.5">{lead.lead}</p>
                  </div>
                </div>
                <p className="text-xs text-white/50 leading-relaxed font-light">
                  {lead.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── 6. BRANDED MATERIALS & SPECIFICATIONS ────────── */}
      <motion.section
        {...sectionScrollProps}
        className="py-16 sm:py-24 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 overflow-hidden"
      >
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <motion.span variants={itemFadeUp} className="type-label text-[#C8102E] text-[10px] uppercase tracking-widest block mb-2">
            05. TRUSTED BRANDS
          </motion.span>
          <motion.h2
            variants={itemFadeUp}
            className="text-3xl sm:text-4xl text-[#181714]"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500 }}
          >
            Branded Material Specifications
          </motion.h2>
          <motion.p variants={itemFadeUp} className="text-xs sm:text-sm text-[#8A8580] font-light mt-2">
            We partner only with industry-leading manufacturers for certified quality and warranty coverage.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {[
            { label: 'Electrical Wiring', brand: 'Finolex / Havells', note: 'ISI Flame-Retardant Copper' },
            { label: 'CP Fittings', brand: 'Jaquar', note: 'Premium Bathroom Fixtures' },
            { label: 'Modular Switches', brand: 'Legrand / GM', note: 'Safe Modular Accessories' },
            { label: 'Elevators', brand: 'Johnson Lifts', note: '6-Passenger Automatic' },
            { label: 'Main Joinery', brand: 'Teak Wood', note: 'Solid Teak Frames & Shutters' },
            { label: 'Industry Body', brand: 'CREDAI', note: 'Vijayawada Member' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemFadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-5 bg-white border border-[#E8E4DC] rounded-sm text-center flex flex-col justify-between hover:border-[#C8102E]/40 transition-colors"
            >
              <span className="type-label text-[9px] text-[#C8102E] uppercase tracking-wider block mb-1">
                {item.label}
              </span>
              <h4 className="font-serif text-base text-[#181714] font-medium my-1">{item.brand}</h4>
              <p className="text-[11px] text-[#8A8580] font-light">{item.note}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── 7. BOTTOM CTA ───────────────────────────────── */}
      <motion.section
        {...sectionScrollProps}
        className="bg-[#181714] text-white py-16 overflow-hidden"
      >
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 text-center"
        >
          <motion.p variants={itemFadeUp} className="type-label text-[#C8102E] text-xs uppercase tracking-widest mb-3">
            YOUR NEXT HOME IN VIJAYAWADA
          </motion.p>
          <motion.h2
            variants={itemFadeUp}
            className="text-3xl sm:text-4xl text-white max-w-xl mx-auto mb-6"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 500 }}
          >
            Experience the Akhil Promoters Difference
          </motion.h2>
          <motion.p variants={itemFadeUp} className="text-xs sm:text-sm text-white/50 max-w-lg mx-auto font-light leading-relaxed mb-8">
            Explore Blueberry, Apple, Cherry and Daffodils in detail. Our advisory team is ready to assist you.
          </motion.p>
          <motion.div variants={itemFadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/projects"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-widest border border-white/20 transition-colors"
            >
              Explore Developments
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

    </div>
  );
};
