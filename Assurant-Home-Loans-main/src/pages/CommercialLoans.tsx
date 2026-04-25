import React from 'react';
import Hero from '../../components/Hero';
import ReviewsCarousel from '../../components/ReviewsCarousel';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, Wallet, Receipt, ChevronDown, Briefcase, DollarSign, FileText, Shield, Landmark, CreditCard, PiggyBank, Banknote } from 'lucide-react';
import { useUI } from '../context/UIContext';

const loanTypes = [
  { name: 'Fix & flip / Bridge loans', icon: <Building2 className="w-5 h-5" /> },
  { name: 'Short-term financing', icon: <Wallet className="w-5 h-5" /> },
  { name: 'Medium-term financing', icon: <Banknote className="w-5 h-5" /> },
  { name: 'SBA loan', icon: <Landmark className="w-5 h-5" /> },
  { name: 'Equipment financing', icon: <Briefcase className="w-5 h-5" /> },
  { name: 'Invoice financing', icon: <Receipt className="w-5 h-5" /> },
  { name: 'Asset-based lending', icon: <PiggyBank className="w-5 h-5" /> },
  { name: 'Unsecured working capital', icon: <DollarSign className="w-5 h-5" /> },
  { name: 'Line of credit', icon: <CreditCard className="w-5 h-5" /> },
  { name: 'Commercial real estate', icon: <Building2 className="w-5 h-5" /> },
];

