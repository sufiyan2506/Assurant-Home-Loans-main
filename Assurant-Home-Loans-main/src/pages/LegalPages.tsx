import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Scale, FileText } from 'lucide-react';

const LegalLayout: React.FC<{ children: React.ReactNode; title: string; icon: React.ReactNode }> = ({ children, title, icon }) => (
  <div className="pt-40 pb-20 bg-warm-ivory min-h-screen">
    <div className="container mx-auto px-6 max-w-4xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-xl shadow-navy-900/5 border border-warm-stone"
      >
        <div className="flex items-center gap-4 mb-12 text-brand-600">
          <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center">
            {icon}
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-navy-900">{title}</h1>
        </div>
        <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-navy-900 prose-p:text-gray-500 prose-li:text-gray-500">
          {children}
        </div>
      </motion.div>
    </div>
  </div>
);

export const PrivacyPolicy: React.FC = () => (
  <LegalLayout title="Privacy Policy" icon={<Eye className="w-8 h-8" />}>
    <p className="text-xl font-medium mb-6">Your privacy is critically important to us. It is Assurant Home Loans' policy to respect your privacy regarding any information we may collect while operating our website.</p>
    
    <h2 className="text-2xl mt-8 mb-4">1. Information We Collect</h2>
    <p>We only collect information about you if we have a reason to do so—for example, to provide our services, to communicate with you, or to make our services better.</p>
    
    <h2 className="text-2xl mt-8 mb-4">2. Sharing Information</h2>
    <p>We do not share your personal information with third parties except as required by law or to provide our mortgage services. We may share information with credit bureaus and underwriting partners as part of your application process.</p>
    
    <h2 className="text-2xl mt-8 mb-4">3. Security</h2>
    <p>While no online service is 100% secure, we work very hard to protect information about you against unauthorized access, use, alteration, or destruction, and take reasonable measures to do so.</p>
    
    <h2 className="text-2xl mt-8 mb-4">4. SMS Policy</h2>
    <p>By providing your phone number, you agree to receive SMS communications from Assurant Home Loans regarding your loan application. You can opt-out at any time by replying STOP.</p>
  </LegalLayout>
);

export const Accessibility: React.FC = () => (
  <LegalLayout title="Accessibility Statement" icon={<Shield className="w-8 h-8" />}>
    <p className="text-xl font-medium mb-6">Assurant Home Loans is committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability.</p>
    
    <h2 className="text-2xl mt-8 mb-4">Our Commitment</h2>
    <p>We are actively working to increase the accessibility and usability of our website and in doing so adhere to many of the available standards and guidelines.</p>
    
    <h2 className="text-2xl mt-8 mb-4">Standards</h2>
    <p>This website endeavors to conform to level Double-A (AA) of the World Wide Web Consortium (W3C) Web Content Accessibility Guidelines 2.1.</p>
    
    <h2 className="text-2xl mt-8 mb-4">Contact</h2>
    <p>If you experience any difficulty in accessing the Assurant Home Loans website, please don't hesitate to contact us at 940-206-9406 or email sunil@assuranthomeloans.com.</p>
  </LegalLayout>
);

export const Licensing: React.FC = () => (
  <LegalLayout title="Licensing Information" icon={<Scale className="w-8 h-8" />}>
    <div className="bg-brand-50 p-8 rounded-2xl border border-brand-100 mb-8">
      <h2 className="text-2xl mt-0 mb-2 font-serif">NMLS Disclosure</h2>
      <p className="text-brand-800 font-semibold text-lg">Assurant Home Loans | NMLS #1767773</p>
    </div>
    
    <p>Assurant Home Loans is a licensed mortgage lender. All loans are subject to credit and property approval. Rates and programs are subject to change without notice. Other restrictions and limitations may apply.</p>
    
    <h2 className="text-2xl mt-8 mb-4">Regulatory Bodies</h2>
    <p>We are regulated by the Texas Department of Savings and Mortgage Lending. For more information regarding our licensing status, you may visit the NMLS Consumer Access website.</p>
  </LegalLayout>
);

export const TexasSML: React.FC = () => (
  <LegalLayout title="Texas SML Consumer Notice" icon={<FileText className="w-8 h-8" />}>
    <div className="bg-warm-cream p-12 rounded-[2rem] border border-warm-stone italic">
      <p className="mb-6">"CONSUMERS WISHING TO FILE A COMPLAINT AGAINST A COMPANY OR A RESIDENTIAL MORTGAGE LOAN ORIGINATOR SHOULD COMPLETE AND SEND A COMPLAINT FORM TO THE TEXAS DEPARTMENT OF SAVINGS AND MORTGAGE LENDING, 2601 NORTH LAMAR, SUITE 201, AUSTIN, TEXAS 78705."</p>
      
      <p className="mb-6">"COMPLAINT FORMS AND INSTRUCTIONS MAY BE OBTAINED FROM THE DEPARTMENT'S WEBSITE AT WWW.SML.TEXAS.GOV. A TOLL-FREE CONSUMER HOTLINE IS AVAILABLE AT 1-877-276-5550."</p>
      
      <p>"THE DEPARTMENT MAINTAINS A RECOVERY FUND TO MAKE PAYMENTS OF CERTAIN ACTUAL OUT OF POCKET DAMAGES SUSTAINED BY BORROWERS CAUSED BY ACTS OF RESIDENTIAL MORTGAGE LOAN ORIGINATORS. A WRITTEN APPLICATION FOR REIMBURSEMENT FROM THE RECOVERY FUND MUST BE FILED WITH AND INVESTIGATED BY THE DEPARTMENT PRIOR TO THE PAYMENT OF A CLAIM. FOR MORE INFORMATION ABOUT THE RECOVERY FUND, PLEASE CONSULT THE DEPARTMENT'S WEBSITE AT WWW.SML.TEXAS.GOV."</p>
    </div>
  </LegalLayout>
);
