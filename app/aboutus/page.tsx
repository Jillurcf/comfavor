import type { Metadata } from 'next';
import Link from 'next/link';
import TeamCard from '@/components/shared/TeamCard';
import { team } from '@/lib/data/team';
import { Button } from '@/components/ui/button';
import { buildMetadata, routeMetadata } from '@/lib/constants/seo';

export const metadata: Metadata = buildMetadata(routeMetadata.about);

const stats = [
  { value: '5+', label: 'Years in Business' },
  { value: '100+', label: 'Projects Completed' },
  { value: '50+', label: 'Clients Served' },
  { value: '15+', label: 'Team Members' },
];

const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'React Native',
  'Flutter',
  'Tailwind CSS',
  'Figma',
  'AWS',
  'Docker',
];

const values = [
  {
    title: 'Innovation',
    description: 'We embrace emerging technologies to deliver forward-thinking solutions.',
  },
  {
    title: 'Integrity',
    description:
      'Transparent communication and ethical practices are the foundation of our client relationships.',
  },
  {
    title: 'Excellence',
    description:
      'We hold ourselves to the highest standards of quality in every project we undertake.',
  },
  {
    title: 'Local Focus',
    description: 'We understand the unique challenges and opportunities of the Bangladeshi market.',
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-gray-50 py-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-(--primary-color) underline decoration-4 underline-offset-8">
          About Comfavor
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Empowering Bangladeshi businesses with modern technology solutions since 2020.
        </p>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-(--primary-color) underline">
            Our Story
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Comfavor Information Technology was founded with a simple mission: bring
              enterprise-grade technology solutions to businesses in Bangladesh. We saw a gap
              between the global digital transformation trend and the tools available to local
              businesses, and we set out to bridge it.
            </p>
            <p>
              What started as a small team of passionate developers has grown into a full-service IT
              company offering web development, mobile applications, UI/UX design, and digital
              marketing. Every project we deliver is built with the understanding that technology
              should serve people, not the other way around.
            </p>
            <p>
              Today, Comfavor partners with startups, SMEs, and established enterprises across
              Bangladesh, helping them build digital products that drive real business results. Our
              team combines global best practices with local market insight to create solutions that
              work for the Bangladeshi context.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-(--primary-color) underline">
            Our Values
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl bg-white p-6 shadow-lg">
                <h3 className="mb-2 text-lg font-semibold text-(--primary-color)">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-(--primary-color) underline">
            Comfavor by the Numbers
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white p-6 text-center shadow-lg">
                <p className="text-3xl font-bold text-(--primary-color)">{stat.value}</p>
                <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-(--primary-color) underline">
            Our Team
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-(--primary-color) underline">
            Our Technology Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold text-(--primary-color) underline decoration-4 underline-offset-8">
          Explore Our Services
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-gray-600">
          From web and mobile development to UI/UX design and digital marketing — find the right
          solution for your business.
        </p>
        <Button asChild>
          <Link href="/services">View All Services</Link>
        </Button>
      </section>

      <section className="bg-green-600 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold underline decoration-white decoration-4 underline-offset-8">
            Get in Touch
          </h2>
          <div className="space-y-4 text-lg">
            <p>Dhaka, Bangladesh</p>
            <p>
              <a
                href="tel:+8801910336341"
                className="underline hover:text-green-200"
                rel="noopener noreferrer"
              >
                +880-1910336341
              </a>
            </p>
            <p>
              <a
                href="mailto:info@comfavor.com"
                className="underline hover:text-green-200"
                rel="noopener noreferrer"
              >
                info@comfavor.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
