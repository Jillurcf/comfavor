export type JobType = 'full-time' | 'part-time' | 'contract' | 'remote' | 'internship';

export interface Job {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: JobType;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  salaryRange: string;
  publishedAt: string;
  closingAt: string;
  featured: boolean;
}

export const jobs: Job[] = [
  {
    slug: 'senior-nextjs-developer',
    title: 'Senior Next.js Developer',
    department: 'Engineering',
    location: 'Dhaka, Bangladesh',
    type: 'full-time',
    description:
      'We are looking for an experienced Next.js developer to lead the development of our client projects. You will work closely with our design and backend teams to build high-performance, SEO-optimized web applications.',
    responsibilities: [
      'Lead the development of Next.js applications from concept to deployment',
      'Collaborate with UI/UX designers to implement pixel-perfect interfaces',
      'Write clean, type-safe TypeScript code with comprehensive test coverage',
      'Optimize applications for maximum speed and scalability',
      'Mentor junior developers and conduct code reviews',
      'Participate in architectural decisions and technology evaluations',
    ],
    requirements: [
      '3+ years of experience with React and Next.js',
      'Strong TypeScript skills with strict typing practices',
      'Experience with Tailwind CSS and modern styling approaches',
      'Familiarity with server-side rendering and static site generation',
      'Understanding of web performance optimization and Core Web Vitals',
      'Excellent problem-solving and communication skills',
    ],
    benefits: [
      'Competitive salary with performance bonuses',
      'Flexible working hours and remote work options',
      'Annual learning and development budget',
      'Modern laptop and equipment',
      'Health insurance coverage',
      'Regular team outings and events',
    ],
    salaryRange: 'BDT 80,000 – 120,000/month',
    publishedAt: '2026-07-01T00:00:00Z',
    closingAt: '2026-08-31T00:00:00Z',
    featured: true,
  },
  {
    slug: 'ui-ux-designer',
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Dhaka, Bangladesh',
    type: 'full-time',
    description:
      'Join our design team to create intuitive and beautiful user experiences for web and mobile applications. You will own the design process from research to final handoff.',
    responsibilities: [
      'Conduct user research and usability testing',
      'Create wireframes, prototypes, and high-fidelity mockups',
      'Collaborate with developers to ensure faithful implementation',
      'Maintain and evolve our design system',
      'Present design solutions to stakeholders and incorporate feedback',
    ],
    requirements: [
      '2+ years of experience in UI/UX design',
      'Proficiency in Figma and prototyping tools',
      'Strong portfolio demonstrating web and mobile design work',
      'Understanding of accessibility standards and inclusive design',
      'Knowledge of design systems and component-based design',
      'Excellent visual design skills with attention to detail',
    ],
    benefits: [
      'Competitive salary',
      'Flexible working hours',
      'Creative work environment',
      'Design conference attendance budget',
      'Health insurance coverage',
    ],
    salaryRange: 'BDT 50,000 – 80,000/month',
    publishedAt: '2026-07-15T00:00:00Z',
    closingAt: '2026-09-15T00:00:00Z',
    featured: true,
  },
  {
    slug: 'digital-marketing-specialist',
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Dhaka, Bangladesh',
    type: 'full-time',
    description:
      'We are seeking a creative digital marketing specialist to manage and execute marketing campaigns for Comfavor and our clients. You will drive brand awareness and lead generation through strategic digital channels.',
    responsibilities: [
      'Plan and execute digital marketing campaigns across SEO, social media, and email',
      'Manage Google Ads and social media advertising budgets',
      'Create engaging content for blog, social media, and email newsletters',
      'Analyze campaign performance and prepare regular reports',
      'Stay current with digital marketing trends and platform updates',
    ],
    requirements: [
      '2+ years of experience in digital marketing',
      'Experience with SEO tools and Google Analytics',
      'Proficiency in social media management and ad platforms',
      'Strong copywriting and content creation skills',
      'Data-driven mindset with analytical skills',
      'Knowledge of the Bangladeshi digital market',
    ],
    benefits: [
      'Competitive salary with performance bonuses',
      'Flexible working hours',
      'Marketing conference and training budget',
      'Health insurance coverage',
      'Growth opportunities within the company',
    ],
    salaryRange: 'BDT 40,000 – 65,000/month',
    publishedAt: '2026-07-20T00:00:00Z',
    closingAt: '2026-09-30T00:00:00Z',
    featured: false,
  },
  {
    slug: 'junior-react-developer',
    title: 'Junior React Developer',
    department: 'Engineering',
    location: 'Dhaka, Bangladesh',
    type: 'full-time',
    description:
      'Start your career with Comfavor as a Junior React Developer. You will learn from senior engineers while contributing to real client projects in a supportive environment.',
    responsibilities: [
      'Build and maintain React components following best practices',
      'Write clean, well-documented code under senior guidance',
      'Participate in daily stand-ups and sprint planning',
      'Fix bugs and implement minor features independently',
      'Learn and adopt new technologies as needed',
    ],
    requirements: [
      '0–1 year of experience with React',
      'Basic understanding of TypeScript',
      'Familiarity with Git version control',
      'Eagerness to learn and take on new challenges',
      'Computer Science degree or equivalent practical experience',
    ],
    benefits: [
      'Competitive entry-level salary',
      'Mentorship program with senior developers',
      'Learning resources and course subscriptions',
      'Flexible working hours',
      'Career growth path to senior roles',
    ],
    salaryRange: 'BDT 25,000 – 40,000/month',
    publishedAt: '2026-07-22T00:00:00Z',
    closingAt: '2026-09-01T00:00:00Z',
    featured: false,
  },
  {
    slug: 'intern-content-writer',
    title: 'Intern — Content Writer',
    department: 'Marketing',
    location: 'Remote',
    type: 'internship',
    description:
      'Gain hands-on experience in content marketing as a Content Writing Intern. You will create blog posts, social media content, and marketing materials while learning from our marketing team.',
    responsibilities: [
      'Write and edit blog posts on technology and business topics',
      'Create social media content for Facebook, LinkedIn, and other platforms',
      'Assist with email newsletter creation and scheduling',
      'Research industry trends and competitor content',
      'Help maintain content calendar and editorial guidelines',
    ],
    requirements: [
      'Currently pursuing or recently completed a degree in English, Marketing, or related field',
      'Excellent writing and editing skills in English',
      'Basic understanding of SEO principles',
      'Familiarity with social media platforms',
      'Strong research skills',
    ],
    benefits: [
      'Paid internship with stipend',
      'Flexible remote work schedule',
      'Mentorship and portfolio-building opportunities',
      'Potential for full-time conversion',
      'Certificate of completion',
    ],
    salaryRange: 'BDT 8,000 – 12,000/month',
    publishedAt: '2026-07-23T00:00:00Z',
    closingAt: '2026-08-30T00:00:00Z',
    featured: false,
  },
];

const publishedJobs = jobs.filter((j) => new Date(j.closingAt) > new Date()).sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}

export function getPublishedJobs(): Job[] {
  return publishedJobs;
}
