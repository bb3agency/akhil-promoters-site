import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import { OFFICE_PHONE_1, OFFICE_PHONE_2, LANDLINE_PHONE, OFFICE_EMAIL, OFFICE_ADDRESS, WHATSAPP_NUMBER } from '../data';

export const Branches = () => {
  return (
    <div className="bg-akhil-off-white min-h-screen pt-24 pb-20">
      {/* Hero Header */}
      <section className="bg-akhil-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-akhil-dark to-akhil-charcoal opacity-90 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-akhil-red text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
              OUR LOCATIONS
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Branch Offices</h1>
            <p className="text-gray-400 max-w-2xl text-sm font-light leading-relaxed">
              Visit our head office in Kanuru, Vijayawada to explore floor plans, project site maps, and speak directly with our property advisory consultants.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Branch Cards */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Main Vijayawada Office */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-akhil-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* Card Header */}
            <div className="bg-akhil-dark text-white p-8 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-48 h-48 bg-akhil-red/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck size={18} className="text-akhil-red" />
                <span className="text-xs font-bold tracking-widest text-akhil-red uppercase">Head Office</span>
              </div>
              <h3 className="text-3xl font-serif text-white mb-1">Vijayawada</h3>
              <p className="text-gray-400 text-sm font-light">Kanuru, Andhra Pradesh</p>
            </div>

            {/* Card Body */}
            <div className="p-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-akhil-red/10 text-akhil-red flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-akhil-gray mb-1">Full Address</p>
                  <p className="text-sm text-akhil-charcoal leading-relaxed">{OFFICE_ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-akhil-red/10 text-akhil-red flex items-center justify-center flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-akhil-gray mb-1">Phone</p>
                  <a href={`tel:${OFFICE_PHONE_1}`} className="text-sm text-akhil-charcoal hover:text-akhil-red block transition-colors">{OFFICE_PHONE_1}</a>
                  <a href={`tel:${OFFICE_PHONE_2}`} className="text-sm text-akhil-charcoal hover:text-akhil-red block transition-colors">{OFFICE_PHONE_2}</a>
                  <a href={`tel:${LANDLINE_PHONE}`} className="text-sm text-akhil-gray hover:text-akhil-charcoal block transition-colors">{LANDLINE_PHONE} (Landline)</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-akhil-red/10 text-akhil-red flex items-center justify-center flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-akhil-gray mb-1">Email</p>
                  <a href={`mailto:${OFFICE_EMAIL}`} className="text-sm text-akhil-charcoal hover:text-akhil-red transition-colors">{OFFICE_EMAIL}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-akhil-red/10 text-akhil-red flex items-center justify-center flex-shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-akhil-gray mb-1">Office Hours</p>
                  <p className="text-sm text-akhil-charcoal">Mon – Sat: 9:00 AM – 7:00 PM</p>
                  <p className="text-sm text-akhil-gray">Sunday: 10:00 AM – 4:00 PM</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-akhil-border flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Akhil%20Promoters,%20I%20want%20to%20schedule%20an%20office%20visit.`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare size={16} /> WhatsApp
                </a>
                <a
                  href={`tel:${OFFICE_PHONE_1}`}
                  className="flex-1 py-3.5 bg-akhil-charcoal hover:bg-akhil-red text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={16} /> Call Now
                </a>
                <a
                  href="https://maps.google.com/?q=Pinnamaneni+Teachers+Colony,+Kanuru,+Vijayawada"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3.5 bg-akhil-off-white hover:bg-akhil-border text-akhil-charcoal text-xs font-bold tracking-widest uppercase rounded-xl transition-all flex items-center justify-center gap-2 border border-akhil-border"
                >
                  <MapPin size={16} /> Directions
                </a>
              </div>
            </div>
          </motion.div>

          {/* Site Offices / Project Sites */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Blueberry Site Office */}
            <div className="bg-white rounded-2xl border border-akhil-border p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-akhil-red text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  BB
                </div>
                <div>
                  <span className="text-[10px] font-bold text-akhil-red uppercase tracking-widest block">Site Office</span>
                  <h4 className="text-lg font-serif font-bold text-akhil-charcoal">Blueberry Project Site</h4>
                  <p className="text-xs text-akhil-gray">Lotus Land Mark, Road No-3, Sector-3, Ayodhya Nagar, Vijayawada</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Akhil%20Promoters,%20I%20want%20to%20visit%20Blueberry%20project%20site.`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                <MessageSquare size={14} /> Book a Blueberry Site Visit →
              </a>
            </div>

            {/* Apple Site Office */}
            <div className="bg-white rounded-2xl border border-akhil-border p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-akhil-charcoal text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  AP
                </div>
                <div>
                  <span className="text-[10px] font-bold text-akhil-red uppercase tracking-widest block">Site Office</span>
                  <h4 className="text-lg font-serif font-bold text-akhil-charcoal">Apple Project Site</h4>
                  <p className="text-xs text-akhil-gray">Near Mahadev Puram Colony Arch, 1st Lane, Manikya Nagar, Kanuru, Vijayawada</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Akhil%20Promoters,%20I%20want%20to%20visit%20Apple%20project%20site.`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                <MessageSquare size={14} /> Book an Apple Site Visit →
              </a>
            </div>

            {/* Cherry Project */}
            <div className="bg-white rounded-2xl border border-akhil-border p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-akhil-red/80 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  CH
                </div>
                <div>
                  <span className="text-[10px] font-bold text-akhil-red uppercase tracking-widest block">Project Site (Completed)</span>
                  <h4 className="text-lg font-serif font-bold text-akhil-charcoal">Cherry Project Site</h4>
                  <p className="text-xs text-akhil-gray">Varalakshmi Puram, Kanuru, Vijayawada</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Akhil%20Promoters,%20I%20want%20to%20know%20more%20about%20Cherry%20project.`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                <MessageSquare size={14} /> Enquire About Cherry →
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
