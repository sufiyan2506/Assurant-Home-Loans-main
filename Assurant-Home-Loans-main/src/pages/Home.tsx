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
      <ReviewsCarousel 
        title="Don't take our word for it"
        subtitle="Every review is from a verified Google client. 5.0 stars across 13 reviews — zero complaints."
        variant="light"
      />
      <div className="py-6 md:py-10" />
      <Portfolio />
      <div className="py-6 md:py-10" />
      <ValueStack />
      <div className="py-10 md:py-16" />
      <ReviewsCarousel 
        title="Trusted by homeowners across Texas"
        subtitle="From first-time buyers to seasoned investors, our clients consistently highlight speed, transparency, and competitive rates."
        variant="dark"
        showStats={false}
        count={8}
      />
      <div className="py-6 md:py-10" />
      <OverseasSection onOpenInquiry={openInquiry} />
    </>
  );
};

export default Home;
