import React from 'react';
import GenericProductPage from './GenericProductPage';
import { useUI } from '../context/UIContext';

export const ConventionalLoans: React.FC = () => {
  const { openInquiry } = useUI();
  return (
    <GenericProductPage 
      onOpenInquiry={openInquiry}
    badge="Loan Programs"
    title="Conventional Home Loans"
    description="Conventional loans are ideal for borrowers with excellent credit and at least a 5% down payment. Better rates, terms, and lower fees than other types of loans."
    image="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200"
    overview="Conventional Loans are mortgage loans that are not insured by the government (like FHA, VA, USDA Loans), but they typically meet the lending guidelines set by Fannie Mae or Freddie Mac. They come in fixed-rate options (30, 20, 15, 10, and 5-year terms) as well as adjustable-rate mortgages (3/1, 5/1, and 7/1 ARMs). Most conventional loan programs allow you to purchase single-family homes, warrantable condos, planned unit developments, and 1-4 family residences — for primary residences, second homes, and investment properties."
    benefits={[
      { title: "Lower Long-term Costs", desc: "No upfront mortgage insurance premiums. PMI is cancellable once you reach 20% equity, unlike FHA which requires it for the life of the loan." },
      { title: "Flexible Property Types", desc: "Use for primary residences, second homes, or investment properties including condos, PUDs, and 1-4 family residences." },
      { title: "Multiple Term Options", desc: "Choose from 30, 20, 15, 10, or 5-year fixed rates, or adjustable-rate options (3/1, 5/1, 7/1 ARM) to match your financial goals." }
    ]}
    process={[
      { title: "Review credit", desc: "Ensure your score is ideally 620 or higher for the best rates. Good-to-excellent credit is typical for conventional loans." },
      { title: "Choose terms", desc: "Select between fixed-rate (15, 20, 30 years) or adjustable options based on your timeline and budget." },
      { title: "Underwriting", desc: "Our team verifies your income, assets, and debt-to-income ratio against Fannie Mae and Freddie Mac guidelines." },
      { title: "Approval", desc: "Finalize your commitment with 5–20% down and prepare for home ownership." }
    ]}
    faqs={[
      { q: "What down payment is required?", a: "For Purchase transactions, Conventional Loans require 5% to 20% of the purchase price. For Refinance, most lenders require at least 10% equity." },
      { q: "Is PMI required?", a: "Only if your down payment is less than 20%. It can be removed once you reach 20% equity — a major advantage over FHA loans." },
      { q: "What types of property are eligible?", a: "Single-family homes, warrantable condos, planned unit developments, and 1-4 family residences. They can be used for primary residences, second homes, and investment properties." },
      { q: "What's the difference between Fixed Rate and ARM?", a: "Fixed Rate Mortgages keep your rate and payment the same forever. Adjustable Rate Mortgages offer a lower initial fixed period (3, 5, or 7 years), then adjust annually." }
    ]}
  />
  );
};

