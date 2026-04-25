import React from 'react';
import GenericProductPage from './GenericProductPage';
import { useUI } from '../context/UIContext';

const PurchaseLoans: React.FC = () => {
  const { openInquiry } = useUI();
  return (
    <GenericProductPage 
      onOpenInquiry={openInquiry}
      badge="Loan Programs"
      title="Purchase Mortgage Loans"
      description="Finance the purchase of your new home. Conventional, FHA, VA, USDA, Jumbo, and Non-QM options — all under one roof."
      image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200"
      overview="A purchase mortgage loan is a loan used to finance the purchase of a property, secured against the home you're buying. At Assurant Home Loans, we offer Conventional, FHA, VA, USDA, Jumbo, and Non-QM purchase loans — giving you a full spectrum of options. Our strong relationships with multiple lenders allow us to offer some of the most attractive rates in the industry, with personalized service and fast approvals."
      benefits={[
        { title: "Personalized Service", desc: "We take the time to understand your unique needs and financial situation to find the best loan option for you." },
        { title: "Attractive Rates", desc: "Our strong relationships with multiple lenders allow us to offer some of the most attractive rates in the industry." },
        { title: "Fast Approvals", desc: "We streamline the approval process to get you into your new home as quickly as possible — often in as little as 14 days." }
      ]}
      process={[
        { title: "Pre-approval", desc: "Determine how much home you can afford and show sellers you're a serious buyer." },
        { title: "Home search", desc: "Work with a real estate agent to find the perfect home within your budget." },
        { title: "Loan application", desc: "Complete the application process with guidance from our expert loan officers." },
        { title: "Underwriting & close", desc: "Our team reviews your financials and property details. Once approved, sign documents and receive your keys." }
      ]}
      faqs={[
        { q: "What types of purchase loans do you offer?", a: "Conventional, FHA, VA, USDA, Jumbo, and Non-QM loans. Each is designed for different borrower situations and we'll help you find the best fit." },
        { q: "What is the minimum credit score?", a: "Minimum scores vary by loan type: typically 620 for Conventional, 580 for FHA, and flexible requirements for VA and USDA." },
        { q: "How long does the closing process take?", a: "On average 30-45 days from accepted offer, though we've closed in as little as 14 days in many cases." },
        { q: "Do I need a 20% down payment?", a: "No. Many programs allow much lower down payments: 3-5% for Conventional, 3.5% for FHA, 0% for VA and USDA." }
      ]}
    />
  );
};

export default PurchaseLoans;
