import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, FileCheck, ShieldCheck, HelpCircle, ChevronDown, ChevronUp, Download, CheckCircle } from 'lucide-react';
import { InquiryModal } from '../components/ui/InquiryModal';

const faqs = [
  {
    question: 'Are all Akhil Promoters projects 100% Vaastu compliant?',
    answer: 'Yes. Every project (including Blueberry, Apple, and Cherry) is scientifically designed by reputed architects according to traditional Vaastu principles for maximum natural lighting, ventilation, and positive energy.'
  },
  {
    question: 'What documents will I receive upon purchasing a flat?',
    answer: 'You will receive the Sale Deed, Approved Building Plan, RERA Registration Certificate, Encumbrance Certificate (EC), Land Ownership Title Deed, Occupancy Certificate (OC), and Builder Occupancy Guarantee.'
  },
  {
    question: 'Is power backup included for flats inside the building?',
    answer: 'Yes. All projects feature dedicated generator backup that powers the Johnson automatic elevators, water pumping motors, common corridor lights, as well as essential fan and light points inside each flat.'
  },
  {
    question: 'How do NRI buyers complete flat booking from overseas?',
    answer: 'NRIs can book flats online via digital sale agreement execution, wire transfer to authorized builder bank accounts, and designated Power of Attorney (POA) registration at Vijayawada registrar office.'
  }
];

export const BuyersGuide = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-akhil-off-white min-h-screen pt-28 pb-20">
      {/* Header Banner */}
      <section className="bg-akhil-dark text-white py-16 mb-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <span className="text-akhil-red text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            TRANSPARENT HOME BUYING
          </span>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Vijayawada Home Buyers Guide</h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl font-light">
            Everything you need to know about purchasing your dream 3 BHK flat with Akhil Promoters — from document checklists and RERA compliance to home loan approvals.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        {/* Step-by-Step Buying Process */}
        <section className="bg-white p-8 md:p-12 rounded-2xl border border-akhil-border shadow-sm">
          <h2 className="text-2xl md:text-3xl font-serif text-akhil-charcoal mb-8">
            5-Step Flat Purchasing Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="p-5 bg-akhil-off-white rounded-xl border border-akhil-border">
              <span className="w-8 h-8 rounded-full bg-akhil-red text-white font-bold text-xs flex items-center justify-center mb-3">
                1
              </span>
              <h4 className="text-sm font-bold text-akhil-charcoal mb-1">Site Visit</h4>
              <p className="text-xs text-akhil-gray">Explore Blueberry (Ayodhya Nagar) or Apple / Cherry (Kanuru) with our advisory team.</p>
            </div>

            <div className="p-5 bg-akhil-off-white rounded-xl border border-akhil-border">
              <span className="w-8 h-8 rounded-full bg-akhil-red text-white font-bold text-xs flex items-center justify-center mb-3">
                2
              </span>
              <h4 className="text-sm font-bold text-akhil-charcoal mb-1">Unit Selection</h4>
              <p className="text-xs text-akhil-gray">Choose your preferred flat size (1445 to 2020 SFT) and floor orientation.</p>
            </div>

            <div className="p-5 bg-akhil-off-white rounded-xl border border-akhil-border">
              <span className="w-8 h-8 rounded-full bg-akhil-red text-white font-bold text-xs flex items-center justify-center mb-3">
                3
              </span>
              <h4 className="text-sm font-bold text-akhil-charcoal mb-1">Booking Deposit</h4>
              <p className="text-xs text-akhil-gray">Secure your flat booking with official receipt and Sale Agreement execution.</p>
            </div>

            <div className="p-5 bg-akhil-off-white rounded-xl border border-akhil-border">
              <span className="w-8 h-8 rounded-full bg-akhil-red text-white font-bold text-xs flex items-center justify-center mb-3">
                4
              </span>
              <h4 className="text-sm font-bold text-akhil-charcoal mb-1">Loan Disbursement</h4>
              <p className="text-xs text-akhil-gray">Bank loan approval and stage-wise payment processing.</p>
            </div>

            <div className="p-5 bg-akhil-off-white rounded-xl border border-akhil-border">
              <span className="w-8 h-8 rounded-full bg-akhil-red text-white font-bold text-xs flex items-center justify-center mb-3">
                5
              </span>
              <h4 className="text-sm font-bold text-akhil-charcoal mb-1">Handover & Keys</h4>
              <p className="text-xs text-akhil-gray">Registration of Sale Deed and handover of your pristine 3 BHK keys.</p>
            </div>
          </div>
        </section>

        {/* Required Documents Checklist */}
        <section className="bg-white p-8 md:p-12 rounded-2xl border border-akhil-border shadow-sm">
          <h2 className="text-2xl md:text-3xl font-serif text-akhil-charcoal mb-6">
            Document Checklist for Flat Registration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-akhil-off-white rounded-xl flex items-center gap-3 border border-gray-100">
              <CheckCircle size={20} className="text-akhil-red flex-shrink-0" />
              <span className="text-xs font-bold text-akhil-charcoal">PAN Card & Aadhaar Card Copies of Buyer(s)</span>
            </div>
            <div className="p-4 bg-akhil-off-white rounded-xl flex items-center gap-3 border border-gray-100">
              <CheckCircle size={20} className="text-akhil-red flex-shrink-0" />
              <span className="text-xs font-bold text-akhil-charcoal">Passport Size Photographs</span>
            </div>
            <div className="p-4 bg-akhil-off-white rounded-xl flex items-center gap-3 border border-gray-100">
              <CheckCircle size={20} className="text-akhil-red flex-shrink-0" />
              <span className="text-xs font-bold text-akhil-charcoal">Bank Loan Sanction Letter (if applicable)</span>
            </div>
            <div className="p-4 bg-akhil-off-white rounded-xl flex items-center gap-3 border border-gray-100">
              <CheckCircle size={20} className="text-akhil-red flex-shrink-0" />
              <span className="text-xs font-bold text-akhil-charcoal">NRE / NRO Bank Account Details (For NRI Buyers)</span>
            </div>
          </div>
        </section>

        {/* FAQs Accordion */}
        <section className="bg-white p-8 md:p-12 rounded-2xl border border-akhil-border shadow-sm">
          <h2 className="text-2xl md:text-3xl font-serif text-akhil-charcoal mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-akhil-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full p-5 bg-akhil-off-white hover:bg-white text-left text-sm font-bold text-akhil-charcoal flex justify-between items-center transition-colors"
                >
                  <span>{faq.question}</span>
                  {openFaqIndex === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {openFaqIndex === idx && (
                  <div className="p-5 bg-white text-xs text-akhil-gray leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modalType="brochure"
      />
    </div>
  );
};