export const FHALoans: React.FC = () => {
  const { openInquiry } = useUI();
  return (
    <GenericProductPage 
      onOpenInquiry={openInquiry}
    badge="Loan Programs"
    title="FHA Home Loans"
    description="FHA insured mortgages are some of the best mortgages available — easier to qualify for, lower down payments, and designed to help more people into homeownership."
    image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200"
    overview="The Federal Housing Administration (FHA) doesn't loan money directly — they insure it. This means you're considered a less risky borrower, and our role is to structure your loan to reflect that. FHA loans are ideal for first-time homebuyers and those with less than perfect credit. The 3.5% down payment can come in the form of gifts, unlike many other loan programs. Additionally, FHA offers a Streamline Refinance program for existing FHA borrowers — no appraisal, no employment verification, and no credit score check required."
    benefits={[
      { title: "Easier to Qualify", desc: "Backed by the federal government, lenders are more willing to approve your loan. Credit scores as low as 580 qualify with 3.5% down." },
      { title: "Low Down Payment", desc: "FHA insured mortgages require only a 3.5% down payment. The entire amount can come from gift funds — unlike most conventional loans." },
      { title: "Better Interest Rates", desc: "Government backing typically results in better interest rates than most traditional mortgage loans. FHA loans are also assumable." }
    ]}
    process={[
      { title: "Employment check", desc: "Proven employment status of at least 2 years with steady or increasing income." },
      { title: "Documentation", desc: "Past 2 years tax returns, W-2s, 1099s, 1 month pay stubs, 3 months bank statements, driver's license, and Social Security card." },
      { title: "FHA certification", desc: "The property must meet HUD safety and habitability standards. Only certain property types qualify." },
      { title: "Closing", desc: "Complete the process with 3.5% down payment and 2.25% closing costs. Monthly mortgage insurance is included." }
    ]}
    faqs={[
      { q: "Do I have to be a first-time buyer?", a: "No. FHA loans are available to anyone who meets the requirements, though first-time buyers and those with lower credit benefit most." },
      { q: "What is the recommended debt-to-income ratio?", a: "The recommended debt-to-income ratio for an FHA loan is 30%. Monthly mortgage payment should be roughly 30% of your gross income." },
      { q: "Can I use gift funds for the down payment?", a: "Yes, 100% of your 3.5% down payment can be a gift from family members, which is a huge advantage over conventional loans." },
      { q: "Are FHA loans assumable?", a: "Absolutely — you can assume an existing FHA loan or allow a buyer to assume yours, which can be a great selling point if rates rise." },
      { q: "What is the FHA Streamline Refinance?", a: "If you already have an FHA mortgage, you can refinance with no appraisal, no employment verification, and no credit score check. You just need to show a 'Net Tangible Benefit' like a lower rate." },
      { q: "Can I pay an FHA loan off early?", a: "Yes, but check the pre-payment section of your contract before signing." }
    ]}
  />
  );
};

export const VALoans: React.FC = () => {
  const { openInquiry } = useUI();
  return (
    <GenericProductPage 
      onOpenInquiry={openInquiry}
    badge="Loan Programs"
    title="VA Home Loans"
    description="A benefit for those who served. $0 down payment, no monthly mortgage insurance, and sellers can pay your closing costs."
    image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200"
    overview="A VA loan is a mortgage guaranteed by the U.S. Department of Veteran Affairs. You can buy a home with no money down, refinance up to 100% of your home's value, and never pay PMI. Sellers can pay your closing costs. Disabled veterans may qualify for a waiver of the VA Funding Fee. If you already have a VA loan, you might be eligible for a VA Streamline Refinance — no bank statements, W2s, job verification, or paychecks required."
    benefits={[
      { title: "No Down Payment", desc: "Finance 100% of the home's value without paying a penny upfront. You can also refinance up to 100% of your home's value." },
      { title: "No Monthly PMI", desc: "Save hundreds every month — Private Mortgage Insurance is never required on VA loans, unlike FHA or Conventional." },
      { title: "Seller-Paid Closing Costs", desc: "The VA allows sellers to pay all or part of your closing costs, further reducing your out-of-pocket expenses." }
    ]}
    process={[
      { title: "Verify eligibility", desc: "181 days active duty peacetime, 90 days wartime, 6 years Reserves/National Guard, or surviving spouse of service member killed in duty." },
      { title: "Get your COE", desc: "We help you obtain your Certificate of Eligibility from the VA quickly." },
      { title: "VA funding fee", desc: "Ranges from 1.25% to 3.3% of the loan. Can be included in the loan balance. Disabled veterans may be exempt." },
      { title: "Close your home", desc: "Close on your home with the benefit you've earned. Sellers can contribute to your closing costs." }
    ]}
    faqs={[
      { q: "Who is eligible?", a: "Active duty (181 days peacetime / 90 days wartime), 6 years in Reserves/National Guard, surviving spouses of members killed in duty, or those receiving VA disability payments." },
      { q: "Can I use it more than once?", a: "Yes, VA loan eligibility is a lifetime benefit that can be reused. There are no VA loan limits for veterans with full entitlement." },
      { q: "What is the VA Funding Fee?", a: "A fee paid to the VA so they can guarantee your loan. It ranges from 1.25% to 3.3% and can be rolled into the loan. Disabled veterans (10%+ disabled) may qualify for a waiver." },
      { q: "What is a VA Streamline Refinance?", a: "A refinance option for existing VA mortgage holders to lower their rate with little to no out-of-pocket costs. No bank statements, W-2s, job verification, or paychecks required." }
    ]}
  />
  );
};

