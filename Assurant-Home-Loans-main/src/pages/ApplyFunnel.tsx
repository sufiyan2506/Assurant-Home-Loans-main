import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Shield, Clock, FileText } from 'lucide-react';

const ApplyFunnel: React.FC = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const steps = [
    { id: 1, title: "Loan purpose", icon: <FileText className="w-6 h-6" /> },
    { id: 2, title: "Property details", icon: <Shield className="w-6 h-6" /> },
    { id: 3, title: "Financials", icon: <Clock className="w-6 h-6" /> },
    { id: 4, title: "Final review", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-warm-ivory pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Progress Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            {steps.map((s) => (
              <div key={s.id} className="flex flex-col items-center gap-2">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${step >= s.id ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/20' : 'bg-white text-gray-300 border border-warm-stone'}`}>
                  {step > s.id ? <CheckCircle className="w-6 h-6" /> : s.icon}
                </div>
                <span className={`text-[10px] font-semibold uppercase tracking-widest ${step >= s.id ? 'text-brand-600' : 'text-gray-400'}`}>
                  {s.title}
                </span>
              </div>
            ))}
          </div>
          <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-brand-500"
              initial={{ width: '0%' }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Funnel Content */}
        <motion.div 
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white p-12 md:p-20 rounded-[2.5rem] shadow-xl shadow-navy-900/5 border border-warm-stone"
        >
          {step === 1 && (
            <div className="space-y-8">
              <h2 className="font-serif text-4xl text-navy-900">What is your primary goal?</h2>
              <div className="grid gap-4">
                {['Buying a new home', 'Refinancing existing loan', 'Investing in rental property', 'Commercial financing'].map((option) => (
                  <button 
                    key={option}
                    onClick={() => setStep(2)}
                    className="flex items-center justify-between p-6 border border-warm-stone rounded-2xl hover:border-brand-400 hover:bg-brand-50/50 transition-all text-left group"
                  >
                    <span className="font-semibold text-xl text-navy-900">{option}</span>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8">
              <h2 className="font-serif text-4xl text-navy-900">Tell us about the property</h2>
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2 block">Property location</label>
                  <input type="text" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-brand-400 outline-none" placeholder="e.g. Irving, TX or 75038" />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2 block">Estimated value (USD)</label>
                  <input type="number" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-brand-400 outline-none" placeholder="450,000" />
                </div>
                <button 
                  onClick={() => setStep(3)}
                  className="w-full py-5 bg-navy-900 text-white rounded-full font-semibold uppercase tracking-widest hover:bg-brand-600 active:scale-[0.98] transition-all"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8">
              <h2 className="font-serif text-4xl text-navy-900">Your financial profile</h2>
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2 block">Annual income (USD)</label>
                  <input type="number" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-brand-400 outline-none" placeholder="85,000" />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2 block">Employment type</label>
                  <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-brand-400 outline-none appearance-none">
                    <option>W-2 salaried employee</option>
                    <option>Self-employed / 1099</option>
                    <option>Business owner</option>
                    <option>Retired</option>
                  </select>
                </div>
                <button 
                  onClick={() => setStep(4)}
                  className="w-full py-5 bg-navy-900 text-white rounded-full font-semibold uppercase tracking-widest hover:bg-brand-600 active:scale-[0.98] transition-all"
                >
                  Almost done
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center space-y-12 py-10">
              <div className="w-24 h-24 bg-sage-400/20 text-sage-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-12 h-12" />
              </div>
              <div>
                <h2 className="font-serif text-4xl text-navy-900 mb-4">Application submitted</h2>
                <p className="text-gray-500 text-lg">Your file is now in priority review. Sunil or a member of our team will contact you within 1 business hour.</p>
              </div>
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand-200 inline-block">
                <p className="text-brand-800 font-semibold">Reference ID: #ASR-8829</p>
              </div>
              <button 
                onClick={() => window.location.href = '/'}
                className="block w-full py-5 bg-navy-900 text-white rounded-full font-semibold uppercase tracking-widest hover:bg-brand-600 active:scale-[0.98] transition-all"
              >
                Back to home
              </button>
            </div>
          )}
        </motion.div>

        <p className="text-center text-gray-400 text-xs mt-12 uppercase tracking-widest font-semibold">
          <Shield className="w-3 h-3 inline-block mr-1 mb-0.5" /> Secure 256-bit encrypted application
        </p>
      </div>
    </div>
  );
};

export default ApplyFunnel;
