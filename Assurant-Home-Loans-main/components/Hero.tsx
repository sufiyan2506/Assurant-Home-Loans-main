import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Star } from 'lucide-react';

interface HeroProps {
  onOpenInquiry: () => void;
  badge?: string;
  title?: React.ReactNode;
  description?: string;
  image?: string;
  showStats?: boolean;
  primaryCTA?: string;
  secondaryCTA?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  onOpenInquiry, 
  badge = "Texas-licensed · 5-star rated · NMLS #1767773",
  title,
  description = "Expert guidance from pre-approval to closing. Average close in 18 days. Transparent rates, zero hidden fees, and a team that answers on weekends.",
  image = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
  showStats = true,
  primaryCTA = "Get pre-qualified",
  secondaryCTA = "Talk to Sunil"
}) => {
  const defaultTitle = (
    <>
      Mortgages Closed in <span className="italic text-brand-600">14 Days</span>. <br className="hidden md:block" />
      Backed by Humans, <span className="italic text-brand-600">Not Bots</span>.
    </>
  );

  return (
    <section id="main-content" className="relative min-h-[85vh] flex items-center pt-28 md:pt-36 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-br from-brand-50/40 to-transparent rounded-bl-[200px]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-warm-cream rounded-tr-[100px] -z-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="inline-block py-1.5 px-4 border border-brand-300/50 text-brand-700 text-[10px] font-semibold tracking-[0.15em] uppercase rounded-full mb-6">
              {badge}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.5rem] lg:text-6xl leading-[1.1] text-navy-900 mb-6 text-balance">
              {title || defaultTitle}
            </h1>
            <p className="text-base md:text-lg text-gray-500 md:max-w-md leading-relaxed font-light">
              {description}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <button
              onClick={onOpenInquiry}
              className="group flex items-center justify-center gap-3 bg-navy-900 text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-brand-600 active:scale-[0.98] transition-all duration-200 shadow-xl shadow-navy-900/10 rounded-full"
            >
              {primaryCTA}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:9402069406"
              className="flex items-center justify-center gap-3 px-8 py-4 border border-navy-200 text-navy-900 uppercase tracking-widest text-sm hover:bg-white hover:border-brand-400 active:scale-[0.98] transition-all duration-200 rounded-full"
            >
              {secondaryCTA}
            </a>
          </motion.div>
          
          {showStats && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-5 pt-4"
            >
               <div className="flex gap-0.5">
                 {[1,2,3,4,5].map(i => (
                   <Star key={i} className="w-4 h-4 fill-brand-500 text-brand-500" />
                 ))}
               </div>
               <div className="h-4 w-px bg-gray-200" />
               <p className="text-sm text-gray-500 font-medium">5.0 on Google · 13 reviews</p>
            </motion.div>
          )}
        </div>

        {/* Visual */}
        <motion.div
          className="relative h-[450px] md:h-[520px] w-full hidden md:block"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-warm-stone rounded-[2rem] overflow-hidden shadow-2xl shadow-navy-900/8">
             <img 
               src={image} 
               alt="Modern Texas home exterior" 
               className="w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-[2s]"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
          </div>
          
          {/* Floating Review Card */}
          <motion.div 
            className="absolute -bottom-6 -left-6 bg-white p-5 shadow-xl shadow-navy-900/8 max-w-[260px] rounded-2xl border border-warm-stone/50"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex gap-0.5 mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-brand-500 text-brand-500" />)}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">"Closed in 2 weeks — nearly impossible with big banks."</p>
            <p className="text-xs font-semibold text-navy-900">— Bimal S., Google Review</p>
          </motion.div>

          {/* Floating Stat */}
          <motion.div
            className="absolute -top-4 -right-4 bg-navy-900 text-white px-5 py-3 rounded-2xl shadow-lg"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <p className="text-2xl font-serif tabular-nums">14<span className="text-brand-400 text-sm ml-1">days</span></p>
            <p className="text-[10px] text-white/50 uppercase tracking-widest">Avg close time</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <ChevronDown className="text-navy-900/20" />
      </motion.div>
    </section>
  );
};

export default Hero;