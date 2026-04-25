import React from 'react';
import Hero from '../../components/Hero';
import ReviewsCarousel from '../../components/ReviewsCarousel';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronDown } from 'lucide-react';

interface FAQ {
  q: string;
  a: string;
}

interface Benefit {
  title: string;
  desc: string;
  icon?: React.ReactNode;
}

interface PageProps {
  onOpenInquiry: () => void;
  badge: string;
  title: string;
  description: string;
  image: string;
  benefits: Benefit[];
  overview: string;
  faqs: FAQ[];
  process: { title: string; desc: string }[];
}

const GenericProductPage: React.FC<PageProps> = ({
  onOpenInquiry,
  badge,
  title,
  description,
  image,
  benefits,
  overview,
  faqs,
  process
}) => {
  return (
    <div className="pb-20">
      <Hero 
        onOpenInquiry={onOpenInquiry}
        badge={badge}
        title={title}
        description={description}
        image={image}
        showStats={false}
      />

      {/* Overview */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl mb-8 text-navy-900">Overview</h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            {overview}
          </p>
        </div>
      </section>

      {/* Benefits — clean grid layout with proper spacing */}
      <section className="py-20 md:py-28 bg-warm-ivory">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl mb-16 text-navy-900">Key benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 max-w-6xl">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col gap-5"
              >
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 shrink-0">
                  {benefit.icon || <CheckCircle2 className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl mb-3 text-navy-900">{benefit.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-navy-900 text-white rounded-[2.5rem] mx-2 md:mx-4 my-16 overflow-hidden relative">
        <div className="absolute inset-0 bg-brand-500/3 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl mb-14 text-center">The process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-brand-400/20 font-serif text-5xl mb-5 tabular-nums">0{i + 1}</div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <ReviewsCarousel 
        title="What our clients say"
        subtitle="Real reviews from verified Google clients."
        showStats={false}
        count={6}
        variant="light"
      />

      {/* FAQs */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl mb-10 text-center text-navy-900">Common questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-warm-stone rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none p-5 hover:bg-warm-ivory transition-colors">
                  <h3 className="text-base font-semibold text-navy-900 group-open:text-brand-600 transition-colors pr-4">
                    {faq.q}
                  </h3>
                  <ChevronDown className="w-4 h-4 text-gray-300 group-open:rotate-180 transition-transform shrink-0" />
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="bg-navy-900 rounded-[2rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full -mr-20 -mt-20 blur-3xl" />
            <h2 className="font-serif text-3xl md:text-5xl mb-8 relative z-10 text-balance">Ready to get started?</h2>
            <div className="flex flex-col sm:flex-row gap-5 justify-center relative z-10">
              <button 
                onClick={onOpenInquiry}
                className="bg-brand-500 text-white px-10 py-4 rounded-full font-semibold uppercase tracking-widest hover:bg-brand-400 active:scale-[0.98] transition-all shadow-xl shadow-brand-500/20"
              >
                Apply now
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

export default GenericProductPage;
