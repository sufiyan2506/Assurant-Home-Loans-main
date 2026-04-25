import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  onOpenInquiry: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  return (
    <motion.footer 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-navy-900 text-white pt-20 pb-10 rounded-t-[2.5rem] md:rounded-t-[4rem] relative z-20 overflow-hidden shadow-2xl"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-10 mb-14">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/assurant-logo.png" alt="Assurant Home Loans" className="h-10 w-auto object-contain brightness-0 invert" />
            </div>
            <h2 className="font-serif text-lg mb-3">ASSURANT <span className="text-brand-500">HOME LOANS</span></h2>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              We are committed to quality customer service, putting the people we serve first, and delivering tailored mortgage solutions with transparency and expertise.
            </p>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest font-semibold mb-5">
              NMLS #1767773
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-600 transition-colors"><Facebook size={16} /></a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-600 transition-colors"><Instagram size={16} /></a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-600 transition-colors"><Linkedin size={16} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-5 text-brand-400">Loan programs</h4>
            <ul className="space-y-3 text-gray-400 text-xs font-medium uppercase tracking-widest">
              <li><Link to="/mortgage/purchase-loans" className="hover:text-white transition-colors">Purchase loans</Link></li>
              <li><Link to="/mortgage/conventional-loans" className="hover:text-white transition-colors">Conventional</Link></li>
              <li><Link to="/mortgage/fha-loans" className="hover:text-white transition-colors">FHA loans</Link></li>
              <li><Link to="/mortgage/va-loans" className="hover:text-white transition-colors">VA loans</Link></li>
              <li><Link to="/mortgage/jumbo-loans" className="hover:text-white transition-colors">Jumbo loans</Link></li>
              <li><Link to="/mortgage/usda-loans" className="hover:text-white transition-colors">USDA loans</Link></li>
              <li><Link to="/mortgage/commercial-loans" className="hover:text-white transition-colors">Commercial</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-5 text-brand-400">Products</h4>
            <ul className="space-y-3 text-gray-400 text-xs font-medium uppercase tracking-widest">
              <li><Link to="/refinance/rate-term-refinance" className="hover:text-white transition-colors">Refinance</Link></li>
              <li><Link to="/refinance/cash-out-refinance" className="hover:text-white transition-colors">Cash-out refi</Link></li>
              <li><Link to="/refinance/reverse-mortgage" className="hover:text-white transition-colors">Reverse mortgage</Link></li>
              <li><Link to="/investors/dscr-loans" className="hover:text-white transition-colors">DSCR loans</Link></li>
              <li><Link to="/investors/bank-statement-loans" className="hover:text-white transition-colors">Bank statement</Link></li>
              <li><Link to="/investors/non-qm-loans" className="hover:text-white transition-colors">Non-QM loans</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-5 text-brand-400">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-500 mt-1 shrink-0" />
                <span className="text-xs">1212 Corporate Dr #117<br/>Irving, Texas 75038</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-500 shrink-0" />
                <a href="tel:9402069406" className="text-xs hover:text-white transition-colors">940-206-9406</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-500 shrink-0" />
                <a href="mailto:sunil@assuranthomeloans.com" className="text-xs break-all hover:text-white transition-colors">sunil@assuranthomeloans.com</a>
              </li>
            </ul>
            <div className="mt-6 space-y-2 text-xs text-gray-500">
              <Link to="/company/about" className="block hover:text-white transition-colors">About us</Link>
              <Link to="/company/team" className="block hover:text-white transition-colors">Our team</Link>
              <Link to="/contact" className="block hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          
           <div className="bg-white/5 p-7 rounded-[1.5rem] border border-white/5">
             <h4 className="font-serif text-xl mb-2">Ready to apply?</h4>
             <p className="text-xs text-gray-400 mb-5">Get pre-qualified in minutes. No credit impact.</p>
             <button onClick={onOpenInquiry} className="w-full py-3.5 bg-brand-500 text-white font-semibold text-xs uppercase tracking-widest hover:bg-white hover:text-brand-600 transition-all rounded-full shadow-lg shadow-brand-500/15 active:scale-[0.98]">
               Apply now
             </button>
           </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 gap-3">
          <p>&copy; {new Date().getFullYear()} Assurant Home Loans. All rights reserved. NMLS #1767773. Equal Housing Opportunity.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link to="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy policy</Link>
            <Link to="/legal/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            <Link to="/legal/licensing" className="hover:text-white transition-colors">Licensing</Link>
            <Link to="/legal/texas-sml-notice" className="hover:text-white transition-colors">Texas SML notice</Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;