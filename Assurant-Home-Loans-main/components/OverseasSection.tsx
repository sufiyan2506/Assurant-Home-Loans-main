import React from 'react';
import { Globe, Video, FileText } from 'lucide-react';

interface OverseasProps {
  onOpenInquiry: () => void;
}

const OverseasSection: React.FC<OverseasProps> = ({ onOpenInquiry }) => {
  return (
    <section id="overseas" className="py-24 md:py-32 bg-white relative z-0">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 order-2 md:order-1">
             <div className="grid grid-cols-2 gap-4">
               <div className="bg-warm-cream p-6 rounded-2xl">
                 <Video className="w-8 h-8 text-brand-600 mb-4" />
                 <h4 className="font-semibold mb-2 text-navy-900">Market watch</h4>
                 <p className="text-sm text-gray-500">Monthly reports on interest rate shifts and property market trends in Texas.</p>
               </div>
               <div className="bg-warm-cream p-6 rounded-2xl">
                 <FileText className="w-8 h-8 text-brand-600 mb-4" />
                 <h4 className="font-semibold mb-2 text-navy-900">e-Sign ready</h4>
                 <p className="text-sm text-gray-500">Apply, sign, and securely submit your documents from your mobile device.</p>
               </div>
             </div>
             <div className="mt-8 bg-warm-ivory p-8 rounded-2xl border border-brand-200/30">
               <h3 className="font-serif text-2xl mb-2 text-navy-900">Professional loan advisory</h3>
               <p className="text-gray-600 mb-6">Stop worrying about complex rates and banking bureaucracy. Get institutional-grade mortgage advice from your loan officer directly.</p>
               <button onClick={onOpenInquiry} className="text-brand-600 font-semibold uppercase text-sm tracking-widest border-b border-brand-600 pb-1 hover:text-brand-700 transition-colors">Talk to an advisory expert</button>
             </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="text-brand-500" />
              <span className="text-sm font-semibold tracking-widest uppercase text-gray-400">Global reach</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-navy-900">
              Investing in property from <span className="text-brand-600 italic">anywhere?</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Unlock competitive financing options from the comfort of your home country. We provide full-service mortgage advisory with weekend availability and multi-language support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverseasSection;