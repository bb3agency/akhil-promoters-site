import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Grid, Globe, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import { InquiryModal } from '../components/ui/InquiryModal';

export const SupportServices = () => {
  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState<number>(4000000); // 40 Lakhs default
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5% default
  const [tenureYears, setTenureYears] = useState<number>(20); // 20 years default

  // Calculate EMI Formula: E = P * r * (1 + r)^n / ((1 + r)^n - 1)
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const emi =
    monthlyRate > 0
      ? Math.round(
          (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
            (Math.pow(1 + monthlyRate, totalMonths) - 1)
        )
      : Math.round(loanAmount / totalMonths);

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  // Area Unit Converter State
  const [areaValue, setAreaValue] = useState<number>(1445);
  const [fromUnit, setFromUnit] = useState<string>('SFT');

  // Convert to SFT first as base
  let valueInSft = areaValue;
  if (fromUnit === 'SQ_YDS') valueInSft = areaValue * 9;
  if (fromUnit === 'ACRES') valueInSft = areaValue * 43560;
  if (fromUnit === 'CENTS') valueInSft = areaValue * 435.6;
  if (fromUnit === 'GUNTA') valueInSft = areaValue * 1089;

  const sqYds = (valueInSft / 9).toFixed(2);
  const acres = (valueInSft / 43560).toFixed(4);
  const cents = (valueInSft / 435.6).toFixed(2);
  const gunta = (valueInSft / 1089).toFixed(2);

  // NRI Currency State
  const [inrAmount, setInrAmount] = useState<number>(5000000); // 50 Lakhs
  const usdRate = 86.5;
  const aedRate = 23.5;
  const gbpRate = 108.0;

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-akhil-off-white min-h-screen pt-28 pb-20">
      {/* Header Banner */}
      <section className="bg-akhil-dark text-white py-16 mb-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <span className="text-akhil-red text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            FINANCIAL & BUYER UTILITIES
          </span>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Support Services & Calculators</h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl font-light">
            Plan your investment in Akhil Promoters projects with our interactive home loan EMI calculator, land unit converter, and NRI currency suite.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* 1. EMI CALCULATOR */}
        <section id="emi" className="bg-white p-8 md:p-12 rounded-2xl border border-akhil-border shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-akhil-red/10 text-akhil-red rounded-xl">
              <Calculator size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-akhil-charcoal">Home Loan EMI Calculator</h2>
              <p className="text-xs text-akhil-gray">Estimate your monthly installment for 3 BHK flat purchases</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Sliders Input Column */}
            <div className="lg:col-span-7 space-y-8">
              {/* Loan Amount Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-akhil-charcoal">
                    Loan Amount (Principal)
                  </label>
                  <span className="text-lg font-serif font-bold text-akhil-red">
                    ₹{(loanAmount / 100000).toFixed(2)} Lakhs
                  </span>
                </div>
                <input
                  type="range"
                  min={1000000}
                  max={20000000}
                  step={100000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-akhil-red cursor-pointer h-2 bg-gray-200 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-akhil-gray mt-1">
                  <span>₹10 Lakhs</span>
                  <span>₹2 Crores</span>
                </div>
              </div>

              {/* Interest Rate Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-akhil-charcoal">
                    Interest Rate (% P.A.)
                  </label>
                  <span className="text-lg font-serif font-bold text-akhil-red">{interestRate}%</span>
                </div>
                <input
                  type="range"
                  min={6.5}
                  max={13.0}
                  step={0.1}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-akhil-red cursor-pointer h-2 bg-gray-200 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-akhil-gray mt-1">
                  <span>6.5%</span>
                  <span>13.0%</span>
                </div>
              </div>

              {/* Tenure Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-akhil-charcoal">
                    Loan Tenure (Years)
                  </label>
                  <span className="text-lg font-serif font-bold text-akhil-red">{tenureYears} Years</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full accent-akhil-red cursor-pointer h-2 bg-gray-200 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-akhil-gray mt-1">
                  <span>1 Year</span>
                  <span>30 Years</span>
                </div>
              </div>
            </div>

            {/* EMI Result Summary Card */}
            <div className="lg:col-span-5 bg-akhil-dark text-white p-8 rounded-2xl border border-white/10 shadow-xl text-center">
              <span className="text-akhil-red text-xs font-bold tracking-widest uppercase block mb-2">
                ESTIMATED MONTHLY EMI
              </span>
              <h3 className="text-4xl md:text-5xl font-serif text-white font-bold mb-6">
                ₹{emi.toLocaleString('en-IN')}
                <span className="text-xs text-gray-400 font-sans block mt-1 font-normal">/ month</span>
              </h3>

              <div className="space-y-3 pt-4 border-t border-white/10 text-left text-xs mb-8">
                <div className="flex justify-between">
                  <span className="text-gray-400">Principal Amount:</span>
                  <strong className="text-white">₹{(loanAmount / 100000).toFixed(2)} Lakhs</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Interest Payable:</span>
                  <strong className="text-akhil-red">₹{(totalInterest / 100000).toFixed(2)} Lakhs</strong>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10 font-bold">
                  <span className="text-gray-300">Total Amount Payable:</span>
                  <strong className="text-emerald-400">₹{(totalPayment / 100000).toFixed(2)} Lakhs</strong>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3.5 bg-akhil-red hover:bg-akhil-red-hover text-white text-xs font-bold tracking-widest uppercase rounded-xl transition-all shadow-md"
              >
                Apply for Home Loan Assistance
              </button>
            </div>
          </div>
        </section>

        {/* 2. AREA UNIT CONVERTER */}
        <section id="area" className="bg-white p-8 md:p-12 rounded-2xl border border-akhil-border shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-akhil-red/10 text-akhil-red rounded-xl">
              <Grid size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-akhil-charcoal">Land & Flat Area Unit Converter</h2>
              <p className="text-xs text-akhil-gray">Convert between SFT, Square Yards, Acres, Cents & Gunta</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <label className="block text-xs font-bold uppercase text-akhil-charcoal">Enter Area Value</label>
              <div className="flex gap-3">
                <input
                  type="number"
                  value={areaValue}
                  onChange={(e) => setAreaValue(Number(e.target.value))}
                  className="flex-1 px-4 py-3 bg-akhil-off-white border border-akhil-border rounded-xl text-lg font-bold text-akhil-charcoal focus:outline-none"
                />
                <select
                  value={fromUnit}
                  onChange={(e) => setFromUnit(e.target.value)}
                  className="px-4 py-3 bg-akhil-dark text-white rounded-xl text-xs font-bold uppercase"
                >
                  <option value="SFT">Sq. Feet (SFT)</option>
                  <option value="SQ_YDS">Sq. Yards</option>
                  <option value="ACRES">Acres</option>
                  <option value="CENTS">Cents</option>
                  <option value="GUNTA">Guntas</option>
                </select>
              </div>
            </div>

            {/* Equivalent Grid Output */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-akhil-off-white rounded-xl border border-akhil-border text-center">
                <span className="text-[10px] font-bold text-akhil-gray block uppercase mb-1">Square Feet</span>
                <strong className="text-xl font-serif text-akhil-red font-bold">{valueInSft}</strong>
              </div>

              <div className="p-4 bg-akhil-off-white rounded-xl border border-akhil-border text-center">
                <span className="text-[10px] font-bold text-akhil-gray block uppercase mb-1">Square Yards</span>
                <strong className="text-xl font-serif text-akhil-charcoal font-bold">{sqYds}</strong>
              </div>

              <div className="p-4 bg-akhil-off-white rounded-xl border border-akhil-border text-center">
                <span className="text-[10px] font-bold text-akhil-gray block uppercase mb-1">Cents</span>
                <strong className="text-xl font-serif text-akhil-charcoal font-bold">{cents}</strong>
              </div>

              <div className="p-4 bg-akhil-off-white rounded-xl border border-akhil-border text-center">
                <span className="text-[10px] font-bold text-akhil-gray block uppercase mb-1">Acres</span>
                <strong className="text-xl font-serif text-akhil-charcoal font-bold">{acres}</strong>
              </div>
            </div>
          </div>
        </section>

        {/* 3. NRI CURRENCY CONVERTER */}
        <section id="currency" className="bg-white p-8 md:p-12 rounded-2xl border border-akhil-border shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-akhil-red/10 text-akhil-red rounded-xl">
              <Globe size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-akhil-charcoal">NRI Investment Currency Estimator</h2>
              <p className="text-xs text-akhil-gray">Quick currency valuation for international real estate buyers</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-2">
              <label className="block text-xs font-bold uppercase text-akhil-charcoal">Property Price (INR)</label>
              <input
                type="number"
                value={inrAmount}
                step={500000}
                onChange={(e) => setInrAmount(Number(e.target.value))}
                className="w-full px-4 py-3.5 bg-akhil-off-white border border-akhil-border rounded-xl text-xl font-bold text-akhil-red focus:outline-none"
              />
              <span className="text-[11px] text-akhil-gray block">₹{(inrAmount / 100000).toFixed(2)} Lakhs INR</span>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 bg-akhil-dark text-white rounded-xl text-center">
                <span className="text-[10px] font-bold text-akhil-red block uppercase mb-1">USD ($)</span>
                <strong className="text-2xl font-serif text-white font-bold">
                  ${Math.round(inrAmount / usdRate).toLocaleString()}
                </strong>
                <span className="text-[10px] text-gray-400 block mt-1">@ ₹86.5 / USD</span>
              </div>

              <div className="p-5 bg-akhil-dark text-white rounded-xl text-center">
                <span className="text-[10px] font-bold text-akhil-red block uppercase mb-1">AED (Dirhams)</span>
                <strong className="text-2xl font-serif text-white font-bold">
                  AED {Math.round(inrAmount / aedRate).toLocaleString()}
                </strong>
                <span className="text-[10px] text-gray-400 block mt-1">@ ₹23.5 / AED</span>
              </div>

              <div className="p-5 bg-akhil-dark text-white rounded-xl text-center">
                <span className="text-[10px] font-bold text-akhil-red block uppercase mb-1">GBP (£)</span>
                <strong className="text-2xl font-serif text-white font-bold">
                  £{Math.round(inrAmount / gbpRate).toLocaleString()}
                </strong>
                <span className="text-[10px] text-gray-400 block mt-1">@ ₹108.0 / GBP</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modalType="general"
      />
    </div>
  );
};
