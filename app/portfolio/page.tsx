import type { Metadata } from 'next';
import PortfolioCard from '@/components/shared/PortfolioCard';
import { portfolio } from '@/lib/data/portfolio';
import { buildMetadata, routeMetadata } from '@/lib/constants/seo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = buildMetadata(routeMetadata.portfolio);

export default function PortfolioPage() {
  const totalValue = portfolio.reduce((sum, project) => sum + project.price, 0);

  return (
    <div>
      <section className="bg-gray-50 py-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-(--primary-color) underline decoration-4 underline-offset-8">
          Our Portfolio
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Explore our completed projects and client work. Each project showcases our expertise in
          web development, UI/UX design, and digital solutions.
        </p>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 text-center shadow-lg">
              <p className="text-3xl font-bold text-(--primary-color)">{portfolio.length}+</p>
              <p className="mt-2 text-sm text-gray-600">Projects Completed</p>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-lg">
              <p className="text-3xl font-bold text-(--primary-color)">
                ৳{(totalValue / 1000).toFixed(0)}K+
              </p>
              <p className="mt-2 text-sm text-gray-600">Project Value</p>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-lg">
              <p className="text-3xl font-bold text-(--primary-color)">6</p>
              <p className="mt-2 text-sm text-gray-600">Happy Clients</p>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center shadow-lg">
              <p className="text-3xl font-bold text-(--primary-color)">100%</p>
              <p className="mt-2 text-sm text-gray-600">Satisfaction Rate</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((project) => (
              <PortfolioCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold text-(--primary-color) underline decoration-4 underline-offset-8">
          Have a Project in Mind?
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-gray-600">
          Let us bring your ideas to life with our expertise in web development, UI/UX design, and
          digital solutions.
        </p>
        <Button asChild>
          <Link href="/contact">Get Started</Link>
        </Button>
      </section>
    </div>
  );
}
