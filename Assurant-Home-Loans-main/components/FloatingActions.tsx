import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface FloatingProps {
  onOpenInquiry: () => void;
}

const FloatingActions: React.FC<FloatingProps> = ({ onOpenInquiry }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      <motion.button
        onClick={onOpenInquiry}
        className="flex items-center gap-2 bg-navy-900 text-white px-5 py-3 rounded-full shadow-2xl border border-brand-500/20 hover:bg-brand-600 active:scale-[0.97] transition-all"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="font-semibold text-sm uppercase tracking-wider">Get a rate</span>
      </motion.button>
      
      <a 
        href="tel:9402069406"
        className="md:hidden flex items-center justify-center w-12 h-12 bg-white text-navy-900 rounded-full shadow-lg border border-warm-stone"
        aria-label="Call Assurant Home Loans"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
};

export default FloatingActions;