export interface TeamMember {
  name: string;
  role: string;
  description: string;
  avatar: string;
}

export const team: TeamMember[] = [
  {
    name: 'Shahadat Hossain Khan',
    role: 'CEO & Founder',
    description:
      "Visionary leader with 15+ years in the IT industry, driving Comfavor's mission to transform Bangladeshi businesses through technology.",
    avatar: '/team-placeholder.svg',
  },
  {
    name: 'Rukaia Islam',
    role: 'CTO',
    description:
      'Experienced software architect specializing in scalable web and mobile solutions for enterprise clients.',
    avatar: '/team-placeholder.svg',
  },
  {
    name: 'Eahia Sohel',
    role: 'Lead Designer',
    description:
      'Creative designer with a passion for user-centered design and building intuitive digital experiences.',
    avatar: '/team-placeholder.svg',
  },
  {
    name: 'MST Ismot Ara',
    role: 'Marketing Director',
    description:
      'Digital marketing strategist with expertise in SEO, social media, and data-driven campaign management.',
    avatar: '/team-placeholder.svg',
  },
];
