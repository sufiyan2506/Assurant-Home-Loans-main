import React from 'react';
import GenericProductPage from './GenericProductPage';
import { useUI } from '../context/UIContext';

const RateTermRefinance: React.FC = () => {
  const { openInquiry } = useUI();
  return (
    <GenericProductPage 
      onOpenInquiry={openInquiry}
      badge="Refinance"
      title="Refinance Your Mortgage"
      description="Lower your monthly payments, consolidate debt, drop PMI, or switch from adjustable to fixed rate. Find the right refinancing solution."
      image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200"
      overview="Refinancing replaces your existing loan with a new one that has different terms — typically a lower interest rate, a different loan term, or both. This is ideal when market rates have dropped since you originally purchased your home. At Assurant Home Loans, our staff of refinance experts will evaluate your mortgage needs and draft a plan that saves you money. Whether you're consolidating first and second mortgages, getting a lower rate, or switching from adjustable to fixed, we have the solution."
      benefits={[
        { title: "Lower Monthly Payment", desc: "Obtain a lower interest rate or extend your term. Switch from a variable rate to a fixed rate for stability and smaller payments." },
        { title: "Cash-Out Equity", desc: "Access the equity in your home for college, renovations, starting a business, or consolidating high-interest credit card debt." },
        { title: "Drop PMI", desc: "If your home value has increased and you have 20%+ equity, refinancing can eliminate Private Mortgage Insurance — lowering your overall monthly payment." }
      ]}
      process={[
        { title: "Financial review", desc: "Analyze your current mortgage and determine potential savings. Check if rates are lower than your current rate." },
        { title: "New application", desc: "Apply for a new loan with your specific rate and term goals. Gather pay stubs, W-2s, tax returns, and asset statements." },
        { title: "Home appraisal", desc: "Verify current home value to determine your loan-to-value ratio. Schedule early — this is where most delays occur." },
        { title: "Final funding", desc: "Your new loan pays off the old one, and your new terms begin. Closing costs run 1-2% of the loan amount." }
      ]}
      faqs={[
        { q: "When is the best time to refinance?", a: "When rates are at least 0.75% to 1% lower than your current rate, or when you've built enough equity to drop PMI. If you plan to stay 2+ years, refinancing often makes sense." },
        { q: "What does refinancing cost?", a: "Closing costs typically run 1-2% of the loan amount, including lender fees. Low- and no-cost refinancing options are available that eliminate some or all fees." },
        { q: "How long does refinancing take?", a: "Typically 2 to 4 weeks. Getting your home appraised is where most delays occur, so schedule early." },
        { q: "Does bad credit prevent refinancing?", a: "Not exactly. You can still qualify, but the better your credit score, the better interest rate you'll receive. Make sure the rate reduction is enough to justify the refinance." },
        { q: "What is PMI?", a: "Private Mortgage Insurance — required for borrowers with less than 20% down payment. Refinancing can eliminate it if your home value has increased enough." }
      ]}
    />
  );
};

export default RateTermRefinance;
