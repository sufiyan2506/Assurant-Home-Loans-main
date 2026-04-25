import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Clock } from 'lucide-react';
import ReviewsCarousel from '../../components/ReviewsCarousel';
import { useUI } from '../context/UIContext';

const Contact: React.FC<{ onOpenInquiry?: () => void }> = ({ onOpenInquiry: propOpenInquiry }) => {
  const { openInquiry } = useUI();
  const onOpen = propOpenInquiry || openInquiry;

  return (
    <div className="pt-20">
      <section className="py-20 bg-warm-ivory">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20">
              {/* Left Column */}
              <div>
                <span className="text-brand-600 font-semibold tracking-widest uppercase text-xs">Get in touch</span>
                <h1 className="font-serif text-5xl md:text-7xl mt-4 mb-8 text-navy-900">Let's talk <br /> <span className="italic text-brand-600">home loans</span>.</h1>
                <p className="text-xl text-gray-500 leading-relaxed mb-12">
                  Our dedicated loan officers are available to answer your questions — even on weekends. No pressure, just expert advice from people who've closed hundreds of Texas mortgages.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-600 shadow-sm">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900">Email us</h3>
                      <a href="mailto:sunil@assuranthomeloans.com" className="text-gray-500 hover:text-brand-600 transition-colors">sunil@assuranthomeloans.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-600 shadow-sm">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900">Call us</h3>
                      <a href="tel:9402069406" className="text-gray-500 hover:text-brand-600 transition-colors">940-206-9406</a>
                      <p className="text-xs text-gray-400 mt-1">Fax: 469-283-1789</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-600 shadow-sm">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900">Visit our office</h3>
                      <p className="text-gray-500">1212 Corporate Dr #117</p>
                      <p className="text-gray-500">Irving, Texas 75038</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-600 shadow-sm">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900">Office hours</h3>
                      <p className="text-gray-500">Mon–Fri: 8:00 AM – 7:00 PM CT</p>
                      <p className="text-gray-500">Weekends: By appointment</p>
                    </div>
                  </div>
                  <div className="pt-8 border-t border-warm-stone">
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">Company licensing</p>
                    <p className="text-sm text-gray-500 mt-2 font-serif">NMLS #1767773 · Equal Housing Opportunity</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Form Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-12 rounded-[2.5rem] shadow-xl shadow-navy-900/5 border border-warm-stone"
              >
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">Full name</label>
                    <input type="text" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-brand-400 focus:bg-white transition-all" placeholder="e.g. Sarah Johnson" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">Email address</label>
                    <input type="email" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-brand-400 focus:bg-white transition-all" placeholder="sarah@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">Phone</label>
                    <input type="tel" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-brand-400 focus:bg-white transition-all" placeholder="(940) 555-1234" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">Message</label>
                    <textarea rows={4} className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-brand-400 focus:bg-white transition-all resize-none" placeholder="Tell us about your mortgage needs..."></textarea>
                  </div>
                  <button className="w-full flex items-center justify-center gap-3 bg-navy-900 text-white p-5 rounded-full font-semibold uppercase tracking-widest hover:bg-brand-600 active:scale-[0.98] transition-all shadow-xl">
                    Send message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-2">We typically respond within 1 business hour.</p>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews on Contact Page */}
      <ReviewsCarousel 
        title="Hear from our clients"
        subtitle="13 five-star reviews on Google — and counting."
        variant="dark"
        showStats={false}
        count={6}
      />

      {/* Map Section */}
      <section className="h-[400px] w-full bg-gray-200 grayscale contrast-125">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-50" />
      </section>
    </div>
  );
};

export default Contact;
