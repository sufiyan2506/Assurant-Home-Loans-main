import React from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-navy-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      {/* Logo image */}
      <motion.img
        src="/assurant-logo.png"
        alt="Assurant Home Loans"
        className="w-24 h-24 object-contain"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      
      <div className="relative overflow-hidden mt-6">
        <motion.h1
          className="font-serif text-4xl md:text-6xl tracking-wider text-brand-400"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          ASSURANT
        </motion.h1>
      </div>
      
      <motion.div
        className="mt-4 h-[1px] bg-brand-500/40"
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
      />
      
      <motion.p
        className="mt-4 text-xs tracking-[0.3em] text-white/40 font-sans uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        Home Loans · Irving, TX
      </motion.p>
    </motion.div>
  );
};

export default Preloader;