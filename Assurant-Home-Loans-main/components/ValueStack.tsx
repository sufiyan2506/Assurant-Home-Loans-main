import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const traditional = [
  "Hidden fees and closing surprises",
  "Rigid, outdated lending criteria",
  "Weeks of radio silence from banks",
  "Endless paperwork and faxing",
  "Vague, confusing status updates",
  "Rising rates during long approvals"
];

const assurantStandard = [
  "Direct access to top-tiered lenders",
  "Low-rate lock guarantee",
  "14–20 day closing average",
  "Digital, paperless experience",
  "Real-time application tracking",
  "No hidden processing fees"
];

const ValueStack: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-navy-900 text-white rounded-[2.5rem] md:rounded-[4rem] relative z-10 overflow-hidden mx-2 md:mx-4 shadow-2xl">
      {/* Abstract bg */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-3xl md:text-5xl mb-6 leading-tight text-balance"
          >
            Stop chasing <span className="text-red-400/80 line-through decoration-red-400/60 decoration-2">banks</span>. <br/>
            Start owning your <span className="text-brand-400">home</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg font-light"
          >
            The traditional mortgage process is fragmented. We simplified it with a unified lending platform backed by a team that closes in 14 days.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto items-center">
            {/* The Old Way */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 md:p-10 rounded-[1.5rem] bg-white/5 border border-white/5 backdrop-blur-sm grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
            >
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <h3 className="font-serif text-2xl text-gray-400">The market reality</h3>
                </div>
                <ul className="space-y-5">
                    {traditional.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-gray-500">
                            <X className="w-5 h-5 text-red-500/50 mt-0.5 shrink-0" />
                            <span className="font-light">{item}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* The New Way */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative p-8 md:p-12 rounded-[1.5rem] bg-gradient-to-br from-navy-800 to-navy-950 border border-brand-500/20 shadow-2xl shadow-brand-900/20 md:scale-105 z-10"
            >
                {/* Badge */}
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-500 text-white text-[10px] font-semibold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                    The smart choice
                </div>

                <div className="flex items-center gap-3 mb-8">
                    <div className="w-3 h-3 rounded-full bg-brand-500" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
                    <h3 className="font-serif text-2xl md:text-3xl text-white">The Assurant advantage</h3>
                </div>
                <ul className="space-y-5">
                    {assurantStandard.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-white">
                            <div className="flex-none w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center">
                                <Check className="w-3.5 h-3.5 text-brand-400 stroke-[3px]" />
                            </div>
                            <span className="text-base md:text-lg font-medium">{item}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-10 pt-8 border-t border-white/10 text-center">
                    <p className="font-serif text-brand-400 italic text-lg">"We secure your future, one loan at a time."</p>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueStack;