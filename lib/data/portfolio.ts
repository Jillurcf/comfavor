export interface PortfolioProject {
  slug: string;
  title: string;
  clientName?: string;
  url: string;
  category: string[];
  services: string[];
  shortDescription: string;
  description: string;
  price: number;
  priceLabel: string;
  featured?: boolean;
  tags?: string[];
  image?: string;
}

export const portfolio: PortfolioProject[] = [
  {
    slug: 'waymarks-agency',
    title: 'Waymarks Agency',
    clientName: 'Waymarks Agency',
    url: 'https://waymarks.agency/',
    category: ['Website', 'Corporate'],
    services: ['UI/UX', 'Frontend', 'Backend'],
    shortDescription: 'Full website with UI/UX design, frontend, and backend implementation.',
    description:
      'Complete web solution for Waymarks Agency with custom UI/UX design, robust frontend development, and backend functionality to power their business presence.',
    price: 120000,
    priceLabel: '৳120,000',
    featured: true,
    tags: ['UI/UX', 'Frontend', 'Backend'],
    image: '/waymarks.png',
  },
  {
    slug: 'telal-contracting',
    title: 'Telal Contracting',
    clientName: 'Telal Contracting',
    url: 'https://telal-contracting.com/',
    category: ['Website', 'Corporate'],
    services: ['Frontend', 'Backend'],
    shortDescription: 'Frontend website with minimal backend functionality.',
    description:
      'Professional contracting company website with modern frontend and minimal backend integration for content management and contact functionality.',
    price: 45000,
    priceLabel: '৳45,000',
    featured: true,
    tags: ['Frontend', 'Minimal Backend'],
    image: '/telal-contracting.png',
  },
  {
    slug: 'amaken-realestate',
    title: 'Amaken Real Estate',
    clientName: 'Amaken Real Estate',
    url: 'https://www.amaken-realestate.com/',
    category: ['E-commerce', 'Real Estate'],
    services: ['UI/UX', 'Frontend', 'Backend'],
    shortDescription: 'E-commerce real estate platform with full design and development.',
    description:
      'Complete e-commerce solution for Amaken Real Estate with UI/UX design, frontend development, and backend system for property listings and inquiries.',
    price: 280000,
    priceLabel: '৳280,000',
    featured: true,
    tags: ['E-commerce', 'UI/UX', 'Frontend', 'Backend'],
    image: '/amaken.png',
  },
  {
    slug: 'jazirat-khalis',
    title: 'Jazirat Khalis',
    clientName: 'Jazirat Khalis',
    url: 'https://jaziratkhalis.com/',
    category: ['Website'],
    services: ['Frontend'],
    shortDescription: 'Clean and modern frontend website.',
    description:
      'Frontend website development for Jazirat Khalis with clean, responsive design and modern user experience.',
    price: 20000,
    priceLabel: '৳20,000',
    tags: ['Frontend'],
    image: '/jazirat.png',
  },
  {
    slug: 'touch-world-int',
    title: 'Touch World International',
    clientName: 'Touch World International',
    url: 'https://www.touchworldint.com/',
    category: ['Website', 'Corporate'],
    services: ['Frontend'],
    shortDescription: 'Corporate frontend website development.',
    description:
      'Professional corporate website for Touch World International with responsive frontend design and optimal user experience.',
    price: 15000,
    priceLabel: '৳15,000',
    tags: ['Frontend'],
    image: '/touchworld.png',
  },
  {
    slug: 'dent-care',
    title: 'Dent Care',
    clientName: 'Dent Care',
    url: 'https://dent-care-three.vercel.app/',
    category: ['Website', 'Healthcare'],
    services: ['Frontend'],
    shortDescription: 'Healthcare frontend website.',
    description:
      'Modern dental care website with clean frontend design, responsive layout, and user-friendly interface.',
    price: 8000,
    priceLabel: '৳8,000',
    tags: ['Frontend'],
    image: '/dentcare.png',
  },
];

export function getPortfolioBySlug(slug: string): PortfolioProject | undefined {
  return portfolio.find((project) => project.slug === slug);
}

export function getFeaturedPortfolio(): PortfolioProject[] {
  return portfolio.filter((project) => project.featured);
}
