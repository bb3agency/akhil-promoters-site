"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "What is the booking process?",
    a: "You can initiate the booking process by paying a token amount (typically 10% of the property value) and signing the initial agreement. Our sales team will guide you through the required documentation."
  },
  {
    q: "What documents are required for registration?",
    a: "Standard KYC documents (ID proof, address proof, PAN card) along with passport-size photographs are required. NRI buyers need additional documentation like passport copies and FEMA compliance forms."
  },
  {
    q: "Are home loans available for your projects?",
    a: "Yes, all our projects are pre-approved by leading national and international banks, offering competitive interest rates and flexible payment plans."
  },
  {
    q: "When is the possession handed over?",
    a: "Possession timelines vary by project. We strictly adhere to RERA guidelines and provide guaranteed handover dates in our agreements."
  }
];

export default function BuyersGuideFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="flex flex-col w-full bg-pure-white min-h-screen pt-24">
      <section className="px-6 md:px-12 py-16 md:py-24 border-b border-border-gray">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-outfit uppercase text-charcoal max-w-4xl">
          Buyer's Guide & FAQ
        </h1>
        <p className="mt-6 text-soft-gray font-inter max-w-2xl text-sm md:text-base leading-relaxed">
          Everything you need to know about purchasing your dream property with Akhil Promoters.
        </p>
      </section>

      <section className="px-6 md:px-12 py-16 md:py-24 bg-pure-white flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Buyer's Guide Sidebar */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8">
          <div className="sticky top-32">
            <h2 className="text-2xl font-outfit uppercase text-charcoal mb-8 pb-4 border-b border-border-gray">
              The Buying Journey
            </h2>
            <ul className="flex flex-col gap-6 font-inter text-sm">
              {[
                "1. Project Selection & Site Visit",
                "2. Financial Planning & Loan Approval",
                "3. Token Amount & Initial Agreement",
                "4. Payment Schedule Execution",
                "5. Final Registration & Stamp Duty",
                "6. Handover & Possession"
              ].map((step, i) => (
                <li key={i} className="flex gap-4 items-start text-charcoal">
                  <span className="text-primary-red font-bold font-outfit mt-0.5">•</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQs */}
        <div className="w-full lg:w-2/3 flex flex-col gap-12">
          <h2 className="text-2xl font-outfit uppercase text-charcoal">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col border-t border-border-gray">
            {FAQS.map((faq, i) => (
              <div key={i} className="border-b border-border-gray">
                <button 
                  className="w-full py-6 flex justify-between items-center text-left hover:text-primary-red transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="font-outfit text-xl uppercase pr-8">{faq.q}</span>
                  <svg 
                    className={`w-6 h-6 shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 font-inter text-sm text-soft-gray leading-relaxed max-w-3xl">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
