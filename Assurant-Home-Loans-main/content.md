# Assurant Home Loans — Redesign Brief for AI

**Site:** assuranthomeloans.com
**Company:** Assurant Home Loans (NMLS 1767773), Irving, TX
**Use case:** Local mortgage broker, primary loan officer Sunil Gudala, secondary Sangeeta Ganti
**Reviews:** 5.0 stars / 13 Google reviews (heavy mention of "Sunil," fast 2-week closes, transparency, weekend availability)
**Differentiators to lean into:** Speed-to-close (closed in 14–20 days repeatedly), competitive rates vs big banks, white-glove portal experience, multi-language/cultural fluency (clients have Indian-origin names — likely strong South Asian referral base in DFW)

---

## 0. Global Findings (Read First)

The current site is a generic Etrafficers/MWSS template — every page uses the same shell, near-identical layouts, and stock content. There are several brand opportunities being squandered:

1. **The reviews are the strongest asset.** They mention specific people, specific timelines (2 weeks, 20 days), specific competitors (better than Rocket). Right now they live as a Google embed at the bottom of homepage. They should be threaded through the entire site.
2. **There are TWO interesting AI products mentioned but not explained:** "Ask LoanBot" (chatbot in nav) and "Ask Ash AI for Low Rates" (a separate app at app.assuranthomeloans.com). Neither is positioned. The redesign should treat "Ash AI" as a hero feature.
3. **Loan program pages all look identical** — same hero pattern, same "Get Started" button, same generic copy. They need real differentiation: who it's for, in plain English, with a calculator, with a 60-second eligibility quiz.
4. **The "Apply Now" page is empty.** It's a navigation hub with nothing on it. This is an emergency.
5. **No rates shown anywhere.** A rate ticker (even disclaimed/sample) would dramatically increase trust.
6. **No team photos on Meet Our Professionals.** Sangeeta and Sunil are listed by name only.
7. **Mobile experience is afterthought.** Hamburger nav with a flat 60-link tree.

### Global components every page needs in the redesign

- **Header:** Logo left; nav center; primary CTA "Get Pre-Qualified" (purple/brand) + secondary "Call 940-206-9406" (phone icon) right. Sticky on scroll. Slim banner above with "5.0 ★ on Google · Closed in as little as 14 days · NMLS 1767773".
- **Footer:** Address, phone, email, NMLS, hours, equal housing logo, social, sitemap, licensing/privacy/accessibility/Texas SML links, and a small "Made in Irving, TX" mark.
- **Persistent floating CTA on mobile:** "Get a Rate" button bottom-right.
- **Trust strip** (small, above footer on every loan page): "5.0 stars · 13 verified Google reviews · Avg close time 18 days · Licensed in TX".
- **Compliance disclosures:** Equal Housing Opportunity logo, NMLS consumer access link, "These materials are not from HUD or FHA…" where applicable.

### Design direction

Editorial, calm, premium — not bro-y fintech. Think Compound (compound.bank) meets Better.com's old marketing site meets a private-bank brochure. Generous whitespace, large serif/grotesk pairing, real local Irving/Dallas photography (skyline, neighborhoods, families on porches — not stock handshakes). One accent color. No gradients with three colors.

---

## 1. Homepage — `/`

### What's there now
Hero with "Get a Great Rate on a New Mortgage", three feature cards (About / Loan Programs / Calculators), Google reviews block, footer. That's it. Hero image is a generic house. No social proof above the fold. No rate display. No personality.

### What to add in the redesign

1. **Hero rebuild**
   - Headline: lead with the speed differentiator — e.g., "Mortgages closed in 14 days. Backed by humans, accelerated by AI."
   - Subhead: "Texas-licensed brokers. 5-star rated. Real rates in 60 seconds via Ash, our AI assistant."
   - Two CTAs: primary **"Get my rate from Ash AI"** → app.assuranthomeloans.com; secondary **"Talk to Sunil"** → phone tel link.
   - Replace generic stock image with a real Dallas/Irving neighborhood shot or a clean illustrated gradient.
