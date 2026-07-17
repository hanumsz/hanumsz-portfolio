// Skill ecosystem: one center node, orbiting skill nodes, each linked to the
// case studies / competitions where that skill was actually applied.
export const centerNode = {
  id: "center",
  label: "Business Problem Solving",
};

export const skillNodes = [
  {
    id: "strategy",
    label: "Strategy",
    ring: 1,
    related: [
      "stem-startup-gtm",
      "expanding-horizons-climateverse",
      "saudi-aramco-esg",
      "consult-for-impact",
      "consult-for-impact-hawkbridge",
      "starbucks-sustainability-strategy",
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    ring: 1,
    related: [
      "consulting-community-marketing",
      "recruitment-campaign",
      "otw-cafe-branding",
      "180dc",
      "180dc-otw-cafe",
      "hm-conscious-clothing-trust-research",
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    ring: 1,
    related: [
      "consulting-community-marketing",
      "stem-startup-gtm",
      "essential-utilities-stock-pitch",
      "consumer-behaviour-applied-analyses",
      "eco204-portfolio-construction",
    ],
  },
  {
    id: "finance",
    label: "Finance",
    ring: 1,
    related: [
      "consulting-olympics-wateraid",
      "saudi-aramco-esg",
      "essential-utilities-stock-pitch",
      "metro-corporate-finance-valuation",
      "eco204-merck-licensing-decision",
      "tax-clinic",
    ],
  },
  {
    id: "research",
    label: "Research",
    ring: 2,
    related: [
      "stem-startup-gtm",
      "expanding-horizons-climateverse",
      "hm-conscious-clothing-trust-research",
      "consumer-behaviour-applied-analyses",
    ],
  },
  {
    id: "leadership",
    label: "Leadership",
    ring: 2,
    related: [
      "recruitment-campaign",
      "international-learning-experiences",
      "math-confidence",
      "aiesec",
      "rotman-npn",
      "consult-for-impact",
    ],
  },
  {
    id: "ai",
    label: "AI",
    ring: 2,
    related: ["stem-startup-gtm", "consult-for-impact-hawkbridge"],
  },
  {
    id: "excel",
    label: "Excel",
    ring: 2,
    related: [
      "saudi-aramco-esg",
      "consulting-olympics-wateraid",
      "essential-utilities-stock-pitch",
      "metro-corporate-finance-valuation",
      "eco204-portfolio-construction",
      "eco204-merck-licensing-decision",
      "tax-clinic",
    ],
  },
  {
    id: "powerbi",
    label: "Power BI",
    ring: 2,
    related: ["consulting-community-marketing", "180dc"],
  },
  {
    id: "python",
    label: "Python",
    ring: 2,
    related: ["stem-startup-gtm", "consult-for-impact", "math-outreach"],
  },
  {
    id: "r",
    label: "R",
    ring: 2,
    related: ["stem-startup-gtm", "consult-for-impact"],
  },
  {
    id: "jupyter",
    label: "Jupyter Notebook",
    ring: 2,
    related: ["stem-startup-gtm", "consult-for-impact"],
  },
];
