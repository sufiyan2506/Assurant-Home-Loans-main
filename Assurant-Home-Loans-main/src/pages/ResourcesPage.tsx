import React from 'react';
import Hero from '../../components/Hero';
import ReviewsCarousel from '../../components/ReviewsCarousel';
import { BookOpen, Calculator, Search, HelpCircle, FileText } from 'lucide-react';
import { useUI } from '../context/UIContext';

interface ResourcesPageProps {
  title: string;
}

const ResourcesPage: React.FC<ResourcesPageProps> = ({ title }) => {
  const { openInquiry } = useUI();
  
  return (
    <div className="pb-20">
      <Hero 
        onOpenInquiry={openInquiry}
        badge="Resources"
        title={title}
        description="Empowering you with knowledge to make informed mortgage decisions. Everything you need to navigate the home loan journey."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200"
        showStats={false}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-brand-50 rounded-[2rem] p-8 md:p-12 mb-16 border border-brand-100">
            <h2 className="font-serif text-3xl mb-6 text-navy-900">Educational guide</h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              We are currently finalizing our deep-dive resources for <strong>{title}</strong>. 
              Our goal is to provide you with the most accurate, up-to-date market information in Texas and surrounding areas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-600 shadow-sm shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-navy-900">Mortgage 101</h4>
                  <p className="text-sm text-gray-500">The basics of how interest rates and equity work.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-600 shadow-sm shrink-0">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-navy-900">Payment strategy</h4>
                  <p className="text-sm text-gray-500">Choosing between fixed and adjustable rate options.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="font-serif text-2xl mb-4 text-navy-900">Why knowledge matters</h3>
              <p className="text-gray-500 leading-relaxed">
                The mortgage market in 2025 is more dynamic than ever. Small shifts in the economy can mean significant savings over the life of your loan. By understanding the terminology and the process, you can position yourself for the best possible rates.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-4">
                 <div className="text-brand-600 flex items-center gap-2">
                   <Search className="w-5 h-5" />
                   <span className="font-semibold uppercase tracking-widest text-xs">Research</span>
                 </div>
                 <h4 className="font-semibold text-lg text-navy-900">Market research</h4>
                 <p className="text-sm text-gray-500 leading-relaxed">
                   Our team tracks daily adjustments in lending criteria from over 50 institutional partners to ensure the guides we provide are actionable and relevant.
                 </p>
               </div>
               <div className="space-y-4">
                 <div className="text-brand-600 flex items-center gap-2">
                   <FileText className="w-5 h-5" />
                   <span className="font-semibold uppercase tracking-widest text-xs">Verify</span>
                 </div>
                 <h4 className="font-semibold text-lg text-navy-900">Document prep</h4>
                 <p className="text-sm text-gray-500 leading-relaxed">
                   Knowing which documents to have ready can shave weeks off your closing time. We help you organize your financial profile for speed.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews on Resources page */}
      <ReviewsCarousel 
        title="Trusted by Texas homeowners"
        showStats={false}
        variant="light"
        count={6}
      />

      {/* Resources CTA */}
      <section className="py-20 bg-navy-900 text-white rounded-[2.5rem] mx-2 md:mx-4 overflow-hidden relative">
        <div className="container mx-auto px-6 text-center">
            <HelpCircle className="w-16 h-16 text-brand-400 mx-auto mb-8 opacity-50" />
            <h2 className="font-serif text-3xl md:text-5xl mb-8">Need custom clarification?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
                Sometimes a generic guide isn't enough. Speak with a loan officer today for a personalized walkthrough of your specific scenario.
            </p>
            <button 
              onClick={openInquiry}
              className="bg-brand-500 text-white px-10 py-4 rounded-full font-semibold uppercase tracking-widest hover:bg-white hover:text-brand-600 active:scale-[0.98] transition-all shadow-xl"
            >
              Talk to an expert
            </button>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
