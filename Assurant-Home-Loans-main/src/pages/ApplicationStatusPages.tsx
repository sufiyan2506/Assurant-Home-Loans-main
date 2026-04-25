import React from 'react';
import { motion } from 'framer-motion';
import { Upload, FileCheck, ArrowRight, ShieldCheck, Clock, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const UploadDocuments: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-warm-ivory min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-[2rem] shadow-xl shadow-navy-900/5 overflow-hidden border border-warm-stone">
          <div className="bg-navy-900 p-8 md:p-12 text-white flex items-center justify-between">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl mb-2">Secure document vault</h1>
              <p className="text-gray-400">Upload your financial records directly to our underwriting team.</p>
            </div>
            <Lock className="w-10 h-10 text-brand-400 hidden md:block" />
          </div>
          
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 bg-sage-400/10 border border-sage-400/20 rounded-2xl flex gap-4">
                <ShieldCheck className="w-6 h-6 text-sage-600 shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">AES-256 encryption</h4>
                  <p className="text-xs text-gray-500">Your documents are encrypted at rest and in transit.</p>
                </div>
              </div>
              <div className="p-6 bg-navy-50 border border-navy-100 rounded-2xl flex gap-4">
                <FileCheck className="w-6 h-6 text-navy-600 shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">Auto-verification</h4>
                  <p className="text-xs text-gray-500">AI-powered scanning checks for legibility instantly.</p>
                </div>
              </div>
            </div>

            <div className="border-4 border-dashed border-warm-stone rounded-[2rem] py-20 flex flex-col items-center justify-center text-center px-6 group hover:border-brand-300 transition-colors">
              <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform">
                <Upload className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-navy-900">Drag & drop documents</h3>
              <p className="text-gray-500 mb-8 max-w-sm mx-auto">Upload bank statements, tax returns, or ID. Max 25MB per file.</p>
              <button className="bg-navy-900 text-white px-10 py-4 rounded-full font-semibold uppercase tracking-widest hover:bg-brand-600 active:scale-[0.98] transition-all shadow-lg">
                Browse files
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-warm-stone">
               <h4 className="font-semibold mb-6 text-sm uppercase tracking-widest text-gray-400">Required items checklist</h4>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {['Last 2 pay stubs', 'Last 2 years W-2s', 'Copy of driver\'s license', 'Recent bank statements'].map((item) => (
                   <div key={item} className="flex items-center gap-3 text-gray-600">
                     <div className="w-4 h-4 rounded border-2 border-brand-300" />
                     <span className="text-sm">{item}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ResumeApplication: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-md">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 mx-auto mb-8">
            <Clock className="w-10 h-10" />
          </div>
          <h1 className="font-serif text-4xl mb-4 text-navy-900">Resume application</h1>
          <p className="text-gray-500 mb-12">Enter the email you used to start your application to pick up right where you left off.</p>
          
          <div className="space-y-6">
            <div className="text-left">
               <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Email address</label>
               <input 
                 type="email" 
                 placeholder="name@example.com"
                 className="w-full px-6 py-4 bg-gray-50 border border-warm-stone rounded-2xl focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all"
               />
            </div>
            <button className="w-full bg-navy-900 text-white py-5 rounded-2xl font-semibold uppercase tracking-widest hover:bg-brand-600 active:scale-[0.98] transition-all shadow-xl flex items-center justify-center gap-3">
              Continue <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-gray-400">By continuing, you agree to our terms of service and privacy policy.</p>
          </div>

          <div className="mt-20 pt-8 border-t border-warm-stone">
             <p className="text-sm text-gray-500">Need help? <Link to="/contact" className="text-brand-600 font-semibold underline">Contact support</Link></p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