const CommercialLoans: React.FC = () => {
  const { openInquiry } = useUI();

  return (
    <div className="pb-20">
      <Hero 
        onOpenInquiry={openInquiry}
        badge="Commercial lending · NMLS #1767773"
        title="Commercial loans built for growing businesses"
        description="As your company grows, expanding your workspace through a commercial mortgage becomes increasingly important. We guide you through every step of the process."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
        showStats={false}
        primaryCTA="Get started"
        secondaryCTA="Call 940-206-9406"
      />

      {/* Key Benefits */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl mb-16 text-navy-900">Why choose a commercial loan?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Keep control of ownership', desc: 'Build equity in your business property instead of paying rent to a landlord.', icon: <Shield className="w-6 h-6" /> },
              { title: 'Benefit from appreciation', desc: 'Commercial properties historically appreciate in value, building long-term wealth.', icon: <TrendingUp className="w-6 h-6" /> },
              { title: 'Improve cash flow', desc: 'Stabilize monthly costs with a fixed-rate mortgage instead of rising rent.', icon: <Wallet className="w-6 h-6" /> },
              { title: 'Reduce business taxes', desc: 'Mortgage interest and depreciation can provide significant tax deductions.', icon: <Receipt className="w-6 h-6" /> },
            ].map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-5"
              >
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600">
                  {b.icon}
                </div>
                <h3 className="font-serif text-xl text-navy-900">{b.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Commercial Loans Work */}
      <section className="py-20 md:py-28 bg-warm-ivory">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl mb-10 text-navy-900">How do commercial loans work?</h2>
          <div className="space-y-8 text-gray-500 leading-relaxed">
            <p>
              A commercial loan differs from a residential mortgage in that the collateral used to secure a commercial loan is a commercial building or business real estate instead of a residential property. Commercial mortgages are generally assumed by a business entity instead of an individual borrower. As a result, assessing and securing a commercial mortgage is somewhat more complicated than a residential mortgage.
            </p>
            <p>
              At Assurant Home Loans it's our privilege to guide you through this process. Two of the most important aspects of a commercial mortgage to keep in mind are <strong className="text-navy-900">interest rate</strong> and <strong className="text-navy-900">loan repayment schedule</strong>.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white rounded-2xl p-8 border border-warm-stone">
                <h3 className="font-serif text-xl mb-4 text-navy-900">Interest rate</h3>
                <p className="text-sm leading-relaxed">
                  Most commercial loans offered today are fixed, giving you the security of knowing your monthly payments won't increase. Some borrowers opt for a variable interest rate to take advantage of lower initial payments, though this carries the risk of rate increases over time.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-warm-stone">
                <h3 className="font-serif text-xl mb-4 text-navy-900">Loan repayment schedule</h3>
                <p className="text-sm leading-relaxed">
                  Unlike residential mortgages, most commercial loans require a balloon payment at some point during the loan term. Longer repayment schedules typically carry higher interest rates. We'll help you choose the right balance for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Types Grid */}
      <section className="py-20 md:py-28 bg-navy-900 text-white rounded-[2.5rem] mx-2 md:mx-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-brand-500/3 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 text-center">Commercial financing solutions</h2>
          <p className="text-center text-gray-400 mb-14 max-w-xl mx-auto">We offer a comprehensive range of commercial financing products to match your business needs.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {loanTypes.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 hover:border-brand-500/30 transition-all cursor-default"
              >
                <div className="w-10 h-10 bg-brand-500/15 rounded-xl flex items-center justify-center text-brand-400 mx-auto mb-3">
                  {type.icon}
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/80">{type.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Is Commercial Right for Me? */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl mb-10 text-navy-900">Is a commercial loan right for me?</h2>
          <p className="text-gray-500 mb-8 text-lg">If you're considering any of the following as a means to grow your business, a commercial mortgage might be right for you:</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Purchase of a building or space in which to do business',
              'Extending current work space',
              'Investing in commercial or residential properties',
              'Developing properties for commercial use',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-warm-ivory rounded-2xl border border-warm-stone">
                <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-brand-500" />
                </div>
                <p className="text-navy-900 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 md:py-28 bg-warm-ivory">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl mb-10 text-navy-900">Qualifications for a commercial mortgage</h2>
          <div className="space-y-6 text-gray-500 leading-relaxed">
            <p>
              Qualification for a commercial mortgage depends largely on the type of property or building being applied for. Despite some specifics on certain properties, there are general criteria for qualification.
            </p>
            <div className="space-y-4">
              {[
                'Your company must demonstrate an appropriate debt-to-cash ratio',
                'Even with a poor credit rating, good personal credit and sufficient liquid assets from the primary owner can help',
                'Your company will need to show a continued and stable pattern of profitability',
                'Plans for future growth, including business plans, earning projections, and long-term business goals',
              ].map((item, i) => (
                <details key={i} className="group border border-warm-stone rounded-2xl overflow-hidden bg-white">
                  <summary className="flex items-center justify-between cursor-pointer list-none p-5 hover:bg-warm-ivory transition-colors">
                    <h3 className="text-base font-semibold text-navy-900 group-open:text-brand-600 transition-colors pr-4">
                      {item}
                    </h3>
                    <ChevronDown className="w-4 h-4 text-gray-300 group-open:rotate-180 transition-transform shrink-0" />
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-500 leading-relaxed text-sm">
                      Contact us at 940-206-9406 for a more detailed and personalized assessment of your commercial mortgage qualifications.
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsCarousel 
        title="What our clients say"
        subtitle="Real reviews from verified Google clients."
        showStats={false}
        count={6}
        variant="light"
      />

      {/* Final CTA */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="bg-navy-900 rounded-[2rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full -mr-20 -mt-20 blur-3xl" />
            <h2 className="font-serif text-3xl md:text-5xl mb-4 relative z-10 text-balance">Looking for a commercial loan?</h2>
            <p className="text-gray-400 mb-8 relative z-10 max-w-lg mx-auto">
              Please speak with one of our representatives today. We'll guide you every step of the way and customize a commercial mortgage solution specific for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center relative z-10">
              <button 
                onClick={openInquiry}
                className="bg-brand-500 text-white px-10 py-4 rounded-full font-semibold uppercase tracking-widest hover:bg-brand-400 active:scale-[0.98] transition-all shadow-xl shadow-brand-500/20"
              >
                Get started now
              </button>
              <a 
                href="tel:9402069406"
                className="bg-transparent border border-white/20 text-white px-10 py-4 rounded-full font-semibold uppercase tracking-widest hover:bg-white hover:text-navy-900 active:scale-[0.98] transition-all"
              >
                Call 940-206-9406
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommercialLoans;
