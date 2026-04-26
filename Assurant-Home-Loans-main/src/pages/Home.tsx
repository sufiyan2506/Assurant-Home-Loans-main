import React from 'react';
import Hero from '../../components/Hero';
import TrustIndicators from '../../components/TrustIndicators';
import Services from '../../components/Services';
import Portfolio from '../../components/Portfolio';
import OverseasSection from '../../components/OverseasSection';
import ValueStack from '../../components/ValueStack';
import ReviewsCarousel from '../../components/ReviewsCarousel';
import { useUI } from '../context/UIContext';

const Home: React.FC = () => {
  const { openInquiry } = useUI();
  
  return (
    <>
      <Hero onOpenInquiry={openInquiry} />
      <TrustIndicators />
      <Services onOpenInquiry={openInquiry} />
      <div className="py-6 md:py-10" />
      <Portfolio />
      <div className="py-6 md:py-10" />
      <ValueStack />
      <div className="py-10 md:py-16" />
      <ReviewsCarousel 
        title="Trusted by homeowners across Texas"
        subtitle="From first-time buyers to seasoned investors, our clients consistently highlight speed, transparency, and competitive rates."
        variant="dark"
      />
      <div className="py-6 md:py-10" />
      <OverseasSection onOpenInquiry={openInquiry} />
    </>
  );
};

export default Home;
