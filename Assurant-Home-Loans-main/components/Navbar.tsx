import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onOpenInquiry: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks: { name: string; href: string; children?: { name: string; href: string }[] }[] = [
    { name: 'Home', href: '/' },
    { 
      name: 'Loan Programs', 
      href: '/mortgage/purchase-loans',
      children: [
        { name: 'Purchase loans', href: '/mortgage/purchase-loans' },
        { name: 'Conventional loans', href: '/mortgage/conventional-loans' },
        { name: 'FHA loans', href: '/mortgage/fha-loans' },
        { name: 'VA loans', href: '/mortgage/va-loans' },
        { name: 'Jumbo loans', href: '/mortgage/jumbo-loans' },
        { name: 'USDA loans', href: '/mortgage/usda-loans' },
        { name: 'Commercial loans', href: '/mortgage/commercial-loans' },
        { name: 'Refinance', href: '/refinance/rate-term-refinance' },
        { name: 'Cash-out refi', href: '/refinance/cash-out-refinance' },
        { name: 'Reverse mortgage', href: '/refinance/reverse-mortgage' },
        { name: 'DSCR loans', href: '/investors/dscr-loans' },
        { name: 'Bank statement', href: '/investors/bank-statement-loans' },
        { name: 'Non-QM loans', href: '/investors/non-qm-loans' },
      ]
    },
    { name: 'Apply', href: '/closings/apply' },
    { 
      name: 'Company', 
      href: '/company/about',
      children: [
        { name: 'About us', href: '/company/about' },
        { name: 'Our team', href: '/company/team' },
        { name: 'Contact', href: '/contact' },
      ]
    },
  ];

  const isActive = (href: string) => location.pathname === href || (href !== '/' && location.pathname.startsWith(href.split('/').slice(0, 3).join('/')));

  return (
    <>
      {/* Top Trust Banner */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-navy-900 text-white/70 text-[10px] md:text-xs text-center py-1.5 font-medium tracking-wide transition-all duration-300 ${isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100'}`}>
        5.0 ★ on Google · Closed in as little as 14 days · NMLS #1767773 · <a href="tel:9402069406" className="text-brand-400 hover:text-brand-300 transition-colors">940-206-9406</a>
      </div>

      <motion.nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'top-0 bg-white/95 backdrop-blur-xl shadow-sm shadow-navy-900/5 py-2' 
            : 'top-7 bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/assurant-logo.svg" alt="Assurant Home Loans" className="h-10 lg:h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.children ? (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className={`flex items-center gap-1 text-[12px] font-semibold uppercase tracking-[0.08em] px-4 py-2 rounded-lg transition-colors ${
                    isActive(link.href) 
                      ? 'text-brand-700' 
                      : 'text-navy-700 hover:text-brand-600'
                  }`}>
                    {link.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>

                  {isActive(link.href) && (
                    <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-500 rounded-full" />
                  )}

                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className={`absolute top-full left-0 bg-white shadow-xl shadow-navy-900/8 rounded-2xl p-3 border border-warm-stone/50 mt-1 ${
                          link.name === 'Loan Programs' ? 'w-[480px] grid grid-cols-2 gap-0.5' : 'w-56 flex flex-col gap-0.5'
                        }`}
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${
                              location.pathname === child.href 
                                ? 'text-brand-700 bg-brand-50' 
                                : 'text-gray-600 hover:text-brand-700 hover:bg-brand-50/50'
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-[12px] font-semibold uppercase tracking-[0.08em] px-4 py-2 rounded-lg transition-colors ${
                    location.pathname === link.href
                      ? 'text-brand-700'
                      : 'text-navy-700 hover:text-brand-600'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
            
            <a href="tel:9402069406" className="flex items-center gap-2 text-xs font-semibold text-navy-600 hover:text-brand-600 transition-colors ml-3">
              <Phone className="w-4 h-4" />
              940-206-9406
            </a>

            <button
              onClick={onOpenInquiry}
              className="ml-3 px-6 py-2.5 bg-navy-900 text-white text-xs font-semibold uppercase tracking-widest hover:bg-brand-600 active:scale-[0.98] transition-all duration-200 rounded-full shadow-lg shadow-navy-900/10"
            >
              Get pre-qualified
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-navy-900 p-2 z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="lg:hidden bg-white fixed inset-0 z-40 pt-28 pb-10 overflow-y-auto"
            >
              <div className="flex flex-col p-8 gap-10">
                {navLinks.map((link, groupIndex) => (
                  <motion.div 
                    key={link.name} 
                    className="space-y-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: groupIndex * 0.06 }}
                  >
                    {link.children ? (
                      <>
                        <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-600 border-b border-brand-100 pb-3">
                          {link.name}
                        </h4>
                        <div className="grid grid-cols-1 gap-4">
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className={`text-xl font-serif transition-colors ${
                                location.pathname === child.href 
                                  ? 'text-brand-600' 
                                  : 'text-navy-800 hover:text-brand-600'
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        to={link.href}
                        className={`text-2xl font-serif block transition-colors ${
                          location.pathname === link.href 
                            ? 'text-brand-600' 
                            : 'text-navy-800 hover:text-brand-600'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                <div className="pt-4 space-y-4">
                  <a href="tel:9402069406" className="block text-center py-4 border border-navy-200 text-navy-900 uppercase tracking-widest text-sm font-semibold rounded-full">
                    Call 940-206-9406
                  </a>
                  <button
                    onClick={() => {
                      onOpenInquiry();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full py-5 bg-navy-900 text-white uppercase tracking-widest text-sm font-semibold rounded-full shadow-xl hover:bg-brand-600 active:scale-[0.98] transition-all"
                  >
                    Get pre-qualified
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;