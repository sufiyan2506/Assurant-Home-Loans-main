import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingActions from '../../components/FloatingActions';
import InquiryModal from '../../components/InquiryModal';
import Preloader from '../../components/Preloader';
import ScrollToTop from '../../components/ScrollToTop';
import { useUI } from '../context/UIContext';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const { isInquiryModalOpen, openInquiry, closeInquiry } = useUI();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-warm-ivory font-sans text-navy-900">
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar onOpenInquiry={openInquiry} />
          
          <div className="relative z-10 flex flex-col">
            {children}
            <Footer onOpenInquiry={openInquiry} />
          </div>

          <FloatingActions onOpenInquiry={openInquiry} />

          <AnimatePresence>
            {isInquiryModalOpen && <InquiryModal onClose={closeInquiry} />}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default MainLayout;
