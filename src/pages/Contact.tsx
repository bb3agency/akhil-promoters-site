import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageSquare, Clock, Building, Send, CheckCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, OFFICE_PHONE_1, OFFICE_PHONE_2, LANDLINE_PHONE, OFFICE_EMAIL, OFFICE_ADDRESS, projectData } from '../data';
import {
  staggerContainer,
  fadeInUp,
  itemFadeUp,
  viewportConfig,
  sectionScrollProps,
} from '../utils/motion';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Akhil Promoters,\n\nI would like to make an enquiry.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nProject: ${formData.project || 'General Enquiry'}\n\nMessage:\n${formData.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-akhil-off-white min-h-screen pt-24">
      {/* Hero Header */}
      <section className="bg-akhil-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-akhil-dark to-akhil-charcoal opacity-90 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={itemFadeUp}
              className="text-akhil-red text-xs font-bold tracking-[0.2em] uppercase mb-4 block"
            >
              REACH OUT TO US
            </motion.span>
            <motion.h1
              variants={itemFadeUp}
              className="text-4xl md:text-6xl font-serif text-white mb-4"
            >
              Contact Akhil Promoters
            </motion.h1>
            <motion.p
              variants={itemFadeUp}
              className="text-gray-400 max-w-xl mx-auto text-sm font-light leading-relaxed"
            >
              Connect with our Vijayawada advisory team for project inquiries, site visits, or investment consultations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Action Bars */}
      <motion.section
        {...sectionScrollProps}
        className="bg-white border-b border-akhil-border py-5 overflow-hidden"
      >
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap items-center justify-center md:justify-between gap-4"
        >
          <motion.a
            variants={itemFadeUp}
            href={`tel:${OFFICE_PHONE_1}`}
            className="flex items-center gap-3 text-akhil-charcoal hover:text-akhil-red transition-colors group"
          >
            <span className="w-10 h-10 rounded-xl bg-akhil-red/10 text-akhil-red flex items-center justify-center group-hover:bg-akhil-red group-hover:text-white transition-colors">
              <Phone size={18} />
            </span>
            <span className="text-sm font-bold">{OFFICE_PHONE_1}</span>
          </motion.a>
          <motion.a
            variants={itemFadeUp}
            href={`tel:${OFFICE_PHONE_2}`}
            className="flex items-center gap-3 text-akhil-charcoal hover:text-akhil-red transition-colors group"
          >
            <span className="w-10 h-10 rounded-xl bg-akhil-red/10 text-akhil-red flex items-center justify-center group-hover:bg-akhil-red group-hover:text-white transition-colors">
              <Phone size={18} />
            </span>
            <span className="text-sm font-bold">{OFFICE_PHONE_2}</span>
          </motion.a>
          <motion.a
            variants={itemFadeUp}
            href={`mailto:${OFFICE_EMAIL}`}
            className="flex items-center gap-3 text-akhil-charcoal hover:text-akhil-red transition-colors group"
          >
            <span className="w-10 h-10 rounded-xl bg-akhil-red/10 text-akhil-red flex items-center justify-center group-hover:bg-akhil-red group-hover:text-white transition-colors">
              <Mail size={18} />
            </span>
            <span className="text-sm font-bold">{OFFICE_EMAIL}</span>
          </motion.a>
          <motion.a
            variants={itemFadeUp}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all flex items-center gap-2 shadow-md"
          >
            <MessageSquare size={16} /> WhatsApp Chat
          </motion.a>
        </motion.div>
      </motion.section>

      {/* Main Contact Content */}
      <motion.section
        {...sectionScrollProps}
        className="py-20 max-w-7xl mx-auto px-6 md:px-12 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Office Info */}
          <div className="lg:col-span-5 space-y-8">
            {/* Office Card */}
            <motion.div
              variants={fadeInUp(0.65)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="bg-akhil-dark text-white p-8 rounded-2xl border border-white/10 shadow-xl space-y-6"
            >
              <div>
                <span className="text-akhil-red text-xs font-bold tracking-[0.2em] uppercase block mb-2">
                  HEAD OFFICE
                </span>
                <h3 className="text-2xl font-serif text-white mb-4">Vijayawada, Andhra Pradesh</h3>
              </div>

              <div className="flex items-start gap-4 border-t border-white/10 pt-6">
                <MapPin size={20} className="text-akhil-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase text-gray-400 mb-1">Address</p>
                  <p className="text-sm text-gray-200 leading-relaxed">{OFFICE_ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={20} className="text-akhil-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase text-gray-400 mb-1">Phone</p>
                  <a href={`tel:${OFFICE_PHONE_1}`} className="text-sm text-gray-200 hover:text-white block">{OFFICE_PHONE_1}</a>
                  <a href={`tel:${OFFICE_PHONE_2}`} className="text-sm text-gray-200 hover:text-white block">{OFFICE_PHONE_2}</a>
                  <a href={`tel:${LANDLINE_PHONE}`} className="text-sm text-gray-400 hover:text-gray-200 block">{LANDLINE_PHONE} (Landline)</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={20} className="text-akhil-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase text-gray-400 mb-1">Email</p>
                  <a href={`mailto:${OFFICE_EMAIL}`} className="text-sm text-gray-200 hover:text-white">{OFFICE_EMAIL}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={20} className="text-akhil-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase text-gray-400 mb-1">Office Hours</p>
                  <p className="text-sm text-gray-200">Mon – Sat: 9:00 AM – 7:00 PM</p>
                  <p className="text-sm text-gray-400">Sunday: 10:00 AM – 4:00 PM</p>
                </div>
              </div>
            </motion.div>

            {/* Map Embed Card */}
            <motion.div
              variants={fadeInUp(0.65, 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="bg-white rounded-2xl border border-akhil-border overflow-hidden shadow-sm"
            >
              <div className="p-4 border-b border-akhil-border flex items-center gap-2">
                <MapPin size={16} className="text-akhil-red" />
                <span className="text-xs font-bold text-akhil-charcoal">Kanuru, Vijayawada - 520007</span>
              </div>
              <div className="aspect-[16/9] bg-akhil-light-gray flex items-center justify-center">
                <iframe
                  src="https://maps.google.com/maps?q=Pinnamaneni+Teachers+Colony,+Kanuru,+Vijayawada&z=14&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Akhil Promoters Office Location"
                  className="w-full h-full object-cover"
                />
              </div>
              <a
                href="https://maps.google.com/?q=Pinnamaneni+Teachers+Colony,+Kanuru,+Vijayawada"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3 text-xs font-bold text-akhil-red hover:text-akhil-red-hover transition-colors border-t border-akhil-border"
              >
                <MapPin size={14} /> Get Directions on Google Maps
              </a>
            </motion.div>
          </div>

          {/* Right: Inquiry Form */}
          <div className="lg:col-span-7">
            <motion.div
              variants={fadeInUp(0.65, 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="bg-white p-8 md:p-12 rounded-2xl border border-akhil-border shadow-sm"
            >
              <h2 className="text-2xl md:text-3xl font-serif text-akhil-charcoal mb-2">Send Us an Enquiry</h2>
              <p className="text-xs text-akhil-gray mb-8 font-light">
                Our Vijayawada team will respond within 24 hours. For instant response, use WhatsApp.
              </p>

              {submitted ? (
                <div className="py-14 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle size={36} />
                  </div>
                  <h4 className="text-2xl font-serif text-akhil-charcoal mb-2">Message Sent!</h4>
                  <p className="text-sm text-akhil-gray max-w-xs">Your inquiry has been opened in WhatsApp. Our team will respond promptly.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-akhil-charcoal mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-akhil-off-white border border-akhil-border rounded-xl text-sm text-akhil-charcoal focus:outline-none focus:border-akhil-red transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-akhil-charcoal mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-akhil-off-white border border-akhil-border rounded-xl text-sm text-akhil-charcoal focus:outline-none focus:border-akhil-red transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-akhil-charcoal mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-akhil-off-white border border-akhil-border rounded-xl text-sm text-akhil-charcoal focus:outline-none focus:border-akhil-red transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-akhil-charcoal mb-2">Select Project of Interest</label>
                    <select
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      className="w-full px-4 py-3 bg-akhil-off-white border border-akhil-border rounded-xl text-sm font-medium text-akhil-charcoal focus:outline-none focus:border-akhil-red transition-colors"
                    >
                      <option value="">Select a project (optional)</option>
                      {Object.values(projectData).map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} – {p.location}
                        </option>
                      ))}
                      <option value="General Enquiry">General / Other Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-akhil-charcoal mb-2">Message / Requirements</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your preferred flat configuration, budget range, or any specific requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-akhil-off-white border border-akhil-border rounded-xl text-sm text-akhil-charcoal focus:outline-none focus:border-akhil-red transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 py-4 bg-akhil-charcoal hover:bg-akhil-red text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <MessageSquare size={16} /> Send via WhatsApp
                    </button>
                    <a
                      href={`tel:${OFFICE_PHONE_1}`}
                      className="py-4 px-6 bg-akhil-off-white hover:bg-akhil-border text-akhil-charcoal text-xs font-bold tracking-widest uppercase rounded-xl transition-colors flex items-center justify-center gap-2 border border-akhil-border"
                    >
                      <Phone size={16} /> Call Now
                    </a>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
