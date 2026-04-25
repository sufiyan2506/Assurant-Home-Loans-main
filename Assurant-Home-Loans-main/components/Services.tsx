import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ruler, FileCheck, TrendingUp, Key, Search, ShieldCheck } from 'lucide-react';

interface ServicesProps {
  onOpenInquiry: () => void;
}

const Services: React.FC<ServicesProps> = ({ onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState<'mortgage' | 'refinance'>('mortgage');

  const mortgageSteps = [
    { 
      id: "01",
      title: "Pre-approval first", 
      desc: "Get a clear picture of your budget with our rapid, credit-safe pre-approval. Most clients receive a decision within 24 hours.", 
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
      icon: <Ruler className="w-5 h-5 text-brand-500" /> 
    },
    { 
      id: "02",
      title: "Digital submission", 
      desc: "Upload documents securely through our portal. No bank visits, no faxing, no paper. Sunil's team reviews everything upfront.", 
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800",
      icon: <FileCheck className="w-5 h-5 text-brand-500" /> 
    },
    { 
      id: "03",
      title: "Rate lock guarantee", 
      desc: "We secure the lowest market rates and lock them in. Better rates than competitors — verified by our clients on Google.", 
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
      icon: <TrendingUp className="w-5 h-5 text-brand-500" /> 
    },
    { 
      id: "04",
      title: "Close in 14–20 days", 
      desc: "Your dedicated loan officer manages all legal work. We consistently close faster than industry average — and our reviews prove it.", 
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      icon: <Key className="w-5 h-5 text-brand-500" /> 
    },
  ];

  const refinanceSteps = [
    { 
      id: "01",
      title: "Equity assessment", 
      desc: "Professional valuation to determine how much cash you can unlock from your home equity.", 
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      icon: <TrendingUp className="w-6 h-6 text-brand-500" /> 
    },
    { 
      id: "02",
      title: "Rate comparison", 
      desc: "We scan the entire market to find a lower interest rate that saves you thousands over the life of the loan.", 
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      icon: <Search className="w-6 h-6 text-brand-500" /> 
    },
    { 
      id: "03",
      title: "Low-cost transfer", 
      desc: "Switch your balance with minimal fees and immediate monthly savings. No surprises at closing.", 
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      icon: <ShieldCheck className="w-6 h-6 text-brand-500" /> 
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-navy-900 rounded-[2.5rem] md:rounded-[4rem] relative z-10 overflow-hidden mx-2 md:mx-4 shadow-2xl">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-[120px]" />
         <div className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-brand-400/3 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
           <div>
             <motion.span 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="text-brand-400 font-semibold tracking-widest text-xs uppercase mb-4 block"
             >
               Our process
             </motion.span>
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-none"
             >
               How it <br/><span className="text-gray-500">works</span>
             </motion.h2>
           </div>
           
           {/* Custom Toggle */}
           <div className="bg-white/5 backdrop-blur-md p-1.5 rounded-full border border-white/10 flex">
             {(['mortgage', 'refinance'] as const).map((tab) => (
               <button
                 key={tab}
                 onClick={() => setActiveTab(tab)}
                 className={`px-7 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                   activeTab === tab ? 'bg-white text-navy-900 shadow-[0_0_20px_rgba(255,255,255,0.15)]' : 'text-gray-400 hover:text-white'
                 }`}
               >
                 {tab}
               </button>
             ))}
           </div>
        </div>

        <AnimatePresence mode="wait">
           {activeTab === 'mortgage' ? (
             <motion.div
               key="mortgage"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.4 }}
               className="grid grid-cols-1 md:grid-cols-12 gap-6"
             >
                {/* Item 1: Large left */}
                <div className="md:col-span-5 relative h-[480px] rounded-[2rem] overflow-hidden group">
                   <img src={mortgageSteps[0].image} alt={mortgageSteps[0].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
                   <div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-2xl shadow-xl transform transition-transform duration-300 group-hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-brand-600 font-semibold text-xs tracking-widest uppercase">Step 01</span>
                        {mortgageSteps[0].icon}
                      </div>
                      <h3 className="font-serif text-xl text-navy-900 mb-2">{mortgageSteps[0].title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{mortgageSteps[0].desc}</p>
                   </div>
                </div>

                {/* Item 2: Side-by-side right */}
                <div className="md:col-span-7 h-[220px] md:h-auto bg-white rounded-[2rem] overflow-hidden flex group hover:shadow-xl hover:shadow-brand-500/5 transition-shadow">
                   <div className="w-2/5 relative overflow-hidden">
                      <img src={mortgageSteps[1].image} alt={mortgageSteps[1].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   </div>
                   <div className="w-3/5 p-7 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-3">
                         <span className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center text-xs font-semibold text-brand-700">02</span>
                         <h3 className="font-serif text-xl text-navy-900">{mortgageSteps[1].title}</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{mortgageSteps[1].desc}</p>
                   </div>
                </div>

                {/* Item 3: Side-by-side left reverse */}
                <div className="md:col-span-7 h-[220px] md:h-auto bg-white rounded-[2rem] overflow-hidden flex flex-row-reverse group hover:shadow-xl hover:shadow-brand-500/5 transition-shadow">
                   <div className="w-2/5 relative overflow-hidden">
                      <img src={mortgageSteps[2].image} alt={mortgageSteps[2].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   </div>
                   <div className="w-3/5 p-7 flex flex-col justify-center text-right items-end">
                      <div className="flex items-center gap-3 mb-3 flex-row-reverse">
                         <span className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center text-xs font-semibold text-brand-700">03</span>
                         <h3 className="font-serif text-xl text-navy-900">{mortgageSteps[2].title}</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{mortgageSteps[2].desc}</p>
                   </div>
                </div>

                {/* Item 4: Large right */}
                <div className="md:col-span-5 relative h-[480px] rounded-[2rem] overflow-hidden group">
                   <img src={mortgageSteps[3].image} alt={mortgageSteps[3].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
                   <div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-2xl shadow-xl transform transition-transform duration-300 group-hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-3">
                         <span className="text-brand-600 font-semibold text-xs tracking-widest uppercase">Step 04</span>
                         {mortgageSteps[3].icon}
                      </div>
                      <h3 className="font-serif text-xl text-navy-900 mb-2">{mortgageSteps[3].title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{mortgageSteps[3].desc}</p>
                   </div>
                </div>
             </motion.div>
           ) : (
             <motion.div
                key="refinance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
             >
                {refinanceSteps.slice(0, 2).map((step, i) => (
                   <div key={i} className="relative h-[420px] rounded-[2rem] overflow-hidden group">
                      <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                      <div className="absolute bottom-8 left-8 right-8">
                         <div className="w-12 h-12 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-5">
                            {step.icon}
                         </div>
                         <h3 className="font-serif text-2xl text-white mb-2">{step.title}</h3>
                         <p className="text-white/70 leading-relaxed text-sm">{step.desc}</p>
                      </div>
                   </div>
                ))}
                {/* Bottom CTA Card */}
                <div className="md:col-span-2 bg-gradient-to-r from-brand-600 to-brand-700 rounded-[2rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
                   <div className="relative z-10 max-w-xl">
                      <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">Secure and transparent</h3>
                      <p className="text-white/90 text-base leading-relaxed">
                        {refinanceSteps[2].desc} We ensure your financial interests are protected at every step of the closing.
                      </p>
                   </div>
                   <button onClick={onOpenInquiry} className="relative z-10 mt-6 md:mt-0 bg-white text-brand-700 px-10 py-4 rounded-full font-semibold uppercase tracking-widest shadow-xl hover:bg-navy-900 hover:text-white active:scale-[0.98] transition-all">
                      Start saving
                   </button>
                </div>
             </motion.div>
           )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;