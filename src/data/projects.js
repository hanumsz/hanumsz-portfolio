export const projects = [
  {
    slug: "essential-utilities-stock-pitch",
    categories: ["finance", "analytics"],
    category: "Equity Research",
    context: "RSM332: Capital Market Theory — University of Toronto",
    recommendation: "DCF Analysis",
    timeframe: "November 2025",
    title: "Essential Utilities, Inc. — A Strong Buy Equity Research Pitch",
    hook: "A five-year discounted cash flow and comparables valuation on Essential Utilities Inc. (NYSE: WTRG), built around its $7.8 billion infrastructure investment plan and pending merger with American Water Works.",
    team: ["Sanyah Ahmed", "Cheng Peng", "Hanum Zahrani", "Emily Suyavong", "Pramiti Varadarajan"],
    challenge:
      "As part of RSM332: Capital Market Theory at the University of Toronto, our team was assigned to build a complete equity research pitch on a publicly traded company: assess the business and its industry, build an independent valuation, and issue a buy, hold, or sell recommendation defensible to a room of finance students and faculty. We chose Essential Utilities Inc. (NYSE: WTRG), a regulated water and natural gas utility founded in 1886 that serves roughly 5.5 million customers across nine U.S. states through its Aqua (water) and Peoples (natural gas) divisions.",
    research:
      "We built the investment case around two structural facts about the business. First, Essential Utilities operates in a low-risk, regulated industry: as a natural monopoly, its rates and allowed returns are set by state regulators in exchange for stable, predictable earnings, and the sector is under growing pressure to modernize aging infrastructure and improve ESG performance. Second, the company was already ahead of that curve — it had committed $7.8 billion in capital investment from 2025 to 2029, including more than 300 PFAS-remediation projects, and had adopted enterprise digital systems, including SAP S/4HANA in 2019, years before most regulated peers.",
    framework:
      "We built the recommendation on two theses. Thesis I, Sustainable Infrastructure Leadership and Regulatory Alignment, argued that Essential's $7.8 billion capital plan would accelerate revenue growth through the regulated rate base (projected at 6 percent for water and 11 percent for natural gas), while reducing regulatory risk and reinforcing trust with state regulators. Thesis II, Digital Modernization and Operating Efficiency, argued that Essential's early adoption of SAP S/4HANA, its 2020 data-management partnership with Infosys, and a new $26 million AI data center investment would compound into sustained margin improvement as the company continued to benefit from broader digital transformation across the utilities sector.",
    solution:
      "We built a five-year discounted cash flow model projecting free cash flow to equity from 2026 through 2030, using a 7.58 percent cost of equity derived from a beta of 0.81 per Capital IQ. We calculated terminal value two ways, a Gordon Growth model using a 2.0 percent terminal growth rate in line with U.S. GDP growth, and an exit multiple of 14.5x built from comparable companies' EV/EBITDA, then averaged the two to arrive at an implied share price. We cross-checked that result against a comparables analysis using five peer water and gas utilities, including American Water Works and Middlesex Water Company, applying an average peer P/E multiple of 22.4x to Essential's net income. We also incorporated Essential's announced 2027 merger with American Water Works into bull and bear cases, adjusting the revenue growth rate five percentage points in each direction to reflect merger upside or integration risk.",
    impact: [
      "Recommended a Strong Buy, with an implied share price of $52.93 against a current price of $40.12 — a 31.9 percent upside",
      "Comparables cross-check using peer P/E multiples produced an independent implied share price of $51.80, reinforcing the DCF result",
      "Identified merger execution risk and gas-price and weather volatility as the two key risks, and assessed both as low to moderate given the companies' non-overlapping service territories and Essential's water and wastewater revenue base cushioning gas-segment volatility",
    ],
    reflection:
      "Building a valuation off public filings, not a case package with the numbers already picked out, was a different kind of discipline. The hardest part was not the DCF mechanics, it was deciding which assumptions were defensible enough to put a number on, and which ones we were just guessing at.",
    downloads: [
      { label: "Equity research report (PDF)", href: "/downloads/Essential-Utilities-Stock-Pitch-Report.pdf" },
      { label: "Final presentation deck (PDF)", href: "/downloads/Essential-Utilities-Stock-Pitch-Deck.pdf" },
    ],
  },
  {
    slug: "hm-conscious-clothing-trust-research",
    categories: ["marketing", "analytics"],
    category: "Consumer Research",
    context: "RSM352: Marketing Research — University of Toronto",
    recommendation: "TrustTag Concept",
    timeframe: "2026",
    title: "TrustTag — Rebuilding Consumer Trust in H&M's Conscious Clothing Line",
    hook: "A mixed-methods study of 102 Canadian consumers found that most had never heard of H&M's sustainable Conscious line, and most who had suspected it of greenwashing.",
    team: ["Marianne Chua", "Ayoninuoluwa Sobande", "Anika Kulathu", "Hanum Sukma Zahrani", "Vanessa Yang", "Katelyn Hou"],
    challenge:
      "H&M introduced its Conscious Clothing line as 'the shortcut to more sustainable shopping,' claiming its garments used at least 50 percent more sustainable materials such as organic cotton and recycled polyester. The line drew criticism for vague environmental claims and suspected greenwashing, risking consumer trust as young, sustainability-aware Canadian consumers grew more skeptical of unverified claims. Our team was assigned to determine how trust issues and perceived greenwashing tied to the Conscious line were shaping current perceptions of H&M's sustainability efforts, brand equity, and purchase behaviour among Canadian consumers, and to recommend how H&M could rebuild credibility.",
    research:
      "We ran a mixed-methods study over three weeks: an online survey of 92 respondents, a three-person online focus group, and seven in-depth interviews, for a combined sample of 102 participants, primarily Canadian university students aged 18 to 24. Survey responses were analyzed for descriptive trends, while interview and focus group transcripts were coded for recurring themes. Because we relied on convenience sampling through personal and academic networks, the findings are exploratory rather than representative of the broader Canadian population.",
    framework:
      "The findings converged on the same story from both the survey and the qualitative interviews. Awareness was the first problem: 76.1 percent of survey respondents and 80 percent of interview participants had never heard of the Conscious line, and even those who recognized its green tag could not explain what made it different from H&M's regular products. Where awareness did exist, trust did not follow it: transparency and trustworthiness ratings averaged between 2.6 and 2.9 on a 5-point scale, and 70 percent of interview participants directly described the line as greenwashing. Consumers were not rejecting sustainability itself, they were rejecting claims that felt vague, unverified, and inconsistent with H&M's identity as a fast-fashion retailer known for low perceived quality.",
    solution:
      "We recommended TrustTag, an AI-powered sustainability scorecard built into each product page and garment tag. TrustTag shows a verified material breakdown, explains what each material actually means, and gives care instructions to extend a garment's life, backed by an interactive assistant that answers shopper questions in plain language, with every question logged as ongoing research data for H&M. We paired this with a recurring campaign, 'See the Impact,' presenting fact-based sustainability information consistently across digital and in-store channels, on the premise that consistency, not a single campaign, is what would reduce the perception of greenwashing over time.",
    impact: [
      "Identified a 76.1 percent awareness gap in H&M's Conscious line as the primary driver of the trust deficit, not outright rejection of sustainability",
      "Found that 70 percent of interview participants explicitly described the Conscious line as greenwashing, while 60 percent said they would still shop at H&M occasionally despite the skepticism, revealing an attitude-behaviour gap",
      "Found that half of interview and focus group participants would pay $5 to $10 more only if sustainability claims were credible and quality matched or exceeded the alternative, pointing to product quality, not price, as the binding constraint on trust",
    ],
    reflection:
      "The most counterintuitive finding was that consumers were not tuning out sustainability messaging, they were tuning out unverifiable sustainability messaging. That distinction changed our recommendation from 'communicate sustainability more' to 'make sustainability provable,' which is a much harder problem to solve with marketing alone.",
    downloads: [
      { label: "Full research report (PDF)", href: "/downloads/Marketing-Research-HM-TrustTag-Report.pdf" },
      { label: "Final presentation deck (PDF)", href: "/downloads/Marketing-Research-HM-TrustTag-Deck.pdf" },
    ],
  },
  {
    slug: "starbucks-sustainability-strategy",
    categories: ["strategy"],
    category: "ESG Strategy",
    context: "RSM497: Sustainability Strategy — University of Toronto",
    recommendation: "Materiality Realignment",
    timeframe: "2026",
    title: "Realigning Starbucks' Sustainability Strategy Around What Actually Matters",
    hook: "An ESG materiality assessment found that Starbucks' most visible sustainability efforts, packaging and store-level waste, are not its most material issues: dairy and coffee emissions and labour practices are.",
    team: ["Hanum Sukma Zahrani", "Aoriqilang", "Tawonashe Chitiga", "Krish Jain"],
    challenge:
      "As part of RSM497: Sustainability Strategy at the University of Toronto, our team was assigned to conduct a full ESG materiality assessment and strategy evaluation for a real public company: identify its most material sustainability issues, evaluate its existing strategy against course frameworks, and issue actionable recommendations. We chose Starbucks Corporation, a global coffeehouse operator sourcing from more than 440,000 coffee farms across more than 30 countries, whose 2030 'Resource Positive' goals commit it to cutting carbon emissions, water withdrawal, and landfill waste by 50 percent against a 2019 baseline.",
    research:
      "We built a materiality assessment across Starbucks' full value chain and found a mismatch between where the company's public sustainability narrative focuses and where its actual impact sits. Approximately 94 percent of Starbucks' total emissions fall under Scope 3, driven largely by dairy (about 13 percent of global emissions) and green coffee sourcing (about 12 percent), yet the company's most visible initiatives, its Greener Stores Framework and packaging pilots, address only a small share of total footprint. Labour practices surfaced as the second major material issue, spanning barista strikes over wages and scheduling in the U.S. and reports of long hours, low pay, and forced-labour risk among upstream agricultural workers, exposing a gap between Starbucks' ethical-sourcing brand and conditions on the ground.",
    framework:
      "We evaluated Starbucks' existing strategy against course concepts including supply-chain governance, information asymmetry, and collective action. Its Coffee and Farmer Equity (C.A.F.E.) practices and third-party audits reduce information asymmetry and principal-agent problems across thousands of farms, and its participation in the Dairy Methane Action Alliance reflects genuine collective action on Scope 3 methane. But we found real limits: C.A.F.E.'s complex requirements are enforced unevenly and can exclude smaller farmers, Farmer Support Centers report activity rather than measurable outcomes, the Greener Stores Framework addresses only Scope 1 and 2 emissions, a small share of total footprint, and labour governance does not yet match the company's stated commitments, as ongoing strikes and grievances show.",
    solution:
      "We recommended Starbucks re-center its ESG strategy on its actual material issues. First, place labour practices and governance at the center of the strategy, with strengthened independent audits and outcome-based indicators such as staffing adequacy and dispute-resolution effectiveness, not just wage and training metrics. Second, prioritize methane reduction from dairy with quantified, outcome-based targets such as emissions per kilogram of milk, alongside expanded investment in regenerative agriculture. Third, apply a 'green bundle' approach to packaging that pairs compostable materials with the durability customers already expect, paired with lottery-style incentives shown in research to outperform small discounts at driving reusable cup adoption. Fourth, replace aspirational sustainability language with consistent, quantifiable disclosure against the 2030 Resource Positive targets.",
    impact: [
      "Identified dairy and coffee emissions, about 25 percent of total footprint combined, and labour practices as Starbucks' most material ESG issues, in contrast to the company's own public emphasis on packaging and store-level waste",
      "Found that Starbucks' Greener Stores Framework, its most visible decarbonization initiative, addresses only Scope 1 and 2 emissions, a small share of a footprint that is roughly 94 percent Scope 3",
      "Recommended outcome-based labour metrics, such as staffing adequacy and dispute-resolution effectiveness, and quantified methane targets in place of the activity-based reporting currently used",
    ],
    reflection:
      "The most useful part of this project was learning to separate what a company talks about from what actually drives its footprint. Starbucks was not being dishonest about its packaging work, it was optimizing for what customers can see, when the numbers pointed somewhere else entirely.",
    downloads: [
      { label: "Full strategy report (PDF)", href: "/downloads/Starbucks-Sustainability-Strategy-Report.pdf" },
      { label: "Final presentation deck (PDF)", href: "/downloads/Starbucks-Sustainability-Strategy-Deck.pdf" },
    ],
  },
  {
    slug: "consumer-behaviour-applied-analyses",
    categories: ["marketing", "analytics"],
    category: "Consumer Behaviour",
    context: "RSM353: Consumer Behaviour — University of Toronto",
    recommendation: "Applied Case Analyses",
    timeframe: "2026",
    title: "Applying Consumer Behaviour Theory to Tim Hortons, Aritzia, and 'Buy Canadian' Campaigns",
    hook: "Three short applied analyses: sensory marketing and Maslow's hierarchy on a Tim Hortons ad, the multiattribute model and cognitive dissonance on 'Buy Canadian' attitudes, and segmentation and social influence on an Aritzia product launch.",
    team: [],
    challenge:
      "As part of RSM353: Consumer Behaviour at the University of Toronto, I completed three short applied analysis papers over the course of the term, each asking me to apply a specific area of consumer behaviour theory to a real marketing case: a Tim Hortons holiday commercial, a 'Buy Canadian' attitude and persuasion problem, and an Aritzia product launch.",
    research:
      "Each paper drew on a different part of the course's theoretical toolkit. For the Tim Hortons commercial, I analyzed its use of storytelling, sensory marketing, and Maslow's hierarchy of needs to explain why an emotional ad about kindness could still function as effective brand marketing. For the 'Buy Canadian' case, I built a multiattribute model comparing Canadian and non-Canadian brands across quality, price, sustainability, and culture, to test whether consumer attitudes toward Canadian goods were strong enough to predict actual purchase behaviour. For the Aritzia case, I evaluated three possible market segments for a new product launch and assessed which combination of demographic and psychographic traits made the strongest strategic target.",
    framework:
      "Across the three papers, I applied a consistent standard: theory only counts if it changes a real decision. For Tim Hortons, that meant proposing specific, testable improvements to the ad rather than general commentary, and designing a mixed-method evaluation plan, an online survey plus a controlled experiment, to measure whether they actually worked. For the Buy Canadian case, it meant using the multiattribute model's own output, that culture scored high but mattered least to purchase decisions, to design a specific attitude-change campaign rather than a generic call for national pride. For Aritzia, it meant translating the segmentation decision into concrete decision-environment tactics, anchoring, the compromise effect, and social proof, that could be applied directly to a product page.",
    solution:
      "For Tim Hortons, I proposed adding product close-up shots as taste stimuli, a memorable slogan with voiceover, and a borrowed-interest partnership with a recognizable Canadian celebrity, paired with a survey and controlled-experiment plan to test the changes before rollout. For the Buy Canadian case, I recommended an attitude-change campaign built around cultural pride backed by data, paired with a cognitive-dissonance ad exposing the gap between Canadians' stated pride and their habitual purchase of foreign brands. For Aritzia's Cozy Sweatfleece Mega Jogger, I recommended targeting Gen Z consumers with a high need for uniqueness, using influencer-driven social proof and a hashtag campaign to build descriptive norms, and shaping the product page itself with anchored pricing and a compromise-effect product lineup.",
    impact: [
      "Tim Hortons: designed a mixed-method evaluation plan, an online survey plus a controlled experiment, to test proposed ad improvements against the original before any media spend",
      "Buy Canadian: built a multiattribute model showing consumers rate Canadian and non-Canadian brands nearly identically overall, isolating culture as the one attribute Canadian brands already win on but rank low in purchase importance",
      "Aritzia: identified Gen Z consumers with a high need for uniqueness as the most strategic segment, and translated that into specific product-page tactics, anchoring and the compromise effect, rather than general marketing advice",
    ],
    reflection:
      "The hardest part of these papers was not applying the theory, it was resisting the urge to over-apply it. Every case could be explained by five different frameworks; the actual skill was picking the one or two that predicted something useful and building the recommendation around those.",
    downloads: [
      { label: "Tim Hortons commercial analysis (PDF)", href: "/downloads/Consumer-Behaviour-Tim-Hortons-Analysis.pdf" },
      { label: "Attitudes & persuasion: Buy Canadian analysis (PDF)", href: "/downloads/Consumer-Behaviour-Attitudes-Persuasion-Analysis.pdf" },
      { label: "Aritzia segmentation & application (PDF)", href: "/downloads/Consumer-Behaviour-Aritzia-Analysis.pdf" },
    ],
  },
  {
    slug: "eco204-portfolio-construction",
    categories: ["finance", "analytics"],
    category: "Portfolio Construction",
    context: "ECO204: Microeconomic Theory and Applications for Commerce — University of Toronto",
    recommendation: "Wiener Method",
    timeframe: "November 2024",
    title: "A Four-Method Portfolio Construction for a Risk-Free Asset and Synthetic Risky Asset",
    hook: "Built and compared four portfolio construction methods, Statistical Analysis, Shrinkage, and two stochastic processes, on a synthetic risky asset of two real equities, to recommend the allocation with the best risk-adjusted return.",
    team: [],
    challenge:
      "As part of ECO204: Microeconomic Theory and Applications for Commerce at the University of Toronto, I completed a solo project simulating the role of a junior portfolio manager: construct a one-month-forward portfolio combining a risk-free asset, 90-day U.S. Treasury bills, with a Synthetic Risky Asset built from two real equities, Essex Property Trust (ESS) and Consolidated Edison (ED), using four distinct methods, Statistical Analysis, Shrinkage, the Wiener Stochastic Process, and the Ito Stochastic Process. The deliverable was a fully built Excel portfolio model plus a business report addressed to a fictional senior portfolio manager, recommending which method and allocation to use.",
    research:
      "I collected monthly return data for ESS, ED, the S&P 500, and U.S. Treasury bills spanning July 1994 to September 2024, sourced from CRSP, FRED, and Google Finance. From this data I calculated risk, return, risk premium, and Sharpe ratio for each asset, along with the full variance-covariance matrix, to understand how ESS and ED behaved individually and relative to the broader market before combining them into a single synthetic risky asset.",
    framework:
      "I built the same portfolio under four different methods and compared them on the same terms: expected return, risk, Sharpe ratio, and a risk-tolerance threshold value 'c.' Statistical Analysis and Shrinkage use historical return data directly, while the Wiener and Ito Stochastic Process methods model asset returns as continuous-time stochastic processes to project forward-looking risk and return rather than relying solely on historical averages.",
    solution:
      "Across all four methods, ESS consistently received a higher portfolio weight than ED, reflecting its higher Sharpe ratio and stronger risk-adjusted return. The Statistical Analysis method produced the highest expected return (1.15%) but also the highest risk. The Wiener Stochastic Process method struck the best balance, an expected return of 0.99% at a risk of 0.05 with a Sharpe ratio of 0.13, the highest of all four methods, allocating 65% to ESS and 35% to ED. I recommended the Wiener method as the optimal approach for constructing the portfolio.",
    impact: [
      "Built and compared four independent portfolio models in a single Excel workbook, covering 30 years of monthly return data across two equities, the S&P 500, and U.S. Treasury bills",
      "Identified the Wiener Stochastic Process as the optimal method, delivering the highest Sharpe ratio (0.13) of the four methods tested at a risk-tolerance threshold of 1.35",
      "Recommended a 65% ESS / 35% ED allocation, weighting the higher-Sharpe-ratio asset more heavily while keeping overall portfolio risk at 0.05",
    ],
    reflection:
      "Building the same portfolio four separate ways made the tradeoffs concrete instead of theoretical. Statistical Analysis looked best on paper until its risk number showed why 'highest expected return' is not the same question as 'best portfolio.'",
    downloads: [
      { label: "Business report (PDF)", href: "/downloads/ECO204-Portfolio-Construction-Report.pdf" },
      { label: "Portfolio Excel model (XLSX)", href: "/downloads/ECO204-Portfolio-Construction-Model.xlsx" },
    ],
  },
  {
    slug: "eco204-merck-licensing-decision",
    categories: ["finance", "analytics"],
    category: "Decision Analysis",
    context: "ECO204: Microeconomic Theory and Applications for Commerce — University of Toronto",
    recommendation: "License Recommended",
    timeframe: "March 2025",
    title: "A Decision Tree and Monte Carlo Analysis of Merck's Davanrik Licensing Decision",
    hook: "A decision-tree and Monte Carlo analysis of whether Merck should license Davanrik, an experimental depression and obesity drug, built on the real probabilities and costs from Merck's three-phase clinical trial process.",
    team: [],
    challenge:
      "As part of ECO204: Microeconomic Theory and Applications for Commerce at the University of Toronto, I completed a solo project based on the Harvard Business School case Merck & Company: Evaluating a Drug Licensing Opportunity. Merck was deciding whether to license Davanrik, an experimental drug for depression and obesity developed by LAB Pharmaceuticals, which lacked the resources to complete clinical trials, manufacturing, and marketing on its own. The project had two parts: Part A required building a decision tree to calculate the expected value of licensing under the case's given probabilities and costs, and Part B required extending that model with Monte Carlo simulations after introducing uncertainty into key parameters.",
    research:
      "I mapped Davanrik's full three-phase clinical trial path: a 60% chance of Phase I success at a $30 million cost, four possible Phase II outcomes, effective for depression only, weight loss only, both, or failure, at a $40 million cost, and Phase III success probabilities ranging from 70% to 85% depending on which indication succeeded, with costs and potential launch profit varying by outcome, from $245 million if approved for weight loss only up to $1.85 billion if approved for both conditions.",
    framework:
      "In Part A, I used backward induction, starting from Phase III and working back to the initial licensing decision, to calculate the expected value of each path through the decision tree, comparing it at every stage against the expected value of doing nothing. In Part B, I extended the same decision tree by replacing several fixed parameters with realistic ranges, for example letting Phase I success probability vary between 40% and 80% instead of a fixed 60%, and Phase I cost vary between $10 million and $50 million instead of a fixed $30 million, then ran Monte Carlo simulations, scaling from 1,000 up to 5,000 iterations, until the average expected value stabilized.",
    solution:
      "The deterministic decision tree in Part A showed licensing Davanrik carried a positive expected value of $13.98 million against $0 for not licensing, making licensing the optimal choice under the case's stated assumptions. The Monte Carlo simulation in Part B tested that conclusion against uncertainty: at 5,000 iterations, the average expected value of the optimal decision stabilized around $16 million, with 3,573 of 5,000 simulated scenarios favoring licensing against 1,427 favoring rejection. I recommended Merck proceed with licensing Davanrik, since the expected value stayed positive under both the fixed-parameter and uncertainty-adjusted models, while flagging clinical trial management, cost control, and market-entry strategy as the three areas Merck would need to actively manage to protect that expected value.",
    impact: [
      "Built a full backward-induction decision tree across three clinical trial phases, calculating expected value at each branch from Phase III back to the initial licensing decision",
      "Ran Monte Carlo simulations at increasing scale, from 1,000 to 5,000 iterations, to find the simulation count at which the average expected value stabilized before reporting results",
      "Found the licensing decision's average expected value under uncertainty ($16 million) exceeded the deterministic estimate ($13.98 million), with 71% of 5,000 simulated scenarios favoring licensing",
    ],
    reflection:
      "The deterministic decision tree gave a single confident number, but the Monte Carlo simulation was what actually tested whether that confidence was earned. Watching the recommendation hold up across thousands of scenarios with varying assumptions was far more convincing than any single expected-value calculation could be.",
    downloads: [
      { label: "Business report (PDF)", href: "/downloads/ECO204-Merck-Licensing-Report.pdf" },
      { label: "Decision tree & Monte Carlo Excel model (XLSX)", href: "/downloads/ECO204-Merck-Licensing-Model.xlsx" },
    ],
  },
  {
    slug: "starbucks-customer-service-strategy",
    categories: ["strategy", "marketing"],
    category: "Marketing Strategy",
    context: "RSM350: Marketing Management — University of Toronto",
    recommendation: "Beyond the Coffee",
    timeframe: "2026",
    title: "Beyond the Coffee — A Strategic Response to Starbucks' Customer Satisfaction Decline",
    hook: "A weighted-criteria evaluation of three strategic responses to Starbucks' declining customer satisfaction scores, recommending a move 'Beyond the Coffee' into experiential workshops and culturally-inspired drink offerings.",
    team: [],
    challenge:
      "As part of RSM350: Marketing Management at the University of Toronto, our group analyzed the classic Starbucks 'Delivering Customer Service' case: despite achieving its highest-ever customer satisfaction ratings relative to competitors, Starbucks' own internal satisfaction scores were declining. We framed the core issue as a misinterpretation of consumer expectations, Starbucks was optimizing for the wrong drivers of satisfaction, leading to a growing negative brand perception, and were asked to evaluate strategic alternatives and recommend one.",
    research:
      "We built an STP analysis identifying Starbucks' core customers as urban, psychographically driven by a desire for a 'third space' beyond home and work, and behaviourally defined by valuing premium coffee, then paired it with a SWOT analysis. Starbucks' strengths, high service ratings, strong brand recognition, and an employee-first culture, were offset by weaknesses in data usage and store clustering, while its financial capacity for international expansion stood as its clearest opportunity against a backdrop of intensifying competition and an evolving consumer profile.",
    framework:
      "We scored three alternatives against five weighted decision criteria: Customer Satisfaction (30%), Growth Potential (20%), Brand Alignment (20%), Profitability (15%), and Sales (15%). Alternative 1, Efficiency Improvements, focused on reducing wait times and streamlining the menu. Alternative 2, Starbucks Lifespaces, proposed segmented store formats, Campus, Office, and Family, tailored to different customer contexts. Alternative 3, Beyond the Coffee, proposed experiential in-store workshops built around craft, culture, and environment, paired with a 'World's Brew' menu of culturally-inspired drinks such as a Chinese green tea coffee and an Italian affogato.",
    solution:
      "Beyond the Coffee scored highest across our weighted criteria (7.4, against 7.1 for Starbucks Lifespaces and 6.5 for Efficiency Improvements), and we recommended it as the strategy that best addressed declining satisfaction without sacrificing brand identity. We built a three-phase, 24-month-plus rollout: Phase 1 establishes a dedicated marketing team and pilots workshops and exclusive drinks over the first year; Phase 2 introduces a loyalty reward system and expands workshop themes and cultural drink offerings into the core menu; Phase 3 expands the workshop concept into international markets.",
    impact: [
      "Scored three strategic alternatives against five weighted decision criteria, and recommended 'Beyond the Coffee' with the highest composite score (7.4 of 10)",
      "Designed a three-phase, 24-month-plus action plan sequencing team formation, pilot testing, loyalty integration, and international expansion",
      "Reframed the case's customer satisfaction problem as a brand-perception and expectation-alignment issue rather than an efficiency problem, shifting the recommendation away from a pure service-speed fix",
    ],
    reflection:
      "The most interesting tension in this case was that the 'obvious' fix, hire more staff to move lines faster, scored lowest on our own criteria. Once we weighted brand alignment and growth potential alongside satisfaction, the case for treating Starbucks as an experience business rather than a service-speed business became much stronger than it first appeared.",
    downloads: [
      { label: "Case analysis deck (PDF)", href: "/downloads/RSM350-Starbucks-Customer-Service-Deck.pdf" },
    ],
  },
  {
    slug: "metro-corporate-finance-valuation",
    categories: ["finance", "strategy"],
    category: "Corporate Finance",
    context: "RSM333: Corporate Finance — University of Toronto",
    recommendation: "M&A Analysis",
    timeframe: "March 2026",
    title: "Is Metro Inc. Undervalued? A DCF Valuation and M&A Growth Case",
    hook: "A DCF valuation and capital structure analysis of Metro Inc. found the grocery retailer trading 55% below its implied share price, and built the case for acquiring Longo's to convert that undervaluation into strategic growth.",
    team: ["Sanyah", "Dean", "Qi", "Sydney", "Hanum Zahrani", "Hanxiang (Alex)"],
    challenge:
      "As part of RSM333: Corporate Finance at the University of Toronto, our group of six was assigned to build a full financial analysis and valuation of a public company. We chose Metro Inc. (TSX: MRU), one of five major players in Canada's oligopolistic grocery industry alongside Loblaw, Sobeys, Costco, and Walmart, and were asked to assess its debt structure, dividend policy, cost of capital, and ESG positioning before building an independent valuation and recommending a strategic direction for growth.",
    research:
      "We analyzed Metro's capital structure and found a debt profile with only two major bond maturities, CAD 450 million in 2027 and CAD 500 million in 2029, at a fixed weighted average coupon of 3.71%, and a debt-to-capital ratio of 0.41 that balances tax benefits against financial flexibility. We benchmarked Metro's cost of capital against its peers using data extracted from S&P Capital IQ, and reviewed its ESG commitments, including a science-based target to cut Scope 1 and 2 emissions 42% by 2030, against its stated 'nourishing the health and well-being of our communities' social strategy.",
    framework:
      "We built our investment case around Metro's lower cost of capital relative to its peers, a WACC of 4.08% against a peer average of 4.84%, driven in part by a beta of 0.38 that reflects the market's view of Metro as a stable, lower-risk business. A lower WACC lowers Metro's investment hurdle rate, meaning it can accept a wider range of positive-NPV projects, store upgrades, digital capabilities, supply chain efficiency, and acquisitions, than higher-WACC competitors, while also raising capital more cheaply across both debt and equity.",
    solution:
      "Our DCF valuation, built on a weighted average of the past two years of historical data to reflect Metro's stable growth as a mature company, produced an implied share price of $152.68 as of December 31, 2025, against a market price of $98.79, a 55% undervaluation. We cross-checked this against a comparables analysis using Loblaw and Empire, and ran a sensitivity analysis confirming the valuation was most sensitive to WACC and terminal growth assumptions. For future direction, we recommended a horizontal acquisition of Longo's, benchmarked against Empire's 2018 acquisition of Farm Boy at 14x EBITDA, a comparable premium grocery transaction, over an internal growth alternative expanding prepared foods and private label capacity, since the acquisition offered broader strategic reach: expanded premium-segment presence, procurement and distribution synergies, and accelerated e-commerce through Longo's Grocery Gateway platform.",
    impact: [
      "Found Metro Inc. trading 55% below its DCF-implied share price ($152.68 implied vs. $98.79 market price as of December 31, 2025)",
      "Identified Metro's WACC (4.08%) as meaningfully below its peer average (4.84%), driven by a low beta of 0.38, giving it a lower investment hurdle rate than competitors",
      "Recommended a horizontal acquisition of Longo's over an internal growth alternative, benchmarked against Empire's comparable 14x EBITDA acquisition of Farm Boy",
    ],
    reflection:
      "The most useful discipline in this project was separating 'Metro looks cheap' from 'here is specifically why, and what would close the gap.' A 55% undervaluation number means nothing on its own; it only becomes a real recommendation once you can point to the WACC advantage and the acquisition target that would actually convert it into value.",
    downloads: [
      { label: "Corporate finance report (PDF)", href: "/downloads/RSM333-Metro-Corporate-Finance-Report.pdf" },
      { label: "Final presentation deck (PDF)", href: "/downloads/RSM333-Metro-Corporate-Finance-Deck.pdf" },
      { label: "Valuation Excel model (XLSX)", href: "/downloads/RSM333-Metro-Corporate-Finance-Model.xlsx" },
    ],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
