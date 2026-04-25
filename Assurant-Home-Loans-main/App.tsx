import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './src/layouts/MainLayout';
import Home from './src/pages/Home';
import PurchaseLoans from './src/pages/PurchaseLoans';
import RateTermRefinance from './src/pages/RateTermRefinance';
import CommercialLoans from './src/pages/CommercialLoans';
import Contact from './src/pages/Contact';
import ApplyFunnel from './src/pages/ApplyFunnel';
import { ConventionalLoans, FHALoans, VALoans, JumboLoans, USDALoans } from './src/pages/MortgagePages';
import { DSCRLoans, CashOutRefinance, BankStatementLoans, NonQMLoans, ReverseMortgage } from './src/pages/InvestorRefiPages';
import { UploadDocuments, ResumeApplication } from './src/pages/ApplicationStatusPages';
import ResourcesPage from './src/pages/ResourcesPage';
import { About, Team } from './src/pages/CompanyPages';
import { PrivacyPolicy, Accessibility, Licensing, TexasSML } from './src/pages/LegalPages';
import { UIProvider } from './src/context/UIContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <UIProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Loan Programs Routes */}
            <Route path="/mortgage/purchase-loans" element={<PurchaseLoans />} />
            <Route path="/mortgage/conventional-loans" element={<ConventionalLoans />} />
            <Route path="/mortgage/fha-loans" element={<FHALoans />} />
            <Route path="/mortgage/va-loans" element={<VALoans />} />
            <Route path="/mortgage/jumbo-loans" element={<JumboLoans />} />
            <Route path="/mortgage/usda-loans" element={<USDALoans />} />
            <Route path="/mortgage/commercial-loans" element={<CommercialLoans />} />

            {/* Refinance Routes */}
            <Route path="/refinance/rate-term-refinance" element={<RateTermRefinance />} />
            <Route path="/refinance/cash-out-refinance" element={<CashOutRefinance />} />
            <Route path="/refinance/reverse-mortgage" element={<ReverseMortgage />} />

            {/* Investors Routes */}
            <Route path="/investors/dscr-loans" element={<DSCRLoans />} />
            <Route path="/investors/bank-statement-loans" element={<BankStatementLoans />} />
            <Route path="/investors/non-qm-loans" element={<NonQMLoans />} />

            {/* Company Routes */}
            <Route path="/company/about" element={<About />} />
            <Route path="/company/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />

            {/* Application Routes */}
            <Route path="/closings/apply" element={<ApplyFunnel />} />
            <Route path="/closings/pre-qualification" element={<ApplyFunnel />} />
            <Route path="/closings/get-a-quote" element={<ApplyFunnel />} />
            <Route path="/closings/upload-documents" element={<UploadDocuments />} />
            <Route path="/closings/resume-application" element={<ResumeApplication />} />

            {/* Resources Routes */}
            <Route path="/resources/loan-process" element={<ResourcesPage title="Loan Process" />} />
            <Route path="/resources/mortgage-calculators" element={<ResourcesPage title="Mortgage Calculators" />} />
            <Route path="/resources/mortgage-glossary" element={<ResourcesPage title="Mortgage Glossary" />} />
            <Route path="/resources/faqs" element={<ResourcesPage title="FAQs" />} />
            <Route path="/resources/blog" element={<ResourcesPage title="Mortgage Blog" />} />

            {/* Legal Routes */}
            <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/legal/accessibility" element={<Accessibility />} />
            <Route path="/legal/licensing" element={<Licensing />} />
            <Route path="/legal/texas-sml-notice" element={<TexasSML />} />

          </Routes>
        </MainLayout>
      </UIProvider>
    </BrowserRouter>
  );
};

export default App;
