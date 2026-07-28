import type { Metadata } from 'next';

export const SITE_NAME = 'Comfavor — Information Technology';
export const SITE_DESCRIPTION =
  'Comfavor is a Bangladesh-based IT services company offering web development, mobile apps, UI/UX design, and digital marketing.';
export const SITE_URL = 'https://comfavor.com';
export const SITE_LOGO = '/comfavorLog.png';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Comfavor Information Technology',
  url: SITE_URL,
  logo: `${SITE_URL}${SITE_LOGO}`,
  description: SITE_DESCRIPTION,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+880-1643989705',
    contactType: 'customer service',
    email: 'info@comfavor.com',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BD',
    addressLocality: 'Dhaka',
  },
  sameAs: ['https://facebook.com/comfavor', 'https://linkedin.com/company/comfavor'],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Comfavor Information Technology',
  image: `${SITE_URL}${SITE_LOGO}`,
  telephone: '+880-1643989705',
  email: 'info@comfavor.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BD',
    addressLocality: 'Dhaka',
  },
  url: SITE_URL,
  priceRange: '$$',
  openingHours: 'Sa-Th 09:00-18:00',
};

export const serviceSchema = {
  web: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website Development',
    provider: { '@type': 'Organization', name: 'Comfavor Information Technology' },
    description:
      'Responsive, high-performance websites and web applications tailored to your business needs.',
    serviceType: 'Web Development',
    areaServed: { '@type': 'Country', name: 'BD' },
  },
  mobile: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Mobile App Development',
    provider: { '@type': 'Organization', name: 'Comfavor Information Technology' },
    description:
      'Native-feeling mobile applications for iOS and Android using cross-platform technologies.',
    serviceType: 'Mobile App Development',
    areaServed: { '@type': 'Country', name: 'BD' },
  },
  uiux: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'UI/UX Design',
    provider: { '@type': 'Organization', name: 'Comfavor Information Technology' },
    description:
      'Intuitive, accessible, and beautiful interfaces that delight users and drive engagement.',
    serviceType: 'UI/UX Design',
    areaServed: { '@type': 'Country', name: 'BD' },
  },
  marketing: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Digital Marketing',
    provider: { '@type': 'Organization', name: 'Comfavor Information Technology' },
    description:
      'Data-driven digital marketing strategies to build brand awareness and generate leads.',
    serviceType: 'Digital Marketing',
    areaServed: { '@type': 'Country', name: 'BD' },
  },
} as const;

export const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  author: { '@type': 'Organization', name: 'Comfavor Information Technology' },
  publisher: { '@type': 'Organization', name: 'Comfavor Information Technology' },
};

export const breadcrumbSchema = (items: { name: string; item: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.item}`,
  })),
});

export function buildMetadata(overrides: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}): Metadata {
  const url = `${SITE_URL}${overrides.path}`;
  return {
    title: overrides.title,
    description: overrides.description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: overrides.title,
      description: overrides.description,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
      images: overrides.ogImage
        ? [{ url: `${SITE_URL}${overrides.ogImage}`, width: 1200, height: 630 }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: overrides.title,
      description: overrides.description,
      images: overrides.ogImage ? [`${SITE_URL}${overrides.ogImage}`] : undefined,
    },
  };
}

export const routeMetadata: Record<string, { title: string; description: string; path: string }> = {
  home: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    path: '/',
  },
  about: {
    title: 'About Us — Comfavor',
    description:
      'Learn about Comfavor Information Technology — our story, mission, team, and the technologies we use to empower Bangladeshi businesses.',
    path: '/aboutus',
  },
  products: {
    title: 'Products — Comfavor',
    description:
      "Explore Comfavor's digital products — mobile apps and platforms built for Bangladeshi businesses and consumers.",
    path: '/products',
  },
  services: {
    title: 'Services — Comfavor',
    description:
      'Comfavor offers web development, mobile app development, UI/UX design, and digital marketing services for Bangladeshi businesses.',
    path: '/services',
  },
  contact: {
    title: 'Contact Us — Comfavor',
    description:
      'Get in touch with Comfavor Information Technology. Send us a message, call us, or visit our office in Dhaka, Bangladesh.',
    path: '/contact',
  },
  blog: {
    title: 'Blog — Comfavor',
    description:
      'Insights, guides, and updates from Comfavor Information Technology. Learn about web development, mobile apps, UI/UX design, digital marketing, and technology trends in Bangladesh.',
    path: '/blogs',
  },
  careers: {
    title: 'Careers — Comfavor',
    description:
      'Join the Comfavor team. Explore career opportunities in web development, mobile apps, UI/UX design, and digital marketing. Build your career with a leading IT company in Bangladesh.',
    path: '/careers',
  },
  careerPost: {
    title: 'Job Opening — Comfavor Careers',
    description: 'View details and apply for open positions at Comfavor Information Technology.',
    path: '/careers',
  },
};
