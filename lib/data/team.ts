export interface TeamMember {
  name: string;
  role: string;
  description: string;
  avatar: string;
}

export const team: TeamMember[] = [
  {
    name: 'Md Shahadat Hossain Khan',
    role: 'CEO',
    description:
      "Visionary leader with over 15 years of experience in the IT industry, leading Comfavor's strategic growth, innovation, and digital transformation initiatives.",
    avatar: '/Shadat_VAI.png',
  },
  {
    name: 'Tanim Hasan Mahmud',
    role: 'Technical Lead',
    description:
      'Experienced technical leader specializing in software architecture, cloud technologies, and scalable web and mobile application development for enterprise solutions.',
    avatar: '/Tanim_hasan.jpeg',
  },
  {
    name: 'Eahia Sohel',
    role: 'Lead Designer',
    description:
      'Creative UI/UX designer dedicated to crafting intuitive, visually engaging, and user-centered digital experiences that enhance usability and brand identity.',
    avatar: '/Eiahia_Sohel.jpg',
  },
  {
    name: 'Syed Sazidul Hoque',
    role: 'Product Engineer',
    description:
      'Passionate product engineer focused on building reliable, scalable, and high-performance software solutions while delivering exceptional user experiences.',
    avatar: '/Sajid.jpg',
  },
  {
    name: 'MST Ismoth Ara',
    role: 'Marketing Director',
    description:
      'Results-driven marketing strategist with expertise in digital marketing, SEO, brand growth, content strategy, and data-driven customer acquisition campaigns.',
    avatar: '/Ismoth_Ara.png',
  },
];