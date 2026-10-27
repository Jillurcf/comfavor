import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { PortfolioProject } from '@/lib/data/portfolio';

interface PortfolioCardProps {
  project: PortfolioProject;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
      {project.image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="mb-2 text-xl font-bold text-(--primary-color)">{project.title}</h3>
            {project.clientName && <p className="text-sm text-gray-500">{project.clientName}</p>}
          </div>
          <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-700">
            {project.priceLabel}
          </span>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-gray-600">{project.shortDescription}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.services.map((service) => (
            <span
              key={service}
              className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700"
            >
              {service}
            </span>
          ))}
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <Button
            asChild
            className="flex-1 rounded-xl bg-[var(--primary-color)] text-white hover:bg-green-700"
          >
            <Link href={`/portfolio/${project.slug}`} className="flex items-center justify-center gap-2">
              View Case Study
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="flex-1 rounded-xl border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-green-50"
          >
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              Visit Live Site
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
