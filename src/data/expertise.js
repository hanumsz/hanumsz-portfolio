import { caseStudies } from "./caseStudies";
import { competitions } from "./competitions";
import { projects } from "./projects";
import { orgExperience } from "./orgExperience";
import { proExperience } from "./proExperience";

export const PILLARS = [
  {
    id: "strategy",
    title: "Strategy",
    line: "Finding the real problem before proposing solutions.",
    preview: ["Consulting engagements", "Go-to-market strategy", "SWOT & market analysis", "Strategic case competitions"],
  },
  {
    id: "analytics",
    title: "Analytics",
    line: "Using evidence and data to guide every decision.",
    preview: ["Python, R & Power BI", "Market research", "Competitor benchmarking", "Dashboards & data analysis"],
  },
  {
    id: "marketing",
    title: "Marketing",
    line: "Creating value by understanding people.",
    preview: ["Campaign strategy", "SEO & content strategy", "Brand positioning", "Consumer behaviour research"],
  },
  {
    id: "finance",
    title: "Finance",
    line: "Measuring long-term business impact.",
    preview: ["DCF & comparables valuation", "Financial modeling", "Capital allocation", "Investment analysis"],
  },
];

function fromCaseStudies() {
  return caseStudies.map((c) => ({
    type: "Case Study",
    categories: c.categories ?? [],
    title: c.title,
    description: c.hook,
    meta: c.org,
    href: `/work/${c.slug}`,
    key: `case-${c.slug}`,
  }));
}

function fromCompetitions() {
  return competitions.map((c) => ({
    type: "Case Competition",
    categories: c.categories ?? [],
    title: c.title,
    description: c.hook,
    meta: `${c.competition} · ${c.result}`,
    href: `/competitions/${c.slug}`,
    key: `comp-${c.slug}`,
  }));
}

function fromProjects() {
  return projects.map((p) => ({
    type: "Project",
    categories: p.categories ?? [],
    title: p.title,
    description: p.hook,
    meta: p.context,
    href: `/projects/${p.slug}`,
    key: `project-${p.slug}`,
  }));
}

function fromOrgExperience() {
  return orgExperience.map((o) => ({
    type: "Organizational Experience",
    categories: o.categories ?? [],
    title: `${o.role} — ${o.org}`,
    description: o.summary,
    meta: o.timeframe,
    href: `/experience/organizational`,
    key: `org-${o.id}`,
  }));
}

function fromProExperience() {
  return proExperience.map((p) => ({
    type: "Professional Experience",
    categories: p.categories ?? [],
    title: `${p.role} — ${p.org}`,
    description: p.summary,
    meta: p.timeframe,
    href: `/experience/professional`,
    key: `pro-${p.id}`,
  }));
}

const ALL_ITEMS = [
  ...fromCaseStudies(),
  ...fromCompetitions(),
  ...fromProjects(),
  ...fromOrgExperience(),
  ...fromProExperience(),
];

export const getItemsByCategory = (categoryId) => ALL_ITEMS.filter((item) => item.categories.includes(categoryId));

export const getAllItems = () => ALL_ITEMS;
