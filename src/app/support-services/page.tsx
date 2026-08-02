"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SupportServices() {
  const [activeTab, setActiveTab] = useState("emi");

  return (
    <main className="flex flex-col w-full bg-pure-white min-h-screen pt-24">
      <section className="px-6 md:px-12 py-16 md:py-24 border-b border-border-gray">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-outfit uppercase text-charcoal">
          Support & Services
        </h1>
        <p className="mt-6 text-soft-gray font-inter max-w-2xl text-sm md:text-base leading-relaxed">
          Explore our suite of tools designed to help you make informed decisions about your property investment.
        </p>
      </section>

      <section className="px-6 md:px-12 py-16 md:py-24 bg-warm-white flex flex-col lg:flex-row gap-12">
        {/* Tools Menu */}
        <div className="w-full lg:w-1/4 flex flex-col gap-4">
          {[
            { id: "emi", label: "EMI Calculator" },
            { id: "distance", label: "Distance Calculator" },
            { id: "currency", label: "Currency Converter" },
            { id: "area", label: "Area Converter" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-left px-6 py-4 font-outfit uppercase text-sm tracking-widest border transition-all duration-300 ${
                activeTab === tab.id 
                  ? "bg-charcoal text-pure-white border-charcoal" 
                  : "bg-pure-white text-charcoal border-border-gray hover:border-charcoal"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tool Content Area */}
        <div className="w-full lg:w-3/4 bg-pure-white border border-border-gray p-8 md:p-12 min-h-[500px]">
          {activeTab === "emi" && <EmiCalculator />}
          {activeTab === "distance" && <DistanceCalculator />}
          {activeTab === "currency" && <CurrencyConverter />}
          {activeTab === "area" && <AreaConverter />}
        </div>
      </section>
    </main>
  );
}

function EmiCalculator() {
  const [principal, setPrincipal] = useState(5000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const calculateEMI = () => {
    const p = principal;
    const r = rate / 12 / 100;
    const n = tenure * 12;
    if (r === 0) return p / n;
    return (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  };

  const emi = calculateEMI();
  const totalAmount = emi * (tenure * 12);
  const totalInterest = totalAmount - principal;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-outfit uppercase text-charcoal">EMI Calculator</h2>
        <p className="text-sm font-inter text-soft-gray">Calculate your monthly loan repayment amount.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <label className="text-xs font-bold font-inter uppercase tracking-widest text-charcoal">Loan Amount (₹)</label>
              <span className="text-xl font-outfit text-primary-red">₹ {principal.toLocaleString()}</span>
            </div>
            <input 
              type="range" min="100000" max="50000000" step="100000" 
              value={principal} onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full h-1 bg-border-gray rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <label className="text-xs font-bold font-inter uppercase tracking-widest text-charcoal">Interest Rate (%)</label>
              <span className="text-xl font-outfit text-primary-red">{rate}%</span>
            </div>
            <input 
              type="range" min="5" max="15" step="0.1" 
              value={rate} onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-1 bg-border-gray rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <label className="text-xs font-bold font-inter uppercase tracking-widest text-charcoal">Loan Tenure (Years)</label>
              <span className="text-xl font-outfit text-primary-red">{tenure} Years</span>
            </div>
            <input 
              type="range" min="1" max="30" step="1" 
              value={tenure} onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full h-1 bg-border-gray rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        <div className="bg-light-stone p-8 flex flex-col justify-center gap-8 border border-border-gray">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold font-inter uppercase tracking-widest text-soft-gray">Monthly EMI</span>
            <span className="text-4xl font-outfit text-charcoal">₹ {Math.round(emi).toLocaleString()}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold font-inter uppercase tracking-widest text-soft-gray">Principal Amount</span>
            <span className="text-xl font-outfit text-charcoal">₹ {principal.toLocaleString()}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold font-inter uppercase tracking-widest text-soft-gray">Total Interest</span>
            <span className="text-xl font-outfit text-charcoal">₹ {Math.round(totalInterest).toLocaleString()}</span>
          </div>
          <div className="flex flex-col gap-2 pt-6 border-t border-border-gray">
            <span className="text-xs font-bold font-inter uppercase tracking-widest text-charcoal">Total Amount Payable</span>
            <span className="text-2xl font-outfit text-primary-red">₹ {Math.round(totalAmount).toLocaleString()}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function DistanceCalculator() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-8 h-full">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-outfit uppercase text-charcoal">Distance Calculator</h2>
        <p className="text-sm font-inter text-soft-gray">Estimate travel distances from our projects to key landmarks.</p>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-border-gray bg-warm-white p-8 text-center gap-4">
        <svg className="w-12 h-12 text-soft-gray/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
        <h3 className="font-outfit uppercase text-charcoal">Interactive Map Integration</h3>
        <p className="text-sm font-inter text-soft-gray max-w-md">
          This feature requires a Google Maps API key to function. Once configured, users can select a project and see real-time distances to airports, schools, and hospitals.
        </p>
      </div>
    </motion.div>
  );
}

function CurrencyConverter() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-8 h-full">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-outfit uppercase text-charcoal">Currency Converter</h2>
        <p className="text-sm font-inter text-soft-gray">Convert property values into multiple currencies.</p>
      </div>
      
      <div className="flex flex-col gap-6 max-w-md">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold font-inter uppercase tracking-widest text-charcoal">Amount</label>
          <input type="number" defaultValue={5000000} className="border border-border-gray p-4 font-outfit text-lg outline-none focus:border-charcoal transition-colors bg-warm-white" />
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-xs font-bold font-inter uppercase tracking-widest text-charcoal">From</label>
            <select className="border border-border-gray p-4 font-outfit text-lg outline-none focus:border-charcoal transition-colors bg-warm-white">
              <option>INR (₹)</option>
              <option>USD ($)</option>
              <option>AED (د.إ)</option>
            </select>
          </div>
          <div className="mt-6 text-soft-gray">→</div>
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-xs font-bold font-inter uppercase tracking-widest text-charcoal">To</label>
            <select className="border border-border-gray p-4 font-outfit text-lg outline-none focus:border-charcoal transition-colors bg-warm-white">
              <option>USD ($)</option>
              <option>INR (₹)</option>
              <option>AED (د.إ)</option>
            </select>
          </div>
        </div>
        <button className="bg-charcoal text-pure-white p-4 font-outfit uppercase tracking-widest text-sm hover:bg-primary-red transition-colors mt-4">
          Calculate
        </button>
        <div className="mt-8 p-6 bg-light-stone border border-border-gray text-center">
          <span className="text-xs font-bold font-inter uppercase tracking-widest text-soft-gray block mb-2">Equivalent Amount</span>
          <span className="text-3xl font-outfit text-charcoal">$ 60,240.00</span>
          <p className="text-[10px] text-soft-gray mt-2 uppercase tracking-wider">*Indicative rates only</p>
        </div>
      </div>
    </motion.div>
  );
}

function AreaConverter() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-8 h-full">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-outfit uppercase text-charcoal">Area Converter</h2>
        <p className="text-sm font-inter text-soft-gray">Convert between various land measurement units.</p>
      </div>
      
      <div className="flex flex-col gap-6 max-w-md">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold font-inter uppercase tracking-widest text-charcoal">Value</label>
          <input type="number" defaultValue={1000} className="border border-border-gray p-4 font-outfit text-lg outline-none focus:border-charcoal transition-colors bg-warm-white" />
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-xs font-bold font-inter uppercase tracking-widest text-charcoal">From</label>
            <select className="border border-border-gray p-4 font-outfit text-lg outline-none focus:border-charcoal transition-colors bg-warm-white">
              <option>Sq. Feet</option>
              <option>Sq. Meters</option>
              <option>Acres</option>
              <option>Hectares</option>
              <option>Sq. Yards</option>
            </select>
          </div>
          <div className="mt-6 text-soft-gray">→</div>
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-xs font-bold font-inter uppercase tracking-widest text-charcoal">To</label>
            <select className="border border-border-gray p-4 font-outfit text-lg outline-none focus:border-charcoal transition-colors bg-warm-white">
              <option>Sq. Meters</option>
              <option>Sq. Feet</option>
              <option>Acres</option>
              <option>Hectares</option>
              <option>Sq. Yards</option>
            </select>
          </div>
        </div>
        <button className="bg-charcoal text-pure-white p-4 font-outfit uppercase tracking-widest text-sm hover:bg-primary-red transition-colors mt-4">
          Convert
        </button>
        <div className="mt-8 p-6 bg-light-stone border border-border-gray text-center">
          <span className="text-xs font-bold font-inter uppercase tracking-widest text-soft-gray block mb-2">Result</span>
          <span className="text-3xl font-outfit text-charcoal">92.903 Sq. Meters</span>
        </div>
      </div>
    </motion.div>
  );
}
