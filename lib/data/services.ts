export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  process: ServiceProcess[];
  technologies: string[];
  image?: string;
}

export const services: Service[] = [
  {
    slug: 'web',
    title: 'Website Development',
    tagline: 'Responsive and modern websites',
    description:
      'We build responsive, high-performance websites and web applications tailored to your business needs.',
    longDescription:
      'From corporate websites to complex web applications, Comfavor delivers modern, scalable solutions using the latest technologies. Our team specializes in React, Next.js, and Node.js to create fast, SEO-friendly, and maintainable web experiences that help Bangladeshi businesses establish a strong online presence.',
    image: '/web-dev.jpg',
    process: [
      {
        step: 1,
        title: 'Discovery',
        description:
          'We understand your business goals, target audience, and technical requirements.',
      },
      {
        step: 2,
        title: 'Design',
        description: 'Our designers create wireframes and high-fidelity mockups for your approval.',
      },
      {
        step: 3,
        title: 'Development',
        description: 'We build your website using modern frameworks with clean, maintainable code.',
      },
      {
        step: 4,
        title: 'Deployment',
        description: 'Your site goes live with proper hosting, SSL, and performance optimization.',
      },
      {
        step: 5,
        title: 'Support',
        description: 'We provide ongoing maintenance, updates, and technical support.',
      },
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    slug: 'mobile',
    title: 'Mobile App Development',
    tagline: 'iOS & Android apps',
    description:
      'We create native-feeling mobile applications for iOS and Android using cutting-edge cross-platform technologies.',
    longDescription:
      'Reach your customers on every device with custom mobile applications. Comfavor builds cross-platform apps using React Native and Flutter, delivering native performance and seamless user experiences across iOS and Android from a single codebase. We handle everything from concept to App Store and Google Play submission.',
    image: '/mobile-app.jpg',
    process: [
      {
        step: 1,
        title: 'Discovery',
        description: 'We define app objectives, target platforms, and feature roadmap.',
      },
      {
        step: 2,
        title: 'Design',
        description: 'UI/UX designers craft intuitive mobile interfaces and user flows.',
      },
      {
        step: 3,
        title: 'Development',
        description: 'We build and iterate on your app with regular progress updates.',
      },
      {
        step: 4,
        title: 'Testing',
        description: 'Rigorous QA across devices, screen sizes, and OS versions.',
      },
      {
        step: 5,
        title: 'Launch',
        description: 'App store submission, deployment, and post-launch monitoring.',
      },
    ],
    technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase', 'TypeScript'],
  },
  {
    slug: 'uiux',
    title: 'UI/UX Design',
    tagline: 'User-centered design',
    description:
      'We design intuitive, accessible, and beautiful interfaces that delight users and drive engagement.',
    longDescription:
      'Great design is more than aesthetics — it is about solving problems. Our UI/UX team creates user-centered designs through research, wireframing, prototyping, and testing. We ensure your digital products are not only beautiful but also intuitive and accessible to all users.',
    image: '/uiux-design.jpg',
    process: [
      {
        step: 1,
        title: 'Research',
        description: 'User research, competitor analysis, and requirement gathering.',
      },
      {
        step: 2,
        title: 'Wireframing',
        description: 'Low-fidelity layouts to establish structure and flow.',
      },
      {
        step: 3,
        title: 'Prototyping',
        description: 'Interactive prototypes for user testing and stakeholder feedback.',
      },
      {
        step: 4,
        title: 'Visual Design',
        description: 'High-fidelity mockups with your brand identity and design system.',
      },
      {
        step: 5,
        title: 'Handoff',
        description: 'Developer-ready assets, specs, and design system documentation.',
      },
    ],
    technologies: [
      'Figma',
      'Adobe XD',
      'Adobe Photoshop',
      'Illustrator',
      'Prototyping',
      'Design Systems',
    ],
  },
  {
    slug: 'marketing',
    title: 'Digital Marketing',
    tagline: 'Grow your online presence',
    description:
      'We help businesses build brand awareness and generate leads through data-driven digital marketing strategies.',
    longDescription:
      'In a competitive digital landscape, visibility matters. Our digital marketing services include search engine optimization (SEO), social media marketing, content marketing, and paid advertising. We create data-driven strategies tailored to the Bangladeshi market to help you reach your target audience and grow your business.',
    image: '/digital-marketing.jpg',
    process: [
      {
        step: 1,
        title: 'Audit',
        description: 'We analyze your current online presence, competitors, and target market.',
      },
      {
        step: 2,
        title: 'Strategy',
        description: 'A customized marketing plan with clear KPIs and budget allocation.',
      },
      {
        step: 3,
        title: 'Execution',
        description: 'Campaign implementation across selected channels and platforms.',
      },
      {
        step: 4,
        title: 'Monitoring',
        description: 'Real-time performance tracking and weekly reporting.',
      },
      {
        step: 5,
        title: 'Optimization',
        description: 'Data-driven adjustments to improve ROI and campaign performance.',
      },
    ],
    technologies: [
      'SEO',
      'Google Ads',
      'Social Media Marketing',
      'Content Marketing',
      'Analytics',
      'Email Marketing',
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
