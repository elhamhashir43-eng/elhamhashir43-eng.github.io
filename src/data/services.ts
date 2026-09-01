export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  intro: string;
  eyebrow: string;
  heroImage: string;
  items: string[];
};

export const services: Service[] = [
  {
    slug: 'engineering',
    title: 'Engineering',
    shortDescription: 'Technical expertise across complex engineering assets and claims.',
    intro: 'We provide technically grounded assessment and project support across construction, erection, plant and machinery risks.',
    eyebrow: 'Independent engineering expertise',
    heroImage: 'expertise-hero.jpg',
    items: [
      'Construction All Risks Claims',
      'Erection All Risks Claims',
      "Contractors’ Plant & Machinery",
      'Machinery Breakdown',
      'Technical Claims Assessment',
      'Engineering Advisory',
    ],
  },
  {
    slug: 'marine',
    title: 'Marine',
    shortDescription: 'Specialist solutions for the marine and offshore environment.',
    intro: 'We deliver independent marine surveys and offshore advisory services that support safe operations, asset integrity and informed decision-making.',
    eyebrow: 'Independent marine expertise',
    heroImage: 'marine-hero.jpg',
    items: [
      'Damaged Cargo Inspection',
      'Pre-shipment Surveys',
      'Stevedoring Liability',
      'Loading & Offloading Surveys',
      'Sampling & Moisture Testing',
      'Container Surveys',
    ],
  },
  {
    slug: 'pre-risk-valuation',
    title: 'Pre-Risk & Valuation',
    shortDescription: 'Independent assessments that inform decisions and reduce uncertainty.',
    intro: 'Our surveys and valuations give insurers, brokers and asset owners a clear view of risk, insurability and practical loss prevention priorities.',
    eyebrow: 'Clearer risk decisions',
    heroImage: 'expertise-hero.jpg',
    items: [
      'Pre-Risk Surveys',
      'Risk Improvement Reviews',
      'Loss Prevention Advisory',
      'Property Valuations',
      'Insurability Assessments',
      'Detailed Risk Reporting',
    ],
  },
  {
    slug: 'property-loss-adjusting',
    title: 'Property & Loss Adjusting',
    shortDescription: 'Objective, fair and efficient claims and loss-adjusting services.',
    intro: 'We investigate and manage complex property losses with independence, technical rigor and a clear focus on fair outcomes.',
    eyebrow: 'Independent claims expertise',
    heroImage: 'expertise-hero.jpg',
    items: [
      'Fire & Special Perils',
      'Property All Risks',
      'Business Interruption',
      'Miscellaneous Claims',
      'Root Cause Analysis',
      'Specialist Loss Adjusting',
    ],
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
