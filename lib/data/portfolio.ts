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
  challenge?: string;
  solution?: string;
  results?: string[];
  technologies?: string[];
  gallery?: string[];
  overview?: string;
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
    gallery: ['/waymarks.png', '/website.jpg'],
    overview:
      'Waymarks Agency needed a modern, professional website to showcase their services and establish credibility online. We delivered a full-stack solution from design through deployment.',
    challenge:
      'The client needed a clean, conversion-focused website that clearly communicates their agency services while maintaining fast performance and easy content management.',
    solution:
      'We designed a user-centric interface in Figma, developed a responsive frontend with modern components, and built a custom backend for content management and contact handling.',
    results: [
      'Professional online presence established',
      'Improved user engagement and contact inquiries',
      'Fast-loading, mobile-responsive website',
      'Easy-to-manage content structure',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
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
    gallery: ['/telal-contracting.png', '/BannerImg_1.jpg'],
    overview:
      'Telal Contracting required a professional website to showcase their construction and contracting services to potential clients in the region.',
    challenge:
      'They needed a credible online presence with project portfolio display, service listings, and easy contact options without a complex CMS.',
    solution:
      'We built a clean, responsive frontend with service pages and a minimal backend for contact form submissions and basic content management.',
    results: [
      'Enhanced professional credibility',
      'Clear presentation of services and projects',
      'Increased client inquiries',
      'Mobile-optimized experience',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
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
    gallery: ['/amaken.png', '/BannerImg_2.jpg'],
    overview:
      'Amaken Real Estate needed a comprehensive e-commerce platform to showcase properties, manage listings, and handle client inquiries efficiently.',
    challenge:
      'The platform required property cataloging, search and filtering, inquiry management, and a clean user experience for both property seekers and agents.',
    solution:
      'We delivered end-to-end design and development - UI/UX in Figma, responsive property listing frontend, and a robust backend for property management and lead capture.',
    results: [
      'Complete digital property showcase platform',
      'Streamlined property browsing and search',
      'Efficient inquiry and lead management',
      'Professional brand presence online',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
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
    gallery: ['/jazirat.png', '/website.jpg'],
    overview: 'Jazirat Khalis needed a clean, modern website to establish their online presence.',
    challenge: 'Create a fast, responsive website that presents their brand professionally with minimal complexity.',
    solution: 'Built a clean frontend with modern design principles, optimized for speed and mobile responsiveness.',
    results: [
      'Clean, professional online presence',
      'Fully responsive across devices',
      'Fast loading times',
      'Improved brand visibility',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
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
    gallery: ['/touchworld.png', '/digitalMarketing.jpg'],
    overview:
      'Touch World International needed a corporate website to showcase their business services and build credibility.',
    challenge: 'Deliver a professional corporate presence that works well across all devices within budget.',
    solution: 'Developed a clean, corporate-focused frontend with clear service sections and contact functionality.',
    results: [
      'Professional corporate identity online',
      'Clear service presentation',
      'Mobile-responsive design',
      'Enhanced business credibility',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
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
    gallery: ['/dentcare.png', '/BannerImg_1.jpg'],
    overview: 'Dent Care needed a modern website to showcase dental services and make it easy for patients to get information.',
    challenge: 'Create a welcoming, professional healthcare website with clear service information and contact details.',
    solution: 'Built a clean, patient-friendly frontend with service listings, contact information, and responsive design.',
    results: [
      'Professional healthcare presence',
      'Easy access to services and contact info',
      'Mobile-friendly patient experience',
      'Improved online visibility',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
];

export function getPortfolioBySlug(slug: string): PortfolioProject | undefined {
  return portfolio.find((project) => project.slug === slug);
}

export function getFeaturedPortfolio(): PortfolioProject[] {
  return portfolio.filter((project) => project.featured);
}