export const JumboLoans: React.FC = () => {
  const { openInquiry } = useUI();
  return (
    <GenericProductPage 
      onOpenInquiry={openInquiry}
    badge="Loan Programs"
    title="Jumbo Home Loans"
    description="Finance your luxury dream home. Specialized loans for high-value properties that exceed conventional limits."
    image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
    overview="When the home you want costs more than the standard loan limits set by Fannie Mae and Freddie Mac, a Jumbo loan is the answer. With Jumbo Mortgage Loans, you can aim higher and invest in a more substantial property. Contrary to popular belief, purchasing a luxury property doesn't have to drain your savings — Jumbo Loans often require a smaller down payment compared to the property's value, preserving your liquidity for other investments."
    benefits={[
      { title: "Leverage Your Buying Power", desc: "Say goodbye to the limitations of conventional loans. Jumbo loans provide the financial power to secure your dream home." },
      { title: "Competitive Interest Rates", desc: "Enjoy rates that align with your financial goals. Jumbo loans offer the perfect blend of affordability and luxury." },
      { title: "Ideal for Investment Properties", desc: "An excellent tool for acquiring income-generating properties in upscale markets. Also great for luxury vacation homes." }
    ]}
    process={[
      { title: "Asset verification", desc: "Provide detailed documentation of your income and significant reserves." },
      { title: "Credit excellence", desc: "Typically requires a credit score of 700 or higher for optimal terms." },
      { title: "Enhanced appraisal", desc: "A rigorous valuation process to confirm the high value of the asset." },
      { title: "Precision closing", desc: "Our executive team handles the complexities of high-value transactions." }
    ]}
    faqs={[
      { q: "What is the down payment requirement?", a: "Usually 10% to 20%, depending on the loan amount and your credit profile. Jumbo loans allow you to preserve your savings." },
      { q: "Are interest rates higher?", a: "Not necessarily. Jumbo rates are often very competitive with conventional rates, especially for well-qualified borrowers." },
      { q: "Do I need more reserves?", a: "Yes, lenders usually want to see a specific amount of liquid assets after closing. This varies by loan amount." },
      { q: "Can I use a Jumbo loan for a second home?", a: "Absolutely. Jumbo loans are perfect for primary residences, luxury vacation homes, or high-end investment properties." }
    ]}
  />
  );
};

export const USDALoans: React.FC = () => {
  const { openInquiry } = useUI();
  return (
    <GenericProductPage 
      onOpenInquiry={openInquiry}
    badge="Loan Programs"
    title="USDA Rural Home Loans"
    description="100% financing — buy a home with no down payment, low fixed rates, and no prepayment penalties in eligible rural and suburban areas."
    image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200"
    overview="A USDA Loan is a government-backed mortgage designed for individuals buying or refinancing homes in rural or suburban areas. These loans offer 100% financing — meaning no down payment is required. They include low fixed rates, no prepayment penalties, and flexible credit requirements. USDA Loans can be used for existing homes, new construction, or refinancing up to 100% of the home's value. They are not just for farmers — homes in many suburban areas near major cities qualify."
    benefits={[
      { title: "100% Financing", desc: "Buy a home with no down payment. In some cases, you can even finance your closing costs into the loan." },
      { title: "No Prepayment Penalty", desc: "Pay off the loan early without extra fees. Low fixed rates keep your payments predictable and affordable." },
      { title: "Easier Qualification", desc: "With the USDA backing the loan, lenders face less risk, making approval easier. Flexible credit requirements." }
    ]}
    process={[
      { title: "Area eligibility", desc: "Check if your target property is in a USDA-designated area. Many suburban areas near major cities qualify." },
      { title: "Income limits", desc: "Verify that your household income is within the program's guidelines for your area." },
      { title: "Standard appraisal", desc: "Ensure the home meets basic safety and structural requirements for USDA certification." },
      { title: "Final approval", desc: "Move into your new home with zero money down and enjoy low fixed rates." }
    ]}
    faqs={[
      { q: "Are USDA loans just for farmers?", a: "No! USDA Loans are available to anyone in qualifying rural or suburban areas. Homes in many suburban areas near major cities can qualify." },
      { q: "Are they better than FHA or Conventional?", a: "USDA Loans often have better terms, including lower rates and no down payment — making them one of the best options for eligible buyers." },
      { q: "Is there an income cap?", a: "Yes, the program is designed for low-to-moderate income households. Income limits vary by county and household size." },
      { q: "Can I use it for new construction?", a: "Yes, USDA Loans can be used for existing homes, new construction, foreclosures, or refinancing." }
    ]}
  />
  );
};