2. **Live rate ticker strip** under hero — 30-yr fixed / 15-yr fixed / FHA / VA / Jumbo with "as of [date]" disclaimer and "Get your personalized rate" CTA.
3. **"Why Assurant" 3-column proof block** — pulled from real reviews:
   - "Closed in 20 days." (Srini A.)
   - "Better rate than Rocket." (Bimal S.)
   - "Available on weekends." (Bimal S.)
   Each with a tiny attribution link to the full review.
4. **Loan program grid (12 cards)** — visual icon + name + 1-line description + "Who it's for" tag. Replaces the current 3-card hub.
5. **The "Ash AI" feature section** — explain what it is, screenshot/mock UI, "Try it free" CTA. This is currently buried.
6. **Process timeline** — Apply → Pre-Qual → Underwriting → Close, with average days at each step (use real numbers from reviews).
7. **Reviews carousel** — pull directly from Google, but format editorially: large quote, photo, name, loan type, days to close. Don't just embed Google's widget.
8. **Team teaser** — photo of Sunil + Sangeeta with "Meet the team" link.
9. **Local trust block** — Irving address, "Licensed in Texas," service area map of DFW.
10. **Blog teaser** — 3 most recent posts (already exists as a feed, just isn't surfaced on home).
11. **FAQ accordion** — 5-6 highest-intent questions ("How long does it take?", "What credit score do I need?", "Conventional vs FHA?").
12. **Final CTA band** — "Ready in 60 seconds? Start with Ash." or "Prefer a human? Call Sunil."

---

## 2. Apply Now — `/apply-now`

### What's there now
**Literally just a heading "Apply Now" and the footer.** This page is broken/empty. It's a hub that lists 7 sub-pages in the dropdown but renders no content on the page itself.

### What to add

1. **Hero:** "Three ways to apply — pick what fits."
2. **Three large action cards:**
   - **Quick App (5 min)** → "Get a soft-pull pre-qual letter to shop with confidence." → Quick App link.
   - **Full Application (20 min)** → "Complete intake when you're ready to lock a property." → Full app link.
   - **Talk to a human first** → "Schedule a call with Sunil or Sangeeta." → Calendly/phone.
3. **Document checklist preview** — visual list of what they'll need (W-2s, pay stubs, bank statements). Builds confidence.
4. **"Already started?"** — Resume Application + Secure Document Upload CTAs as smaller links below.
5. **Security/trust block** — "256-bit encryption · SOC 2 · Your data never sold."
6. **Mini FAQ:** "Does this hurt my credit?" "How long does pre-qual take?" "What if I'm self-employed?"
7. **Reassurance:** Photo of Sunil + quote: "I personally review every file."

---

## 3. Loan Programs Hub — `/loan-programs`

### What's there now
Long single-column page that lists 11 programs with one paragraph each and a "Learn More" link. Reads like a glossary. Same content for every visitor — first-time buyer, investor, vet, all see the same wall of text.

### What to add

1. **Hero with persona filter:** "Which describes you? → I'm a first-time buyer / refinancing / a real estate investor / a veteran / self-employed / 62+." Tapping filters the grid below.
2. **Card grid (12 programs)** — each card shows: icon, program name, 1-liner, key stat (e.g., "0% down" for VA, "3.5% down" for FHA, "no tax returns" for Bank Statement), and a "Best for…" tag.
3. **Comparison table** — Conventional vs FHA vs VA vs USDA vs Jumbo: down payment, min credit, who qualifies, PMI required y/n, loan limits.
4. **"Not sure which is right?" CTA** → 60-second quiz that recommends a program.
5. **Sticky table of contents** on the left rail for anyone scrolling.
6. **Rate snapshot per program** at the top of each card.

---

## 4. Conventional Loans — `/loan-programs/conventional-loans`

### What's there now
"What are Conventional Loans" overview, list of fixed-rate options (30/20/15/10/5 yr) and ARMs (3/1, 5/1, 7/1), down payment requirements, eligible property types, two "Get Started" CTAs. No visuals beyond one stock interior photo.

### What to add

1. **At-a-glance card** at the top: min down payment, min credit, max loan, PMI threshold, estimated rate.
2. **"Is a Conventional loan right for me?"** — 4-bullet checklist (good credit, steady income, 5%+ down, not eligible/preferring govt loans).
3. **Fixed vs ARM visual** — a simple chart showing payment behavior over 30 years for each option.
4. **Embedded Conventional payment calculator** (live).
5. **"Conventional vs FHA" side-by-side** — most common comparison borrowers make.
6. **PMI explainer** — 80% LTV trigger, when it drops, how to avoid.
7. **Real example** — "Maria put 10% down on a $450k Frisco home with a 30-yr fixed at X%. Here's her payment."
8. **Document checklist** specific to Conventional.
9. **Testimonial pulled** from someone who used a conventional loan.
10. **FAQ:** Can I use gift funds? Can I do 3% down? Investment property options? Second home?

---

## 5. FHA Loans — `/loan-programs/fha-loans`

### What's there now
Reasonable depth — How FHA Works, Benefits, Checklist, FAQs, Qualifications, FHA Streamline Refinance. Decent content but visually flat, lots of copy-heavy paragraphs, no visualization.

### What to add

1. **Hero stat card** — "3.5% down. 580 min credit. First-time-buyer friendly."
2. **"Is FHA right for me?" interactive checklist.**
3. **Visualize the down payment math** — a graphic of $400k home at 3.5% down ($14k) vs Conventional 5% ($20k).
4. **MIP explainer with a chart** — upfront MIP + annual MIP, when it can be removed.
5. **Loan limit lookup by county** — embedded HUD limit checker (Texas counties prominent).
6. **FHA 203(k) renovation loan callout** — currently missing entirely; this is a real product.
7. **Streamline Refi as its own clearly-marked sub-section** with eligibility quiz.
8. **First-time-buyer testimonial** — there's already content for this in reviews.
9. **Side-by-side: FHA vs Conventional** decision tool.
10. **Compliance:** the existing HUD disclaimer needs to remain but cleaner.

---

## 6. VA Loans — `/loan-programs/va-loans`

### What's there now
Headline benefits (no money down, no PMI, etc.), eligibility list, VA Funding Fee FAQ, Streamline Refi mention. Has one stock "military family" image.

### What to add

1. **Hero:** "Earned by your service. We make it easy to use."
2. **Eligibility checker tool** — service member type, length of service, current VA loan y/n → tells them if they likely qualify.
3. **Funding Fee calculator** — input down payment + first-time-use y/n → shows the fee.
4. **Disabled veteran callout** — funding fee waiver, prominent.
5. **COE walkthrough** — what a Certificate of Eligibility is, how to get one, with a "we'll pull it for you" service offer.
6. **VA loan limits map** for Texas counties (and "no county loan limit since 2020 for full-entitlement borrowers" note).
7. **VA IRRRL (Streamline) explainer** — currently mentioned in one paragraph; deserves its own sub-section.
8. **Spouse eligibility** section.
9. **Testimonial from a vet client.** If none exist, consider sourcing one.
10. **Resources block:** VA.gov links, local DFW VA office info.
11. **Compliance:** "Not affiliated with VA or any government agency."

---

## 7. USDA Loans — `/loan-programs/usda-loans`

### What's there now
(Inferred from pattern.) Generic overview, eligibility, "Get Started." No map, no income limit lookup.

### What to add

1. **Eligibility map** — embedded USDA property eligibility map (huge for this product, since location is the gating factor).
2. **Income limit lookup by household size + county.**
3. **0% down callout** as a hero stat.
4. **Who actually qualifies in DFW** — list of nearby qualifying communities (Aubrey, Anna, Princeton, Celina outskirts, etc.).
5. **Comparison: USDA vs FHA** for moderate-income buyers.
6. **Calculator** with USDA guarantee fee built in.
7. **Application checklist.**
8. **Disclosures** about rural eligibility and income caps.

---

## 8. Jumbo Loans — `/loan-programs/jumbo-loans`

### What's there now
(Inferred.) One-paragraph overview, "Get Started." Jumbo borrowers expect a more polished experience than this.

### What to add

1. **Hero positioning:** "For homes above $806,500 (Texas conforming limit). White-glove service." (verify current limit)
2. **Loan limit map** showing where Jumbo kicks in by county.
3. **Down payment & reserve requirements** clearly stated (typically 10-20% down, 6-12 months reserves).
4. **Programs offered:** standard Jumbo, Super Jumbo, interest-only Jumbo, ARM Jumbo.
5. **Documentation** — typically heavier, set expectations.
6. **Concierge promise** — dedicated LO, weekend availability (real differentiator from reviews).
7. **Use cases:** primary residence, second home, investment property — different rate tiers shown.
8. **Testimonial from a high-balance borrower** if available.
9. **Calculator** that handles Jumbo amounts.

---

## 9. DSCR Loans — `/loan-programs/dscr-loans`

### What's there now
Strong copy by current standards — explains DSCR ratio, formula, benefits, how it works, what's a "good" ratio. Geared toward investors. No tools though, no examples.

### What to add

1. **Live DSCR calculator** at the top of the page (NOI ÷ Debt Service). Already exists on calculators page — embed it here.
2. **Real-world example:** "$450k duplex in Plano, $3,200/mo rent, $2,400/mo PITI = 1.33 DSCR. Here's what we'd offer."
3. **No-doc / no-tax-returns headline benefit.**
4. **Property type matrix:** SFR, 2-4 unit, condo, short-term rental — with rate tiers.
5. **Cash-out refi for investors** as a sub-product.
6. **Investor portfolio scaling** angle — for clients with 5+ properties.
7. **Comparison: DSCR vs Conventional Investment Property** loan.
8. **Rate range and LTV caps.**
9. **Investor testimonial.**
10. **FAQ:** Can I use Airbnb income? Cash-out limits? Foreign nationals?

---

## 10. Non-QM Loans — `/loan-programs/non-qm-loans`

### What's there now
(Inferred.) Generic explainer.

### What to add

1. **Position as the umbrella** — "Programs for borrowers who don't fit traditional boxes."
2. **Sub-program grid:** Bank Statement, DSCR, Asset Depletion, ITIN, P&L Only, 1-Year Tax Return, Recent Credit Event.
3. **Who Non-QM is for:** self-employed, recent BK/foreclosure, foreign nationals, retirees with assets but low income, gig workers.
4. **Honest tradeoff:** typically slightly higher rates in exchange for flexibility.
5. **"Will I qualify?" quick quiz.**
6. **Case studies** — short paragraphs of real client situations.
7. **Compliance:** Non-QM ≠ subprime, brief explainer.

---

## 11. Bank Statement Loans — `/loan-programs/bank-statement-loans`

### What's there now
Decent — "Flexible Solutions for Self-Employed", key features, who it's for, why Assurant. No visuals or calculators.

### What to add

1. **Hero stat:** "12 or 24 months of bank statements. No tax returns. No W-2s."
2. **Income calculation explainer** — visual showing "deposits → expense factor → qualifying income."
3. **Personal vs business statement options** — both common, explain difference.
4. **Who it's perfect for:** realtors, restaurant owners, doctors, gig workers, freelance designers (resonates with Sufiyan-type).
5. **Down payment matrix** by credit score.
6. **What disqualifies?** — large unexplained deposits, NSF, mixing personal/business.
7. **Step-by-step:** "Send 12 months PDF → we calculate income → pre-qual in 24 hours."
8. **Self-employed testimonial.**
9. **Comparison: Bank Statement vs P&L Only.**

---

## 12. Purchase Loans — `/loan-programs/purchase-loans`

### What's there now
(Inferred.) Generic explainer if the page exists at all — likely overlaps with the loan program hub.

### What to add

1. **Reposition as the "First-Time Buyer / Move-Up Buyer" hub.**
2. **Buyer journey map** — Pre-qual → House hunt → Offer → Lock → Close.
3. **First-time buyer programs** — TSAHC, TDHCA, Texas Hero, Home Sweet Texas (Texas-specific).
4. **Down payment assistance** — DFW-specific programs.
5. **Earnest money & closing cost guidance.**
6. **What to do BEFORE applying** — credit cleanup, save records, don't open new credit.
7. **Realtor partnership angle** — "We work with your agent."
8. **Calculator: How much house can I afford?**
9. **Pre-approval letter** — what it is, why it matters in offers.
10. **Buyer testimonial.**

---

## 13. Refinance Loans — `/loan-programs/refinance-loans`

### What's there now
(Inferred.) Probably a generic "rate-and-term vs cash-out" overview.

### What to add

1. **Hero:** "Should I refi? Find out in 60 seconds."
2. **Refinance Savings Calculator** embedded at the top (already exists on calculators page).
3. **Three clear paths:**
   - Rate-and-term — lower payment
   - Cash-out — pull equity for debt consolidation, renovation, investment
   - Term reduction — pay off faster
4. **"Break-even" explainer** with a chart.
5. **Closing cost honesty:** typical costs, no-cost refi tradeoff explained.
6. **Streamline programs callout:** FHA Streamline, VA IRRRL link to those pages.
7. **HELOC vs Cash-Out Refi vs Home Equity Loan** comparison table.
8. **Refi testimonial.**
9. **Required disclaimer** about higher total finance charges over loan life — keep but make readable.

---

## 14. Reverse Mortgage Loans — `/loan-programs/reverse-mortgages` AND `/loan-programs/introduction-to-reverse-mortgages`

### What's there now
Long, dense, comprehensive page. Covers safety, 3 questions, 8-step process, repayment, costs (origination, appraisal, MIP, closing). Two URLs serve essentially the same content — one is "introduction-to-reverse-mortgages" and one is "reverse-mortgages." Confusing.

### What to add

1. **Consolidate to one canonical URL** and 301 the other. Keep the one navigated from "Reverse Mortgage Loans" in the menu.
2. **Audience-appropriate design:** larger type, higher contrast, less dense — this audience is 62+.
3. **Hero:** "Tap into your home's equity. Stay in your home." with photo of older homeowner.
4. **HECM eligibility checker:** age, occupancy, home type.
5. **Three payout options** as visual cards: Lump sum / Line of credit / Monthly tenure.
6. **HECM vs Proprietary Jumbo Reverse** comparison.
7. **Heir protections explainer** — non-recourse loan, what happens at death.
8. **HUD counseling step** as a clear, friendly callout — required and important.
9. **Calculator: How much could I receive?**
10. **Common myths debunked** — "The bank takes my house" / "I lose ownership" — both false.
11. **Family/heir-friendly section** — "Talk to your kids about a reverse mortgage."
12. **Testimonial from a senior client.**
13. **HUD/FHA disclaimer** prominent and clean.

---

## 15. Commercial Loans — `/loan-programs/commercial-loans`

### What's there now
(Inferred.) One-paragraph overview about real estate, equipment, lines of credit.

### What to add

1. **Reposition or remove.** Honestly, if Assurant doesn't actively close commercial deals, this dilutes the brand. Confirm with stakeholder. If kept:
2. **Sub-products grid:** Commercial Real Estate (multifamily 5+, retail, office, industrial), SBA 7(a) and 504, equipment financing, working capital lines.
3. **Loan size range, rate tiers, LTV.**
4. **Use cases:** refinance to lower rate, acquire a new property, expand a business.
5. **Application requirements:** business tax returns, P&L, balance sheet, rent rolls.
6. **CRE vs DSCR clarification** — DSCR is residential investment, CRE is true commercial.
7. **Commercial loan officer contact** if there's a dedicated person.

---

## 16. About Us — `/aboutus`

### What's there now
Two paragraphs of generic mission copy ("We are committed to quality customer service…"). No founding story, no team photo, no numbers, no Irving/Texas connection. Has a broken `#APPLY_URL#` placeholder still in the body text.

### What to add

1. **Real founding story:** When was it founded? Why? Who's the founder? (likely Sunil — make it personal).
2. **Stats block:** Loans funded · Years in business · Client retention rate · Average days to close · Avg rate vs market.
3. **Mission + values** — 3-4 sentences each, written like a human.
4. **Where we work** — Irving HQ photo, service area map (TX-focused).
5. **Languages spoken** — important given the client base (English, Telugu, Hindi, etc. — confirm).
6. **Community involvement** — local sponsorships, charities, real estate partnerships.
7. **Press/credentials** — NMLS link, BBB rating, any awards.
8. **Team teaser** with photo.
9. **CTA:** "See why people choose us → Reviews."
10. **FIX the broken `#APPLY_URL#` placeholder.**

---

## 17. Blog — `/aboutus/blog`

### What's there now
Functional blog listing with thumbnails, dates, tags, pagination (58 pages of posts). Recent posts: TILA, Homeowner Rights, VA Loan Options, Mortgage Scams, House Hacking. Categories on the right. Solid baseline.

### What to add

1. **Featured post hero** at top — pick one editor's-choice piece.
2. **Category filter pills** above the grid (currently buried in sidebar tag list).
3. **Search bar** for the blog (currently no way to search 58 pages of posts).
4. **Author bylines** — Sunil/Sangeeta should be named, not anonymous.
5. **Estimated read time** per post.
6. **Newsletter signup** — "Mortgage tips, monthly. No spam." Currently no email capture anywhere.
7. **Related posts** at bottom of each article (post-detail template).
8. **Better thumbnail design** — current ones look like generic stock.
9. **Schema markup** for SEO.
10. **Social share buttons** on individual posts.

---

## 18. Reviews — `/aboutus/reviews`

### What's there now
Same Google embed as homepage, just on its own page. Lists ~13 reviews with star, name, snippet, "Read more" expand, link to Google. Not formatted, not filterable, just a list.

### What to add

1. **Aggregate hero:** "5.0 ★ on Google. 13 verified reviews. 0 complaints." with prominent stars graphic.
2. **Pull quote board** — top 3 most-impactful quotes formatted editorially.
3. **Filter by:** Loan type (Purchase / Refi / VA / FHA / Investor) and Loan officer (Sunil / Sangeeta).
4. **Stats block:** Avg days to close · % rate-improvement vs initial offer · Repeat-customer rate.
5. **Video testimonials** — even one or two raises the page meaningfully.
6. **"Submit a review" CTA** — link to Google + Zillow + LinkedIn recommendations.
7. **Multi-platform aggregation** — pull Zillow Reviews, Bankrate, Experience.com if they exist.
8. **Detailed review cards** — show the loan type, days to close, year, alongside the review (more decision-useful than a star rating).

---

## 19. Meet Our Professionals — `/aboutus/meet-our-professionals`

### What's there now
Two team members listed as text-only entries: Sangeeta Ganti (LO, NMLS 1733745) and Sunil Gudala (NMLS 1722464). No photos. No bios. Sunil's entry is missing fields entirely. Each links to a personal sub-site.

### What to add

1. **Real headshots** for each person — non-negotiable.
2. **Bios** — 80–120 words. Background, specialty, languages, fun fact. Make them human.
3. **Specialty tags:** "First-time buyers" / "Investors" / "Self-employed" / "Vets" / "Reverse" / "Jumbo".
4. **Direct contact:** phone, email, calendar booking link, individual NMLS link.
5. **Years of experience, # of loans closed, languages spoken.**
6. **Personal review aggregation** — Sunil has many Google mentions; surface his quotes here.
7. **"Schedule with [name]"** primary CTA per person.
8. **LinkedIn link** per person.
9. **If there's processing/ops staff** (Kiran, Madhavi mentioned in reviews), feature them too.

---

## 20. Mortgage Information Hub — `/mortgage-information`

### What's there now
(Inferred.) Probably another empty hub like /apply-now. Lists the 5 sub-pages.

### What to add

1. **Make it the "Learn" landing page.**
2. **5 large content cards** linking to sub-pages: Loan Process · Calculators · Glossary · FAQ · News.
3. **Most-asked questions teaser** — pull top 3 from FAQ.
4. **Featured calculator:** "How much can I afford?" embedded inline.
5. **Free guide download** with email capture: "First-Time Buyer Guide (PDF)."

---

## 21. Frequently Asked Mortgage Questions — `/mortgage-information/frequently-asked-mortgage-questions`

### What's there now
~12 Q&As as a flat list (pre-approval vs pre-qualification, refi sense, rate lock, broker vs lender, loan types, jumbo, points, etc.). Solid content but unorganized.

### What to add

1. **Category accordions:**
   - Getting Started (pre-qual, pre-approval, application)
   - Loan Types (conventional, FHA, VA, etc.)
   - Rates & Costs (points, lock, closing costs)
   - Documents & Process
   - Refinancing
   - Self-Employed / Special Situations
2. **Search bar** on top.
3. **FAQ schema markup** for Google rich snippets — material SEO opportunity.
4. **"Still have questions?"** sticky CTA → schedule call / chat with Ash / call Sunil.
5. **Add ~15 more questions** that are missing: "How long does pre-approval take?", "Can I lock my rate?", "What credit score do I need for FHA?", "Can a 1099 worker get a mortgage?", "What is escrow?", "Do you charge an origination fee?", "What's PITI?", "What's the difference between pre-qual and pre-approval letters in writing?", "Can my parents gift me the down payment?".
6. **Related blog post** at end of each answer.

---

## 22. Loan Process — `/mortgage-information/loan-process`

### What's there now
Excellent depth — 13 sections covering Pre-Qual → Programs/Rates → Application → Loan Estimate → Intent to Proceed → Processing → Documents → Credit → Appraisal → Underwriting → Closing Disclosure → Closing → Summation. But it's a single 2,500-word wall of text.

### What to add

1. **Visual stepper** at the top — 12 numbered milestones with icons.
2. **Progress bar** scrolling marker showing where the reader is.
3. **Time estimate per step** — set expectations.
4. **Collapsible sections** — high-level summary for each, expand for detail.
5. **Document checklist downloadable** at the documents section.
6. **Credit score gauge** — interactive, shows what tier each score range qualifies for.
7. **Sample Loan Estimate** as an annotated image.
8. **Sample Closing Disclosure** annotated.
9. **"What can go wrong?"** section — common derailers (changing jobs, big credit purchase, missed doc) and how to avoid.
10. **Linked CTAs** at every step → "Ready for this step? Apply / Upload / Schedule."

---

## 23. Mortgage Calculators — `/mortgage-information/calculators`

### What's there now
12 calculators listed: Purchase, Rent vs Buy, How Much Can I Afford, Refinance, Refinance Savings, Debt Consolidation, DSCR, Tax Savings, Pre-payment, Amortization, 15-vs-30, Compare 2 Loans. They're all on one page with anchor links.

### What to add

1. **Calculator hub grid** — visual tiles, each opens its own dedicated page (better SEO + cleaner UX).
2. **Most-used calculator featured** — Purchase calculator embedded inline at top.
3. **Save and share results** — email PDF or save to a free account.
4. **Compare results** — let users pin scenarios and compare side-by-side.
5. **Show current rates** auto-populated, not blank fields.
6. **"Talk to a broker about your numbers"** CTA after results.
7. **Mobile-optimized inputs** — current calculators almost certainly aren't.
8. **Add missing calculators:** VA Funding Fee, FHA MIP, USDA Guarantee Fee, Bi-weekly vs Monthly payment, ARM rate-shock.

---

## 24. Mortgage Glossary — `/mortgage-information/mortgage-glossary`

### What's there now
(Inferred from pattern.) Likely a flat A-Z list of terms.

### What to add

1. **A-Z navigation strip.**
2. **Search box** at top.
3. **Categories:** Loan Types, Process Terms, Costs & Fees, Underwriting Terms, Refinance Terms.
4. **Interlinking** — every term that appears on another page should hover-link to its glossary entry.
5. **"Most-searched terms"** highlighted (PMI, escrow, APR, points, DTI, LTV).
6. **Glossary schema markup** for SEO.
7. **"Don't see a term?"** chat with Ash AI link.

---

## 25. Mortgage News — `/mortgage-information/mortgage-news`

### What's there now
(Inferred.) Probably a syndicated news feed.

### What to add

1. **Reposition as "Rate Watch"** — most useful for borrowers.
2. **Daily rate snapshot** updated with auto-feed.
3. **Fed meeting countdown** + commentary.
4. **Weekly market summary** — short, written by an LO with a real opinion.
5. **Email signup** for weekly rate update.
6. **Distinguish from blog** — blog is evergreen education, this is timely market.

---

## 26. Contact Us — `/contactus`

### What's there now
Address, phone (940-206-9406), Sunil's email, contact form (First/Last/Email/Phone/Question/SMS opt-in/captcha), success/error states.

### What to add

1. **Real embedded map** of 1212 Corporate Dr #117, Irving, TX 75038 — Google Maps with directions link.
2. **Office photos** — exterior + interior, real not stock.
3. **Hours of operation** — explicitly stated, including weekend availability (mentioned in reviews as a differentiator).
4. **Multiple contact paths:**
   - Schedule a call (Calendly embed)
   - Text us
   - Email Sunil
   - Email Sangeeta
   - General inquiry form
   - Live chat / Ash AI
5. **"What happens next?"** — "We respond within 1 business hour. Sunil will call you between 8am–7pm CT."
6. **Department routing** if applicable (existing client vs new applicant vs realtor partner).
7. **Realtor partner CTA** — separate path for agents who want to refer.
8. **Local landmarks** — "Across from [recognizable Irving location]."
9. **Parking info** — small thing, nice touch.
10. **The success/error/form copy** is currently visible inline on page load — fix the rendering.

---

## 27. Requested Documents — `/apply-now/requested-documents`

### What's there now
(Inferred.) Likely an empty page or doc upload portal.

### What to add

1. **Position as the secure-upload hub** for active borrowers.
2. **Login-gate** with reset password.
3. **Document checklist** with upload status indicators (✓ received, ⏳ pending, ⚠ needs revision).
4. **Drag-and-drop file upload.**
5. **Mobile camera upload** — borrowers should be able to snap a paystub photo.
6. **What we accept** — file types, max size, image quality tips.
7. **Security badges** — encrypted, SOC 2, bank-level security.
8. **"Need help?"** chat with your LO.
9. **Status email triggers** — confirm what borrowers receive when they upload.

---

## 28. Footer Pages

These are usually overlooked — make them clean and accurate.

### Licensing — `/licensing`
- Company NMLS 1767773 + NMLS Consumer Access link.
- Each LO with their NMLS, license states, contact.
- State-by-state license badge grid.

### Privacy Policy — `/privacy-policy`
- Plain-English summary at top, full legal below.
- TCPA-compliant — they collect SMS opt-in.
- Cookie disclosure & opt-out.
- CCPA / CPRA notice.
- Last updated date.

### Accessibility Statement — `/accessibility-statement`
- WCAG 2.1 AA commitment.
- Contact for accessibility issues.
- Tools used (Audioeye, etc. — confirm).

### Texas SML Consumer Notice — `/texas-sml-consumer-notice-brokers`
- Required Texas disclosure — keep verbatim, don't redesign the legal text. Just style it cleanly.

---

## 29. Loan Officer Sub-Sites — `/sangeetaganti/`, `/sunil/`

### What's there now
(Inferred — referenced from Meet Our Professionals.) Probably individual landing pages with their info.

### What to add

1. **Personal hero** — large photo, name, NMLS, headline.
2. **Personal bio + credentials.**
3. **Specialty + languages.**
4. **Personal Google reviews.**
5. **Individual contact form + Calendly.**
6. **Apply with this loan officer** CTA.
7. **Ensure consistency** with main brand while feeling personal.

---

## 30. Two Things That Don't Have Pages but Should

1. **Ash AI landing page** — `/ash-ai` or similar. Currently it's just a button to app.assuranthomeloans.com. Build a marketing page: what Ash does, sample interaction, security, "try it free" CTA, comparison to traditional rate-shopping.
2. **Realtor Partner page** — `/realtors`. Mortgage brokers live and die by realtor referrals. Co-marketing offer, fast pre-qual SLAs, listing alert tools, partner login, joint events.

---

## Final priorities (if redesign has to ship in phases)

**Phase 1 (week 1-2) — fix what's broken/embarrassing:**
- Apply Now page
- About Us (broken `#APPLY_URL#` placeholder, missing story)
- Meet Our Professionals (no photos, missing fields)
- Contact Us (form rendering issues)

**Phase 2 (week 3-4) — homepage + flagship loan pages:**
- Homepage rebuild
- FHA, VA, Conventional, DSCR, Reverse Mortgage (highest-conversion pages)
- Loan Programs hub

**Phase 3 (week 5-6) — content infrastructure:**
- All other loan program pages
- Calculators (split into individual pages)
- FAQ + Glossary with search
- Loan Process visual rebuild

**Phase 4 (week 7-8) — growth + AI:**
- Ash AI marketing page
- Realtor Partner page
- Reviews page redesign
- Blog upgrades + email capture
- Schema markup + technical SEO

---

*Brief assembled by analyzing 17 live pages on assuranthomeloans.com. Tone, structure, and visual direction should reference thinklimitless.co's editorial sensibility while staying compliance-appropriate for a regulated mortgage broker.*