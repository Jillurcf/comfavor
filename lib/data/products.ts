export interface ProductDownloadLink {
  platform: 'ios' | 'android' | 'web';
  url: string | null;
  label: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  screenshots: string[];
  features: string[];
  downloadLinks: ProductDownloadLink[];
}

export const products: Product[] = [
  {
    slug: 'comfavor-app',
    name: 'Comfavor App',
    tagline: 'Stay connected with Comfavor services on the go',
    description:
      'The official Comfavor mobile app gives you direct access to our services, project updates, and support. Track your project progress, communicate with your development team, and manage your digital presence from anywhere.',
    icon: '/comfavorLog.png',
    screenshots: ['/BannerImg_1.jpg', '/BannerImg_2.jpg'],
    features: [
      'Real-time project status tracking',
      'Direct communication with your development team',
      'Instant notifications on milestones and updates',
      'Service request and quotation management',
      'Secure document sharing',
    ],
    downloadLinks: [
      { platform: 'ios', url: null, label: 'App Store' },
      { platform: 'android', url: null, label: 'Google Play' },
    ],
  },
  {
    slug: 'ghor-er-khabar',
    name: 'ঘরের খাবার',
    tagline: 'হোমমেড খাবার, আপনার দোরগোড়ায়',
    description:
      'ঘরের খাবার connects home chefs with food lovers in your neighborhood. Order authentic homemade meals prepared with love and delivered fresh to your doorstep. Supporting local home-based food businesses across Bangladesh.',
    icon: '/comfavorLog.png',
    screenshots: ['/digitalMarketing.jpg', '/website.jpg'],
    features: [
      'Browse homemade food options near you',
      'Order directly from local home chefs',
      'Secure in-app payments',
      'Real-time order tracking',
      'Rate and review your favorite chefs',
    ],
    downloadLinks: [
      { platform: 'ios', url: null, label: 'App Store' },
      { platform: 'android', url: null, label: 'Google Play' },
    ],
  },
  {
    slug: 'shopcom',
    name: 'ShopCom',
    tagline: 'E-commerce platform for local businesses',
    description:
      'ShopCom empowers local Bangladeshi businesses to create their online store in minutes. From product listing to payment processing and delivery management, ShopCom provides everything you need to take your business digital.',
    icon: '/comfavorLog.png',
    screenshots: ['/website.jpg', '/digitalMarketing.jpg'],
    features: [
      'Drag-and-drop store builder',
      'Mobile-optimized storefronts',
      'Integrated bKash and Nagad payments',
      'Inventory and order management',
      'Analytics and sales reports',
    ],
    downloadLinks: [{ platform: 'web', url: null, label: 'Coming Soon' }],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
