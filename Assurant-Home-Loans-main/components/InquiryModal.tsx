import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { InquiryState, InquiryStep } from '../types';

interface InquiryModalProps {
  onClose: () => void;
}

const InquiryModal: React.FC<InquiryModalProps> = ({ onClose }) => {
  const [step, setStep] = useState<InquiryStep>('intent');
  const [formData, setFormData] = useState<InquiryState>({
    intent: '',
    location: '',
    budget: '',
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = () => {
    if (step === 'intent') setStep('location');
    else if (step === 'location') setStep('budget');
    else if (step === 'budget') setStep('details');
  };

  const handleBack = () => {
    if (step === 'location') setStep('intent');
    else if (step === 'budget') setStep('location');
    else if (step === 'details') setStep('budget');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    }, 1500);
  };

  const updateData = (key: keyof InquiryState, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const intents = [
    { id: 'mortgage', label: 'New mortgage', sub: 'I want to buy a home' },
    { id: 'refinance', label: 'Refinance', sub: 'I want a lower rate' },
    { id: 'equity', label: 'Home equity', sub: 'I want to cash out' },
    { id: 'invest', label: 'Investment', sub: 'Buying to rent or lease' },
  ];

  const budgets = [
    '$150k – $350k', '$350k – $600k', '$600k – $1M', '$1M+'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/60 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative"
      >
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
          <div 
            className="h-full bg-brand-500 transition-all duration-500"
            style={{ 
              width: step === 'intent' ? '25%' : step === 'location' ? '50%' : step === 'budget' ? '75%' : '100%' 
            }}
          />
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-navy-900 z-10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {isSuccess ? (
             <div className="text-center py-12">
               <motion.div 
                 initial={{ scale: 0 }} animate={{ scale: 1 }} 
                 className="w-20 h-20 bg-sage-400/20 text-sage-600 rounded-full flex items-center justify-center mx-auto mb-6"
               >
                 <CheckCircle className="w-10 h-10" />
               </motion.div>
               <h3 className="font-serif text-3xl mb-2 text-navy-900">Request received</h3>
               <p className="text-gray-500">Sunil or a member of our team will contact you within 1 business hour.</p>
             </div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-8">
                <span className="text-xs font-semibold text-brand-600 tracking-widest uppercase">
                  {step === 'intent' ? 'Step 1 of 4' : step === 'location' ? 'Step 2 of 4' : step === 'budget' ? 'Step 3 of 4' : 'Final step'}
                </span>
                <h2 className="font-serif text-3xl mt-2 text-navy-900">
                  {step === 'intent' && "What is your primary goal?"}
                  {step === 'location' && "Where is the property located?"}
                  {step === 'budget' && "Estimated loan amount?"}
                  {step === 'details' && "Where should we send your quote?"}
                </h2>
              </div>

              {/* Form Content */}
              <div className="min-h-[200px]">
                {step === 'intent' && (
                  <div className="grid grid-cols-1 gap-3">
                    {intents.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => { updateData('intent', item.id); handleNext(); }}
                        className="flex items-center justify-between p-4 border border-gray-100 rounded-2xl hover:border-brand-400 hover:bg-brand-50/50 transition-all text-left group"
                      >
                        <div>
                          <p className="font-semibold text-lg text-navy-900">{item.label}</p>
                          <p className="text-sm text-gray-500">{item.sub}</p>
                        </div>
                        <ArrowRight className="text-gray-200 group-hover:text-brand-600 transition-colors" />
                      </button>
                    ))}
                  </div>
                )}

                {step === 'location' && (
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="e.g. Irving, Frisco, Plano, Dallas..."
                      className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-brand-400 text-lg bg-gray-50 focus:bg-white transition-all"
                      value={formData.location}
                      onChange={(e) => updateData('location', e.target.value)}
                      autoFocus
                    />
                    <div className="flex gap-2 flex-wrap">
                      {['Irving', 'Dallas', 'Frisco', 'Plano', 'Southlake', 'McKinney'].map(loc => (
                        <button 
                          key={loc}
                          onClick={() => updateData('location', loc)}
                          className="px-4 py-2 bg-warm-cream rounded-full text-sm hover:bg-brand-50 hover:text-brand-700 transition-colors"
                        >
                          {loc}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 'budget' && (
                  <div className="grid grid-cols-1 gap-3">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        onClick={() => { updateData('budget', b); handleNext(); }}
                        className="p-4 border border-gray-100 rounded-2xl hover:border-brand-400 hover:bg-brand-50/50 transition-all text-left font-medium text-navy-900"
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                )}

                {step === 'details' && (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-500 mb-1">Full name</label>
                      <input
                        type="text"
                        required
                        className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-brand-400 bg-gray-50 focus:bg-white transition-all"
                        value={formData.name}
                        onChange={(e) => updateData('name', e.target.value)}
                        placeholder="e.g. Sarah Johnson"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-500 mb-1">Phone number</label>
                      <input
                        type="tel"
                        required
                        className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-brand-400 bg-gray-50 focus:bg-white transition-all"
                        value={formData.phone}
                        onChange={(e) => updateData('phone', e.target.value)}
                        placeholder="e.g. (940) 555-1234"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-navy-900 text-white py-4 rounded-full font-semibold uppercase tracking-widest hover:bg-brand-600 active:scale-[0.98] transition-all disabled:opacity-70 mt-4"
                    >
                      {isSubmitting ? 'Sending...' : 'Request quote'}
                    </button>
                  </form>
                )}
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                {step !== 'intent' ? (
                  <button onClick={handleBack} className="text-gray-500 flex items-center gap-2 hover:text-navy-900 transition-colors">
                    <ArrowLeft size={16} /> Back
                  </button>
                ) : <div />}
                
                {step === 'location' && (
                  <button 
                    onClick={handleNext}
                    disabled={!formData.location}
                    className="bg-navy-900 text-white px-6 py-2 rounded-full font-semibold disabled:opacity-50 hover:bg-brand-600 active:scale-[0.98] transition-all"
                  >
                    Next
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InquiryModal;