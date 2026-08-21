import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, MessageSquare, CheckCircle, Calendar, Send, ShieldCheck } from 'lucide-react';
import { WHATSAPP_NUMBER, OFFICE_PHONE_1, OFFICE_PHONE_2 } from '../../data';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
  modalType?: 'visit' | 'brochure' | 'general';
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultProject = 'Blueberry',
  modalType = 'general'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: defaultProject,
    date: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Akhil Promoters, I am interested in ${formData.project || 'your projects'}. My Name: ${formData.name || 'Visitor'}, Phone: ${formData.phone || 'N/A'}. Please share details.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const titles = {
    visit: 'Schedule a Site Visit',
    brochure: 'Download Project Brochure',
    general: 'VIP Inquiry & Consultation'
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg overflow-hidden bg-white shadow-2xl rounded-2xl border border-gray-100"
        >
          {/* Header Banner */}
          <div className="bg-akhil-dark text-white p-6 md:p-8 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-48 h-48 bg-akhil-red/10 rounded-full blur-2xl -mr-12 -mt-12 pointer-events-none" />
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
            >
              <X size={20} />
            </button>

            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-akhil-red uppercase mb-2">
              <ShieldCheck size={14} /> CREDAI ACCREDITED BUILDER
            </span>
            <h3 className="text-2xl md:text-3xl font-serif text-white">{titles[modalType]}</h3>
            <p className="text-xs md:text-sm text-gray-400 font-light mt-1">
              Connect directly with Akhil Promoters' project advisory team.
            </p>
          </div>

          {/* Form Content */}
          <div className="p-6 md:p-8 bg-akhil-off-white">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <CheckCircle size={36} />
                </div>
                <h4 className="text-2xl font-serif text-akhil-charcoal mb-2">Inquiry Received!</h4>
                <p className="text-sm text-akhil-gray max-w-xs leading-relaxed mb-6">
                  Thank you for reaching out. Our Vijayawada team will contact you shortly on <strong>{formData.phone}</strong>.
                </p>
                <button
                  onClick={handleWhatsApp}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-colors flex items-center gap-2"
                >
                  <MessageSquare size={16} /> Instant WhatsApp Response
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-akhil-charcoal mb-1">
                    Select Project
                  </label>
                  <select
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-akhil-border rounded-xl text-sm font-medium text-akhil-charcoal focus:outline-none focus:border-akhil-red transition-colors"
                  >
                    <option value="Blueberry">Blueberry (3 BHK - Ayodhya Nagar)</option>
                    <option value="Apple">Apple (3 BHK - Kanuru)</option>
                    <option value="Cherry">Cherry (3 BHK - Kanuru)</option>
                    <option value="Akhil Signature">Akhil Signature (Villas)</option>
                    <option value="Akhil Heights">Akhil Heights (Kanuru)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-akhil-charcoal mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-akhil-border rounded-xl text-sm text-akhil-charcoal focus:outline-none focus:border-akhil-red"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-akhil-charcoal mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-akhil-border rounded-xl text-sm text-akhil-charcoal focus:outline-none focus:border-akhil-red"
                    />
                  </div>
                </div>

                {modalType === 'visit' && (
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-akhil-charcoal mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-akhil-border rounded-xl text-sm text-akhil-charcoal focus:outline-none focus:border-akhil-red"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-akhil-charcoal mb-1">
                    Your Message / Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your budget or preferred flat configuration..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-akhil-border rounded-xl text-sm text-akhil-charcoal focus:outline-none focus:border-akhil-red resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 px-6 bg-akhil-red hover:bg-akhil-red-hover text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Send size={15} /> Submit Inquiry
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="py-3.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={16} /> WhatsApp
                  </button>
                </div>

                <div className="pt-2 text-center text-[11px] text-akhil-gray flex items-center justify-center gap-4 border-t border-gray-200 mt-4">
                  <a href={`tel:${OFFICE_PHONE_1}`} className="flex items-center gap-1 hover:text-akhil-red">
                    <Phone size={12} /> {OFFICE_PHONE_1}
                  </a>
                  <span>•</span>
                  <a href={`tel:${OFFICE_PHONE_2}`} className="flex items-center gap-1 hover:text-akhil-red">
                    <Phone size={12} /> {OFFICE_PHONE_2}
                  </a>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
