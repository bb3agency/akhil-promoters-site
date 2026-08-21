import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, Building, ArrowRight } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: 'easeOut' },
};

const pageHeader = {
  eyebrow: 'Who We Are',
  headline: 'Company Profile',
  sub: 'Akhil Promoters Private Limited — CREDAI accredited real estate developer, Vijayawada.',
};

export const CompanyProfile = () => (
  <div className="bg-[#F7F5F0] min-h-screen pt-20">
    {/* Page header */}
    <div className="bg-[#181714] py-20">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <p className="type-label text-[#C8102E] mb-4">{pageHeader.eyebrow}</p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 500, lineHeight: 1.05, color: 'white' }}>
          {pageHeader.headline}
        </h1>
        <p className="mt-4 text-white/50 text-sm font-[300] max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>{pageHeader.sub}</p>
      </div>
    </div>

    <div className="max-w-[1320px] mx-auto px-6 lg:px-10 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Main content */}
        <motion.div {...fadeUp} className="lg:col-span-7 space-y-8">
          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2rem', fontWeight: 500, color: '#181714' }} className="mb-4">
              Who We Are
            </h2>
            <p className="type-body leading-relaxed mb-4">
              Akhil Promoters Private Limited is one of Vijayawada's established residential real estate developers, building landmark homes in Kanuru and Ayodhya Nagar since inception. We are proud members of CREDAI — the Confederation of Real Estate Developers' Associations of India.
            </p>
            <p className="type-body leading-relaxed">
              Our developments are designed in collaboration with award-winning architectural firms — Clark Lloyd International and D+D Architecture — and engineered by VAP Engineers and Anne Raghu Ram. Every project reflects a commitment to material quality, design integrity, and transparent business practices.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.75rem', fontWeight: 500, color: '#181714' }} className="mb-4">
              Our Developments
            </h2>
            <div className="space-y-4">
              {[
                { name: 'Blueberry', area: 'Ayodhya Nagar, Vijayawada', status: 'Ongoing', desc: '3 BHK luxury residences · 1930–2020 SFT · Johnson 6-passenger lifts' },
                { name: 'Apple', area: 'Mahadevpuram Colony, Kanuru', status: 'Ongoing', desc: '3 BHK premium flats · 1445 SFT · Teak wood joinery' },
                { name: 'Cherry', area: 'Varalakshmi Puram, Kanuru', status: 'Completed', desc: '3 BHK residences · 1625 SFT · Vaastu compliant' },
              ].map((p) => (
                <div key={p.name} className="p-5 bg-white border border-[#E8E4DC] flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.25rem', fontWeight: 500, color: '#181714' }}>{p.name}</span>
                      <span className={`type-label text-[9px] px-2 py-0.5 ${p.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-[#C8102E]/10 text-[#C8102E]'}`}>{p.status}</span>
                    </div>
                    <p className="text-[11px] text-[#C8102E] mb-1 type-label">{p.area}</p>
                    <p className="text-xs text-[#8A8580]" style={{ fontFamily: 'Inter, sans-serif' }}>{p.desc}</p>
                  </div>
                  <Link to={`/projects/${p.name.toLowerCase()}`} className="text-[#C8102E] hover:text-[#A50D24] flex-shrink-0">
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Sidebar */}
        <motion.div {...fadeUp} className="lg:col-span-5 space-y-6">
          <div className="bg-[#181714] text-white p-8">
            <p className="type-label text-[#C8102E] text-[9px] mb-4">Company Details</p>
            <div className="space-y-4 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              <div><span className="text-white/40 block text-[10px] type-label mb-1">Registered Name</span><span className="text-white">Akhil Promoters Private Limited</span></div>
              <div><span className="text-white/40 block text-[10px] type-label mb-1">Industry Association</span><span className="text-white">CREDAI — Vijayawada Chapter</span></div>
              <div><span className="text-white/40 block text-[10px] type-label mb-1">Headquarters</span><span className="text-white/80">Door No. 13-57, Pinnamaneni Teachers Colony, Kanuru, Vijayawada — 520007</span></div>
              <div><span className="text-white/40 block text-[10px] type-label mb-1">Architecture</span><span className="text-white/80">Clark Lloyd International · D+D Architecture</span></div>
              <div><span className="text-white/40 block text-[10px] type-label mb-1">Structural Engineering</span><span className="text-white/80">VAP Engineers · Anne Raghu Ram</span></div>
            </div>
          </div>

          <div className="p-6 bg-white border border-[#E8E4DC] flex items-start gap-4">
            <ShieldCheck size={20} className="text-[#C8102E] flex-shrink-0 mt-0.5" />
            <div>
              <p className="type-label text-[9px] text-[#C8102E] mb-1">CREDAI Certified</p>
              <p className="text-sm text-[#8A8580] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>All developments follow CREDAI ethical practices — clear legal title, transparent documentation, and fair dealings.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);
